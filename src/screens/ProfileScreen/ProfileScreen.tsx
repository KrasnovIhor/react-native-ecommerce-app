import { Button } from 'components/Button';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller } from 'react-hook-form';
import { Input } from 'components/Input';
import {
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { LogoutModal } from 'components/LogoutModal';
import { useModal } from 'hooks/useModal';
import { useAvatar, useProfileScreen } from './hooks';
import { DefaultAvatar } from 'assets/icons';

export const ProfileScreen = () => {
  const { closeModal, isOpenModal, openModal } = useModal();
  const {
    control,
    errors,
    handleSubmit,
    isLoadingAddressesQuery,
    isLoadingCreateAddress,
    onSubmit,
    styles,
    refetch,
  } = useProfileScreen();
  const { uri, setAvatar } = useAvatar();

  const profileAvatar = useMemo(() => {
    if (uri) {
      return <Image style={styles.avatarImage} source={{ uri }} />;
    }
    return <DefaultAvatar />;
  }, [styles, uri]);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isLoadingAddressesQuery}
            onRefresh={refetch}
          />
        }>
        <Controller
          name="firstname"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="First Name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.firstname}
              errorMessage={errors.firstname?.message}
            />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Last Name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.lastname}
              errorMessage={errors.lastname?.message}
            />
          )}
        />
        <View style={styles.avatar}>
          <TouchableOpacity onPress={setAvatar}>
            {profileAvatar}
          </TouchableOpacity>
        </View>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Mobile Phone"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.phone}
              errorMessage={errors.phone?.message}
            />
          )}
        />
        <Controller
          name="country_iso"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Country"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.country_iso}
              errorMessage={errors.country_iso?.message}
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="City"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.city}
              errorMessage={errors.city?.message}
            />
          )}
        />
        <Controller
          name="zipcode"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Zipcode"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.zipcode}
              errorMessage={errors.zipcode?.message}
            />
          )}
        />

        <Controller
          name="address1"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Locality, area or street"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.address1}
              errorMessage={errors.address1?.message}
            />
          )}
        />
        <Controller
          name="address2"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Flat no., Building name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              isError={!!errors.address2}
              errorMessage={errors.address2?.message}
            />
          )}
        />

        <Button
          style={styles.updateButton}
          title="UPDATE"
          loading={isLoadingCreateAddress}
          onPress={handleSubmit(onSubmit)}
        />
        <Button title="LOG OUT" onPress={openModal} />
      </ScrollView>
      <LogoutModal isOpen={isOpenModal} onClose={closeModal} />
    </SafeAreaView>
  );
};
