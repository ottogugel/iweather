import { Text, View, ScrollView } from "react-native";
import { Card } from "../components/Card";
import { Background } from "../components/Background";
import React from "react";

export default function Weather() {
  return (
    <Background>
      <ScrollView>
        <Card />
      </ScrollView>
    </Background>
  );
}
