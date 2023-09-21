// setInterval & clearInterval
// what it will do is repeatedly call a function or execute a snippet with a fixed time delay between each call

//clearInterval is to stop the setinterval from running

// const intervalID = setInterval(myCallback, 1000, "hello"); //can also pass augument

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== "black") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }

//function for random color
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);
