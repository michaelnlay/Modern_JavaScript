const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById("item-input").value;
  const priorty = document.getElementById("item-priority").value;

  //simple form validation
  if (item === "" || priorty === "0") {
    alert("Please fill in all fields");
    return;
  }
  console.log(item, priorty);
}

//form data object
function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form); //pass in the form, global scope
  const item = formData.get("item");
  const priority = formData.get("priority");

  console.log(item, priority);
}

form.addEventListener("submit", onSubmit);
form.addEventListener("submit", onSubmit2);
