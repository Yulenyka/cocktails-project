const input = document.querySelector('.checkbox-input');

input.addEventListener('click', event => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHtml();
});

function addDarkClassToHtml() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.querySelector('.hero__text').classList.add('text');
      document.querySelector('.darkk').classList.add('dark');
      document.querySelector('.page-header').classList.add('dark');
      document.querySelector('.burger-menu__icon').classList.add('whiteicon');
      document.querySelector('.nav__open-icon').classList.add('whiteicon');
      input.checked = true;
    } else {
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.hero__text').classList.remove('text');
      document.querySelector('.darkk').classList.remove('dark');
      document.querySelector('.page-header').classList.remove('dark');
      document.querySelector('.burger-menu__icon').classList.remove('whiteicon');
      document.querySelector('.nav__open-icon').classList.remove('whiteicon');
      input.checked = false;
    }
  } catch (error) {}
}
addDarkClassToHtml();