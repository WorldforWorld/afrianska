export function burgerMenu() {
  const burgerMenu = document.querySelector(".burger__menu");
  const mainMenu = document.querySelector(".main__menu");
  const menuLinks = mainMenu.querySelectorAll(".nav__item a");
  const shadow = document.querySelector(".shadow");
  const body = document.querySelector("body");

  burgerMenu.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });

  function toggleMenu() {
    burgerMenu.classList.toggle("active");
    mainMenu.classList.toggle("active");
    shadow.classList.toggle("active");
    body.classList.toggle("lock-js");
  }

  function handleLinkClick(event) {
    burgerMenu.classList.remove("active");
    mainMenu.classList.remove("active");
    shadow.classList.remove("active");
    body.classList.remove("lock-js");
    scrollSmoothly(event);
  }
}

function scrollSmoothly(event) {
  event.preventDefault();
  const id = event.target.getAttribute("href");
  const section = document.querySelector(id);
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
