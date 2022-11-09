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
  const btnAdd = document.querySelector('.button-add');
  btnAdd.addEventListener('click', addToFavorite);
  return photo;
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

const btnAdd = document.querySelector('');
console.log(btnAdd);
btnAdd.addEventListener('click', addToFavorite);

// Функція додавання до улюблених
function addToFavorite(id = '') {
  const favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  console.log(favorite);
  const inArray = favorite.some(elem => elem.id === id);
  if (!inArray) {
    const card = photo.find(elem => elem.id === id);
    console.log(card);
    favorite.push(card);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
  } else {
    const newArray = favorite.filter(elem => elem.id !== id);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(newArray));
  }
}
