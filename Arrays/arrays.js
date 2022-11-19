//ARRAYS EN JS

const listaCumple = ["tira de asado","chinchulin","vacio","chori","pan","mollejas","malbec","coca cola","carbon","ensalada"];

console.log(listaCumple);
console.log(listaCumple[2]);
console.log(listaCumple[4].toUpperCase());

for(let i=0;i<10;i++) {
    console.log('Elemento de array numero ' + i + ":" + listaCumple[i]);
}

//RECOORIDO DEL ARRAY

const numeros = [1,2,3,4,5];
for (let i = 0; i < 5; i++) {
    console.log(numeros[i]);
}

//METODOS Y PROPIEDADES  DE ARRAYS

console.log("Longitud de la lista: " + listaCumple.length);

//AGREGAR ELEMENTOS A LA LISTA

listaCumple.push('papas a la francesa')
console.log(listaCumple);

//AGREGAR ELEMENTOS AL COMIENZO DEL ARRAY

listaCumple.unshift("chimichurri")
console.log(listaCumple);

//SACAR ELEMENTOS DEL FINAL
listaCumple.pop();

//SACAR ELEMENTOS DEL PRINCIPIO
listaCumple.shift();

console.log(listaCumple);

//Borrar cantidad de elemenrtos desde una posicion agrgandole loa cantidad

listaCumple.splice(5,2);
console.log(listaCumple);

//COCATENAR

const perros = ["perro uno", "perro dos"]
const gatos = ["gato uno", "gato dos"]
const mascotas = perros.concat(gatos)
console.log(mascotas)

//indexOf busca la existencia de un elemnto en el array y lo devuelve

const ListaAprobados = ["Paez","Mora Plata","Messi"];
const notaAprobados = [10,7,8,9]
let alumno = prompt("Ingrese el apellido del alumno")
let indice = ListaAprobados.indexOf(alumno);
console.log(indice)
if (indice != -1){
    console.log("El alumno " + alumno + "aprobo con nota de: " + notaAprobados[indice])
} else {
    console.log("El alumno no aprobo")
}

//INCLUDES

const nombresPersonas = ["Francisco", "Itzallana", "Lionel"] 

console.log(nombresPersonas.includes("Francisco")) // --> True
console.log(nombresPersonas.includes("Lionel")) // --> True
console.log(nombresPersonas.includes("Juan")) // --> False

//REVERSE
//Reveirte el orden del array

nombresPersonas.reverse();
console.log(nombresPersonas)

//Array de objetos

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

console.log(libros)
//FOR OF recorre un array 

for(const libro of libros) {
    console.log(libro.isn)
    console.log(libro.titulo)
    console.log(libro.genero)
    console.log(libro.precio)
}

//EJEMPLO

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio =this.precio * 1.21; 
    }
}
//Declaramos un array de productos para almacenar los mismos
const productos = [];
productos.push(new Producto("arroz","125"));
productos.push(new Producto("fideos","170"));
console.log(productos);

//Iteramos el array con for of para modificarlo a todos
for(const producto of productos)
    producto.sumaIva();

console.log(productos);