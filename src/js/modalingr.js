import Render from './render';
import ApiService from './apiservice';
// import { showIngridients } from './favoritingridient';

const modalIngridient = document.querySelector('.modal-ingredient');
const backdropIngridient = document.querySelector('.backdrop-ingridient');
const btnModalClose = document.querySelector('#ingridient-close');

let render = new Render();
let apiService = new ApiService();
const FAVORITE_KEY = 'favoriteIngredient';
let callbackOnClose;

export function openModalIngridient(onClose = () => {}) {
  backdropIngridient.classList.remove('is-hidden');
  btnModalClose.addEventListener('click', closeModalIngridient);
  backdropIngridient.addEventListener('click', onBackDropClick);
  window.addEventListener('keydown', onEscClick);
  callbackOnClose = onClose;
}

export function closeModalIngridient() {
  backdropIngridient.classList.add('is-hidden');
  btnModalClose.removeEventListener('click', closeModalIngridient);
  backdropIngridient.removeEventListener('click', onBackDropClick);
  window.removeEventListener('keydown', onEscClick);
  callbackOnClose();
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
  let favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  let findIngredient = favorite.find(
    elem => elem.idIngredient === idIngredient
  );
  let vol = strABV
    ? `<br /> <span class="ingredient__text--accent">Alcohol by volume:</span> ${strABV}%`
    : '';
  let markup = `<h2 class="ingredient__title">${strIngredient}</h2>
<h3 class="ingredient__subtitle">${strType ? strType : 'No information'}</h3>
<div class="line"></div>
<p class="ingredient__text">${
    strAlcohol === 'Yes'
      ? `<span class="ingredient__text--accent">Alcohol:</span> ${strAlcohol}${vol}`
      : `<span class="ingredient__text--accent">Alcohol:</span> ${strAlcohol}`
  }</p>
<p class="ingredient__description">${
    strDescription
      ? strDescription
      : `Sorry, we have no information about ${strIngredient}.`
  }</p>
  <button id='ingridient-btn' class="btn-remove ${
    findIngredient ? 'button-remove' : 'button-add'
  }" type="button" data-id="${idIngredient}">${
    findIngredient ? 'Remove from favorite' : 'Add to favorite'
  }</button>`;
  console.log(response);
  modalIngridient.innerHTML = markup;
  const btnAddRemove = document.querySelector('#ingridient-btn');
  btnAddRemove.addEventListener('click', e => {
    addToFavorite(e.target.dataset.id);
  });
}

async function addToFavorite(id) {
  const btnAddRemove = document.querySelector('#ingridient-btn');
  // const btnArr = document.querySelectorAll('[data-action="favorite"]') || [];

  let favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  let ingredient = favorite.find(elem => elem.idIngredient === id);
  // let btnHome = [];
  // btnArr.forEach(elem => {
  //   elem.dataset.id === id && btnHome.push(elem);
  // });

  if (!ingredient) {
    // ingredient = render.cards.find(elem => elem.idDrink === id);
    // if (!ingredient) {
    const response = await apiService.getCocktailIngrId(id);
    ingredient = response[0];
    // }
    favorite.push(ingredient);
  } else {
    favorite = favorite.filter(elem => elem.idIngredient !== id);
  }
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
  changeFavoriteBtn(btnAddRemove);
  // render.changeFavoriteBtn(btnHome[0]);
}

function changeFavoriteBtn(btn) {
  const id = btn.dataset.id;
  let favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY));

  const inArray = favorite.find(elem => elem?.idIngredient === id);
  if (inArray) {
    btn.textContent = 'Remove from favorite';
    btn.classList.add('button-remove');
    btn.classList.remove('button-add');
  } else {
    btn.textContent = 'Add to favorite';
    btn.classList.add('button-add');
    btn.classList.remove('button-remove');
  }
}
