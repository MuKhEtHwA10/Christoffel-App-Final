// screens/BookingScreen.tsx
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View, Alert } from "react-native";
import { styles } from "../constants/styles";
import { BookingScreenProps } from "../types";

export default function BookingScreen({ onBack }: BookingScreenProps): React.JSX.Element {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleBooking = () => {
    // 4. Improve validation and user feedback
    if (!name.trim() || !date.trim() || !guests.trim()) {
      Alert.alert("Incomplete Form", "Please fill in all the fields to book a table.");
      return;
    }

    const guestCount = parseInt(guests, 10);
    if (isNaN(guestCount) || guestCount <= 0 || guestCount > 20) {
      Alert.alert("Invalid Number", "Please enter a valid number of guests (1-20).");
      return;
    }

    // Success feedback
    Alert.alert(
      "Booking Confirmed! 🎉",
      `Thank you, ${name}. Your table for ${guestCount} guests on ${date} has been booked.`,
      [{ text: "Great!", onPress: onBack }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Pressable onPress={onBack}>
        <Text style={styles.backButton}>‹ Back to Home</Text>
      </Pressable>
      
      <Text style={styles.pageTitle}>Book a Table</Text>
      <Text style={{ color: "#AAA", marginBottom: 20 }}>
        Reserve your spot for an unforgettable dining experience.
      </Text>

      <Text style={styles.formLabel}>YOUR NAME</Text>
      <TextInput 
        style={styles.addressInput} 
        placeholder="e.g. John Doe" 
        placeholderTextColor="#999" 
        value={name} 
        onChangeText={setName} 
      />

      <Text style={styles.formLabel}>DATE & TIME</Text>
      <TextInput 
        style={styles.addressInput} 
        placeholder="e.g. 25 Dec, 18:30" 
        placeholderTextColor="#999" 
        value={date} 
        onChangeText={setDate} 
      />

      <Text style={styles.formLabel}>NUMBER OF GUESTS</Text>
      <TextInput 
        style={styles.addressInput} 
        placeholder="e.g. 2" 
        placeholderTextColor="#999" 
        keyboardType="numeric" 
        value={guests} 
        onChangeText={setGuests} 
      />

      <Pressable style={styles.primaryButton} onPress={handleBooking}>
        <Text style={styles.primaryButtonText}>CONFIRM BOOKING</Text>
      </Pressable>
    </ScrollView>
  );
}