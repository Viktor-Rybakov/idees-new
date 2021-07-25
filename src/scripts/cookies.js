export default function checkCookiesAccept() {
  const cookieBlock = document.querySelector('.cookies-block');

  if (!localStorage.getItem('isCookiesAccepted')) {
    const acceptButton = cookieBlock.querySelector('.cookies-block__accept-button');

    cookieBlock.classList.add('cookies-block--active');

    acceptButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      cookieBlock.classList.remove('cookies-block--active');
      localStorage.setItem('isCookiesAccepted', true);

      setTimeout(() => {
        cookieBlock.remove();
      }, 2000);
    });

  } else {
    cookieBlock.remove();
  }
}
