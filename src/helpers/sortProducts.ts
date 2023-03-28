import { OrderEnum } from "../types/enums";
import { Product, ProductListSortAttributes } from "../types/interfaces";

export const sortProducts = (
    products: Product[],
    options: ProductListSortAttributes
) => {
    return products.sort((a, b) => {
        const { headline, order } = options;

        let aString;
        let bString;

        if (typeof a[headline] === "string") {
            aString = String(a[headline]).toLocaleLowerCase();
            bString = String(b[headline]).toLocaleLowerCase();
        } else {
            aString = Number(a[headline]);
            bString = Number(b[headline]);
        }

        if (order === OrderEnum.DESC) {
            if (aString > bString) {
                return 1;
            }

            if (aString < bString) {
                return -1;
            }
        }

        if (order === OrderEnum.ASK) {
            if (aString < bString) {
                return 1;
            }

            if (aString > bString) {
                return -1;
            }
        }

        return 0;
    });
};
