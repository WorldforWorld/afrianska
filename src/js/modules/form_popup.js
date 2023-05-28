export function popup() {
  // Получаем ссылки на элементы формы
  const formShadow = document.querySelector(".form__shadow");
  const formClose = document.querySelector(".form__close");
  const openPopup = document.querySelector('a.btn.btn__primary[href="#popup"]');
  const body = document.querySelector("body");

  function openForm() {
    formShadow.classList.add("open");
    body.classList.add("lock-js");
  }

  function closeForm() {
    formShadow.classList.remove("open");
    body.classList.remove("lock-js");
  }

  openPopup.addEventListener("click", openForm);
  formClose.addEventListener("click", closeForm);
  formShadow.addEventListener("click", function (event) {
    if (event.target === formShadow) {
      closeForm();
    }
  });
}
