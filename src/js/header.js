import Render from './render';
import ApiService from './apiservice';

let apiService = new ApiService();
let render = new Render();

const searchForm = document.querySelector('.search-form');

let coctailName = '';

searchForm.addEventListener('submit', searchCoctail);

async function searchCoctail(e) {
  e.preventDefault();
  coctailName = searchForm.searchQuery.value.trim();
  clearInput();
  if (coctailName.length > 1) {
    apiService.getCocktailByName(coctailName.toLowerCase).then(r => {
      if (r.length === 0) {
        render.renderNotFound();
        return;
      }
      render.cards = r.slice();
      render.createMarkUpCocktails();
    });
  } else {
    render.sectionSelectionFoRender(coctailName.toLowerCase);
  }
}

function clearInput() {
  searchForm.searchQuery.value = '';
}
