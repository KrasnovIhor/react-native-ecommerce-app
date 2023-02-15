import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from './SearchHistoryItem.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'providers/ThemeProvider';

type SearhHistoryItemProps = {
  item: string;
  onPress?: () => void;
  onClear?: () => void;
};

export const SearchHistoryItem: React.FC<SearhHistoryItemProps> = ({
  item,
  onPress,
  onClear,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Icon name="cancel" size={15} color={theme.colors.gray500} />
      </TouchableOpacity>
    </View>
  );
};
