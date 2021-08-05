export default function setProjectsList() {
  const projects = document.querySelector('.projects');

  if (projects) {
    const projectsList = projects.querySelector('.cases-section__list');
    const toogleBlocks = projects.querySelector('.js-toogle-blocks');
    const toogleList = projects.querySelector('.js-toogle-lines');

    toogleBlocks.classList.add('projects__toogle-button--active');
    projectsList.classList.add('cases-section__list--blocks');

    toogleBlocks.addEventListener('click', (evt) => {
      evt.preventDefault();
      toogleBlocks.classList.add('projects__toogle-button--active');
      toogleList.classList.remove('projects__toogle-button--active');
      projectsList.classList.add('cases-section__list--blocks');
    });

    toogleList.addEventListener('click', (evt) => {
      evt.preventDefault();
      toogleBlocks.classList.remove('projects__toogle-button--active');
      toogleList.classList.add('projects__toogle-button--active');
      projectsList.classList.remove('cases-section__list--blocks');
    });
  }
}
