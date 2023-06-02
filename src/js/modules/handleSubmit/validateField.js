export const validateField = (field) => {
  switch (true) {
    case field.value.trim() === "":
      return false;
    case field.id === "user-name": {
      const nameRegex = /^[а-яА-ЯёЁa-zA-Z]{3,8}$/;
      return nameRegex.test(field.value.trim());
    }
    case field.id === "user-email": {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(field.value.trim());
    }
    default:
      return true;
  }
};
