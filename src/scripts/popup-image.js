export default function setPopupImages() {
  const body = document.querySelector('body');
  const allImages = document.querySelectorAll('.popup-image');
  const mediaQuery = window.matchMedia('(min-width: 1200px)');

  function initPopupImages() {
    allImages.forEach((elem) => {
      elem.onclick = function() {
        const image = this;
        image.classList.add('popup__image');
        image.onclick = null;

        const popupDrop = document.createElement('div');
        popupDrop.classList.add('popup');
        popupDrop.onclick = () => {
          popupDrop.remove();
        };

        const button = document.createElement('button');
        button.classList.add('popup__button');
        button.setAttribute('type', 'button');
        button.onclick = (event) => {
          event.preventDefault();
          popupDrop.remove();
        };

        body.append(popupDrop);
        popupDrop.append(image);
        popupDrop.append(button);
      };
    });
  }

  function removePopupImages() {
    allImages.forEach((elem) => {
      elem.onclick = null;
    });
  }

  if (allImages.length && mediaQuery.matches) {
    initPopupImages();
  }

  window.addEventListener('resize', () => {
    if (allImages.length && mediaQuery.matches) {
      initPopupImages();
    }

    else {
      removePopupImages();
    }
  });
}
