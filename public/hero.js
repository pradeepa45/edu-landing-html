document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".logo",
    {
      x: -100,
      y: -100,
      scale: 0.1,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      scale: 0.75,
      duration: 1,
      opacity: 1,
    }
  );

  gsap.utils.toArray(".star").forEach((star) => {
    gsap.to(star, {
      opacity: 0.2,
      duration: gsap.utils.random(1.5, 3),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: gsap.utils.random(0, 2),
    });
  });

  gsap.utils.toArray(".floating-shape").forEach((shape) => {
    gsap.to(shape, {
      y: "-=10",
      rotation: gsap.utils.random(-5, 5),
      duration: gsap.utils.random(2, 4),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: gsap.utils.random(0, 2),
    });
  });

  gsap.fromTo(
    "#pune",
    {
      width: "0%",
      height: "0%",
    },
    {
      width: "150px",
      duration: 1,
      ease: "power1.inOut",
    }
  );
});
