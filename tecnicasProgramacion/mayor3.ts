//Desarrollar un algoritmo que dados tres numeros, determine cual es el mayor

import * as rlSync from "readline-sync";

console.clear();

console.log("Ingrese 3 numeros a comparar:");

let num1:number = rlSync.questionFloat("Ingrese primer numero: ");
let num2:number = rlSync.questionFloat("Ingrese segundo numero: ");
let num3:number = rlSync.questionFloat("Ingrese tercer numero: ");

if (num1>=num2){
    if (num1>=num3){
        console.log(num1 + " es el mayor");
    }else
        if(num1<=num3){
            console.log(num3 + " es el mayor");
        }
}else
    if(num1<=num2){
        if (num2>=num3){
            console.log(num2 + " es el mayor");
        }else
            if(num2<=num3){
                console.log(num3 + " es el mayor");
            }
    }