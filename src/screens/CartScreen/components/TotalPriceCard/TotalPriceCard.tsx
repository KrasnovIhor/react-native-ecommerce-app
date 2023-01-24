import { Divider } from '@rneui/themed';
import React, { useMemo } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { useStyles } from './TotalPriceCard.styles';

type TotalPriceCardProps = {
  itemCount: number | string;
  totalPrice: string;
  deliveryPrice?: string;
  discountValue?: string;
  taxValue?: string;
  style?: ViewStyle;
};

export const TotalPriceCard: React.FC<TotalPriceCardProps> = ({
  itemCount,
  totalPrice,
  deliveryPrice = '0',
  discountValue = '0',
  style,
}) => {
  const styles = useStyles();

  const taxValue = useMemo(
    () => (Number(totalPrice) * 0.02).toFixed(2),
    [totalPrice]
  );
  const totalFinal = useMemo(
    () =>
      (
        Number(totalPrice) +
        Number(deliveryPrice) -
        Number(discountValue) +
        Number(taxValue)
      ).toFixed(2),
    [deliveryPrice, discountValue, taxValue, totalPrice]
  );

  return (
    <View style={[styles.root, style]}>
      <Text style={styles.title}>Price details</Text>
      <View style={styles.priceRow}>
        <Text style={styles.detailsText}>
          Price ({itemCount} item{itemCount !== 1 ? 's' : null})
        </Text>
        <Text style={styles.detailsText}>${totalPrice}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.detailsText}>Delivery</Text>
        <Text style={styles.detailsText}>${deliveryPrice}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.detailsText}>Discount</Text>
        <Text style={styles.discountText}>- ${discountValue}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.detailsText}>Tax (2%)</Text>
        <Text style={styles.detailsText}>${taxValue}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.priceRow}>
        <Text style={styles.totalPriceText}>Amount Payable</Text>
        <Text style={styles.totalPriceText}>${totalFinal}</Text>
      </View>
    </View>
  );
};
