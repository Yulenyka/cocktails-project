import ApiService from './apiservice';
const galleryIngridients = document.querySelector('.favorite-ingridient__list');
const galleryIngridientsTitle = document.querySelector(
  '.favorite-ingridient__title'
);
let apiService = new ApiService();
const FAVORITE_KEY = 'favoriteIngridient';

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
  if (favoriteIngridients.length > 0) {
    const markupIngridients = favoriteIngridients
      .map(({ strIngredient, strType, strAlcohol, idIngredient }) => {
        let text = strType ? strType : strAlcohol;
        return `<li class="favorite-ingridient__item">
      <h3 class="drink__ingridient">${strIngredient}</h3>
      <p class="drink__type">Alcohol: ${text}</p>
      <ul class="button-list">
        <li class="button__item">
          <button class="button-more" type="submit">Learn more</button>
        </li>
        <li class="button__item">
          <button class='button-remove' type="button" data-id="${idIngredient}" data-action="favorite">Remove</button>
        </li>
      </ul>
    </li>`;
      })
      .join('');
    galleryIngridients.innerHTML = markupIngridients;
    const buttonRemove = document.querySelectorAll('.button-remove');
    buttonRemove.forEach(elem => {
      console.log(elem);
      elem.addEventListener('click', removeFromFavorite);
    });
  } else {
    const markupIngridients = `<li><p class="no__favorite-cocktails">
      You haven't added any <br />
      favorite ingridients yet
    </p></li>`;
    galleryIngridients.innerHTML = markupIngridients;
  }
}

showIngridients(galleryIngridients);

let more = document.querySelector('.button-more');
modal = document.querySelector('.modal');

more.addEventListener('click', function () {
  modal.style.display = 'block';
});
