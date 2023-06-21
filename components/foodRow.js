import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './restaurantCard';
import { getFeaturedRestaurantById } from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import FoodCard from './foodCard';

export default function FoodRow({ food }) {
  //   const [restaurants, setRestaurants] = useState([]);

  //   useEffect(() => {
  //     getFeaturedRestaurantById(id).then(data=>{
  //       // console.log('got data: ',data);
  //       setRestaurants(data?.restaurants);
  //     })
  //   }, [id]);
  // console.log(resturants);

  return (
    <View className="">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {food.map((fd) => {
          const { _id, description, image, category, restaurant, price, name } =
            fd;

          //   console.log(fd);

          return (
            <FoodCard
              key={_id}
              id={_id}
              name={name}
              image={image}
              category={category}
              restaurant={restaurant}
              price={price}
              description={description}
            />
            
          );
        })}
      </ScrollView>
    </View>
  );
}
