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
  const stack = [];
  const hashMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      stack.push(hashMap[s[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("()[]{}")); // true
console.log(isValidParenthesis("(]")); // false
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("{[]}")); // true
