export default function setThemeButton() {
  const body = document.querySelector('body');
  const themeButtons = body.querySelectorAll('.js-theme');
  let isAnimationEnabled = true;

  themeButtons.forEach((themeButton) => {
    themeButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (isAnimationEnabled) {
        isAnimationEnabled = false;

        themeButton.x = themeButton.offsetLeft + themeButton.clientWidth / 2;
        themeButton.y = themeButton.offsetTop + themeButton.clientHeight / 2;

        if (localStorage.getItem('darkTheme')) {
          localStorage.removeItem('darkTheme');

          const animationBlock = document.createElement('div');
          animationBlock.classList.add('dark-light-animation');
          setElemPosition(animationBlock, themeButton.x, themeButton.y);
          body.append(animationBlock);
          body.classList.add('light-button');

          setTimeout(() => {
            body.classList.add('light-typo');
          }, 300);

          setTimeout(() => {
            body.classList.remove('dark');
            body.classList.remove('light-typo');
            body.classList.remove('light-button');

          }, 1300);

          setTimeout(() => {
            animationBlock.remove();
            isAnimationEnabled = true;
          }, 1500);
        } else {
          localStorage.setItem('darkTheme', true);

          const animationBlock = document.createElement('div');
          animationBlock.classList.add('light-dark-animation');
          setElemPosition(animationBlock, themeButton.x, themeButton.y);
          body.append(animationBlock);
          body.classList.add('dark-button');


          setTimeout(() => {
            body.classList.add('dark-typo');
          }, 300);

          setTimeout(() => {
            body.classList.add('dark');
            body.classList.remove('dark-typo');
            body.classList.remove('dark-button');
          }, 1300);

          setTimeout(() => {
            animationBlock.remove();
            isAnimationEnabled = true;
          }, 1500);
        }
      }
    });
  });

  function setElemPosition (elem, x, y) {
    elem.style.setProperty('--position-x', `${x}px`);
    elem.style.setProperty('--position-y', `${y}px`);
  }
}
