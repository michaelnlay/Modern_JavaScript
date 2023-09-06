let output;

// Get child element the parent
const parent = document.querySelector(".parent");
output = parent.children; //children is a property not method
//since it is like an array structure
output = parent.children[2];
//change name of children[2]
output = parent.children[2].innerText = "special child";

parent.firstElementChild.innerText = "Child one"; //firstElementChild is a property
parent.lastElementChild.style.color = "blue";

//Get parent elements from a child using property parentElement
const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

//Sibling elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = "green";

console.log(output);
// console.log(child);
