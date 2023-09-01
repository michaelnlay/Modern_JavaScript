//First way - DO NOT write event listener inline in HTML
//for example

{
  /* <button onclick ="alert("hello")"></button> */
}

//Second way - JS event listener

const clearBTN = document.querySelector("clear");
// clearBTN.onclick = function () {
//   alert("hello");
// };

//Third way (recommended)
//AddEventlistner()

// clearBTN.addEventListener("click", function () {
//   alert("hello");
// });

clearBTN.addEventListener("click", onClear); //don't put onClear() this will invoke right away
// there is a remove adeventlister method

//use setTimeout() to wait 5 sec before remove the eventlister
// setTimeout() //this take two things, a function and milseond
setTimeout(() => clearBTN.removeEventListener("click", onClear), 5000);
