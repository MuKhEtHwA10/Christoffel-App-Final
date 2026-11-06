// components/DishCard.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../constants/styles";
import { DishCardProps } from "../types";

export default function DishCard({ dish, onOpen, onAdd, isFavourite = false, onToggleFavourite }: DishCardProps): React.JSX.Element {
  return (
    <View style={styles.dishCard}>
      <Pressable onPress={() => onOpen(dish)}>
        <View style={{ position: "relative" }}>
          <Text style={styles.dishImage}>{dish.image}</Text>
          
          {/* Heart Button */}
          <Pressable 
            style={{ position: "absolute", top: 5, right: 5, backgroundColor: "rgba(0,0,0,0.6)", borderRadius: 20, padding: 8, zIndex: 10 }} 
            onPress={(e) => {
              e.stopPropagation();
              onToggleFavourite?.(dish);
            }}
          >
            <Text style={{ fontSize: 20, color: isFavourite ? "#D6A84F" : "#FFF" }}>
              {isFavourite ? "♥" : "♡"}
            </Text>
          </Pressable>
        </View>
        
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text style={styles.cardDescription}>{dish.description}</Text>
        <Text style={styles.price}>R{dish.price.toFixed(2)}</Text>
      </Pressable>
      <Pressable style={styles.addButton} onPress={() => onAdd(dish)}>
        <Text style={styles.addButtonText}>+ ADD</Text>
      </Pressable>
    </View>
  );
}