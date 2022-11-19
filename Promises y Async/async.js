// //Async

// //setTimeout
// const contenedor=document.getElementById("ok");
// const botonVer=document.getElementById("ver");
// contenedor.innerHTML="<h1>Asincronia</h1>";

// botonVer.onclick=()=>{
//     let imagen=document.createElement("img");
//     imagen.setAttribute("src","./img/messi.jpg");
//     contenedor.appendChild(imagen);
//     setTimeout(()=>{
//         contenedor.removeChild(imagen);
//     }, 2000)
// }

// //ejemplo

// for (let letra of "hola") {
//     setTimeout(()=> {
//         console.log(letra)
//     },1000)
// }

// for (let letra of "mundo") {
//     setTimeout(()=> {
//         console.log(letra)
//     },3000)
// }

// //CALL STACK

// function pelarPapas(){
//     console.log("Estoy pelando papas");
// }

// function cortarPapas(){
//     console.log("Estoy cortando papas");
// }

// function freirPapas(){
//     console.log("Estoy friendo papas");
// }

// function calentarAcxeite(){
//     console.log("Calentando el aceite");
// }

// function prepararPapasFritas(){
//     pelarPapas();
//     cortarPapas();
//     freirPapas();
//     console.log("Listo a comer!!!")
// }

// prepararPapasFritas();


// //setInterval()

// setInterval(()=> {
//     console.log("Tic")
// },1000)


// //clearInterval()

// let counter = 0 

// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removio el intervalo")
//     }
// }, 1000);

// //ejemplo setInterval

// let boton=document.getElementById("btnTiempo");
// let segundero=document.getElementById("segundos");
// segundero.innerText="0";
// boton.onclick=()=>{
//     let intervalo=setInterval(()=>{
//         segundero.innerText=parseInt(segundero.innerText)+1;
//         if (segundero.innerText == "10"){
//             clearInterval(intervalo);
//         }
//     },1000);
// }