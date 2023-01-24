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
