
function binarySearch(arr, num) {
  
  let beginning = 0;
  let end = arr.length;

  while((end - beginning) > 0) {
    const center = Math.floor((beginning + end + 1) / 2);
    if(arr[center] === num) return center;
    if(arr[center - 1] === num) return center - 1;

    if(num > arr[center]) {
      beginning = center + 1;
    } else {
      end = center - 2;
    }
  }
  return -1;
}

module.exports = {
  binarySearch
};