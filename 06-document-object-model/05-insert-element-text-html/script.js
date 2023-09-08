// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector("li:first-child");
//   const p = document.createElement("p");
//   p.textContent = "insertAdjacentText";

  item.insertAdjacentText("afterend", "insertAdjacentText");
}

// insertAdjacentHTML Example

//insertBefore Example

insertElement();
