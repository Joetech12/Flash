import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../slices/basketSlice';
import { selectRestaurant } from '../slices/restaurantSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { urlFor } from '../sanity';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { featured } from '../constants';
import { currencyFormatter } from '../utils/currencyFormat';
import { selectFood } from '../slices/foodSlice';
import { selectDeliveryFee, setDeliveryFee } from '../slices/deliveryFeeSlice';

export default function BasketScreen() {
  //   const { params: dispatchData } = useRoute();

  //   console.log(dispatchData);

  const restaurant = useSelector(selectRestaurant);
  const food = useSelector(selectFood);
  const deliveryFee = useSelector(selectDeliveryFee);

  const usedRestaurant = restaurant || food.restaurant;
  //   const restaurant = featured.restaurants[0];
  const [groupedItems, setGroupedItems] = useState([]);
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  //   const deliveryFee = 0 || dispatchData.delivery_fee;
  // restaurant.delivery_fee || food.restaurant.delivery_fee || 10;
  useMemo(() => {
    const gItems = basketItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(gItems);
    // console.log('items: ',gItems);
  }, [basketItems]);

  useMemo(() => {
    if (basketTotal == 0) {
      dispatch(setDeliveryFee(0));
    }
  }, [basketTotal]);

  const navigateHandle = () => {
    if (basketTotal != 0) {
      navigation.navigate('PreparingOrder');
    }
  };

  return (
    <View className=" bg-white flex-1">
      {/* top button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500 mt-[10px]">
            {usedRestaurant?.name}
          </Text>
          {/* <Text className="text-center text-gray-500 mt-[10px]">
            {restaurant.name}
          </Text> */}
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require('../assets/images/bikeGuy.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">
          Deliver in {usedRestaurant.delivery_time}
        </Text>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ color: themeColors.text }} className="font-bold">
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-gray-100/50 pt-5"
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          {
            /* {restaurant.dishes.map((dish, index) => { */
          }
          return (
            <View
              key={key}
              //   key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text style={{ color: themeColors.text }} className="font-bold">
                {items.length} x{' '}
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                // source={{ uri: urlFor(items[0]?.image).url() }}
                source={items[0]?.image}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {items[0]?.name}
              </Text>
              <Text className="font-semibold text-base">
                ₦{currencyFormatter(items[0]?.price)}
              </Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                onPress={() => dispatch(removeFromBasket({ id: items[0]?.id }))}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className=" p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">
            ₦{currencyFormatter(basketTotal)}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">
            ₦{currencyFormatter(deliveryFee)}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="font-extrabold">
            ₦{currencyFormatter(basketTotal + deliveryFee)}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor:
                basketTotal != 0
                  ? themeColors.bgColor(1)
                  : themeColors.bgColor(0.2),
            }}
            onPress={navigateHandle}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
