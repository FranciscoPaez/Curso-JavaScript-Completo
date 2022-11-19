//Funciones simples

function saludar() {
    console.log('Holaa!!')
}

saludar();
saludar();

//Funcion con parametros

function frase(parametro1, parametro2) {
    console.log(parametro1 + ' ' + parametro2)
}

frase("Hola", "Francisco");
frase("Buenos", "dias")

//calculo

function calcularDescuento(precioProducto){
    let precioFinal = precioProducto * 0.9;
    console.log("En efectivo $ " + precioFinal);
}

calcularDescuento(parseFloat(prompt('Ingrese el precio del que desea saber el descuento: ')))

//Return 

function sumar (num1, num2) {
    return num1 + num2;
}

let resultado = sumar (500,500);

console.log('El resultado de la suma es: ' + resultado);

calcularDescuento(resultado)

// Calculadora

function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;    
    }
}

let primerNumero = parseInt(prompt('Ingrese primer numero: '))
let segundoNumero = parseInt(prompt('Ingrese segundo numero: '))
let operacion = prompt(' + para sumar\n - para restar\n * para multiplicar\n / para dividir')
resultado = calculadora(primerNumero,segundoNumero, operacion)
console.log(resultado)

// funciones flechas

const saludar2 =()=>{
    let nombre = prompt('Ingresa su nombre: ');
    alert('Buenos dias ' + nombre);
}

saludar2();
