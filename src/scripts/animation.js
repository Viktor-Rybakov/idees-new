export default function setAnimation() {
  const animationSection = document.querySelector('.animation-section');

  function setElemPosition (elem, x, y) {
    elem.style.setProperty('--position-x', `${x - elem.offsetWidth / 2}px`);
    elem.style.setProperty('--position-y', `${y - elem.offsetHeight / 2}px`);
  }

  if (animationSection) {
    const animationElem = animationSection.querySelector('.animation-elem');
    const animationTarget = animationSection.querySelector('.animation-target');

    animationTarget.x = animationTarget.offsetLeft + animationTarget.offsetWidth / 2;
    animationTarget.y = animationTarget.offsetTop + animationTarget.offsetHeight / 2;

    setElemPosition(animationElem, animationTarget.x, animationTarget.y);

    window.addEventListener('resize', () => {
      animationTarget.x = animationTarget.offsetLeft + animationTarget.offsetWidth / 2;
      animationTarget.y = animationTarget.offsetTop + animationTarget.offsetHeight / 2;

      setElemPosition(animationElem, animationTarget.x, animationTarget.y);
    });

    window.addEventListener('mousemove', (event) => {
      const mouse = {};
      mouse.x = event.clientX / window.innerWidth;
      mouse.y = event.clientY / window.innerHeight;

      animationElem.style.setProperty('transform', `translate(-${mouse.x * 100}px, -${mouse.y * 100}px)`);
    });
  }
}
