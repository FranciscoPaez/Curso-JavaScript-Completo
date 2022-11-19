console.log("hola");
localStorage.setItem("usuario","Evelyn");
localStorage.setItem("envioADomicilio",true);
localStorage.setItem("descuento",20)

//forma de obtener esos datos

let user = localStorage.getItem("usuario");
let envio = localStorage.getItem("envioADomicilio");
let descuento = localStorage.getItem("descuento");

console.log(user);
console.log(envio == "true");
console.log(parseInt(descuento));


//Session storage
sessionStorage.setItem("cantidad",3);
sessionStorage.setItem("precios",[3999,934,1222,2499]);

let precios = sessionStorage.getItem("precios");
console.log(precios);

//CONVERTIR UN STRING EN ARRAY
//metodo split

let listaPrecios = precios.split(",");
console.log(listaPrecios);

//pasar los strings a enteros
let listaPreciosFinal = listaPrecios.map((precio)=>parseInt(precio));
console.log(listaPreciosFinal)

//RECORRIENDO EL STORAGE
//El bulcle a emplear es FOR con el metodo KEY

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}

// ELIMINAR DATOS DEL STORAGE

localStorage.setItem('bienvenida', "Hola bienvenido!");
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear();   //Elimana toda la informacion
sessionStorage.clear(); //Elimina todaa la informacion