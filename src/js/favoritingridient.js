import ApiService from './apiservice';
const galleryIngridients = document.querySelector('.favorite-ingridient__list');
const galleryIngridientsTitle = document.querySelector(
  '.favorite-ingridient__title'
);
let apiService = new ApiService();

// const DATA_KEY = 'favorite-ingredient'; // localStorage.setItem(DATA_KEY, JSON.stringify(valueForm)) DATA_KEY !!! как у Влада

apiService.getCocktailIngrId(25).then(resp => {
  // возвращает ингридиет по id.
  // возвращает пустой массив, если ничего не найдено
  localStorage.setItem('fav', JSON.stringify(resp));
  console.log(resp);
});

export function showIngridients(galleryIngridients) {
  let favoriteIngridients = JSON.parse(localStorage.getItem('fav'));
  if (favoriteIngridients.length > 0) {
    const markupIngridients = favoriteIngridients
      .map(({ strIngredient, strType, strAlcohol }) => {
        let text = strType ? strType : strAlcohol;
        return `<li class="favorite-ingridient__item">
      <h3 class="drink__ingridient">${strIngredient}</h3>
      <p class="drink__type">Alcohol: ${text}</p>
      <ul class="button-list">
        <li class="button__item">
          <button class="button-more" type="submit">Learn more</button>
        </li>
        <li class="button__item">
          <button class="button-add" type="submit">Add to</button>
        </li>
      </ul>
    </li>`;
      })
      .join('');
    galleryIngridients.innerHTML = markupIngridients;
  } else {
    const markupIngridients = `<p class="no__favorite-cocktails">
      You haven't added any <br />
      favorite ingridients yet
    </p>`;
    galleryIngridientsTitle.insertAdjacentHTML('afterend', markupIngridients);
  }
}

showIngridients(galleryIngridients);

// let more = document.querySelector('.button-more');
// modal = document.querySelector('.modal');

// more.addEventListener('click', function () {
//   modal.style.display = 'block';
// });
