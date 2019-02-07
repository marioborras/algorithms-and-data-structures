/*
From Codeility Exam that I didn't complete
Write a function that given an integer N (1< N < 100), returns an array containing N distinct integers that sum up to 0
the function can return any such array.

For example given N= 4 the function should return [1,0,-3,2] and for N = 3 one of the possible answers is [-1,0,1]
(but there are many correct answers)

**/

const solution = num => {
  // make the empty array that we will return
  const arr = [];
  //fill the array from negative num up until number
  for (let i = -num; i <= num; i++) {
    arr.push(i);
  }
  //for a number like 2 the array looks like this at this point [-2,-1,0,1,2]
  //for even numbers its easier to just remove the zero from the array
  if (!(num % 2)) {
    const zeroindex = arr.indexOf(0);
    arr.splice(zeroindex, 1);
  }
  // while loop to remove numbers from beginning of array and the end until the array length  is the same as the number provided.
  while (arr.length > num) {
    if (arr.length !== num) {
      arr.pop();
    }

    if (arr.length !== num) {
      arr.shift();
    }
  }
  //return the array that is the same length as the number, distinct integers and sums to 0
  return arr;
};
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
