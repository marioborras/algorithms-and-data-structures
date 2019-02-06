//Write a Function which takes in a string and returns counts of each character in a string

// const charCount = str => {
//   const obj = {};

//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       obj[char] > 0 ? obj[char]++ : (obj[char] = 1);
//     }
//   }
//   return obj;
// };

//really refactored
const charCount = str => {
  const obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = obj[char]++ || 1;
    }
  }
  return obj;
};

console.log(charCount('HI'));
