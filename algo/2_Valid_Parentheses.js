/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

function isValidParenthesis(s) {
  //create an object that map open bracket in corresponding to their close bracket
  const bracketMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  //create an empty array call stack to keep track open bracket
  let stack = [];
  //loop through the object
  for (const char of s) {
    if (bracketMap[char]) {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop(); //pop out last open bracket
      if (bracketMap[lastOpenBracket] !== char) {
        return false;
      }
    }
  }
  //if stack is empties, all bracket has valid pair
  return stack.length === 0;
}

console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("()[]{}")); // true
console.log(isValidParenthesis("(]")); // false
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("{[]}")); // true
