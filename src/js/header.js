import ApiService from './apiservice';

let apiService = new ApiService();

apiService.getCocktailRandom(9).then(resp => {
  // массив указанного числа коктейлей или пустой массив, если не найдено ни одного
  console.log(resp);
});

// apiService.getCocktailByName('margarita').then(resp => {
//   // возвращает массив коктейлей по имени name, или пустой массив
//   // если ничего не найдено, возвращает пустой массив
//   console.log(resp);
// });

// apiService.getCocktailById(12618).then(resp => {
//   // idCocktail - id коктейля возвращает массив с одним коктейлем
//   // возвращает пустой массив, если ничего не найдено
//   console.log(resp);
// });

// apiService.getCocktailByFirstLetter('a').then(resp => {
//   // Возвращает массив коктейлей по первой букве/цифре
//   // возвращает пустой массив, если ничего не найдено
//   console.log(resp);
// });
apiService.getCocktailIngr().then(resp => {
  console.log(resp);
});
