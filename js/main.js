'use strict';

const KeyCode = {
  LEFT: 37,
  RIGHT: 39,
};

const startScreen = `main--welcome`;
const template = document.querySelector(`#templates`).content;
const screenElements = [...template.querySelectorAll(`.main`)];
const appElement = document.querySelector(`.app`);
const startScreenIndex = screenElements.findIndex((screenElement) => screenElement.classList.contains(startScreen));
const maxArrayLength = screenElements.length;
let currentIndex = startScreenIndex;


const showScreen = (index) => {

  if (currentIndex < 0 || null) {
    return;
  }

  const stepContent = screenElements[index];
  appElement.innerHTML = ``;
  appElement.appendChild(stepContent);
};

const turn = (isLeft = true) => {
  if (isLeft) {
    currentIndex = (maxArrayLength + currentIndex - 1) % maxArrayLength;
  } else {
    currentIndex = (currentIndex + 1) % maxArrayLength;
  }

  showScreen(currentIndex);
};

const onKeyDown = (evt) => {
  if (evt.keyCode === KeyCode.RIGHT) {
    turn(false);
  }

  if (evt.keyCode === KeyCode.LEFT) {
    turn(true);
  }
  return;
};

document.addEventListener(`keydown`, onKeyDown);

showScreen(currentIndex);
