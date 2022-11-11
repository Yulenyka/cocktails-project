import Render, { FAVORITE_KEY } from './render';
import ApiService from './apiservice';

const modalIngridient = document.querySelector('.modal-content');
const backdropIngridient = document.querySelector('.backdrop-ingridient');
const btnModalClose = document.querySelector('#ingridient-close');

let render = new Render();
let apiService = new ApiService();

export function openModalIngridient() {
  backdropIngridient.classList.remove('is-hidden');
  btnModalClose.addEventListener('click', closeModalIngridient);
  backdropIngridient.addEventListener('click', onBackDropClick);
  window.addEventListener('keydown', onEscClick);
}

export function closeModalIngridient() {
  backdropIngridient.classList.add('is-hidden');
  btnModalClose.removeEventListener('click', closeModalIngridient);
  backdropIngridient.removeEventListener('click', onBackDropClick);
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

export async function renderModalIngridient(ingridientName) {
  const response = await apiService.getCocktailIngrName(ingridientName);
  const {
    idIngredient,
    strDescription,
    strIngredient,
    strType,
    strAlcohol,
    strABV,
  } = response[0];

  let markup = `<h2>${strIngredient}</h2>
<p>${strType ? strType : ''}</p>
<p>${
    strAlcohol === 'Yes'
      ? `Alcohol by volume: ${strABV}%`
      : `Alcohol: ${strAlcohol}`
  }</p>
<p>${
    strDescription
      ? strDescription
      : `Sorry, we have no information about ${strIngredient}.`
  }</p>
 <button class='btn-remove' id='ingridient-btn' type="button" data-id="${idIngredient}">Remove from favorite</button>`;
  console.log(response);
  modalIngridient.innerHTML = markup;
}
