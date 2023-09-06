const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");

// div.innerText='Hello World!'//not best practice, it is meant for get and update the exisiting one not creating one
const text = document.createTextNode("Hello world!");
div.appendChild(text); //we put the text inside the div

// console.log(div);
// document.body.appendChild(div);
document.querySelector("ul").appendChild(div);
