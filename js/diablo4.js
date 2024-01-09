// Swiper
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

// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .7
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});