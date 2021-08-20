const imgNum = 6;
const imgPath = `img/${Math.floor(Math.random() * imgNum)}.jpg`;
document.body.style.backgroundImage = `url(${imgPath})`;
