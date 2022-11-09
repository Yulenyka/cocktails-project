import createMarkUpCocktails from './createMarkUpCocktails';
import createMarkUpMissingCocktails from './createMarkUpMissingCocktails';
import ApiService from './apiservice';
import Render from './render';
const gallery = document.querySelector('.cocktails-list');
const container = document.querySelector('.container');
const FAVORITE_KEY = 'favorite';
const newsApi = new ApiService();

let photo = [];

// Функція відмальовки зображень
async function markUpRandomCocktails() {
  photo = await newsApi.getCocktailRandom(9);
  gallery.innerHTML = '';
  createMarkUpCocktails(gallery, photo);
}
markUpRandomCocktails();

const cocktailsListRef = document.querySelector('.cocktails-list');
cocktailsListRef.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  if (!e.target.classList.contains('button-add')) return;
  const id = e.target.dataset.id;
  console.log(id);
  addToFavorite(id);
}
// Функція додавання, видалення з улюблених
function addToFavorite(id = '') {
  const dataLocalStorage = localStorage.getItem(FAVORITE_KEY);
  let favorite = dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
  const card = photo.find(elem => elem.idDrink === id);
  const inArray = favorite.some(elem => elem.idDrink === id);
  console.log('inArray :>> ', inArray);
  if (!inArray) {
    favorite.push(card);
  } else {
    favorite = favorite.filter(elem => elem.idDrink !== id);
  }
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
}
// Функція зміни стилів кнопки
function changeBtn(id = '') {
  const dataLocalStorage = localStorage.getItem(FAVORITE_KEY);
  console.log(dataLocalStorage);
  //   let favorite = dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
}

// Функція яка ховає секції( якщо пусте значення падає)
// async function sectionSelectionFoRender() {
//   photo = await newsApi.getCocktailByFirstLetter('2');
//   console.log(photo);
//   if (photo.length === 0) {
//     document.querySelector('.missingcocktails').classList.remove('.is-none');
//     document.querySelector('.cocktails').classList.add('.is-none');
//     createMarkUpMissingCocktails(container);
//   }
//   createMarkUpCocktails(gallery, photo);
// }
// sectionSelectionFoRender();

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
