import { View, Text, Button } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";

export default function profile() {
  const params = useLocalSearchParams();

  //in this screen, path params are available, ex: /user/123

  return (
    <View>
      <Stack.Screen options={{ title: `Profile ${params.id}` }} />

      <Text>Hello user: {params.id}</Text>

      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
