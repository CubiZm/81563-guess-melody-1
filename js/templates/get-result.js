import {GAME_SETTINGS} from "../data/game-settings";

const getResult = (state) => {
  if (state.timeLeft === 0) {
    return `timeup`;
  }

  if (state.mistakes > GAME_SETTINGS.maxMistakes) {
    return `lose`;
  }

  return `win`;
};

export default getResult; // out
