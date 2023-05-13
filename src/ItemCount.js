import {useState} from 'react'

function ItemCount() {
    const [contador,setContador] = useState(0)
  
  const sumarUno =() => {
    setContador(contador +1)
  }
  const restarUno = () => {
    setContador(contador -1)
  }
  return (
    <div>
      <button onClick={sumarUno}>+</button>
      <h3>{contador}</h3>
      <button onClick={restarUno}>-</button>
    </div>
  )
}

export default ItemCount
