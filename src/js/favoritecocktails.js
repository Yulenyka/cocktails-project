// import ApiService from './apiservice';
import { FAVORITE_KEY } from './render';
import { openModalCocktail, renderModalCocktail } from './modalcocktail';
const gallery = document.querySelector('.favorite-cocktails__list');

export function showAllCoctails(gallery) {
  let favoriteCocktails = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  // console.log(favoriteCocktails);

  if (localStorage.getItem(FAVORITE_KEY) && favoriteCocktails.length > 0) {
    const markupCocktails = favoriteCocktails
      .map(({ strDrink, strDrinkThumb, idDrink }) => {
        // console.log(strIngredient);
        return `<li class="cocktails__item">
                <img class="cocktails__img" src="${strDrinkThumb}" alt="${strDrink} photo"/>
                <h3 class="cocktails__name">${strDrink}</h3>
                <ul class="button-list">
                    <li class="button__item">
                        <button class="button-more" type="button" data-id="${idDrink}">Learn more
                        </button>
                    </li>
                  <li class="button__item">
                    <button class='button-remove' type="button" data-id="${idDrink}" data-action="favorite">Remove</button>
                  </li>
                </ul>
              </li>`;
      })
      .join('');
    gallery.innerHTML = markupCocktails;

    const buttonMore = document.querySelectorAll('.button-more');
    buttonMore.forEach(elem => {
      // console.log(elem);
      elem.addEventListener('click', e => {
        let cocktail = favoriteCocktails.find(
          elem => elem.idDrink === e.target.dataset.id
        );
        // console.log(cocktail);
        renderModalCocktail(cocktail);
        openModalCocktail();
      });
    });
    const buttonRemove = document.querySelectorAll('.button-remove');
    buttonRemove.forEach(elem => {
      // console.log(elem);
      elem.addEventListener('click', removeFromFavorite);
    });
  } else {
    const markupCocktails = `<li>
    <p class="no__favorite-cocktails">
      You haven't added any <br />
      favorite cocktails yet
    </p>
    </li>`;
    gallery.innerHTML = markupCocktails;
  }
}

const removeFromFavorite = e => {
  let favoriteCocktails = JSON.parse(localStorage.getItem(FAVORITE_KEY));
  favoriteCocktails = favoriteCocktails.filter(
    elem => elem.idDrink !== e.target.dataset.id
  );
  console.log(favoriteCocktails);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteCocktails));
  showAllCoctails(gallery);
};
showAllCoctails(gallery);
