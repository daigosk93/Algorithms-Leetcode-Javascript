/*
Valid Parentheses
https://leetcode.com/problems/valid-parentheses/description/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/
const closeParenthesesCaracter = {
  "(": ")",
  "{": "}",
  "[": "]"
};
const isValid = (parentheses) => {
  if (parentheses === "") {
    return true;
  }
  if (parentheses.length % 2 !== 0) return false;
  if (parentheses.length === 2) {
    return closeParenthesesCaracter[`${parentheses[0]}`] === parentheses[1];
  }

  let firstParentheses = parentheses[0];
  let closeParentheses = parentheses.indexOf(closeParenthesesCaracter[firstParentheses]);

  if (closeParentheses === -1 || closeParentheses % 2 === 0) return false;

  let nextParentheses = parentheses.slice(1, closeParentheses) + parentheses.slice(closeParentheses + 1);
  return isValid(nextParentheses);

};
module.exports.isValid = isValid;
