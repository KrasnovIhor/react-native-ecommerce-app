import { Routes } from 'navigation';

export const MENU = {
  title: 'Ecommerce Store',
  account: {
    title: 'My Account',
    items: [
      {
        key: 'my-profile',
        iconName: 'person',
        path: Routes.MY_PROFILE,
        label: 'My Profile',
      },
      {
        key: 'my-wish-list',
        iconName: 'favorite',
        path: Routes.MY_WISH_LIST,
        label: 'My Wish List',
      },
      {
        key: 'my-cart',
        iconName: 'shopping-cart',
        path: Routes.MY_CART,
        label: 'My Cart',
      },
      {
        key: 'my-orders',
        iconName: 'add-shopping-cart',
        path: Routes.MY_ORDERS,
        label: 'My Orders',
      },
    ],
  },
  support: {
    title: 'Support',
    items: [
      {
        key: 'mail',
        iconName: 'mail',
        path: Routes.EMAIL,
        label: 'Email',
      },
      {
        key: 'call',
        iconName: 'phone',
        path: Routes.CALL,
        label: 'Call',
      },
    ],
  },
  footer: {
    items: [
      {
        key: 'share',
        iconName: 'share',
        path: Routes.SHARE,
        label: 'Share',
      },
    ],
  },
};
