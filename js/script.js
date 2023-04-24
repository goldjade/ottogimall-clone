window.onload = function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
