'use strict';

const KeyCode = {
  LEFT: 37,
  RIGHT: 39,
};

const arrowsElementNode = document.createElement(`div`);
arrowsElementNode.className = `arrows__wrap`;
arrowsElementNode.innerHTML = `
  <style>
    .arrows__wrap {
      position: absolute;
      top: 135px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn" id="previous"><-</button>
  <button class="arrows__btn" id="next">-></button>
`;

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
  appElement.insertAdjacentElement(`beforeend`, arrowsElementNode);
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

const onClick = (evt) => {
  const nextArrow = document.getElementById(`next`);
  const previousArrow = document.getElementById(`previous`);

  if (evt.target === nextArrow) {
    turn(false);
  }

  if (evt.target === previousArrow) {
    turn(true);
  }

  return;
};

document.addEventListener(`keydown`, onKeyDown);
document.addEventListener(`click`, onClick);

showScreen(currentIndex);
