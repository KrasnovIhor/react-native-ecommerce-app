export type Product = {
  id: string;
  type: string;
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
