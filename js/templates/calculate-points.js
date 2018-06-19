import {GAME_SETTINGS} from "../data/game-settings";

export const calculatePoints = (answers, attempts) => {
  if (answers.length < GAME_SETTINGS.totalQuestions) {
    return GAME_SETTINGS.losePoints;
  }

  let attemptsLeft = attempts;

  return answers.reduce((points, answer) => {
    if (attemptsLeft > 0) {
      if (answer.correct) {
        points++;
        if (answer.time * 1000 < GAME_SETTINGS.fastAnswerTime) {
          points++;
        }
      } else {
        points -= 2;
        attemptsLeft--;
      }
    } else {
      points = GAME_SETTINGS.losePoints;
    }

    return points;
  }, 0);
};
