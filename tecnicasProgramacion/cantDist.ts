/* Leer valores del usuario hasta que introduzca un 0
El usuario puede introducir valores numéricos, tanto positivos como negativos
Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de positivos respecto del total */
import * as rlSync from "readline-sync";

console.clear()

let num:number = rlSync.questionInt("Introduzca numero: ");
let cont:number = 0;
let pos:number = 0;
while (num!=0){
    cont++;
    if(num>0){
         pos++;
    }
    num = rlSync.questionInt("Introduzca numero: ");
}
if(cont>0){
    console.log(`${pos} positivos, ${pos/cont*100}% positivos`);
}