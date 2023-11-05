const taskOne = document.getElementById("taskOne");
let resultFirstTask = "";

function slugify(title) {
  if (title == undefined && title == null)
    return console.error(`parameter 'title' is invalid`);
  return (resultFirstTask +=
    title.toLowerCase().split(" ").join("-") + `<br />`);
}
slugify("Arrays for begginers"); // "arrays-for-begginers"
slugify("English for developer"); // "english-for-developer"
slugify("Ten secrets of JavaScript"); // "ten-secrets-of-javascript"
slugify("How to become a JUNIOR developer in TWO WEEKS"); // "how-to-become-a-junior-developer-in-two-weeks"

taskOne.innerHTML = resultFirstTask;
