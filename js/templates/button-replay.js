import {startGame} from "../data/game";
import createTemplate from "../create-template";

const buttonReplay = createTemplate(`<span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>`);
buttonReplay.addEventListener(`click`, () => startGame());

export default buttonReplay;
