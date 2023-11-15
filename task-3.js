const taskThree = document.getElementById("taskThree");
let resultThird = [];

// function filterArray(numbers, value) {
//   let resultArray = [];
//   if (Array.isArray(numbers) && typeof value === "number") {
//     for (const number of numbers) if (number > value) resultArray.push(number);
//     resultThird += resultArray + `</br>`;
//     return resultArray;
//   }

//   return console.error("parameters must be a number");
// }

// taskThree.innerHTML = resultThird;

const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
