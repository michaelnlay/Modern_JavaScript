const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post Two", body: "this is post two" },
];

// function createPost(post, cb) { //remove cb because using promise
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
      //   cb(); //instead using cb, wrap everything inside a promise
    }, 12000);
  });
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
  }
  //   getPosts //this will execute in the cb()
).then(getPosts);
