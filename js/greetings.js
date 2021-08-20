const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
}

function hide(element) {
  element.classList.add(HIDDEN_CLASSNAME);
}

function hideById(id) {
  const element = document.getElementById(id);
  hide(element);
}

function handleSubmit() {
  hide(loginForm);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  hideById("weather");
  hideById("quote");
  hideById("todo");
  loginForm.addEventListener("submit", handleSubmit);
} else {
  hide(loginForm);
  paintGreeting(savedUsername);
}
