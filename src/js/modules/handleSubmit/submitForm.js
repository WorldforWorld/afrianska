const message = (form, text) => {
  form.classList.remove("load");
  form.closest(".form-submit").classList.add("success");
  const body = document.querySelector("body");
  const shadow = document.querySelector(".shadow");
  const textMessage = form
    .closest(".form-submit")
    .querySelector(".form__message span");
  textMessage.textContent = text;
  setTimeout(() => {
    form.closest(".form-submit").classList.remove("open");
    body.classList.remove("lock-js");
    shadow.classList.remove("active");
  }, 1000);
  setTimeout(() => {
    form.closest(".form-submit").classList.remove("success");
    form.reset();
  }, 1500);
};

export const submitForm = (form) => {
  const formData = new FormData(form);
  form.classList.add("load");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      message(form, "Your message successfully sent");
    })
    .catch((error) => {
      message(form, error);
    });
};
