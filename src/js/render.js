import ApiService from './apiservice';

export const FAVORITE_KEY = 'favorite';

const VIEW_PORT_MOBILE = 320;
const VIEW_PORT_TABLET = 768;
const VIEW_PORT_DESKTOP = 1280;

// кількість зображень на єкрані для пагінації
const COUNT_PICT_ON_DESKOP = 9;
const COUNT_PICT_ON_TABLET = 6;
const COUNT_PICT_ON_MOBILE = 3;

window.globalArrays = {
  cards: [], // загальний масив
  cardForRender: [], // поточні відображені картки
  currentPage: 1, //поточна сторінка
  pages: 1, // загальна кількість сторінок
};

export default class Render {
  constructor() {
    this.gallery = document.querySelector('.cocktails-list');
    this.wrapper = document.querySelector('.missingcocktails-wrap');
    this.galleryTitle = document.querySelector('.cocktails-title');
    this.modalCocktail = document.querySelector('.modal-cocktail');
    this.paginationBlock = document.querySelector('.pagination-box');
    this.paginationList = document.querySelector('.pagination-list');

    this.paginationCurrentPage = 1; // текущая страница пагинации
    this.newsApi = new ApiService();
  }

  get cards() {
    // повертає глобальний масив картинок
    return window.globalArrays.cards;
  }

  set cards(a) {
    window.globalArrays.cards = a.slice();
  }
  get cardForRender() {
    return window.globalArrays.cardForRender;
  }

  set cardForRender(a) {
    window.globalArrays.cardForRender = a.slice();
  }
  get currentPage() {
    return window.globalArrays.currentPage;
  }

  set currentPage(a) {
    window.globalArrays.currentPage = a;
  }

  get pages() {
    return window.globalArrays.pages;
  }

  set pages(a) {
    window.globalArrays.pages = a;
  }

  paginationOnOf() {
    // Функція відображення блоку пагінації
    if (this.cards.length <= this.cocktailsPerPage()) {
      // все влазить на сторінку, відключаємо відображення пагінації
      this.paginationBlock.classList.add('is-none');
      this.cardForRender = this.cards.slice();
      return;
    }
    this.paginationBlock.classList.remove('is-none');

    this.createMarkupPagination();

    this.paginationList.childNodes[
      this.currentPage - 1
    ].firstElementChild.classList.add('pagination-button--select');
  }

  createMarkupPagination() {
    // створює розмітку пагінації
    // розраховуемо кількість сторінок
    this.pages = Math.ceil(this.cards.length / this.cocktailsPerPage());
    let markUpString = '';
    for (let i = 1; i <= this.pages; i++) {
      markUpString += `<li class="pagination-item">
      <button type="button" class="pagination-button">${i}</button>
    </li>`;
    }
    this.paginationList.innerHTML = markUpString;
  }

  makeRenderArray() {
    const indexBegin = (this.currentPage - 1) * this.cocktailsPerPage();
    const indexEnd = indexBegin + this.cocktailsPerPage();
    this.cardForRender = this.cards.slice(indexBegin, indexEnd);
  }

  createMarkUpCocktails() {
    // Функція, яка створює строку розмітки галереї і додає її до DOM
    const favorite = this.getFavorite();
    this.paginationOnOf();
    this.makeRenderArray();
    let markUp = this.cardForRender
      .map(({ strDrink, strDrinkThumb, idDrink }) => {
        const cardFavorite = favorite.find(elem => elem.idDrink === idDrink);
        return `<li class="cocktails__item">
                <img src="${strDrinkThumb}" alt="Cocktails photo" />
                <h3 class="cocktails__name">"${strDrink}"</h3>
                <ul class="button-list">
                    <li class="button__item">
                        <button class="button-more" type="button" data-id="${idDrink}" data-action="more">Learn more
                        </button>
                    </li>
                    <li class="button__item">
                     <button class="${
                       cardFavorite ? 'button-remove' : 'button-add'
                     }" type="button" data-id="${idDrink}" data-action="favorite">${
          cardFavorite ? 'Remove' : 'Add to'
        }
                        </button>  
                    </li>
                </ul>
              </li>`;
      })
      .join('');
    this.resetMarkUp();
    this.galleryTitle.classList.remove('is-none');
    if (this.gallery) this.gallery.innerHTML = markUp;
  }

  sectionSelectionFoRender(letter) {
    // Функція яка рендерить розмітку по певному заданому символу
    this.resetGlobalArray();
    this.newsApi
      .getCocktailByFirstLetter(letter)
      .then(a => {
        this.cards = a.slice();
        if (this.cards.length === 0) {
          this.renderNotFound();
        } else {
          document.querySelector('.missingcocktails').classList.add('is-none');
          document.querySelector('.cocktails').classList.remove('is-none');
          this.createMarkUpCocktails();
        }
      })
      .catch(e => {
        this.resetGlobalArray();
      });
  }

  //  Функція яка рендерить розмітку при відсутності коктейлю
  renderNotFound() {
    document.querySelector('.cocktails').classList.add('is-none');
    document.querySelector('.missingcocktails').classList.remove('is-none');
    this.galleryTitle.classList.add('is-none');
    this.createMarkUpMissingCocktails();
  }

  createMarkUpMissingCocktails() {
    // Функція створення рядку розмитки, коли по заданому символу
    let markUp = `<h2 class="cocktails-title--refusal">Sorry, we didn't find any cocktail for you</h2>
        <div class="cocktails-frame"></div>`;
    // this.resetGlobalArray();
    this.paginationOnOf();
    this.resetMarkUp();

    this.wrapper.innerHTML = markUp;
  }

  markUpRandomCocktails() {
    // Функція відмальовки рандомних зображень при першому запуску
    this.resetGlobalArray();
    this.newsApi
      .getCocktailRandom(this.cocktailsPerPage())
      .then(a => {
        this.cards = a.slice();
        this.createMarkUpCocktails();
      })
      .catch(e => {
        this.resetGlobalArray();
      });
  }

  cocktailsPerPage() {
    // повертає кількість зображень для відмальовки на сторінці в залежності від вьюпорта
    const currentViewPort = screen.availWidth;
    if (currentViewPort < VIEW_PORT_TABLET) {
      // mobile
      console.log(COUNT_PICT_ON_MOBILE);
      return COUNT_PICT_ON_MOBILE;
    }
    if (
      currentViewPort >= VIEW_PORT_TABLET &&
      currentViewPort < VIEW_PORT_DESKTOP
    ) {
      // tablet
      return COUNT_PICT_ON_TABLET;
    }
    // desktop
    return COUNT_PICT_ON_DESKOP;
  }

  // Функція наявності картки в LocalStr
  getFavorite() {
    const dataLocalStorage = localStorage.getItem(FAVORITE_KEY);
    let favorite = dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
    return favorite;
  }

  // Функція зміни кнопки додавання/видалення
  changeFavoriteBtn(btn) {
    const id = btn.dataset.id;
    let favorite = this.getFavorite();
    const inArray = favorite.some(elem => elem?.idDrink === id);
    if (inArray) {
      btn.textContent = 'Remove';
      btn.classList.add('button-remove');
      btn.classList.remove('button-add');
    } else {
      btn.textContent = 'Add to';
      btn.classList.add('button-add');
      btn.classList.remove('button-remove');
    }
  }

  addToFavorite(id = '') {
    // Функція додавання, видалення з улюблених, робота з ЛокалСтор.
    let favorite = this.getFavorite();
    const card = this.cards.find(elem => elem?.idDrink === id);
    const inArray = favorite.some(elem => elem?.idDrink === id);
    if (!inArray) {
      favorite.push(card);
    } else {
      favorite = favorite.filter(elem => elem.idDrink !== id);
    }
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
  }

  resetGlobalArray() {
    this.cards = [];
    this.cardForRender = [];
    this.pages = 1;
    this.currentPage = 1;
  }

  resetMarkUp() {
    // Функція очистки відмальовки
    if (this.gallery) this.gallery.innerHTML = '';
    if (this.wrapper) this.wrapper.innerHTML = '';
    document.querySelector('.cocktails').classList.remove('is-none');
  }
}
