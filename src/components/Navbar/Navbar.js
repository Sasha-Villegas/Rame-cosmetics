
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";

const Navbar = () => {

    return (
        <header className="navbar">
            <img className='logo' src='images/Ramé.png' alt='logo rame' width='300' height='150'/>
            <a href="#lateral" className="header-open">
                <span className="fa-solid fa-bars"></span> 
            </a>
            <nav className="navba">
                <ul>
                    <li className="items">
                       <a href="#Menu">Menu</a>
                    </li>
                    <li className="items">
                       <a href="#Productos" >Products</a>
                    </li>
                    <li className="items">
                       <a href="#Tips">Tips</a>
                    </li>
                    <li className="items">
                       <a href="#Contacto">Contact</a>
                    </li>
                    <CartWidget />
                    <a href="#close" className="closeenlace"><i className="fa-solid fa-circle-xmark"></i></a>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
    