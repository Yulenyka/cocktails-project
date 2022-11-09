const heroNav = document.querySelector('.hero__navigation');
const heroSelect = document.querySelector('.hero__select');

heroSelect.addEventListener('click', showNavigation);

function showNavigation() {
  heroNav.classList.toggle('is-hidden');
}
