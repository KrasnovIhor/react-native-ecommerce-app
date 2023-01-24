import { Link } from '@react-navigation/native';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Routes } from 'navigation';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignUp } from './hooks/useSignUp';

export const SignUpScreen = () => {
  const { styles, formValues, setFormValue, onSubmit, isLoading } = useSignUp();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Ecommerce</Text>
        <Text style={styles.heading}>Store</Text>
      </View>
      <View style={styles.form}>
        <Input
          label="Full Name"
          value={formValues.fullName}
          onChangeText={setFormValue('fullName')}
        />
        <Input
          label="Email Address"
          value={formValues.email}
          onChangeText={setFormValue('email')}
        />
        <Input
          label="Password"
          isPassword
          value={formValues.password}
          onChangeText={setFormValue('password')}
        />
        <Input
          label="Confirm Password"
          isPassword
          value={formValues.confirmPassword}
          onChangeText={setFormValue('confirmPassword')}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="SIGN UP"
            loading={isLoading}
            titleStyle={styles.button}
            onPress={onSubmit}
          />
        </View>
        <Link style={styles.textButtonTitle} to={`/${Routes.LOGIN}`}>
          Already have account? Sign In
        </Link>
      </View>
    </SafeAreaView>
  );
};
