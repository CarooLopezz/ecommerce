const products = [
    [{
        "id": 1,
        "nombre":"Buzo marron",
        "talle":"L",
        "precio":14000,
        "imagen":"./assets/img/img1.jpg",
        "apodo":"Chica morocha con buzado marrón y pantalón jean celeste."
        },
        
        {
        "id": 2,
        "nombre":"Buzo gris",
        "talle":"M",
        "precio":16150,
        "imagen":"./assets/img/img2.jpg",
        "apodo":"Chico morocho con buzo gris y pantalón neegro."
        },
    
        {
        "id": 3,
        "nombre":"Buzo rosado",
        "talle":"X",
        "precio":11640,
        "imagen":"./assets/img/img3.jpg",
        "apodo":"Chica morocha con buzo rosado y pantalon blanco."
        },
    
        {
        "id": 4,
        "nombre":"Remera blanca",
        "talle":"X",
        "precio":7050,
        "imagen":"./assets/img/img4.jpg",
        "apodo":"Chico morocho con remera blanco y jeans azul."
        },
    
        {
        "id": 5,
        "nombre":"Pantalon naranja",
        "talle":"42",
        "precio":16123,
        "imagen":"./assets/img/img5.jpg",
        "apodo":"Conjunto naranja deportivo."
        },
    
        {
        "id": 6,
        "nombre":"Estiletos negros",
        "talle":"41",
        "precio":10470,
        "imagen":"./assets/img/img6.jpg",
        "apodo":"Chica con bandana azul, pantalón blanca con estiletos negros."
        }
        
    ]
    
]

const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}
export default getList;
