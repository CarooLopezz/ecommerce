//componentes containers
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import ItemList from "./ItemList";




const ItemListContainer = () => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

    fetch("../data.json")
    .then((res) => res.json())
    .then((data) => setArrayList(data.products))
    .catch((err) => console.error(err))
    .finally(() =>setLoading(false))
},[])

console.log(arrayList);

    return(
    <div className="listContainer">
        {loading ? <Loader /> : <ItemList products ={arrayList} />}
    </div>
    )
}
export default ItemListContainer;