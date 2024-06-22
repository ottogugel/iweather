import "../styles/global.css";

import { Loading } from "../components/Loading";

import {
  useFonts,
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import { Slot } from "expo-router";
import { Background } from "../components/Background";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return <Slot />
}
