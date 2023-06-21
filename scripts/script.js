/* script responsável pela animação do carrossel*/
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++;
    carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }
});
