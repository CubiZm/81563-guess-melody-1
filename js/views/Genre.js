import AbstractView from "./AbstractView";
import Player from "./Player";

export default class Genre extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title">${this.question.title}</h2>
          <form class="genre">
            ${[...Object.entries(this.question.answers)].map(([answerValue, answerData], index) => `
            <div class="genre-answer">
              ${new Player(answerData.track.src).template}
              <input type="checkbox" name="answer" value="${answerValue}" id="a-${index + 1}">
              <label class="genre-answer-check" for="a-${index + 1}"></label>
            </div>`).join(``)}
            <button class="genre-answer-send" type="submit">Ответить</button>
          </form>
        </div>
      </section>
      `;
  }

  onAnswerSend() {}

  bind() {
    const formElement = this.element.querySelector(`form.genre`);
    const checkboxElements = [...formElement.querySelectorAll(`[type="checkbox"]`)];
    const buttonElement = formElement.querySelector(`.genre-answer-send`);

    const onAnswerChange = () => {
      let isFormCorrect = checkboxElements.some((checkbox) => checkbox.checked);
      buttonElement.disabled = !isFormCorrect;
    };

    buttonElement.disabled = true;

    checkboxElements.forEach((answer) => {
      answer.addEventListener(`change`, onAnswerChange);
    });

    buttonElement.addEventListener(`click`, () => {
      const checkedAnswers = checkboxElements.filter((input) => input.checked).map((input) => input.value);
      this.onAnswerSend(checkedAnswers);
    });

    buttonElement.addEventListener(`click`, onAnswerChange);

    const allPlayers = Array.from(this.element.querySelectorAll(`.player`));

    allPlayers.forEach((player) => {
      player.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        const audio = player.querySelector(`audio`);
        if (audio.duration > 0 && !audio.paused) {
          this.onPauseTrack(player);
        } else {
          this.onPlayTrack(player, allPlayers);
        }
      });
    });
  }
}
