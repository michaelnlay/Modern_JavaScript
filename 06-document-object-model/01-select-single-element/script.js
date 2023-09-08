// document.getEleentById()

//use getAttribute to get the id
console.log(document.getElementById("app-title").getAttribute("id")); //this will log out id app-title

//change id by using set attribute
document.getElementById("app-title").id = "new-id";
document.getElementById("app-title").setAttribute("class", "title");

//Get/change content in that elmement
console.log(title.textContent); //return Shopping list
title.textContent = "Hello world"; //now replace the shopping list to hello world
title.innerText = "Hello Again";
title.innerHTML = <strong>Shopping List</strong>;

//change styles
title.style.color = "red";

//selector to select single element
//document.querySelector() // you can select by class or anything at all
console.log(document.querySelector('h1')); //only select the first one if there are multiple h1 on the page

//select by ID
console.log(document.querySelector('#app-title'))

//select by class
console.log(document.querySelector('.container'))

//grab input where type = text
console.log(document.querySelector('input[type="text"]'));

//grab using pseudo selector
console.log(document.querySelector('li:nth-child(2)')); //return the second item of the list

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = "Apple Juice"
//change color to red
secondItem.style.color ="red"

//you can use queryselector on all the element not just on the dom document