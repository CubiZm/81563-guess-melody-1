import showScreen from "../show-screen";
import {checkAnswers} from "../data/game";
import {GAME_SETTINGS} from "../data/game-settings";
import {gameQuestions} from "../data/game-data";
import screenArtist from "./level-artist";
import screenGenre from "./level-genre";
import gameHeader from "./header";
import resultScreen from "./result-screen";

const gameScreen = (gameState) => {
  const question = gameQuestions[gameState.level];

  const questionScreenMap = {
    guessArtist: screenArtist,
    chooseGenre: screenGenre
  };

  const onAnswerSend = (userAnswers) => {
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
      showScreen(resultScreen(gameState));
    } else {
      gameState.level++;
      showScreen(gameScreen(gameState));
    }
  };

  const gameScreenElement = questionScreenMap[question.type](question, onAnswerSend);
  gameScreenElement.insertAdjacentElement(`afterbegin`, gameHeader(gameState));

  const allPlayers = Array.from(gameScreenElement.querySelectorAll(`.player`));

  const pauseTrack = (player) => {
    player.querySelector(`audio`).pause();
    player.querySelector(`.player-control`).classList.replace(`player-control--pause`, `player-control--play`);
  };

  const playTrack = (player) => {
    player.querySelector(`audio`).play();
    player.querySelector(`.player-control`).classList.replace(`player-control--play`, `player-control--pause`);
  };

  allPlayers.forEach((player) => {
    player.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const selectedTrack = player.querySelector(`audio`);
      let isPlaying = (selectedTrack.duration > 0 && !selectedTrack.paused);

      if (isPlaying) {
        pauseTrack(player);
      } else {
        allPlayers.forEach((plr) => pauseTrack(plr));
        playTrack(player);
      }
    });
  });

  return gameScreenElement;
};

export default gameScreen;
