const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
  },
};

const navigation = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
};

const stepsCarousel = new Swiper(".swiper-container-unique", {
  centeredSlides: true,
  slidesPerView: 3,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true,
  },
  breakpoints,
});

stepsCarousel.on("slideChange", function () {
  gsap.fromTo(
    ".swiper-slide-active",
    { scale: 0.8, opacity: 0.5 },
    { scale: 1, opacity: 1, duration: 1, ease: "bounce.out" }
  );
});

const webinarCarousel = new Swiper(".webinar-carousel", {
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 800,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation,
  breakpoints,
});

const updatesCarousel = new Swiper(".update-carousel", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  breakpoints,
});
