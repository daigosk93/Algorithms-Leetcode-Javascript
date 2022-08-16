/*
Permutations
https://leetcode.com/problems/permutations/

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

const permute = (nums) => {

  return auxPermute(nums, 0, [], new Set());

};

const auxPermute = (nums, pos, currentVal, set) => {
  if (pos === nums.length) {
    return [currentVal];
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      const combinations = auxPermute(nums, pos + 1, currentVal.concat(nums[i]), set);
      result = [...result, ...combinations];
      set.delete(nums[i]);
    }
  }
  return result;

};

module.exports.permute = permute;
