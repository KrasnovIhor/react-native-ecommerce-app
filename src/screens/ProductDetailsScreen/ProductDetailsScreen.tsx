import React, { useMemo } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { Button, Divider } from '@rneui/themed';

import { FloatingButton } from 'components/FloatingButton';
import { ProductPriceLabel } from 'components/ProductPriceLabel';
import { ProductCarousel } from 'components/ProductCarousel';

import { LoadingScreen } from 'screens/LoadingScreen';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useProductDetails } from './hooks/useProductDetails';

export const ProductDetailsScreen = () => {
  const {
    isLoading,
    isLoadingAddToCart,
    currentProduct,
    styles,
    theme,
    refetch,
    imageItems,
    color,
    handleAddToCart,
    toggleSelectedColor,
    isColorSelected,
  } = useProductDetails();

  const content = useMemo(() => {
    if (isLoading) {
      return <LoadingScreen />;
    }
    if (currentProduct) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={[theme.colors.primary]}
              tintColor={theme.colors.primary}
              refreshing={isLoading}
              onRefresh={refetch}
            />
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
              <Button
                onPress={toggleSelectedColor}
                titleStyle={[
                  styles.colorButtonText,
                  isColorSelected && styles.activeColorButtonText,
                ]}
                title={color}
                size="sm"
                buttonStyle={[
                  styles.colorButton,
                  isColorSelected && styles.activeColorButton,
                ]}
              />
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
  }, [
    isLoading,
    currentProduct,
    theme,
    refetch,
    styles,
    imageItems,
    toggleSelectedColor,
    isColorSelected,
    color,
  ]);

  return (
    <View style={styles.root}>
      <SafeAreaView
        mode="padding"
        edges={['left', 'right']}
        style={styles.safeAreaContainer}>
        {content}
      </SafeAreaView>
      <FloatingButton
        loading={isLoadingAddToCart}
        onPress={handleAddToCart}
        title="ADD TO CART"
      />
    </View>
  );
};
