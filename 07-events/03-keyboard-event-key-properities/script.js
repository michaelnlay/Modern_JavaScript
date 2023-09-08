const itemInput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("keypress");
};

const onKeyUp = (e) => {
  console.log("keyup");
};

//Best practice to have event listener on the bottom

// itemInput.addEventListener('keypress', onKeyPress)
itemInput.addEventListener("keyup", onKeyUp);
