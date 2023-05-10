window.onload = function () {
  const topBanner = document.querySelector(".top-banner");
  const topBannerCloseBtn = document.querySelector(".top-banner-close");

  window.addEventListener("scroll", function () {
    let scrY = this.scrollY;
  });

  topBannerCloseBtn.addEventListener("click", function () {
    topBanner.style.display = "none";
  });

  const cateBtn = document.querySelector(".cate");
  const cateList = document.querySelector(".cate-list");
  // 전체메뉴
  cateBtn.addEventListener("mouseover", function () {
    cateList.classList.add("active");
  });
  cateBtn.addEventListener("mouseleave", function () {
    cateList.classList.remove("active");
  });
  // 서브메뉴
  const cateLists = document.querySelectorAll(".mainCategory");
  const cateDepth2 = document.querySelectorAll(".subCategory");
  cateLists.forEach(function (item, index) {
    item.addEventListener("mouseenter", function () {
      cateDepth2.forEach(function (itemSub, indexSub) {
        itemSub.style.display = "none";
        if (indexSub === index) {
          itemSub.style.display = "block";
        }
        if (itemSub.children.length === 0) {
          itemSub.style.display = "none";
        }
      });
    });
  });

  // 비주얼 슬라이드
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
