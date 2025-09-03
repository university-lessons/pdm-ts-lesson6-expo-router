import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

export default function car() {
  const params = useLocalSearchParams();

  // in this screen, query params are available, ex: ?id=123

  return (
    <View>
      <Stack.Screen options={{ title: "Mustang is nice! BYD is toy!" }} />

      <Text>Car: {params.id}</Text>
    </View>
  );
}
