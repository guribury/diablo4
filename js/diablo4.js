const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  loop: true,
  autoplay: {
    delay: 4000
  },
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});