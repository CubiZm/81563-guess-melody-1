import showScreen from "../show-screen";
import {checkAnswers} from "../data/game";
import {GAME_SETTINGS} from "../data/game-settings";
import {gameQuestions} from "../data/game-data";
import Artist from "../views/Artist";
import Genre from "../views/Genre";
import Header from "../views/Header";
import Mistakes from "../views/Mistakes";
//import resultScreen from "./result-screen";

const gameScreen = (gameState) => {
  const question = gameQuestions[gameState.level];

  const questionScreenMap = {
    guessArtist: Artist,
    chooseGenre: Genre
  };

  const screen = new questionScreenMap[question.type](question);
  const wrapper = screen.element.querySelector(`.main-wrap`);

  const header = new Header();
  const mistakes = new Mistakes(gameState.mistakes);

  screen.element.insertBefore(header.element, wrapper);
  screen.element.insertBefore(mistakes.element, wrapper);

  screen.onAnswerSend = (userAnswers) => {
    event.preventDefault();

    const isCorrect = checkAnswers(question, userAnswers);
    if (!isCorrect) {
      gameState.mistakes++;
    }

    const answerTime = 29000;

    gameState.timeLeft = Math.max((gameState.timeLeft - answerTime), 0);

    gameState.answers.push({
      time: answerTime,
      correct: isCorrect
    });

    if ((gameState.mistakes > GAME_SETTINGS.maxMistakes) || (gameState.timeLeft === 0) || ((gameState.level + 1) === GAME_SETTINGS.totalQuestions)) {
      //showScreen(resultScreen(gameState));
    } else {
      gameState.level++;
      showScreen(gameScreen(gameState));
    }
  };

  const pauseTrack = (player) => {
    player.querySelector(`audio`).pause();
    player.querySelector(`.player-control`).classList.replace(`player-control--pause`, `player-control--play`);
  };

  const playTrack = (player, otherPlayers) => {
    player.querySelector(`audio`).play();
    player.querySelector(`.player-control`).classList.replace(`player-control--play`, `player-control--pause`);
  };

  screen.onPauseTrack = (player) => pauseTrack(player);
  screen.onPlayTrack = (player, otherPlayers) => playTrack(player, otherPlayers);

  return screen.element;
};

export default gameScreen;
