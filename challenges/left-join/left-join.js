function leftJoin(hashMapA, hashMapB) {
  let newArr = [];

  for(let i = 0; i < hashMapA.array.length; i++) {
    if(hashMapA.array[i].length > 0) {
      newArr.push(hashMapA.array[i][0]);
    }
  }
  for(let j = 0; j < hashMapB.array.length; j++) {
    if(hashMapB.array[j].length > 0) {
      if(hashMapA.get(hashMapB.array[j][0][0])) {
        for(let k = 0; k < newArr.length; k++) {
          if(newArr[k][0] === hashMapB[j][0][0]) {
            newArr[k].push(hashMapB[j][0][1]);
          }
        }
      }
    }
  }
  newArr.forEach(array => {
    if(array.length === 2) array.push(null);
  });
  return newArr;
}

module.exports = leftJoin;