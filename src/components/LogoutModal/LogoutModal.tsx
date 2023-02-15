import { Button, Dialog } from '@rneui/themed';
import { Warning } from 'assets/icons';
import React, { useCallback } from 'react';
import { useStyles } from './LogoutModal.styles';
import { View } from 'react-native';
import { useAppDispatch } from 'store/hooks';
import { authLogout } from 'store/auth/authSlice';
import { clearToken } from 'utils';

type LogoutModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const LogoutModal: React.FC<LogoutModalProps> = ({
  onClose,
  isOpen,
}) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const onLogoutPress = useCallback(async () => {
    await clearToken();
    dispatch(authLogout());
  }, [dispatch]);

  return (
    <Dialog
      isVisible={isOpen}
      overlayStyle={styles.root}
      onBackdropPress={onClose}>
      <Warning />
      <Dialog.Title
        titleStyle={styles.title}
        title="Are you sure you want to logout?"
      />
      <Dialog.Actions>
        <View style={styles.buttonsRow}>
          <Button
            buttonStyle={[styles.button, styles.cancelButton]}
            titleStyle={styles.buttonTitle}
            title="CANCEL"
            onPress={onClose}
          />
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="LOGOUT"
            onPress={onLogoutPress}
          />
        </View>
      </Dialog.Actions>
    </Dialog>
  );
};
