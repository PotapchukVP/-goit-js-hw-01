const taskThree = document.getElementById("taskThree");
let resultThird = "";

function checkForSpam(message) {
  if (typeof message === "string")
    resultThird +=
      message.toLowerCase().includes("spam") ||
      message.toLowerCase().includes("sale")
        ? true + "</br>"
        : false + "</br>";
  else return console.error("argument must be a string");
}

checkForSpam("Latest technology news"); // false
checkForSpam("JavaScript weekly newsletter"); // false
checkForSpam("Get best sale offers now!"); // true
checkForSpam("Amazing SalE, only tonight!"); // true
checkForSpam("Trust me, this is not a spam message"); // true
checkForSpam("Get rid of sPaM emails. Our book in on sale!"); // true
checkForSpam("[SPAM] How to earn fast money?"); // true

taskThree.innerHTML = resultThird;
