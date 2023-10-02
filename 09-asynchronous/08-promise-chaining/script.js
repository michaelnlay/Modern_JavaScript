//Promise setup and creation
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error: something is wrong");
    }
  }, 1000);
});

//handle promise
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log("run no more what!");
  });
