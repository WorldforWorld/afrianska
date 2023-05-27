export function burgerMenu() {
  const burgerMenu = document.querySelector(".burger__menu");
  const mainMenu = document.querySelector(".main__menu");
  const menuLinks = mainMenu.querySelectorAll(".nav__item a");
  const body = document.querySelector("body");
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    mainMenu.classList.toggle("active");
    body.classList.toggle("lock-js");
  });
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      mainMenu.classList.toggle("active");
      body.classList.toggle("lock-js");
    });
  });
}
