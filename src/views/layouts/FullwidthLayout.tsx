import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

type FullwidthLayoutProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
};

const FullwidthLayout: FC<FullwidthLayoutProps> = ({ children, className }) => {
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <>
            <Header />
            <main className={`page ${className}`}>
                <div className="container">{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default FullwidthLayout;
