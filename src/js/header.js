import Render from './render';
import ApiService from './apiservice';
let apiService = new ApiService();
const render = new Render();

const searchForm = document.querySelector('.search-form');
// const gallery = document.querySelector('.cocktails-list');

let coctailName = '';

searchForm.addEventListener('submit', searchCoctail);

async function searchCoctail(e) {
  e.preventDefault();
  coctailName = searchForm.searchQuery.value.trim();
  clearInput();
  if (coctailName) {
    apiService.getCocktailByName(coctailName).then(r => {
      if (r.length === 0) {
        render.renderNotFound();
        return;
      }
      render.cards = r.slice();
      render.createMarkUpCocktails();
    });
  }
}

function clearInput() {
  searchForm.searchQuery.value = '';
}
