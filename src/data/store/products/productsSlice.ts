import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortProducts } from "../../../helpers/sortProducts";
import { Product, ProductListSortAttributes } from "../../../types/interfaces";
import {
    addNewProduct,
    fetchProducts,
    fetchProductsBySearchLine,
} from "./productsAsyncThunks";

type ProductsState = {
    products: Product[];
};

// Initial state

const initialState: ProductsState = {
    products: [],
};

// Creating new slice for products functionality

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        sortBy: (state, action: PayloadAction<ProductListSortAttributes>) => {
            state.products = sortProducts(state.products, action.payload);
        },
        removeProductById: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });

        builder.addCase(
            fetchProductsBySearchLine.fulfilled,
            (state, action) => {
                state.products = action.payload;
            }
        );

        builder.addCase(addNewProduct.fulfilled, (state, action) => {
            state.products = [action.payload, ...state.products];
        });
    },
});

export const { sortBy, removeProductById } = productsSlice.actions;

export default productsSlice.reducer;
