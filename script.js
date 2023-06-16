window.onload = function () {
  const navbarLogo = document.querySelector("navbar>logo");
  const extendedDecoration = document.querySelector(
    "navbar>.decoration.right.extended"
  );
  const bodyWidth = document.querySelector(":root").clientWidth;
  const adjustmentPercentage = (100 * navbarLogo.clientWidth) / bodyWidth;
  console.log(adjustmentPercentage + " %");
  extendedDecoration.style.width = `calc(100% - ${adjustmentPercentage}% - 0.2em)`;
  console.log(extendedDecoration);
};

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
      // navbarMenu.style.visibility = "hidden";
      console.log("Hiding menu");
    } else {
      console.log("Showing menu");
      navbarMenu.style.transform = "translate(-50%, 0%)";
      // navbarMenu.style.visibility = "visible";
    }
  });
}, options);

const target = document.querySelector(".main.logo");

observer.observe(target);
