export default function mailingSubscribe() {
  const mailingBlock = document.querySelector('.mailing-block');

  if (localStorage.getItem('isCookiesAccepted') && !localStorage.getItem('isSubscribed')) {
    const mailingForm = mailingBlock.querySelector('.mailing-block__form');

    setTimeout(() => {

      mailingBlock.classList.add('mailing-block--active');

      mailingForm.addEventListener('submit', () => {
        mailingBlock.classList.remove('mailing-block--active');
        localStorage.setItem('isSubscribed', true);

        setTimeout(() => {
          mailingBlock.remove();
        }, 2000);
      });
    }, 30000);

  } else {
    mailingBlock.remove();
  }
}
