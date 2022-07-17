const mainNav = document.querySelector('.main-nav');
const navBarToggle = document.querySelector('.nav-toggle');

navBarToggle.addEventListener('click', () => {
    
    mainNav.classList.toggle("active");
});