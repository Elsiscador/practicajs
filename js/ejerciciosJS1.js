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
  console.log('El primer numero que es ' + numero3 + ' es mayor que ' + numero4);
} else {
  console.log('El segundo numero que es' + numero4 + ' es mayor que ' + numero3 )
}
// Ejercicio 7
let num3 = parseInt(prompt('Adivinaremos cual es el mayor de los 3 numeros que elijas ahora'));
let num4 = parseInt(prompt('Adivinaremos cual es el mayor de los 3 numeros que elijas ahora'))
let num5 =parseInt(prompt('Adivinaremos cual es el mayor de los 3 numeros que elijas ahora'))

if (num3 > num4 && num3 > num5){ 
    console.log("El primer número de los 3 es el mayor");
}else if (num4 > num3 && num4 > num5){
    console.log("El segundo número de los 3 es el mayor");
} else{
    console.log('El tercer numero de los 3 es mayor');
}

// ejercicio 8
let numero = parseFloat(prompt("Ingrese un número y te diremos si es divisible por 2"));

if (numero % 2 === 0) {
  console.log("El número es divisible por 2");
} else {
  console.log("El número no es divisible por 2");
}
// Ejercicio 9 
let frase = prompt("Ingrese una frase");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let caracter = frase[i].toLowerCase();
  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    vocales += caracter + " ";
  }
}

console.log("Las vocales que aparecen en la frase son: " + vocales);