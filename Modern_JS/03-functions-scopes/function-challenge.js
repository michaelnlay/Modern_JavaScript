// Challenge 1
//create a function called getCelsius() takes a temp in F as an argument and returns the temp in celsius

// function getCelsius(fah){
//     const cel = (fah - 32) * 5/9;

    
// return cel     
// }

const getCelsius = (fah) =>(fah - 32) * 5/9;

// console.log(`The temperature is ${getCelsius(32)} \xB0C`);

//Challenge 2
//create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array

//result {min: 1, max: 5}

function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    // console.log(min);
    // console.log(max);

    return {
        min:min,
        max:max
    }
}

console.log(minMax([1,3,2,3,4]));


