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


class Persona {
    constructor (nombre,sexo,edad,peso,altura){
        this.nombre = nombre;
        this.sexo = sexo;
        this.altura = altura;
        this.edad = edad;
        this.peso = peso;
    }     
    infoPersona(){
        return `
        Nombre: <b>${Persona.nombre} </b></br>
        Peso: <b>${peso}  </b></br>
        sexo: <b>${this.sexo}  </b></br>
        Edad: <b> ${this.edad} </b></br>
        Altura: <b>${this.altura}  </b></br>
        `;
    } 
}

 class Entrenar extends Persona {
    constructor (nombre,sexo,edad,peso,altura){
       super (nombre,sexo,edad,peso,altura);
     }
    bajarPeso(){
       console.log ("estoy bajando de peso, soy " + persona1.nombre);
     }
 }


persona1 = new Persona ("Esteban", "Hombre", "45 años", "86 kg", "1.80 mts")
persona2 = new Persona ("Clara","Mujer", "30 años", "60kg","1.70 mts" )


// persona1.bajarPeso();

console.log(
    `
    Nombre: ${persona1.nombre} 
    Peso: ${persona1.peso} 
    sexo: ${persona1.sexo}
    Edad: ${persona1.edad} 
    Altura: ${persona1.altura}

    Nombre: ${persona2.nombre} 
    Peso: ${persona2.peso} 
    sexo: ${persona2.sexo}
    Edad: ${persona2.edad} 
    Altura: ${persona2.altura}
    `);



document.write(persona1.infoPersona

)



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



     if (imc <= 18.4) {
        alert("Estas baj@ de peso");
        document.write("Estas baj@ de peso");
    }
    
    if (imc >= 18.5 && imc <= 24.9) {
        alert("Estas en peso y forma OPTIMA amig@");
        document.write("Estas en peso y forma OPTIMA amig@");
    }
    
    if (imc >= 30.0 ) {
        alert("Estas un poco fofis amig@ (OBESIDAD)");
        document.write("Estas un poco fofis amig@ (OBESIDAD)");

        }