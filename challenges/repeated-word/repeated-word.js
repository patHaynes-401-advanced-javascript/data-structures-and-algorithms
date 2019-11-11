module.exports = function repeatedWord(string) {
  let obj = {};
  let count = 0;
  let word = string.toLowerCase().split(' ');
  
  for(let i = 0; i < word.length; i++) {
    if(!obj[word[i]]) {
      count++;
      obj[word[i]] = count;
    } else if(obj[word[i]])
      return word[i];
  }
};