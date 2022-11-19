//OPERADORES AVANZADOS
//SUGAR SYNTAX
//Forma de simplificar la escritura

//Operador ternario
//forma de escribir un if simplificado
//Ejemplo

// let temperatura = 31

// if (temperatura > 30) {
//     alert("Dia caluroso!")
// } else {
//     alert("Dia agradable")
// }

// //Lo convertimos en o.ternario

// temperatura > 30 ? alert("Dia caluroso!") : alert("Dia agradable");

//Globales
let miSuerte;
//DOM
const boton = document.getElementById("botonDados");
const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const resultado = document.getElementById("resultado");
//Funcion flecha
const arrojarDados=()=> {
    let dado1 = Math.round(Math.random()*5+1);
    let dado2 = Math.round(Math.random()*5+1);
    return [dado1,dado2];
}
boton.onclick=()=>{
    miSuerte = arrojarDados();
    dado1.value=miSuerte[0];
    dado2.value=miSuerte[1];
    let total=miSuerte.reduce((acu,dado)=>acu+dado,0);
    //console.log(total);
    ((total==7)||(total==11)) ? resultado.innerText="Ganaste 100usd":resultado.innerText="Perdiste";
}


//OPERADOR LOGICO AND
//Es una reduccion de un condicional
const carrito = []

if (carrito.length === 0) {
    console.log("El carrito esta vacio!")
}

//Con operador AND
carrito.length === 0 && console.log("El carrito esta vacio!")

//&&
console.log("\nOperador &&");
let numero=11;
let resul = numero > 8 && new Date();
//si la condicion es flasa, devuelve false.
//si la condicion es verdadera, devulve la fecha. 


//OPERADOR LOGICO OR
// ||
console.log("\nOperador ||");
let valores = [{},true,false,"","Pepe",0,23,undefined,NaN,null];
for (const valor of valores) {
    let salida=valor || "OTRO VALOR IMPUESTO";
    console.log(salida)
}

//??
console.log("\nOperador ??");
for (const valor of valores) {
    let salida=valor || "OTRO VALOR IMPUESTO";
    console.log(salida)
}

//DESESTRUCTURACION

const usuario = {
    nombre: "John Doe",
    edad: 32
}

// Es lo que se hacia antes
// let nombre = usuario.nombre
// let edad = usuario.edad

//AHORA
const {nombre,edad} = usuario

console.log(nombre)
console.log(edad)

//EJEMPLO
const socio={
    numeroSocio: 230,
    nombreSocio:"Francisco Paez",
    edad:43,
    actividades:{
        actividad1:"Futbol",
        actividad2:"Natacion"
    }
}

//Quiero guardar en un array el nombre y las actividades que que realiza el socio

const {nombreSocio,actividades:{actividad1},actividades:{actividad2}}=socio;

let listaActividadesSocio=[nombreSocio,actividad1,actividad2];
console.log(listaActividadesSocio);


//ALIAS
//Cambiar el nombre de las propiedades
const {nombreSocio:nom,actividades:{actividad1:a1},actividades:{actividad2:a2}}=socio;
let listaActividadesSocio2=[nom,a1,a2];
console.log(listaActividadesSocio2)

//DESESTRUCTURACION POR PARAMETROS

window.addEventListener('click', ( {x,y} ) => {
    console.log(x,y)
}) 

//OPERADOR SPREAD

const nombresArray = ["Francisco","Itzallana","Alyn"];
console.log(...nombresArray)//Muestra solo los datos, no lo devuelve en forma de arra: Francisco, Itzallana, Alyn.


//SPREAD CON ARRAYS

function sumar(x,z,y) {
    return x+y+z;
}

const numbers = [1,2,3];
let total=sumar(...numbers);
console.log("Total de la suma: " + total)

//DESESTRUCTURAR un array en un objeto

const lista = ["Perro","Gato","Hamster"];
const objeto = {...lista};

console.log(objeto);

//SPREAD CON OBJETOS

let obj1 = {banda:"Queen", anio:1980,genero:"ppop"};
let objetoClonado={...obj1};
console.log(objetoClonado);

let obj2={banda:"Guns",anio:1990};
let objetoMezclado = {...obj1,...obj2};
console.log(objetoMezclado);

