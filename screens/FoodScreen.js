import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import DishRow from '../components/dishRow';
import BasketIcon from '../components/basketIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../slices/restaurantSlice';
import { emptyBasket } from '../slices/basketSlice';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { currencyFormatter } from '../utils/currencyFormat';

export default function FoodScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  let dispatch = useDispatch();
  const {
    params: {
      id,
      address,
      coordinates,
      delivery_fee,
      delivery_time,
      description,
      dishes,
      image,
      lat,
      lng,
      name,
      opening_time,
      payment_type,
      rating,
      reviews,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    if (restaurant && restaurant.id != id) {
      dispatch(emptyBasket());
    }
    dispatch(
      setRestaurant({
        id,
        title: name,
        delivery_time,
        description,
        dishes,
        imgUrl: image,
        rating,
        lat,
        lng,
        delivery_fee,
      })
    );
  }, []);

  //   console.log(dishes);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative pt-[0px]">
          <Image
            className="w-full h-72"
            source={{ uri: urlFor(image).url() }}
          />
          {/* <Image className="w-full h-72" source={imgUrl} /> */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-4 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6 pb-[20px]"
        >
          <View className="px-5">
            <View className="border-b border-gray-700/30 mb-[10px]">
              <Text className="text-3xl font-bold">{name}</Text>
              {/* copy this code from restaurant card */}
              <Text className="text-gray-500 my-2">
                {description?.length > 200
                  ? description.slice(0, 200) + '...'
                  : description}
              </Text>
            </View>
            <View className="flex-column space-y-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require('../assets/images/fullStar.png')}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700"> ({reviews} review)</Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Icon.Clock color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs"> {opening_time}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.CreditCard color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs"> {payment_type}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs"> {address}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.Truck color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">
                  {' '}
                  ₦{currencyFormatter(delivery_fee)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="pb-36 bg-gray-100/10 ">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {dishes.map((dish) => {
            return (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
              //   <DishRow
              //     key={dish.id}
              //     id={dish.id}
              //     name={dish.name}
              //     description={dish.description}
              //     price={dish.price}
              //     image={dish.image}
              //   />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
