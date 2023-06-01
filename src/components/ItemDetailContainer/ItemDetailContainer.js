
// componentes presentacionales
import React from "react";
import Loader from "../Loader";
import ItemList from "./ItemList";


const ItemDetailContainer = () => {

    const [ product, setProduct ] = useState({});

    useEffect(() => {
    fetch("../data.json")
    .then((response) => response.json())
    .then((result => {
    const products =result.find(({product}) =><div key={product.id}><Item product={product}/></div>){
        return(
            {product}
        )
    }
        
    .catch((err) => console.error(err))
    .finally(() =>setLoading(false))
},[])
}
        
export default ItemDetailContainer;