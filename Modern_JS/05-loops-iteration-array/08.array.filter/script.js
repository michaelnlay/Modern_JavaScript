//Try array.filter()

// const words = ['spray', 'chicken', 'understand', 'win', 'heloworld'];
// //filter our words that have less than 6 character
// const result = words.filter(word => word.length>6);
// console.log(result);

//try with number
const numbers = [111111, 2, 3, 4, 6, 11, 2, 333];
//filter out all the even number, only print odd number

// const evenNumbers = numbers.filter(function(number){
// return number % 2 !== 0;
// })

//shorter version
// const evenNumbers = numbers.filter(number => number % 2 !==0)


//Try it with forEach
const evenNumbers = numbers.forEach(number) 

console.log(evenNumbers);