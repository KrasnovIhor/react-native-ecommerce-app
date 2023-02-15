import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useStyles } from './SearchHistoryList.styles';

type SearchHistoryListProps<T> = {
  style?: StyleProp<ViewStyle>;
  items: T[];
  isVisible?: boolean;
  renderItem: (item: T) => JSX.Element;
  keyExtractor: (item: T, key: number) => string;
};

export const SearchHistoryList = <T extends unknown>({
  style,
  items,
  isVisible,
  renderItem,
  keyExtractor,
}: SearchHistoryListProps<T>) => {
  const styles = useStyles();

  if (!items.length || !isVisible) {
    return null;
  }

  return (
    <View style={[styles.list, style]}>
      {items.map((item, key) => (
        <View key={keyExtractor(item, key)}>{renderItem(item)}</View>
      ))}
    </View>
  );
};
