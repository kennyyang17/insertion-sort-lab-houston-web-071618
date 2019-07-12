function findMinAndRemove(array){
  let minIndex = 0;
  let min = array[0];
  for (let i=0;i<array.length;i++) {
    if (array[i]< min) {
      min = array[i];
      minIndex = i;
    }
  }
      array.splice(minIndex,1);
    return min;
}

function insertionSort(array){
  let result = [];
  let minVal;
  while (array.length !== 0) {
    minVal = findMinAndRemove(array);
    result.push(minVal);
  }
  return result;
}


