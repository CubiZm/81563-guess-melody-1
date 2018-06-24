import Result from "../views/Result";
import Replay from "../views/ReplayButton";

const resultScreen = () => {
  const screen = new Result(getResult(gameState, gameOutput), gameOutput);
  const replay = new Replay((gameOutput === `win` ? `Сыграть` : `Попробовать`) + ` ещё раз`);
  replay.onReplayButtonClick = () => startGame();
  screen.element.appendChild(replay.element);
  
  return screen.element;
};

