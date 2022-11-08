import ApiService from './apiservice';

let apiService = new ApiService();
// const fav = 'favorite-cocktails'; // localStorage.setItem(DATA_KEY, JSON.stringify(valueForm)) DATA_KEY !!! как у Наташи

apiService.getCocktailRandom(3).then(data => {
  console.log(data);
  localStorage.setItem('fav', JSON.stringify(data));
});

export function showCoctails(gallery, cocktails = []) {
  if (localStorage.getItem('fav')) {
    let favoriteCocktails = JSON.parse(localStorage.getItem('fav'));
    console.log(favoriteCocktails);
    const markupCocktails = cocktails
      .map(({ strDrink, strDrinkThumb }) => {
        return `<li class="cocktails__item">
                <img src="${strDrinkThumb}" alt="${strDrink} photo">
                <h3 class="cocktails__name">${strDrink}</h3>
                <ul class="button-list">
                    <li class="button__item">
                        <button class="button-more" type="submit">Learn more
                        </button>
                    </li>
                    <li class="button__item">
                        <button class="button-add" type="submit">Add to
                        </button>
                    </li>
                </ul>
              </li>
              `;
      })
      .join('');
    gallery.innerHTML = markupCocktails;
  } else {
    // const renderMarkup = data => {
    //   const markupCocktails = cocktails
    //     .map(({ strDrink, strDrinkThumb }) => {
    //       return `<p class="no__favorite-cocktails">
    //   You haven't added any <br />
    //   favorite cocktails yet
    // </p>
    //           `;
    //     })
    //     .join('');
    //   gallery.innerHTML = markupCocktails;
    // };
  }
}
