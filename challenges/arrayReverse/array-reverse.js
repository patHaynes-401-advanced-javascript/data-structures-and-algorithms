const array1 = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
  const newArray1 = [];
  console.log(arr);
  for(let i = 0; i < arr.length; i++) {
    newArray1[i] = arr[arr.length - (i + 1)];
  }
  return newArray1;
}


console.log(reverseArray(array1));

