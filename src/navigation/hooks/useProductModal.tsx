import React, { useCallback } from 'react';
import { ConfirmModal } from 'components/ConfirmModal';
import { LoginModal } from 'components/LoginModal';

export const useProductModal = () => {
  const selectColorModal = useCallback(
    () => (
      <ConfirmModal
        title="Select color"
        subTitle="Please select your color to add this item in your cart"
        iconType="error"
      />
    ),
    []
  );

  const productAddedModal = useCallback(
    () => (
      <ConfirmModal iconType="confirm" title="Product added to your cart" />
    ),
    []
  );

  const loginModal = useCallback(
    () => (
      <LoginModal
        title="Login To Continue"
        subTitle="Please login to add product in your cart"
      />
    ),
    []
  );

  return { selectColorModal, productAddedModal, loginModal };
};
