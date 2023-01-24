import { useNavigation } from '@react-navigation/native';
import { useFetchTokenMutation } from 'api';
import { Routes, Stacks } from 'navigation';
import { useCallback, useState } from 'react';
import { authLoad } from 'store/auth/authSlice';
import { useAppDispatch } from 'store/hooks';
import { TokenApiRequestBody } from 'types/api';
import { setToken } from 'utils';
import { useStyles } from '../LoginScreen.styles';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = useStyles();
  const { navigate } = useNavigation();

  const dispatch = useAppDispatch();

  const [fetchToken, { data, isLoading, isSuccess }] = useFetchTokenMutation();

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);
  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onSkipLoginPress = useCallback(() => {
    navigate(Stacks.PRODUCT, { screen: Routes.MAIN });
  }, [navigate]);

  const onSubmitLogin = useCallback(async () => {
    if (!email || !password) {
      return;
    }

    const body: TokenApiRequestBody = {
      grant_type: 'password',
      username: email,
      password,
    };
    const response = await fetchToken(body);

    if ('data' in response && response.data) {
      const token = response.data.access_token;
      await setToken(token);
      dispatch(authLoad(true));
    }
  }, [dispatch, email, fetchToken, password]);

  return {
    styles,
    email,
    password,
    data,
    isLoading,
    isSuccess,
    handleEmailChange,
    handlePasswordChange,
    onSubmitLogin,
    onSkipLoginPress,
  };
};
