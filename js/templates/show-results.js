import {GAME_SETTINGS} from "../data/game-settings";
import {statistics} from "../data/statistics";
import {calculatePoints} from "./calculate-points";

const time = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return {minutes, seconds};
};

const resultTemplate = (game) => {
  return {
    timeup: {
      title: `Увы и ах!`,
      description: `Время вышло!<br>Вы не успели отгадать все мелодии`,
      comparison: ``
    },
    lose: {
      title: `Какая жалость!`,
      description: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
      comparison: ``
    },
    win: {
      title: `Вы настоящий меломан!`,
      description: `За&nbsp;${game.time.minutes}&nbsp;&nbsp;минуты и ${game.time.seconds}&nbsp;&nbsp;секунд
      <br>вы&nbsp;набрали ${game.points} баллов (${game.fastAnswers} быстрых)
      <br>совершив ${game.mistakes}&nbsp;ошибки`,
      comparison: `Вы заняли ${game.place} место из ${game.players}. Это&nbsp;лучше, чем у&nbsp;${game.rate}%&nbsp;игроков`
    }
  };
};

export const showResult = (gameState) => {
  const userPoints = calculatePoints(gameState);
  const updatedStatistics = statistics.concat(userPoints).sort((a, b) => b - a);

  let gameResult = {
    time: time(GAME_SETTINGS.totalTime - gameState.timeLeft),
    points: userPoints,
    fastAnswers: gameState.answers.filter((answer) => answer.correct && answer.time < GAME_SETTINGS.fastAnswerTime).length,
    mistakes: gameState.mistakes,
    players: updatedStatistics.length,
    place: updatedStatistics.indexOf(userPoints) + 1,
    get rate() {
      return Math.round(((this.players - this.place) / this.players) * 100);
    }
  };

  return resultTemplate(gameResult)[getResult(gameState)];
};
