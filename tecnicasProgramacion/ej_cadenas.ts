import * as rlSync from "readline-sync"
function inv_word(word: string) {
    let i:number = 0
    let word_range: number = word.length
    let j:number = word_range-1
    let aux:string
    let array:string[] = new Array(word_range)
    for (let i = 0;i<word_range;i++){
        array[i] = word[i]
    }
    while (i < j) {
        aux = array[i];
        array[i] = array[j];
        array[j] = aux;
        i++;
        j--;
    }
    return array.join("")
}//Testeado, funciona con palabras y frases completas
function mirror(){
    let word:string = rlSync.question(`Introduzca una palabra para mostrar su espejo: `)
    console.log(inv_word(word))
}//Testeado, funciona con palabras y frases completas

// Solicite al usuario que ingrese un texto y retornelo
// convertido en un nombre de variable/función con las
// reglas camelCase

let texto:string = "Never gonna give you up"
let textoCamel:string=""
function camelCase(texto:string){
    let camelAux:string 
    camelAux = texto.toLowerCase()
    while (camelAux.indexOf(" ")>0){
        camelAux.length
    }
}

