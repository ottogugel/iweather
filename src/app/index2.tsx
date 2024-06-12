import { Image, Text, View } from "react-native";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { router } from "expo-router";

import { Background } from "../components/Background";
import { Input } from "../components/Input";

import Logo from "../assets/logo.png";
export default function Home() {
  return (
    <Background>
      <Image source={Logo} className="top-10 left-28" />
      <View className="flex items-center justify-center mt-60">
        <Text>
          <Text className="text-2xl text-zinc-50">Welcome to</Text>
          <Text className="text-2xl text-bluelight-100"> TypeWeather</Text>
        </Text>
        <Text className="text-sm text-gray-200 mt-1">
          Choose a location to see the weather forecast
        </Text>
      </View>
      <View className="flex items-center mt-8">
        <Input />
      </View>
    </Background>
  );
}
