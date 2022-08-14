/*
Reverse String II
https://leetcode.com/problems/reverse-string-ii/description/

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]

*/

/*
const reverseStr = (s, k) => {
  let loops = s.length / k;
  let firstHalf = s.slice(0, k);
  let secondHalf = s.slice(k, s.length);
  let newFirstHalf = "";

  for (let i = (k - 1); i >= 0; i--) {
    newFirstHalf = newFirstHalf + firstHalf.charAt(i);
  }
  return newFirstHalf + secondHalf;

};
*/

const reverseStr = (s, k) => {
  if (s === "") return "";
  if (k === 0) return s;
  let firstHalf = s.slice(0, 2 * k);
  let secondHalf = s.slice(2 * k, s.length);
  let kFirstHalf = "";

  for (let i = (k - 1); i >= 0; i--) {
    kFirstHalf = kFirstHalf + firstHalf.charAt(i);
  }

  const phrase = kFirstHalf + firstHalf.slice(k, firstHalf.length) + reverseStr(secondHalf, k);
  return phrase;
};


module.exports.reverseStr = reverseStr;
