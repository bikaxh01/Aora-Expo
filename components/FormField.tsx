import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
interface FormInterface {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyle: string;
  keyboardType: string;
  placeholder: string;
}
const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyle,
  placeholder,
  keyboardType,
}: FormInterface) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className=" text-base text-gray-100 font-pmedium">{title}</Text>
      <View className=" w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center border-2 border-black-200 flex-row">
        <TextInput
          className=" flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className=" w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
