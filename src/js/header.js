import Render from './render';
import ApiService from './apiservice';
let apiService = new ApiService();
const render = new Render();

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.cocktails-list');
console.log(gallery);

let coctailName = '';

searchForm.addEventListener('submit', searchCoctail);

async function searchCoctail(e) {
  e.preventDefault();
  coctailName = searchForm.searchQuery.value.trim();
  if (coctailName) {
    apiService.getCocktailByName(coctailName).then(r => {
      if (r.length === 0) {
        render.resetMarkUp();
        render.renderNotFound();
        return;
      }
      render.cards = r.slice();
      render.resetMarkUp();
      render.createMarkUpCocktails();
    });
  }
}
