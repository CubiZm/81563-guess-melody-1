import createTemplate from '../create-template';
import showScreen from '../show-screen';
import startScreen from "./welcome-screen";

const template = createTemplate(`
  <section class="main main--result main--error">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

const showScreenHandler = () => {
  showScreen(startScreen);
};

const buttonElement = template.querySelector(`.main-replay`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default template;
