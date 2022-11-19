// JSON

const objeto={nombre:"Francisco", nota:10};
localStorage.setItem("alumno",objeto);//No funciona

//CONVERCIONES A JSON

const objetoAJSON = JSON.stringify(objeto);
localStorage.setItem("alumnoJSON",objetoAJSON) 

//Traer algo del storage y convertirlo en su formato original

let jsonStorage = localStorage.getItem("alumnoJSON");
console.log(jsonStorage);

//Lo queremos transformar en el obejeto original

let jsonAObjeto = JSON.parse(jsonStorage);
console.log(jsonAObjeto);

//EJEMPLO, ALMACENAR ARRAY DE OBJETOS

//satar ejercicio
const productos = [{id: 1, producto:"Arroz", precio:125 },
                   {id: 1, producto:"Arroz", precio:125 },
                   {id: 1, producto:"Arroz", precio:125 },
                   {id: 1, producto:"Arroz", precio:125 }];
        
const guardarLocal= (clave, valor) => { localStorage.setItem(clave, valor)};
//Almacenat producto por producto
//for (const producto of productos) {
//    guardarLocal(producto.id, JSON.stringify(producto));
//}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

//OBTENER ARRAY ALMACENADO

class Producto {
    constructor(obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenados
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productosArray = [];
//Iteramos almacenados con for of para transformar todos los objetos a tipo producto.
for(const objeto of almacenados)
   productosArray.push(new Producto(objeto));
//Ahora tene,os objetos productos y podemos usar sus metodos
for(const producto of productosArray)
   producto.sumaIva();

console.log(productosArray);