const apiURL = "https://jsonplaceholder.typicode.com/todos";
const getToDos = () => {
  fetch(apiURL + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //1. loop through the array of object
      data.forEach((todo) => {
        //create a new element div
        const div = document.createElement("div");
        //append or push the todo.title text node to the div
        div.appendChild(document.createTextNode(todo.title));
        // div.textContent = todo.title; //can also do this
        //get element with id of todo-list
        const todoList = document.getElementById("todo-list");
        //append the newly created div into the todoList
        todoList.appendChild(div);
      });
    });
};

getToDos();
