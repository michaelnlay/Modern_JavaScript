// if (true) {
//     console.log('This is ture');
// }

// // if (false){
// //     console.log('this is fault')
    
// // }

// const x = 10;
// const y = 5; 

// if (x > y){
//     console.log(`${x} is greater than ${y}`);
// }

//============================else if nesting

const d = new Date(10,30,2022, 8, 0, 0)
const hour = d.getHours();

if (hour < 12){
    console.log('Good morning');
} else if(hour < 16){
    console.log('Good afternoon');
}else{
    console.log('good night');
}


// console.log(hour);

//Nested if 
if (hour < 12){
    console.log('Good morning');
    if (hour ===6){
        console.log("wake up");
    }
} else if(hour < 16){
    console.log('Good afternoon');
}else{
    console.log('good night');
    if (hour >=20){
        console.log('zzzz');
    }
}
