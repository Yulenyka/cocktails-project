const body = document.querySelector('body');
const label = document.querySelector('.theme-switch__label');
const input = document.querySelector('#themeSwitch');

label.addEventListener('click', themeSwitcher);

function themeSwitcher() {
  body.classList.toggle('change-toggle-color');

  span.forEach(elem => elem.classList.toggle('dark'));

  const theme = localStorage.getItem('theme');
  if (theme === null || theme === 'light') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
