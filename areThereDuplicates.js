/*Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks where there are any duplicates amoun the arguments passed in. You can solive this using the frequency counter pattern OR the multiple pointers pattern

Examples:
areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates('a','b','c','a') //true */

const areThereDuplicates = (...theArgs) => {
  let frequencyCounter = {};
  for (let i in theArgs) {
    let char = theArgs[i];
    frequencyCounter[char] ? (frequencyCounter[char] += 1) : (frequencyCounter[char] = 1);
    if (frequencyCounter[char] > 1) {
      return true;
    }
  }

  return false;
};

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
