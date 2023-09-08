//Loop through Array
// const items = ['book', 'ipad', 'computer']

// //instead of using for loop
// ///let's use for of loop
// for (const item of items){
//     console.log(item);
// }

//use the for of loop in object
const users = [{
    name:'brad'
}, {name:'mike'}, {name:'lee'}]
for (const user of users){
    console.log(user);
}

//Loop through string
const str = 'Hello World'
for (const letter of str){
    if (letter === 'l'){
        break;
    }
    console.log(letter);
}

//Loop over map
const map = new Map();
//now we can add key value pair
map.set('name', 'John')
map.set('age', 30)

for (const [key, value] of map){
    console.log(key, value);
}
