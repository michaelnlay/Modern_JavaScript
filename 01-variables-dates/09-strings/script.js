let x;
const name = 'John'
const age = 31;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old `;

// String properties and methods 
// const s = 'hello world'

const s =  new String('hello world')
x = typeof s

x = s.length;

// Access value by key
x = s[1]
x = s.__proto__;

x = s.toUpperCase();
x = s.charAt(3);

x = s.indexOf('h') // return 0
x = s.substring(0,4) //return hell
x = s.substring(7) //return orld

x = s.slice(0,4) //return hell
x = s.slice(-11) // start from the end, return hello world

x ='       hello world'
x = s.trim()

x = s.replace('world', 'john'); //return hello john
x = s.includes('world')

x = s.valueOf()

x = s.split(' ')


console.log(x);