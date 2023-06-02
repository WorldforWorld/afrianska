export function popup() {
  // Получаем ссылки на элементы формы
  const formShadow = document.querySelector(".form-submit");
  const formClose = document.querySelector(".form__close");
  const openPopup = document.querySelector('a[data-target="feedback-popup"]');
  const body = document.querySelector("body");
  const shadow = document.querySelector(".shadow");

  function openForm() {
    formShadow.classList.add("open");
    body.classList.add("lock-js");
    shadow.classList.add("active");
  }

  function closeForm() {
    formShadow.classList.remove("open");
    body.classList.remove("lock-js");
    shadow.classList.remove("active");
  }

  openPopup?.addEventListener("click", openForm);
  formClose?.addEventListener("click", closeForm);
  formShadow?.addEventListener("click", function (event) {
    if (event.target === formShadow) {
      closeForm();
    }
  });
}
