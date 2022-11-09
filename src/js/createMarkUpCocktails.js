export default function createMarkUpCocktails(gallery, photo = []) {
  let markUp = photo
    .map(
      ({ strDrink, strDrinkThumb }) =>
        `<li class="cocktails__item">
                <img src="${strDrinkThumb}" alt="photo">
                <h3 class="cocktails__name">"${strDrink}"</h3>
                <ul class="button-list">
                    <li class="button__item">
                        <button class="button-more" type="button">Learn more
                        </button>
                    </li>
                    <li class="button__item">
                        <button class="button-add" type="button">Add to
                        </button>
                    </li>
                </ul>
              </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markUp);
}
