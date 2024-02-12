let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');


function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    slides[index].classList.add('active');
    slides[(index + 1) % slides.length].classList.add('next');
    slides[(index - 1 + slides.length) % slides.length].classList.add('prev');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// Auto advance to the next slide every 3 seconds
setInterval(nextSlide, 5000);