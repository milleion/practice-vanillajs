const imgNum = 7;
const imgPath = `img/${Math.floor(Math.random() * imgNum)}.jpg`;
document.body.style.backgroundImage = `url(${imgPath})`;
