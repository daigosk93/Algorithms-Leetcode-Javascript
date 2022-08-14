/*
Sum of Square Numbers
https://leetcode.com/problems/sum-of-square-numbers/description/

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:
Input: 3
Output: False
*/

/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
  let maxValue = Math.pow(c, 1 / 2);
  for (let i = 0; i <= maxValue; i++) {
    for (let j = i; j <= maxValue; j++) {
      const result = (i * i) + (j * j);
      if (result === c) {
        console.log(i, j);
        return true;
      }
    }
  }
  return false;

};

module.exports.judgeSquareSum = judgeSquareSum;
