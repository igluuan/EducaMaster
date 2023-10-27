function initCarousel() {
  var currentIndex = 1;
  var slides = document.querySelectorAll('.card-plans');
  var nextButton = document.querySelector('.btn-next');
  var prevButton = document.querySelector('.btn-prev');

  function showSlide(index, slides) {
    slides.forEach(function (slide, i) {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex, slides);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex, slides);
  }

  showSlide(currentIndex, slides);

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
}

function minhaFuncao() {
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  // Mova a função handleMediaQuery para fora de minhaFuncao
  function handleMediaQuery(event) {
    if (event.matches) {
      initCarousel();
    }
  }

  // Adicione um ouvinte para a media query.
  mediaQuery.addEventListener('change', handleMediaQuery);

  // Chame a função handleMediaQuery inicialmente para verificar o estado da media query quando a página carrega.
  handleMediaQuery(mediaQuery);
}
function focusInput(inputId) {
  var input = document.getElementById(inputId);
  input.placeholder = ''; // Remove o texto do placeholder
  input.classList.add('placeholder-hidden'); // Adiciona a classe para tornar o texto invisível
}

function blurInput(inputId) {
  var input = document.getElementById(inputId);
  input.placeholder =
    inputId === 'emailInput' ? 'Email address' : 'Password (+8 characters)'; // Restaura o texto do placeholder
  input.classList.remove('placeholder-hidden'); // Remove a classe para tornar o texto visível novamente
}

document.addEventListener('DOMContentLoaded', function () {
  minhaFuncao();
});
