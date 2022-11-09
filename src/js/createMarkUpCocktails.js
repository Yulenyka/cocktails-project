import { getFavorite } from './cocktails';

export default function createMarkUpCocktails(gallery, cards = []) {
  const favorite = getFavorite();
  let markUp = cards
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      const cardFavorite = favorite.find(elem => elem.idDrink === idDrink);
      return `<li class="cocktails__item">
                <img src="${strDrinkThumb}" alt="photo">
                <h3 class="cocktails__name">"${strDrink}"</h3>
                <ul class="button-list">
                    <li class="button__item">
                        <button class="button-more" type="button">Learn more
                        </button>
                    </li>
                    <li class="button__item">
                     <button class="${
                       cardFavorite ? 'button-remove' : 'button-add'
                     } type="button" data-id="${idDrink}" data-action="favorite">${
        cardFavorite ? 'Remove' : 'Add to'
      }
                        </button>
                    </li>
                </ul>
              </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markUp);
}
