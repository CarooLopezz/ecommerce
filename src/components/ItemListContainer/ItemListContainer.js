import{Link , useParams} from "react-router-dom";

function ItemListContainer () {
    const{id} = useParams();
    return (
    <div>
        <Link to="/category/pants">
            <button>Pantalones</button>
        </Link>
        <Link to="/category/shoes">
        <button>Zapatos</button>
        </Link >

        {id && id ==="pants" && (
        <div>
            <h1>Pantalon</h1>
            <p>Esta es la descripción del producto 1 </p>
            <span>Catagoria: Pantalon</span>
        </div>
    )}
    {id && id === "shoes" && ( 
        <div>
            <h1>Zapato </h1>
            <p>Esta es la descripción del producto 1 </p>
            <span>Catagoria: Zapato</span>
            <button>Ir al detalle</button>
        </div>
    )}
    </div>       
            
    );
}
export default ItemListContainer;