//Una tienda al cumplir años en Octubre ofrece un (((descuento del 15%))) a sus clientes en todas sus compras
//Desarrolle un algoritmo que dada una compra: (((precio unitario))), (((cantidad))) y el (((mes))), indicados por el usuario, determine si el cliente tiene descuento o no


import * as rlSync from "readline-sync";

console.clear();

const descuento = 0.85;
let precio:number = rlSync.questionFloat("Ingrese precio unitario de producto: ");
let cantidad:number = rlSync.questionFloat("Ingrese precio cantidad de productos: ");
let mes:number = rlSync.questionFloat("Ingrese precio mes de compra: ");

if (mes==10){
    console.log("Total de compra: "+ cantidad*precio*descuento);
}else
    console.log("Total de compra: "+ cantidad*precio);