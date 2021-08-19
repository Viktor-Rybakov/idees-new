export default function setAnimation() {
  const animationSection = document.querySelector('.animation-section');
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function getMousePosition (event, elem) {
    const bounds = elem.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return {x: x, y: y};
  }

  function setElemPosition (elem, x, y) {
    elem.style.setProperty('--mouse-x', `${x}px`);
    elem.style.setProperty('--mouse-y', `${y}px`);
  }

  if (animationSection) {
    const animationEelem = animationSection.querySelector('.animation-elem');
    const animationTarget = animationSection.querySelector('.animation-target');
    const timesPerSecond = 5;
    let wait = false;

    animationTarget.x = animationTarget.offsetLeft + animationTarget.offsetWidth / 2;
    animationTarget.y = animationTarget.offsetTop + animationTarget.offsetHeight / 2;

    setElemPosition(animationEelem, animationTarget.x, animationTarget.y);

    window.addEventListener('resize', () => {
      animationTarget.x = animationTarget.offsetLeft + animationTarget.offsetWidth / 2;
      animationTarget.y = animationTarget.offsetTop + animationTarget.offsetHeight / 2;

      setElemPosition(animationEelem, animationTarget.x, animationTarget.y);
    });

    if(!mediaQuery || !mediaQuery.matches) {
      animationSection.addEventListener('mousemove', function(event) {
        if (!wait) {
          const position = getMousePosition(event, this);
          setElemPosition(animationEelem, position.x, position.y);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 1000 / timesPerSecond);
        }
      });

      animationSection.addEventListener('click', function(event) {
        const position = getMousePosition(event, this);
        setElemPosition(animationEelem, position.x, position.y);
      });

      animationSection.addEventListener('mouseout', () => {
        setElemPosition(animationEelem, animationTarget.x, animationTarget.y);
      });
    }
  }
}
