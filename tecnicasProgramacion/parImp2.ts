//Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es par o impar
//En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero)

import * as rlSync from "readline-sync"

console.clear()

let num:number = rlSync.questionInt("Ingrese numero: ")
while (num!=0){
    if (num%2==0){
        console.log("El numero es par")
    }else{
        console.log("Es impar")
    }
    num= rlSync.questionInt("Ingrese numero: ")
    while(num==0){
        num= rlSync.questionInt("Ingrese numero: ")
    }
}
