const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 50;
const MAX_EMAIL_LENGTH = 50;
const MAX_NAME_LENGTH = 30;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validatePassword = (
  required: boolean,
  passwordConfirmation?: string
) => {
  return {
    minLength: {
      value: MIN_PASSWORD_LENGTH,
      message: `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`,
    },
    maxLength: {
      value: MAX_PASSWORD_LENGTH,
      message: `La contraseña debe tener como maximo ${MAX_PASSWORD_LENGTH} caracteres`,
    },
    validate: (value: string) =>
      !passwordConfirmation ||
      value === passwordConfirmation ||
      "Las contraseñas no coinciden",
    required: {
      value: required,
      message: "Este campo es requerido",
    },
  };
};

export const validateEmail = (required: boolean) => {
  return {
    maxLength: {
      value: MAX_EMAIL_LENGTH,
      message: `El correo electronico debe tener como maximo ${MAX_EMAIL_LENGTH} caracteres`,
    },
    pattern: {
      value: EMAIL_PATTERN,
      message: "El correo electronico es invalido",
    },
    required: {
      value: required,
      message: "Este campo es requerido",
    },
  };
};

export const validateName = (required: boolean) => {
  return {
    maxLength: {
      value: MAX_NAME_LENGTH,
      message: `El nombre debe tener como maximo ${MAX_NAME_LENGTH} caracteres`,
    },
    required: {
      value: required,
      message: "Este campo es requerido",
    },
  };
};
