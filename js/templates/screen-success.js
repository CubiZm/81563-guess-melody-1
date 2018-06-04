import createTemplate from '../create-template';
import showScreen from '../show-screen';
import startScreen from '../templates/welcome-screen';

const template = createTemplate(`
  <section class="main main--result main--success">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

const showScreenHandler = () => {
  showScreen(startScreen);
};

const buttonElement = template.querySelector(`.main-replay`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default template;
