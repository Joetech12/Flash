import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './restaurantCard';
import { getFeaturedRestaurantById } from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';

export default function VendorRow({ restaurants }) {
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
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">Top Vendors</Text>
          <Text className="text-gray-500 text-xs">
            Flash your orders from trusted vendors
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant) => {
          const { _id, address, coordinates, delivery_fee, delivery_time, description, dishes, image, lat, lng, name, opening_time, payment_type, rating, reviews,  } = restaurant;
          return (
            // <RestaurantCard
            //   key={restaurant.id}
            //   id={restaurant.id}
            //   imgUrl={restaurant.image}
            //   title={restaurant.name}
            //   rating={restaurant.reviews}
            //   type={restaurant.category}
            //   address="123 main street"
            //   description={restaurant.description}
            //   dishes={restaurant.dishes}
            //   lng={restaurant.lng}
            //   lat={restaurant.lat}
            //   stars={restaurant.stars}
            // />
            <RestaurantCard
              key={_id}
              id={_id}
              image={image}
              name={name}
              rating={rating}
              address={address}
              coordinates={coordinates}
              delivery_fee={delivery_fee}
              delivery_time={delivery_time}
              description={description}
              dishes={dishes}
              opening_time={opening_time}
              lng={lng}
              lat={lat}
              payment_type={payment_type}
              reviews={reviews}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
