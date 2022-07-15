const slideList = document.querySelectorAll('.swiper-slide');
const button = document.querySelector('button');

const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1120;
const isDesktop = () => window.innerWidth >= 1120;

/*const slideListHiddn = isTablet() ? document.querySelectorAll('.swiper-slide:nth-last-child(-n + 5)') :
  isDesktop() ? document.querySelectorAll('.swiper-slide:nth-last-child(-n + 3)') : "";*/

console.log(slideList);

const spoilerSlide = () => {
  if (isTablet()) {
    slideList.forEach((slide, index) => index > 5 ?
      slide.classList.add('slide--hidden') :
      slide.classList.remove('slide--hidden'))
  }

  if (isDesktop()) {
    slideList.forEach((slide, index) => index > 7 ?
      slide.classList.add('slide--hidden') :
      slide.classList.remove('slide--hidden'))
  }
}

button.addEventListener('click', () => {
  if (isTablet()) {
    slideList.forEach((slide, index) => {
      if (index > 5) slide.classList.toggle('slide--hidden');
    })
  }
  if (isDesktop()) {
    slideList.forEach((slide, index) => {
      if (index > 7) slide.classList.toggle('slide--hidden');
    })
  }

  button.classList.toggle('button--open');
  button.innerHTML = button.classList.value === "button--open" ? "Скрыть" : "Показать все";

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
spoilerSlide();

window.addEventListener("resize", () => {
  swiperCard();
  spoilerSlide();
});