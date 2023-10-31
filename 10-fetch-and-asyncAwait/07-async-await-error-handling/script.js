const getUsers = async () => {
  try {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await fetch("https://httpstat.us/404");
    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://httpstat.us/500");
  if (!res.ok) {
    throw new Error("Request failed");
  }

  const data = await res.text();
  console.log(data);
};

// getUsers();
// getPosts();

//the above would be catch the error since it does not have the try...catch method to fix, we can also use
getPosts().catch((error) => console.log(error));
