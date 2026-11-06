> Why do I have a folder named ".expo" in my project?

The ".expo" folder is created when an Expo project is started using "expo start" command.

> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
- "dev/logs/": contains structured JSONL event logs from CLI commands (e.g. start.log, export.log). These are truncated on each run.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
# The Culinary Effect — Changelog

All notable changes to this project are documented below.
This version represents the **final enhancement phase (Part 3)** of the Chef's Menu Manager app.

---

## [3.0.0] — 2026-11-06 — Final Submission (Part 3)

### 🆕 Added — Menu Management (25 Marks)
- **Edit Menu Items**: The chef can now open any dish in the Menu screen and manage its contents through a dedicated **Edit Modal**.
- **Ingredient Management**: The chef can add or remove ingredients (e.g., "Extra Parmesan", "Rosemary") for each dish.
- **Extra / Upsell Management**: The chef can add or remove purchasable extras (e.g., "Extra Sauce — R15", "Double Portion — R40", "Side of Chips — R25").
- **Delete Menu Items**: The chef can remove a dish from the menu with a confirmation alert preventing accidental deletion.
- **Real-time Updates**: All changes (edits, deletes, additions) are reflected instantly across the Menu Overview, Home screen, Details screen, Cart, and Favourites because state is lifted to `App.tsx`.

### 🆕 Added — Search & Filter (20 Marks)
- **Live Search**: Users can search menu items by name (`TextInput` with `useMemo` filtering — updates on every keystroke).
- **Category Filter**: Filter chips for **All / Starter / Main / Dessert / Drink**.
- **Combined Filtering**: Search + category filter work together.
- **Clear Filters**: Selecting "All" clears the category filter; clearing the search input resets the list.
- **Empty State**: A friendly "No dishes found" message appears when filters return no results.

### 🆕 Added — Menu Statistics Dashboard (20 Marks)
A live **"Menu Overview"** card is displayed at the top of the Menu screen, showing:
- The **total number of menu items**.
- The **average price** of all dishes.
- The **count of dishes in each category** (Starters, Mains, Desserts).
- All figures recalculate automatically whenever a dish is added, edited, or deleted (via `useMemo`).

### 🆕 Added — Authentication Flow
- **Splash Screen**: The app now launches with a branded splash screen (2.5s) before moving to login.
- **Login Screen**: Email + password validation, with meaningful error alerts (invalid email format, empty fields, short password).
- **Logout**: Available from the Profile screen — returns the user to the splash/login flow and clears cart/favourites.

### 🆕 Added — User Features
- **Favourites System**: 
  - Heart icon (♡ / ♥) on every `DishCard` and on the dish Details screen.
  - Favourites are stored as IDs in `App.tsx` and update instantly across all screens.
  - Dedicated **Favourites Screen** with an empty-state message.
- **Profile Screen**: A dedicated user profile with links to Favourites, Cart, Booking, and Location. Includes a working Logout action.
- **Book a Table**: Real form (name, date, guests) with input validation and a confirmation alert.
- **Find Us**: Restaurant address, opening hours, and tappable "Call Us" / "Email Us" buttons that launch the native dialer/mail app using `Linking`.

### 🆕 Added — Customizations (Extras)
- Customers can toggle **extras** (Extra Sauce, Double Portion, Side Dishes, Drinks) on the Details screen.
- The final price updates dynamically as extras are added/removed.
- Extras are reflected in the cart with the suffix "(Custom)" for clarity.

### ♻️ Changed
- **State Lifting**: `dishes`, `favourites`, `cart`, and `search/filter` are all managed centrally in `App.tsx` so all screens stay in sync.
- **Reusable Components**: Introduced `EditDishModal`, `FilterChip` styling, and shared `DishCard` with heart-button support.
- **Dish Type**: Extended to include `ingredients: string[]` and `extras: Extra[]`.
- **`initialDishes`** renamed from `dishes` to prevent accidental mutation of the source-of-truth array.
- **Images**: Replaced emoji placeholders with real `.png` / `.jpg` assets loaded via `require()` for a more polished look.

### 🎨 Improved — UI / UX (10 Marks)
- Consistent **gold-on-black** theme across all screens (splash, login, home, menu, profile, booking).
- All **Alerts** now provide meaningful feedback (validation errors, success messages, delete confirmations).
- Improved **input validation** on Login, Booking, and EditDishModal (no empty fields, positive prices, valid email).
- Disabled bottom navigation on Checkout and Confirmation screens to prevent interruption of the payment flow.
- **Empty states** added for Cart, Favourites, and filtered Menu results.

### 🐛 Fixed
- Fixed Metro bundler crash caused by a duplicated `Dish` import in `dishes.ts`.
- Fixed "App is not defined" reference error from earlier parts.
- Removed all references to missing `.png` assets that caused "Unable to resolve module" errors in Part 2.
- Corrected TypeScript type mismatches for `category` ("Starter" | "Main" | "Dessert" | "Drink").
- Removed deprecated `textAlign` / `textAlignVertical` styles when switching from `<Text>` to `<Image>` for dish photos.

---

## [2.0.0] — Previous Submission (Part 2)
- Basic menu browsing and display.
- Cart, Checkout, and Confirmation screens.
- Bottom navigation and quick actions.
- Static menu data with emoji-based dish images.

---

## [1.0.0] — Initial Setup
- Initial Expo + React Native project scaffolding.
- Project structure (screens, components, constants, types).
