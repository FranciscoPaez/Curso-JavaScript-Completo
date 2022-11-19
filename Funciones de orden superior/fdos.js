//FUNCIONES DE ORDEN SUPERIOR

//Retornar funciones

function mayorqueQue(n) {
    return (m) => m > n
}
let mayorqueQueDiez = mayorqueQue(10)

console.log(mayorqueQueDiez(12)) // => True
console.log(mayorqueQueDiez(9))  // => False

let mayorDeEdad = mayorqueQue(21);
if(mayorDeEdad(parseInt(prompt("Ingrese su edad")))){
    console.log("Puede ingresar")
} else {
    console.log("No pueden ingresar menores")
}

//FUNCION QUE RECIBE FUNCION COMO APRAMETRO

const preciosProductos = [1099,1000,9543,23450,1200,13333];
console.log(preciosProductos)

function realizar(operacion,lista){
    for(const elemento of lista){
        operacion(elemento);
    }
}

let total=0;
function sumarTotal(precio){
    total += precio;
}

function calcularIva(precio){
    console.log("Precio con IVA: "+ precio * 1.21)
}

realizar(sumarTotal,preciosProductos);
console.log("La totalidada de productos acumulados es de: $" + total)

realizar(calcularIva,preciosProductos);



//FUNCIONES FLECHAS

function porCadaUno(arr, fn ) {
    for (const el of arr) {
        fn(el)
    }
}

const listaDeViaje = ["abrigos","remeras","pantalones","zapatillas"];

const aMayus = [];

porCadaUno(listaDeViaje, (prenda)=>{
    aMayus.push(prenda.toUpperCase());
})

console.log(aMayus);

//METODOS DE BUSQUEDA Y TRANSFORMACION

//forEach

const libros= [
    {
        isn:"2345123",
        titulo:"Harry Potter",
        genero:"Aventuras",
        precio:230.00
    },
    {
        isn:"999999",
        titulo:"Harry Potter 2",
        genero:"Aventuras",
        precio:210.00
    },
    {
        isn:"2345144",
        titulo:"Harry Potter 3",
        genero:"Aventuras",
        precio:299.00
    }
];

//imprimir el titulo de cada titulo

libros.forEach((libro)=>{console.log("Titulo: "+libro.titulo)});

//FIND
//BUSCAMOS U LIBRO POR SU NOMBRE


let encontrado = libros.find((libro)=> libro.titulo == "Harry Potter 3");
console.log(encontrado);
//buscar uno que no esxiste
encontrado = libros.find((libro)=> libro.titulo == "Harry Potter 6");
console.log(encontrado);//undefined


//FILTER

//Busca todos los elementos del array que cumplan una condicion 

const listaBaratos = libros.filter((libro)=>libro.precio<250);
console.log(listaBaratos);

//SOME
//informa true si existe, false si no existe

const existe = libros.some((libro)=>libro.genero == "Drama");
console.log(existe)

//MAP
//Nuevo array con la trabnsformacion solicitada

const preciosConIVA=libros.map((libro)=>libro.precio *1.21);
console.log("CON IVA")
console.log(preciosConIVA);

const preciosEnEfectivo = libros.map((libro)=>libro.precio * 0.9);
console.log("CON DESCUENTO")
console.log(preciosEnEfectivo)


//Aplicar map a todo el objeto 

const librosConIVA = libros.map((libro)=>{
    return{
        isn: libro.isn,
        titulo: libro.titulo.toUpperCase(),
        genero: libro.genero,
        precio: libro.precio * 1.21
    }
}) 

console.log(librosConIVA)


//REDUCE
//Sumador de precios

const totalPrecios = librosConIVA.reduce((acumulador,libro)=>acumulador+libro.precio,0);
console.log("Total de precios con IVA INC.: $" + totalPrecios)


//SORT
//Ordeanr el array de forma ascendente o descendente

const numerosLista = [1,4,3,6];
console.log("Lista sin ordenar")
console.log(numerosLista)
console.log("De mayor a menor")
numerosLista.sort((a,b)=>a-b);//de mayor a menor
console.log(numerosLista)
console.log("De menor a mayor")
numerosLista.sort((b,a)=>b-a);//de menor a mayor
console.log(numerosLista)


// EL OBJETO MATH

//Math.min() -- Math.min()
console.log("Numero maximo de la lista")
console.log(Math.max(55,33,0,-2,130,-22,5));
console.log("Nuemro minimo de la lista")
console.log(Math.min(55,33,0,-2,130,-22,5));