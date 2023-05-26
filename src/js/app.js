import * as nav from './modules/nav.js';
import * as scroll from './modules/scroll-header.js';
import { isWebp } from './modules/functions.js';
isWebp();
document.addEventListener('DOMContentLoaded', function () {
  // Скролл для шапки
  scroll.addClassScroll();
  window.addEventListener('scroll', scroll.addClassScroll);

  // Бургер меню
  nav.burgerMenu();
});
