function minhaFuncao() {
  const mediaQuery = window.matchMedia('(max-width: 1000px)');

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
  console.log('carreguei');
});
