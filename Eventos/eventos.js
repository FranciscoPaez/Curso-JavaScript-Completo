//EVENTOS

//addEventListener()
let boton = document.getElementById("miBoton");
//OPCION 1
boton.addEventListener("click",interactuar);

function interactuar() {
    alert("Buenos dias, hoy es: " + new Date());
}

//OPCION 2
boton.onclick=()=>{console.log("Hiciste click")};


boton.onmousemove=()=>{
    console.log("No me toques!");
    boton.className="btn btn-danger"
}

boton.onmouseout=()=>{
    boton.className="btn btn-success"
}


//EVENTOS DE TECLADO

let campoNombre = document.getElementById("nombre");
let campoEdad = document.getElementById("edad");
campoEdad.onkeydown=()=>{console.log("Presionaste una tecla")};
campoEdad.onkeyup=()=>{console.log("Presionaste una tecla")};

//EVENTO CHANGE

campoEdad.onchange=()=>{
    console.log("Cambio el texto del campo edad");
    console.log("Texto actualizado: " + campoEdad.value)
}


//EVENTO INPUT

campoNombre.oninput=()=>{
    if(!isNaN(campoNombre.value)){
        campoNombre.style.color="red";
    }else{
        campoNombre.style.color="black "
    }
}

//EVENTO SUBMIT

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",validarFormulario);

function validarFormulario(e){
    if((isNaN(campoEdad.value))||(campoNombre.value=="")){
        e.preventDefault();
        alert("Ingrese nombre o edad valida");
    }
}