import Render from './render';

const render = new Render();
const cocktailsListRef = document.querySelector('.cocktails-list');
if (cocktailsListRef) cocktailsListRef.addEventListener('click', onClickBtn);

render.markUpRandomCocktails();
function onClickBtn(e) {
  if (e.target.dataset.action === 'favorite') {
    const id = e.target.dataset.id;
    render.addToFavorite(id);
    render.changeFavoriteBtn(e.target);
  }
}
