//DOM

console.dir(document.body.children);

//Acceder a los nodos
//getElementById


let seccion = document.getElementById("principal");
console.log(seccion.innerHTML);

let inputUno = document.getElementById("empresa");
console.log(inputUno.innerHTML);

//getElementByClassName

let paises=document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

//getElementByTagName

let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
console.log(parrafos[1].innerHTML);

//Cambiar estilos

seccion.style.background="yellow";

let titulo = document.getElementById("titulo");
titulo.innerText="Que frio que hace";
titulo.style.font="bold 40px arial";

parrafos[0].innerText = new Date().toLocaleDateString();

let labelUno = document.getElementsByTagName("label");

let boton = document.getElementById("boton");

function activarDark(){
    seccion.style.background="black";
    titulo.style.color="white";
    for(const parrafo of parrafos){
        parrafo.style.color="white";
    }
    for(const lab of labels){
        lab.style.color="white"
    }
    boton.innerText="Light Mode";
}

//CREACION DE ELEMENTOS

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>Buenos dias!!!</h2>";
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);



//Array de objetos literales

const productos = [{id:1, nombre: "Arroz", precio:125},
                   {id:2, nombre: "Fideo", precio:70},
                   {id:3, nombre: "Pan", precio:50},
                   {id:4, nombre: "Flan", precio:100}]

//Insertar textos en inputs
let campoEmpresa = document.getElementById("empresa");
campoEmpresa.value="MercadoLibre";

let stock = document.getElementById("cantidad");
stock.value=productos.length;

//Plantillas literales

let producto = { id: 1, nombre: "Arroz", precio: 125};
let concatenado = "ID : " + producto.id + " - Producto: " + producto.nombre + "$" + producto.precio;
let plantilla = `ID: ${producto.id} = Producto ${producto.nombre} $ ${producto.precio}`;
//El valor es identico pero la construccion de la plantilla es mas sencilla
console.log(concatenado);
console.log(plantilla);


//Tabla con DOM
let tabla=document.createElement("table");
tabla.className = "table table-striped"
let tablaBody = document.createElement("tbody");

for(const producto of productos){
    let fila = document.createElement("tr");
    fila.innerHTML=`
       <td>${producto.id}</td>
       <td>${producto.nombre}</td>
       <td>$ ${producto.precio}</td>`;
    tablaBody.appendChild(fila);
}

tabla.appendChild(tablaBody);

let lugarParaTabla = document.getElementById("inferior");
lugarParaTabla.appendChild(tabla);


// querySelector

let parrafomm = document.querySelector("#contenedor p")

let contenedor = document.querySelector("#contenedor")

parrafomm = document.querySelector(".texto")

