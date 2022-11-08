const favoriteCocktailsTitle = document.querySelector(
  '.favorite-cocktails__title'
);

export default function outAbsenceMessageCocktails(
  gallery,
  cocktailsArray = []
) {
  let markupCocktails = `<p class="no__favorite-cocktails is-hidden">
    You haven't added any <br />
    favorite cocktails yet
  </p>`;
  gallery.insertAdjacentHTML('afterend', markupCocktails);
}

// export default function outAbsenceMessageIngridient(gallery, photos = []) {
//   let markupIngridient = `<p class="no__favorite-ingridient is-hidden">
//     You haven't added any <br />
//     favorite ingridients yet
//   </p>`;
//   gallery.insertAdjacentHTML('afterend', markupIngridient);
// }
