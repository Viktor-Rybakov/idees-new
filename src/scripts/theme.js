export default function setThemeButton() {
  const body = document.querySelector('body');
  const themeButtons = body.querySelectorAll('.js-theme');

  themeButtons.forEach((themeButton) => {
    themeButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (localStorage.getItem('darkTheme')) {
        localStorage.removeItem('darkTheme');

        const animationBlock = document.createElement('div');
        animationBlock.classList.add('dark-light-animation');
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
}
