export default function setScrollTop() {
  const scrollTopButton = document.querySelector('.up-button');

  if (scrollTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        scrollTopButton.classList.add('up-button--active');
      }
      else {
        scrollTopButton.classList.remove('up-button--active');
      }
    });

    scrollTopButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, 0);
    });
  }
}
