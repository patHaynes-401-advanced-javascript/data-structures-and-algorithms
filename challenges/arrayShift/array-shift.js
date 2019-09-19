const arr = [2, 4, 6, 8];
const element = 5;

function insertShiftArray(arr, element) {
  const middleArray = arr.length / 2;
  const newArray = [];
  let index = 0;

  for(let i = 0; i < middleArray; i++) {
    newArray[index] = arr[i];
    index += 1;
  }
  newArray[middleArray] = element;
  for(let i = middleArray; i < arr.length; i++) {
    newArray[newArray.length] = arr[i];
  }
  return newArray;
}

console.log(insertShiftArray(arr, element));

