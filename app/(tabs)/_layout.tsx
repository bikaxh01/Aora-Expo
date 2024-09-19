import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

import icons from "@/constants/icons";

interface iconProp {
  icon: any;
  name: string;
  focused: boolean;
  color: string;
}

const TabIcon = ({ icon, color, name, focused }: iconProp) => {
  return (
    <View className=" items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className=" h-6 w-6 "
      />
      <Text className={`${focused ? " font-psemibold" : " font-pregular"} text-xs`} style={{color:color}}>
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#FFA001",
        tabBarInactiveTintColor:"#CDCDE0",
        tabBarStyle:{
          backgroundColor:"#161622",
          borderTopColor:'#232533',
          borderTopWidth:1,
          height:60,
        }
      }}>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Home"
                icon={icons.home}
                focused={focused}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Create"
                icon={icons.play}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Bookmark"
                icon={icons.bookmark}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Profile"
                icon={icons.profile}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
