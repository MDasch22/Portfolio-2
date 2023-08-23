const menuBtn = document.querySelector('.menu-button');
const hamBurger = document.querySelector('.menu-button__burger')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamBurger.classList.add('open');
    showMenu = true;
  } else {
    hamBurger.classList.remove('open');
    showMenu = false
  }
}
