import { Button } from 'components/Button';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authLogout } from 'store/auth/authSlice';
import { useAppDispatch } from 'store/hooks';
import { clearToken } from 'utils';
import { useStyles } from './ProfileScreen.styles';

export const ProfileScreen = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    await clearToken();
    dispatch(authLogout());
  };
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Button title="LOG OUT" onPress={handleClick} />
      <Text>My Profile</Text>
    </SafeAreaView>
  );
};
