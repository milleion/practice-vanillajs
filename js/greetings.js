const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutBtn = document.querySelector("#logout-button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello, ${username}!`;
}

function hide(element) {
  element.classList.add(HIDDEN_CLASSNAME);
}

function hideById(id) {
  const element = document.getElementById(id);
  hide(element);
}

function handleNameSubmit() {
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function handleLogoutClick() {
  window.location.reload();
  localStorage.removeItem(USERNAME_KEY);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  hideById("weather");
  hideById("quote");
  hideById("todo");
  hide(logoutBtn);
  loginForm.addEventListener("submit", handleNameSubmit);
} else {
  hide(loginForm);
  paintGreeting(savedUsername);
  logoutBtn.addEventListener("click", handleLogoutClick);
}
