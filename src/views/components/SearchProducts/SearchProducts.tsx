import { FC, useCallback } from "react";
import debounce from "lodash.debounce";
import { fetchProductsBySearchLine } from "../../../data/store/products/productsAsyncThunks";
import { useAppDispatch } from "../../hooks/typedHooks";
import "./SearchProducts.scss";

type SearchProductsProps = {
    setIsLoading: (flag: boolean) => void;
};

const SearchProducts: FC<SearchProductsProps> = ({ setIsLoading }) => {
    const dispatch = useAppDispatch();

    const searchEventHandler = (inputValue: string) => {
        setIsLoading(true);

        dispatch(fetchProductsBySearchLine(inputValue)).then(() => {
            setIsLoading(false);
        });
    };

    const debounceFn = useCallback(debounce(searchEventHandler, 600), []);

    return (
        <div className="search-panel">
            <input
                type="text"
                className="search-panel__input"
                placeholder="Search..."
                onChange={(e) => {
                    debounceFn(e.target.value);
                }}
            />
        </div>
    );
};

export default SearchProducts;
