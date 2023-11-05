const taskThree = document.getElementById("taskThree");
let resultThird = [];

function filterArray(numbers, value) {
  let resultArray = [];
  if (Array.isArray(numbers) && typeof value === "number") {
    for (const number of numbers) if (number > value) resultArray.push(number);
    resultThird += resultArray + `</br>`;
    return resultArray;
  }

  return console.error("parameters must be a number");
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

taskThree.innerHTML = resultThird;
