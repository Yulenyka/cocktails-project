export default class Render {
  constructor() {
    this.photo = [];
  }
  async markUpRandomCocktails() {
    this.photo = await newsApi.getCocktailRandom(calculatePhoto());
    gallery.innerHTML = '';
    createMarkUpCocktails(gallery, photo);
    const btnAdd = document.querySelector('.button-add');
    btnAdd.addEventListener('click', addToFavorite);
    return this.photo;
  }
  addToFavorite(id = '') {
    const favorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
    console.log(favorite);
    const inArray = favorite.some(elem => elem.id === id);
    if (!inArray) {
      const card = this.photo.find(elem => elem.id === id);
      console.log(card);
      favorite.push(card);
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
    } else {
      const newArray = favorite.filter(elem => elem.id !== id);
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(newArray));
    }
  }

  calculatePhoto() {
    const windowInnerWidth = window.innerWidth;
    let count = 0;
    if (windowInnerWidth > 0 && windowInnerWidth < 768) {
      count = 3;
    } else if (windowInnerWidth >= 768 && windowInnerWidth < 1280) {
      count = 6;
    } else {
      count = 9;
    }
    return count;
  }
}
