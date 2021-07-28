import checkCookiesAccept from './cookies.js';
import mailingSubscribe from './mailing.js';

document.addEventListener('DOMContentLoaded', () => {
  checkCookiesAccept();
  mailingSubscribe();
});
