import './sass/_favorite-cocktails.scss';
import axios from 'axios';
import { ApiService } from './apiservice';
import ApiService from './apiservice';

let apiService = new ApiService();

const DATA_KEY = 'favorite-cocktails'; // localStorage.setItem(DATA_KEY, JSON.stringify(valueForm)) DATA_KEY !!! как у Наташи
const navSublinkCocktails = document.querySelector(
  "a[href='./favorite-cocktails.html']"
);

let favoriteCocktails = {
  strDrink,
};

navSublinkCocktails.addEventListener('click', showCoctails);

export function showCoctails(e) {
  if (localStorage.getItem(DATA_KEY)) {
    favoriteCocktails = JSON.parse(localStorage.getItem(COCTAIL_KEY));
    for (let key in favoriteCocktails) {
      createMarkUpCocktails(gallery, (photos = []));
    }
  }
}
showCoctails();
