import './sass/_favorite-cocktails.scss';
import axios from 'axios';
import { ApiService } from './apiservice';

const navSublinkCocktails = document.querySelector(
  "a[href='./favorite-cocktails.html']"
);

navSublinkCocktails.addEventListener('click', showCoctails);

export function showCoctails(e) {
  if (e.target.tagName === navSublinkCocktails) {
    console.log(e.target.href);
  }

  //   if (localStorage.getItem(DATA_KEY)) {
  //     valueForm = JSON.parse(localStorage.getItem(DATA_KEY));
  //     for (let key in valueForm) {
  //       feedbackForm.elements[key].value = valueForm[key];
  //     }
  //   }
}
showCoctails();
