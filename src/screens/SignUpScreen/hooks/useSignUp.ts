import { CreateUserRequest } from 'types/api';
import { useCreateAccountMutation } from 'api/modules/user';
import { useState, useCallback } from 'react';
import { useStyles } from '../SignUpScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';

const initialFormState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const useSignUp = () => {
  const styles = useStyles();
  const { navigate } = useNavigation();
  const [formValues, setFormValues] = useState(initialFormState);
  const [createAccountMutation, { isLoading, isError }] =
    useCreateAccountMutation();

  const setFormValue = useCallback((key: keyof typeof formValues) => {
    return (text: string) => {
      setFormValues(prev => ({
        ...prev,
        [key]: text,
      }));
    };
  }, []);

  const checkFields = useCallback(() => {
    let result = true;
    Object.values(formValues).forEach(value => {
      if (!value) {
        result = false;
      }
    });

    return result;
  }, [formValues]);

  const onSubmit = useCallback(async () => {
    if (checkFields()) {
      const [first_name, last_name] = formValues.fullName.split(' ');
      const {
        email,
        password,
        confirmPassword: password_confirmation,
      } = formValues;
      const body: CreateUserRequest = {
        user: {
          email,
          password,
          first_name,
          last_name: last_name ?? '',
          password_confirmation,
        },
      };
      await createAccountMutation(body);

      if (!isError) {
        navigate(Routes.LOGIN);
      }
    }
  }, [checkFields, createAccountMutation, formValues, isError, navigate]);

  return {
    styles,
    formValues,
    setFormValue,
    onSubmit,
    isLoading,
    isError,
  };
};
