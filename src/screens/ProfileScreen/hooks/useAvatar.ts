import { useCallback, useEffect, useState } from 'react';
import { PROFILE_AVATAR_KEY } from 'constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';

export const useAvatar = () => {
  const [uri, setUri] = useState<string | null>(null);

  const setAvatar = useCallback(async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
      });
      const imageUri = response?.assets?.[0].uri;

      if (imageUri) {
        setUri(imageUri);
        await AsyncStorage.setItem(PROFILE_AVATAR_KEY, imageUri);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAvatar = useCallback(async () => {
    try {
      const imageUri = await AsyncStorage.getItem(PROFILE_AVATAR_KEY);
      if (imageUri) {
        setUri(imageUri);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAvatar();
  }, [getAvatar]);

  return { uri, setAvatar };
};
