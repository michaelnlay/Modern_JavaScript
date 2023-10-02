//Problem 1: write a function that takes two numbers and return the sum of those numbers
function add(num1, num2) {
  return num1 + num2;
}

// console.log(add(2, 3)); //return 5
console.log("add", add(2, 3));

//Problem 1A: write a function that take an array of numbers and the target number
function addNum(arrayNums, target) {
  for (let i = 0; i < arrayNums.length; i++) {
    for (let j = i + 1; j < arrayNums.length; j++) {
      if (arrayNums[i] + arrayNums[j] === target) {
        return [arrayNums[i], arrayNums[j]];
      }
    }
  }
  // If no pair is found, you can return an appropriate value, such as an empty array.
  return [];
}

console.log("addNum", addNum([1, 5, 6, 9], 11)); // Expect [5, 6]

//Problem 2:write a function that takes any number of arguments of type number and returns the sum of all the arguments
// function sum(...args) {
//   //use spread dot annonotation return array of numbers
//   //need to loop through that new array
//   let total = 0;
//   for (const num of args) {
//     total += num;
//   }
//   return total;
//   //add the total number
// }
// console.log("sum", sum(2, 3, 4, 5)); //expect 14

function sum(...args) {
  let total = 0;
  args.forEach((num) => {
    total += num;
  });
  return total;
}
console.log("sum", sum(2, 3, 4, 5)); // Expect 14

// Problem 3: write a function that takes two strings, A and B,
//and return whether B is in A in a case-insensitive way

function stringIncludes(a, b) {
  //check if b in a, using the include method
  const stringA = a.toLowerCase();
  const stringB = b.toLowerCase();

  return stringA.includes(stringB);
}

console.log(
  "stringIncludes",
  stringIncludes("I drove to New York in a van with my friend", "nEw")
); //expect true

// Problem 4: write a fucntion that takes an array of objects, and return an array of the objects'"name" property, only if that property exist

function getName(arr) {
  //create a new array that only contain name object key
  //first we need to loop through that array of object to id the name, then push it to the new array
  //return the objects' "name" property
  const newArray = [];
  arr.forEach((obj) => {
    // console.log(obj);
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

//Problem 5: write a function that takes an array of numbers and returns the index of the largest number
function getLargestNumberIndex() {}
console.log("getLargestNumberIndex", getLargestNumberIndex([17, 1, 4, 12, 9]));

//Problem 6: wrie a function that returns a promise that resolves after a number of miliseconds

function delay(n) {}
(async () => {
  console.time("Testing delay");
  await delay(1000);
  console.timeEnd("Testing delay");
})();

//Problem 2:write a function that takes any number of arguments of type number and returns the sum of all the arguments
function sum(...args) {
  //convert the numbers inside the sum into an array, using rest operator
  //loop through the array
  //first, create an new variable call total to add all the numbers
  let total = 0;
  args.forEach((num) => {
    //first check to make sure the type is number

    total += num;
  });
  return total;
}
console.log("sum", sum(2, 3, 4, 5)); // Expect 14


function getName(arr) {
  // Use filter to select objects with a "name" property
  // Use map to extract the "name" property from the selected objects
  const newArray = arr
    .filter((obj) => "name" in obj)
    .map((obj) => obj.name);

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
); // expect ["Jane", "Mark", "Sophia"]