const menuButtonOpen = document.getElementById('mobile-menu');
const menuButtonClose = document.getElementById('mobile-menu-exit');
const navListMenu = document.getElementById('nav-list-menu');
const navItems = document.querySelectorAll('.nav-item');

function menuToggle() {
  if (navListMenu.classList.contains('open')) {
    navListMenu.classList.remove('open');
    menuButtonOpen.style.display = 'block';
    menuButtonClose.style.display = 'none';
    navListMenu.style.display = 'none';
  } else {
    navListMenu.classList.add('open');
    menuButtonOpen.style.display = 'none';
    menuButtonClose.style.display = 'block';
    navListMenu.style.display = 'block';
  }
}

menuButtonOpen.addEventListener('click', menuToggle);
menuButtonClose.addEventListener('click', menuToggle);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToggle);
});
