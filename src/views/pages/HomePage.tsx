import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/typedHooks";
import { fetchProducts } from "../../data/store/products/productsAsyncThunks";
import FullwidthLayout from "../layouts/FullwidthLayout";
import ProductsList from "../components/ProductsList/ProductsList";
import SearchProducts from "../components/SearchProducts/SearchProducts";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
    const products = useAppSelector((state) => state.productsReducer.products);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!products.length) {
            setIsLoading(true);

            dispatch(fetchProducts()).then(() => {
                setIsLoading(false);
            });
        }
    }, []);

    return (
        <FullwidthLayout>
            <section className="products">
                <SearchProducts setIsLoading={setIsLoading} />
                {isLoading && <Loader />}
                {!isLoading && <ProductsList products={products} />}
            </section>
        </FullwidthLayout>
    );
};

export default HomePage;
