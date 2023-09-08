// for (let i=0; i <=10; i++){

//     if (i===7){
//         console.log('7 is my lucky number');
//     }else {
//         console.log('Number ' + i);
//     }

// }

// Nest loops

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
// console.log(` ${i} * ${j} = ${i*j}`);
// //return 1* 1 = 1, 1*2 = 2; 1*3=3....2*1 =2; 2*2=4...
//     }
// }

//Loop through an array
const names = ["Brad", "Sam", "Sara", "John", "Tim"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Sara") {
    console.log(names[i] + " is the best");
  } else {
    console.log(names[i]);
  }
}
