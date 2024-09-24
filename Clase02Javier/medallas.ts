//Comprobar si gana alguna medalla ingresando posicion, y cual

import * as readlineSync from "readline-sync";

let posicion:number = readlineSync.questionInt("Ingrese posicion en la carrera:");

if (posicion==1){
    console.log("Ha ganado medalla de Oro");
}
else    
    if (posicion==2){
        console.log("Ha ganado medalla de Plata");
    }
    else 
        if (posicion==3){
            console.log("Ha ganado medalla de Bronce");
        }
        else
            if (posicion>3) {
                console.log("No ha ganado ninguna medalla");
            }else
                console.log("Posicion invalida");