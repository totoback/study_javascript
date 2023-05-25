const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
// slideIndex는 현재 표시되는 슬라이드의 인덱스를 나타내는 변수입니다. 초기값은 0으로 설정됩니다.

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'next', 'last');
    // slide.classList.remove('active', 'next', 'last')를 사용하여 모든 슬라이드 요소에서 'active', 'next', 'last' 클래스를 제거합니다.
    
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
  // % 연산자를 사용하여 슬라이드 인덱스가 슬라이드의 길이를 초과하면 0으로 다시 설정됩니다.
  showSlide(slideIndex);
  // showSlide(slideIndex)를 호출하여 변경된 슬라이드 인덱스를 기반으로 슬라이드를 표시합니다.
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  // 이전 슬라이드로 전환하기 위해 현재 슬라이드 인덱스에서 1을 빼고, 음수가 되지 않도록 슬라이드의 길이를 더해줍니다.
  showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(slideIndex);
