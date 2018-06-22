import player from "./player";
import createTemplate from "../create-template";

const screenGenre = (question, callback) => {
  const template = `
  <section class="main main--level main--level-genre">
    <div class="main-wrap">
      <h2 class="title">${question.title}</h2>
      <form class="genre">
        ${[...Object.entries(question.answers)].map(([answerValue, answerData], index) => `
        <div class="genre-answer">
          ${player(answerData.track.src)}
          <input type="checkbox" name="answer" value="${answerValue}" id="a-${index + 1}">
          <label class="genre-answer-check" for="a-${index + 1}"></label>
        </div>`).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>
  `;

  const screenGenreElement = createTemplate(template);
  const formElement = screenGenreElement.querySelector(`form.genre`);
  const checkboxElements = [...screenGenreElement.querySelectorAll(`[type="checkbox"]`)];
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
    callback(checkedAnswers);
  });

  buttonElement.addEventListener(`click`, onAnswerChange);

  return screenGenreElement;
};

export default screenGenre;
