import React from "react";
import { Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import * as Font from "expo-font";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

const BusImage = require("@/assets/images/iconsNavigate/buslight.png");
const CameraImage = require("@/assets/images/iconsNavigate/camerasecuritylight.png");
const TempImage = require("@/assets/images/iconsNavigate/temperaturelight.png");
const RadioImage = require("@/assets/images/iconsNavigate/heatlight.png");

const fonts = () =>
  Font.loadAsync({
    "mt-medium": require("@/assets/fonts/Montserrat-Medium.ttf"),
  });

const TabBarIcon = ({ color, source }) => (
  <Image
    source={source}
    style={{ width: 24, height: 24, tintColor: color }} // Измените размер и цвет, если необходимо
  />
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Транспорт",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={BusImage} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Камеры",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={CameraImage} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Температура",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={TempImage} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Радиаторы",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={RadioImage} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

//name="code"
