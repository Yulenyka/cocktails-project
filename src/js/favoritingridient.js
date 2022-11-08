import './sass/_favorit-ingridient.scss';
import './sass/_favorite-cocktails.scss';
// import { queryImage } from './api/fetch';

const favoriteIngridientList = document.querySelector(
  '.favorite-ingridient__list'
);
const favoriteIngridientItem = document.querySelector(
  '.favorite-ingridient__item'
);

// const renderMarkupIngridient = data => {
//   const markupIngridient = data
//     .map(({ strDrink, strIngredient }) => {
//       return `<ul class="favorite-ingridient__list">
//                 <li class="favorite-ingridient__item">
//                 <h3 class="drink__title">${strDrink}</h3>
//                 <p class="drink">${strIngredient}</p>
//                 <div>
//                 <button>Learn more</button>
//                 <button>Add to<svg width="17px" height="15px"></svg></button>
//                 </div>
//                 </li>
//                 </ul>
//               `;
//     })
//     .join('');
//   favoriteIngridientItem.innerHTML += markupIngridient;
// };
