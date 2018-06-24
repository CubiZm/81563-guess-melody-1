import AbstractView from "./AbstractView";
import {GAME_SETTINGS} from "../data/game-settings";
import showScreen from "../show-screen";
import startScreen from "../templates/welcome-screen";

const timeMinutes = Math.round((GAME_SETTINGS.totalTime / (1000 * 60)));

export default class PlayerView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
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
      </div>
    `;
  }

  onLogoClick() {}

  bind() {
    const playAgainImg = this.element.querySelector(`.play-again`);

    const isHandlerClick = (evt) => {
      evt.preventDefault();
      this.onLogoClick();
    };

    playAgainImg.addEventListener(`click`, isHandlerClick);
  }
}
