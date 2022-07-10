
const list = document.querySelectorAll('.swiper-slide');
const button = document.querySelector('button');
const textButton = document.querySelector('.button_text');

button.addEventListener('click', () => {
    list.forEach((item) => item.classList.toggle('spoiler-body'));
    button.classList.toggle('button-open');
    textButton.innerText = button.classList.value === "button-open" ? "Скрыть" : "Показать все";
});

let init = false;

const swiperCard = () => {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
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
window.addEventListener("resize", swiperCard);