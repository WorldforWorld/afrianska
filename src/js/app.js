import * as nav from './modules/nav.js';
import * as scroll from './modules/scroll-header.js';
import { isWebp } from './modules/functions.js';
import { popup } from './modules/form_popup.js';
import { handleSubmit } from './modules/handleSubmit.js';
isWebp();
document.addEventListener('DOMContentLoaded', function () {
  // Скролл для шапки
  scroll.addClassScroll();
  window.addEventListener('scroll', scroll.addClassScroll);
  // Бургер меню
  nav.burgerMenu();
	// Форма обратной связи
	popup()

	const form = document.querySelector('form');


	form.addEventListener('submit', (event) => {
		handleSubmit(event, form);
	});
	
});
