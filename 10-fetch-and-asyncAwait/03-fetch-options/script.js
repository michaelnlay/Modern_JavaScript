// function createPost(post) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     //when you make a post request, you post data into the server, need to add data into the body
//     //since post is a JS object, so need to convert to JSON string
//       body: JSON.stringify({
//           title: post.title,
//           body: post.body
//     }),
//   });
// }

//SIMPLIFY by using destructure method
function createPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    //when you make a post request, you post data into the server, need to add data into the body
    //since post is a JS object, so need to convert to JSON string
    body: JSON.stringify({
      //   title: title, //since this is the same, dont need both
      title,
      body,
    }),
    //in HTTP, we can send header
    headers: {
      "Content-Type": "application/json",

      //in many case, you will send token so you authenticate with API
      token: "abc123",
    },
  })
    .then((res) => res.json()) //the same that return promise
    .then((data) => console.log(data));
}

createPost({ title: "My Post", body: "My post is awesome!" });
