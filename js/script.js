const menuButtonOpen = document.getElementById('mobile-menu');
const menuButtonClose = document.getElementById('mobile-menu-exit');
const navListMenu = document.getElementById('nav-list-menu');

menuButtonOpen.addEventListener('click', () => {
  navListMenu.classList.add('open');
});

menuButtonClose.addEventListener('click', () => {
  navListMenu.classList.remove('open');
});
