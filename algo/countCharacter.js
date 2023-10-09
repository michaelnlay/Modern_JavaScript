const inputString = "Hello, World!";
function countCharacters(s) {
  //initilize an empty object
  let characterCount = {};
  //use for of loop to iterate through the string
  for (let char of s) {
    // console.log(char.length);
    characterCount[char] = s[char].length;
  }
}

const characterCount = countCharacters(inputString);

console.log(characterCount);
// Expected Output:
// {
//   'h': 1,
//   'e': 1,
//   'l': 3,
//   'o': 2,
//   'w': 1,
//   'r': 1,
//   'd': 1,
// }
