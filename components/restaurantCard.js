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
  title,
  imgUrl,
  rating,
  type,
  address,
  description,
  dishes,
  reviews,
  lng,
  lat,
  stars,
}) {
  // console.log(urlFor(imgUrl).url());
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          title,
          imgUrl,
          rating,
          type,
          address,
          description,
          dishes,
          lng,
          reviews,
          lat,
          stars,
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
        className="mr-6 bg-white rounded-3xl border my-[8px] border-black/10"
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(imgUrl).url() }}
        />
        {/* <Image className="h-36 w-64 rounded-t-3xl" source={imgUrl} /> */}

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require('../assets/images/fullStar.png')}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{stars}</Text>
              <Text className="text-gray-700"> ({rating} review)</Text> ·{' '}
              <Text className="font-semibold text-gray-700">{type}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs"> Nearby · {address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
