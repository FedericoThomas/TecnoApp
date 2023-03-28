import React from "react";
import Cart from "./CartWidget";



const NavBar = () => {
    return(
        <div>
            
            <nav id="Navigation" >
                <h1 id="Logo">TecnoApp</h1>
                <a href='Productos' id="Link">Productos</a>
                <a href='Celulares' id="Link">Celulares</a>
                <a href='Notebook' id="Link">Notebooks</a>
                <a href='Gamming' id="Link">Gamming</a>
                <Cart/>
            </nav>

        </div>
    );
}

export default NavBar