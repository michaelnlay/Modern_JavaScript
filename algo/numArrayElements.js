const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [-1, 0, 1];
const numbers3 = [];

function calculateSum(arr) {
  //i passed into arr as my argument so I can use the rest operator
  //let create a new variable
  //loop through the array of number
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

const sum1 = calculateSum(numbers1);
const sum2 = calculateSum(numbers2);
const sum3 = calculateSum(numbers3);

console.log("Sum of numbers1:", sum1);
console.log("Sum of numbers2:", sum2);
console.log("Sum of numbers3:", sum3);
