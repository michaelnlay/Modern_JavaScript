//create a promise
const promise = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

//handle a promise
promise.then(() => {
  //anything we pass into the resolve
  console.log("Promise consumed...");
});

//you can also add .then here
//in addition, alot of time, you need to return data from promise:
//pass into the resolve()
new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    resolve({
      name: "John",
      age: 30,
    });
  }, 1000);
}).then((user) => {
  console.log(user);
});

console.log("hello from global scrope");

//handle error
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({
        name: "Michael",
        age: 30,
      });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise has been resolved or rejected!");
  });

console.log("hello from global scrope");
