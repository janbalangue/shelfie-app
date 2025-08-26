import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#ddd' }, headerTintColor: '#333' }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="About" options={{ title: "About" }} />
      <Stack.Screen name="Contact" options={{ title: "Contact" }} />
    </Stack>
  );
}
