import axios from 'axios';

export default class ApiService {
  constructor() {
    this.cocktailsArray = [];
  }

  async getCocktailRandom(count) {
    // передаем в count необходимое количество коктейлей
    // возвращает массив коктейлей или пустой массив, если не найдено ни одного
    const searchString = 'https://thecocktaildb.com/api/json/v1/1/random.php';
    const cocktailsArray = [];
    let index = 0;

    do {
      const currentCocktails = await axios.get(searchString);
      cocktailsArray[index] = currentCocktails.data.drinks[0];
      index += 1;
    } while (index < count);

    return cocktailsArray;
  }

  async getCocktailByName(name) {
    // возвращает массив коктейлей по имени name, или пустой массив
    // если ничего не найдено, возвращает пустой массив
    // const cocktailsArray = [];
    const searchString = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    const resp = await axios.get(searchString);
    return resp.data.drinks;
  }

  async getCocktailById(idCocktail) {
    // возвращает массив с одним коктейлем сщщотвтствующим idCocktail
    // возвращает пустой массив, если ничего не найдено
    const searchString = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`;
    const resp = await axios.get(searchString);
    return resp.data.drinks;
  }

  async getCocktailByFirstLetter(letter) {
    // Возвращает массив коктейлей по первой букве/цифре letter
    // возвращает пустой массив, если ничего не найдено
    const searchString = `https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    const resp = await axios.get(searchString);
    return resp.data.drinks;
  }
}
