
import "../style/navbar.css";

const Navbar = () => {

    return (
        <header className="navbar">
            <img className='logo' src={require('../images/Ramé.png')} alt='logo rame' width='300' height='150'/>
            <a href="#lateral" class="header-open">
                <span class="fa-solid fa-bars"></span> 
            </a>
            <nav className="navba">
                <ul>
                    <li className="items">
                       <a href="#Menu">Menu</a>
                    </li>
                    <li className="items">
                       <a href="#Productos" >Productos</a>
                    </li>
                    <li className="items">
                       <a href="#Tips">Tips</a>
                    </li>
                    <li className="items">
                       <a href="#Contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
    