import { View, Text, ScrollView, Image, Button, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Href, Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";
import { enableLayoutAnimations } from "react-native-reanimated";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async () => {

    if (!form.email || !form.password || !form.username) {
     return  Alert.alert("ERROR", "Fill all the fields");
    }

    try {
      setIsSubmitting(true)
      const user = await createUser(form.email,form.password,form.username)
       router.push('/home')
    } catch (error) {
      console.log(error);
      Alert.alert("ERROR", "Something Went Wrong");
    }finally{
      setIsSubmitting(false)
    }
  };
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
            Sign Up to Aora
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
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: string) => setForm({ ...form, username: e })}
            otherStyle="mt-7"
            keyboardType="username"
            placeholder="username"
          />
          <CustomButton
            title="Sign Up"
            handlePress={handleFormSubmit}
            containerStyles="mt-20"
            isLoading={isSubmitting}
          />
          <View className=" justify-center pt-5 flex-row gap-2">
            <Text className=" text-gray-100 text-lg font-pregular">
              Already have account?
            </Text>
            <Link
              href={"/sign-in" as Href<string>}
              className=" text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
