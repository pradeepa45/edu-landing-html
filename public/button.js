function secondaryBtHover() {
  gsap.fromTo(
    ".secondary",
    {
      scale: 1,
      background: "transparent",
    },
    {
      scale: 1.1,
      background: "linear-gradient(263.28deg, #FF6A56 , #FDAF4D)",
      duration: 0.3,
    }
  );
}

function secondaryBtHoverOut() {
  gsap.fromTo(
    ".secondary",
    {
      scale: 1.1,
      background: "linear-gradient(263.28deg, #FF6A56 , #FDAF4D, #FF6A56)",
    },
    {
      scale: 1,
      background: "transparent",
      duration: 0.3,
    }
  );
}

document.querySelectorAll(".secondary").forEach((button) => {
  button.addEventListener("mouseover", secondaryBtHover);
  button.addEventListener("mouseleave", secondaryBtHoverOut);
});

function primaryHover() {
  gsap.fromTo(
    ".primary-btn",
    {
      scale: 1,
      background: "linear-gradient(263.28deg, #FF6A56 , #FDAF4D  )",
    },
    {
      scale: 1.1,
      duration: 0.3,
      background: "linear-gradient(63.28deg, #FF6A56 , #FDAF4D  )",
    }
  );
}

function primaryHoverOut() {
  gsap.fromTo(
    ".primary-btn",
    {
      scale: 1.1,
      background: "linear-gradient(63.28deg, #FF6A56 , #FDAF4D  )",
    },
    {
      scale: 1,
      duration: 0.3,
      background: "linear-gradient(263.28deg, #FF6A56 , #FDAF4D  )",
    }
  );
}

document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 120;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    gsap.to(window, {
      scrollTo: targetPosition,
      duration: 1,
      ease: "power2.inOut",
    });
  });
});
