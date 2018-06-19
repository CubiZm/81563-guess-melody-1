const player = (src) => {
  return `
  <div class="player-wrapper">
    <div class="player">
      <audio src="${src}"></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
`;
};

export default player;
