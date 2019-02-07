//Frequency Counter Example

//Write A function called same which accepts two arrays.
//The function shoudld return true if every value in the array has its corresponding value squared in the second array.
//The frequency of values must be the same.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const squaredIndex = arr2.indexOf(arr1[i] * arr1[i]);

    if (squaredIndex === -1) {
      return false;
    } else {
      arr2.splice(squaredIndex, 1);
    }
  }
  return true;
};

console.log(same([3, 2, 1], [9, 4, 1]));
