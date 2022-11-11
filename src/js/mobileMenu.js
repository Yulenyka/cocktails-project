import './darkThemeToggle';

const body = document.body;
const burger = document.querySelector('[data-burger]');
const menuOpen = document.querySelector('.menu__open-icon');
const menuClose = document.querySelector('.menu__close-icon');
const box = document.querySelector('[data-box]');
const nav = document.querySelector('[data-nav]');
const logo = document.querySelector('.logo');
const searchForm = document.querySelector('.search-form');
const themeDesk = document.querySelector('.theme-desk');

const navItems = nav.querySelectorAll('a');
const form = document.querySelector('.search-form');

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger-active');
  menuOpen.classList.toggle('visible');
  menuClose.classList.toggle('visible');
  box.classList.toggle('visible');
  nav.classList.toggle('visible');
  logo.classList.toggle('visible');
  logo.classList.toggle('visibletab');
  searchForm.classList.toggle('visible');
  themeDesk.classList.toggle('visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    el.preventDefault();
    classUtil();
  });
});

form.addEventListener('submit', () => {
  classUtil();
});

function classUtil() {
  body.classList.remove('stop-scroll');
  burger.classList.remove('burger-active');
  menuOpen.classList.remove('visible');
  menuClose.classList.remove('visible');
  box.classList.remove('visible');
  nav.classList.remove('visible');
  logo.classList.remove('visible');
  logo.classList.remove('visibletab');
  searchForm.classList.add('visible');
  themeDesk.classList.remove('visible');
}
