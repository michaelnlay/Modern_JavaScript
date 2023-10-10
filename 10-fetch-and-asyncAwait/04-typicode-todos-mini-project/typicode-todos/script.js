const apiURL = "https://jsonplaceholder.typicode.com/todos";
const getToDos = () => {
  fetch(apiURL + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getToDos();
