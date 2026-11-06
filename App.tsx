// App.tsx
import React, { useState, useMemo } from "react";
import { SafeAreaView, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

// --- Import all existing components ---
import BottomNavigation from "./src/components/BottomNavigation";
import EditDishModal from "./src/components/EditDishModal";
import HomeScreen from "./src/screens/HomeScreen";
import MenuScreen from "./src/screens/MenuScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import CartScreen from "./src/screens/CartScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";
import BookingScreen from "./src/screens/BookingScreen";
import LocationScreen from "./src/screens/LocationScreen";
import FavouritesScreen from "./src/screens/FavouritesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// --- Import New Auth Screens ---
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";

import { initialDishes } from "./src/constants/dishes";
import { styles } from "./src/constants/styles";
import { Dish, Screen, PaymentMethod } from "./src/types";

export default function App() {
  // --- AUTH STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Start on the splash screen instead of home
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [cart, setCart] = useState<Dish[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Credit Card");
  const [favourites, setFavourites] = useState<number[]>([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [dishToEdit, setDishToEdit] = useState<Dish | null>(null);

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
  const deliveryFee = cart.length > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;
  const favouriteDishes = useMemo(() => dishes.filter(d => favourites.includes(d.id)), [dishes, favourites]);

  const handleToggleFavourite = (dish: Dish) => {
    setFavourites(prev => prev.includes(dish.id) ? prev.filter(id => id !== dish.id) : [...prev, dish.id]);
  };

  const handleNavigate = (screen: Screen) => setCurrentScreen(screen);
  const handleOpenDish = (dish: Dish) => { setSelectedDish(dish); setCurrentScreen("details"); };
  const handleAddToCart = (dish: Dish) => { setCart([...cart, dish]); Alert.alert("Added to Cart", `${dish.name} has been added to your cart.`); };
  
  const handleRemoveFromCart = (id: number) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const handlePlaceOrder = () => { setCart([]); setCurrentScreen("confirmation"); };
  const handleOpenEditModal = (dish: Dish) => { setDishToEdit(dish); setEditModalVisible(true); };
  
  const handleSaveDish = (updatedDish: Dish) => {
    setDishes(prev => prev.map(d => d.id === updatedDish.id ? updatedDish : d));
    setEditModalVisible(false);
    setDishToEdit(null);
    Alert.alert("Success", "Menu item updated successfully.");
  };

  const handleDeleteDish = (id: number) => {
    setDishes(prev => prev.filter(d => d.id !== id));
    Alert.alert("Success", "Menu item deleted.");
  };

  // --- LOGIN SUCCESS HANDLER ---
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentScreen("home"); // Send to home screen after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen("splash"); // Send back to splash screen (which will go to login)
    setCart([]);
    setFavourites([]);
  };

  const renderScreen = () => {
    // 1. Handle Auth Screens First
    if (!isAuthenticated) {
      if (currentScreen === "splash") {
        return <SplashScreen onFinish={() => setCurrentScreen("login")} />;
      }
      return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }

    // 2. Handle Main App Screens
    switch (currentScreen) {
      case "home":
        return <HomeScreen dishes={dishes} favourites={favourites} onToggleFavourite={handleToggleFavourite} onNavigate={handleNavigate} onOpenDish={handleOpenDish} onAddToCart={handleAddToCart} />;
      case "menu":
        return (
          <MenuScreen 
            dishes={dishes} search={searchQuery} setSearch={setSearchQuery} 
            filterCategory={filterCategory} setFilterCategory={setFilterCategory}
            onOpenDish={handleOpenDish} onAddToCart={handleAddToCart}
            onEditDish={handleOpenEditModal} onDeleteDish={handleDeleteDish}
          />
        );
      case "details":
        return selectedDish ? (
          <DetailsScreen 
            dish={selectedDish} onBack={() => handleNavigate("menu")} onAddToCart={handleAddToCart} 
            isFavourite={favourites.includes(selectedDish.id)} onToggleFavourite={handleToggleFavourite}
          />
        ) : null;
      case "cart":
        return <CartScreen cart={cart} subtotal={subtotal} deliveryFee={deliveryFee} total={total} onRemove={handleRemoveFromCart} onCheckout={() => handleNavigate("checkout")} />;
      case "checkout":
        return <CheckoutScreen subtotal={subtotal} deliveryFee={deliveryFee} total={total} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} onBack={() => handleNavigate("cart")} onPlaceOrder={handlePlaceOrder} />;
      case "confirmation":
        return <ConfirmationScreen total={total} onBackHome={() => handleNavigate("home")} />;
      case "booking":
        return <BookingScreen onBack={() => handleNavigate("home")} />;
      case "location":
        return <LocationScreen onBack={() => handleNavigate("home")} />;
      case "favourites":
        return <FavouritesScreen favouriteDishes={favouriteDishes} onOpenDish={handleOpenDish} onAddToCart={handleAddToCart} onToggleFavourite={handleToggleFavourite} />;
      case "profile":
        return <ProfileScreen onNavigate={handleNavigate} onLogout={handleLogout} />; // <-- Pass handleLogout
      default:
        return <HomeScreen dishes={dishes} favourites={favourites} onToggleFavourite={handleToggleFavourite} onNavigate={handleNavigate} onOpenDish={handleOpenDish} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {renderScreen()}
      
      {/* Only show Bottom Nav if authenticated and not on checkout/confirmation screens */}
      {isAuthenticated && currentScreen !== "checkout" && currentScreen !== "confirmation" && currentScreen !== "splash" && currentScreen !== "login" && (
        <BottomNavigation currentScreen={currentScreen} cartCount={cart.length} onNavigate={handleNavigate} />
      )}

      <EditDishModal visible={isEditModalVisible} dish={dishToEdit} onClose={() => setEditModalVisible(false)} onSave={handleSaveDish} />
    </SafeAreaView>
  );
}