// screens/MenuScreen.tsx
import React, { useMemo } from "react";
import { Pressable, ScrollView, Text, TextInput, View, Alert } from "react-native";
import { styles } from "../constants/styles";
import { MenuScreenProps } from "../types";

export default function MenuScreen({ 
  dishes, search, setSearch, filterCategory, setFilterCategory, onOpenDish, onAddToCart, onEditDish, onDeleteDish 
}: MenuScreenProps): React.JSX.Element {

  // Calculate filtered dishes
  const filteredDishes = useMemo(() => {
    return dishes.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = filterCategory === "All" || dish.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [dishes, search, filterCategory]);

 // Calculate Statistics
const stats = useMemo(() => {
  const totalItems = dishes.length;
  const totalPrice = dishes.reduce((sum, dish) => sum + dish.price, 0);
  const avgPrice = totalItems > 0 ? totalPrice / totalItems : 0;
  
  // Count how many items are in each category
  const counts: Record<"Starter" | "Main" | "Dessert" | "Drink", number> = {
    Starter: 0,
    Main: 0,
    Dessert: 0,
    Drink: 0,
  };
  dishes.forEach(d => counts[d.category]++);

  return { totalItems, avgPrice, counts };
}, [dishes]); // This dependency array ensures it recalculates whenever 'dishes' changes

  const handleDelete = (id: number, name: string) => {
    Alert.alert(
      "Delete Item",
      `Are you sure you want to delete "${name}"?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => onDeleteDish(id) }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.pageTitle}>Chef's Menu Manager</Text>
      
     <View style={styles.statsContainer}>
  <Text style={styles.statsTitle}>Menu Overview</Text>
  
  <View style={styles.statsRow}>
    <Text style={styles.statsLabel}>Total Items:</Text>
    <Text style={styles.statsValue}>{stats.totalItems}</Text>
  </View>
  
  <View style={styles.statsRow}>
    <Text style={styles.statsLabel}>Average Price:</Text>
    <Text style={styles.statsValue}>R{stats.avgPrice.toFixed(2)}</Text>
  </View>
  
  <View style={styles.statsRow}>
    <Text style={styles.statsLabel}>Starters:</Text>
    <Text style={styles.statsValue}>{stats.counts.Starter}</Text>
  </View>
  
  <View style={styles.statsRow}>
    <Text style={styles.statsLabel}>Mains:</Text>
    <Text style={styles.statsValue}>{stats.counts.Main}</Text>
  </View>
  
  <View style={styles.statsRow}>
    <Text style={styles.statsLabel}>Desserts:</Text>
    <Text style={styles.statsValue}>{stats.counts.Dessert}</Text>
  </View>

  <View style={styles.statsRow}>
    <Text style={styles.statsLabel}>Drinks:</Text>
    <Text style={styles.statsValue}>{stats.counts.Drink}</Text>
  </View>
</View>

      {/* 2. Search and Filter */}
      <TextInput 
        style={styles.searchInput} 
        placeholder="Search for a dish..." 
        placeholderTextColor="#999" 
        value={search} 
        onChangeText={setSearch} 
      />
      
      <View style={styles.filterContainer}>
  {["All", "Starter", "Main", "Dessert", "Drink"].map((cat) => ( // Added Drink
    <Pressable 
      key={cat} 
      style={[styles.filterChip, filterCategory === cat && styles.activeFilterChip]}
      onPress={() => setFilterCategory(cat)}
    >
      <Text style={[styles.filterText, filterCategory === cat && styles.activeFilterText]}>
        {cat}
      </Text>
    </Pressable>
  ))}
</View>

      {filteredDishes.length === 0 ? (
        <Text style={{ color: "#888", textAlign: "center", marginTop: 20 }}>No dishes found.</Text>
      ) : (
        filteredDishes.map((dish) => (
          <View style={styles.menuRow} key={dish.id}>
            <Text style={styles.menuImage}>{dish.image}</Text>
            <View style={styles.menuInfo}>
              <Text style={styles.dishName}>{dish.name}</Text>
              <Text style={styles.category}>{dish.category}</Text>
              <Text style={styles.price}>R{dish.price.toFixed(2)}</Text>
            </View>
            
            {/* 1. Manage Menu Items (Edit/Delete) */}
            <View style={{ alignItems: "flex-end" }}>
              <View style={styles.actionRow}>
                <Pressable style={styles.smallButton} onPress={() => onEditDish(dish)}>
                  <Text style={styles.smallButtonText}>EDIT</Text>
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={() => handleDelete(dish.id, dish.name)}>
                  <Text style={styles.deleteButtonText}>DEL</Text>
                </Pressable>
              </View>
              <View style={styles.actionRow}>
                <Pressable style={styles.smallButton} onPress={() => onOpenDish(dish)}>
                  <Text style={styles.smallButtonText}>VIEW</Text>
                </Pressable>
                <Pressable style={styles.addButton} onPress={() => onAddToCart(dish)}>
                  <Text style={styles.addButtonText}>ADD</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}
