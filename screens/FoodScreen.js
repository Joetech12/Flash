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
import { selectFood, setFood } from '../slices/foodSlice';
import { emptyBasket } from '../slices/basketSlice';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { currencyFormatter } from '../utils/currencyFormat';
import { BanknotesIcon } from 'react-native-heroicons/outline';
import FoodOrder from '../components/foodOrder';

export default function FoodScreen() {
  const navigation = useNavigation();
  
  let dispatch = useDispatch();

  const {
    params: { id, name, description, image, category, restaurant, price },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

//   useEffect(() => {
//     // if (food.restaurant && food.restaurant.id != id) {
//     //   dispatch(emptyBasket());
//     // }
//     dispatch(
//       setFood({
//         id,
//         name,
//         description,
//         image,
//         category,
//         restaurant,
//         price,
//       })
//     );
//   }, []);

  const food = useSelector(selectFood);

  //   console.log(dishes);

  return (
    <>
      {/* <Text onPress={navigation.navigate('Cart')}>go to</Text> */}
      <BasketIcon />
      <ScrollView>
        <View className="relative pt-[0px]">
          <Image
            className="w-full h-[350px]"
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
              <Text className="text-gray-500 my-2">{description}</Text>
            </View>
            <View className="flex-column space-y-2 my-1">
              <View className="flex-row items-center space-x-1">
                <BanknotesIcon color="gray" width={20} height={20} />
                <Text className="text-xs">
                  <Text className="text-gray-700">
                    ₦{currencyFormatter(price)}
                  </Text>
                  {/* <Text className="font-semibold text-gray-700">{type}</Text> */}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.Clock color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">
                  {' '}
                  {restaurant.delivery_time}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">{restaurant.name}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">
                  {' '}
                  {restaurant.address}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Icon.CreditCard color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">
                  {' '}
                  {restaurant.payment_type}
                </Text>
              </View>

              {/* <View className="flex-row items-center space-x-1">
                <Icon.Truck color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">
                  {' '}
                  ₦{currencyFormatter(restaurant.delivery_fee)}
                </Text>
              </View> */}
            </View>
          </View>
        </View>
        <View className="pb-36 bg-gray-100/10 ">
          <Text className="px-4 py-4 text-2xl font-bold">Make Order</Text>
          {/* dishes */}
          <FoodOrder
            id={id}
            name={name}
            description={description}
            restaurant={restaurant}
            category={category}
            price={price}
            image={image}
          />
       
        </View>
      </ScrollView>
    </>
  );
}
