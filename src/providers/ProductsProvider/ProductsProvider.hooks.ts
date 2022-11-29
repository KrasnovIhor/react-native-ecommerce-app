import { useContext } from 'react';
import { ProductsContext } from './ProductsProvider';

export const useProducts = () => useContext(ProductsContext);
