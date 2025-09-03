import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home Screen! Index</Text>

        <Text style={styles.text}>Navigate with path params:</Text>

        <Link href="/users/123">/user/123</Link>
        <Link href="/users/124">/user/124</Link>
        <Link href="/users/126">/user/126</Link>

        <Text style={styles.text}>Navigate with query params:</Text>

        <Button
          onPress={() => {
            router.push({
              pathname: "/car",
              params: { id: "123" },
            });
          }}
          title="/car?id=123)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    marginTop: 16,
  },
});
