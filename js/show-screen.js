const appElement = document.querySelector(`section.main`);

const showScreen = (template) => {
  appElement.innerHTML = ``;
  appElement.appendChild(template);
};

export default showScreen;
