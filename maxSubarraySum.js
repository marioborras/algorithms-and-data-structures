/* 
//Sliding Window - maxSubarraySum
Given an Array of integers and a numver, write a function called maxSubarraySum which
finds the maximum sum of a subarray with the length of th enymber bassed to the function.

Note that the subarray must consist of consecutive elements from the original array. 
In the first example below [100,200,300] is a subarray of the original array but [100,300]
is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1]), 2// 5
maxSubarraySum([3,-2,7,-4,1,4,-2,1] ,2) // 5
maxSubarraySum([2,3],3) //null
*/

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
