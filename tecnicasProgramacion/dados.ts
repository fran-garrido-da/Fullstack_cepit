/* Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
• Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor
• Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (dato ingresado por el usuario) */

import * as rlSync from "readline-sync"

console.clear()

let num:number = rlSync.questionInt("Cantidad de dados: ")

while (num>0){
    console.log(`La probabilidad de sacar 6 en todos los dados es de 1/${6**num}`)
    num = rlSync.questionInt("Cantidad de dados: ")
}
console.log("Hasta la vista")

//Hasta 397, mas dados da Infinity