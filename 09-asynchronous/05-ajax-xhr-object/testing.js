//Problem 1: write a function that takes two numbers and return the sum of those numbers
function add() {}

// console.log(add(2, 3)); //return 5
console.log("add", add(3, 3));

//Problem 1:write a function that takes any number of arguments of type number and returns the sum of all the arguments
function sum() {}
console.log("sum", sum(2, 3, 4, 5)); //expect 14

// Problem 2: write a function that takes two strings, A and B,
//and return whether B is in A in a case-insensitive way

function stringIncludes() {}

console.log(
  "stringIncludes",
  stringIncludes("I drove to New York in a van with my friend", "nEw")
); //expect true

// Problem 3: write a fucntion that takes an array of objects, and return an array of the objects'"name" property, only if that property exist

function getName() {}
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

//Problem 4: write a function that takes an array of numbers and returns the index of the largest number
function getLargestNumberIndex() {}
console.log("getLargestNumberIndex", getLargestNumberIndex([17, 1, 4, 12, 9]));

//Problem 5: wrie a function that returns a promise that resolves after a number of miliseconds

function delay(n) {}
(async () => {
  console.time("Testing delay");
  await delay(1000);
  console.timeEnd("Testing delay");
})();
