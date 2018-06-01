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

const SCREEN_ARRAY = [
  `.main--welcome`,
  `.main--level-genre`,
  `.main--level-artist`,
  `.main--success`,
  `.main--error`,
  `.main--error-game-over`
];

const startScreen = `main--welcome`;
const template = document.querySelector(`#templates`).content;
const screenElements = SCREEN_ARRAY.map((currentValue) => {
  return template.querySelector(currentValue);
});
const appElement = document.querySelector(`.app`);
const mainElement = appElement.querySelector(`.main`);
const startScreenIndex = screenElements.findIndex((screenElement) => screenElement.classList.contains(startScreen));
const maxArrayLength = screenElements.length;
const nextArrow = arrowsElementNode.querySelector(`#next`);
const previousArrow = arrowsElementNode.querySelector(`#previous`);
let currentIndex = startScreenIndex;


const showScreen = (index) => {

  if (currentIndex < 0 || null) {
    return;
  }

  const stepContent = screenElements[index];
  mainElement.innerHTML = ``;
  mainElement.appendChild(stepContent.cloneNode(true));
  appElement.appendChild(arrowsElementNode);
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
};

const onClick = (evt) => {
  if (evt.target === nextArrow) {
    turn(false);
  }

  if (evt.target === previousArrow) {
    turn(true);
  }
};

document.addEventListener(`keydown`, onKeyDown);
document.addEventListener(`click`, onClick);

showScreen(currentIndex);
