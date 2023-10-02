//Problem 1: write a function that takes two numbers and return the sum of those numbers

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

//Problem 2:write a function that takes any number of arguments of type number and returns the sum of all the arguments
function sumAll(...args) {
  //use spread ... operator to get all the numbers
  //check if arugments of type number

  //args will return an array
  let total = 0;
  args.forEach((num) => {
    total += num;
  });
  return total;
}

console.log("sumAll", sumAll(1, 3, 5, 6, 7, 1));

// Problem 3: write a function that takes two strings, A and B,
//and return whether B is in A in a case-insensitive way
function twoStrings(str1, str2) {
  //do you meant that if string b is in a, then return true?
  //convert them into a case-insensitive
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  return str1.includes(str2);
}
console.log(twoStrings("Hello, my name is Levi", "levi"));

// Problem 4: write a fucntion that takes an array of objects, and return an array of the objects'"name" property, only if that property exist

function getName(arr) {
  //let's use forEach to iterate through this array of object
  //let's create a new empty array, we push the object with the name property into this new array
  let newArray = [];
  arr.forEach((obj) => {
    if ("name" in obj) {
      newArray.push(obj.name);
    }
  });
  return newArray;
}

console.log(
  "getName",
  getName([
    { a: 1 },
    { name: "Jane" },
    {},
    { name: "Mark" },
    { name: "Sophia" },
    { b: 2 },
  ])
); //expect ["Jane", "Mark", "Sophia"]
