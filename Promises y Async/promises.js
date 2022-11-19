// //PROMISES

// new Promise ( (resolve, reject) => {
//     //Cuerpo de la promesa
// })

//VAMOS A VER UN EJEMPLO

// const eventoFuturo = (res) => {
//     return new Promise ( (resolve,reject) => {
//         setTimeout( ()=> {
//             res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
//         },2000)
//     })
// }

// //console.log(eventoFuturo(true))
// console.log(eventoFuturo(false))


// //THEN & CATCH
// //FINALLY

// eventoFuturo(true)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally( ()=> {
//         console.log("Fin del proceso")
//     })


    //Simulando peticion de datos

    const BD = [
        {id: 1, nombre: "Producto 1", precio: 1999},
        {id: 2, nombre: "Producto 2", precio: 2500},
        {id: 3, nombre: "Producto 3", precio: 3500},
        {id: 4, nombre: "Producto 4", precio: 3299},
    ]

    const pedirProductos = () => {
        return new Promise ( (resolve,reject) => {
            setTimeout(()=>{
                resolve(BD)
            }, 3000)
        })
    }

    //Inicializamos con un array vacio
    let productos = []

    const renderProds = (arr) => {
        //Funcion que genere la vista de los productos
    let lista=document.createElement("ul");
    for(let item of arr){
        let itemLista=document.createElement("li");
        itemLista.innerText=item.nombre;
        lista.appendChild(itemLista);
    } 
    document.getElementById("productos").appendChild(lista);
}
   
    //Asincronicamente pedimos los datos y generamos la vista
    pedirProductos()
        .then((res) => {
            productos = res
            renderProds(productos)
        })