import { TextInput } from "react-native";
import { colors } from "../styles/colors";

export function Input({...rest}) {
  return (
    <TextInput
      className="bg-bluedark-100 rounded-lg w-80 h-16 text-sm pl-5 text-gray-100 focus:border focus:border-bluelight-100"
      placeholder="Search location"
      placeholderTextColor={colors.gray[500]}
      {...rest}
    />
  );
}