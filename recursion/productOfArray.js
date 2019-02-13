/* Write a function called productOfArray which takes in an array 
of numbers and returns the product of them all.

example:
 productOfArray([1,2,3]) //6
 productOfArray([1,2,3, 10]) //60

*/

const productOfArray = arr => {
  let result = 1;
  const helper = helperInput => {
    if (helperInput.length === 0) {
      return 0;
    }
    if (helperInput[0] === 0) {
      return 0;
    }

    result = result * helperInput[0];

    helper(helperInput.slice(1));
  };

  helper(arr);
  return result;
};

console.log(productOfArray([3, 3, 3]));
