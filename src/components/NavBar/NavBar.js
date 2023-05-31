import React from "react";
import {Link , useParams} from "react-router-dom";

function NavBar() {
    const( id ) = useParams();
    return (
        <nav>
            <div>
                
                <Link to ="/item:id/1">
                    <button>Buzo marrón</button>
                </Link>
                </div>
                <div>
                <Link to ="/item:id/2">
                    <button>Buzo gris</button>
                </Link>
                </div>
                <div>
                <Link to ="/item:id/3">
                    <button>Buzo rosado</button>
                </Link>
                </div>
                <div>
                <Link to ="/item:id/4">
                    <button>Remera blanca</button>
                </Link>
                </div>
                <div>
                <Link to ="/item:id/5">
                    <button>Pantalón naranja</button>
                </Link>
                </div>
                <div>
                <Link to ="/item:id/6">
                    <button>Estiletos negros</button>
                </Link>
                </div>
                

        </nav>
    );
}
export default NavBar;