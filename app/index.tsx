import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native";

export default function App() {
  const router = useRouter();

  const handleLinkWithParams = () => {
    router.push({
      pathname: "/details",
      params: {
        name: "fulano",
        age: 50,
      },
    });
  };

  return (
    <>
      <Text>
        Example link (without params):
        <Link href="/details"> --Click-me for Details-- </Link>
      </Text>

      <Button onPress={handleLinkWithParams} title="with args" />
      <StatusBar style="auto" />
    </>
  );
}
