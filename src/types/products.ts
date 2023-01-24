export type Product = {
  id: string;
  type: 'product';
  attributes: ProductAttributes;
  relationships: ProductRelationships;
};

export type ProductRelationshipsItem = {
  id: string;
  type: string;
};
export type ProductRelationshipsData = {
  data: ProductRelationshipsItem[];
};
export type ProductRelationships = {
  variants: ProductRelationshipsData;
  option_types: ProductRelationshipsData;
  product_properties: ProductRelationshipsData;
  taxons: ProductRelationshipsData;
  images: ProductRelationshipsData;
  default_variant: ProductRelationshipsData;
  primary_variant: ProductRelationshipsData;
};
export type ProductAttributes = {
  name: string;
  description: string;
  available_on: string;
  slug: string;
  meta_description: string | null;
  meta_keywords: string[] | string | null;
  updated_at: string;
  sku: string;
  purchasable: boolean;
  in_stock: boolean;
  backorderable: boolean;
  available: boolean;
  currency: string;
  price: string;
  display_price: string;
  compare_at_price: string | null;
  display_compare_at_price: string | null;
  old_price: string;
  display_old_price: string;
};

export type OptionValueAttributes = {
  position: number;
  name: string;
  presentation: string;
  created_at: string;
  updated_at: string;
  public_metadata: {};
  private_metadata: {};
};

export type OptionValue = {
  id: string;
  type: string;
  attributes: OptionValueAttributes;
  relationships: {
    option_type: {
      data: ProductRelationshipsItem;
    };
  };
};

export type ProductVariant = {
  id: string;
  type: 'variant';
  attributes: ProductVariantAttributes;
  relationships: ProductVariantRelationships;
};

export type ProductVariantAttributes = {
  sku: string;
  weight: string;
  height: string | null;
  width: string | null;
  depth: string | null;
  is_master: boolean;
  options_text: string;
  purchasable: boolean;
  in_stock: boolean;
  backorderable: boolean;
  currency: string;
  price: string;
  display_price: string;
  compare_at_price: string | null;
  display_compare_at_price: string | null;
};
export type ProductVariantRelationships = {
  product: {
    data: ProductRelationshipsItem;
  };
  images: {
    data: ProductRelationshipsItem[];
  };
  option_values: {
    data: ProductRelationshipsItem[];
  };
};
