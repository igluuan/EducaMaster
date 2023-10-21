$(document).ready(function () {
    var currentIndex = 0;
    var slides = $(".carousel-slide");
    var captions = $(".slide-caption");
    var captionsText = [
        "Produtividade:",
        "Programação:",
        "Design:"
    ];

    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
        captions.text(captionsText[index]);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    $("#next-btn").click(nextSlide);
    $("#prev-btn").click(prevSlide);
});