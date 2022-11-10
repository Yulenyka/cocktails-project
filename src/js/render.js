// import createMarkUpCocktails from './createMarkUpCocktails';
// import createMarkUpMissingCocktails from './createMarkUpMissingCocktails';
import ApiService from './apiservice';
export const FAVORITE_KEY = 'favorite';
export default class Render {
  constructor() {
    this.gallery = document.querySelector('.cocktails-list');
    this.wrapper = document.querySelector('.missingcocktails-wrap');
    this.newsApi = new ApiService();
    this.cards = [];
    this.cocktailsListRef = document.querySelector('.cocktails-list');
  }
  // Функція яка рендерить розмітку по певному заданому символу
  async sectionSelectionFoRender(letter) {
    this.cards = await this.newsApi.getCocktailByFirstLetter(letter);
    if (this.cards.length === 0) {
      this.renderNotFound();
    } else {
      document.querySelector('.missingcocktails').classList.add('is-none');
      document.querySelector('.cocktails').classList.remove('is-none');
      this.createMarkUpCocktails();
    }
  }

  //  Функція яка рендерить розмітку при відсутності коктейлю
  renderNotFound() {
    document.querySelector('.cocktails').classList.add('is-none');
    document.querySelector('.missingcocktails').classList.remove('is-none');
    this.createMarkUpMissingCocktails();
  }

  // Функція, яка створює строку розмітки галереї і додає її до DOM
  createMarkUpCocktails() {
    const favorite = this.getFavorite();
    let markUp = this.cards
      .map(({ strDrink, strDrinkThumb, idDrink }) => {
        const cardFavorite = favorite.find(elem => elem.idDrink === idDrink);
        return `<li class="cocktails__item">
                <img src="${strDrinkThumb}" alt="photo">
                <h3 class="cocktails__name">"${strDrink}"</h3>
                <ul class="button-list">
                    <li class="button__item">
                        <button class="button-more" type="button">Learn more
                        </button>
                    </li>
                    <li class="button__item">
                     <button class="${
                       cardFavorite ? 'button-remove' : 'button-add'
                     } type="button" data-id="${idDrink}" data-action="favorite">${
          cardFavorite ? 'Remove' : 'Add to'
        }
                        </button>  
                    </li>
                </ul>
              </li>`;
      })
      .join('');
    this.gallery.insertAdjacentHTML('afterbegin', markUp);
  }
  // Функція створення рядку розмитки, коли по заданому символу
  createMarkUpMissingCocktails() {
    let markUp = `<h2 class="cocktails-title--refusal">Sorry, we didn't find any cocktail for you</h2>
        <div class="cocktails-frame"></div>`;
    this.wrapper.insertAdjacentHTML('afterbegin', markUp);
  }

  // Функція відмальовки рандомних зображень
  async markUpRandomCocktails() {
    this.cards = await this.newsApi.getCocktailRandom(9);
    this.gallery.innerHTML = '';
    this.createMarkUpCocktails();
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
    const inArray = favorite.some(elem => elem.idDrink === id);
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

  // Функція додавання, видалення з улюблених, робота з ЛокалСтор.
  addToFavorite(id = '') {
    let favorite = this.getFavorite();
    const card = this.cards.find(elem => elem.idDrink === id);
    const inArray = favorite.some(elem => elem.idDrink === id);
    if (!inArray) {
      favorite.push(card);
    } else {
      favorite = favorite.filter(elem => elem.idDrink !== id);
    }
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
  }
}
