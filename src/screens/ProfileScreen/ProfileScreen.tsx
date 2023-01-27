import { Button } from 'components/Button';
import React, { useCallback, useEffect, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from './ProfileScreen.styles';
import { Controller, useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import {
  useCreateAccountAddressMutation,
  useRetrieveAccountAddressesQuery,
} from 'api/modules/user';
import { CreateUserAddress } from 'types/user';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RefreshControl, ScrollView } from 'react-native';
import { LogoutModal } from 'components/LogoutModal';
import { useModal } from 'hooks/useModal';

type FormData = {
  firstname: string;
  lastname: string;
  phone: string;
  country_iso: string;
  city: string;
  zipcode: string;
  address1: string;
  address2: string;
};

const defaultValues: FormData = {
  firstname: '',
  lastname: '',
  phone: '',
  country_iso: '',
  city: '',
  zipcode: '',
  address1: '',
  address2: '',
};

const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    phone: yup.string().required(),
    country_iso: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.string().required(),
    address1: yup.string().required('Address is required'),
    address2: yup.string().required('Address is required'),
  })
  .required();

export const ProfileScreen = () => {
  const styles = useStyles();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const {
    data: addresses,
    refetch,
    isLoading: isLoadingAddressesQuery,
  } = useRetrieveAccountAddressesQuery();
  const [createAddress, { isLoading: isLoadingCreateAddress }] =
    useCreateAccountAddressMutation();
  const { closeModal, isOpenModal, openModal } = useModal();

  const shouldCreateAddress = useMemo(
    () => (addresses ? !addresses.data.length : false),
    [addresses]
  );

  const updateInputFieldsValues = useCallback(
    (fieldsArray: Array<keyof FormData>) => {
      fieldsArray?.forEach(field => {
        setValue(field, addresses?.data?.[0]?.attributes[field] || '');
      });
    },
    [addresses?.data, setValue]
  );

  const onSubmit = useCallback(
    async ({
      firstname,
      lastname,
      address1,
      address2,
      phone,
      country_iso,
      city,
      zipcode,
    }: FormData) => {
      const body: CreateUserAddress = {
        address: {
          firstname: firstname,
          lastname: lastname,
          address1,
          address2,
          phone,
          country_iso: country_iso,
          city,
          zipcode,
        },
      };

      if (shouldCreateAddress) {
        const response = await createAddress(body);
        console.log(response);
        await refetch();
      }
    },
    [createAddress, refetch, shouldCreateAddress]
  );

  useEffect(() => {
    updateInputFieldsValues(
      Object.keys(defaultValues) as Array<keyof FormData>
    );
  }, [updateInputFieldsValues]);

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
