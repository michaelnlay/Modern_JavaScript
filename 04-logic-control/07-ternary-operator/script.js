const age = 11;

//using an if statement
if (age >18){
    console.log('You can vote');
}else {
    console.log('You cannot vote yet');
}

//using ternary operator
age >=18 ? console.log('you can vote') : console.log('cannot vote');

//assign a conditional value to a variable 
const canVote = age >=18 ? true : false; // does not have to be boolean
const canVote2 = age >=18 ? "can vote2" : "canot vote2";

console.log(canVote);
console.log(canVote2);

//Multiple statements

const auth = false;
// let redirect;

// if (auth){
//     console.log('Welcome to dashboard');
//     redirect = '/dashboard'
// }else{
//     console.log('Access denied');
//     redirect = '/login'
// }

// console.log(redirect);

//Multiple statements using ternary operator
const redirect = auth 
? (console.log('welcome!!'), '/dashboard2') 
: (console.log('denied!!'), '/login2')

console.log(redirect);

// if you don't want to deal with else
auth ? console.log('welcome to dashboard without else') : null;
auth && console.log('welcome to dashboard w/o else');