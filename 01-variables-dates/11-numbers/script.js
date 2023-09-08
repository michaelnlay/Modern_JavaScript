// const num = 5;

let x;

const num = new Number(55.366434); //we can also have number objects using the number constructor 


x=num.toString();
x = num.toString().length;

x = num.toFixed(2) // return 55.37
x = num.toPrecision(3) // return 55
x =num.toExponential(2)

x = num.toLocaleString('ar-EG')


// console.log(x);
console.log(num);
// console.log(typeof x);