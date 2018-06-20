import {GAME_SETTINGS} from "./game-data";
import {showScreen} from "../show-screen";
import gameScreen from "../templates/game-screen";

export const INITIAL_STATE = Object.freeze({
  level: 0,
  timeLeft: GAME_SETTINGS.totalTime,
  mistakes: 0,
  answers: []
});

export const startGame = () => {
  let gameState = Object.assign({}, INITIAL_STATE);
  gameState.answers = [];
  showScreen(gameScreen(gameState));
};

export const checkAnswers = (question, answers) => {
  const correctAnswers = [...Object.entries(question.answers)].reduce((arr, [answerValue, answerData]) => {
    if (answerData.correct) {
      arr.push(answerValue);
    }
    return arr;
  }, []);

  if (correctAnswers.length === answers.length) {
    return correctAnswers.every((elem) => answers.includes(elem));
  } else {
    return false;
  }
};
