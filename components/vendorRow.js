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

const VendorRow = ({ restaurants }) => {
  return (
    <View className="">
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">Top Vendors</Text>
          <Text className="text-gray-500 text-xs">
            Flash your orders from trusted vendors
          </Text>
        </View>

        {/* <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity> */}
      </View>

      {restaurants.length ? (
        <FlatList
          horizontal
          data={restaurants}
          keyExtractor={(item) => String(item?._id)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          className="overflow-visible py-2"
          renderItem={({ item, index }) => (
            <RestaurantCard
              key={item?._id}
              id={item?._id}
              image={item?.image}
              name={item?.name}
              rating={item?.rating}
              address={item?.address}
              coordinates={item?.coordinates}
              delivery_fee={item?.delivery_fee}
              delivery_time={item?.delivery_time}
              description={item?.description}
              dishes={item?.dishes}
              opening_time={item?.opening_time}
              lng={item?.lng}
              lat={item?.lat}
              payment_type={item?.payment_type}
              reviews={item?.reviews}
            />
          )}
        />
      ) : (
        <View className="flex-row h-[200px]  justify-center items-center w-full ">
          <Text className="text-gray-500 w-full  text-center ">
            No Restaurant available
          </Text>
        </View>
      )}
    </View>
  );
};

export default React.memo(VendorRow);
