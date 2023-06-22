import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../api';
import { urlFor } from '../sanity';
import { themeColors } from '../theme';
import { categories } from '../constants';

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  //   const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        // className="p-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories?.map((category, index) => {
          let isActive = category._id == selectedCategory;
          //   let activeColor = themeColors.text;
          let btnClass = isActive ? 'bg-[#A52A2A]' : ' bg-gray-200';
          let textClass = isActive
            ? 'text-[#A52A2A] font-semibold'
            : ' text-gray-500';
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => onCategoryPress(category._id)}
                className={'p-1 rounded-full shadow ' + btnClass}
              >
                {category._id == 'All' ? (
                  <Image
                    style={{ width: 45, height: 45 }}
                    source={require('../assets/icon.png')}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    style={{ width: 45, height: 45 }}
                    source={{
                      uri: urlFor(category.image).url(),
                    }}
                    className="rounded-full"
                  />
                )}
              </TouchableOpacity>
              <Text className={'text-sm ' + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default React.memo(Categories);
