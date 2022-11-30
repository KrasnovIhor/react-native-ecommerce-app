import React, { FC, useMemo } from 'react';
import {
  Header as HeaderRNE,
  HeaderProps as HeaderRNEProps,
  Text,
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useStyles } from './Header.styles';
import { HeaderButton } from './components/HeaderButton';
import { useTheme } from 'providers/ThemeProvider';

type HeaderComponents = {
  Button: typeof HeaderButton;
};

type HeaderProps = HeaderRNEProps & {
  title?: string;
};

export const Header: FC<HeaderProps> & HeaderComponents = props => {
  const { colors } = useTheme();
  const styles = useStyles();

  const { leftComponent, centerComponent, rightComponent, title } = props;

  const left = useMemo(
    () =>
      leftComponent || (
        <Header.Button
          icon={<Icon name="menu" color={colors.background} size={25} />}
        />
      ),
    [colors.background, leftComponent]
  );

  const center = useMemo(
    () => centerComponent || <Text style={styles.headerCenter}>{title}</Text>,
    [centerComponent, styles, title]
  );

  const right = useMemo(
    () =>
      rightComponent || (
        <Header.Button
          icon={
            <Icon name="shopping-cart" color={colors.background} size={25} />
          }
        />
      ),
    [colors.background, rightComponent]
  );

  return (
    <HeaderRNE
      {...(props || {})}
      backgroundColor={colors.primary}
      containerStyle={styles.headerContainer}
      leftComponent={left}
      centerComponent={center}
      rightComponent={right}
    />
  );
};

Header.Button = HeaderButton;
