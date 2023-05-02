export const helperTextPassword = (loginInfo) => {
  const field = loginInfo.password;
  if (field.length === 0) {
    return "this field cannot be empty!";
  }
  const capitalLetter = "(?=.*?[A-Z])";
  const specialCharacter = "(?=.*?[#?!@$%^&*-])";
  const lowercaseLetter = "(?=.*?[a-z])";
  const number = "(?=.*?[0-9])";
  if (!field.match(capitalLetter)) {
    return "need atleast one capital letter!";
  } else if (!field.match(specialCharacter)) {
    return "need atleast one special character!";
  } else if (!field.match(lowercaseLetter)) {
    return "need atleast one lowercase letter!";
  } else if (!field.match(number)) {
    return "need atleast one number!";
  } else if (field.length < 8) {
    return "need atleast 8 characters!";
  }
};

export const validateConfirmEmail = (loginInfo) => {
  if (loginInfo.confirmEmail === loginInfo.email) {
    return true;
  }
  return false;
};

export const validateConfirmPassword = (loginInfo) => {
  if (loginInfo.password === loginInfo.confirmPassword) {
    return true;
  }
  return false;
};
export const helperTextEmail = (loginInfo) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (loginInfo.email.length === 0) {
    return "this field cannot be empty!";
  }

  if (!loginInfo.email.match(emailRegex)) {
    return "please enter a valid email!";
  }
};

export const helperTextConfirmEmail = (loginInfo) => {
  if (loginInfo.confirmEmail.length === 0) {
    return "this field cannot be empty!";
  }
  if (loginInfo.email !== loginInfo.confirmEmail) {
    return "emails must match!";
  }
};

export const helperTextConfirmPassword = (loginInfo) => {
  if (loginInfo.confirmPassword.length === 0) {
    return "this field cannot be empty!";
  }
  if (loginInfo.password !== loginInfo.confirmPassword) {
    return "passwords must match!";
  }
};

export const validatePassword = (loginInfo) => {
  const passwordRegex =
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  if (loginInfo.password.match(passwordRegex)) {
    return true;
  }
  return false;
};
export const validateEmail = (loginInfo) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (loginInfo.email.match(emailRegex)) {
    return true;
  }
  return false;
};
