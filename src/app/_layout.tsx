import "../styles/global.css";

import { Slot } from "expo-router";

import { Loading } from "../components/Loading";

import {
  useFonts,
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";

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
