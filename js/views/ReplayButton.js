import AbstractView from "./AbstractView";

export default class ReplayButton extends AbstractView {
  constructor(title) {
    super();
    this.title = title;
  }

  get template() {
    return `<span role="button" tabindex="0" class="main-replay">${this.title}</span>`;
  }

  onReplayButtonClick() {}

  bind() {
    this.element.addEventListener(`click`, () => this.onReplayButtonClick());
  }
}
