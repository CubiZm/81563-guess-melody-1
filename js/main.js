const KeyCode = {
  LEFT: 37,
  RIGHT: 39,
};

const arrowsElementNode = `
<div class="arrows__wrap">
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
  </div>
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
appElement.insertAdjacentHTML(`beforeend`, arrowsElementNode);
const mainElement = appElement.querySelector(`.main`);
const startScreenIndex = screenElements.findIndex((screenElement) => screenElement.classList.contains(startScreen));
const maxArrayLength = screenElements.length;
const nextArrow = appElement.querySelector(`#next`);
const previousArrow = appElement.querySelector(`#previous`);
let currentIndex = startScreenIndex;


const showScreen = (index) => {

  if (currentIndex < 0 || null) {
    return;
  }

  const stepContent = screenElements[index];
  mainElement.innerHTML = ``;
  mainElement.appendChild(stepContent.cloneNode(true));
};

const turn = (isLeft = true) => {
  if (isLeft) {
    currentIndex = (maxArrayLength + currentIndex - 1) % maxArrayLength;
  } else {
    currentIndex = (currentIndex + 1) % maxArrayLength;
  }

  showScreen(currentIndex);
};

const onEventHandler = (evt) => {
  if (evt.keyCode === KeyCode.RIGHT || evt.target === nextArrow) {
    turn(false);
  }

  if (evt.keyCode === KeyCode.LEFT || evt.target === previousArrow) {
    turn(true);
  }
};

document.addEventListener(`keydown`, onEventHandler);
document.addEventListener(`click`, onEventHandler);

showScreen(currentIndex);
