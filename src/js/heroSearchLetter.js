import ApiService from './apiservice';
import { createMarkUpCocktails } from './createMarkUpCocktails';

const letterList = document.querySelector('.hero__navigation');
const letterBtn = document.querySelector('.hero__button');
const gallery = document.querySelector('.cocktails-list');

const newsApi = new ApiService();

letterList.addEventListener('click', showCoctails);

function showCoctails(event) {
  console.log(event);

  const curArray = newsApi.getCocktailByFirstLetter('a');
  //   console.log(event.target.dataset);
  //   console.log(curArray);
  //   createMarkUpCocktails(gallery, curArray);
}
