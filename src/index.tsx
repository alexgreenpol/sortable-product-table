import React from "react";
import ReactDOM from "react-dom/client";
import "./views/assets/styles/styles.scss";
import App from "./views/app/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
