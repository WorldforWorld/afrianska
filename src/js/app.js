import * as nav from "./modules/nav.js";
import { isWebp } from "./modules/functions.js";
import { popup } from "./modules/form_popup.js";
import { handleSubmit } from "./modules/handleSubmit/handleSubmit.js";

isWebp();
document.addEventListener("DOMContentLoaded", function () {
  // Бургер меню
  nav.burgerMenu();

  // Форма обратной связи
  popup();

  const form = document.querySelector("form");
  const fields = form.querySelectorAll(".form__input");

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      handleSubmit(event, form);
    });
  });
  form.addEventListener("submit", (event) => {
    handleSubmit(event, form);
  });
});
