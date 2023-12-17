const inputName = document.getElementById("name-input");
let outputString = document.getElementById("name-output");

inputName.addEventListener("input", handleInput);

function handleInput(event) {
  event.preventDefault();
  const inputValue = inputName.value.trim();
  outputString.textContent = inputValue || "Anonymous";
}
