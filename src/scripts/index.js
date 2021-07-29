import checkCookiesAccept from './cookies.js';
import mailingSubscribe from './mailing.js';
import setFormValidation from './form-validation.js';
import setModal from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  checkCookiesAccept();
  mailingSubscribe();
  setFormValidation();

  setModal('.modal', '.form-section', '.js-form-open', '.js-form-close');
});
