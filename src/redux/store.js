import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { filterReducer } from './filterSlice';
import { favoritesReducer } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
});
