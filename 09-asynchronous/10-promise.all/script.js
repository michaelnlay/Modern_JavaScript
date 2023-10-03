//many different way to access data
//you can use callback (netted callbacks), promise chaining, another one is using promise.all

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}
const moviesPromise = getData("./movies.json");
const directorsPromise = getData("./directors.json");

const dummyPromise = new Promise((resolve, reject) => {
  resolve("Dummy");
});

Promise.all([moviesPromise, directorsPromise, dummyPromise]).then((data) => {
  console.log(data);
});
