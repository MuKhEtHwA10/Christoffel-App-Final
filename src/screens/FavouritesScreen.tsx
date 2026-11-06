// screens/FavouritesScreen.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import DishCard from "../components/DishCard";
import { styles } from "../constants/styles";
import { FavouritesScreenProps } from "../types";

export default function FavouritesScreen({ favouriteDishes, onOpenDish, onAddToCart, onToggleFavourite }: FavouritesScreenProps): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.pageTitle}>Your Favourites</Text>
      {favouriteDishes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>♡</Text>
          <Text style={styles.emptyText}>No favourites yet.</Text>
          <Text style={{ color: "#888", marginTop: 8, textAlign: "center" }}>
            Tap the heart icon on any dish to save it here.
          </Text>
        </View>
      ) : (
        <View style={styles.dishGrid}>
          {favouriteDishes.map((dish) => (
            <DishCard 
              key={dish.id} 
              dish={dish} 
              onOpen={onOpenDish} 
              onAdd={onAddToCart} 
              isFavourite={true}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}