const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const loginBtn = document.getElementById("login-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.onsubmit = function (event) {
  event.preventDefault();
  if (username.value.trim().length == 0 || password.value.trim().length == 0) {
    alert("Fill out the empty blanks");
  } else {
    const users = JSON.parse(localStorage.users);
    for (let i = 0; i < users.length; i++) {
      if (
        username.value.trim() == users[i].username &&
        password.value.trim() == users[i].password
      ) {
        window.location.href = "../main.html";
      }
    }
  }
};
