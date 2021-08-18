const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
  show(greeting);
}

function hide(element) {
  element.classList.add(HIDDEN_CLASSNAME);
}

function show(element) {
  element.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  show(loginForm);
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    hide(loginForm);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
  });
} else {
  paintGreeting(savedUsername);
}
