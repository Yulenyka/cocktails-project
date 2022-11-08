import './sass/_favorite-cocktails.scss';
import axios from 'axios';
import { ApiService } from './apiservice';

export default function createMarkUpCocktails(gallery, photos = []) {
  let markUp = photos
    .map(
      ({
        srtDrink,
        srtDrinkThumb,
      }) => `<h2 class="cocktails-title">Cocktails</h2>
            <ul class="cocktails-list">
            <li class="cocktails__item">
                <img src="${srtDrinkThumb}" alt="${srtDrink} photo">
                <h3 class="cocktails__name">${srtDrink}</h3>
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
              </ul>`
    )
    .join('');
  gallery.insertAdjacentHTML('afterend', markUp);
}
