//Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
//pass = eureka
//Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado todas las oportunidades
//Si acertamos la clave, saldremos directamente del programa

import * as rlSync from "readline-sync";

console.clear()

const PASS:string = "CLAVE";
let clave:string = "";

for (let i:number = 1; i<4; i++){
    clave = rlSync.question("Inserte clave: ");
    if(clave==PASS){
        console.log("Clave correcta");
        i = 4;
    }else
    if (i == 3){
        console.log("Has agotado todas las oportunidades");
    }else
        console.log("clave incorrecta");
}