//Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
//En el caso de ser 0 (cero) el algoritmo deberá informarlo 

import * as rlSync from "readline-sync";

console.clear();

let num:number = rlSync.questionInt("Ingrese numero: ");

if (num == 0){
    console.log("El numero es 0");
}else
    if ((num%2) == 0){
        console.log("Es par");
    }else
        console.log("Es impar");