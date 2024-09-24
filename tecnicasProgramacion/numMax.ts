//Leer valores hasta que se introduzca un cero (0)
//El usuario puede introducir valores positivos y negativos
//Encontrar el máximo de los elementos que se introdujeron
//Analizar cómo cambia el programa para hallar el mínimo

import * as rlSync from "readline-sync"

console.clear();

let salida:number = rlSync.questionInt("Ingrese numeros para determinar el maximo: ");
let max:number = salida;

while (salida != 0){   
    if (salida>max){ 
        max = salida;
    }
    salida = rlSync.questionInt("Ingrese numeros para determinar el maximo: ");
}
console.log(`El maximo es ${max}`);