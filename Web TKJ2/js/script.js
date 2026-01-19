// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
 document.querySelector('#hamburger-menu').onclick = () => {
   navbarNav.classList.toggle('active');
 };

// klik di luar sidebar untuk menghilangkan navbar
 const hamburger = document.querySelector('#hamburger-menu');

 document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    });

// Gallery Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.galeri-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + totalSlides) % totalSlides) {
            slide.classList.add('prev');
        } else if (i === (index + 1) % totalSlides) {
            slide.classList.add('next');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners for navigation buttons
document.getElementById('galeri-next').addEventListener('click', nextSlide);
document.getElementById('galeri-prev').addEventListener('click', prevSlide);

// Initialize slider
showSlide(currentSlide);


