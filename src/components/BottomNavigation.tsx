// components/BottomNavigation.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../constants/styles";
import { NavItemProps, NavigationProps } from "../types";

function NavItem({ icon, title, active = false, onPress }: NavItemProps): React.JSX.Element {
  return (
    <Pressable style={styles.navItem} onPress={onPress}>
      <Text style={[styles.navIcon, active && styles.activeNav]}>{icon}</Text>
      <Text style={[styles.navText, active && styles.activeNav]}>{title}</Text>
    </Pressable>
  );
}

export default function BottomNavigation({ currentScreen, cartCount, onNavigate }: NavigationProps): React.JSX.Element {
  return (
    <View style={styles.bottomNavigation}>
      <NavItem icon="⌂" title="Home" active={currentScreen === "home"} onPress={() => onNavigate("home")} />
      <NavItem icon="▤" title="Menu" active={currentScreen === "menu"} onPress={() => onNavigate("menu")} />
      <NavItem icon="🛒" title={`Cart${cartCount ? ` (${cartCount})` : ""}`} active={currentScreen === "cart"} onPress={() => onNavigate("cart")} />
      <NavItem icon="♡" title="Favourites" active={currentScreen === "favourites"} onPress={() => onNavigate("favourites")} />
      <NavItem icon="●" title="Profile" active={currentScreen === "profile"} onPress={() => onNavigate("profile")} />
    </View>
  );
}