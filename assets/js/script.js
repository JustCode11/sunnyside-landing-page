const navToggler = document.querySelector('#navToggler');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainContent = document.querySelector('#main-content');
const arrowIcon = document.querySelector('.arrow-icon');

navToggler.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

arrowIcon.addEventListener('click', () => {
    mainContent.scrollIntoView({ behavior: 'smooth' });
})