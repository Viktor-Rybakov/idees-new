import checkCookiesAccept from './cookies.js';
import mailingSubscribe from './mailing.js';
import setFormValidation from './form-validation.js';
import setModal from './modal.js';
import setProjectsList from './projecsts.js';
import setScrollTop from './scroll-top.js';
import setAnimation from './animation.js';
import setPopupImages from './popup-image.js';
import {setCollapseElements} from './collapse.js';
import setVideo from './video.js';

document.addEventListener('DOMContentLoaded', () => {
  setModal('.modal', '.form-section', '.js-form-open', '.js-form-close');
  setModal('.modal', '.menu', '.js-menu-open', '.js-menu-close');

  checkCookiesAccept();
  mailingSubscribe();
  setFormValidation();
  setProjectsList();
  setScrollTop();
  setAnimation();
  setPopupImages();
  setCollapseElements('.collapse-item__title-wrapper', '.collapse-item', '.collapse-item__button', '.collapse-item__container');
  setVideo();

  const scene = document.getElementById('scene');

  if (scene) {
    const parallaxInstance = new Parallax(scene);
  }
});
