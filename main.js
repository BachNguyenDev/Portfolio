const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");
const move = document.querySelector(".resume-detail.experience .detail a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
const activePage = () => {
  const header = document.querySelector("header");
  header.classList.remove("active");

  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  const barsBox = document.querySelector(".bars-box");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  barsBox.classList.remove("active");

  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");
      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1100);
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");
    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetail = document.querySelectorAll(".resume-detail");
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    resumeDetail.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetail[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  const portfolioDetail = document.querySelectorAll(".portfolio-detail");

  portfolioDetail.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetail[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 2) {
    index++;
    arrowLeft.classList.remove("disabled");
  } 
  else {
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});

move.addEventListener("click", () => {
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  activePage();
  setTimeout(() => {
    sections[3].classList.add("active");
    navLinks[3].classList.add("active");
  }, 1100);
});