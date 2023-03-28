import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/typedHooks";
import { Product } from "../../../types/interfaces";
import { OrderEnum, ProductListHeadlines } from "../../../types/enums";
import {
    removeProductById,
    sortBy,
} from "../../../data/store/products/productsSlice";
import "./ProductsList.scss";

type ProductsListProps = {
    products: Product[];
};

const ProductsList: FC<ProductsListProps> = ({ products }) => {
    const dispatch = useAppDispatch();

    const [order, setOrder] = useState(OrderEnum.ASK);

    // Sort product list

    const sortByIdHandler = (headline: ProductListHeadlines) => {
        // Update local state
        setOrder(order === OrderEnum.ASK ? OrderEnum.DESC : OrderEnum.ASK);

        // Dispatch action with col name (HEADLINE) and order (ASC or DESC)
        dispatch(sortBy({ headline, order }));
    };

    // Remove product

    const removeProductByIdHandler = (id: number) => {
        dispatch(removeProductById(id));
    };

    return (
        <div className="products-list">
            <div className="products-list__row products-list__row--head">
                <div
                    className="products-list__col"
                    onClick={() => {
                        sortByIdHandler(ProductListHeadlines.ID);
                    }}
                >
                    Id
                </div>
                <div
                    className="products-list__col"
                    onClick={() => {
                        sortByIdHandler(ProductListHeadlines.TITLE);
                    }}
                >
                    Title
                </div>
                <div
                    className="products-list__col"
                    onClick={() => {
                        sortByIdHandler(ProductListHeadlines.DESCRIPTION);
                    }}
                >
                    Text
                </div>
                <div
                    className="products-list__col"
                    onClick={() => {
                        sortByIdHandler(ProductListHeadlines.PRICE);
                    }}
                >
                    Price
                </div>
                <div className="products-list__col">Photo</div>
                <div
                    className="products-list__col"
                    onClick={() => {
                        sortByIdHandler(ProductListHeadlines.RATING);
                    }}
                >
                    Rating
                </div>
                <div
                    className="products-list__col"
                    onClick={() => {
                        sortByIdHandler(ProductListHeadlines.STOCK);
                    }}
                >
                    Stock
                </div>
                <div
                    className="products-list__col"
                    onClick={() => {
                        sortByIdHandler(ProductListHeadlines.CATEGORY);
                    }}
                >
                    Category
                </div>
            </div>
            {products.map((item) => {
                return (
                    <div
                        className="products-list__row"
                        key={item.id}
                        onClick={() => removeProductByIdHandler(item.id)}
                    >
                        <div className="products-list__col">{item.id}</div>
                        <div className="products-list__col">{item.title}</div>
                        <div className="products-list__col">
                            {item.description}
                        </div>
                        <div className="products-list__col">{`${item.price}$`}</div>
                        <div className="products-list__col">
                            <div className="products-list__img">
                                <img src={item.thumbnail} alt="" />
                            </div>
                        </div>
                        <div className="products-list__col">{`${item.rating}/5`}</div>
                        <div className="products-list__col">{item.stock}</div>
                        <div className="products-list__col">
                            {item.category}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsList;
