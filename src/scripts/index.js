import checkCookiesAccept from './cookies.js';
import mailingSubscribe from './mailing.js';
import setFormValidation from './form-validation.js';
import setModal from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  setModal('.modal', '.form-section', '.js-form-open', '.js-form-close');
  setModal('.modal', '.menu', '.js-menu-open', '.js-menu-close');

  checkCookiesAccept();
  mailingSubscribe();
  setFormValidation();
});
