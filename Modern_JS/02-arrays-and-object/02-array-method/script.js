let x;

const arr = [34, 55, 95, 20, 15]

// arr.push(100) //add 100 to the end
// arr.pop() // remove 100

// arr.unshift(33)
// arr.shift()

// arr.reverse()

x = arr.includes(20)
x = arr.indexOf(55)

x =arr.slice(1, 4) //slice does not change array
// x = arr.splice(1,4) //splice does

// x = arr.splice(2, 2) // take out number 95, only one number

x =arr.splice(1,4).reverse().toString().charAt(3)

console.log(x);