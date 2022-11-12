import Render, { FAVORITE_KEY } from './render';
import { openModalIngridient, renderModalIngridient } from './modalingr';
import ApiService from './apiservice';
import './cocktails';

const modalCocktail = document.querySelector('.modal-cocktail');
const backdrop = document.querySelector('.backdrop');
const btnModalClose = document.querySelector('.modal-close');

let apiService = new ApiService();

export function openModalCocktail() {
  backdrop.classList.remove('is-hidden');
  btnModalClose.addEventListener('click', closeModalCocktail);
  backdrop.addEventListener('click', onBackDropClick);
  window.addEventListener('keydown', onEscClick);
  document.body.classList.add('no-scroll');
}

export function closeModalCocktail() {
  backdrop.classList.add('is-hidden');
  btnModalClose.removeEventListener('click', closeModalCocktail);
  backdrop.removeEventListener('click', onBackDropClick);
  window.removeEventListener('keydown', onEscClick);
  document.body.classList.remove('no-scroll');
}

function onBackDropClick(e) {
  if (e.target === e.currentTarget) {
    closeModalCocktail();
  }
}

function onEscClick(e) {
  if (e.code === 'Escape') {
    closeModalCocktail();
  }
}

export function renderModalCocktail(cocktail) {
  const { strDrink, strDrinkThumb, idDrink, strInstructions } = cocktail;
  let favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  let findCocktail = favorite.find(elem => elem.idDrink === idDrink);
  const entries = Object.entries(cocktail);
  const ingridients = [];
  entries.map(elem => {
    if (elem[0].includes('strIngredient') && elem[1]) {
      ingridients.push(elem[1]);
    }
  });
  const ingidientsMarkup = ingridients
    .map(
      ingridient =>
        `<li class="ingredients__item">
      <p class="ingredients__link">
        &#10038 <span>${ingridient}</span>
      </p>
    </li>`
    )
    .join('');

  const markup = `<div class="cocktails-info">
              <h2 class="modal__title">${strDrink}</h2>
              <div class="modal__wrap">
                <div class="instruction">
                <h3 class="
instruction__title">Instructions:</h3>
                <p class="
instruction__text">${strInstructions}</p>
                </div>
                <img class="photo" src="${strDrinkThumb}" alt="#">
              </div>
              

              <div class="ingredients">
                  <h3 class="ingredients__title">Ingredients</h3>
                  <p class="ingredients__subtitle">Per cocktail</p>
                  <ul class="ingredients__list">
                    ${ingidientsMarkup}
                  </ul>
              </div>
          </div>
           <button class="btn-remove ${
             findCocktail ? 'button-remove' : 'button-add'
           }" type="button" data-id="${idDrink}">${
    findCocktail ? 'Remove from favorite' : 'Add to favorite'
  }</button>`;

  modalCocktail.innerHTML = markup;

  let ingredientsList = document.querySelector('.ingredients__list');
  ingredientsList.addEventListener('click', e => {
    let ingridientName = '';
    if (e.target.tagName === 'P') {
      ingridientName = e.target.firstElementChild.textContent
        .toLowerCase()
        .split(' ')
        .join('+');
    } else if (e.target.tagName === 'SPAN') {
      ingridientName = e.target.textContent.toLowerCase().split(' ').join('+');
    }
    renderModalIngridient(ingridientName);
    openModalIngridient();
  });
  updateButton();
}

function updateButton() {
  const btnModalCocktail = document.querySelector('.btn-remove');
  btnModalCocktail.addEventListener('click', e => {
    addToFavorite(e.target.dataset.id);
  });
}

async function addToFavorite(id) {
  const btnAddRemove = document.querySelector('.btn-remove');
  const btnArr = document.querySelectorAll('[data-action="favorite"]') || [];

  let favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  let cocktail = favorite.find(elem => elem.idDrink === id);
  let btnHome = [];
  btnArr.forEach(elem => {
    elem.dataset.id === id && btnHome.push(elem);
  });

  if (!cocktail) {
    cocktail = render.cards.find(elem => elem.idDrink === id);
    if (!cocktail) {
      const response = await apiService.getCocktailById(id);
      cocktail = response[0];
    }
    favorite.push(cocktail);
  } else {
    favorite = favorite.filter(elem => elem.idDrink !== id);
  }
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
  changeFavoriteBtn(btnAddRemove);
  render.changeFavoriteBtn(btnHome[0]);
}

function changeFavoriteBtn(btn) {
  const id = btn.dataset.id;
  let favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY));

  const inArray = favorite.find(elem => elem?.idDrink === id);
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
