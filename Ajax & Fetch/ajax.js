//GET
function obteneLibros(){
    const URLGET="https://api.itbook.store/1.0/new";
    fetch(URLGET)
        .then(resultado => resultado.json())//fin primera promesa=comienzo segunda preomesa
        .then(data =>{
            let libros=data.books;//guardo el array de libros
            console.log(libros);
            libros.forEach(libro => {
                document.querySelector("#libros").innerHTML+=`
                     <tr>
                        <td>${libro.title}</td>
                        <td><img src="${libro.image}"></td>
                     </tr>
                `
            });
        })
}

obteneLibros();

//POST

function enviarDatos(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
    let objeto={
        userId: 7,
        id:567,
        title: "Objeto de prueba",
        body: "bla bla bla"
    }
    fetch(URLPOST,{
        method:'POST',
        body:  JSON.stringify(objeto),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
          .then((respuesta) => respuesta.json())
          .then((datos)=>{
            //lo que retona el POST
            console.log("DATA QUE RETORNA A POST JSONPLACEHOLDER");
            console.log(datos); 
          })
}

enviarDatos();

//GET ARCHIVO LOCAL .json
function obtenerArchivo(){
    const URLJSON="/users.json";
    //agrego un boton 
    document.querySelector("#empleados").innerHTML='<button id="cargarEmpleados">JSON EMPLEADOS</button>';
    //evento para el boton
    document.querySelector("#cargarEmpleados").onclick=()=>{
        fetch(URLJSON)
            .then((respuesta)=>respuesta.json())
            .then((data)=>{
                let misEmpleados=data.usuarios;
                for(const empleado of misEmpleados){
                    document.querySelector("#empleados").innerHTML+=`
                        <h3>${empleado.nombre}</h3>
                        <p>${empleado.puesto}</p>
                    `
                }
            })
            .catch((error)=>{
                console.log("Error: "+error);
            });
    }
}

obtenerArchivo();

//AYNC AWAIT

const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
   
    data.forEach((post) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        document.body.append(div)
    })
}

pedirPosts()