import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useStyles } from './ShareButton.styles';
import { useTheme } from 'providers/ThemeProvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-share';

export const ShareButton = () => {
  const styles = useStyles();
  const theme = useTheme();

  const onPress = useCallback(async () => {
    try {
      await Share.open({
        url: encodeURIComponent('https://demo.spreecommerce.org/'),
        message: 'Check out our website!',
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Icon
        style={styles.icon}
        name="share"
        color={theme.colors.primary}
        size={25}
      />
      <Text style={styles.label}>Share</Text>
    </TouchableOpacity>
  );
};
