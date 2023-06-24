import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { ShoppingBagIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../slices/basketSlice';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import Input from './Input';
import { XMarkIcon } from 'react-native-heroicons/outline';

export default function Header({ pressable, onPress, backButton, showSearchIcon }) {
  const basketItems = useSelector(selectBasketItems);

  const navigation = useNavigation();

  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2 ">
      <View>
        {backButton ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="rounded-full p-3 m-1 bg-neutral-500"
          >
            <XMarkIcon size="25" color="white" />
          </TouchableOpacity>
        ) : (
          <Image
            className="h-36 w-64 rounded-3xl"
            style={{ width: 50, height: 50, resizeMode: 'contain' }}
            source={require('../assets/icon.png')}
          />
        )}
      </View>
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <View className="flex-1">
          <Input pressable={pressable} onPress={onPress} showSearchIcon={showSearchIcon} backButton />
        </View>
        {!backButton && (
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View className="flex-row items-center space-x-1 mr-[10px] border-0 border-l-2 pl-2 border-l-gray-300 relative">
              {/* <Icon.MapPin height="20" width="20" stroke="gray" />
                      <Text className="text-gray-600">Lagos, NG</Text> */}
              <ShoppingBagIcon height="20" width="20" stroke="gray" />
              <View
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="rounded-full absolute top-[-10] right-[-10] h-[20px] w-[20px] flex-row items-center justify-center"
              >
                <Text className="text-[10px] text-white">
                  {basketItems.length}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
      {/* <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View> */}
    </View>
  );
}
