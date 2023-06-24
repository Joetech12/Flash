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
import Loading from '../components/loading';

// const ALL = 'All';

export default function SearchScreen() {
  //   const foodie2 = useSelector(selectFoodData2);

  const dispatch = useDispatch();

  const [showFooter, setShowFooter] = useState(false);

  const navigation = useNavigation();

  //   const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-white pt-[10px] flex-1">
      <StatusBar barStyle="default" />
      {/* search header */}
      <Header pressable={false} showSearchIcon={false} backButton />

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <View className=""></View>

        {/* {showFooter && (
          <View>
            <Text className="text-gray-500 w-full text-center mt-[0px]">
              Ifeanyi Umeh © 2023
            </Text>
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}
