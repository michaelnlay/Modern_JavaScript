//Regular function declaration
// function add (a,b){
//     return a+b
// }
// console.log(add(5,7));

//Arrow Function

const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => a - b;

// const double =(a)=> a*2; //this can be shorter
const double = a => a * 2; //only work when you have a single param


//Returning an object
const createObj =() =>({
    name:'brad',
});

const numbers = [1,2,3,4,5];
// numbers.forEach(function (n){
//     console.log(n);
// })

//Arrow Function in a callback*********************
numbers.forEach(n=> console.log(n));


console.log(createObj());


console.log(add(5, 7));
console.log(substract(7, 5));
console.log(double(5));
