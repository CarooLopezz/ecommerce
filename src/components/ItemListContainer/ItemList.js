// componentes presentacionales
import Item from "../ItemDetailContainer/Item";

const ItemList = ({products}) => {
    
    return(
        <>
            {products.map((product) =><div key={product.id}>{product.id} </div>)}
        </>
    );
}
export default ItemList;