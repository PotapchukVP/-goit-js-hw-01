const loginForm = document.querySelector(".login-form");
const submitButton = loginForm.querySelector("button");

let userLogin = {
  email: "",
  password: "",
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  userLogin.email = loginForm.elements.email.value.trim();
  userLogin.password = loginForm.elements.password.value.trim();

  if (!userLogin.email || !userLogin.password) {
    alert("All form fields must be filled in");
  } else {
    console.log(
      `User email: ${userLogin.email} User password: ${userLogin.password}`
    );
    loginForm.reset();
  }
});
