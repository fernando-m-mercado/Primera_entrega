/*
let peso = prompt("introduzca su peso en Kg");

let altura = prompt ("introduzca su altura en metros (Ej: 1.75)");


let indice = peso / (altura **2 );

alert("Tu IMC es " + indice)

if (indice <= 18.4) {
    alert("Estas baj@ de peso");
}

if (indice >= 18.5 && indice <= 24.9) {
    alert("Estas en peso y forma OPTIMA amig@")
}

if (indice >= 30.0 ) {
    alert("Estas un poco fofis amig@ (OBESIDAD)")
}
*/


function alCuadrado(numero){
    let resultado = numero ** 2;
    return resultado
    
}

function division(numeroUno, numeroDos){
    let resultado = numeroUno / numeroDos;
    return resultado
}

let peso = parseFloat (prompt ("Ingrese su peso"));
let altura = parseFloat (prompt ("Ingrese su altura"));


let imc = division(peso, alCuadrado(altura));
    alert("Tu imc es " + imc)


