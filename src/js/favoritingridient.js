import './sass/_favorit-ingridient.scss';
import axios from 'axios';
import ApiService from './apiservice';
import { ApiService } from './apiservice';

let apiService = new ApiService();
const favoriteIngridientList = document.querySelector(
  '.favorite-ingridient__list'
);
const favoriteIngridientItem = document.querySelector(
  '.favorite-ingridient__item'
);
const navSublinkCocktails = document.querySelector(
  "a[href='./favorite-cocktails.html']"
);
const DATA_KEY = 'favorite-ingredient';

let favoriteIngredient = {
  strIngredient,
};

navSublinkCocktails.addEventListener('click', showCoctails);

export function showCoctails(e) {
  if (localStorage.getItem(DATA_KEY)) {
    favoriteCocktails = JSON.parse(localStorage.getItem(DATA_KEY));
    for (let key in favoriteCocktails) {
      createMarkUpCocktails(gallery, (photos = []));
    }
  }
}
showCoctails();
