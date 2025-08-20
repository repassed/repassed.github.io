document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu-container');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle2');
  const menu = document.querySelector('.menu-container2');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});