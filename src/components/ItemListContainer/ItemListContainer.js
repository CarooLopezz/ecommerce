//componentes containers
import React, { useEffect, useState } from "react";
import getList from "../ItemListContainer/getProducts";
import Loader from "../src/../Loader";
import ItemList from "./ItemList";
import Item from "../ItemDetailContainer/Item";
const ItemListContainer = () => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getList()
        .then((response) => setArrayList(response))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    },[])


    return(
    <div className="listContainer">
        {loading ? <Loader /> : <ItemList products ={arrayList} />}
    </div>
    )
}
export default ItemListContainer;