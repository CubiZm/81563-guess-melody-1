import {GAME_SETTINGS} from "./data/game-settings";
import showScreen from "./show-screen";

export const INITIAL_STATE = Object.freeze({
  level: 0,
  timeLeft: GAME_SETTINGS.totalTime,
  mistakes: 0,
  answers: []
});


