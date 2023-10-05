const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function findMinAndMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min, max };
}

const result = findMinAndMax(numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
// Expected Output:
// Minimum: 1
// Maximum: 9
