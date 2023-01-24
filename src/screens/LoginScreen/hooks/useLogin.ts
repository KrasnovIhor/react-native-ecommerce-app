import { useNavigation } from '@react-navigation/native';
import { useFetchTokenMutation } from 'api';
import { Routes, Stacks } from 'navigation';
import { useCallback, useMemo } from 'react';
import { Noop, useForm } from 'react-hook-form';
import { authLoad } from 'store/auth/authSlice';
import { useAppDispatch } from 'store/hooks';
import { TokenApiRequestBody } from 'types/api';
import { setToken } from 'utils';
import { useStyles } from '../LoginScreen.styles';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

export const useLogin = () => {
  const styles = useStyles();
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const [fetchToken, { data, isLoading, isSuccess, isError }] =
    useFetchTokenMutation();

  const onSkipLoginPress = useCallback(() => {
    navigate(Stacks.PRODUCT, { screen: Routes.MAIN });
  }, [navigate]);

  const onSubmitLogin = useCallback(
    async (formData: FormData) => {
      const body: TokenApiRequestBody = {
        grant_type: 'password',
        username: formData.email,
        password: formData.password,
      };
      const response = await fetchToken(body);

      if ('data' in response && response.data) {
        const token = response.data.access_token;
        await setToken(token);
        dispatch(authLoad(true));
      }
    },
    [dispatch, fetchToken]
  );

  const handleOnBlur = useCallback(
    (onBlur: Noop, name: keyof FormData) => {
      return () => {
        trigger(name);
        onBlur();
      };
    },
    [trigger]
  );

  const submitForm = useMemo(
    () => handleSubmit(onSubmitLogin),
    [handleSubmit, onSubmitLogin]
  );

  return {
    styles,
    data,
    isLoading,
    isSuccess,
    onSkipLoginPress,
    submitForm,
    onSubmitLogin,
    handleOnBlur,
    control,
    errors,
    isError,
  };
};
