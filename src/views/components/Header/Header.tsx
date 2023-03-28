import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header__content">
                    <div className="site-header__logo">Products table</div>
                    <nav className="site-header__menu">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/new-product">New product</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
