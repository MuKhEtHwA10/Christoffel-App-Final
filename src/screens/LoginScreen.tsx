// screens/LoginScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { LoginScreenProps } from "../types";

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps): React.JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 1. Validation
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (password.length < 5) {
      Alert.alert("Error", "Password must be at least 5 characters long.");
      return;
    }

    // 2. Success - triggers the callback to move to Home screen
    Alert.alert("Welcome!", "Login successful.");
    onLoginSuccess();
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: "#090909" }} 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={loginStyles.container}>
        <Text style={loginStyles.logo}>THE CULINARY EFFECT</Text>
        <Text style={loginStyles.heading}>Welcome Back</Text>
        <Text style={loginStyles.subHeading}>Sign in to continue ordering.</Text>

        <Text style={loginStyles.label}>EMAIL ADDRESS</Text>
        <TextInput 
          style={loginStyles.input} 
          placeholder="john@example.com" 
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={loginStyles.label}>PASSWORD</Text>
        <TextInput 
          style={loginStyles.input} 
          placeholder="••••••••" 
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={loginStyles.button} onPress={handleLogin}>
          <Text style={loginStyles.buttonText}>LOG IN</Text>
        </Pressable>

        <Pressable onPress={() => Alert.alert("Forgot Password", "Password reset link sent to your email.")}>
          <Text style={loginStyles.forgotText}>Forgot Password?</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const loginStyles = StyleSheet.create({
  container: { padding: 30, flexGrow: 1, justifyContent: "center" },
  logo: { color: "#D6A84F", fontSize: 14, fontWeight: "bold", letterSpacing: 3, textAlign: "center", marginBottom: 40 },
  heading: { color: "#FFF", fontSize: 32, fontWeight: "bold", marginBottom: 10 },
  subHeading: { color: "#888", fontSize: 15, marginBottom: 40 },
  label: { color: "#D6A84F", fontSize: 12, fontWeight: "bold", marginBottom: 8, marginTop: 15 },
  input: { backgroundColor: "#242424", color: "#FFF", borderRadius: 8, padding: 16, fontSize: 16 },
  button: { backgroundColor: "#D6A84F", padding: 18, borderRadius: 8, alignItems: "center", marginTop: 30 },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 15, letterSpacing: 1 },
  forgotText: { color: "#D6A84F", textAlign: "center", marginTop: 20, fontSize: 14 },
});