import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpened, setOpened] = useState(false);

  const openModal = useCallback(() => {
    setOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpened(false);
  }, []);

  const toggleModal = useCallback(() => {
    setOpened(prev => !prev);
  }, []);

  return { isModalOpened: isOpened, openModal, closeModal, toggleModal };
};
