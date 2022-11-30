import React, { useMemo } from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './CarouselButton.styles';

import { NextArrow, PrevArrow } from 'assets/icons';

type CarouselButtonProps = {
  type: 'next' | 'prev';
  onPress?: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
};

export const CarouselButton: React.FC<CarouselButtonProps> = ({
  type = 'next',
  onPress,
  containerStyle,
}) => {
  const icon = useMemo(
    () => (type === 'next' ? <NextArrow /> : <PrevArrow />),
    [type]
  );

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View style={styles.root}>{icon}</View>
    </TouchableOpacity>
  );
};
