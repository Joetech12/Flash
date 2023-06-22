import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';

export default function RestaurantCard({
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
}) {
  // console.log(urlFor(imgUrl).url());
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Restaurant', {
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
        });
      }}
    >
      <View
        style={{
          //   shadowColor: themeColors.bgColor(0.2),
          //   shadowOpacity: 0.26,
          //   shadowOffset: { width: 0, height: 2 },
          //   shadowRadius: 7,
          elevation: 3,
          //   backgroundColor: 'white',
        }}
        className="mr-[16px] bg-white rounded-3xl border my-[8px] border-black/10"
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(image).url() }}
        />
        {/* <Image className="h-36 w-64 rounded-t-3xl" source={imgUrl} /> */}

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-[16px] font-semibold pt-2">{name}</Text>
          <View className="flex-row items-center space-x-4">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require('../assets/images/fullStar.png')}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-gray-700">{rating}</Text>
                <Text className="text-gray-700"> ({reviews} review)</Text>
                {/* <Text className="font-semibold text-gray-700">{type}</Text> */}
              </Text>
            </View>
            <View className="flex-row items-center  space-x-1">
              <Icon.Clock color="gray" width={15} height={15} />
              <Text className="text-xs">
                <Text className="text-gray-700">{delivery_time}</Text>
              </Text>
            </View>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              {address?.length > 38 ? address.slice(0, 38) + '...' : address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
