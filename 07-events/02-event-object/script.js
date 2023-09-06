const logo = document.querySelector("h1");
logo.addEventListener("click", function (e) {
  // console.log(e.currentTarget);
  //   console.log(e.type);
  //   console.log(e.timeStamp);
  console.log(e.clientX);
  console.log(e.clientY);

  //   e.target.style.backgroundColor = "yellow";
});

//target - the element that triggered the event
