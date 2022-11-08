import './sass/_favorit-ingridient.scss';
import axios from 'axios';
import ApiService from './apiservice';
import { ApiService } from './apiservice';
import { outAbsenceMessageIngridient } from './outAbsenceMessage';

let apiService = new ApiService();
const favoriteIngridientList = document.querySelector(
  '.favorite-ingridient__list'
);
const favoriteIngridientItem = document.querySelector(
  '.favorite-ingridient__item'
);
const noFavoriteIngridient = document.querySelector('.no__favorite-ingridient');
const navSublinkCocktails = document.querySelector(
  "a[href='./favorite-ingridient.html']"
);
const DATA_KEY = 'favorite-ingredient'; // localStorage.setItem(DATA_KEY, JSON.stringify(valueForm)) DATA_KEY !!! как у Влада

// let favoriteIngredient = {
//   strIngredient,
// };

export default function createMarkupIngridients(
  favoriteIngridientList,
  arrIngridients = []
) {
  let markUp = arrIngridients
    .map(
      ({ strIngredient, strType }) => `<li class="favorite-ingridient__item">
      <h3 class="drink__ingridient">${strIngredient}</h3>
      <p class="drink__type">${strType}</p>
      <ul class="button-list">
        <li class="button__item">
          <button class="button-more" type="submit">Learn more</button>
        </li>
        <li class="button__item">
          <button class="button-add" type="submit">Add to</button>
        </li>
      </ul>
    </li>`
    )
    .join('');
  favoriteIngridientList.insertAdjacentHTML('afterend', markUp);
}

navSublinkCocktails.addEventListener('click', showIngredient);

export function showIngredient(e) {
  if (localStorage.getItem(DATA_KEY)) {
    favoriteIngridientItem = JSON.parse(localStorage.getItem(DATA_KEY));
    for (let key in favoriteIngridientItem) {
      createMarkupIngridients(favoriteIngridientList, (arrIngridients = []));
    }
  } else {
    outAbsenceMessageIngridient();
    noFavoriteIngridient.classList.remove('is-hidden');
  }
}
showCoctails();
