export default function setModal(allModalsClass, modalClass, buttonOpenClass, buttonCloseClass) {
  const body = document.querySelector('body');
  const modal = document.querySelector(modalClass);
  const allModals = document.querySelectorAll(allModalsClass);
  const modalOpenButtons = document.querySelectorAll(buttonOpenClass);
  const modalCloseButtons = document.querySelectorAll(buttonCloseClass);

  modalOpenButtons.forEach((openButton) => {
    openButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      allModals.forEach((modalElem) => {
        modalElem.classList.remove('modal-open');
        body.classList.remove('has-modal');
      });

      modal.classList.add('modal-open');
      body.classList.add('has-modal');
    });
  });

  modalCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      modal.classList.remove('modal-open');
      body.classList.remove('has-modal');
    });
  });
}
