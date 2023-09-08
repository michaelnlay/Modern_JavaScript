// const socials = ['Twitter', 'facebook', 'LinkedIn'];

// console.log(socials.__proto__);

//for array.forEach, it takes funciton as a argument
// socials.forEach(function(social){ //insdie the funciton, pass in the element in side the array ... this calls the callback function
// console.log(social);
// })

//Can also do a shorter version
// // socials.forEach((social, index, arr) => console.log(social, index, arr)) //on top of the item, can also pass in index and array

// function logSocial(social){
//     console.log(social);
// }

// socials.forEach(logSocial)

//using with Object
const socialObj = [
    {name: 'Twitter', url: 'www.a.com'},
    {name: 'facebook', url: 'www.b.com'},
    {name: 'LinkedIn', url: 'www.c.com'}

]

socialObj.forEach((item)=>console.log(item.name));
