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
console.log('carreguei');
