import createTemplate from '../create-template';
import showScreen from '../show-screen';
//import startScreen from '../templates/welcome-screen';

import screenSuccess from '../templates/screen-success';
import screenGameOver from '../templates/live-over';

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
  
  const screenGenreElement = showScreen(template);
  const formElement = template.querySelector(`form.genre`);
  const checkboxElements = [...template.querySelectorAll(`[type="checkbox"]`)];
  const buttonElement = formElement.querySelector(`.genre-answer-send`);

  const setButtonDisabled = () => {
    let isFormCorrect = checkboxElements.some((checkbox) => checkbox.checked);
  
    buttonElement.disabled = !isFormCorrect;
  };
  
  const formChangeHandler = () => {
    setButtonDisabled();
  };
  
  const clearForm = () => {
    checkboxElements.forEach((checkboxes) => {
      checkboxes.checked = false;
    });
    setButtonDisabled();
  };
  
  // const doRandomResult = () => {
  //   let random = Math.floor(Math.random() * 2);
  //   const result = random < 1 ? screenSuccess : screenGameOver;
  //   showScreen(result);
  // };
  
  // const showScreenHandler = () => {
  //   doRandomResult();
  // };
  
  // buttonElement.addEventListener(`click`, showScreenHandler);
  formElement.addEventListener(`change`, formChangeHandler);
  formElement.addEventListener(`submit`, clearForm);
  
  setButtonDisabled();
  
  return screenGenreElement;
};

export default screenGenre;
