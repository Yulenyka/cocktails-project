import ApiService from './apiservice';

export const FAVORITE_KEY = 'favorite';

const VIEW_PORT_MOBILE = 320;
const VIEW_PORT_TABLET = 768;
const VIEW_PORT_DESKTOP = 1280;

// кількість зображень на єкрані для пагінації
const COUNT_PICT_ON_DESKOP = 9;
const COUNT_PICT_ON_TABLET = 6;
const COUNT_PICT_ON_MOBILE = 3;

// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
window.currentArrays = {
  cards: [], // загальний масив
  cardForRender: [], // поточні відображені картки
  currentPage: 1, //поточна сторінка
  pages: 0, // загальна кількість сторінок
};

export default class Render {
  constructor() {
    this.gallery = document.querySelector('.cocktails-list');
    this.wrapper = document.querySelector('.missingcocktails-wrap');
    this.cocktailsListRef = document.querySelector('.cocktails-list');
    this.modalCocktail = document.querySelector('.modal-cocktail');
    this.paginationBlock = document.querySelector('.pagination-box');
    this.paginationList = document.querySelector('.pagination-render');

    // this.cards = window.currentArrays.cards; // масив усіх отриманих коктейів
    // this.cardForRender = []; // масив коктейлів для відображення на поточній сторінці
    this.paginationCurrentPage = 1; // текущая страница пагинации
    this.newsApi = new ApiService();
  }

  get cards() {
    // повертає глобальний масив картинок
    return window.currentArrays.cards;
  }

  set cards(a) {
    window.currentArrays.cards = a.slice();
  }

  paginationOnOff() {
    // Функція відображення пагінації
    if (window.currentArrays.cards.length === 0) return; //нічого рендерити

    // все влазить на сторінку, відключаємо відображення пагінації
    if (window.currentArrays.cards.length <= this.cocktailsPerPage()) {
      this.paginationBlock.classList.add('is-none');
      window.currentArrays.cardForRender = window.currentArrays.cards.slice();
      return;
    } else {
      this.paginationBlock.classList.remove('is-none');
    }
    // console.log(window.currentArrays.cards);
    this.markupRender();
    const indexBegin = 0;
    const indexEnd = this.cocktailsPerPage();
    window.currentArrays.cardForRender = window.currentArrays.cards.slice(
      indexBegin,
      indexEnd
    );
  }

  markupRender() {
    // page сторінка для створення розмітки
    // модифікує this.cardForRender

    // розраховуемо кількість сторінок
    window.currentArrays.pages = Math.ceil(
      window.currentArrays.cards.length / this.cocktailsPerPage()
    );
    // console.log(window.currentArrays.pages);
    let markUpString = '';
    for (let i = 1; i <= window.currentArrays.pages; i++) {
      markUpString += `<li class="pagination-page">
      <button type="button" class="pagination-button">${i}</button>
    </li>`;
    }
    this.paginationList.innerHTML = markUpString;
  }

  createMarkUpCocktails() {
    // Функція, яка створює строку розмітки галереї і додає її до DOM
    const favorite = this.getFavorite();
    // console.log('favorite :>> ', favorite);
    // console.log('this.cards :>> ', this.cards);
    this.paginationOnOff();
    let markUp = window.currentArrays.cardForRender
      .map(({ strDrink, strDrinkThumb, idDrink }) => {
        const cardFavorite = favorite.find(elem => elem.idDrink === idDrink);
        return `<li class="cocktails__item">
                <img src="${strDrinkThumb}" alt="photo" />
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
    if (this.gallery) this.gallery.insertAdjacentHTML('afterbegin', markUp);
  }

  sectionSelectionFoRender(letter) {
    // Функція яка рендерить розмітку по певному заданому символу
    this.newsApi.getCocktailByFirstLetter(letter).then(a => {
      window.currentArrays.cards = a.slice();
      if (window.currentArrays.cards.length === 0) {
        this.renderNotFound();
      } else {
        document.querySelector('.missingcocktails').classList.add('is-none');
        document.querySelector('.cocktails').classList.remove('is-none');
        this.createMarkUpCocktails();
      }
    });
  }

  //  Функція яка рендерить розмітку при відсутності коктейлю
  renderNotFound() {
    document.querySelector('.cocktails').classList.add('is-none');
    document.querySelector('.missingcocktails').classList.remove('is-none');
    this.createMarkUpMissingCocktails();
  }

  createMarkUpMissingCocktails() {
    // Функція створення рядку розмитки, коли по заданому символу
    let markUp = `<h2 class="cocktails-title--refusal">Sorry, we didn't find any cocktail for you</h2>
        <div class="cocktails-frame"></div>`;

    this.wrapper.insertAdjacentHTML('afterbegin', markUp);
  }

  markUpRandomCocktails() {
    // Функція відмальовки рандомних зображень при першому запуску
    this.newsApi.getCocktailRandom(this.cocktailsPerPage()).then(a => {
      window.currentArrays.cards = a.slice();
      this.createMarkUpCocktails();
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
    const card = window.currentArrays.cards.find(elem => elem?.idDrink === id);
    const inArray = favorite.some(elem => elem?.idDrink === id);
    if (!inArray) {
      favorite.push(card);
    } else {
      favorite = favorite.filter(elem => elem.idDrink !== id);
    }
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
  }

  resetMarkUp() {
    // Функція очистки відмальовки
    if (this.gallery) this.gallery.innerHTML = '';
    if (this.wrapper) this.wrapper.innerHTML = '';
    document.querySelector('.cocktails').classList.remove('is-none');
  }
}
