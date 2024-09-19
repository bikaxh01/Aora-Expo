import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

interface ButtonInterface {
  title: string;
  textStyle?: string;
  handlePress: any;
  containerStyles?: string;
  isLoading?: boolean;
}


const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
  textStyle,
}: ButtonInterface) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center mt-36 ${containerStyles} ${isLoading ? 'opacity-50':''}`}
      disabled={isLoading}
    >
      <Text className={` text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
