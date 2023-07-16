// IIFE (Immeidately Invoked Function Expressions)

//There is a way in JavaScript that lets us create a function or declare a function and invoke at the same time

(function(){
    const user = 'John';
    console.log(user);''

    const hello =()=> console.log('Hello from IIFE'); 
    hello(); //have to be inside the function scope to work
})();