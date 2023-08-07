const colorObj = {
    color1: 'red',
    color2:'blue',
    color3:'purple',
    color4:'pink',
}

//to get key
// for (const key in colorObj){
//     console.log(key);
// }

//to get value
// for (const key in colorObj){
// console.log(key, colorObj[key]);
// }

//Use for in loop in array
const colorArr = ['red', 'blue', 'purple', 'pink']

for (const color in colorArr){
console.log(color, colorArr[color]);

}