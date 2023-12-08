// (5) - Logic for menu toggle
const navbarMenu = document.querySelector('.navbar__menu');
const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});