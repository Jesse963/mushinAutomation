var onLocalMachine = false;
window.onload = function () {
  //Extend small logo decoration
  const navbarLogo = document.querySelector("navbar>logo");
  const extendedDecoration = document.querySelector(
    "navbar>.decoration.right.extended"
  );
  const bodyWidth = document.querySelector(":root").clientWidth;
  const adjustmentPercentage = (100 * navbarLogo.clientWidth) / bodyWidth;
  extendedDecoration.style.width = `calc(100% - ${adjustmentPercentage}% - 0.2em)`;

  //Set onLocalMachine to true if required
  onLocalMachine =
    window.location.href.includes("127.0.0.1") ||
    window.location.href.includes("local")
      ? true
      : false;
};

//ADD HOME NAV TO ALL LOGOS
document.querySelectorAll("logo").forEach((logo) => {
  logo.addEventListener("click", (e) => {
    window.location.href = "/";
  });
});

//ADD NAV TO ALL NAVLINKS AND HIGHLIGHT CURRENT LINK
document.querySelectorAll(".navLink").forEach((link) => {
  const targetPage = link.textContent.replace(" ", "_").toLowerCase();
  if (window.location.pathname.includes(targetPage)) {
    link.style.opacity = "1";
    link.style.color = "var(--highlight)";
  }

  link.addEventListener("click", (e) => {
    if (onLocalMachine) {
      window.location.href = "/" + targetPage + ".html";
    } else {
      window.location.href = "/" + targetPage;
    }
  });
});

// INTERSECTION OBSERVER
const navbarMenu = document.querySelector("navbar");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbarMenu.style.transform = "translate(-50%, -150%)";
    } else {
      navbarMenu.style.transform = "translate(-50%, 0%)";
    }
  });
}, options);

observer.observe(document.querySelector(".main.logo"));
