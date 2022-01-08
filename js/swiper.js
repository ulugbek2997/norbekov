var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper__btn-next',
    prevEl: '.swiper__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1050: {
      slidesPerView: 4,
    },
  },
});





// swiper2

var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.btn__next',
    prevEl: '.btn__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
});

// swiperInfo

var swiper2 = new Swiper('.swiperInfo', {
  slidesPerView: 4,
  spaceBetween:20,
  navigation: {
    nextEl: '.btn__next',
    prevEl: '.btn__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
