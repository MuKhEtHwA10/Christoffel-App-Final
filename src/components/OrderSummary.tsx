import React from "react";
import { Text, View } from "react-native";
import { styles } from "../constants/styles";
import { SummaryProps } from "../types";

export default function OrderSummary({ subtotal, deliveryFee, total }: SummaryProps): React.JSX.Element {
  return (
    <View style={styles.summary}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Subtotal</Text>
        <Text style={styles.summaryValue}>R{subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Delivery fee</Text>
        <Text style={styles.summaryValue}>R{deliveryFee.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryLine} />
      <View style={styles.summaryRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>R{total.toFixed(2)}</Text>
      </View>
    </View>
  );
}
