let x;

// const todo ={}; // object literal- you can use this empty object to add key value pair
//we can also use object constructor
const todo = new Object()
todo.id =1;
todo.name='Buy milk';
todo.completed = false;

x = todo;

const object1 = {a:1, b:2};
const object2 = {c:3, d:4};

const object3={...object1, ...object2};//{ a: 1, b: 2, c: 3, d: 4 } - more modern
const object4 = Object.assign({}, object1, object2) //{ a: 1, b: 2, c: 3, d: 4 }

//Array of objects
const todos =[
    {id:1, name:'Buy Milk'},
    {id:2, name:'Pickup kids'},
    {id:3, name:'Take out trash'}
];

// x = object3
// x = object4

x = todos[0].name

//if want to get all the keys in an object and put those into an array
// x = Object.keys(todos)

//to get the length of it
x = todo.length;
x = Object.keys(todos).length //this give you an array so you can get the length

x = Object.keys(todo)
x = Object.values(todo)

x=Object.entries(todo)
x=todo.hasOwnProperty('name') //true


console.log(x);