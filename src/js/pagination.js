import Render from './render';
const render = new Render();

paginationBlock = document.querySelector('.pagination-box');

paginationBlock.addEventListener('click', event => {
  window.currentArrays.currentPage = Number(event.target.textContent);
  console.log(window.currentArrays);
  console.log(render.cards);
  return;
});
