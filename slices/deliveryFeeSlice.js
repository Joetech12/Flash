import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deliveryFee: 0,
  restaurant: '',
};

export const deliveryFeeSlice = createSlice({
  name: 'deliveryFee',
  initialState,
  reducers: {
    setDeliveryFee: (state, action) => {
      state.deliveryFee = action.payload;
    },
    setDeliveryFeeRestaurant: (state, action) => {
      state.deliveryFee = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDeliveryFee, setDeliveryFeeRestaurant } =
  deliveryFeeSlice.actions;

export const selectDeliveryFee = (state) => state.deliveryFee.deliveryFee;
export const selectDeliveryFeeRestaurant = (state) =>
  state.deliveryFee.restaurant;

export default deliveryFeeSlice.reducer;
