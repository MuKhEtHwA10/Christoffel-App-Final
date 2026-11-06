// screens/SplashScreen.tsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SplashScreenProps } from "../types";

export default function SplashScreen({ onFinish }: SplashScreenProps): React.JSX.Element {
  useEffect(() => {
    // Wait 2.5 seconds, then trigger the onFinish function
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={splashStyles.container}>
      {/* You can replace this with an <Image> if you have a logo */}
      <Text style={splashStyles.logo}>🍽️</Text>
      <Text style={splashStyles.title}>THE CULINARY EFFECT</Text>
      <Text style={splashStyles.subtitle}>Good Food. Lasting Memories.</Text>
    </View>
  );
}

const splashStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#090909", justifyContent: "center", alignItems: "center" },
  logo: { fontSize: 80, marginBottom: 20 },
  title: { color: "#D6A84F", fontSize: 24, fontWeight: "bold", letterSpacing: 3, textAlign: "center" },
  subtitle: { color: "#888", fontSize: 14, marginTop: 10, letterSpacing: 1 },
});