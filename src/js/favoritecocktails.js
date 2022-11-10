import ApiService from './apiservice';
import { FAVORITE_KEY } from './render';
import Render from './render';
const gallery = document.querySelector('.gallery');
const galleryCocktailsTitle = document.querySelector(
  '.favorite-cocktails__title'
);
// FAVORITE_KEY = 'favorite'; //del
// const buttonMore = document.querySelector('.button-more');
let apiService = new ApiService();
let render = new Render();
apiService.getCocktailRandom(3).then(data => {
  console.log(data);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(data));
});

export function showAllCoctails(gallery) {
  let favoriteCocktails = JSON.parse(localStorage.getItem(FAVORITE_KEY));
  if (localStorage.getItem(FAVORITE_KEY)) {
    const markupCocktails = favoriteCocktails
      .map(({ strDrink, strDrinkThumb, idDrink }) => {
        return `<li class="cocktails__item">
                <img class="cocktails__img" src="${strDrinkThumb}" alt="${strDrink} photo">
                <h3 class="cocktails__name">${strDrink}</h3>
                <ul class="button-list">
                    <li class="button__item">
                        <button class="button-more" type="submit">Learn more
                        </button>
                    </li>
                  <li class="button__item">
                     <button class='button-remove' type="button" data-id="${idDrink}" data-action="favorite">Remove</button>
                    </li>
                </ul>
              </li>
              `;
      })
      .join('');
    gallery.innerHTML = markupCocktails;
  } else {
    const markupCocktails = `<p class="no__favorite-cocktails">
      You haven't added any <br />
      favorite cocktails yet
    </p>`;
    galleryCocktailsTitle.insertAdjacentHTML('afterend', markupCocktails);
  }
}

showAllCoctails(gallery);

const buttonRemove = document.querySelectorAll('.button-remove');
console.log(buttonRemove);
buttonRemove.forEach(elem =>
  elem.addEventListener('click', e => {
    console.dir(e.target.dataset.id);
    // console.log(123);
    render.addToFavorite(e.target.dataset.id);
  })
);
