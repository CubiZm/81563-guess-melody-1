import WelcomeView from "../views/WelcomeScreen";
import {GAME_SETTINGS} from "../data/game-settings";
import {startGame} from "../data/game";

const welcomeScreen = () => {
  const screen = new WelcomeView(GAME_SETTINGS);
  screen.onPlayButtonClick = () => startGame();

  return screen.element;
};

export default welcomeScreen;
