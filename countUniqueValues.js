/* Practicing multiple pointers */
/*Implement a function called countUniqueValues, which accepts a sorted array, and counts
the unique values in the array. There van be negative numbers in the array but it will always be sorted 
countUniqueValues([1,1,1,1,1,2]/// 2)
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]// 7)
countUniqueValues([]//  0)
countUniqueValues([-2,-1,-1,0,1]// 4)
*/

const countUniqueValues = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
};

//* Different way */
const countUniqueValues2 = arr => {
  //return 0 if the array is empty
  if (!arr.length) return 0;

  // j is the scount report backs if the number next in array is different. if it is.
  //i is moved up and that j's number becomes arr[i] returns i's index + 1

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
console.log(countUniqueValues2([]));
