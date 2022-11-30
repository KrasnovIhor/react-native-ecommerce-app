import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { comparePrices } from 'utils';
import { useStyles } from './ProductPriceLabel.styles';

type ProductPriceLabelProps = {
  price: string;
  oldPrice: string;
};

export const ProductPriceLabel: FC<ProductPriceLabelProps> = ({
  price,
  oldPrice,
}) => {
  const styles = useStyles();
  const comparedPrice = useMemo(
    () => comparePrices(price, oldPrice),
    [price, oldPrice]
  );

  const comparePriceText = useMemo(
    () =>
      comparedPrice > 0 ? (
        <Text style={styles.comparedPrice}>{comparedPrice}% Off</Text>
      ) : null,
    [comparedPrice, styles]
  );

  return (
    <View style={styles.root}>
      <Text style={styles.price}>${price}</Text>
      {price !== oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
      {comparePriceText}
    </View>
  );
};
