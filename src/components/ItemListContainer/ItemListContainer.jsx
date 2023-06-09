//componentes containers
import { Link, useParams } from "react-router-dom";

function ItemListContainer () {
    const (id) = useParams();
    return(
        <div>
            <Link to="/category/buzos">
            <button>Buzos</button>
            </Link >
            <Link to="/category/remeras">
            <button>Remeras</button>
            </Link>
            <Link to="/categoy/sueters">
            <button>Sueters</button>
            </Link>
            <Link to="/category/estiletos">
            <button> Estiletos</button>
            </Link>
            <Link to="/category/shorts">
            <button> Shorts</button>
            </Link>
            <Link to="/category/pantalones">
            <button> Pantalones</button>
            </Link>

        {id && id === "Buzos" && (
        <div>
            <h1>Buzo marron</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Buzos</span>
        </div>
        )}
        {id && id === "Buzos" && (
        <div>
            <h1>Buzo gris</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Buzos</span>
        </div>
        )}
        {id && id === "Buzos" && (
        <div>
            <h1>Buzo rosado</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Buzos</span>
        </div>
        )}
        {id && id === "Buzos" && (
        <div>
            <h1>Buzo rojo</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Buzos</span>
        </div>
        )}
        {id && id === "Remeras" && (
        <div>
            <h1>Remera blanca</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Remeras</span>
        </div>
        )}
        {id && id === "Remeras" && (
        <div>
            <h1>Remera Azul</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Remeras</span>
        </div>
        )}
        {id && id === "Pantalones" && (
        <div>
            <h1>Pantalon naranja</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Pantalones</span>
        </div>
        )}
        {id && id === "Pantalones" && (
        <div>
            <h1>Jean Azul</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Jeans</span>
        </div>
        )}
            {id && id === "Estiletos" && (
        <div>
            <h1>Estiletos negros</h1>
            <p>Prenda de tela</p>
            <span>Categoría:Estiletos</span>
        </div>
        )}
        {id && id === "Shorts" && (
        <div>
        <h1>Short Azul</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Shores</span>
        </div>
        )}
        {id && id === "Sueters" && (
        <div>
            <h1>Sueter negro</h1>
            <p>Prenda de algodón</p>
            <span>Categoría:Sueters</span>
        </div>
    )}
    </div>
    );
}
export default  itemListContainer;