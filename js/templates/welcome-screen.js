import createTemplate from '../create-template';
import showScreen from '../show-screen';
import levelArtist from '../templates/level-artist';

const template = createTemplate(`
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`
);

const isScreenHandler = () => {
  showScreen(levelArtist);
};

const buttonElement = template.querySelector(`.main-play`);
buttonElement.addEventListener(`click`, isScreenHandler);

export default template;