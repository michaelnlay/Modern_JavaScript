// create a function called calculator that takes three parameters: num1, num2 and operator. 
// the operator can be +, -, *, or /
//function return result of calculation
// if anything other than the four operators is passed in, the funciton should return an error message

// Example
// calculator(5, 2, '+' ) // return 7
// calculator(5, 2, '-' ) // return 3
// calculator(5, 2, '&' ) // return error message

function calcultor(num1, num2, operator){
    let result;
if (operator === "+"){
    result = num1 + num2;
    return result;
}
else if(operator === "-"){
    result = num1 - num2;
    return result;

}
else if (operator === "*"){
    result = num1 * num2;
    return result;
}
else if (operator === "/"){
    result = num1 / num2;
    return result;
}
else(
    console.log("error message")
)


}

console.log(calcultor(5,3,'-'));