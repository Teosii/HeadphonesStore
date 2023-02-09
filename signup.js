
// Sign up Page
let usernameSignUp = document.querySelector(".signUpUsername");
let passwordSignUp = document.querySelector(".signUpPassword");
let signupBtn = document.querySelector(".signUpBtn");

let usernameDB = localStorage.getItem("username");
let passwordDB = localStorage.getItem("password");

signupBtn.addEventListener("click", signUp);
function signUp() {
  if (usernameSignUp.value == usernameDB) {
    if (passwordSignUp.value == passwordDB) {
      //Return to the first page
      window.open("index.html", "_self");
    } else {
      alert("Your password is wrong!");
    }
  } else {
    alert("Your username is incorrect!");
  }
}
