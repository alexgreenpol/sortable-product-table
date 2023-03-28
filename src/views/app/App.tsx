import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../../data/store";
import HomePage from "../pages/HomePage";
import NewProductPage from "../pages/NewProductPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/new-product",
            element: <NewProductPage />,
        },
    ]);

    return (
        <Provider store={store}>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </Provider>
    );
};

export default App;
