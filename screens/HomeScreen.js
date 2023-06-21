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
import { getDishes, getFeaturedRestaurants, getRestaurants } from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { featured } from '../constants';
import Header from '../components/header';
import VendorRow from '../components/vendorRow';
import FoodRow from '../components/foodRow';

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);
  const [food, setFood] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    getRestaurants().then((data) => {
      setRestaurants(data);
    });
    getDishes().then((data) => {
      setFood(data);
    });
  }, []);

  //   console.log(food);

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
        <Categories />

        <View className="">
          <FoodRow food={food} />
        </View>

        <View className="my-3">
          <VendorRow restaurants={restaurants} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
