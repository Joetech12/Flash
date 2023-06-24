import { View, Text } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { Pressable } from 'react-native';

const Input = ({
  showSearchIcon,
  pressable,
  onPress,
  backButton,
  style,
  ...props
}) => {
  const renderInput = () => (
    <View className="flex-row" style={[style]}>
      {showSearchIcon && <Icon.Search height="25" width="25" stroke="gray" />}
      <View className="flex-1">
        <TextInput
          {...props}
          className="ml-2 text-red-500"
          keyboardType="default"
          editable={!pressable}
          // placeholderTextColor={themeColors.text}
        />
      </View>
    </View>
  );

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }

  return renderInput();
};

Input.defaultProps = {
  placeholder: 'Search Meal',
  showSearchIcon: true,
};

export default React.memo(Input);
