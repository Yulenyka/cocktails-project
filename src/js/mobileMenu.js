
const body = document.body;
const burger = document.querySelector('[data-burger]');
const menuOpen = document.querySelector('.menu__open-icon');
const menuClose = document.querySelector('.menu__close-icon');
const logo = document.querySelector('.logo');
const box = document.querySelector('[data-box]');
const nav = document.querySelector('[data-nav]');
const themeDesk = document.querySelector('.theme-desk');
const searchForm = document.querySelector('.search-form');

const navItems = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  menuOpen.classList.toggle('visible');
  menuClose.classList.toggle('visible');
  logo.classList.toggle('visible');
  box.classList.toggle('visible');
  nav.classList.toggle('visible');
  searchForm.classList.toggle('visible');
  themeDesk.classList.toggle('visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    e.preventDefault();
    classUtil();
  });
});

searchForm.addEventListener('submit', () => {
  classUtil();
});

function classUtil() {
  body.classList.remove('stop-scroll');
  menuOpen.classList.remove('visible');
  menuClose.classList.remove('visible');
  logo.classList.remove('visible');
  box.classList.remove('visible');
  nav.classList.remove('visible');
  searchForm.classList.add('visible');
  themeDesk.classList.remove('visible');
}
