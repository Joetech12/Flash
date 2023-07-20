import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    address: null,
    description: null,
    dishes: null,
    lng: null,
    lat: null,
    delivery_fee: null,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

// export const selectRestaurant = (state) => state.restaurant.restaurant;
export const selectRestaurant = () =>
  createSelector(
    (state) => state.restaurant,
    (restaurant) => restaurant
  );

export default restaurantSlice.reducer;
