import {GAME_SETTINGS} from "../data/game-settings";
import startScreen from "./welcome-screen";
import createTemplate from '../create-template';
import showScreen from "../show-screen";
const timeMinutes = Math.round((GAME_SETTINGS.totalTime / (1000 * 60)));

const headerElement = (state) => {

  const headerTemplate = `
    <div>
      <a class="play-again play-again__wrap" href="#">
        <img class="play-again__img" src="/img/melody-logo-ginger.png" alt="logo" width="177" height="76">
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(../#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${timeMinutes}</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">00</span>
        </div>
      </svg>
      <div class="main-mistakes">
        ${new Array(state.mistakes)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
      </div>
    </div>
  `;

  const header = createTemplate(headerTemplate);
  const playAgainImg = header.querySelector(`.play-again`);

  const showStartScreen = () => {
    showScreen(startScreen);
  };

  playAgainImg.addEventListener(`click`, showStartScreen);

  return header;
};

export default headerElement;
