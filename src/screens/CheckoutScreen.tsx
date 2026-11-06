import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import OrderSummary from "../components/OrderSummary";
import { styles } from "../constants/styles";
import { CheckoutScreenProps, PaymentMethod } from "../types";

export default function CheckoutScreen({ subtotal, deliveryFee, total, paymentMethod, setPaymentMethod, onBack, onPlaceOrder }: CheckoutScreenProps): React.JSX.Element {
  const methods: PaymentMethod[] = ["Credit Card", "Debit Card", "Cash"];
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Pressable onPress={onBack}><Text style={styles.backButton}>‹ Back to Cart</Text></Pressable>
      <Text style={styles.pageTitle}>Checkout</Text>
      <Text style={styles.formLabel}>DELIVERY OR COLLECTION</Text>
      <View style={styles.deliveryToggle}><Text style={styles.selectedToggle}>Delivery</Text><Text style={styles.unselectedToggle}>Collect</Text></View>
      <Text style={styles.formLabel}>DELIVERY ADDRESS</Text>
      <TextInput style={styles.addressInput} placeholder="Enter your delivery address" placeholderTextColor="#999" />
      <Text style={styles.formLabel}>PAYMENT METHOD</Text>
      {methods.map((method) => (
        <Pressable key={method} style={[styles.paymentOption, paymentMethod === method && styles.selectedPayment]} onPress={() => setPaymentMethod(method)}>
          <Text style={styles.paymentText}>{method}</Text><Text style={styles.radio}>{paymentMethod === method ? "●" : "○"}</Text>
        </Pressable>
      ))}
      <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
      <Pressable style={styles.primaryButton} onPress={onPlaceOrder}><Text style={styles.primaryButtonText}>CONFIRM AND PAY R{total.toFixed(2)}</Text></Pressable>
    </ScrollView>
  );
}
