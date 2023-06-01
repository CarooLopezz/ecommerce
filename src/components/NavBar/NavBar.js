import React from "react";
import {Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <>
                <div>
                <Link to ="/category/buzos">
                    <button>Buzo marrón</button>
                    <button>Buzo gris</button>
                    <button>Buzo rosado</button>
                </Link>
                </div>
                <div>
                <Link to ="/category/remera">
                    <button>Remera blanca</button>
                </Link>
                </div>
                <div>
                <Link to ="/category/pantalon">
                    <button>Pantalón naranja</button>
                </Link>
                </div>
                <div>
                <Link to ="/category/estiletos">
                    <button>Estiletos negros</button>
                </Link>
                </div>
            </>

        </nav>
    );
}
export default NavBar;