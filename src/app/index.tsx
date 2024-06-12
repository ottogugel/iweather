import { Text, View } from "react-native";
import { Background } from "../components/Background";
import { Card } from "../components/Card";

export default function Weather() {
  return (
    <Background>
      <View className="items-center">
        <Card />
      </View>
      <View className="flex-1 items-center justify-center rounded-lg  bg-gray-800 w-80 h-72">
        <Text className=" text-white">Sensação Termica 26ºc</Text>
        <Text className=" text-white">Probabilidade de chuva 0%</Text>
        <Text className=" text-white">Velocidade do vento 8km/h</Text>
        <Text className=" text-white">Umidade do ar 40%</Text>
        <Text className=" text-white">Índice UV 5</Text>
      </View>
      <View className="flex-1 items-center justify-center rounded-lg   bg-gray-800 h-44 w-80">
        <Text className=" text-white">Next Days</Text>
      </View>
    </Background>
  );
}