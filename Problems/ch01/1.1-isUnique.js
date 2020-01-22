// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?
const isUnique = function (str) {
  //create an object to hold all str values
  const cache = {}
  // split str for each individual char
  const string = str.split('')
  //split returns array, iterate through each char and make it a key in cache
  for (let i = 0; i < string.length; i += 1) {
    // set each char to a label
    let char = string[i];
    // if the key doesnt exist in cache, addit, else return false, no duplicates
    if (!cache[char]) {
      cache[char] = 1
    } else {
      return false
    }
  }
  // if we get throug the loop we know there  are no duplicates
  return true

};
