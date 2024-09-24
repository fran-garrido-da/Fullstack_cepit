/* Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno) */

import * as rlSync from "readline-sync"

console.clear()

let name:string = rlSync.question("ingrese nombre del alumno: ")
let notaPrctc:number
let notaPrblm:number
let notaTrc:number

while (name!=""){
    notaPrctc = rlSync.questionFloat("Ingrese nota de practica: ")
    notaPrblm = rlSync.questionFloat("Ingrese nota de problemas: ")
    notaTrc = rlSync.questionFloat("Ingrese nota de teorica: ") 
    
    if (notaPrblm<=10 && notaPrblm>0 && notaPrctc<=10 && notaPrctc>0 && notaTrc<=10 && notaTrc>0){
        console.log(`Nota final: ${notaPrctc*0.1+notaPrblm*0.5+notaTrc*0.4}`)
    }else{
        console.log("¡ERROR!")
    }
    name = rlSync.question("ingrese nombre del alumno: ")
}


