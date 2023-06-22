import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';
import restaurantSlice from './slices/restaurantSlice';
import foodSlice from './slices/foodSlice';
import foodDataSlice from './slices/foodDataSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice,
    food: foodSlice,
    foodData: foodDataSlice,
  },
});
