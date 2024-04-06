const username = document.getElementById("username");
const password = document.getElementById("password");
const signup = document.getElementById("signup");

signup.onsubmit = function (event) {
  event.preventDefault();

  let lowerCase = /[a-z]/g;
  let upperCase = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.value.trim() == 0 || password.value.trim() == 0) {
    alert("Fill out the empty blanks");
  } else if (username.value.trim() == password.value.trim()) {
    alert("Username can't be the same as password");
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
    location.replace("./login.html");
  }
};
