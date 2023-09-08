// Function declaration
// console.log(addDollarSign(100)); This will work too because in regular funciton declaration, you can call it beforehand

function addDollarSign(value){
    return '$' + value;
}

console.log(addDollarSign(100));

//Function Expression
const addPlusSign = function(value){
    return '+' + value;

}
console.log(addPlusSign(200));