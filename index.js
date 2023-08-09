const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const clearButtonEl = document.getElementById("clear-button");
const shoppingListEl = document.getElementById("shopping-list");
const shoppingList = [];

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  if (inputValue.trim() === "") {
    alert("Please enter a value!");
    return;
  }
  appendItemSound();

  shoppingList.push(inputValue);
  localStorage.clear();

  localStorage.setItem("list", JSON.stringify(shoppingList));

  clearShoppingListEl();
  renderShoppingList();

  clearInputFieldEl();
});

clearButtonEl.addEventListener("click", function () {
  removeItemSound();
  localStorage.clear();
  clearShoppingListEl();
});

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function renderShoppingList() {
  let renderList = JSON.parse(localStorage.getItem("list"));
  for (let item of renderList) {
    let newEl = document.createElement("li");
    newEl.innerText = item;
    shoppingListEl.appendChild(newEl);
  }
}

function appendItemSound() {
  const audio1 = document.querySelector("#add-item-sound");
  audio1.play();
}

function removeItemSound() {
  const audio2 = document.querySelector("#remove-item-sound");
  audio2.play();
}
