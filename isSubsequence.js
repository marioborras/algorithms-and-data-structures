/*
Multiple Pointers Pattern
Write a function called issubSequence which takes in two strings and
checks whether the characters in the firs string form a subsequence of the characters in
the second string. In other words, the function should check whether the characters in the
first string appear in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') //true
isSubsequence('abc', 'abracadabra') //true
isSubsequence('abc', 'acb') //false (order matters)

*/

const isSubsequence = (str1, str2) => {
  // initialize 1 of 2 pointers
  let i = 0;

  //while i is less that first string do this...
  while (i < str1.length) {
    //for loop to go through second string characters...
    for (let j = 0; j < str2.length; j++) {
      //grab index of letter in string 1 and string 2...
      let firstStringIndex = str1.indexOf(str1[i]);
      let secondStringIndex = str2.indexOf(str1[i]);
      //if at any point the index in string 2 the letter has a higher index than in string 1
      //then we know it is out of order and it's false.
      if (secondStringIndex < firstStringIndex) {
        return false;
      }
      //move i to the next letter in string 1
      i++;
    }
  }

  return true;
};

console.log(isSubsequence('abc', 'cba'));
