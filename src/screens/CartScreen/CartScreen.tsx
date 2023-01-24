import { Button } from 'components/Button';
import { CartBox, PersonIcon } from 'assets/icons';
import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
import { Routes } from 'navigation';
import { useCartScreen } from './hooks/useCartScreen';
import { LoadingScreen } from 'screens/LoadingScreen';
import { TotalPriceCard } from './components/TotalPriceCard';
import { FloatingButton } from 'components/FloatingButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { ACCENT_GREEN } from 'assets/colors';

export const CartScreen = () => {
  const {
    styles,
    handleLoginNavigate,
    handleShopNavigate,
    isAuthenticated,
    data,
    isLoading,
    isError,
    lineItems,
    renderCartItem,
    refetch,
  } = useCartScreen();

  const itemsCount = data?.data.attributes.item_count;

  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.root} edges={['left', 'right']}>
        <View style={styles.main}>
          <PersonIcon style={styles.personIcon} />
          <Text style={styles.title}>Login First!</Text>
          <Text style={styles.subTitle}>Login first to view your cart</Text>
          <Button
            title="LOGIN NOW"
            containerStyle={styles.button}
            onPress={handleLoginNavigate}
          />
          <Link style={styles.textButtonTitle} to={`/${Routes.SIGN_UP}`}>
            New here? Sign Up
          </Link>
        </View>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated && itemsCount === 0) {
    return (
      <SafeAreaView style={styles.root} edges={['left', 'right']}>
        <View style={styles.main}>
          <CartBox style={styles.cartIcon} />
          <Text style={styles.title}>Your Cart is Empty!</Text>
          <Text style={styles.subTitle}>Add product in your cart now</Text>
          <Button
            title="SHOP NOW"
            containerStyle={styles.button}
            onPress={handleShopNavigate}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.root} edges={['left', 'right']}>
        <Text>Something went wrong :(</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.root} edges={['left', 'right', 'bottom']}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        contentContainerStyle={styles.scrollView}>
        {lineItems && lineItems.map(lineItem => renderCartItem(lineItem))}
        <TotalPriceCard
          style={styles.totalPriceCard}
          itemCount={data?.data.attributes.item_count || '0'}
          totalPrice={data?.data.attributes.total || '0'}
        />
        <View style={styles.guardLabelContainer}>
          <Icon
            style={styles.guardLabelIcon}
            name="shield-checkmark"
            size={25}
            color={ACCENT_GREEN}
          />
          <Text style={styles.guardLabelText}>
            Safe and Secure Payments 100% Authentic Ptoducts
          </Text>
        </View>
      </ScrollView>
      <FloatingButton title="PROCEED TO PAYMENT" />
    </SafeAreaView>
  );
};
