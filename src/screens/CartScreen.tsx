import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import OrderSummary from "../components/OrderSummary";
import { styles } from "../constants/styles";
import { CartScreenProps } from "../types";

export default function CartScreen({ cart, subtotal, deliveryFee, total, onRemove, onCheckout }: CartScreenProps): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.pageTitle}>Your Cart</Text>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}><Text style={styles.emptyEmoji}>🛒</Text><Text style={styles.emptyText}>Your cart is empty.</Text></View>
      ) : (
        <>
          {cart.map((dish, index) => (
            <View style={styles.cartRow} key={`${dish.id}-${index}`}>
              <Text style={styles.cartEmoji}>{dish.image}</Text>
              <View style={styles.flexOne}><Text style={styles.dishName}>{dish.name}</Text><Text style={styles.price}>R{dish.price.toFixed(2)}</Text></View>
              <Pressable onPress={() => onRemove(dish.id)}><Text style={styles.removeText}>REMOVE</Text></Pressable>
            </View>
          ))}
          <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
          <Pressable style={styles.primaryButton} onPress={onCheckout}><Text style={styles.primaryButtonText}>PROCEED TO CHECKOUT</Text></Pressable>
        </>
      )}
    </ScrollView>
  );
}
