import { NavigatorScreenParams } from '@react-navigation/native';

export enum Routes {
  MAIN = 'Main',
  PRODUCT_DETAILS = 'ProductDetails',
  MY_PROFILE = 'MyProfile',
  MY_WISH_LIST = 'MyWishList',
  MY_CART = 'MyCart',
  CART_CONFIRAMTION = 'CartConfirmation',
  MY_ORDERS = 'MyOrders',
  EMAIL = 'Email',
  CALL = 'Call',
  SHARE = 'Share',
  LOGIN = 'Login',
  SIGN_UP = 'SignUp',
}

export enum Modals {
  SELECT_COLOR_MODAL = 'SelectColorModal',
  PRODUCT_ADDED_MODAL = 'ProductAddedModal',
  LOGIN_MODAL = 'LoginModal',
}

export enum Stacks {
  PRODUCT = 'ProductStack',
  AUTH = 'AuthStack',
}

export type RootStackParamList = {
  [Stacks.PRODUCT]: NavigatorScreenParams<ProductStackParamList>;
  [Stacks.AUTH]: NavigatorScreenParams<AuthStackParamList>;
  [Routes.MY_PROFILE]: undefined;
  [Routes.MY_WISH_LIST]: undefined;
  [Routes.MY_CART]: undefined;
  [Routes.CART_CONFIRAMTION]: undefined;
  [Routes.MY_ORDERS]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.SIGN_UP]: undefined;
};

export type ProductStackParamList = {
  [Routes.MAIN]: undefined;
  [Routes.PRODUCT_DETAILS]: { productId: string };
  [Modals.SELECT_COLOR_MODAL]: undefined;
  [Modals.PRODUCT_ADDED_MODAL]: undefined;
  [Modals.LOGIN_MODAL]: undefined;
};

export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGN_UP]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
