//Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre
//0-15000 = 20%
//15001-20000 = 10%
//20001-25000 = 5%
//25001 o mas = 0%

import * as rlSync from "readline-sync";

console.clear();

const aum1:number = 1.2;
const aum2:number = 1.1;
const aum3:number = 1.05;

function aumApply(){
let salario:number = rlSync.questionInt("Ingrese salario: ");
    if (salario>25000){
        console.log("No se aplica aumento");
    }else
        if (salario>20000){
            console.log("Aumento de 5%, nuevo salario: "+ salario*aum3);
        }else
            if(salario>15000){
                console.log("Aumento de 10%, nuevo salario: "+ salario*aum2);
            }else
                if (salario>0){
                    console.log("Aumento de 20%, nuevo salario: "+ salario*aum1);
                }else
                    if (salario<1){
                        console.log("Invalido");
                        aumApply();
                    }
}
aumApply();