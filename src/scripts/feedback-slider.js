export default function setFeedbackSlider() {
  const $slider = document.querySelector('.js-feedback-slider');

  if ($slider) {
    const activeSlides = 1;
    let $sliderList = $slider.querySelector('.js-feedback-slider-list');

    let isTransitionActive;
    let slideWidth = $sliderList.children[1].getBoundingClientRect().left - $sliderList.children[0].getBoundingClientRect().left;

    setActiveSlides($sliderList, activeSlides);

    window.addEventListener('resize', () => {
      slideWidth = $sliderList.children[1].getBoundingClientRect().left - $sliderList.children[0].getBoundingClientRect().left;
    });

    $slider.addEventListener('click', (evt) => {
      if (evt.target.closest('.js-feedback-slider-button--next')) {
        next();
      }
    });

    $slider.addEventListener('transitionend', () => {
      if (isTransitionActive) {
        removeSlide();
      }
    });

    /*eslint-disable no-inner-declarations */

    function next() {
      isTransitionActive = true;
      const nextSlide = $sliderList.firstElementChild.cloneNode(true);
      nextSlide.classList.remove('active');

      $sliderList.append(nextSlide);
      $sliderList.style.transform = `translateX(-${slideWidth}px)`;

      $sliderList = $slider.querySelector('.js-feedback-slider-list');
      setActiveSlides($sliderList, activeSlides);
    }

    function removeSlide() {
      $sliderList.firstElementChild.remove();

      $sliderList.style.transition = 'none';
      $sliderList.style.transform = 'translateX(0)';
      isTransitionActive = false;
      setTimeout(() => {
        $sliderList.style.transition = 'transform 0.5s';
      }, 50);

      $sliderList = $slider.querySelector('.js-feedback-slider-list');
      setActiveSlides($sliderList, activeSlides);
    }

    function setActiveSlides (list, number) {
      for ( let i = 0; i < number; i++ ) {
        list.children[i].classList.add('active');
      }
    }
  }
}
