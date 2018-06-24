import AbstractView from "./AbstractView";

export default class Mistakes extends AbstractView {
  constructor(mistakes) {
    super();
    this.mistakes = mistakes;
  }

  get template() {
    return `
    <div class="main-mistakes">
      ${Array(this.mistakes)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
    </div>`;
  }

  bind() {}
}
