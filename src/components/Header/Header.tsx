import React, { FC, useMemo } from 'react';
import {
  Header as HeaderRNE,
  HeaderProps as HeaderRNEProps,
  Text,
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Header.styles';
import { HeaderButton } from './components/HeaderButton';
import { BLUE, WHITE } from 'assets/colors';

type HeaderProps = {
  title?: string;
};

export const Header: FC<HeaderRNEProps & HeaderProps> = props => {
  const { leftComponent, centerComponent, rightComponent, title } = props;

  const left = useMemo(
    () =>
      leftComponent || (
        <HeaderButton icon={<Icon name="menu" color={WHITE} size={25} />} />
      ),
    [leftComponent]
  );

  const center = useMemo(
    () => centerComponent || <Text style={styles.headerCenter}>{title}</Text>,
    [title, centerComponent]
  );

  const right = useMemo(
    () =>
      rightComponent || (
        <HeaderButton
          icon={<Icon name="shopping-cart" color={WHITE} size={25} />}
        />
      ),
    [rightComponent]
  );

  return (
    <HeaderRNE
      {...(props || {})}
      backgroundColor={BLUE}
      containerStyle={styles.headerContainer}
      leftComponent={left}
      centerComponent={center}
      rightComponent={right}
    />
  );
};
