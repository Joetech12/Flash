import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import restaurantSlice from './slices/restaurantSlice';
import foodSlice from './slices/foodSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice,
    food: foodSlice,
  },
});
