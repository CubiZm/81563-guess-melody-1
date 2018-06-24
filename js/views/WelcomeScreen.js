import AbstractView from "./AbstractView";

export default class WelcomeScreen extends AbstractView {
  constructor(settings) {
    super();
    this.settings = settings;
  }

  get template() {
    const timeMinutes = (ms) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return {minutes, seconds};
    };
    const times = timeMinutes(this.settings.totalTime).minutes;
    const maxMistakes = this.settings.maxMistakes;

    return `
      <section class="main main--welcome">
        <section class="logo" title="Угадай мелодию">
          <h1>Угадай мелодию</h1>
        </section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;${times} минут ответить на все вопросы.<br>
          Ошибиться можно ${maxMistakes} раза.<br>
          Удачи!
        </p>
      </section>`;
  }

  onPlayButtonClick() {}

  bind() {
    const buttonElement = this.element.querySelector(`.main-play`);
    buttonElement.addEventListener(`click`, this.onPlayButtonClick);
  }
}
