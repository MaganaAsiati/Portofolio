const menuButtonOpen = document.getElementById('mobile-menu');
const menuButtonClose = document.getElementById('mobile-menu-exit');
const navListMenu = document.getElementById('nav-list-menu');
const navItems = document.querySelectorAll('.nav-item');

function menuToggle() {
  if (navListMenu.classList.contains('open')) {
    navListMenu.classList.remove('open');
    menuButtonOpen.style.display = 'block';
    menuButtonClose.style.display = 'none';
  } else {
    navListMenu.classList.add('open');
    menuButtonClose.style.display = 'block';
    navListMenu.style.display = 'block';
  }
}

menuButtonOpen.addEventListener('click', menuToggle);
menuButtonClose.addEventListener('click', menuToggle);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navListMenu.classList.remove('open');
    menuButtonClose.style.display = 'none';
  });
});
function outputMessage(accepted) {
  const message = document.getElementById('msg');
  if (accepted) {
    message.classList.remove('error');
  } else {
    message.classList.add('error');
    message.innerHTML = 'Please enter a correct email address format';
  }
}

const form = document.querySelector('.container-form');

form.addEventListener('submit', (element) => {
  const email = document.getElementById('email').value;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email !== email.toLowerCase()) {
    element.preventDefault();
    outputMessage(false);
    return;
  }
  if (!emailRegex.test(email)) {
    element.preventDefault();
    outputMessage(false);
    return;
  }
  outputMessage(true);
});
