import React, { FC, useCallback, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Product } from 'types/products';

import { useStyles } from './ProductCard.styles';
import { getImagePathById } from 'utils';
import { ProductPriceLabel } from 'components/ProductPriceLabel';
import Image from 'react-native-fast-image';

import get from 'lodash/get';

type ProductCardProps = {
  product: Product;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
};

export const ProductCard: FC<ProductCardProps> = ({
  product,
  style,
  containerStyle,
  onPress,
}) => {
  const [isOnLoadError, setIsOnLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const styles = useStyles();

  const previewImageId = get(product, 'relationships.images.data[0].id', '1');
  const productName = product.attributes.name;
  const productPrice = Number(product.attributes.price).toFixed(0);
  const productOldPrice = Number(product.attributes.old_price).toFixed(0);

  const imageProperties = useMemo(
    () => ({
      id: previewImageId,
      width: 100,
      height: 100,
    }),
    [previewImageId]
  );

  const defaultSource = useMemo(() => {
    if (isLoading) {
      return require('assets/images/ImageLoader.gif');
    }
    if (isOnLoadError) {
      return require('assets/images/NoImage.png');
    }
  }, [isLoading, isOnLoadError]);

  const handleOnLoadError = useCallback(() => {
    setIsOnLoadError(true);
  }, []);
  const handleOnLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <TouchableOpacity style={[styles.root, containerStyle]} onPress={onPress}>
      <View style={[styles.card, styles.shadowProps, style]}>
        <View>
          <Image
            defaultSource={defaultSource}
            source={{
              uri: getImagePathById(imageProperties),
              priority: Image.priority.normal,
            }}
            resizeMode={Image.resizeMode.contain}
            style={styles.image}
            onError={handleOnLoadError}
            onLoad={handleOnLoad}
          />
          <Text style={styles.name}>{productName}</Text>
        </View>
        <ProductPriceLabel price={productPrice} oldPrice={productOldPrice} />
      </View>
    </TouchableOpacity>
  );
};
