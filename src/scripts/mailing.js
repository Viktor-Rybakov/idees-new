export default function mailingSubscribe() {
  const mailingBlock = document.querySelector('.mailing-block');

  if (mailingBlock) {
    if (localStorage.getItem('isCookiesAccepted') && !localStorage.getItem('isSubscribeCanceled') && !localStorage.getItem('isSubscribed')) {
      const mailingForm = mailingBlock.querySelector('.mailing-block__form');
      const cancelButton = mailingBlock.querySelector('.mailing-block__close-button');

      setTimeout(() => {

        mailingBlock.classList.add('mailing-block--active');

        mailingForm.addEventListener('submit', () => {
          mailingBlock.classList.remove('mailing-block--active');
          localStorage.setItem('isSubscribed', true);

          setTimeout(() => {
            mailingBlock.remove();
          }, 2000);
        });

        cancelButton.addEventListener('click', () => {
          mailingBlock.classList.remove('mailing-block--active');
          localStorage.setItem('isSubscribeCanceled', true);

          setTimeout(() => {
            mailingBlock.remove();
          }, 2000);
        });
      }, 30000);

    } else {
      mailingBlock.remove();
    }
  }
}
