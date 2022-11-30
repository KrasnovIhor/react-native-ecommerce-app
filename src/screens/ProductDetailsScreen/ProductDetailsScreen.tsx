import React, { useCallback, useEffect, useMemo } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { Button, Divider, Icon } from '@rneui/themed';
import Image from 'react-native-fast-image';

import { useProducts } from 'providers/ProductsProvider';

import { Header } from 'components/Header';
import { FloatingButton } from 'components/FloatingButton';
import { ProductPriceLabel } from 'components/ProductPriceLabel';
import { ProductCarousel } from 'components/ProductCarousel';

import { LoadingScreen } from 'screens/LoadingScreen';

import { COLORS } from 'constants/colors';

import { getImagePathById } from 'utils';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from './ProductDetailsScreen.styles';
import { useTheme } from 'providers/ThemeProvider';

export const ProductDetailsScreen = () => {
  const styles = useStyles();
  const theme = useTheme();

  const { currentProduct, isLoading, fetchProductById } = useProducts();
  const ID_TO_FETCH = '2';

  const handleRefresh = useCallback(() => {
    fetchProductById(ID_TO_FETCH);
  }, [fetchProductById]);

  const headerRightComponent = useMemo(
    () => (
      <View style={styles.headerButtonsRow}>
        <Header.Button
          icon={
            <Icon
              name="favorite-border"
              color={theme.colors.background}
              size={25}
            />
          }
        />
        <Header.Button
          icon={
            <Icon
              name="shopping-cart"
              color={theme.colors.background}
              size={25}
            />
          }
        />
      </View>
    ),
    [styles, theme.colors.background]
  );

  const imageItems = useMemo(() => {
    const imagesData = currentProduct?.relationships.images.data ?? [];

    if (imagesData.length !== 0) {
      return imagesData.map(imageData => {
        const imageProps = {
          id: imageData.id,
          width: 250,
          height: 250,
        };

        return (
          <Image
            source={{
              uri: getImagePathById(imageProps),
              priority: Image.priority.normal,
            }}
            style={styles.image}
            key={imageProps.id}
            resizeMode={Image.resizeMode.contain}
          />
        );
      });
    }

    return [];
  }, [currentProduct?.relationships.images.data, styles]);

  const content = useMemo(() => {
    if (isLoading && currentProduct === null) {
      return <LoadingScreen />;
    }
    if (currentProduct !== null) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
          }
          contentContainerStyle={styles.container}>
          <ProductCarousel width={350} containerStyle={styles.slider}>
            {imageItems}
          </ProductCarousel>
          <View style={styles.nameSection}>
            <Text style={styles.name}>{currentProduct.attributes.name}</Text>
            <ProductPriceLabel
              price={currentProduct.attributes.price}
              oldPrice={currentProduct.attributes.old_price}
            />
          </View>
          <Divider />
          <View style={styles.colorSection}>
            <Text style={styles.sectionHeading}>Select Color</Text>
            <View style={styles.colorButtons}>
              {COLORS.map(color => (
                <Button
                  key={color}
                  color={
                    theme.isDark ? theme.colors.gray700 : theme.colors.gray100
                  }
                  titleStyle={styles.colorButtonText}
                  title={color}
                  size="sm"
                  buttonStyle={styles.colorButton}
                />
              ))}
            </View>
          </View>
          <Divider />
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionHeading}>Description</Text>
            <Text style={styles.text}>
              {currentProduct.attributes.description}
            </Text>
          </View>
        </ScrollView>
      );
    }
  }, [isLoading, currentProduct, handleRefresh, styles, theme, imageItems]);

  useEffect(() => {
    fetchProductById(ID_TO_FETCH);
  }, [fetchProductById]);

  return (
    <View style={styles.root}>
      <Header rightComponent={headerRightComponent} />
      <SafeAreaView
        mode="padding"
        edges={['left', 'right']}
        style={styles.safeAreaContainer}>
        {content}
      </SafeAreaView>
      <FloatingButton title="ADD TO CART" />
    </View>
  );
};
