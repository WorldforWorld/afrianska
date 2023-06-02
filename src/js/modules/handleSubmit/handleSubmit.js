import { validateField } from "./validateField.js";
import { submitForm } from "./submitForm.js";
export function handleSubmit(event, form) {
  event.preventDefault();

  let isValid = true;
  const fields = form.querySelectorAll(".form__input");

  fields.forEach((field) => {
    const isValidField = validateField(field);
    const formGroup = field.closest(".form__group");

    if (!isValidField) {
      isValid = false;
      formGroup.classList.add("error");
    } else {
      formGroup.classList.remove("error");
    }
  });

  if (isValid) {
    submitForm(form);
  }
}
