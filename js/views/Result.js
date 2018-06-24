import AbstractView from "./AbstractView";

export default class Result extends AbstractView {
  constructor(result, output) {
    super();
    this.result = result;
    this.output = output;
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      
        <h2 class="title">${this.result.title}</h2>
        <div class="main-stat">${this.result.description}</div>
        ${(this.output === `win`) ? `<span class="main-comparison">${this.result.comparison}</span>` : ``}
      </section>
    `;
  }

  bind() {}
}