import React from "react";
import "./Presentation.css"
import { Link } from "react-router-dom";

const Inicio = () => {  

   

    return (
       <>
         <div className="Inicio">
            <img src="/images/Hello.png" alt="Hello" />
            <Link to= {"/inicio"} className = "boton" > View products </Link>
         </div>
       </>
    );
}  

export default Inicio;
