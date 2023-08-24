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

//Same with forEach
// let evenNumbers = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });
//Try it with forEach
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers);

const companies = [
  { name: "Company One", category: "Finance", start: 2001, end: 2004 },
  { name: "Company Two", category: "retail", start: 2011, end: 2014 },
  { name: "Company Three", category: "Auto", start: 1921, end: 2003 },
  { name: "Company four", category: "retail", start: 1321, end: 2003 }
];

//get only retail companies
// const getRetail = companies.filter((company) => company.category == "retail");

// console.log(getRetail);

// get companies that started in or after 1980 and ended in or before 2005
const getCompany = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
// console.log(getCompany);

//Get copmanies that lasted 10 years
const last10Year = companies.filter(
  (company) => company.end - company.start > 10
);
console.log(last10Year);
