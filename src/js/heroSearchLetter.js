import ApiService from './apiservice';
import { createMarkUpCocktails } from './createMarkUpCocktails';

const letterList = document.querySelector('.hero__navigation');
const letterBtn = document.querySelector('.hero__button');
const newsApi = new ApiService();

letterList.addEventListener('click', showCoctails);

function showCoctails() {
  const curArray = newsApi.getCocktailByFirstLetter('a');
  //   console.log(curArray);
  if (curArray === []) return;
  createMarkUpCocktails();
}
