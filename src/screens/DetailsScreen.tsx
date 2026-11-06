// screens/DetailsScreen.tsx
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../constants/styles";
import { DetailsScreenProps, Extra } from "../types";

export default function DetailsScreen({ dish, onBack, onAddToCart, isFavourite = false, onToggleFavourite }: DetailsScreenProps): React.JSX.Element {
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);

  const toggleExtra = (extra: Extra) => {
    if (selectedExtras.find(e => e.name === extra.name)) {
      setSelectedExtras(selectedExtras.filter(e => e.name !== extra.name));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const extrasTotal = selectedExtras.reduce((sum, ex) => sum + ex.price, 0);
  const finalPrice = dish.price + extrasTotal;

  const handleAddToCart = () => {
    const customDish = { ...dish, price: finalPrice, name: `${dish.name}${selectedExtras.length > 0 ? " (Custom)" : ""}` };
    onAddToCart(customDish);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Pressable onPress={onBack}><Text style={styles.backButton}>‹ Back</Text></Pressable>
      
      <View style={styles.detailImage}>
        <Text style={styles.detailEmoji}>{dish.image}</Text>
        <Pressable 
          style={{ position: "absolute", top: 15, right: 15, backgroundColor: "#242424", borderRadius: 30, padding: 12 }} 
          onPress={() => onToggleFavourite?.(dish)}
        >
          <Text style={{ fontSize: 26, color: isFavourite ? "#D6A84F" : "#FFF" }}>
            {isFavourite ? "♥" : "♡"}
          </Text>
        </Pressable>
      </View>
      
      <Text style={styles.detailTitle}>{dish.name}</Text>
      <Text style={styles.category}>{dish.category}</Text>
      <Text style={styles.detailDescription}>{dish.description}</Text>

      <Text style={{ color: "#D6A84F", fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>INGREDIENTS</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 20 }}>
        {(dish.ingredients || []).map((ing, idx) => (
          <View key={idx} style={{ backgroundColor: "#242424", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 15, margin: 4 }}>
            <Text style={{ color: "#CCC", fontSize: 12 }}>{ing}</Text>
          </View>
        ))}
      </View>

      {dish.extras && dish.extras.length > 0 && (
        <>
          <Text style={{ color: "#D6A84F", fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>CUSTOMIZE YOUR MEAL</Text>
          {dish.extras.map((extra, idx) => {
            const isSelected = !!selectedExtras.find(e => e.name === extra.name);
            return (
              <Pressable 
                key={idx} 
                style={[styles.paymentOption, { marginBottom: 8 }, isSelected && styles.selectedPayment]}
                onPress={() => toggleExtra(extra)}
              >
                <Text style={styles.paymentText}>{extra.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Text style={{ color: "#D6A84F", fontWeight: "bold" }}>+ R{extra.price.toFixed(2)}</Text>
                  <Text style={{ color: isSelected ? "#D6A84F" : "#666", fontSize: 20 }}>{isSelected ? "☑" : "☐"}</Text>
                </View>
              </Pressable>
            );
          })}
        </>
      )}

      <View style={[styles.detailBottom, { marginTop: 30 }]}>
        <Text style={styles.detailPrice}>R{finalPrice.toFixed(2)}</Text>
        <Pressable style={styles.primaryButton} onPress={handleAddToCart}>
          <Text style={styles.primaryButtonText}>ADD TO CART</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}