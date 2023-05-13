import {useState} from "react";
import Personaje from "./Personaje";
const Personajes = () =>{
    const[persona, setPersona] = useState([
        {
            id:1,
            name: "Homero",
            job:"Inspector de seguridad sector 7-G",
            img:"https://images.milenio.com/g_HLbFa0cdqa7QgCkcMLHwpYP3k=/942x532/uploads/media/2020/08/06/homero-trabaja-en-la-planta_194_25_723_450.jpeg"
        },{
            
            id:1,
            name: "Clancy",
            job:"Jefe de departamento de policia",
            img: "https://www.clarin.com/img/2021/07/12/DuUrPjLgV_1256x620__2.jpg#1626133420555"
        },{
            id:1,
            name: "Stuart",
            job:"musico",
            img: "https://static.wikia.nocookie.net/simpsons/images/2/2b/Stuart.png/revision/latest?cb=20130720190632"
        },{
            id:1,
            name: "Ned",
            job:"comerciante",
            img:"https://www.lavanguardia.com/files/image_948_465/uploads/2015/05/14/5fa283960061f.jpeg"
        },
]);


    return(
        <div className="row">
            {persona.map((p)=>{
                return(
                    <Personaje
                    key={p.id}
                    name={p.name}
                    job={p.job}
                    img={p.img}
                />
                );
            })}
        </div>
    )
}
export default Personajes;

    