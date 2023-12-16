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
  clearBoxes();
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
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.className = "box-style";
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = size.width + "px";
    newBox.style.height = size.height + "px";
    boxes.appendChild(newBox);

    size.width += 10;
    size.height += 10;
  }
  number.value = "";
}

function clearBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

function destroyBoxes() {
  clearBoxes();
  boxes.innerHTML = "";
}
