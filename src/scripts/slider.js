export default function setSlider() {
  const $slider = document.querySelector('.js-slider');

  if ($slider) {
    const activeSlides = window.innerWidth >= 860 ? 4 : 1;

    let $sliderList = $slider.querySelector('.js-slider-list');

    let direction;
    let clickPrev = prev;
    let clickNext = next;
    let slideWidth = $sliderList.children[1].getBoundingClientRect().left - $sliderList.children[0].getBoundingClientRect().left;

    setActiveSlides($sliderList, activeSlides);


    window.addEventListener('resize', () => {
      slideWidth = $sliderList.children[1].getBoundingClientRect().left - $sliderList.children[0].getBoundingClientRect().left;
      setActiveSlides($sliderList, activeSlides);
    });

    $slider.addEventListener('click', (evt) => {
      if (evt.target.closest('.js-slider-button--prev')) {
        clickPrev();
      }
      if (evt.target.closest('.js-slider-button--next')) {
        clickNext();
      }
    });

    $slider.addEventListener('transitionend', () => {
      if (direction) {
        removeSlide();
      }
    });

    /*eslint-disable no-inner-declarations */

    function prev() {
      direction = 1;
      if (clickPrev === null) {
        return;
      } else {
        clickPrev = null;
        $sliderList.style.transition = 'none';
        $sliderList.style.transform = `translateX(-${slideWidth}px)`;

        const nextSlide = $sliderList.lastElementChild.cloneNode(true);
        nextSlide.classList.add('active');
        $sliderList.prepend(nextSlide);
        setActiveSlides($sliderList, activeSlides);


        setTimeout(() => {
          $sliderList.style.transition = '0.5s';
          $sliderList.style.transform = 'translateX(0)';

        }, 50);

        $sliderList = $slider.querySelector('.js-slider-list');
      }
    }

    function next() {
      direction = -1;
      if (clickNext === null) {
        return;
      } else {
        const nextSlide = $sliderList.firstElementChild.cloneNode(true);
        nextSlide.classList.remove('active');

        $sliderList.append(nextSlide);
        $sliderList.style.transform = `translateX(-${slideWidth}px)`;
        setActiveSlides($sliderList, activeSlides);

        $sliderList = $slider.querySelector('.js-slider-list');
        clickNext = null;
      }
    }

    function removeSlide() {

      if (direction === -1) {
        $sliderList.firstElementChild.remove();

        $sliderList.style.transition = 'none';
        $sliderList.style.transform = 'translateX(0)';
        direction = undefined;
        setTimeout(() => {
          $sliderList.style.transition = '0.5s';
          clickNext = next;
        }, 50);

      } else if (direction === 1) {
        $sliderList.lastElementChild.remove();
        clickPrev = prev;
        direction = undefined;
      }

      $sliderList = $slider.querySelector('.js-slider-list');
      setActiveSlides($sliderList, activeSlides);
    }

    function setActiveSlides (list, number) {
      if (window.innerWidth < 1700) {
        for ( let i = 0; i < list.childElementCount; i++ ) {
          list.children[i].classList.add('active');
        }
      } else {
        for ( let i = 0; i < list.childElementCount; i++ ) {
          list.children[i].classList.remove('active');
          if (i < number) {
            list.children[i].classList.add('active');
          }
        }
      }
    }
  }
}
