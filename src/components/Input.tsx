import { TextInput } from "react-native";
import { colors } from "../styles/colors";

export function Input() {
  return (
    <TextInput
      className="border border-b border-white rounded-lg w-28 h-10 text-center text-xs"
      placeholder="Search location"
      placeholderTextColor={colors.gray[500]}
    />
  );
}