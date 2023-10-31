const apiURL = "https://jsonplaceholder.typicode.com/todos";

//Step 1. fetch the API
const getToDos = () => {
  fetch(apiURL + "?_limit=10")
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

  //Step 3A. create a new class
  div.classList.add("todo");
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

//Step 2. function for createTodo
const createTodo = (e) => {
  //stop the default behavior
  e.preventDefault();
  console.log(e.target.firstElementChild.value); //make this within an object
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  //Step 2A. make post request with newTodo as body
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

//Step 3. function for toggle completed
const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    //then we want to toggle
    e.target.classList.toggle("done");
    //Step 3A. update to do
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
    // console.log(e.target.dataset.id);
  }
};

//Step 3A. function for update to do
const updateTodo = (id, completed) => {
  // console.log(id, completed);
  fetch(`${apiURL}/${id}`, {
    //include id for put request
    method: "PUT",
    body: JSON.stringify({ completed }), //you can create a new function to update the title as well
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));
};

//Step 4. fuction for deleteTodo;
const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;
    console.log("Deleting todo with ID:", id);

    fetch(`${apiURL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Todo deleted successfully.");
          e.target.remove(); // Remove the todo element from the DOM.
        } else {
          console.error("Failed to delete the todo.");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the todo:", error);
      });
  }
};

//Create init so it can start fire off the functionality when the page is loaded
const init = () => {
  document.addEventListener("DOMContentLoaded", getToDos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
};

init();
