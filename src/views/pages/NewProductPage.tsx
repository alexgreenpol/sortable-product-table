import ProductsForm from "../components/ProductsForm/ProductsForm";
import FullwidthLayout from "../layouts/FullwidthLayout";

const NewProductPage = () => {
    return (
        <FullwidthLayout>
            <section className="new-product">
                <h1>Add new product</h1>
                <ProductsForm />
            </section>
        </FullwidthLayout>
    );
};

export default NewProductPage;
