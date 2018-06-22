import buttonReplay from "./button-replay";
import {showResult} from "./show-results";
import createTemplate from "../create-template";

const resultScreen = (gameState) => {
  const resultScreenTemplate = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${showResult(gameState).title}</h2>
    <div class="main-stat">${showResult(gameState).description}</div>
    <span class="main-comparison">${showResult(gameState).comparison}</span>
  </section>
  `;

  const resultScreenElement = createTemplate(resultScreenTemplate);
  resultScreenElement.appendChild(buttonReplay);

  return resultScreenElement;
};

export default resultScreen;
