export default function setFormValidation() {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input[required]');
  const button = form.querySelector('button[type="submit"]');
  const fileInput = form.querySelector('input[type="file"]');

  button.addEventListener('click', () => {
    inputs.forEach((elem) => {
      if (!elem.value) {
        elem.classList.add('form__text-field--warning');
      }
      if (elem.value) {
        elem.classList.remove('form__text-field--warning');
      }
    });
  });

  fileInput.addEventListener('change', function() {
    if (this.value) {
      this.classList.add('form__input-file--attached');
    } else {
      this.classList.remove('form__input-file--attached');
    }
  });
}
