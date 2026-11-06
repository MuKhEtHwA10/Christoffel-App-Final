// screens/LocationScreen.tsx
import React from "react";
import { Pressable, ScrollView, Text, View, Linking, Alert } from "react-native";
import { styles } from "../constants/styles";
import { LocationScreenProps } from "../types";

export default function LocationScreen({ onBack }: LocationScreenProps): React.JSX.Element {
  
  const handleCall = () => {
    Linking.openURL("tel:+27111234567").catch(() => Alert.alert("Error", "Could not open dialer."));
  };

  const handleEmail = () => {
    Linking.openURL("mailto:reservations@culinaryeffect.com").catch(() => Alert.alert("Error", "Could not open email."));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Pressable onPress={onBack}>
        <Text style={styles.backButton}>‹ Back to Home</Text>
      </Pressable>
      
      <Text style={styles.pageTitle}>Find Us</Text>
      
      <View style={styles.banner}>
        <Text style={styles.bannerEmoji}>📍</Text>
        <View style={styles.flexOne}>
          <Text style={styles.bannerTitle}>The Culinary Effect</Text>
          <Text style={styles.bannerText}>123 Gourmet Avenue, Sandton, Johannesburg</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>OPENING HOURS</Text>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Monday - Thursday</Text>
        <Text style={styles.summaryValue}>11:00 - 22:00</Text>
      </View>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Friday - Saturday</Text>
        <Text style={styles.summaryValue}>11:00 - 23:30</Text>
      </View>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Sunday</Text>
        <Text style={styles.summaryValue}>11:00 - 21:00</Text>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 25 }]}>CONTACT US</Text>
      
      <Pressable style={styles.primaryButton} onPress={handleCall}>
        <Text style={styles.primaryButtonText}>📞 CALL US</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={handleEmail}>
        <Text style={styles.secondaryButtonText}>✉️ EMAIL US</Text>
      </Pressable>
    </ScrollView>
  );
}