import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return { openModal, closeModal, toggleModal, isOpenModal };
};
