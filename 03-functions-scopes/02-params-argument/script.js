// function registerUser(user){

//     //to have a default value - before 2015
//     if(!user){
//         user = 'Bot '
//     }

//     return user + 'is registered'
// }
// console.log(registerUser());

// to have default value (Params) - after 2015 ES6

function registerUser(user = "Bot ") {
  return user + "is registered";
}
// console.log(registerUser());

// Rest Params

// function sum(...numbers){
//     return numbers;
// }
// console.log(sum(1,2,3,4,5,6));// result [ 1, 2, 3, 4, 5, 6 ]

//Loop throught the number and sum them

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i <= numbers.length; i++) {
    total += i;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6));

//Objects as params =================================================
function loginUser(user) {
  return `The user ${user.name} with id of ${user.id} is logged in`;
}

const user = {
    id:1,
    name:'John'
};

console.log(loginUser(user))

console.log(loginUser({
    id:2,
    name:'Sara',
}))

//Array as params =================================================

//create a function that will get a random number from specific array that we pass in 

function getRandomNum(arr){ //function that take array
    const randomIndex = Math.floor(Math.random() * arr.length); //Math.random returns 0 to 1; Math.floor to round down; arr.length is to calculate the length of the array arr
    const item = arr[randomIndex]; 
    
    console.log(randomIndex, item);

}
getRandomNum([1,2,3,4,5,6,7,8])

//Another way is using rest operator
function getRandomNum(...arr){ //this return an array when using rest operator
    const randomIndex = Math.floor(Math.random() * arr.length); //Math.random returns 0 to 1; Math.floor to round down; arr.length is to calculate the length of the array arr
    const item = arr[randomIndex]; 
    
    console.log(randomIndex, item);

}
getRandomNum(1,2,3,4,5,6,7,8)


//create a function that will get a random number from specific array that we pass in 
function RandomNum(array){
    const randomIdx = Math.floor(Math.random()*array.length)
    const getItem = array[randomIdx];

    console.log(randomIdx, getItem);
}
RandomNum([1,333,3,23,6]);