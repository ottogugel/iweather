import { Image, Text, View } from "react-native";
import { Background } from "../components/Background";
import Logo from '../assets/logo.png'
import { Input } from "../components/Input";

export default function Home() {
  return (
    <Background>
      <Image source={Logo} className="top-10 left-28" />
      <View className="flex items-center justify-center mt-60">
        <Text className="text-2xl text-zinc-50">Welcome to iWeather</Text>
        <Text className="text-sm text-gray-200">
          Choose a location to see the weather forecast
        </Text>
      </View>
      <View className="flex items-center mt-8">
        <Input />
      </View>
    </Background>
  );
}