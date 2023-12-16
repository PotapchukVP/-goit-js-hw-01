const categoryList = document.querySelector("#categories");
const items = categoryList.querySelectorAll(".item");

console.log(`Number of categories ${items.length}`);

items.forEach((item) => {
  const category = item.querySelector("h2");
  const elements = item.querySelectorAll("ul li");
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
