import { View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';

export default function Header() {
  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2 ">
      <View>
        <Image
          className="h-36 w-64 rounded-3xl"
          style={{ width: 50, height: 50, resizeMode: 'contain' }}
          source={require('../assets/icon.png')}
        />
      </View>
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <Icon.Search height="25" width="25" stroke="gray" />
        <TextInput
          placeholder="Restaurants"
          className="ml-2 flex-1"
          keyboardType="default"
        />
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
          <Icon.MapPin height="20" width="20" stroke="gray" />
          <Text className="text-gray-600">Lagos, NG</Text>
        </View>
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
