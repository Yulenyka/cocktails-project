export const heroNav = document.querySelector('.hero__navigation');
export const heroSelect = document.querySelector('.hero__select');

document.body.addEventListener('click', hideLetters);
heroSelect.addEventListener('click', showNavigation);

export function showNavigation(event) {
  if (event.target.closest('.hero__select')) {
    heroNav.classList.toggle('is-hidden');
    event.stopPropagation();
  }
}

export function hideLetters(event) {
  if (!event.target.closest('.hero__navigation')) {
    heroNav.classList.add('is-hidden');
  }
}
