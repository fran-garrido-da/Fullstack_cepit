import * as rlSync from "readline-sync";
function selection(){ 
  console.clear()
  console.log(`\n[1]=nombres deseados
  \n[2]=arreglo de numeros
  \n[3]=numeros deseados
  \n[4]=dos arreglos
  \n[5]=suma total de arreglo
  \n[6]=arreglo al azar
  \n[7]=arreglo de letras
  \n[8]=arreglo de nombres
  \n[9]=encontrar el mayor y mostrar si es para/impar
  \n[10]=suma entre 2 arreglos
  \n[11]=mostrar arreglo invertido
  \n[12]=arreglo, mostrar tipos de numeros`);
  let input = rlSync.questionInt(`Elija ejercicio para mostrar. Escriba 0 para salir`)
  return input
}
function mostrar_array(v: any[]) {
  let range: number = v.length;
  for (let i = 0; i < range; i++) {
    console.log(`En posicion ${i + 1}: ${v[i]}`);
  }
}
function inv_mostrar_array(v: any[]) {
  let range: number = v.length;
  for (let i = range - 1; i >= 0; i--) {
    console.log(`En posicion ${i + 1}: ${v[i]}`);
  }
}
function pedir_num(v: number[]) {
  let range: number = v.length;
  for (let i = 0; i < range; i++) {
    v[i] = rlSync.questionInt(`Ingrese el numero : `);
  }
}
function pedir_name(v: string[]) {
  let range: number = v.length;
  for (let i = 0; i < range; i++) {
    v[i] = rlSync.question(`Ingrese el nombre : `);
  }
}
function dim_array() {
  let dim: number = rlSync.questionInt(
    `Introduzca la cantidad de datos a ingresar: `
  );
  while (dim < 1) {
    dim = rlSync.questionInt(`Introduzca la cantidad de datos a ingresar: `);
  }
  return dim;
}
function suma_array(v: number[]) {
  let range = v.length;
  let result: number = 0;
  for (let i = 0; i < range; i++) {
    result += v[i];
  }
  return result;
}
function ej_nombres_deseados() {
  let name = new Array(dim_array());
  pedir_name(name);
  mostrar_array(name);
}
// Construya un algoritmo que tenga un arreglo
// de números y se los muestre al usuario

// El arreglo debe ser llamado num

// El arreglo num debe contener los siguientes
// datos: 20, 14, 8, 0, 5, 19 y 24.

// Mostrar los valores resultantes del arreglo
function ej_nums() {
  let num: number[] = [20, 14, 8, 0, 5, 19, 24];
  mostrar_array(num);
}
// Construya un algoritmo que tenga un arreglo de dimensión 5 y llénelo con los números que el usuario desee.

// Muestre los números del arreglo al usuario
function ej_nums_deseados() {
  let num: number[] = new Array(5);

  pedir_num(num);

  mostrar_array(num);
}

// Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario.
// Al final debe imprimir los valores por consola.
function ej_dos_arreglos() {
  let name: string[] = new Array(2);
  let num: number[] = new Array(3);
  pedir_name(name);
  pedir_num(num);
  mostrar_array(name);
  mostrar_array(num);
}

// Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
// La dimensión del arreglo es ingresada por el usuario
// Los elementos (números) del arreglo son ingresados por el usuario
function ej_suma_array() {
  let suma: number[] = new Array(dim_array());
  pedir_num(suma);
  mostrar_array(suma);
  let result: number = suma_array(suma);

  console.log(result);
}

//Llenar un array de 10 posiciones con números aleatorios entre 0 y 99
function random() {
  let num: number = Math.floor(Math.random() * 100);
  return num;
}
function ej_azar() {
  let azar: number[] = new Array(10);
  let range: number = azar.length;
  for (let i = 0; i < range; i++) {
    azar[i] = random();
  }
  mostrar_array(azar);
}
// 1) Crear un arreglo de letras e imprimirlo

// 2) Dado un array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar si está en el arreglo.
//Imprimir el arreglo y si está o no en él.
function ej_crear_array_letras() {
  let letras: string[] = ["a", "b", "c", "d", "e"];
  mostrar_array(letras);
}
function ej_crear_array_nombres() {
  let names: string[] = ["juan", "pablo", "jorge", "marcelo", "luciano"];
  let input: string = rlSync
    .question(`Ingrese nombre a verificar: `)
    .toLowerCase();
  let num: number = names.indexOf(input);
  mostrar_array(names);
  if (num == -1) {
    console.log(`El nombre no se encuentra en el arreglo`);
  } else console.log(`El nombre se encuentra en el arreglo`);
}
// - Crear un programa que encuentre cual es el número
// más grande del arreglo e imprimirlo por consola
// - Almacenar el número más grande en una variable
// global y pasarlo a una función para determinar si el
// número es par o impar
function par_impar(num: number) {
  if (num % 2 != 0) {
    console.log(`Es impar`);
  } else console.log(`Es par`);
}
function ej_encontrar_mayor() {
  let num: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
  let range = num.length;
  let max: number = num[0];
  for (let i = 1; i < range; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  console.log(max);
  return max;
}
//par_impar(find_highest())

// Sumar los elementos de cada una de las posiciones
// de dos arreglos y guardar el resultado en otro arreglo
// • El arreglo tiene dimensión 6 y los números de los dos
// vectores los carga el usuario
function ej_suma_2_arrays() {
  let v1: number[] = new Array(6);
  let v2: number[] = new Array(6);
  let suma: number[] = new Array(6);
  let range: number = suma.length;
  pedir_num(v1);
  pedir_num(v2);

  for (let i = 0; i < range; i++) {
    suma[i] = v1[i] + v2[i];
  }
  mostrar_array(v1);
  mostrar_array(v2);
  mostrar_array(suma);
}
// • Almacene en un arreglo de tamaño N los números ingresados
// por el usuario
// • La dimensión N también es ingresada por el usuario
// • Muestre los números del arreglo pero del último al primero
function ej_mostrar_invertido() {
  let num: number[] = new Array(dim_array());
  pedir_num(num);
  inv_mostrar_array(num);
}
// Almacene en un arreglo de dimensión N números (la
// cantidad es ingresada por el usuario)
// • Muestre cuántos números son positivos, cuántos son
// negativos y cuántos ceros hay

function ej_tipos_numeros() {
  let num: number[] = new Array(dim_array());
  pedir_num(num);
  let range: number = num.length;
  let contPos: number = 0;
  let contNeg: number = 0;
  let contCero: number = 0;
  for (let i = 0; i < range; i++) {
    if (num[i] == 0) {
      contCero++;
    } else if (num[i] > 0) {
      contPos++;
    } else if (num[i] < 0) {
      contNeg++;
    }
  }
  console.log(`${contPos} positivos, ${contNeg} negativos y ${contCero} ceros`);
}
let input = selection()
while (input != 0) {
  switch (input) {
    case 1:
      ej_nombres_deseados();
      break;
    case 2:
      ej_nums();
      break;
    case 3:
      ej_nums_deseados();
      break;
    case 4:
      ej_dos_arreglos();
      break;
    case 5:
      ej_suma_array();
      break;
    case 6:
      ej_azar();
      break;
    case 7:
      ej_crear_array_letras();
      break;
    case 8:
      ej_crear_array_nombres();
      break;
    case 9:
      par_impar(ej_encontrar_mayor());
      break;
    case 10:
      ej_suma_2_arrays();
      break;
    case 11:
      ej_mostrar_invertido();
      break;
    case 12:
      ej_tipos_numeros();
    default: {
      input = selection()
    }
  }
  rlSync.question()
  input = selection()
}
