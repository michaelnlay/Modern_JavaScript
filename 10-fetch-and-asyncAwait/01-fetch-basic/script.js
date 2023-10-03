// you can use fetch to access files or server api
//fetch returns promise

//the fetch api, the first promise that we get back is going to be a response object
// fetch("./movies.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//shorter and cleaner
//Fetching a JSON file
// fetch("./movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//Fetching from a text file
fetch("./text.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

//Fetching from an API
fetch("https://api.github.com/users/michaelnlay")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login));
