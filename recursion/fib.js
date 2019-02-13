/* Write a recursive function called fib which accepts a number and returns the nth number in
the Fibonacci sequence. Recall thay the Fibobacci sequence is the sequence of whole numbers
1,1,2,3,5,9,8 which starts at 1 and 1 where every number thereafer is equal to the sum of the previous
two numbers
Example
fib(4) // 3
fib(10) //55
fib(28) //317811
fib(35) //9227465

*/

const fib = num => {
  if (num < 2) {
    return num;
  } else return fib(num - 1) + fib(num - 2);
};

console.log(fib(10));
