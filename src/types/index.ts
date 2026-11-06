export type Extra = {
  name: string;
  price: number;
  icon?: string;
};

export type Dish = {
  id: number;
  name: string;
  category: "Starter" | "Main" | "Dessert" | "Drink";
  price: number;
  description: string;
  image: string;
  ingredients: string[];
  extras: Extra[];
};

export type Screen =
  | "splash"
  | "login"
  | "home"
  | "menu"
  | "details"
  | "cart"
  | "checkout"
  | "confirmation"
  | "booking"
  | "location"
  | "favourites"
  | "profile";

export type PaymentMethod = "Credit Card" | "Debit Card" | "Cash";

export type NavigationProps = {
  currentScreen: Screen;
  cartCount: number;
  onNavigate: (screen: Screen) => void;
};

export type SummaryProps = {
  subtotal: number;
  deliveryFee: number;
  total: number;
};

export type ScreenProps = {
  dishes: Dish[];
  onNavigate: (screen: Screen) => void;
  onOpenDish: (dish: Dish) => void;
  onAddToCart: (dish: Dish) => void;
};

export type HomeScreenProps = ScreenProps & {
  favourites: number[];
  onToggleFavourite: (dish: Dish) => void;
};

export type LoginScreenProps = {
  onLoginSuccess: () => void;
};

export type SplashScreenProps = {
  onFinish: () => void;
};

export type MenuScreenProps = {
  dishes: Dish[];
  search: string;
  setSearch: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
  onOpenDish: (dish: Dish) => void;
  onAddToCart: (dish: Dish) => void;
  onEditDish: (dish: Dish) => void;
  onDeleteDish: (id: number) => void;
};

export type DetailsScreenProps = {
  dish: Dish;
  onBack: () => void;
  onAddToCart: (dish: Dish) => void;
  isFavourite?: boolean;
  onToggleFavourite?: (dish: Dish) => void;
};

export type CartScreenProps = SummaryProps & {
  cart: Dish[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
};

export type CheckoutScreenProps = SummaryProps & {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  onBack: () => void;
  onPlaceOrder: () => void;
};

export type ConfirmationScreenProps = {
  total: number;
  onBackHome: () => void;
};

export type QuickActionProps = {
  icon: string;
  title: string;
  onPress: () => void;
};

export type DishCardProps = {
  dish: Dish;
  onOpen: (dish: Dish) => void;
  onAdd: (dish: Dish) => void;
  isFavourite?: boolean;
  onToggleFavourite?: (dish: Dish) => void;
};

export type NavItemProps = {
  icon: string;
  title: string;
  active?: boolean;
  onPress: () => void;
};

export type EditDishModalProps = {
  visible: boolean;
  dish: Dish | null;
  onClose: () => void;
  onSave: (updatedDish: Dish) => void;
};

export type BookingScreenProps = {
  onBack: () => void;
};

export type LocationScreenProps = {
  onBack: () => void;
};

export type FavouritesScreenProps = {
  favouriteDishes: Dish[];
  onOpenDish: (dish: Dish) => void;
  onAddToCart: (dish: Dish) => void;
  onToggleFavourite: (dish: Dish) => void;
};

export type ProfileScreenProps = {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
};