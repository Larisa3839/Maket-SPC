const slideList = document.querySelector('.swiper-wrapper');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  slideList.classList.toggle('hidden');
  button.classList.toggle('button--open');
  button.textContent = slideList.classList.contains('hidden') ? 'Скрыть' : 'Показать все';
});

let init = false;
const swiperCard = () => {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 16,
        width: 240,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();

window.addEventListener("resize", () => {
  swiperCard();
  spoilerSlide();
});