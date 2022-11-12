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
      input.checked = true;
    } else {
      document.querySelector('body').classList.remove('dark');
      input.checked = false;
    }
  } catch (error) {}
}
addDarkClassToHtml();