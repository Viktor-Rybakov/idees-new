export default function setAnimation() {
  const animationElem = document.querySelector('.main-section__scene-img');
  const animationTarget = document.querySelector('.animation-target');

  if (animationElem && animationTarget) {

    animationTarget.x = animationTarget.offsetLeft + animationTarget.clientWidth / 2 - animationElem.clientWidth / 2;
    animationTarget.y = animationTarget.offsetTop + animationTarget.clientHeight / 2 - animationElem.clientHeight / 2;

    setElemPosition(animationElem, animationTarget.x, animationTarget.y);

    window.addEventListener('resize', () => {
      animationTarget.x = animationTarget.offsetLeft + animationTarget.clientWidth / 2 - animationElem.clientWidth / 2;
      animationTarget.y = animationTarget.offsetTop + animationTarget.clientHeight / 2 - animationElem.clientHeight / 2;

      setElemPosition(animationElem, animationTarget.x, animationTarget.y);
    });
  }

  function setElemPosition (elem, x, y) {
    elem.style.setProperty('--position-x', `${x}px`);
    elem.style.setProperty('--position-y', `${y}px`);
  }
}
