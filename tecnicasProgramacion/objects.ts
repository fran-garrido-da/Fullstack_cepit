/*
 * ejercicio: 
 * 0- crear un tipo para la entidad car.
 * 1- guardar los diez elementos de tipo car en un arreglo.
 * 2- iterar el arreglo y mostrar el numero de vehiculo en el listado (no es una propiedad de la entidad)
 * 3- junto al numero mencionado ut supra, poner marca, modelo y color.
 */
import * as rlSync from "readline-sync"
interface iCar{
    make:string,
    model:string,
    year:number,
    color:string,
    isAutomatic:boolean,
    price:number
}
let car01: iCar = {
    make: "Ford",
    model: "Ranger",
    year: 2024,
    color: "Graphite",
    isAutomatic: false,
    price: 39000,
};
  
let car02: iCar = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "White",
    isAutomatic: true,
    price: 28000,
};
  
let car03: iCar = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Blue",
    isAutomatic: false,
    price: 25000,
};
  
let car04: iCar = {
    make: "Chevrolet",
    model: "Silverado",
    year: 2021,
    color: "Black",
    isAutomatic: true,
    price: 45000,
};
  
let car05: iCar = {
    make: "Nissan",
    model: "Altima",
    year: 2023,
    color: "Gray",
    isAutomatic: true,
    price: 32000,
};
  
let car06: iCar = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    color: "Red",
    isAutomatic: false,
    price: 38000,
};
  
let car07: iCar = {
    make: "BMW",
    model: "X5",
    year: 2021,
    color: "Silver",
    isAutomatic: true,
    price: 61000,
};
  
let car08: iCar = {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2019,
    color: "Black",
    isAutomatic: true,
    price: 52000,
};
  
let car09: iCar = {
    make: "Mazda",
    model: "CX-5",
    year: 2023,
    color: "Green",
    isAutomatic: false,
    price: 33000,
};
  
let car10: iCar = {
    make: "Audi",
    model: "Q7",
    year: 2024,
    color: "White",
    isAutomatic: true,
    price: 67000,
};
let cars:iCar[] =[car01,car02,car03,car04,car05,car06,car07,car08,car09,car10]
//cars.forEach((car,idx) => console.log(`[${idx+1}]: Marca: ${car.make}, modelo: ${car.model}, color: ${car.color}. `))
//cars = array de iCar[]
//forEach = por cada index del array
//(car,idx) => =funcion anonima parametrizada en car e idx, siendo car un elemento de cars, e idx el indice en el cual trabaja el forEach

/**
 * ejercicio 2:
 * 
 * 1- iterar el arreglo: 
 * en cada iteracion invocar a la funcion printCar que recibira como argumento un elemento del tipo iCar.
 * Esta funcion debe imprimir todos los datos de un vehiculo, con un encabezado y un pie como separadores. Debe haber al menos un salto de linea entre cada vehiculo impreso en pantalla
 * */
console.clear()
function printCar(cars:iCar){
            console.log(`\n----- ----- ----- -----`)
            console.log(`Marca: ${cars.make}`)
            console.log(`Modelo: ${cars.model}`)
            console.log(`Año: ${cars.year}`)
            console.log(`Color: ${cars.color}`)
            console.log(`Caja: ${cars.isAutomatic? "Automatica":"Manual"}`)
            console.log(`Precio: ${cars.price}`)
            console.log(`----- ----- ----- -----`)
}
const range:number = cars.length
// for (let i=0;i<range;i++){
//     printCar(cars[i])
// }
for (let i=0;i<range;i++){
    if (cars[i].isAutomatic == false)
        printCar(cars[i])
}
rlSync.question()
