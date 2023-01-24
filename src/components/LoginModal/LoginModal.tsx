import { useNavigation } from '@react-navigation/native';
import { Button, Dialog } from '@rneui/themed';
import { Warning } from 'assets/icons';
import { Routes } from 'navigation';
import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useStyles } from './LoginModal.styles';

type LoginModalProps = {
  title: string;
  subTitle?: string;
};

export const LoginModal: React.FC<LoginModalProps> = ({ title, subTitle }) => {
  const styles = useStyles();
  const { goBack, reset } = useNavigation();

  const handleOnLoginPress = useCallback(() => {
    reset({ index: 0, routes: [{ name: Routes.LOGIN }] });
  }, [reset]);
  const handleSignUpPress = useCallback(() => {
    reset({ index: 0, routes: [{ name: Routes.SIGN_UP }] });
  }, [reset]);

  return (
    <Dialog isVisible overlayStyle={styles.root} onBackdropPress={goBack}>
      <Warning />
      <Dialog.Title titleStyle={styles.title} title={title} />
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      <Dialog.Actions>
        <View style={styles.buttonsRow}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="LOGIN"
            onPress={handleOnLoginPress}
          />
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="SIGN UP"
            onPress={handleSignUpPress}
          />
        </View>
      </Dialog.Actions>
    </Dialog>
  );
};
