export const formValidate = (event) => {
  const form = event.querySelector("form");
  const fullNameInput = form.querySelector("#user-name");
  const emailInput = form.querySelector("#user-email");
  const phoneInput = form.querySelector("#user-phone");
  const messageInput = form.querySelector("#user-message");
  const submitButton = form.querySelector(".form__btn");

  function validateFullName() {
    const fullNameValue = fullNameInput.value.trim();
    const numericPattern = /[0-9]/;
    const minLetters = 2;
    const startsWithUppercase = /^(\p{Lu}|\p{Lt})/u;

    if (fullNameValue === "") {
      setError(fullNameInput, "Full Name is required");
    } else if (!startsWithUppercase.test(fullNameValue)) {
      setError(
        fullNameInput,
        "Full Name should start with an uppercase letter"
      );
    } else if (fullNameValue.length < minLetters) {
      setError(
        fullNameInput,
        `Full Name should have at least ${minLetters} letters`
      );
    } else if (numericPattern.test(fullNameValue)) {
      setError(fullNameInput, "Full Name should not contain numbers");
    } else {
      setSuccess(fullNameInput);
    }
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (emailValue === "") {
      setError(emailInput, "Email is required");
    } else if (!emailPattern.test(emailValue)) {
      setError(emailInput, "Please enter a valid email address");
    } else {
      setSuccess(emailInput);
    }
  }

  function validatePhone() {
    const phoneValue = phoneInput.value.trim();
    const phonePattern = /^\d{10}$/;

    if (phoneValue === "") {
      setError(phoneInput, "Phone is required");
    } else if (!phonePattern.test(phoneValue)) {
      setError(phoneInput, "Please enter a valid 10-digit phone number");
    } else {
      setSuccess(phoneInput);
    }
  }

  function validateMessage() {
    const messageValue = messageInput.value.trim();

    if (messageValue === "") {
      setError(messageInput, "Message is required");
    } else if (messageValue.length < 6) {
      setError(messageInput, "Message should have at least 6 characters");
    } else {
      setSuccess(messageInput);
    }
  }

  function setError(input, errorMessage) {
    const formGroup = input.closest(".form__group");
    const errorText = formGroup.querySelector(".form__error");

    formGroup.classList.add("form__group--error");
    errorText.textContent = errorMessage;
    checkFormValidity();
  }

  function setSuccess(input) {
    const formGroup = input.closest(".form__group");
    const errorText = formGroup.querySelector(".form__error");

    formGroup.classList.remove("form__group--error");
    errorText.textContent = "";
    checkFormValidity();
  }

  function checkFormValidity() {
    const isEmptyField = checkEmptyFields();
    const errorFields = form.querySelectorAll(".form__group--error");

    if (!isEmptyField && errorFields.length === 0) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", true);
    }
  }

  function checkEmptyFields() {
    const inputs = form.querySelectorAll(".form__required .form__input");
    for (let i = 0; i < inputs.length; i++) {
      const inputValue = inputs[i].value.trim();
      if (inputValue === "") {
        return true;
      }
    }

    return false;
  }

  fullNameInput.addEventListener("blur", validateFullName);
  emailInput.addEventListener("blur", validateEmail);
  phoneInput.addEventListener("blur", validatePhone);
  messageInput.addEventListener("blur", validateMessage);

  fullNameInput.addEventListener("input", validateFullName);
  emailInput.addEventListener("input", validateEmail);
  phoneInput.addEventListener("input", validatePhone);
  messageInput.addEventListener("input", validateMessage);
};
