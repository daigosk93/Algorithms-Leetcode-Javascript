/*
Maximum Subarray
https://leetcode.com/problems/maximum-subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

*/

const maxSubArray = (nums) => {
  const numsQuantity = nums.length;

  if (numsQuantity === 0) return 0;
  if (numsQuantity === 1) return nums[0];
  let amount = nums[0];
  for (let i = 0; i < numsQuantity; i++) {
    for (let j = i + 1; j < numsQuantity; j++) {
      let result = sum(i, j, nums);
      if (result > amount) {
        amount = result;
      }
    }
  }

  return amount;
};

const sum = (start, finish, nums) => {
  let sum = 0;
  for (let i = start; i <= finish; i++) {
    sum = nums[i] + sum;
  }
  return sum;

};

module.exports.maxSubArray = maxSubArray;
