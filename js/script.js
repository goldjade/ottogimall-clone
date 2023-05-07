window.onload = function () {
  const topBanner = document.querySelector(".top-banner");
  const topBannerCloseBtn = document.querySelector(".top-banner-close");
  const wrap = document.querySelector(".wrap");
  const header = document.querySelector(".header");

  topBannerCloseBtn.addEventListener("click", function () {
    topBanner.style.display = "none";
  });

  window.addEventListener("scroll", function () {
    let scrY = this.scrollY;
  });

  let swVisual = new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".visual-pg",
      type: "fraction",
    },
  });

  //슬라이드 멈춤 기능
  const swVisualPlay = document.querySelector(".visual-play");
  swVisualPlay.addEventListener("click", function () {
    if (swVisualPlay.classList.contains("active")) {
      swVisual.autoplay.start();
      swVisualPlay.classList.remove("active");
    } else {
      swVisual.autoplay.stop();
      swVisualPlay.classList.add("active");
    }
  });
};
