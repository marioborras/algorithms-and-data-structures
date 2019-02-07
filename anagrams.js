/*Frequency Counter Challenge

Given two strings write a function to determine if the second string is an anagram of the first.
an anagram  is a word, pgrase or name formed by rearranging the letters of such such as cinema from iceman */

const validAnagram = (str1, str2) => {
  //edge cases if strings are not the same length...
  if (str1.length !== str2.length) {
    return false;
  }
  //start with two empty objects to keep count
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //loop through first string - check if keys exist if they do +=1  or equal it to 1
  for (let letter of str1) {
    frequencyCounter1[letter] ? (frequencyCounter1[letter] += 1) : (frequencyCounter1[letter] = 1);
  }
  //same thing but loop through second string - check if keys exist if they do +=1  or equal it to 1
  for (let letter of str2) {
    frequencyCounter2[letter] ? (frequencyCounter2[letter] += 1) : (frequencyCounter2[letter] = 1);
  }
  //now with two objects made with keys made. loop through

  //For in loop to loop through first object.
  for (let key in frequencyCounter1) {
    //if the key is not in second object return false, means letter wasn't in the second string
    if (!(key in frequencyCounter2)) {
      return false;
    }
    //if the amount of chars in frequency counter 1 doesn't match to the same amount in obj 2
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  //if it passes everything then its a match and true

  return true;
};

console.log(validAnagram('iceman', 'cinema'));
