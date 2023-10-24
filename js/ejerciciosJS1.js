// Ejercio 1 mensaje  de alert
alert("seguro rompiste todo y vas decir que no hiciste nada como siempre ,que barbaro")

// Ejercicio 2 texto en pantalla 
document.write("<h1>hello beings without hearts </h1> " );

//Ejercicio 3 
console.log(3+5);

// ejercicio 4
let nombreUsuario = prompt("Ingrese su nombre para saber a quien reclamarle");
console.log("Hola " + nombreUsuario);

//ejercicio 5

let numero1 = parseInt(prompt("Ingrese el primer número para una suma"))
let numero2 = parseInt(prompt("Ingrese el segundo número para una suma"));
console.log("La suma de los números es: " + (numero1 + numero2));

//Ejercicio 6 condicionales 
let numero3 = parseInt(prompt("Adivinaremos cual es el mayor de los 2 numeros que elijas ahora"));
let numero4 = parseInt(prompt("Adivinaremos cual es el mayor de los 2 numeros que elijas ahora"));

if (numero3 > numero4) {
  console.log('El  numero  ' +numero3+ ' es mayor que ' + numero4);
} else {
  console.log('El  numero  ' +numero4+ ' es mayor que ' + numero3 )
}
// Ejercicio 7
let num3 = parseInt(prompt('Adivinaremos cual es el mayor de los 3 numeros que elijas Empezemos'));
let num4 = parseInt(prompt('Elije otro numero'))
let num5 =parseInt(prompt('Ahora elije el ultimo numero y te diremos cual es el mayor'))

if (num3 > num4 && num3 > num5){ 
    console.log('El numero '+num3+' es el mayor de los 3 que elejiste' );
}else if (num4 > num3 && num4 > num5){
    console.log('El numero '+num4+' es el mayor de los 3 que elejiste' );
} else{
    console.log('El numero '+num5+' es el mayor de los 3 que elejiste' );
}

// ejercicio 8
let numero = parseFloat(prompt("Ingrese un número y te diremos si es divisible por 2"));

if (numero % 2 === 0) {
  console.log('El número '+numero+' es divisible por 2');
} else {
  console.log("El número no es divisible por 2");
}
// Ejercicio 9 
let frase = prompt("Ingrese una frase");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let vocal = frase[i];
  if (vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u") {
    vocales += vocal + " ";
  }
}

console.log("Las vocales que aparecen en la frase son: " + vocales);