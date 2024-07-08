let Swiper;

// Script de carga dinámica del archivo Swiper
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";
script.onload = function() {
  Swiper = window.Swiper;
  initializeSwiper();
};

export function initializeSwiper() {
  let swiper = new Swiper(".cliente-swiper-container", {
    autoplay: {
      delay: 4000,
    },
    loop: true,
  });

  swiper.on("slideChangeTransitionEnd", function () {
    swiper.autoplay.start();
  });
}

document.head.appendChild(script);

