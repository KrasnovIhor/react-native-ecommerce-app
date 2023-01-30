import { useCallback, useEffect, useMemo } from 'react';
import { useStyles } from '../ProfileScreen.styles';
import { useForm } from 'react-hook-form';
import {
  useCreateAccountAddressMutation,
  useRetrieveAccountAddressesQuery,
} from 'api/modules/user';
import { CreateUserAddress } from 'types/user';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

export const useProfileScreen = () => {
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
        await createAddress(body);
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

  return {
    styles,
    control,
    handleSubmit,
    errors,
    isLoadingAddressesQuery,
    isLoadingCreateAddress,
    onSubmit,
    refetch,
  };
};
