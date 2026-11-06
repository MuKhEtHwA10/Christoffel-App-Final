// constants/styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#090909" },
  backgroundImage: { flex: 1, width: "100%", height: "100%" },
  backgroundImageStyle: { opacity: 0.35 },
  scrollContent: { padding: 20, paddingBottom: 100 },
  
  // Headers & Typography
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 25 },
  logo: { color: "#D6A84F", fontSize: 18, fontWeight: "bold", letterSpacing: 2 },
  headerIcon: { color: "#D6A84F", fontSize: 27 },
  greeting: { color: "#D6A84F", fontSize: 13, fontWeight: "bold", marginBottom: 7 },
  heading: { color: "#FFFFFF", fontSize: 21, fontWeight: "bold", marginBottom: 18 },
  pageTitle: { color: "#FFFFFF", fontSize: 27, fontWeight: "bold", marginBottom: 20 },
  
  // Home Screen
  banner: { backgroundColor: "#5A4023", borderRadius: 12, padding: 18, flexDirection: "row", alignItems: "center", marginBottom: 18 },
  bannerEmoji: { fontSize: 45, marginRight: 15 },
  bannerTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  bannerText: { color: "#E7D8BD", marginTop: 5 },
  flexOne: { flex: 1 },
  quickActions: { flexDirection: "row", justifyContent: "space-between", marginBottom: 28 },
  quickAction: { backgroundColor: "#242424", width: "23%", minHeight: 78, alignItems: "center", justifyContent: "center", borderRadius: 9 },
  quickIcon: { fontSize: 24, marginBottom: 7 },
  quickText: { color: "#FFFFFF", fontSize: 10, textAlign: "center" },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  sectionTitle: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold" },
  seeAll: { color: "#D6A84F", fontSize: 12, fontWeight: "bold" },
  
  // Dish Cards
  dishGrid: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" },
  dishCard: { backgroundColor: "#242424", width: "48%", padding: 10, borderRadius: 10, marginBottom: 12 },
  dishImage: { backgroundColor: "#DDD", height: 105, borderRadius: 8, textAlign: "center", textAlignVertical: "center", fontSize: 55, marginBottom: 10 },
  dishName: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  cardDescription: { color: "#AAAAAA", fontSize: 10, lineHeight: 15, minHeight: 45 },
  price: { color: "#D6A84F", fontSize: 14, fontWeight: "bold", marginTop: 7 },
  addButton: { backgroundColor: "#D6A84F", borderRadius: 6, paddingVertical: 8, paddingHorizontal: 10, alignItems: "center", marginTop: 10 },
  addButtonText: { color: "#000000", fontWeight: "bold", fontSize: 11 },
  
  // Menu Screen & Filters
  searchInput: { backgroundColor: "#242424", color: "#FFFFFF", borderRadius: 8, padding: 14, marginBottom: 15 },
  filterContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 18 },
  filterChip: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, backgroundColor: "#242424", borderWidth: 1, borderColor: "#333" },
  activeFilterChip: { backgroundColor: "#D6A84F", borderColor: "#D6A84F" },
  filterText: { color: "#AAA", fontSize: 12 },
  activeFilterText: { color: "#000", fontWeight: "bold" },
  
  // Statistics Dashboard
  statsContainer: { backgroundColor: "#1C1C1C", padding: 15, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: "#333" },
  statsTitle: { color: "#D6A84F", fontSize: 14, fontWeight: "bold", marginBottom: 10 },
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  statsLabel: { color: "#AAA", fontSize: 12 },
  statsValue: { color: "#FFF", fontSize: 12, fontWeight: "bold" },

  // Menu Items Row
  menuRow: { backgroundColor: "#242424", flexDirection: "row", alignItems: "center", padding: 12, borderRadius: 10, marginBottom: 12 },
  menuImage: { fontSize: 42, marginRight: 13 },
  menuInfo: { flex: 1 },
  category: { color: "#AAAAAA", fontSize: 12, marginBottom: 5 },
  actionRow: { flexDirection: "row", gap: 8, marginTop: 5 },
  smallButton: { borderColor: "#D6A84F", borderWidth: 1, paddingVertical: 6, paddingHorizontal: 10, borderRadius: 5, alignItems: "center" },
  smallButtonText: { color: "#D6A84F", fontSize: 10, fontWeight: "bold" },
  deleteButton: { borderColor: "#E57373", borderWidth: 1, paddingVertical: 6, paddingHorizontal: 10, borderRadius: 5, alignItems: "center" },
  deleteButtonText: { color: "#E57373", fontSize: 10, fontWeight: "bold" },

  // Details Screen
  backButton: { color: "#D6A84F", fontSize: 16, marginBottom: 20 },
  detailImage: { height: 260, backgroundColor: "#DDD", justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 18 },
  detailEmoji: { fontSize: 130 },
  detailTitle: { color: "#FFFFFF", fontSize: 25, fontWeight: "bold", marginBottom: 7 },
  detailDescription: { color: "#CCC", fontSize: 15, lineHeight: 23, marginTop: 15, marginBottom: 30 },
  detailBottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  detailPrice: { color: "#D6A84F", fontSize: 22, fontWeight: "bold" },
  primaryButton: { backgroundColor: "#D6A84F", padding: 16, borderRadius: 8, alignItems: "center", marginTop: 20 },
  primaryButtonText: { color: "#000", fontWeight: "bold", fontSize: 13 },
  
  // Cart & Checkout
  cartRow: { backgroundColor: "#242424", padding: 15, borderRadius: 9, flexDirection: "row", alignItems: "center", marginBottom: 10 },
  cartEmoji: { fontSize: 38, marginRight: 14 },
  removeText: { color: "#E57373", fontSize: 10, fontWeight: "bold" },
  emptyContainer: { alignItems: "center", marginTop: 100 },
  emptyEmoji: { fontSize: 60, marginBottom: 15 },
  emptyText: { color: "#FFFFFF", fontSize: 18 },
  summary: { backgroundColor: "#242424", padding: 16, borderRadius: 9, marginTop: 18 },
  summaryRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  summaryLabel: { color: "#BBB", fontSize: 14 },
  summaryValue: { color: "#FFF", fontSize: 14 },
  summaryLine: { height: 1, backgroundColor: "#555", marginVertical: 6 },
  totalLabel: { color: "#FFF", fontSize: 17, fontWeight: "bold" },
  totalValue: { color: "#D6A84F", fontSize: 17, fontWeight: "bold" },
  formLabel: { color: "#D6A84F", fontSize: 12, fontWeight: "bold", marginTop: 18, marginBottom: 9 },
  deliveryToggle: { backgroundColor: "#242424", flexDirection: "row", justifyContent: "space-around", padding: 13, borderRadius: 8 },
  selectedToggle: { color: "#D6A84F", fontWeight: "bold" },
  unselectedToggle: { color: "#888" },
  addressInput: { backgroundColor: "#242424", color: "#FFF", padding: 14, borderRadius: 8 },
  paymentOption: { backgroundColor: "#242424", padding: 16, borderRadius: 8, marginBottom: 9, flexDirection: "row", justifyContent: "space-between" },
  selectedPayment: { borderWidth: 1, borderColor: "#D6A84F" },
  paymentText: { color: "#FFF" },
  radio: { color: "#D6A84F", fontSize: 18 },

  // Confirmation Screen
  confirmationContainer: { padding: 25, alignItems: "center", paddingBottom: 50 },
  confirmationLogo: { color: "#D6A84F", fontSize: 18, fontWeight: "bold", letterSpacing: 2, marginTop: 30, marginBottom: 45 },
  successCircle: { width: 90, height: 90, borderRadius: 45, borderWidth: 3, borderColor: "#D6A84F", justifyContent: "center", alignItems: "center", marginBottom: 20 },
  successIcon: { color: "#D6A84F", fontSize: 55 },
  successTitle: { color: "#D6A84F", fontSize: 23, fontWeight: "bold", marginBottom: 12 },
  successMessage: { color: "#CCC", textAlign: "center", lineHeight: 22, marginBottom: 25 },
  orderCard: { backgroundColor: "#242424", width: "100%", borderRadius: 10, padding: 18, marginBottom: 15 },
  orderLabel: { color: "#999", fontSize: 10, marginTop: 9 },
  orderValue: { color: "#FFF", fontSize: 16, fontWeight: "bold", marginTop: 3 },
  secondaryButton: { borderWidth: 1, borderColor: "#D6A84F", width: "100%", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 12 },
  secondaryButtonText: { color: "#D6A84F", fontWeight: "bold" },

  // Bottom Navigation
  bottomNavigation: { position: "absolute", bottom: 0, left: 0, right: 0, height: 75, backgroundColor: "#171717", borderTopWidth: 1, borderTopColor: "#333", flexDirection: "row", justifyContent: "space-around", alignItems: "center" },
  navItem: { alignItems: "center" },
  navIcon: { color: "#888", fontSize: 21, marginBottom: 3 },
  navText: { color: "#888", fontSize: 10 },
  activeNav: { color: "#D6A84F" },

  // Modal Styles
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.8)", justifyContent: "center", padding: 20 },
  modalContainer: { backgroundColor: "#1C1C1C", borderRadius: 12, padding: 20, borderWidth: 1, borderColor: "#333" },
  modalTitle: { color: "#D6A84F", fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  inputLabel: { color: "#AAA", fontSize: 12, marginBottom: 5, marginTop: 10 },
  modalInput: { backgroundColor: "#242424", color: "#FFF", borderRadius: 8, padding: 12, marginBottom: 10 },
  modalButtons: { flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 10 },
  modalButton: { flex: 1, padding: 14, borderRadius: 8, alignItems: "center" },
  cancelBtn: { backgroundColor: "#333" },
  saveBtn: { backgroundColor: "#D6A84F" },
  cancelBtnText: { color: "#FFF", fontWeight: "bold" },
  saveBtnText: { color: "#000", fontWeight: "bold" },
});