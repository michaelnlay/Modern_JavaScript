// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// // fruits.push(berries)

// // x = fruits[3][1] //access bluberry

// const allFruits = [fruits, berries]
// x = allFruits[1][0]

// x = fruits.concat(berries) //[ 'apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry' ] everything in one array

// //Spread Operator  (...)
// x = [...fruits, ...berries] //[ 'apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry' ] 

// //Flatten Arrays
// const arr = [1, 2, [3,4], 5, [6, 7], 8]
// x = arr.flat()

// //Static Method on Array object
// x = Array.isArray(berries);
// x = Array.from('hello') //[ 'h', 'e', 'l', 'l', 'o' ]

// const a = 1;
// const b =2;
// const c =3;

// x = Arr

// console.log(x);

//Challenge 1


const arr = [1,2,3,4,5]

arr.push(6)
// arr.reverse().push(6)
arr.reverse()


// console.log(arr); //[6,5,4,3,2,1]

// Challenge 2 - combine arr1 and arr2 into a new array called arr3
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

// arr1.pop() - one solution
// arr2.splice(0,1) - two solution
arr2.shift()
//

// const arr3 = [...arr1, ...arr2]

const arr3 = arr1.concat(arr2);

// console.log(arr1, arr2);
console.log(arr2);
console.log(arr3);

