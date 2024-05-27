import { ImageBackground } from "react-native";

import backgroundImg from "../assets/background.png";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      className="flex-1"
    >
      {children}
    </ImageBackground>
  );
}
