import { configureStore } from '@reduxjs/toolkit';

import ProductReducer from '../features/ProductList/ProductSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
