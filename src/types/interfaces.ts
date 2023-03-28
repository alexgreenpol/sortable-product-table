import { OrderEnum, ProductListHeadlines } from "./enums";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    category: string;
    thumbnail: string;
}

export interface ProductListSortAttributes {
    order: OrderEnum;
    headline: ProductListHeadlines;
}
