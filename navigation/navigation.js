import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import CartScreen from '../screens/CartScreen';
import PreparingOrderScreen from '../screens/PreparingOrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import FoodScreen from '../screens/FoodScreen';
import { useEffect } from 'react';
import { getDishes, getRestaurants } from '../api';
import { FoodContext } from '../context/foodContext';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFoodData, setFoodData2 } from '../slices/foodDataSlice';
import SearchScreen from '../screens/SearchScreen';
// import PreparingOrderScreen from './screens/PreparingOrderScreen';
// import DeliveryScreen from './screens/DeliveryScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [foods, setFoods] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getDishes().then((data) => {
      //   setFoods(data);
      dispatch(setFoodData(data));
      dispatch(setFoodData2(data));
    });
    getRestaurants().then((data) => {
      setRestaurants(data);
    //   console.log(data)
    });
  }, []);

  //   console.log(foods);

  return (
    <FoodContext.Provider value={{ foods, setFoods }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Food" component={FoodScreen} />
          <Stack.Screen
            name="Cart"
            options={{ presentation: 'modal', headerShown: false }}
            component={CartScreen}
          />
          <Stack.Screen
            name="PreparingOrder"
            options={{ presentation: 'fullScreenModal', headerShown: false }}
            component={PreparingOrderScreen}
          />
          <Stack.Screen
            name="Delivery"
            options={{ presentation: 'fullScreenModal', headerShown: false }}
            component={DeliveryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FoodContext.Provider>
  );
}
