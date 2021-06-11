import Validator from 'validator';
const validateRegisterInput = (inputs) => {
  const { firstName, lastName, email, password, confirmPassword } = inputs;
  let errors = {};

  //Check empty fields
  if (Validator.isEmpty(firstName)) {
    errors.firstName = 'First Name Field is required';
  }
  if (Validator.isEmpty(lastName)) {
    errors.lastName = 'Last Name Field is required';
  }
  if (Validator.isEmpty(email)) {
    errors.email = 'Email Field is required';
  }
  if (Validator.isEmpty(password)) {
    errors.password = 'Password is required';
  }
  if (Validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = 'Confirm Password is Required';
  }
  //Check length
  if (!Validator.isLength(firstName, { min: 2, max: 30 })) {
    errors.firstName = 'First Name Must be Between 2 and 30 characters';
  }
  if (!Validator.isLength(lastName, { min: 2, max: 30 })) {
    errors.lastName = 'Last Name Must be Between 2 and 30 characters';
  }
  //Check Validity of inputs
  if (!Validator.isEmail(email)) {
    errors.email = 'Invalid Email';
  }
  if (!Validator.equals(password, confirmPassword)) {
    errors.confirmPassword = 'Password does not match';
  }

  if (Object.keys(errors).length === 0) {
    return {
      isValid: true,
    };
  } else {
    return {
      isValid: false,
      errors,
    };
  }
};

export default validateRegisterInput;
