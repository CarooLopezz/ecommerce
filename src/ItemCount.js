import {useState, useEffect} from 'react'



export default function App() {
  const[mostrar, setMostrar] = useState(true);
  return (
    <div>
      <button onClick={() => setMostrar(false)}>Dejar de mostrar</button>
    {mostrar ? <MouseColor /> : null}
    </div>
  );
}
function MouseColor (){
  const[color,setColor] = useState("orange");
  // insertar dato del dom a react
  useEffect(() =>{
    function onMouseMove(event) {
      if(event.clientX < window.innerWidth / 2) {
        setColor("orange");
      }else {
        setColor(blue);
      }
    }
    window.addEventListener("mousemove", onMouseMove);
  });
  return <div style={{height:"100vh", background: color}} />;
}
// movimiento de mouse viene del Dom y no de react tramitando data del Dom AL REACT
// permite el dinamismo