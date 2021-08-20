const imgNum = 6;
const imgPath = `img/bg${Math.floor(Math.random() * imgNum) + 1}.jpg`;
document.body.style.backgroundImage = `url(${imgPath})`;
