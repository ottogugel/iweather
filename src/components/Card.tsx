import { Text, View } from "react-native";

export function Card() {
  return (
    <View className="flex items-center justify-center rounded-lg bg-gray-800 w-80 h-72  ">
      <Text className=" text-white">João Pessoa, PB</Text>
      <Text className=" text-white">Segunda-feira, 15 de maio de 2023</Text>
      <Text className=" text-white">28ºc</Text>
      <Text className=" text-white">26ºc/32ºc</Text>
      <Text className=" text-white">Poucas Nuvens</Text>
    </View>
  );
}