//Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos

import * as rlSync from "readline-sync"

console.clear()

let num1:number = rlSync.questionInt("Inserte primer numero: ")
let num2:number = rlSync.questionInt("Inserte segundo numero: ")
let sum:number = 0

if (num1<=num2){
    for (let i= num1;i<(num2+1);i++){
        sum = sum+i
    }console.log(sum)
}else{
    for (let i= num2;i<(num1+1);i++){
        sum = sum+i
    }console.log(sum)
}