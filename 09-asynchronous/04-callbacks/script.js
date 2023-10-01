// function toggle(e) {
//   e.target.classList.toggle("danger");
// }

// document.querySelector("button").addEventListener("click", toggle); //toggle is a callback function in addEventListener function

//callback is not always asynchronous
//for example, forEach and map on array, it is not asyn, it is executed right away

const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post Two", body: "this is post two" },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 12000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 5000);
}

//create post
createPost(
  {
    title: "Post three",
    body: "this is post three",
  },
  getPosts //this will execute in the cb()
);

//this intially only return post 1 and 2 not 3, the reason is createPost probably took longer than getPost
//To solve is to use callback function
//1, getPost() is a callback of createPost()

// getPosts(); //instead of this, we will pass this in the createPost
