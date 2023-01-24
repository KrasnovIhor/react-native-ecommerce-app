import { useNavigation } from '@react-navigation/native';
import { Button, Dialog } from '@rneui/themed';
import { Confirm, Error, Warning } from 'assets/icons';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './ConfirmModal.styles';

type ConfirmModalProps = {
  title: string;
  subTitle?: string;
  iconType?: 'error' | 'confirm' | 'warning';
  onClose?: () => void;
  isVisible?: boolean;
  fromNavigation?: boolean;
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  subTitle,
  iconType,
  onClose,
  isVisible = true,
  fromNavigation = true,
}) => {
  const { goBack } = useNavigation();
  const styles = useStyles();

  const icon = useMemo(() => {
    switch (iconType) {
      case 'error':
        return <Error />;
      case 'warning':
        return <Warning />;
      case 'confirm':
        return <Confirm />;
      default:
        return null;
    }
  }, [iconType]);

  return (
    <Dialog
      isVisible={isVisible}
      overlayStyle={styles.root}
      onBackdropPress={fromNavigation ? goBack : onClose}>
      {icon}
      <Dialog.Title titleStyle={styles.title} title={title} />
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      <Dialog.Actions>
        <View style={styles.buttonsRow}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            title="OK"
            onPress={fromNavigation ? goBack : onClose}
          />
        </View>
      </Dialog.Actions>
    </Dialog>
  );
};
