import { validateField } from "./validateField.js";
import { submitForm } from "./submitForm.js";
export function handleSubmit(event, form) {
  console.log("event: ");
  event.preventDefault();

  let isValid = true;
  const fields = form.querySelectorAll(".form__input");

  fields.forEach((field) => {
    const isValidField = validateField(field);
    const formGroup = field.closest(".form__group");
    const submitButton = form.querySelector(".form__btn");

    // Блокировка кнопки Submit
    submitButton.disabled = true;

    if (!isValidField) {
      isValid = false;
      formGroup.classList.add("error");
    } else {
      formGroup.classList.remove("error");
    }
  });

  if (isValid) {
    submitForm(form);
  } else {
    // Разблокировка кнопки Submit в случае ошибок
    submitButton.disabled = false;
  }
}
