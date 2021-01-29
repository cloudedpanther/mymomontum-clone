const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(number) {
    const img = new Image();
    img.src = `images/${number}.JPG`
    img.classList.add("bgImage");
    body.appendChild(img);
}

function getRandomNumbers() {
    const numberFloat = Math.random() * IMG_NUMBER;
    const numberInt = Math.floor(numberFloat) + 1;
    return numberInt;
}

function init() {
    const randomNumber = getRandomNumbers();
    paintImage(randomNumber);
}

init();