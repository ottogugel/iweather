import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { white } from "tailwindcss/colors";

export function BackButton() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View className="absolute top-4 left-2">
      <TouchableOpacity onPress={handleGoBack} className="p-5">
        <Entypo name="chevron-thin-left" color={white} size={28} />
      </TouchableOpacity>
    </View>
  );
}
