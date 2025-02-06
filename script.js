"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 2.5;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "If you say no, I will be really sad:(",
    "You're breaking my heart ",
    "Just kidding, say yes please! ❤️",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}
function changeImage(image) {
  let imgSrc;

  if (noCount === 1) {
    // Saat pertama kali klik "No", gunakan GIF
    imgSrc = `img/cat-${image}.gif`;
  } else {
    // Klik berikutnya gunakan JPG agar lebih cepat
    imgSrc = `img/cat-${image}.jpg`;
  }

  catImg.src = imgSrc;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
