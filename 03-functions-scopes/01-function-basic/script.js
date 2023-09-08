// function is a way to group code together that you can run later, you can run at anytime and as many time as you want.

function sayHello(){
    console.log("Hello");
}

sayHello()
//define a function
function add(num1, num2){//these are parameters
console.log(num1 + num2);
} 
//call or involk a function
add(5, 10) //these are argument

function substract(num1, num2){
    return num1 - num2;

    console.log('After the return'); //can't run this code, it is unreachable because the return is already exisiting out the fucntion
}

const result = substract(10, 2);
console.log(result);