import Render, { FAVORITE_KEY } from './render';

const modalIngridient = document.querySelector('.modal-ingridient');
const backdrop = document.querySelector('.backdrop');
const btnModalClose = document.querySelector('.modal-close');
let render = new Render();

export function openModalIngridient() {
  backdrop.classList.remove('is-hidden');
  btnModalClose.addEventListener('click', closeModalIngridient);
  backdrop.addEventListener('click', onBackDropClick);
  window.addEventListener('keydown', onEscClick);
}

export function closeModalIngridient() {
  backdrop.classList.add('is-hidden');
  btnModalClose.removeEventListener('click', closeModalIngridient);
  backdrop.removeEventListener('click', onBackDropClick);
  window.removeEventListener('keydown', onEscClick);
}

function onBackDropClick(e) {
  if (e.target === e.currentTarget) {
    closeModalIngridient();
  }
}

function onEscClick(e) {
  if (e.code === 'Escape') {
    closeModalIngridient;
  }
}
