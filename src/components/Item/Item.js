// card
import React from 'react';
import {Link} from "react-router-dom";

const Item= ({product}) => {
  return (
    <div >
        <img  src={product.imagen} alt="product imagen" width="145px" />
        <div>
    <h3>{product.nombre}</h3>
    <p class="precio">Precio ${product.precio}</p>
    <Link to={`/Item/${product.id}`} className="button">Comprar</Link>
    </div>
    </div>
)
}

export default Item;