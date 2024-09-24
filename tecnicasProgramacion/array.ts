/*Construya un algoritmo que tenga un arreglo de dimensión deseada por el usuario y llénelo con los nombres que el usuario desee
Crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres de personas*/

import * as rlSync from "readline-sync"

let dim:number = rlSync.questionInt(`Introduzca la cantidad de nombres a ingresar: `)
while(dim<1){
    dim = rlSync.questionInt(`Introduzca la cantidad de nombres a ingresar: `)
}

let names = new Array(dim)
let lgth =names.length

for(let i=0;i<lgth;i++){
    names[i]=rlSync.question(`Introduzca nombre: `)
}
for(let i=0;i<lgth;i++){
    console.log(names[i])
}
