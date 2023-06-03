import * as nav from "./modules/nav.js";
import { isWebp } from "./modules/functions.js";
import { popup } from "./modules/form_popup.js";
import { formValidate } from "./modules/formValidate.js";
import { handleSubmit } from "./modules/handleSubmit.js";

isWebp();
document.addEventListener("DOMContentLoaded", function () {
  nav.burgerMenu();

  popup();

  const form = document.querySelector("form");
  formValidate(document.querySelector(".form-submit"));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit(form);
  });
});
