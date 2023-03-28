import "react-app-polyfill/ie11";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useAppDispatch } from "../../hooks/typedHooks";
import { useNavigate } from "react-router-dom";
import "./ProductsForm.scss";
import InputField from "../InputField/InputField";
import { addNewProduct } from "../../../data/store/products/productsAsyncThunks";

interface ProductsFormValues {
    title: string;
    description: string;
    rating: string;
    stock: string;
    category: string;
    price: string;
}

// Validation schema

const ProductsFormSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    rating: Yup.number()
        .required("Required")
        .max(5, "Must be a number from 1 to 5"),
    stock: Yup.number()
        .typeError("You can add just numbers in this field")
        .required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.number()
        .typeError("You can add just numbers in this field")
        .required("Required"),
});

// Product form component

const ProductsForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                title: "",
                description: "",
                rating: "",
                stock: "",
                category: "",
                price: "",
            }}
            validationSchema={ProductsFormSchema}
            onSubmit={(values: ProductsFormValues) => {
                alert(
                    `THE ORDER SUCCESSFULLY RECIVED ${JSON.stringify(values)}`
                );

                dispatch(
                    addNewProduct({
                        title: values.title,
                        description: values.description,
                        rating: values.rating,
                        stock: values.stock,
                        category: values.category,
                        price: values.price,
                    })
                ).then(() => navigate("/"));
            }}
        >
            {({ errors, touched }) => (
                <Form className="products-form">
                    {/* Title input */}

                    <div className="products-form__input">
                        <InputField
                            name="title"
                            label="Product title"
                            errorField={errors.title}
                            touchField={touched.title}
                        />
                    </div>

                    {/* Author input */}

                    <div className="products-form__input">
                        <InputField
                            name="description"
                            label="Description"
                            errorField={errors.description}
                            touchField={touched.description}
                        />
                    </div>

                    {/* Rating input */}

                    <div className="products-form__input">
                        <InputField
                            name="rating"
                            label="Rating"
                            errorField={errors.rating}
                            touchField={touched.rating}
                        />
                    </div>

                    {/* Price input */}

                    <div className="products-form__input">
                        <InputField
                            name="price"
                            label="Price"
                            errorField={errors.price}
                            touchField={touched.price}
                        />
                    </div>

                    {/* Stock input */}

                    <div className="products-form__input">
                        <InputField
                            name="stock"
                            label="Stock"
                            errorField={errors.stock}
                            touchField={touched.stock}
                        />
                    </div>

                    {/* Category input */}

                    <div className="products-form__input">
                        <InputField
                            name="category"
                            label="Category"
                            errorField={errors.category}
                            touchField={touched.category}
                        />
                    </div>

                    {/* Submit button */}

                    <button type="submit" className="btn">
                        Create new product
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ProductsForm;
