import Render from './render';
import { renderModalCocktail } from './modalcocktail';
import { openModalCocktail } from './modalcocktail';
import { renderModalCocktail } from './modalcocktail';
const modalCocktail = document.querySelector('.modal-cocktail');
export const render = new Render();
// console.log(render);
const cocktailsListRef = document.querySelector('.cocktails-list');
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
