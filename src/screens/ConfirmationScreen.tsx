import React from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../constants/styles";
import { ConfirmationScreenProps } from "../types";

export default function ConfirmationScreen({ total, onBackHome }: ConfirmationScreenProps): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.confirmationContainer}>
      <Text style={styles.confirmationLogo}>THE CULINARY EFFECT</Text>
      <View style={styles.successCircle}><Text style={styles.successIcon}>✓</Text></View>
      <Text style={styles.successTitle}>Payment Successful!</Text>
      <Text style={styles.successMessage}>Thank you for your order. Your payment has been successfully processed.</Text>
      <View style={styles.orderCard}>
        <Text style={styles.orderLabel}>ORDER NUMBER</Text><Text style={styles.orderValue}>TCE-1049</Text>
        <Text style={styles.orderLabel}>ORDER TOTAL</Text><Text style={styles.orderValue}>R{total.toFixed(2)}</Text>
        <Text style={styles.orderLabel}>ESTIMATED PREPARATION TIME</Text><Text style={styles.orderValue}>25–35 minutes</Text>
      </View>
      <Pressable style={styles.primaryButton} onPress={() => Alert.alert("Tracking", "Your order is being prepared.")}><Text style={styles.primaryButtonText}>TRACK MY ORDER</Text></Pressable>
      <Pressable style={styles.secondaryButton} onPress={onBackHome}><Text style={styles.secondaryButtonText}>BACK TO HOME</Text></Pressable>
    </ScrollView>
  );
}
