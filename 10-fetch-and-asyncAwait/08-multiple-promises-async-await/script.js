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

// getData("./movies.json")
//   .then((movies) => {
//     console.log(movies);
//     return getData("./directors.json");
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

//Use Async Await
async function getAllData() {
  const movies = await getData("./movies.json");
  // console.log(movies);
  const directors = await getData("./directors.json");
  // console.log(directors);
  const actors = await getData("./actors.json");
  console.log(actors, movies, directors);
}

//Use fetch to get data
async function getAllDataWithFetch() {
  const moviesRes = await fetch("./movies.json");
  const movies = moviesRes.json();

  const directorsRes = await fetch("./directors.json");
  const directors = directorsRes.json();

  const actorsRes = await fetch("./actors.json");
  const actors = actorsRes.json();

  console.log(movies, directors, actors);
}

//get data with promise.All with async await function
async function getAllDataWithPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch("./movies.json"),
    fetch("./actors.json"),
    fetch("./directors.json"),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataWithPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch("./movies.json").then((res) => res.json()),
    fetch("./actors.json").then((res) => res.json()),
    fetch("./directors.json").then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}

// getAllData();
// getAllDataWithFetch();
// getAllDataWithPromiseAll();

getAllDataWithPromiseAll2();
