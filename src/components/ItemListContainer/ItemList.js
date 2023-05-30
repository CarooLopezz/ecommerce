// componentes presentacionales
import Item from "../ItemDetailContainer/Item.js";

const ItemList = ({products}) => {
    
    return(
        <>
            {products.map((product) =><div key={product.id}><Item product={product}/></div>)}
        </>
    );
}
export default ItemList;