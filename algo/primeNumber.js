const number1 = 2;
const number2 = 9

//example of prime numbers
//2, 3, 5, 7, 11, 13, 17 because it can only divide by 1 and its number

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  //2 and 3 are prime number
  else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  } else if (n % 2 === 1) {
    return true;
  }
}

console.log(`Is ${number1} a prime number?`, isPrime(number1)); // Expected Output: Is 7 a prime number? true
console.log(`Is ${number2} a prime number?`, isPrime(number2)); // Expected Output: Is 12 a prime number? false
