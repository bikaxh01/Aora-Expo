import { View, Text, ScrollView, Image, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Href, Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleFormSubmit = () => {};
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView>
        <View className=" justify-center w-full min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className=" w-[115px] h-[135px]"
          />
          <Text className=" text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyle="mt-7"
            keyboardType="email-address"
            placeholder="example@gmail.com"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyle="mt-7"
            keyboardType="password"
            placeholder="Password"
          />
          <CustomButton
            title="Sign In"
            handlePress={handleFormSubmit}
            containerStyles="mt-20"
            isLoading={isSubmitting}
          />
          <View className=" justify-center pt-5 flex-row gap-2">
            <Text className=" text-gray-100 text-lg font-pregular">Don't have account?</Text>
             <Link href={'/sign-up' as Href<string>} className=" text-lg font-psemibold text-secondary">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
