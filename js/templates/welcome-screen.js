import {GAME_SETTINGS} from "../data/game-settings";
import {startGame} from "../data/game";
import createTemplate from '../create-template';

const timeMinutes = Math.round((GAME_SETTINGS.totalTime / (1000 * 60)));

const welcomeScreenTemplate = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;${timeMinutes} минут ответить на все вопросы.<br>
      Ошибиться можно ${GAME_SETTINGS.maxMistakes} раза.<br>
      Удачи!
    </p>
  </section>`
;

const welcomeScreen = createTemplate(welcomeScreenTemplate);
const buttonElement = welcomeScreen.querySelector(`.main-play`);
buttonElement.addEventListener(`click`, startGame);

export default welcomeScreen;
