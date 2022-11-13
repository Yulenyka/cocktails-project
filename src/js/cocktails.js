import Render from './render';
import { renderModalCocktail, openModalCocktail } from './modalcocktail';

const render = new Render();
const cocktailsListRef = document.querySelector('.cocktails-list');
// console.log(cocktailsListRef);
if (cocktailsListRef) cocktailsListRef.addEventListener('click', onClickBtn);

render.markUpRandomCocktails();

function onClickBtn(e) {
  if (e.target.dataset.action === 'favorite') {
    const id = e.target.dataset.id;
    render.addToFavorite(id);
    render.changeFavoriteBtn(e.target);
  } else if (e.target.dataset.action === 'more') {
    const idMore = e.target.dataset.id;
    const cocktail = render.cards.find(item => item.idDrink === idMore);
    openModalCocktail();
    renderModalCocktail(cocktail);
  }
}
