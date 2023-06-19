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
import { getFeaturedRestaurants, getRestaurants } from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { featured } from '../constants';
import Header from '../components/header';
import VendorRow from '../components/vendorRow';

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    getRestaurants().then((data) => {
      setRestaurants(data);
    });
  }, []);

  //   console.log(restaurants)

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

        <View className="mt-5">
          <VendorRow restaurants={restaurants} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
