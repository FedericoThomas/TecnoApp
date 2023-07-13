import React from "react";
import Cart from "./CartWidget";
import {Link, useNavigate} from "react-router-dom"



const NavBar = () => {

    const navigate = useNavigate()
    return(
        <div>
            
            <nav id="Navigation" >
                <h1 id="Logo" onClick={()=> navigate('/')}>TecnoApp</h1>
                <Link to='/category/smartphone' id="link">Smartphone</Link>
                <Link to='/category/notebook' id="link">Notebooks</Link>
                <Link to='/category/gamming' id="link">Gamming</Link>
                <Cart/>
            </nav>

        </div>
    );
}

export default NavBar