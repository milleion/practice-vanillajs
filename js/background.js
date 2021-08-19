const imgNum = 10;
const chosenImage = `img/${Math.floor(Math.random() * imgNum)}.jpg`;
document.body.style.backgroundImage = `url(${chosenImage})`;
