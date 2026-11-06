// screens/ProfileScreen.tsx
import React from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../constants/styles";
import { ProfileScreenProps } from "../types";

export default function ProfileScreen({ onNavigate, onLogout }: ProfileScreenProps): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.pageTitle}>My Profile</Text>

      <View style={[styles.orderCard, { alignItems: "center", paddingVertical: 30 }]}>
        <View style={styles.successCircle}>
          <Text style={{ color: "#D6A84F", fontSize: 45 }}>👤</Text>
        </View>
        <Text style={styles.orderValue}>John Doe</Text>
        <Text style={{ color: "#999", fontSize: 12 }}>john.doe@email.com</Text>
      </View>

      <Text style={[styles.formLabel, { marginTop: 20 }]}>ACCOUNT</Text>

      <Pressable style={styles.menuRow} onPress={() => onNavigate("favourites")}>
        <Text style={{ fontSize: 22, marginRight: 12 }}>♡</Text>
        <View style={styles.menuInfo}>
          <Text style={styles.dishName}>My Favourites</Text>
          <Text style={styles.category}>Your saved dishes</Text>
        </View>
        <Text style={{ color: "#D6A84F", fontSize: 20 }}>›</Text>
      </Pressable>

      <Pressable style={styles.menuRow} onPress={() => onNavigate("cart")}>
        <Text style={{ fontSize: 22, marginRight: 12 }}>🛒</Text>
        <View style={styles.menuInfo}>
          <Text style={styles.dishName}>My Cart</Text>
          <Text style={styles.category}>View items in your cart</Text>
        </View>
        <Text style={{ color: "#D6A84F", fontSize: 20 }}>›</Text>
      </Pressable>

      <Pressable style={styles.menuRow} onPress={() => onNavigate("booking")}>
        <Text style={{ fontSize: 22, marginRight: 12 }}>📅</Text>
        <View style={styles.menuInfo}>
          <Text style={styles.dishName}>Book a Table</Text>
          <Text style={styles.category}>Manage table reservations</Text>
        </View>
        <Text style={{ color: "#D6A84F", fontSize: 20 }}>›</Text>
      </Pressable>

      <Pressable style={styles.menuRow} onPress={() => onNavigate("location")}>
        <Text style={{ fontSize: 22, marginRight: 12 }}>📍</Text>
        <View style={styles.menuInfo}>
          <Text style={styles.dishName}>Restaurant Location</Text>
          <Text style={styles.category}>Find us</Text>
        </View>
        <Text style={{ color: "#D6A84F", fontSize: 20 }}>›</Text>
      </Pressable>

      <Pressable
        style={[styles.secondaryButton, { borderColor: "#E57373", marginTop: 30 }]}
        onPress={() =>
          Alert.alert("Logout", "Are you sure you want to log out?", [
            { text: "Cancel" },
            { text: "Logout", style: "destructive", onPress: onLogout },
          ])
        }
      >
        <Text style={[styles.secondaryButtonText, { color: "#E57373" }]}>LOG OUT</Text>
      </Pressable>
    </ScrollView>
  );
}