import createMarkUpCocktails from './createMarkUpCocktails';
import createMarkUpMissingCocktails from './createMarkUpMissingCocktails';
import ApiService from './apiservice';
import Render from './render';
const gallery = document.querySelector('.cocktails-list');
const container = document.querySelector('.container');
const FAVORITE_KEY = 'favorite';
const newsApi = new ApiService();
// window.addEventListener('resize', changeMarkUpWithResize);

// let render = new Render();
// console.log(render);
// render.markUpRandomCocktails();

// async function markUpRandomCocktails() {
//   let photo = await newsApi.getCocktailRandom(calculatePhoto());
//   gallery.innerHTML = '';
//   createMarkUpCocktails(gallery, photo);
//   const btnAdd = document.querySelector('.button-add');
//   btnAdd.addEventListener('click', addToFavorite);
//   return photo;
// }
let photo = [];
console.log(photo);
// Функція відмальовки зображень
async function markUpRandomCocktails() {
  photo = await newsApi.getCocktailRandom(calculatePhoto());
  console.log(photo);
  gallery.innerHTML = '';
  createMarkUpCocktails(gallery, photo);
}
markUpRandomCocktails();
// console.log(markUpRandomCocktails().then(res => console.log(res)));

// Функція при зміні розміру вьюпорта
// function changeMarkUpWithResize(e) {
//   gallery.innerHTML = '';
//   markUpRandomCocktails();
// }
// Функція розрахунку кількості фото від вьюпотру
function calculatePhoto() {
  const windowInnerWidth = window.innerWidth;
  let count = 0;
  if (windowInnerWidth > 0 && windowInnerWidth < 768) {
    count = 3;
  } else if (windowInnerWidth >= 768 && windowInnerWidth < 1280) {
    count = 6;
  } else {
    count = 9;
  }
  return count;
}
// Функція яка ховає секції( якщо пусте значення падає)
// async function sectionSelectionFoRender() {
//   photo = await newsApi.getCocktailByFirstLetter('2');
//   console.log(photo);
//   if (photo.length === 0) {
//     document.querySelector('.missingcoctails').classList.remove('.is-hidden');
//     document.querySelector('.coctails').classList.add('.is-hidden');
//     createMarkUpMissingCocktails(container);
//   }
//   createMarkUpCocktails(gallery, photo);
// }
// sectionSelectionFoRender();

const cocktailsListRef = document.querySelector('.cocktails-list');
cocktailsListRef.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  if (!e.target.classList.contains('button-add')) return;
  const id = e.target.dataset.id;
  console.log(id);
  addToFavorite(id);
}

// Функція додавання до улюблених
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
