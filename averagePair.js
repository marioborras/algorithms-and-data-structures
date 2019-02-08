/*Multiple Pointers average Pair

Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where where the average of the pair equals the target average. There may be more than one pair that matches the average target.
Example:

averagePair([1,2,3],2.5) //true
averagePair([1,3,3,5,6,7,10,12,19],8) //true
averagePair([-1,0,3,4,5,6],4.1) //false
averagePair([],4) //false

*/

const averagePair = (arr, average) => {
  //if the array is empty return false
  if (!arr.length) {
    return false;
  }
  //intialize pointers at front of array and at end
  let left = 0;
  let right = arr.length - 1;

  //while loop from ends checking if two numbers average out
  //moving the pointers if the number is to big or to small accordingly.
  while (left < right) {
    let sum = arr[right] + arr[left];
    if (sum / 2 === average) {
      return true;
    } else if (sum / 2 > average) {
      right--;
    } else {
      left--;
    }
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
