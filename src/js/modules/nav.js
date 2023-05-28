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
    link.addEventListener("click", (event) => {
      burgerMenu.classList.remove("active");
      mainMenu.classList.remove("active");
      body.classList.remove("lock-js");
      addClassScroll(event);
    });
  });
}

function addClassScroll(event) {
  event.preventDefault();
  const id = event.target.getAttribute("href");
  const section = document.querySelector(id);
  const top = section.offsetTop;
  const duration = 1000;
  const start = window.pageYOffset;
  const distance = top - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
