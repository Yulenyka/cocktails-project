import { FAVORITE_KEY } from './render';
import { openModalCocktail, renderModalCocktail } from './modalcocktail';
const gallery = document.querySelector('.favorite-cocktails__list');

export function showAllCoctails(gallery) {
  let favoriteCocktails = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  if (localStorage.getItem(FAVORITE_KEY) && favoriteCocktails.length > 0) {
    const markupCocktails = favoriteCocktails
      .map(({ strDrink, strDrinkThumb, idDrink }) => {
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
      elem.addEventListener('click', e => {
        let cocktail = favoriteCocktails.find(
          elem => elem.idDrink === e.target.dataset.id
        );
        renderModalCocktail(cocktail);
        openModalCocktail(() => {
          showAllCoctails(gallery);
        });
      });
    });
    const buttonRemove = document.querySelectorAll('.button-remove');
    buttonRemove.forEach(elem => {
      elem.addEventListener('click', removeFromFavorite);
    });
  } else {
    const markupCocktails = `<li class="favorite-ingridient__box">
    <p class="favorite-ingridient__text">
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
