type MetaResponseData = {
  count: number;
  total_count: number;
  total_pages: number;
};
type LinksResponseData = {
  self: string;
  next: string;
  prev: string;
  last: string;
  first: string;
};

export type StoreFrontResponse<T> = {
  data: T;
  meta: MetaResponseData;
  links: LinksResponseData;
};

export type TokenApiResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  created_at: number;
};

export type TokenApiRequestBody = {
  grant_type: 'password' | 'client_credentials';
  username: string;
  password: string;
};

export interface CartItem {
  data: CartItemData;
  included: CartIncluded[];
}

export interface CartItemData {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  number: string;
  item_total: string;
  total: string;
  ship_total: string;
  adjustment_total: string;
  created_at: Date;
  updated_at: Date;
  completed_at: null;
  included_tax_total: string;
  additional_tax_total: string;
  display_additional_tax_total: string;
  display_included_tax_total: string;
  tax_total: string;
  currency: string;
  state: string;
  token: string;
  email: string;
  display_item_total: string;
  display_ship_total: string;
  display_adjustment_total: string;
  display_tax_total: string;
  promo_total: string;
  display_promo_total: string;
  item_count: number;
  special_instructions: null;
  display_total: string;
  pre_tax_item_amount: string;
  display_pre_tax_item_amount: string;
  pre_tax_total: string;
  display_pre_tax_total: string;
  shipment_state: null;
  payment_state: null;
}

export interface Relationships {
  line_items: BillingAddress;
  variants: BillingAddress;
  promotions: BillingAddress;
  payments: BillingAddress;
  shipments: BillingAddress;
  user: BillingAddress;
  billing_address: BillingAddress;
  shipping_address: BillingAddress;
}

export interface BillingAddress {
  data: DataData | null;
}

export interface DataData {
  id: string;
  type: string;
}
export interface CartIncluded {
  id: string;
  type: string;
  attributes: CartIncludedAttributes;
  relationships: CartIncludedRelationships;
}

export interface CartIncludedAttributes {
  name?: string;
  quantity?: number;
  price: string;
  slug?: string;
  options_text: string;
  currency: string;
  display_price: string;
  total?: string;
  display_total?: string;
  adjustment_total?: string;
  display_adjustment_total?: string;
  additional_tax_total?: string;
  discounted_amount?: string;
  display_discounted_amount?: string;
  display_additional_tax_total?: string;
  promo_total?: string;
  display_promo_total?: string;
  included_tax_total?: string;
  display_included_tax_total?: string;
  pre_tax_amount?: string;
  display_pre_tax_amount?: string;
  sku?: string;
  weight?: string;
  height?: null;
  width?: null;
  depth?: null;
  is_master?: boolean;
  purchasable?: boolean;
  in_stock?: boolean;
  backorderable?: boolean;
  compare_at_price?: null;
  display_compare_at_price?: null;
}

export interface CartIncludedRelationships {
  variant?: BillingAddress;
  product?: BillingAddress;
  images?: BillingAddress;
  option_values?: BillingAddress;
}

export interface Links {
  self: string;
  next: string;
  prev: string;
  last: string;
  first: string;
}

export interface Meta {
  count: number;
  total_count: number;
  total_pages: number;
}
