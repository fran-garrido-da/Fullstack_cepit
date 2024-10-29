//Factorial: el producto de todos los enteros desde 1 hasta n
function factorial(n:number):number{
    if(n === 0 || n === 1){
        return 1
    }
    let resultado =  n * factorial(n - 1)
    return resultado
}

//factorial(5)

//Fibonacci
function fibonacci(n:number):number{
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n-1)+fibonacci(n-2)
}
// console.log(fibonacci(5))

//Potencia de un numero n

function potencia(base:number,exp:number):number{
    //caso base
    if(exp === 0) return 1;

    return base*potencia(base,exp-1)
}
// console.log(potencia(2,4))

function countDown(n:number):void{
    if(n<0)return
    console.log(n)
    countDown(n-1)
}
// countDown(50)