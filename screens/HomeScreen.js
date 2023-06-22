import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import FeaturedRow from '../components/featuredRow';
import {
  getCategories,
  getDishes,
  getDishesById,
  getFeaturedRestaurants,
  getRestaurants,
} from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { ALL, featured } from '../constants';
import Header from '../components/header';
import VendorRow from '../components/vendorRow';
import FoodRow from '../components/foodRow';
import {
  selectFoodData,
  setFoodData,
  emptyFoodData,
  selectFoodData2,
} from '../slices/foodDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { FoodContext } from '../context/foodContext';

// const ALL = 'All';

export default function HomeScreen() {
  const { foods, setFoods } = useContext(FoodContext);

  const foodie = useSelector(selectFoodData);
  const foodie2 = useSelector(selectFoodData2);

  const dispatch = useDispatch();

  //   const newFood = [...foods];

  const [categories, setCategories] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [food, setFood] = useState(foodie);
  const [selectFoods, setSelectFoods] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();

  //   const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    // setSelectedTag()
    getCategories().then((data) => {
      // console.log('got data', data[0].name);
      setCategories(data);
    });
    getRestaurants().then((data) => {
      setRestaurants(data);
    });

    // setFood(foodie);
    getDishes().then((data) => {
      setFood(data);
      console.log(data)
    });
  }, []);

  useEffect(() => {
    if (selectedTag === 'All') {
      dispatch(setFoodData(foodie2));
    } else if (selectedTag) {
      const filteredDish = foodie2?.filter((dish) => {
        const tag = dish?.category?.find((c) => c?.name === selectedTag);
        return !!tag;
      });
      dispatch(setFoodData(filteredDish));
    } else {
      dispatch(setFoodData(foodie2));
    }
  }, [selectedTag]);

  const allCategories = [ALL, ...categories];

//   console.log(foodie);

  return (
    <SafeAreaView className="bg-white pt-[10px]">
      <StatusBar barStyle="default" />
      {/* search header */}
      <Header />

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <Categories
          categories={allCategories}
          selectedCategory={selectedTag}
          onCategoryPress={setSelectedTag}
        />

        <View className="">
          <FoodRow foods={foodie} />
          {/* <Text>{restaurants.dishes.name[0]}</Text> */}
        </View>

        <View className="my-3">
          <VendorRow restaurants={restaurants} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
