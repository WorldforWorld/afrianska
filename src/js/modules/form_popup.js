export function popup() {
  // Получаем ссылки на элементы формы
  const formShadow = document.querySelector(".form__shadow");
  const formClose = document.querySelector(".form__close");
  const openPopup = document.querySelector('a.btn.btn__primary[href="#popup"]');

  function openForm() {
    formShadow.classList.add("open");
  }

  function closeForm() {
    formShadow.classList.remove("open");
  }

  openPopup.addEventListener("click", openForm);
  formClose.addEventListener("click", closeForm);
  formShadow.addEventListener("click", function (event) {
    if (event.target === formShadow) {
      closeForm();
    }
  });
}
