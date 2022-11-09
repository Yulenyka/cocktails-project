export default function createMarkUpMissingCocktails(container) {
  let markUp = `<h2 class="cocktails-title--refusal">Sorry, we didn't find any cocktail for you</h2>
        <div class="cocktails-frame"></div>`;
  container.insertAdjacentHTML('afterend', markUp);
}
