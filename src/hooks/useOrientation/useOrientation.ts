import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const isPortrait = () => {
  const window = Dimensions.get('screen');
  return window.height >= window.width;
};

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<'PORTRAIT' | 'LANDSCAPE'>(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE'
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

    const subscribtion = Dimensions.addEventListener('change', callback);

    return () => {
      subscribtion?.remove();
    };
  }, []);

  return orientation;
};
