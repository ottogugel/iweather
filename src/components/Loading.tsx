import { ActivityIndicator } from "react-native";
import { Background } from "./Background";

export function Loading() {
  return (
    <Background>
      <ActivityIndicator className="flex-1 items-center justify-center text-blue-200" />
    </Background>
  );
}
