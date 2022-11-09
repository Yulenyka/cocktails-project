'use strict';
// import createMarkUpCocktails from './createMarkUpCocktails';
// import createMarkUpMissingCocktails from './createMarkUpMissingCocktails';
// import ApiService from './apiservice';
import Render from './render';
// const gallery = document.querySelector('.cocktails-list');
// const wrapper = document.querySelector('.missingcocktails-wrap');
// const FAVORITE_KEY = 'favorite';
// const newsApi = new ApiService();
// let cards = [];

const render = new Render();
const cocktailsListRef = document.querySelector('.cocktails-list');
cocktailsListRef.addEventListener('click', onClickBtn);

render.markUpRandomCocktails();

function onClickBtn(e) {
  if (e.target.dataset.action === 'favorite') {
    const id = e.target.dataset.id;
    render.addToFavorite(id);
    render.changeFavoriteBtn(e.target);
  }
}
// Функція відмальовки рандомних зображень
// async function markUpRandomCocktails() {
//   cards = await newsApi.getCocktailRandom(9);
//   gallery.innerHTML = '';
//   createMarkUpCocktails(gallery, cards);
// }
// markUpRandomCocktails();

// function changeFavoriteBtn(btn) {
//   console.log(btn);
//   const id = btn.dataset.id;
//   let favorite = getFavorite();
//   const inArray = favorite.some(elem => elem.idDrink === id);
//   if (inArray) {
//     btn.textContent = 'Remove';
//     btn.classList.add('button-remove');
//     btn.classList.remove('button-add');
//   } else {
//     btn.textContent = 'Add to';
//     btn.classList.add('button-add');
//     btn.classList.remove('button-remove');
//   }
// }
// Функція додавання, видалення з улюблених
// function addToFavorite(id = '') {
//   let favorite = getFavorite();
//   const card = cards.find(elem => elem.idDrink === id);
//   console.log(favorite);
//   const inArray = favorite.some(elem => elem.idDrink === id);
//   console.log('inArray :>> ', inArray);
//   if (!inArray) {
//     favorite.push(card);
//   } else {
//     favorite = favorite.filter(elem => elem.idDrink !== id);
//   }
//   localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
// }
// Функція наявності картки в LocalStr
// export function getFavorite() {
//   const dataLocalStorage = localStorage.getItem(FAVORITE_KEY);
//   let favorite = dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
//   return favorite;
// }
// Функція яка рендерить розмітку по певному заданому символу
// async function sectionSelectionFoRender(letter) {
//   cards = await newsApi.getCocktailByFirstLetter(letter);
//   console.log(cards);
//   if (cards.length === 0) {
//     document.querySelector('.cocktails').classList.add('is-none');
//     document.querySelector('.missingcocktails').classList.remove('is-none');
//     createMarkUpMissingCocktails(wrapper);
//   } else {
//     document.querySelector('.missingcocktails').classList.add('is-none');
//     document.querySelector('.cocktails').classList.remove('is-none');
//     createMarkUpCocktails(gallery, cards);
//   }
// }
