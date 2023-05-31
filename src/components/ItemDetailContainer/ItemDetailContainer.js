import React from 'react';

const ItemDetailContainer= ({product}) => {
  return (
      <div >
        <img  src={product.imagen} alt="product imagen" width="145px" />
        <div>
      <h3>{product.nombre}</h3>
      <p class="precio">Precio ${product.precio}</p>
      <button className="button">Comprar</button>
    </div>
    </div>
  )
}

export default ItemDetailContainer;
