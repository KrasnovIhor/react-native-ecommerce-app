import { FormValues } from './../hooks/useSignUp';

export const prepareCreateUserPayload = (formValues: FormValues) => {
  const [first_name, last_name] = formValues.fullName.split(' ');
  const {
    email,
    password,
    confirmPassword: password_confirmation,
  } = formValues;

  return {
    user: {
      email,
      password,
      first_name,
      last_name: last_name ?? '',
      password_confirmation,
    },
  };
};
