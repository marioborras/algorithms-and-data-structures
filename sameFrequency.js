/* Frequency Counter Excercise

Write a function called sameFequency. Given two positive integers find out if two
numbers have the same frequency of digits. your solition must have the following complexities:

Time: O(N)   

sameFrequency(182,281) //true
sameFrequency(34,14) //false
sameFrequency(3589578, 5879385) //true
sameFrequency(22,222) //false
*/

const sameFequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  let frequencyCounter1 = {};
  for (let i = 0; i < num1.length; i++) {
    let num = num1[i];
    frequencyCounter1[num] ? (frequencyCounter1[num] += 1) : (frequencyCounter1[num] = 1);
  }
  for (let i = 0; i < num2.length; i++) {
    let num = num2[i];
    if (frequencyCounter1[num]) {
      frequencyCounter1[num] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(sameFequency(22, 222));
