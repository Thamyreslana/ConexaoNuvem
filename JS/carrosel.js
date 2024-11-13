// script.js
let currentIndex = 0;

function moveSlide(direction) {
    const slideContainer = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-slide img");
    const totalSlides = slides.length;

    // Atualiza o índice do slide
    currentIndex += direction;

    // Volta para o primeiro slide ao passar do último e vice-versa
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Move o slide
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
