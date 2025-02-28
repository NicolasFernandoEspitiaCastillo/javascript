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


// 4.  Validar si un número es positivo, negativo o cero con while

// function validarNumero() {
//     let numero = Number(prompt("Introduce un número:"));
  
//     while (isNaN(numero)) {
//       alert("Por favor, introduce un número válido.");
//       numero = Number(prompt("Introduce un número:"));
//     }
  
//     if (numero > 0) {
//       console.log("El número es positivo.");
//     } else if (numero < 0) {
//       console.log("El número es negativo.");
//     } else {
//       console.log("El número es cero.");
//     }
//   }
  
//   validarNumero();
  
// 5. Verificar si un número es primo con un ciclo while

// function esPrimo(num) {
//     // Si el número es menor o igual a 1, no es primo
//     if (num <= 1) {
//         return false;
//     }

//     let i = 2;
//     // Ciclo while para verificar divisores
//     while (i <= Math.sqrt(num)) {
//         if (num % i === 0) {
//             // Si encuentra un divisor, no es primo
//             return false;
//         }
//         i++;
//     }

//     // Si no encontró divisores, el número es primo
//     return true;
// }

// // Ejemplo de uso
// console.log(esPrimo(7));  // true
// console.log(esPrimo(10)); // false
// console.log(esPrimo(13)); // true
// console.log(esPrimo(20)); // false