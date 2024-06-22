import { Pressable, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <Pressable
      activeOpacity={0.7}
      className="flex h-12 w-20 mt-10 bg-blue-500 items-center justify-center rounded-sm"
      {...rest}
    >
      <Text className="text-white text-sm font-semiBold uppercase">
        {title}
      </Text>
    </Pressable>
  );
}
