import Render from './render';
const render = new Render();

paginationBlock = document.querySelector('.pagination-box');

paginationBlock.addEventListener('click', event => {
  render.currentPage = Number(event.target.textContent);
  render.createMarkUpCocktails();
  return;
});
