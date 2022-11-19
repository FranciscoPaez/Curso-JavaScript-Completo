//OBJETOS

const persona = {
    nombre: 'Francisco',
    apellido: 'Paez',
    edad: 19
}

console.log(persona)

//OBJETO LITERAL

const lente1 = {
    marco: "metalico",
    graduacion: 0.2,
    cristales: "vidrio"
}

console.log(lente1);
console.log(lente1.cristales)
console.log(lente1["marco"])

//MODIFICAMOS LAS PROPIEDADES
lente1.graduacion = 1;
console.log(lente1)

const lente2 = {
    marco:'plastico',
    graduacion: 1.5,
    cristales: 'plasrico'
}

console.log(lente2)

//CONSTRUCTORES

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona('Francisco', 25, 'Av. 9 de Julio 345');
const persona2  = new Persona('Itzallana', 20, 'Canteria 104');

console.log(persona1, persona2)


//

function Automovil(marca,modelo,anho){
    this.marca = marca;
    this.modelo = modelo;
    this.anho = anho;
}

const auto1=new Automovil ('Ford', 'Fiesta KD', 2012);
console.log(auto1)

//PIDO DATOS DE UN AUTO AL USUARIO
let marca = prompt('Ingrese la marca del auto: ');
let modelo = prompt('Ingrese modelo del auto: ');
let anho = parseInt(prompt('Ingrese el año del auto: '));
const auto2 = new Automovil(marca, modelo, anho);
console.log(auto2)

//METODOS DE STRINGS

let string = 'Muy buenos dias';
console.log(string);
console.log('La longitud del texto ingresado es de: ' + string.length + ' caracteres');
console.log(string.toLowerCase());

//METODOS PERSONALIZADOS

function Computadora(tipo, sistema){
    this.tipo = tipo;
    this.sistema = sistema;
    this.mostrarSistema=function(){console.log('Sistema: '+this.sistema)}
    this.mostrarTipo=function(){console.log('Tipo: '+this.tipo)}
}

const compu1=new Computadora('notebook','MacOS');
const compu2=new Computadora('desktop','Windows')

compu1.mostrarSistema();
compu2.mostrarSistema();
compu1.mostrarTipo();
compu2.mostrarTipo();

const compu3 = new Computadora(prompt('Tipo?'),prompt('Sistema?'))
console.log(compu3)

//FOR IN
//VAMOS A RECORRER EL OBJETO EN BUSCA DE PROPIEDADES

for(const propsMet in compu1){
    console.log("Propiedades o metodos: " + propsMet);
}

//CLASES

class Personita{
    constructor(nombre,edad,calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log('Hola soy' + this.nombre);
    }
}
const personal = new Personita('Itzallana', 39, 'Canteria 104');
personal.hablar();


