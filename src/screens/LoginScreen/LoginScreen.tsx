import { Link } from '@react-navigation/native';
import { Button } from 'components/Button';
import { FloatingButton } from 'components/FloatingButton';
import { Input } from 'components/Input';
import { Routes } from 'navigation';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLogin } from './hooks/useLogin';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { WHITE } from 'assets/colors';
import { Controller } from 'react-hook-form';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'providers/ThemeProvider';

export const LoginScreen = () => {
  const {
    styles,
    isLoading,
    onSkipLoginPress,
    control,
    errors,
    isError,
    submitForm,
    handleOnBlur,
  } = useLogin();

  const theme = useTheme();

  const buttonWidth = useSharedValue<string | number>('100%');
  const buttonColor = useSharedValue(theme.colors.primary);

  const animatedStyles = useAnimatedStyle(() => ({
    width: withTiming(buttonWidth.value),
  }));

  useEffect(() => {
    if (isLoading) {
      buttonWidth.value = 30;
    }
    if (isError) {
      buttonWidth.value = 100;
    }
  }, [buttonColor, buttonWidth, isError, isLoading]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Ecommerce</Text>
        <Text style={styles.heading}>Store</Text>
      </View>
      <View style={styles.form}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input
              label="Email Address"
              value={value}
              onBlur={handleOnBlur(onBlur, name)}
              onChangeText={onChange}
              isError={!!errors.email}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input
              label="Password"
              isPassword
              value={value}
              onBlur={handleOnBlur(onBlur, name)}
              onChangeText={onChange}
              isError={!!errors.password}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button
          title="SIGN IN"
          viewStyle={[styles.buttonContainer, animatedStyles]}
          loading={isLoading}
          titleStyle={styles.button}
          onPress={submitForm}
        />
        <Link style={styles.textButtonTitle} to={`/${Routes.SIGN_UP}`}>
          New here? Sign Up
        </Link>
      </View>
      <FloatingButton
        onPress={onSkipLoginPress}
        style={styles.floatingButton}
        title="SKIP LOGIN">
        <Icon
          style={styles.floatingIconButton}
          name="arrow-forward"
          size={25}
          color={WHITE}
        />
      </FloatingButton>
    </SafeAreaView>
  );
};
