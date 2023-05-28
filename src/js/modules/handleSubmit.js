const validateField = (field) => {
  if (field.value.trim() === "") {
    return false;
  }

  if (field.id === "user-name") {
    const nameRegex = /^[а-яА-ЯёЁa-zA-Z]{3,8}$/;
    return nameRegex.test(field.value.trim());
  }

  if (field.id === "user-email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(field.value.trim());
  }

  return true;
};
const message = (form, text, fields) => {
  form.classList.remove("load");
  form.parentNode.parentNode.parentNode.classList.add("success");
  const body = document.querySelector("body");
  const textMessage = form.parentNode.parentNode.parentNode.querySelector(
    ".form__message span"
  );
  textMessage.textContent = text;
  setTimeout(() => {
    form.parentNode.parentNode.parentNode.classList.remove("open");
    body.classList.remove("lock-js");
  }, 1000);
  setTimeout(() => {
    form.parentNode.parentNode.parentNode.classList.remove("success");
    textMessage.textContent = "";
  }, 1500);
  fields.forEach((field) => {
    field.value = "";
  });
};
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
    const formData = new FormData(form);
    form.classList.add("load");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        message(form, "Your message successfully sent", fields);
      })
      .catch((error) => {
        message(form, error, fields);
      });
  }
}
