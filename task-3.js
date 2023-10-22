const taskThree = document.getElementById("taskThree");
let resultThird = "";

function getElementWidth(content, padding, border) {
  content = Number.parseFloat(content);
  padding = Number.parseFloat(padding);
  border = Number.parseFloat(border);

  if (Number.isNaN(content) || Number.isNaN(padding) || Number.isNaN(border)) {
    return "Invalid input. Please provide valid numeric values.";
  }

  const elementWidth = content + padding * 2 + border * 2;
  // return elementWidth;
  resultThird += `${elementWidth}</br>`;
}

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
taskThree.innerHTML = resultThird;
