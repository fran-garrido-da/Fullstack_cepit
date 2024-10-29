import * as rlSync from "readline-sync"

let matriz:number[][] = [new Array(3),new Array(3),new Array(3)]
let rangei:number = matriz.length
for (let i = 0; i<rangei;i++){
    let rangej:number = matriz[i].length
    for(let j = 0;j<rangej;j++)
        matriz[i][j] = rlSync.questionInt(`Introduzca el numero de posicion [${i},${j}]: `)
}
for (let i = 0; i<rangei;i++){
    let rangej:number = matriz[i].length
    for(let j = 0;j<rangej;j++)
        console.log(matriz[i][j])
}
