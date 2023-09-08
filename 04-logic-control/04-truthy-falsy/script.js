// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - underfined
// - NaN

const x = false;

if (x){
    console.log('this is true');
}else{
    console.log('this is faulty');
}

// truthy and falsy caveat

const children = 0;

// if (children){ //this return please enter number of children, to fix, do..
if (children !== undefined){

    console.log(` you have ${children} children`);
}else {
    console.log("please enter number of children"); 
}

//Checking for empty array
// const posts = ["post 1", "post 2"] //this return you have post
// const posts =[] //this also return you have post even there is nothing in the array, how to fix?
const posts = [] ;


if (posts.length > 0){
    console.log("you have posts");
}else{
    console.log("no post");
}

//Checking for empty objects
// const user = {
//     name:'Brad', 
// }]
const user = {};
//if there is only {}, it still returns list user since {} is a truthy value
//to fix, we do...
// if (user){
    if (Object.keys(user).length > 0){ //this will return no user // this convert object to array
    console.log("list user");
}else{
    console.log('no user');
}