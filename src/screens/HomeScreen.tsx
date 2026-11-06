// screens/HomeScreen.tsx
import React from "react";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import DishCard from "../components/DishCard";
import QuickAction from "../components/QuickAction";
import { styles } from "../constants/styles";
import { HomeScreenProps } from "../types";

export default function HomeScreen({ dishes, favourites, onToggleFavourite, onNavigate, onOpenDish, onAddToCart }: HomeScreenProps): React.JSX.Element {
  return (
    <ImageBackground
      source={require("../../assets/restaurant-background.png")}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.logo}>THE CULINARY EFFECT</Text>
          <Text style={styles.headerIcon}>♡</Text>
        </View>
        <Text style={styles.greeting}>GOOD EVENING!</Text>
        <Text style={styles.heading}>Discover your next dining experience.</Text>
        <View style={styles.banner}>
          <Text style={styles.bannerEmoji}>🍽️</Text>
          <View style={styles.flexOne}>
            <Text style={styles.bannerTitle}>Flavour Worth Remembering</Text>
            <Text style={styles.bannerText}>Fresh ingredients and unforgettable meals.</Text>
          </View>
        </View>
        <View style={styles.quickActions}>
          <QuickAction icon="📖" title="Menu" onPress={() => onNavigate("menu")} />
          <QuickAction icon="🛒" title="Order Now" onPress={() => onNavigate("cart")} />
          <QuickAction icon="📅" title="Book a Table" onPress={() => onNavigate("booking")} />
          <QuickAction icon="📍" title="Find Us" onPress={() => onNavigate("location")} />
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>SIGNATURE SELECTION</Text>
          <Pressable onPress={() => onNavigate("menu")}><Text style={styles.seeAll}>SEE ALL</Text></Pressable>
        </View>
        <View style={styles.dishGrid}>
          {dishes.slice(0, 4).map((dish) => (
            <DishCard 
              key={dish.id} 
              dish={dish} 
              onOpen={onOpenDish} 
              onAdd={onAddToCart}
              isFavourite={favourites.includes(dish.id)}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}