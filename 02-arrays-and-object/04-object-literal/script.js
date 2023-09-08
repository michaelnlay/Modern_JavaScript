//Object Literal

// A common data structure that holds key/value pairs

let x;
const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: { street: "123 Main st", city: "Boston", State: "N/A" },
  hobbies:['music', 'sport']
};

x = person.name;
x = person.address.city
x = person.hobbies[1]

person.name = "Jane Doe"
x = person;

delete person.address; // delete the address

person.hasChildren = true;


//writing a function

person.greet = function(){ //assign a funciton to this greet property
console.log(`hello, my name is ${this.name}`); //access the name using the this keyword
}

person.greet()
x = person;


console.log(x);
