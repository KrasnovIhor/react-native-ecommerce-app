import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import { useStyles } from './CartConfitmationScreen.styles';
import { CartBoxConfirm } from 'assets/icons';
import { Button } from 'components/Button';
import { useNavigation } from '@react-navigation/native';
import { Stacks } from 'navigation';

export const CartConfitmationScreen = () => {
  const styles = useStyles();
  const { reset } = useNavigation();
  const onPress = useCallback(() => {
    reset({ index: 0, routes: [{ name: Stacks.PRODUCT }] });
  }, [reset]);

  return (
    <SafeAreaView style={styles.root} edges={['left', 'right']}>
      <View style={styles.main}>
        <Text style={styles.mainTitle}>Order confirmation</Text>
        <CartBoxConfirm style={styles.icon} />
        <Text style={styles.title}>
          Thank you for placing your order with us!
        </Text>
        <Text style={styles.subTitle}>
          Please check your email for more details. For any questions and
          further information please contact our customer support.
        </Text>
        <Button onPress={onPress} title="continue shopping" uppercase />
      </View>
      <Lottie
        source={require('assets/animations/congrats.json')}
        autoPlay
        style={styles.lottie}
        loop={false}
      />
    </SafeAreaView>
  );
};
