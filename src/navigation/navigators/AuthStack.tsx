import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList, Routes } from 'navigation/AppNavigation.types';
import React from 'react';
import { LoginScreen } from 'screens/LoginScreen';
import { SignUpScreen } from 'screens/SignUpScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={Routes.SIGN_UP} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
