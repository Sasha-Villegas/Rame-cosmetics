import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext.js";


const Navbar = (props) => {

    const {cart} = useContext(CartContext)

    return (
        <header className="navbar">
            <Link to={'/'}>
            <img className='logo' src='/images/Ramé.png' alt='logo rame' width='300' height='150'/> 
            </Link>
            <a href="#lateral" className="header-open">
                <span className="fa-solid fa-bars"></span> 
            </a>
            <nav className="navba">
                <ul>
                    <li className="items">
                       <Link to={'/'} >Menu</Link>
                    </li>
                    <li className="items">
                       <Link to={`/category/Kits`} >Kits</Link>
                    </li>
                    <li className="items">
                       <Link to={`/category/Serum`}>Serum</Link>
                    </li>
                    <li className="items">
                       <Link to={`/category/Mask`}>Mask</Link>
                    </li>
                    <li className="items">
                       <Link to={`/category/Soap`}>Soap</Link>
                    </li>
                    <li className="items">
                       <Link to={`/category/Candles`}>Candles</Link>
                    </li>

                        {cart.length !== 0 ? <Link to={`/cart`}> <CartWidget/> </Link> : null }

                    <a href="#close" className="closeenlace"><i className="fa-solid fa-circle-xmark"></i></a>
                </ul>
                
            </nav>
        </header>
    );
}

export default Navbar;
    