const render = (templateString) => {
  const template = document.createElement(`div`);

  template.innerHTML = templateString.trim();

  return template.children[0];
};

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    return render(this.template);
  }

  bind() {
    // bind handlers if required
  }
}
