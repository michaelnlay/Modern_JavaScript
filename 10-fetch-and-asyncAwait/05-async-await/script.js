const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 20 });
  }, 1000);
});

// promise.then((data) => console.log(data));

//alternate solution using async and await
async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

// use async and await on the fetch api
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();

  console.log(data);
}

// getUsers();

//use arrow function, the async does not go in front of the const
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();

  console.log(data);
};
getPosts();
