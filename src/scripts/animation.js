export default function setAnimation() {
  const animationEelem = document.querySelector('.main-section__scene-img');
  const animationTarget = document.querySelector('.animation-target');

  animationTarget.x = animationTarget.offsetLeft + animationTarget.clientWidth / 2 - animationEelem.clientWidth / 2;
  animationTarget.y = animationTarget.offsetTop + animationTarget.clientHeight / 2 - animationEelem.clientHeight / 2;

  setElemPosition(animationEelem, animationTarget.x, animationTarget.y);

  window.addEventListener('resize', () => {
    animationTarget.x = animationTarget.offsetLeft + animationTarget.clientWidth / 2 - animationEelem.clientWidth / 2;
    animationTarget.y = animationTarget.offsetTop + animationTarget.clientHeight / 2 - animationEelem.clientHeight / 2;

    setElemPosition(animationEelem, animationTarget.x, animationTarget.y);
  });

  function setElemPosition (elem, x, y) {
    elem.style.setProperty('--position-x', `${x}px`);
    elem.style.setProperty('--position-y', `${y}px`);
  }
}
