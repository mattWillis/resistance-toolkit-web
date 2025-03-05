import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    loopAddBlankSlides: false,
    slidesPerGroup: 3,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10
      }
    },
  });
});

