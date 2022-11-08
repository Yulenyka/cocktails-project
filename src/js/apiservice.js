import axios from 'axios';

export default class ApiService {
  constructor() {}

  async getCocktailRandom(count) {
    // передаем в count необходимое количество коктейлей
    // возвращает массив коктейлей или пустой массив, если не найдено ни одного
    const searchString = 'https://thecocktaildb.com/api/json/v1/1/random.php';
    const currentCocktails = [];

    for (let index = 0; index < count; index++) {
      currentCocktails[index] = axios.get(searchString);
    }

    return Promise.all(currentCocktails)
      .then(resultArray => {
        return resultArray.map(elem => elem.data.drinks[0]);
      })
      .catch(e => {
        return [];
      });
  }

  async getCocktailByName(name) {
    // возвращает массив коктейлей по имени name, или пустой массив
    // если ничего не найдено, возвращает пустой массив
    const searchString = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

    return axios
      .get(searchString)
      .then(resultArray => {
        if (resultArray.data.drinks.length === 0) return [];
        return resultArray.data.drinks;
      })
      .catch(e => {
        return [];
      });
  }

  async getCocktailById(idCocktail) {
    // возвращает массив с одним коктейлем по idCocktail
    // возвращает пустой массив, если ничего не найдено
    const searchString = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`;
    return axios
      .get(searchString)
      .then(resultArray => {
        if (resultArray.data.drinks.length === 0) return [];
        return resultArray.data.drinks;
      })
      .catch(e => {
        return [];
      });
  }

  async getCocktailByFirstLetter(letter) {
    // Возвращает массив коктейлей по первой букве/цифре letter
    // возвращает пустой массив, если ничего не найдено
    const searchString = `https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

    return axios
      .get(searchString)
      .then(resultArray => {
        if (resultArray.data.drinks.length === 0) return [];
        return resultArray.data.drinks;
      })
      .catch(e => {
        return [];
      });
  }

  async getCocktailIngrName(name) {
    // возвращает ингридиет по имени name.
    // возвращает пустой массив, если ничего не найдено
    const searchString = `https://thecocktaildb.com/api/json/v1/1/search.php?i=${name}`;

    return axios
      .get(searchString)
      .then(resultArray => {
        if (resultArray.data.ingredients.length === 0) return [];
        return resultArray.data.ingredients;
      })
      .catch(e => {
        return [];
      });
  }

  async getCocktailIngrId(id) {
    // возвращает ингридиет по id.
    // возвращает пустой массив, если ничего не найдено
    const searchString = `https://thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`;
    return axios
      .get(searchString)
      .then(resultArray => {
        if (resultArray.data.ingredients.length === 0) return [];
        return resultArray.data.ingredients;
      })
      .catch(e => {
        return [];
      });
  }
}
