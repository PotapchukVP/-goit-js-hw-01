const taskOne = document.getElementById("taskOne");
let resultFirstTask = "";

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (
    typeof quantity === "number" &&
    typeof pricePerDroid === "number" &&
    typeof customerCredits === "number"
  ) {
    if (customerCredits < totalPrice)
      resultFirstTask += `Insufficient funds!</br>`;
    else
      resultFirstTask += `You ordered ${quantity} droids worth ${totalPrice} credits!</br>`;
  } else
    resultFirstTask += `Wrong format data in arguments of makeTransaction() function </br>`;
}
makeTransaction(5, 3000, 23000);
makeTransaction(3, 1000, 15000); // "You ordered 3 droids worth 3000 credits!"
makeTransaction(10, 5000, 8000); // "Insufficient funds!"
makeTransaction(8, 2000, 10000); // "Insufficient funds!"
makeTransaction(10, 500, 5000);

taskOne.innerHTML = resultFirstTask;
