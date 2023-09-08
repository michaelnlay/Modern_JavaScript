const numbers = [1, 2, 3, 4, 5, 6, 7];

function sum() {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
    //28
  }
  return acc;
}

console.log(sum());
