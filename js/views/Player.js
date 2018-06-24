import AbstractView from "./AbstractView";

export default class Player extends AbstractView {
  constructor(src) {
    super();
    this.src = src;
  }

  get template() {
    return `
      <div class="player-wrapper">
        <div class="player">
          <audio src="${this.src}"></audio>
          <button class="player-control player-control--play"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
    `;
  }

  bind() {
    //TODO: 🚨 А нельзя сделать тут как-нибудь, как ниже, чтобы не дублировать код в Артистах и Жанрах? 🤔
    
    // const allPlayers = Array.from(this.element.querySelectorAll(`.player`));
    //
    // allPlayers.forEach((player) => {
    //   player.addEventListener(`click`, (evt) => {
    //     evt.preventDefault();
    //     evt.stopPropagation();
    //     const audio = player.querySelector(`audio`);
    //     if (audio.duration > 0 && !audio.paused) {
    //       this.onPauseTrack(player);
    //     } else {
    //       this.onPlayTrack(player, allPlayers);
    //     }
    //   });
    // });
  }
}
