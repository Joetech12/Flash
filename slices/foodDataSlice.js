import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foodData: [],
  foodData2: [],
};

export const foodDataSlice = createSlice({
  name: 'foodData',
  initialState,
  reducers: {
    setFoodData: (state, action) => {
      state.foodData = action.payload;
    },
    setFoodData2: (state, action) => {
      state.foodData2 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFoodData, setFoodData2 } = foodDataSlice.actions;

// export const selectFoodData = (state) => state.foodData.foodData;
export const selectFoodData = (state) => state.foodData.foodData
// export const selectFoodData2 = (state) => state.foodData.foodData2;
export const selectFoodData2 = (state) => state.foodData.foodData2;

export default foodDataSlice.reducer;
