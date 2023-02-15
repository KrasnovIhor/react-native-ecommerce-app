import { Links, Meta } from './api';

export interface UserData {
  id: string;
  type: string;
  attributes: UserAttributes;
  relationships: UserRelationships;
}
export interface UserAttributes {
  email: string;
  first_name: string;
  last_name: string;
  store_credits: number;
  completed_orders: number;
}

export interface UserRelationships {
  default_billing_address: DefaultIngAddress;
  default_shipping_address: DefaultIngAddress;
}

export interface DefaultIngAddress {
  data: DefaultBillingAddressData | null;
}

export interface DefaultBillingAddressData {
  id: string;
  type: string;
}
export interface CreateUserRequest {
  user: {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirmation: string;
  };
}

export interface CreateUserAddress {
  address: {
    firstname: string;
    lastname?: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    phone: string;
    zipcode?: string;
    state_name?: string;
    country_iso?: string;
    label?: string;
  };
}

export interface UserAddressAttributes {
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  city: string;
  zipcode: string;
  phone: string;
  state_name: string;
  company: string;
  country_name: string;
  country_iso3: string;
  country_iso: string;
  label: string;
  state_code: string;
}

export interface UserAddressData {
  id: string;
  type: string;
  attributes: UserAddressAttributes;
}

export interface UserAddressResponse {
  data: UserAddressData;
}

export interface UserAddressesAllResponse {
  data: UserAddressesAllData[];
  meta: Meta;
  links: Links;
}

export interface UserAddressesAllData {
  id: string;
  type: string;
  attributes: { [key: string]: null | string };
}
