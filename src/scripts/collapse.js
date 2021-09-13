function setCollapseElements(titleClass, collapseItemClass, buttonClass, containerClass) {
  const collapseTitles = document.querySelectorAll(titleClass);

  collapseTitles.forEach((elem) => {
    elem.collapseItem = elem.closest(collapseItemClass);
    elem.collapseButton = elem.collapseItem.querySelector(buttonClass);
    elem.collapseContainer = elem.collapseItem.querySelector(containerClass);

    elem.collapseContainer.classList.add('active');
    elem.collapseContainer.style.height = 'auto';
    elem.containerHeight = elem.collapseContainer.clientHeight + 'px';
    elem.collapseContainer.classList.remove('active');

    elem.collapseButton.setAttribute('aria-label', 'Развернуть');
    elem.collapseContainer.classList.remove('active');
    elem.collapseContainer.style.height = '0px';

    elem.onclick = function(evt) {
      evt.preventDefault();

      collapseTitles.forEach((elem) => {
        if (elem.contains(evt.target) && !elem.collapseContainer.classList.contains('active')) {
          elem.collapseItem.classList.add('opened');
          elem.collapseButton.setAttribute('aria-label', 'Свернуть');
          elem.collapseContainer.classList.add('active');
          elem.collapseContainer.style.height = elem.containerHeight;
        } else if (!elem.contains(evt.target) || elem.contains(evt.target) && elem.collapseContainer.classList.contains('active')) {
          elem.collapseItem.classList.remove('opened');
          elem.collapseButton.setAttribute('aria-label', 'Развернуть');
          elem.collapseContainer.style.height = '0px';
          setTimeout(() => {
            elem.collapseContainer.classList.remove('active');
          }, 200);
        }
      });
    };
  });
}

function collapseItem(elem) {
  elem.collapseItem.classList.remove('opened');
  elem.collapseButton.setAttribute('aria-label', 'Развернуть');
  elem.collapseContainer.style.height = '0px';
  setTimeout(() => {
    elem.collapseContainer.classList.remove('active');
  }, 200);
}

export {setCollapseElements, collapseItem};
