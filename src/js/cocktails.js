import createMarkUpCocktails from './createMarkUpCocktails';
import createMarkUpMissingCocktails from './createMarkUpMissingCocktails';
import ApiService from './apiservice';
import Render from './render';
const gallery = document.querySelector('.cocktails-list');
const wrapper = document.querySelector('.missingcocktails-wrap');
const FAVORITE_KEY = 'favorite';
const newsApi = new ApiService();

let cards = [];

// Функція відмальовки рандомних зображень
// async function markUpRandomCocktails() {
//   cards = await newsApi.getCocktailRandom(9);
//   gallery.innerHTML = '';
//   createMarkUpCocktails(gallery, cards);
// }
// markUpRandomCocktails();

const cocktailsListRef = document.querySelector('.cocktails-list');
cocktailsListRef.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  if (e.target.dataset.action === 'favorite') {
    const id = e.target.dataset.id;
    console.log(id);
    addToFavorite(id);
    changeFavoriteBtn(e.target);
  }
}

function changeFavoriteBtn(btn) {
  console.log(btn);
  const id = btn.dataset.id;
  let favorite = getFavorite();
  const inArray = favorite.some(elem => elem.idDrink === id);
  if (inArray) {
    btn.textContent = 'Remove';
    btn.classList.add('button-remove');
    btn.classList.remove('button-add');
  } else {
    btn.textContent = 'Add to';
    btn.classList.add('button-add');
    btn.classList.remove('button-remove');
  }
}
// Функція додавання, видалення з улюблених
function addToFavorite(id = '') {
  let favorite = getFavorite();
  const card = cards.find(elem => elem.idDrink === id);
  console.log(favorite);
  const inArray = favorite.some(elem => elem.idDrink === id);
  console.log('inArray :>> ', inArray);
  if (!inArray) {
    favorite.push(card);
  } else {
    favorite = favorite.filter(elem => elem.idDrink !== id);
  }
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
}
// Функція наявності картки в LocalStr
export function getFavorite() {
  const dataLocalStorage = localStorage.getItem(FAVORITE_KEY);
  let favorite = dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
  return favorite;
}
// Функція яка ховає секції
async function sectionSelectionFoRender() {
  cards = await newsApi.getCocktailByFirstLetter('0');
  console.log(cards);
  if (cards.length === 0) {
    document.querySelector('.cocktails').classList.add('is-none');
    document.querySelector('.missingcocktails').classList.remove('is-none');
    createMarkUpMissingCocktails(wrapper);
  } else {
    document.querySelector('.missingcocktails').classList.add('is-none');
    document.querySelector('.cocktails').classList.remove('is-none');
    createMarkUpCocktails(gallery, cards);
  }
}
sectionSelectionFoRender();

// let render = new Render();
// console.log(render);
// render.markUpRandomCocktails();

// window.addEventListener('resize', changeMarkUpWithResize);
// / Функція розрахунку кількості фото від вьюпотру
// function calculatePhoto() {
//   const windowInnerWidth = window.innerWidth;
//   let count = 0;
//   if (windowInnerWidth > 0 && windowInnerWidth < 768) {
//     count = 3;
//   } else if (windowInnerWidth >= 768 && windowInnerWidth < 1280) {
//     count = 6;
//   } else {
//     count = 9;
//   }
//   return count;

// // Функція при зміні розміру вьюпорта
// function changeMarkUpWithResize(e) {
//   gallery.innerHTML = '';
//   markUpRandomCocktails();
// }
