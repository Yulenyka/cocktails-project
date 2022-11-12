import { openModalIngridient, renderModalIngridient } from './modalingr';

// import ApiService from './apiservice';

const galleryIngridients = document.querySelector('.favorite-ingridient__list');
// const galleryIngridientsTitle = document.querySelector(
//   '.favorite-ingridient__title'
// );
// let apiService = new ApiService();
const FAVORITE_KEY = 'favoriteIngredient';

// apiService.getCocktailIngrId(25).then(resp => {
//   // возвращает ингридиет по id.
//   // возвращает пустой массив, если ничего не найдено
//   localStorage.setItem(FAVORITE_KEY, JSON.stringify(resp));
//   console.log(resp);
// });

const removeFromFavorite = e => {
  let favoriteIngridients = JSON.parse(localStorage.getItem(FAVORITE_KEY));
  favoriteIngridients = favoriteIngridients.filter(
    elem => elem.idIngredient !== e.target.dataset.id
  );
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteIngridients));
  showIngridients(galleryIngridients);
};
showIngridients(galleryIngridients);

export function showIngridients(galleryIngridients) {
  let favoriteIngridients = JSON.parse(localStorage.getItem(FAVORITE_KEY));
  if (localStorage.getItem(FAVORITE_KEY) && favoriteIngridients.length > 0) {
    const markupIngridients = favoriteIngridients
      .map(({ strIngredient, strType, strAlcohol, idIngredient }) => {
        let text = strType ? strType : strAlcohol;
        return `<li class="favorite-ingridient__item">
      <h3 class="drink__ingridient">${strIngredient}</h3>
      <p class="drink__type">Alcohol: ${text}</p>
      <ul class="button-list">
        <li class="button__item">
          <button class="button-more" type="submit" data-id="${idIngredient}">Learn more</button>
        </li>
        <li class="button__item">
          <button class='button-remove' type="button" data-id="${idIngredient}" data-action="ingredient">Remove</button>
        </li>
      </ul>
    </li>`;
      })
      .join('');
    galleryIngridients.innerHTML = markupIngridients;
    const buttonMore = document.querySelectorAll('.button-more');
    buttonMore.forEach(elem => {
      elem.addEventListener('click', e => {
        let ingredient = favoriteIngridients.find(
          elem => elem.idIngredient === e.target.dataset.id
        );
        console.log(ingredient);
        renderModalIngridient(
          ingredient.strIngredient.toLowerCase().split(' ').join('+')
        );
        openModalIngridient();
      });
    });
    const buttonRemove = document.querySelectorAll('.button-remove');
    buttonRemove.forEach(elem => {
      console.log(elem);
      elem.addEventListener('click', removeFromFavorite);
    });
  } else {
    const markupIngridients = `<li class="favorite-ingridient__box"><p class="favorite-ingridient__text">
      You haven't added any <br />
      favorite ingridients yet
    </p></li>`;
    galleryIngridients.innerHTML = markupIngridients;
  }
}

showIngridients(galleryIngridients);
