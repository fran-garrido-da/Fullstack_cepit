// Diseñar un algoritmo que lea números enteros hasta teclear 0
//Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados
//Pensar cuidadosamente cómo debemos inicializar las variables 

import * as rlSync from "readline-sync"

console.clear()

let num:number = rlSync.questionInt("Ingrese numero: ")
let max:number = num
let min:number = num
let cont:number = 0
let suma:number = 0

while (num != 0){
    if (num >= max){
        max = num
    }else
        if (num <= min){
            min = num
        }
    cont++
    suma = suma+num    
    num = rlSync.questionInt("Ingrese numero: ")
}
console.log(`El minimo es ${min}, el maximo ${max} y el promedio es ${suma/cont}`)