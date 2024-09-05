import * as rs from "readline-sync";

let precio: number = rs.questionFloat("Ingrese precio: ");

console.log(`El precio final es: ${precio - precio*0.1}`);
