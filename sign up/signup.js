const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const signupBtn = document.getElementById("signup-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const signup = document.getElementById("signup");

signup.onsubmit = function (event) {
  event.preventDefault();

  let lowerCase = /[a-z]/g;
  let upperCase = /[A-Z]/g;
  let numbers = /[0-9]/g;
  if (
    username.value.trim().length == 0 ||
    password.value.trim().length == 0 ||
    password2.value.trim().length == 0
  ) {
    alert("Fill out the empty blanks");
  } else if (!password.value.trim().match(lowerCase)) {
    alert("Your password must contains an LowerCase");
  } else if (!password.value.trim().match(numbers)) {
    alert("Your password must contains a number");
  } else if (!password.value.trim().match(upperCase)) {
    alert("Your password must contains an Uppercase");
  } else if (password.value.trim().length < 8) {
    alert("Password must contain more than 8 charaters");
  } else if (password2.value !== password.value) {
    alert("Failed to confirm password, try again");
  } else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      users.push({
        username: username.value.trim(),
        password: password.value.trim(),
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            username: username.value.trim(),
            password: password.value.trim(),
          },
        ])
      );
    }
    location.replace("../log%20in/login.html");
  }
};
