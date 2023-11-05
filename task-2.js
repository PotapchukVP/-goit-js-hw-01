const taskTwo = document.getElementById("taskTwo");
let resultTwo = [];

function makeArray(firstArray, secondArray, maxLength) {
  const bothArray = firstArray.concat(secondArray);
  let resultArray = [];

  if (maxLength >= bothArray.length) {
    resultTwo += bothArray + `</br>`;
    return bothArray;
  }

  for (let i = 0; i < maxLength; i++) resultArray.push(bothArray[i]);
  resultTwo += resultArray + `</br>`;
  return resultArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

taskTwo.innerHTML = resultTwo;
