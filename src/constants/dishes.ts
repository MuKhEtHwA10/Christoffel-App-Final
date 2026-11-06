// constants/dishes.ts
import { Dish } from "../types";

export const initialDishes: Dish[] = [
  // --- EXISTING ITEMS ---
  {
    id: 1,
    name: "Creamy Tuscan Pasta",
    category: "Main",
    price: 160,
    description: "Creamy pasta prepared with spinach, sun-dried tomatoes, parmesan cheese and our chef's special sauce.",
    image: "🍝",
    ingredients: ["Pasta", "Spinach", "Sun-dried tomatoes", "Parmesan cheese", "Cream sauce"],
    extras: [
      { name: "Extra Sauce", price: 15 },
      { name: "Extra Parmesan", price: 10 },
      { name: "Double Portion", price: 40 },
    ],
  },
  {
    id: 2,
    name: "Chicken Liver",
    category: "Starter",
    price: 90,
    description: "Tender chicken liver served with caramelised onions and our signature restaurant sauce.",
    image: "🍗",
    ingredients: ["Chicken liver", "Caramelised onions", "Signature sauce"],
    extras: [
      { name: "Extra Sauce", price: 10 },
      { name: "Double Portion", price: 30 },
    ],
  },
    {
    id: 3,
    name: "Grilled Steak",
    category: "Main",
    price: 220,
    description: "A perfectly grilled steak served with vegetables and pepper sauce.",
    image: "🥩",
    ingredients: ["Beef steak", "Mixed vegetables", "Pepper sauce"],
    extras: [
      { name: "Extra Mushroom Sauce", price: 20 },
      { name: "Extra Steak (200g)", price: 80 },
      { name: "Side of Chips", price: 25 },
      { name: "Fresh Lemonade", price: 35 }, // <-- ADDED HERE
    ],
  },
  {
    id: 4,
    name: "Chocolate Dessert",
    category: "Dessert",
    price: 75,
    description: "A rich chocolate dessert served with cream and fresh berries.",
    image: "🍰",
    ingredients: ["Chocolate", "Cream", "Fresh berries"],
    extras: [
      { name: "Extra Cream", price: 10 },
      { name: "Ice Cream Scoop", price: 15 },
    ],
  },

  // --- NEW ITEMS ADDED BELOW ---
  {
    id: 5,
    name: "Garlic Bread",
    category: "Starter",
    price: 45,
    description: "Freshly baked ciabatta bread toasted with garlic butter and herbs.",
    image: "🥖",
    ingredients: ["Ciabatta bread", "Garlic butter", "Mixed herbs"],
    extras: [
      { name: "Extra Cheese", price: 12 },
      { name: "Side of Aioli", price: 8 },
    ],
  },
  {
    id: 6,
    name: "Lamb Chops",
    category: "Main",
    price: 280,
    description: "Tender lamb chops marinated in rosemary and garlic, served with roasted potatoes.",
    image: "🍖",
    ingredients: ["Lamb chops", "Rosemary", "Garlic", "Roasted potatoes"],
    extras: [
      { name: "Extra Mint Sauce", price: 15 },
      { name: "Extra Chop", price: 60 },
      { name: "Side Salad", price: 25 },
    ],
  },
  {
    id: 7,
    name: "New York Cheesecake",
    category: "Dessert",
    price: 85,
    description: "Classic baked cheesecake with a biscuit base and a berry compote drizzle.",
    image: "🍰",
    ingredients: ["Cream cheese", "Biscuit base", "Berry compote"],
    extras: [
      { name: "Extra Berry Compote", price: 10 },
      { name: "Whipped Cream", price: 8 },
    ],
  },
  {
    id: 8,
    name: "Fresh Lemonade",
    category: "Drink", // We'll use 'Drink' here so we don't have to update your types, but you can name it whatever
    price: 35,
    description: "Refreshing homemade lemonade with fresh mint leaves and ice.",
    image: "🍋",
    ingredients: ["Fresh lemons", "Sugar syrup", "Mint leaves", "Ice"],
    extras: [
      { name: "Less Ice", price: 0 },
      { name: "Extra Mint", price: 5 },
    ],
  },
];
