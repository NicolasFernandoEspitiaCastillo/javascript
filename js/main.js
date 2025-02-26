// 1. Cálculo del promedio de tres números e indicar si el estudiante aprobó o reprobó

// alert ("Ingrese las notas: ")

// let nota1 = Number (prompt("Ingrese nota 1: "))
// let nota2 = Number (prompt("Ingrese nota 2: "))
// let nota3 = Number (prompt("Ingrese nota 3: "))

// let total = Number (nota1 + nota2 + nota3) / 3
     

// if (total>=3.0) {
//     alert("Aprobó con un promedio de: " +total)
// }
// else{
//     alert("Reprobó con un promedio de: " +total)
// }





// 2. Determinar si un número es par o impar usando prompt

// let numero = prompt("Ingrese un número: ")

// if (numero % 2 === 0) {
//     console.log("El número " + numero + " es par.");
// } else {
//     console.log("El número " + numero + " es impar.");
// }

// 3. Suma de los primeros n números naturales usando un ciclo for.


// function sumaNumerosNaturales(n) {
//     let suma = 0;
//     for (let i = 1; i <= n; i++) {
//         suma += i;
//     }
//     return suma;
// }


// let n = 5;
// let resultado = sumaNumerosNaturales(n);
// console.log("La suma de los primeros " + n + " números naturales es: " + resultado);


// 4. 

let numero;

while (true) {
    numero = Number(prompt("Ingresa un número:"));
    
    // Verificamos si el valor ingresado es un número
    if (!isNaN(numero)) {
        break; // Si es un número válido, salimos del ciclo
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

// Validamos si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}
