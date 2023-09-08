const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//how to do with forEach
const doubleNumbers2 = [];
numbers.forEach((number) => {
  doubleNumbers2.push(number * 3);
});

console.log(doubleNumbers2);

const companies = [
  { name: "Company One", category: "Finance", start: 2001, end: 2004 },
  { name: "Company Two", category: "retail", start: 2011, end: 2014 },
  { name: "Company Three", category: "Auto", start: 1921, end: 2003 },
  { name: "Company four", category: "retail", start: 1321, end: 2003 },
];

//Create an array of company names
const getCompanyNames = companies.map((company) => company.name);

console.log(getCompanyNames);

//create an array with just company and category

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
// console.log(companyInfo);

//Create an array of objects with names and the length of each company in years
const companyYearInService = companies.map((company) => {
  return {
    name: company.name,
    companyYear: company.end - company.start,
  };
});
console.log(companyYearInService);

//Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((s) => s * 2);

console.log(squareAndDouble);

//Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);
