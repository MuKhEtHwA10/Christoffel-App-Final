// components/EditDishModal.tsx
import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, Pressable, Alert, ScrollView } from "react-native";
import { styles } from "../constants/styles";
import { EditDishModalProps, Extra } from "../types";

export default function EditDishModal({ visible, dish, onClose, onSave }: EditDishModalProps): React.JSX.Element {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [extras, setExtras] = useState<Extra[]>([]);
  
  const [newIngredient, setNewIngredient] = useState("");
  const [newExtraName, setNewExtraName] = useState("");
  const [newExtraPrice, setNewExtraPrice] = useState("");

  useEffect(() => {
    if (dish) {
      setIngredients(dish.ingredients || []);
      setExtras(dish.extras || []);
      setNewIngredient("");
      setNewExtraName("");
      setNewExtraPrice("");
    }
  }, [dish]);

  const handleAddIngredient = () => {
    const trimmed = newIngredient.trim();
    if (!trimmed) return Alert.alert("Error", "Type an ingredient first.");
    if (ingredients.some(i => i.toLowerCase() === trimmed.toLowerCase())) return Alert.alert("Error", "Already in list.");
    setIngredients([...ingredients, trimmed]);
    setNewIngredient("");
  };

  const handleAddExtra = () => {
    const trimmedName = newExtraName.trim();
    const price = parseFloat(newExtraPrice);

    if (!trimmedName) return Alert.alert("Error", "Type an extra name.");
    if (isNaN(price) || price < 0) return Alert.alert("Error", "Enter a valid price (0 for free).");
    if (extras.some(e => e.name.toLowerCase() === trimmedName.toLowerCase())) return Alert.alert("Error", "Extra already exists.");

    setExtras([...extras, { name: trimmedName, price }]);
    setNewExtraName("");
    setNewExtraPrice("");
  };

  const handleSave = () => {
    if (dish) {
      onSave({ ...dish, ingredients, extras });
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <ScrollView style={{ maxHeight: "80%" }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Manage Customizations</Text>
            <Text style={{ color: "#D6A84F", fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>{dish?.name}</Text>

            {/* INGREDIENTS SECTION */}
            <Text style={styles.inputLabel}>Base Ingredients</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
              {ingredients.map((ing, index) => (
                <Pressable key={index} style={[styles.filterChip, { margin: 4 }]} onPress={() => setIngredients(ingredients.filter((_, i) => i !== index))}>
                  <Text style={{ color: "#FFF", fontSize: 12 }}>{ing} ✕</Text>
                </Pressable>
              ))}
            </View>
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 15 }}>
              <TextInput style={[styles.modalInput, { flex: 1, marginBottom: 0 }]} value={newIngredient} onChangeText={setNewIngredient} placeholder="Add ingredient..." placeholderTextColor="#777" />
              <Pressable style={[styles.smallButton, { backgroundColor: "#D6A84F" }]} onPress={handleAddIngredient}><Text style={{ color: "#000", fontWeight: "bold" }}>ADD</Text></Pressable>
            </View>

            {/* EXTRAS SECTION */}
            <Text style={styles.inputLabel}>Available Extras (Portions/Sauces)</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
              {extras.map((ex, index) => (
                <Pressable key={index} style={[styles.filterChip, { margin: 4, borderColor: "#D6A84F" }]} onPress={() => setExtras(extras.filter((_, i) => i !== index))}>
                  <Text style={{ color: "#FFF", fontSize: 12 }}>{ex.name} (R{ex.price}) ✕</Text>
                </Pressable>
              ))}
            </View>
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 15 }}>
              <TextInput style={[styles.modalInput, { flex: 2, marginBottom: 0 }]} value={newExtraName} onChangeText={setNewExtraName} placeholder="Extra name..." placeholderTextColor="#777" />
              <TextInput style={[styles.modalInput, { flex: 1, marginBottom: 0 }]} value={newExtraPrice} onChangeText={setNewExtraPrice} keyboardType="numeric" placeholder="Price" placeholderTextColor="#777" />
              <Pressable style={[styles.smallButton, { backgroundColor: "#D6A84F" }]} onPress={handleAddExtra}><Text style={{ color: "#000", fontWeight: "bold" }}>ADD</Text></Pressable>
            </View>

            <View style={styles.modalButtons}>
              <Pressable style={[styles.modalButton, styles.cancelBtn]} onPress={onClose}><Text style={styles.cancelBtnText}>Cancel</Text></Pressable>
              <Pressable style={[styles.modalButton, styles.saveBtn]} onPress={handleSave}><Text style={styles.saveBtnText}>Save Changes</Text></Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}