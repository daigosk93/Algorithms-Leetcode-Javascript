/*
Binary Gap
https://leetcode.com/problems/binary-gap/description/

Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0. 

Example 1:

Input: 22
Output: 2
Explanation: 
22 in binary is 10110.
In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
The first consecutive pair of 1's have distance 2.
The second consecutive pair of 1's have distance 1.
The answer is the largest of these two distances, which is 2.
Example 2:

Input: 5
Output: 2
Explanation: 
5 in binary is 0101.
Example 3:

Input: 6
Output: 1
Explanation: 
6 in binary is 0110.
Example 4:

Input: 8
Output: 0
Explanation: 
8 in binary is 01000.
There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.
*/

/**
 * @param {number} N
 * @return {number}
 */

const binaryGap = (n) => {
  let decimalNumber = n;
  let binaryNumber = "";
  while (decimalNumber !== 0) {
    let result = decimalNumber % 2;
    if (result === 0) {
      decimalNumber = decimalNumber / 2;
      binaryNumber = result.toString() + binaryNumber;
    }
    if (result === 1) {
      decimalNumber = (decimalNumber - 1) / 2;
      binaryNumber = result.toString() + binaryNumber;
    }
  }
  let positionsWithOne = [];
  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === "1") {
      positionsWithOne.push(i);
    }
  }

  let distance = 0;
  for (let j = 0; j < positionsWithOne.length - 1; j++) {
    distance =
      distance <= positionsWithOne[j + 1] - positionsWithOne[j]
        ? positionsWithOne[j + 1] - positionsWithOne[j]
        : distance;
  }
  return distance;
};
module.exports.binaryGap = binaryGap;
