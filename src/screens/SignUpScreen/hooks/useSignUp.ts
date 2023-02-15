import { useCreateAccountMutation } from 'api/modules/user';
import { useState, useCallback } from 'react';
import { useStyles } from '../SignUpScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';
import { prepareCreateUserPayload } from '../utils';

export type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialFormState: FormValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const useSignUp = () => {
  const styles = useStyles();
  const { navigate } = useNavigation();
  const [formValues, setFormValues] = useState<FormValues>(initialFormState);
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
      await createAccountMutation(prepareCreateUserPayload(formValues));

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
