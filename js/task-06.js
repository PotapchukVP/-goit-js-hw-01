const controls = document.querySelector("#controls");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

const boxes = document.getElementById("boxes");

createButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userValue = parseInt(
    controls.querySelector("input[type= number]").value,
    10
  );
  createBoxes(userValue);
});

destroyButton.addEventListener("click", (event) => {
  event.preventDefault();
  boxes.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const number = controls.querySelector("input[type= number]");
  const minValue = parseInt(number.min, 10);
  const maxValue = parseInt(number.max, 10);

  if (amount < minValue || amount > maxValue)
    return console.error("Amount must be from 1 to 100");

  let size = { width: 30, height: 30 };
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div class="box-style" style="background-color: ${getRandomHexColor()}; width: ${
      size.width
    }px; height: ${size.height}px;"></div>`;
    size.width += 10;
    size.height += 10;
  }
  boxes.innerHTML = markup;
  number.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
