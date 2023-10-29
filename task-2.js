const taskTwo = document.getElementById("taskTwo");
let resultTwo = "";

function formatMessage(message, maxLength) {
  if (typeof message === "string" && typeof maxLength === "number") {
    if (message.length <= maxLength) {
      resultTwo += message + "</br>";
    } else resultTwo += message.slice(0, maxLength) + "..." + "<br>";
  } else
    return console.error(`Wrong arguments in function formatMessage() </br>`);
}

formatMessage("Curabitur ligula sapien", 16); // "Curabitur ligula..."
formatMessage("Curabitur ligula sapien", 23); // "Curabitur ligula sapien"
formatMessage("Vestibulum facilisis purus nec", 20); // "Vestibulum facilisis..."
formatMessage("Vestibulum facilisis purus nec", 30); // "Vestibulum facilisis purus nec"
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); // "Nunc sed turpis..."
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); // "Nunc sed turpis a felis in nunc fringilla"

taskTwo.innerHTML = resultTwo;
