import Render from './render';

const letterList = document.querySelector('.hero__navigation');
const letterBtn = document.querySelector('.hero__button');
const gallery = document.querySelector('.cocktails-list');
console.log(gallery);

const render = new Render();
letterList.addEventListener('click', showCoctails);

async function showCoctails(event) {
  const refButton = document.querySelector('.hero__btn-active');
  if (refButton) {
    refButton.classList.remove('hero__btn-active');
  }

  if (event.target.classList.contains('hero__button')) {
    render.sectionSelectionFoRender(event.target.textContent);
    event.target.classList.add('hero__btn-active');
  }
  if (screen.availWidth < 768) {
    const spanEl = document.querySelector('.hero__select-letter');
    const heroNav = document.querySelector('.hero__navigation');
    const heroSelect = document.querySelector('.hero__select');
    const heroIcon = document.querySelector('.hero__icon');

    spanEl.textContent = event.target.textContent;
    heroNav.classList.add('is-hidden');
    heroSelect.style.backgroundColor = '#FD5103';
    spanEl.style.color = '#FCFCFC';
    heroIcon.style.fill = '#FCFCFC';
  }
}
