import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/navigation';
import { store } from './store';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { setupURLPolyfill } from 'react-native-url-polyfill';
import { useEffect } from 'react';
import { setFoodData } from './slices/foodDataSlice';
import { getDishes, getRestaurants } from './api';
import { useState } from 'react';
import { FoodContext } from './context/foodContext';

setupURLPolyfill();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
