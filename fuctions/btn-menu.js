const btnMenu = document.querySelector('.btn-menu');

function toggleMenu() {
  const navMenu = document.getElementById('nav');
  navMenu.classList.toggle('active');
}
btnMenu.addEventListener('click', toggleMenu);
