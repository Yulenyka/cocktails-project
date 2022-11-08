import createMarkUpCocktails from './js/createMarkUp';

import NewsApi from './api';

const gallery = document.querySelector('.container');

// const form = document.querySelector('.search-form');
// const gallery = document.querySelector('.gallery');
// const loadMore = document.querySelector('.load-more');

// form.addEventListener('submit', onSubmitForm);
// loadMore.addEventListener('click', onLoadMore);

// const newsApi = new NewsApi();
// let lightbox = new SimpleLightbox('.gallery a');

// async function onSubmitForm(e) {
//   e.preventDefault();
//   loadMore.classList.add('is-hidden');
//   if (e.target.tagName !== 'FORM') return;
//   clearPhotoList();
//   newsApi.query = e.target.elements.searchQuery.value.trim();
//   if (!newsApi.query)
//     return Notiflix.Notify.info('Sorry, you need to enter a value');
//   newsApi.resetPage();
//   try {
//     let response = await newsApi.fetchPhoto();
//     let totalHits = response.data.totalHits;
//     if (totalHits > 0)
//       Notiflix.Notify.info(`Hooray! We found ${totalHits} images`);
//     let setPhotos = response.data.hits;
//     if (setPhotos.length === 0) {
//       Notiflix.Notify.info(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else {
//       createMarkUpPhoto(gallery, setPhotos);
//       lightbox.refresh();
//       if (totalHits < newsApi.per_page) {
//         loadMore.classList.add('is-hidden');
//       } else loadMore.classList.remove('is-hidden');
//     }
//   } catch (error) {
//     Notiflix.Notify.failure(`Request error`);
//   }
// }

// async function onLoadMore(e) {
//   loadMore.classList.add('is-hidden');
//   if (e.target.tagName !== 'BUTTON') return;
//   try {
//     let response = await newsApi.fetchPhoto();
//     let setPhotos = response.data.hits;

//     createMarkUpPhoto(gallery, setPhotos);
//     lightbox.refresh();
//     scrollTo();
//     if ((newsApi.page - 1) * newsApi.per_page > response.data.totalHits) {
//       loadMore.classList.add('is-hidden');
//       Notiflix.Notify.info(
//         "We're sorry, but you've reached the end of search results"
//       );
//     } else {
//       loadMore.classList.remove('is-hidden');
//     }
//   } catch (error) {
//     Notiflix.Notify.failure(`Request error`);
//   }
// }

// function clearPhotoList() {
//   gallery.innerHTML = '';
// }

// function scrollTo() {
//   const { height: cardHeight } =
//     gallery.firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// }
