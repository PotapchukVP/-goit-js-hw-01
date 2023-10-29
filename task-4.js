const taskFour = document.getElementById("taskFour");
let resultFour = "";

const shippingCountry = ["China", "Chile", "Australia", "Jamaica"];
const shippingPrice = [100, 250, 170, 120];

function getShippingCost(country) {
  country = country.toLowerCase();
  if (typeof country === "string")
    for (let i = 0; i < shippingCountry.length; i++) {
      if (shippingCountry[i].toLowerCase() === country) {
        resultFour += `Shipping to ${shippingCountry[i]} will cost ${shippingPrice[i]} credits </br>`;
        break;
      }
    }
  else resultFour += "Sorry, there is no delivery to your country </br>";
}

getShippingCost("Australia"); // "Shipping to Australia will cost 170 credits"
getShippingCost("Germany"); // "Sorry, there is no delivery to your country"
getShippingCost("China"); // "Shipping to China will cost 100 credits"
getShippingCost("Chile"); // "Shipping to Chile will cost 250 credits"
getShippingCost("Jamaica"); // "Shipping to Jamaica will cost 120 credits"
getShippingCost("Sweden"); // "Sorry, there is no delivery to your country"

taskFour.innerHTML = resultFour;
