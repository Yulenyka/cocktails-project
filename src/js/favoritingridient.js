import ApiService from './apiservice';
const galleryIngridients = document.querySelector('.favorite-ingridient__list');
let apiService = new ApiService();
// const DATA_KEY = 'favorite-ingredient'; // localStorage.setItem(DATA_KEY, JSON.stringify(valueForm)) DATA_KEY !!! как у Влада

apiService.getCocktailIngrId(83).then(resp => {
  // возвращает ингридиет по id.
  // возвращает пустой массив, если ничего не найдено
  localStorage.setItem('fav', JSON.stringify(resp));
  console.log(resp);
});

export function showIngridients(galleryIngridients) {
  if (localStorage.getItem('fav')) {
    let favoriteIngridients = JSON.parse(localStorage.getItem('fav'));
    console.log(favoriteIngridients);
    const markupIngridients = favoriteIngridients
      .map(
        ({ strIngredient, strType }) => `<li class="favorite-ingridient__item">
      <h3 class="drink__ingridient">${strIngredient}</h3>
      <p class="drink__type">${strType}</p>
      <ul class="button-list">
        <li class="button__item">
          <button class="button-more" type="submit">Learn more</button>
        </li>
        <li class="button__item">
          <button class="button-add" type="submit">Add to</button>
        </li>
      </ul>
    </li>`
      )
      .join('');
    galleryIngridients.innerHTML = markupIngridients;
  } else {
    const markupIngridients = favoriteIngridients
      .map(({ strIngredient, strType }) => {
        return `<p class="no__favorite-cocktails">
      You haven't added any <br />
      favorite ingridients yet
    </p>
              `;
      })
      .join('');
    galleryIngridients.innerHTML = markupIngridients;
  }
}

showIngridients(galleryIngridients);
