import { createAsyncThunk } from "@reduxjs/toolkit";

type NewProductType = {
    title: string;
    description: string;
    rating: string;
    stock: string;
    category: string;
    price: string;
};

export const fetchProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async () => {
        try {
            const response = await fetch("https://dummyjson.com/products/");

            if (!response.ok) {
                throw new Error(
                    `Status code: ${response.status}, Status text: ${response.statusText}`
                );
            }

            const data = await response.json();
            return data.products;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Unknown error.";
            console.error(message);
        }
    }
);

export const fetchProductsBySearchLine = createAsyncThunk(
    "products/searchProducts",
    async (query: string) => {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${query}`
            );

            if (!response.ok) {
                throw new Error(
                    `Status code: ${response.status}, Status text: ${response.statusText}`
                );
            }

            const data = await response.json();
            return data.products;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Unknown error.";
            console.error(message);
        }
    }
);

export const addNewProduct = createAsyncThunk(
    "products/addNewProduct",
    async ({
        title,
        description,
        rating,
        stock,
        category,
        price,
    }: NewProductType) => {
        try {
            const response = await fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    description,
                    rating,
                    stock,
                    category,
                    price,
                    thumbnail: "https://random.imagecdn.app/500/500", // Just for test in frontend
                }),
            });

            if (!response.ok) {
                throw new Error(
                    `Status code: ${response.status}, Status text: ${response.statusText}`
                );
            }

            const data = await response.json();
            return data;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Unknown error.";
            console.error(message);
        }
    }
);
