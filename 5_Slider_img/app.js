const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'next', 'last');
    
    if (i === index) {
      slide.classList.add('active');
    } else if (i === index - 1 || (index === 0 && i === slides.length - 1)) {
      slide.classList.add('last');
    } else if (i === index + 1 || (index === slides.length - 1 && i === 0)) {
      slide.classList.add('next');
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(slideIndex);
