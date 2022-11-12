// import Render, { FAVORITE_KEY } from './render';
import ApiService from './apiservice';
import { FAVORITE_KEY } from './favoritingridient';

const modalIngridient = document.querySelector('.modal-ingredient');
const backdropIngridient = document.querySelector('.backdrop-ingridient');
const btnModalClose = document.querySelector('#ingridient-close');

// let render = new Render();
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

  let markup = `<h2 class="ingredient__title">${strIngredient}</h2>
<h3 class="ingredient__subtitle">${strType ? strType : ''}</h3>
<div class="line"></div>
<p class="ingredient__text">${
    strAlcohol === 'Yes'
      ? `<span class="ingredient__text--accent">Alcohol by volume:</span> ${strABV}%`
      : `<span class="ingredient__text--accent">Alcohol:</span> ${strAlcohol}`
  }</p>
<p class="ingredient__description">${
    strDescription
      ? strDescription
      : `Sorry, we have no information about ${strIngredient}.`
  }</p>
 <button class='btn-remove' id='ingridient-btn' type="button" data-id="${idIngredient}">Remove from favorite</button>`;
  console.log(response);
  modalIngridient.innerHTML = markup;
  updateButton();
}

function updateButton() {
  const btnIngredient = document.querySelector('#ingridient-btn');
  btnIngredient.addEventListener('click', e => {
    addToFavorite(e.target.dataset.id);
  });
}

async function addToFavorite(id) {
  const btnIngredient = document.querySelector('#ingridient-btn');
  // const btnArr = document.querySelectorAll('[data-action="favorite"]') || [];

  let favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  let ingredient = favorite.find(elem => elem.idIngredient === id);
  let btnPageInredients = [];
  btnArr.forEach(elem => {
    elem.dataset.id === id && btnPageInredients.push(elem);
  });

  if (!ingredient) {
    // cocktail = render.cards.find(elem => elem.idDrink === id);
    // if (!cocktail) {
    const response = await apiService.getCocktailIngrId(id);
    console.log(response);
    ingredient = response[0];
    // }
    favorite.push(ingredient);
  } else {
    favorite = favorite.filter(elem => elem.idDrink !== id);
  }
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
  // changeFavoriteBtn(btnAddRemove);
  // render.changeFavoriteBtn(btnHome[0]);
}
