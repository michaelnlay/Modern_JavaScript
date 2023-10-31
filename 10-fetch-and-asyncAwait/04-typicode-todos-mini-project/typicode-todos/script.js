const apiURL = "https://jsonplaceholder.typicode.com/todos";

//Step 1. fetch the API
const getToDos = () => {
  fetch(apiURL + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data); //put these data into the DOM in the todo-list ID
      //Step 1A. loop through the array of object (each data) to add to the DOM
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

// Step 1B. create a new element to display the todo data on the DOM
const addTodoToDOM = (todo) => {
  //create a new element div
  const div = document.createElement("div");
  //append or push the todo.title text node to the div
  div.appendChild(document.createTextNode(todo.title));
  // div.textContent = todo.title; //can also do this

  //Step 1D.
  // Add custom attribute to each one that has the id, use setAttribute
  div.setAttribute("data-id", todo.id); //use data-id when dealing with custom attribute

  //Step 1C.
  //change background if the todo is completed
  if (todo.completed) {
    div.classList.add("done");
  }

  //get element with id of todo-list
  const todoList = document.getElementById("todo-list");
  //append the newly created div into the todoList
  todoList.appendChild(div);
};

//function for createTodo
const createTodo = (e) => {
  //stop the default behavior
  e.preventDefault();
  // console.log(e.target.firstElementChild.value); //make this within an object
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  //make post request with newTodo as body
  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

//Create init so it can start fire off the functionality when the page is loaded
const init = () => {
  document.addEventListener("DOMContentLoaded", getToDos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
};

init();
