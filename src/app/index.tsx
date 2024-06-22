import { Image, Text, View } from "react-native";
import { useState } from "react";

import { Background } from "../components/Background";

import Logo from "../assets/logo.png";
// import { Input } from "../components/Input";
import { useRouter } from "expo-router";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export default function Home() {
  const [city, setCity] = useState("");
  const router = useRouter()

  const handleSearch = () => {
    if(city.trim()) {
      router.push(`/weather?city=${city}`)
    }
  };


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
        <Input value={city} onChangeText={setCity} />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </Background>
  );
}
