const showScreen = (screen) => {
  const currentScreen = document.querySelector(`section.main`);
  document.querySelector(`div.app`).replaceChild(screen, currentScreen);
};

export default showScreen;
