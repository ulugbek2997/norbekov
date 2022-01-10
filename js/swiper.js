// swiperBanner
var swiper = new Swiper(".bannerSwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// booksSwiper
var booksSwiper = new Swiper('.booksSwiper', {
  slidesPerView: 4,
  spaceBetween:10,
  navigation: {
    nextEl: '.booksSwiper__next',
    prevEl: '.booksSwiper__prev',
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
    },
      480: {
      slidesPerView: 2,
    },
    670: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1050: {
      slidesPerView: 4,
    },
  },
});

// speakersSwiper
var speakersSwiper = new Swiper('.speakersSwiper', {
  slidesPerView: 4,
  navigation: {
    nextEl: '.speakersSwiper__btn-next',
    prevEl: '.speakersSwiper__btn-prev',
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
    },
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

// newsSwiper
var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.btn__next',
    prevEl: '.btn__prev',
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
    },
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
var swiperInfo = new Swiper('.swiperInfo', {
  slidesPerView: 4,
  spaceBetween:20,
  navigation: {
    nextEl: '.btn__next',
    prevEl: '.btn__prev',
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
    },    
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});


// courseSwiper
let courseSwiper = new Swiper('.courseSwiper', {
  slidesPerView: 4,
  spaceBetween:20,
  navigation: {
    nextEl: '.courseSwiper__btn-next',
    prevEl: '.courseSwiper__btn-prev',
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 4,
    },
  },
});

