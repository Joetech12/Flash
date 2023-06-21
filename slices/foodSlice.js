import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  food: {
    id: null,
    name: null,
    description: null,
    image: null,
    category: null,
    restaurant: null,
    price: null,
  },
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFood } = foodSlice.actions;

export const selectFood = (state) => state.food.food;

export default foodSlice.reducer;
