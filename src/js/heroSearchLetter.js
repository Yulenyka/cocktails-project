import ApiService from './apiservice';
import createMarkUpCocktails from './createMarkUpCocktails';

const letterList = document.querySelector('.hero__navigation');
const letterBtn = document.querySelector('.hero__button');
const gallery = document.querySelector('.cocktails-list');
console.log(gallery);

const newsApi = new ApiService();

letterList.addEventListener('click', showCoctails);

async function showCoctails(event) {
  console.log(event.target);
  if (event.target.classList.contains('hero__button')) {
    event.target.textContent;
    const curArray = await newsApi.getCocktailByFirstLetter(
      event.target.textContent
    );
    console.log(curArray);
    createMarkUpCocktails(gallery, curArray);
  }
}
