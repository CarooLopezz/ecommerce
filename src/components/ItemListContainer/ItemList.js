// componentes presentacionales


const ItemList = ({products}) => {
    
    return(
        <>
            {products.map((product) =><div key={product.id}>{product.id} </div>)}
        </>
    );
}
export default ItemList;