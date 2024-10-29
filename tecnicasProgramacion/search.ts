//busqueda tradicional,lineal,sequential
export function linearSearch(array:number[],target:number):number{
    for(let i = 0; i<array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
// console.log(linearSearch([13,6,7,0,45,9,23,75,77,13,13,24,51,1,99,69,420,27,222],2))

//indexado, para agilizar busqueda.

export function binarySearch(array:number[],target:number):number{
    
    let left = 0; //Primer posicion
    let right = array.length - 1;//Ultimo posicion

    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        if(array[mid] === target){
            return mid
        }else if(array[mid] < target){
            left = mid + 1
            console.log(left)
        }else {
            right = mid - 1
            console.log(right)
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],12))