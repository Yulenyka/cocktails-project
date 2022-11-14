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
    render.makeRenderByWord(coctailName.toLowerCase());
  } else {
    render.sectionSelectionFoRender(coctailName.toLowerCase());
  }
  const refButtonActive = document.querySelector('.hero__btn-active');
  if (refButtonActive) {
    refButtonActive.classList.remove('hero__btn-active');
  }
}

function clearInput() {
  searchForm.searchQuery.value = '';
}
