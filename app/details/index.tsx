import { useSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Details() {
  const { name, age } = useSearchParams();

  return (
    <View>
      <Text>Details</Text>
      <Text>name: {name}</Text>
      <Text>age: {age}</Text>
    </View>
  );
}
