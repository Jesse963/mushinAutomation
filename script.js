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
  console.log(onLocalMachine);
};

//ADD HOME NAV TO ALL LOGOS
document.querySelectorAll("logo").forEach((logo) => {
  logo.addEventListener("click", (e) => {
    window.location.href = "/";
  });
});

//ADD NAV TO ALL NAVLINKS
document.querySelectorAll(".navLink").forEach((link) => {
  console.log(link.textContent);
  link.addEventListener("click", (e) => {
    const targetPage = link.textContent.replace(" ", "_").toLowerCase();
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
