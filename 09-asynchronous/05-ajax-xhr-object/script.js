//initialize xml request
const xhr = new XMLHttpRequest();

//call the open method first
// xhr.open("Get", "./movies.json"); //take two things, the type of request, and url of the api or the files
xhr.open("GET", "https://api.github.com/users/michaelnlay/repos");

//create an event handler for event ready state

//readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection estatlished
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function () {
  //   console.log(this.readyState); //use this to access the properties
  //this.readyState will return 2,3,4
  //we want to check if the readyState is at 4 and status is 200
  if (this.readyState === 4 && this.status === 200) {
    //   console.log(JSON.parse(this.responseText));
    // JSON.parse take json string into a regular array
    //if you have an array that is JSON string, and yu want to parse it as a regular array

    const data = JSON.parse(this.responseText); //this return array
    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name} </strong> - ${repo.description}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};
xhr.send();
