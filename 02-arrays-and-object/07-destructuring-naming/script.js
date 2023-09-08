// you can create an object where the key and the value are the same; if the value is a variable, then you don't have to add both

const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
firstName,
lastName,
age,
};

console.log(person.age);

//Destructuring object

const todo ={
    id:1,
    title:'take out trash',
    user:{name:'JJ'},
};

// const id = todo.id;
const {id, title, user:{name}} = todo; //destructure properties(value) from the object, set this equal to object itself and then any properties we want to extract or destructure, are going into these curly braces

console.log(id, title, name) ;

//Destructure Array
const numbers = [23, 'aaa', 33, 49]
const [first, second, ...rest] = numbers //using rest operator

console.log(first, second, ...rest);