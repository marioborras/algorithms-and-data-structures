const romanToInt = function(s) {
  const letters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let number = 0;

  for (let char of s) {
    if (char === 'I') {
      number += letters[char];
    }
  }
  return number;
};

console.log(romanToInt('III'));
