import ApiService from './apiservice';
import Pagination from 'tui-pagination'; 

let apiService = new ApiService();
console.log(apiService);

   var pagination2 = new Pagination(
     document.getElementById('pagination'),
     {
       totalItems: 500,
       itemsPerPage: 10,
       visiblePages: 5,
       centerAlign: true,
     }
   );
    

// const container = document.querySelector('#pagination1');
// console.log(container);

// const pagination1 = new Pagination('pagination1', {
//   totalItems: 200,
//   itemsPerPage: 5,
//   visiblePages: 5,
// });