export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;
  //dividir array por la mitad
  const mid = Math.floor(array.length / 2);
  //obtenemos primer mitad de array
  const left = mergeSort(array.slice(0, mid));
  //obtenemos la segunda mitad de array
  const right = mergeSort(array.slice(mid));

  console.log(`\nmid: ${mid} right: ${right} left: ${left}`)

  return merge(left, right);
}

export function merge(left: number[], right: number[]): number[] {
  //generar un espacio para volcar los valores
  const sortedArray: number[] = [];
  //inicializamos los indices
  let i = 0,
    j = 0;
  //mezclar los arrays
  while (i < left.length && j < right.length) {
    //comparamos los valores de los arrays
    //pusheas en sortedArray el menor
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      console.log("i: "+left[i],i)
      i++;
    } else {
      sortedArray.push(right[j]);
      console.log("j: "+right[j],j)
      j++;
    }
  }
  //Agregar los elementos restantes
  return sortedArray.concat(left.slice(i).concat(right.slice(j)))
}
console.log(mergeSort([13,6,7,0,45,9,23,75,77,13,13,24,51,1,99,69,420,27,222]))
console.log([13,6,7,0,45,9,23,75,77,13,13,24,51,1,99,69,420,27,222].sort((a,b) =>a-b))