import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from '../slices/basketSlice';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { currencyFormatter } from '../utils/currencyFormat';

const DishRow = ({ name, description, id, price, image }) => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => selectBasketItemsById(state, id));
  const handleIncrease = () => {
    dispatch(addToBasket({ id, name, price, image, description }));
  };
  const handleDecrease = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
        <Image
          className="rounded-3xl"
          style={{ height: 100, width: 100 }}
          source={{
            uri: urlFor(image).url(),
          }}
        />
        {/* <Image
          className="rounded-3xl"
          style={{ height: 100, width: 100 }}
          source={image}
        /> */}
        <View className="flex flex-1 space-y-3">
          <View className="pl-3 ">
            <Text className="text-[18px] mb-[5px]">
              {name?.length > 40 ? name.slice(0, 40) + '...' : name}
            </Text>
            {description && (
              <Text className="text-gray-700">
                {`${
                  description?.length > 90
                    ? description.slice(0, 90) + '...'
                    : description
                }`}
              </Text>
            )}
          </View>
          <View className="flex-row pl-3 justify-between items-center">
            <Text className="text-gray-700 text-lg font-bold">
              ₦{currencyFormatter(price)}
            </Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={handleDecrease}
                disabled={!basketItems.length}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
              <Text className="px-3">{basketItems.length}</Text>

              <TouchableOpacity
                onPress={handleIncrease}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Plus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default React.memo(DishRow);
