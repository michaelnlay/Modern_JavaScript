//querySelectorAll()
const listItems = document.querySelectorAll(".item");

//when log listItems - it returns NodeList like array structure
console.log(listItems[1].innerText); //return orange juice

//if you want to change color to red for all the list item
listItems.style.color = "red"; //wont work because you are trying to access style on the nodeList
//style is for a specific element

//to fix, use forEach loop
// listItems.forEach((item) => {
//   item.style.color = "red";
// });

// listItems.forEach((item, index) => {
//     item.style.color = "red";
//     if (index === 1) {
//         item.remove() //return the index of 1 item
//     }
//     if (index === 0) {
//         item.innnerHTML = `Organes
//         <button class......` //this won't remove the button after the text is changed.
//     }
//   });

//using getelementbyclass name
const listItem2 = document.getElementsByClassName("item"); //return HTMLCollection

//you can't use forEach for the getElementbyClass name because this does not return an array (nodeList), just HTMLCollection

//can fix by using array.from() to convert to array
const listItemArray = Array.from(listItem2);
listItemArray.forEach((item) => {
  console.log(item.innerText);
});

//getElementByTagName also return HTMLCollection
