// // setTimeout(() => {
// //   //   console.log("Hello from callback");
// // }, 2050);
// // console.log("hello from global scope");

// setTimeout(changeText, 5000);

// //return hello from global scope
// //return Hello from callback
// //the reason is the callback is put on the task queues, and wait on the task queues to clear before it's run

// function changeText() {
//   document.querySelector("h1").textContent = "from callback";
//   //   console.log("hello from callback");
// }
// console.log("hello from global scope");

function changeText() {
  document.querySelector("h1").textContent = "hello from callback";
  //   console.log("hello from callback");
}
const timerID = setTimeout(changeText, 10000);

document.querySelector("#cancel").addEventListener("click", () => {
  console.log(timerID);
  clearTimeout(timerID);
  console.log("timer canceled");
});
