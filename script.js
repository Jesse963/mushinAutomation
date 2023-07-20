var onLocalMachine = false;
window.onload = function () {
  //Set onLocalMachine to true if required
  onLocalMachine =
    window.location.href.includes("127.0.0.1") ||
    window.location.href.includes("local")
      ? true
      : false;

  //RETURN CONSTRUCTION MESSAGE ON NON-LOCAL MACHINE
  if (!onLocalMachine) {
    const root = document.querySelector(":root");
    const logo = document.querySelector(".main.logo");
    logo.style.setProperty("--logoTextScale", "1");

    document.querySelector("ul").innerHTML = "";

    const div = document.createElement("div");
    div.className = "construction message";
    const heading = document.createElement("h3");
    heading.textContent = "Website under construction";

    div.append(heading);
    div.append("In the meantime any enquiries can be directed to");
    div.append(document.createElement("br"));
    div.append(document.createElement("br"));
    const email = document.createElement("a");
    email.textContent = "info@mushin.com.au";
    email.href = "mailto:info@mushin.com.au";
    div.append(email);

    const body = document.querySelector("body");
    body.innerHTML = "";
    body.style.position = "absolute";
    body.style.top = "50%";
    body.style.transform = "translateY(-50%)";

    body.append(logo);
    body.append(div);
    return;
  }
  //Extend small logo decoration
  const navbarLogo = document.querySelector("navbar>logo");
  const extendedDecoration = document.querySelector(
    "navbar>.decoration.right.extended"
  );
  const bodyWidth = document.querySelector(":root").clientWidth;
  const adjustmentPercentage = (100 * navbarLogo.clientWidth) / bodyWidth;
  extendedDecoration.style.width = `calc(100% - ${adjustmentPercentage}% - 0.2em)`;

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

  // ADD LINK TO CONTACT PAGE FOR ANYTHING CLASSES AS contactLink
  document.querySelectorAll(".contactLink").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (onLocalMachine) {
        window.location.href = "/contact.html";
      } else {
        window.location.href = "/contact";
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
};

observer.observe(document.querySelector(".main.logo"));
