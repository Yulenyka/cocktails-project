import ApiService from './apiservice';

let apiService = new ApiService();

// apiService.getCocktailRandom(9).then(resp => {
//   // массив указанного числа коктейлей или пустой массив, если не найдено ни одного
//   console.log(resp);
// });

// apiService.getCocktailByName('beer').then(resp => {
//   // возвращает массив коктейлей по имени name, или пустой массив
//   // если ничего не найдено, возвращает пустой массив
//   console.log(resp);
// });

// apiService.getCocktailById(12618).then(resp => {
//   // idCocktail - id коктейля возвращает массив с одним коктейлем
//   // возвращает пустой массив, если ничего не найдено
//   console.log(resp);
// });

// apiService.getCocktailByFirstLetter('b').then(resp => {
//   // Возвращает массив коктейлей по первой букве/цифре
//   // возвращает пустой массив, если ничего не найдено
//   console.log(resp);
// });

// apiService.getCocktailIngrName('campari').then(resp => {
//   // возвращает ингридиет по имени name.
//   // возвращает пустой массив, если ничего не найдено
//   console.log(resp);
// });

// apiService.getCocktailIngrId(83).then(resp => {
//   // возвращает ингридиет по id.
//   // возвращает пустой массив, если ничего не найдено
//   console.log(resp);
// });