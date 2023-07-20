import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { BanknotesIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { currencyFormatter } from '../utils/currencyFormat';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFood } from '../slices/foodSlice';

const FoodCard = ({
  id,
  name,
  description,
  image,
  category,
  restaurant,
  price,
}) => {
  const navigation = useNavigation();

  let dispatch = useDispatch();

  useEffect(() => {
    // if (food.restaurant && food.restaurant.id != id) {
    //   dispatch(emptyBasket());
    // }
    dispatch(
      setFood({
        id,
        name,
        description,
        image,
        category,
        restaurant,
        price,
      })
    );
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Food', {
          id,
          name,
          description,
          image,
          category,
          restaurant,
          price,
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
          className="h-36 w-[220px] rounded-t-3xl"
          source={{ uri: urlFor(image).url() }}
        />
        {/* <Image className="h-36 w-64 rounded-t-3xl" source={imgUrl} /> */}

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-[16px] font-semibold pt-2">
            {name?.length > 25 ? name.slice(0, 25) + '...' : name}
          </Text>
          <View className="flex-row items-center space-x-4">
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
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-700 text-xs">
                {restaurant.name?.length > 12
                  ? restaurant.name.slice(0, 12) + '...'
                  : restaurant.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(FoodCard);
