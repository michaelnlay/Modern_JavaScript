// const posts = [
//   { title: "Post One", body: "this is post one" },
//   { title: "Post Two", body: "this is post two" },
// ];

// // function createPost(post, cb) { //remove cb because using promise
// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//       //   cb(); //instead using cb, wrap everything inside a promise
//     }, 2000);
//   });
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement("div");
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector("#posts").appendChild(div);
//     });
//   }, 5000);
// }

// //create post
// createPost(
//   {
//     title: "Post three",
//     body: "this is post three",
//   }
//   //   getPosts //this will execute in the cb()
// ).then(getPosts);

const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post Two", body: "this is post two" },
];

// create a function for createPost, in this function, it returns promise
function createPost(post) {
  //promise takes on a callback function with resolve and reject as parameters
  return new Promise((resolve, reject) => {
    //use setTimeOut to delay the operation
    setTimeout(() => {
      //what would you do if there is an error
      let error = true;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("Something went wrong!"); //this only give you a red text for the error on the server
        //to catch it and display on the page, use catch after the then below
      }
    }, 2000);
  });
}

//create a new function to get all the posts and display them on webpage
function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      //create a new element div
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 5000);
}

//show Error on the DOM
function showError(error) {
  const h3 = document.createElement("h3");
  h3.innerHTML = `<strong>${error}</strong>`;
  document.querySelector("#posts").appendChild(h3);
}

//call createPost and pass in argument (new object) in them
createPost({
  title: "post 3",
  body: "this is post 333",
})
  .then(getPosts)
  .catch(showError)
    .finally(() => {
      //This code block will run regardless of whether the promise is resolved or rejected
    console.log("Promise has been settled");
  }); 
