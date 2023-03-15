// reto 2

function Suma (num1 = 0, num2, num3){
    let sum;
sum = num1 + num2 + num3;
console.log("Suma = ", sum)
} 

// num1 = 23;
// num2 = 20;

Suma(4, 8, 10);

// sum = num1 + num2;
// subs = num1 - num2;
// mult = num1 * num2;
// div = num1 / num2;



function Resta (num1 = 0, num2){
let subs;
subs = num1 - num2;
console.log("Resta = ", subs)
} 

Resta(8, 3);



function Multiplicar (num1 = 0, num2){
let mult;
mult = num1 * num2;
console.log("Multiplicación = ", mult)
} 

Multiplicar(20, 2);



function Dividir (num1 = 0, num2){
let div;
div = num1 / num2;
console.log("División = ", div)
} 

Dividir(20, 2);


function cuadrado (num1 = 0, num2){
    let numeroCuadrado;
    numeroCuadrado = Math.pow(num1, num2);
    console.log("Cuadrado = ", numeroCuadrado)
    } 
    
    cuadrado(2, 4);


module.exports = {Suma, Resta, Multiplicar, Dividir, cuadrado};

