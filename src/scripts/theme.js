export default function setThemeButton() {
  const body = document.querySelector('body');
  const themeButtons = body.querySelectorAll('.js-theme');

  themeButtons.forEach((themeButton) => {
    themeButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      themeButton.x = themeButton.offsetLeft + themeButton.clientWidth / 2;
      themeButton.y = themeButton.offsetTop + themeButton.clientHeight / 2;

      if (localStorage.getItem('darkTheme')) {
        localStorage.removeItem('darkTheme');

        const animationBlock = document.createElement('div');
        animationBlock.classList.add('dark-light-animation');
        setElemPosition(animationBlock, themeButton.x, themeButton.y);
        body.classList.add('light-typo');
        body.append(animationBlock);

        setTimeout(() => {
          body.classList.remove('dark');
          body.classList.remove('light-typo');
        }, 300);

        setTimeout(() => {
          animationBlock.remove();
        }, 500);
      } else {
        localStorage.setItem('darkTheme', true);

        const animationBlock = document.createElement('div');
        animationBlock.classList.add('light-dark-animation');
        setElemPosition(animationBlock, themeButton.x, themeButton.y);
        body.classList.add('dark-typo');
        body.append(animationBlock);

        setTimeout(() => {
          body.classList.add('dark');
          body.classList.remove('dark-typo');
        }, 300);

        setTimeout(() => {
          animationBlock.remove();
        }, 500);
      }
    });
  });

  function setElemPosition (elem, x, y) {
    elem.style.setProperty('--position-x', `${x}px`);
    elem.style.setProperty('--position-y', `${y}px`);
  }
}
