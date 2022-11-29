import random from 'lodash/random';
import { Product } from 'types/products';

export const parseProducts = (products: Product[]) => {
  return products.map(product => {
    const oldPrice = (
      Number(product.attributes.price) * random(0.1, 1.8)
    ).toFixed(2);
    const displayOldPrice = `$${oldPrice}`;

    return {
      ...product,
      attributes: {
        ...product.attributes,
        old_price: oldPrice,
        display_old_price: displayOldPrice,
      } as Product['attributes'],
    } as Product;
  });
};
