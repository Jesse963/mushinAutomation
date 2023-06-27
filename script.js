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

//ADD HOME NAV TO ALL LOGOS
document.querySelectorAll("logo").forEach((logo) => {
  logo.addEventListener("click", (e) => {
    window.location.href = "/";
  });
});

//ADD NAV TO ALL NAVLINKS
document.querySelectorAll(".navLink").forEach((link) => {
  console.log(link.textContent);
  const targetPage = link.textContent.replace(" ", "_").toLowerCase();
  link.addEventListener("click", (e) => {
    window.location.href = "/" + targetPage;
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
