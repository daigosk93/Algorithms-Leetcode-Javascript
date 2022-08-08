/*
Majority Element
https://leetcode.com/problems/majority-element/

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

Note: You should have a better solution than O(N)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function (nums) {
  const length = nums.length;

  for (let num of nums) {
    let quantity = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === num) {
        quantity++;
      }
    }
    if (quantity > length / 2) return num;
    quantity = 0;
  }
};

module.exports.majorityElement = majorityElement;
