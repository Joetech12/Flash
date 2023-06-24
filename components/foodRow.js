import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './restaurantCard';
import { getFeaturedRestaurantById } from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import FoodCard from './foodCard';

export default function FoodRow({ foods }) {
  //   const [restaurants, setRestaurants] = useState([]);
  // const [selectFoods, setSelectFoods] = useState(foods);

  //   useEffect(() => {
  //     getFeaturedRestaurantById(id).then(data=>{
  //       // console.log('got data: ',data);
  //       setRestaurants(data?.restaurants);
  //     })
  //   }, [id]);
  // console.log(foods);

  return (
    <View className="">
      {foods.length ? (
        <FlatList
          horizontal
          data={foods}
          keyExtractor={(item) => String(item?._id)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          className="overflow-visible py-2"
          renderItem={({ item, index }) => (
            <FoodCard
              id={item?._id}
              name={item?.name}
              image={item?.image}
              restaurant={item?.restaurant}
              price={item?.price}
              description={item?.description}
            />
          )}
        />
      ) : (
        <View className="flex-row h-[200px]  justify-center items-center w-full ">
          <Text className="text-gray-500 w-full  text-center ">
            No meal available
          </Text>
        </View>
      )}
    </View>
  );
}
