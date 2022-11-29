import React, { FC, useCallback, useMemo, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Product } from 'types/products';

import { ImageLoader, NoImage } from 'assets/images';
import { styles } from './ProductCard.styles';
import { comparePrices, getImagePathById } from 'utils';
import get from 'lodash/get';

type ProductCardProps = {
  product: Product;
  style?: ViewStyle;
  onPress?: () => void;
};

export const ProductCard: FC<ProductCardProps> = ({
  product,
  style,
  onPress,
}) => {
  const [isOnLoadError, setIsOnLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const previewImageId = get(product, 'relationships.images.data[0].id', '1');
  const productName = product.attributes.name;
  const productPrice = Number(product.attributes.price).toFixed(0);
  const productOldPrice = Number(product.attributes.old_price).toFixed(0);

  const comparedPrice = useMemo(
    () => comparePrices(productPrice, productOldPrice),
    [productOldPrice, productPrice]
  );

  const comparePriceText = useMemo(
    () =>
      comparedPrice > 0 ? (
        <Text style={styles.comparedPrice}>{comparedPrice}% Off</Text>
      ) : null,
    [comparedPrice]
  );

  const imageProperties = useMemo(
    () => ({
      id: previewImageId,
      width: 100,
      height: 100,
    }),
    [previewImageId]
  );
  const imageSource = useMemo(() => {
    if (isLoading) {
      return ImageLoader;
    }

    return isOnLoadError
      ? NoImage
      : {
          uri: getImagePathById(imageProperties),
        };
  }, [imageProperties, isLoading, isOnLoadError]);

  const handleOnLoadError = useCallback(() => {
    setIsOnLoadError(true);
  }, []);
  const handleOnLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, styles.shadowProps, style]}>
        <View>
          <Image
            source={imageSource}
            style={styles.image}
            onError={handleOnLoadError}
            onLoad={handleOnLoad}
          />
          <Text style={styles.name}>{productName}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${productPrice}</Text>
          {productPrice !== productOldPrice && (
            <Text style={styles.oldPrice}>${productOldPrice}</Text>
          )}
          {comparePriceText}
        </View>
      </View>
    </TouchableOpacity>
  );
};
