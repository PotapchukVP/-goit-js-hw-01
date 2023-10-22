const taskTwo = document.getElementById("taskTwo");
let resultTwo = "";

function getShippingMessage(country, price, deliveryFee) {
  if (
    typeof country !== "string" &&
    price !== "number" &&
    deliveryFee !== "number"
  ) {
    return console.error("Invalid parameters in function getShippingMessage");
  }

  let totalPrice = price + deliveryFee;
  // return `Shipping to ${country} will cost ${totalPrice} credits`;
  resultTwo += `Shipping to ${country} will cost ${totalPrice} credits</br>`;
}

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);

taskTwo.innerHTML = resultTwo;
