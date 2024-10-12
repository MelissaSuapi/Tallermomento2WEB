
// punto 4
const numeros = [5,8,12,15,2,4,18,21];

//punto1, multiplicar por 2

const multiplicacion = numeros.map(num => num *2 );
console.log(multiplicacion);


//punto 2, maoyores que 10
const mayoresQueDiez = numeros.filter(function(numero)
 { return numero > 10; 
    });

console.log(mayoresQueDiez);


//punto3, suma los onumero filtrados

const suma = mayoresQueDiez.reduce(function(sumar, numero){
    return sumar + numero
});
console.log(suma);

