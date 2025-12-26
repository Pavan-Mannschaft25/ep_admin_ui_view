// // // // // // src/modules/masterStore/comboSlice.ts
// // // // // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// // // // // import { Product } from "./productsSlice";

// // // // // export interface ComboProduct {
// // // // //   id: string;
// // // // //   productId: string;
// // // // //   quantity: number;
// // // // //   product: Product;
// // // // // }

// // // // // export interface ProductCombo {
// // // // //   id: string;
// // // // //   name: string;
// // // // //   description: string;
// // // // //   image: string; // Will store base64 string or URL
// // // // //   price: number;
// // // // //   discountPercentage: number;
// // // // //   status: "active" | "inactive";
// // // // //   createdAt: string;
// // // // //   updatedAt: string;
// // // // //   products: ComboProduct[];
// // // // // }

// // // // // interface CombosState {
// // // // //   combos: ProductCombo[];
// // // // //   status: "idle" | "loading" | "succeeded" | "failed";
// // // // //   error: string | null;
// // // // // }

// // // // // // ----------------------
// // // // // // ASYNC THUNKS
// // // // // // ----------------------

// // // // // export const fetchCombos = createAsyncThunk("combos/fetchCombos", async () => {
// // // // //   // In a real app, this would be an API call
// // // // //   // For now, we'll return empty array
// // // // //   await new Promise((resolve) => setTimeout(resolve, 500));
// // // // //   return [];
// // // // // });

// // // // // // ----------------------
// // // // // // INITIAL STATE
// // // // // // ----------------------

// // // // // const initialState: CombosState = {
// // // // //   combos: [],
// // // // //   status: "idle",
// // // // //   error: null,
// // // // // };

// // // // // // ----------------------
// // // // // // SLICE
// // // // // // ----------------------

// // // // // const comboSlice = createSlice({
// // // // //   name: "combos",
// // // // //   initialState,
// // // // //   reducers: {
// // // // //     addCombo: (
// // // // //       state,
// // // // //       action: PayloadAction<
// // // // //         Omit<ProductCombo, "id" | "createdAt" | "updatedAt">
// // // // //       >
// // // // //     ) => {
// // // // //       state.combos.unshift({
// // // // //         ...action.payload,
// // // // //         id: Date.now().toString(),
// // // // //         createdAt: new Date().toISOString(),
// // // // //         updatedAt: new Date().toISOString(),
// // // // //       });
// // // // //     },
// // // // //     editCombo: (state, action: PayloadAction<ProductCombo>) => {
// // // // //       const index = state.combos.findIndex((c) => c.id === action.payload.id);
// // // // //       if (index !== -1) {
// // // // //         state.combos[index] = {
// // // // //           ...action.payload,
// // // // //           updatedAt: new Date().toISOString(),
// // // // //         };
// // // // //       }
// // // // //     },
// // // // //     deleteCombo: (state, action: PayloadAction<string>) => {
// // // // //       state.combos = state.combos.filter((c) => c.id !== action.payload);
// // // // //     },
// // // // //     toggleComboStatus: (state, action: PayloadAction<string>) => {
// // // // //       const combo = state.combos.find((c) => c.id === action.payload);
// // // // //       if (combo) {
// // // // //         combo.status = combo.status === "active" ? "inactive" : "active";
// // // // //         combo.updatedAt = new Date().toISOString();
// // // // //       }
// // // // //     },
// // // // //   },

// // // // //   extraReducers: (builder) => {
// // // // //     builder
// // // // //       .addCase(fetchCombos.pending, (state) => {
// // // // //         state.status = "loading";
// // // // //       })
// // // // //       .addCase(fetchCombos.fulfilled, (state, action) => {
// // // // //         state.status = "succeeded";
// // // // //         state.combos = action.payload;
// // // // //       })
// // // // //       .addCase(fetchCombos.rejected, (state, action) => {
// // // // //         state.status = "failed";
// // // // //         state.error = action.error.message || "Failed to fetch combos";
// // // // //       });
// // // // //   },
// // // // // });

// // // // // export const { addCombo, editCombo, deleteCombo, toggleComboStatus } =
// // // // //   comboSlice.actions;

// // // // // export default comboSlice.reducer;

// // // // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// // // // import { Product, ProductPricing } from "./productsSlice";

// // // // export interface ComboProduct {
// // // //   id: string;
// // // //   productId: string;
// // // //   quantity: number;
// // // //   product: Product;
// // // //   // Adding pricing information from ProductPricing
// // // //   pricing?: ProductPricing;
// // // // }

// // // // export interface ProductCombo {
// // // //   id: string;
// // // //   name: string;
// // // //   description: string;
// // // //   image: string; // Will store base64 string or URL
// // // //   price: number;
// // // //   discountPercentage: number;
// // // //   status: "active" | "inactive";
// // // //   createdAt: string;
// // // //   updatedAt: string;
// // // //   products: ComboProduct[];
// // // //   // Adding product-specific fields
// // // //   stocks?: number;
// // // //   calories?: number;
// // // //   fat?: number;
// // // //   carb?: number;
// // // //   protein?: number;
// // // //   section?: string;
// // // //   category?: string;
// // // //   subCategory?: string;
// // // //   productImage: string; // Will store base64 string or URL
// // // //   nxImage: string;
// // // // }

// // // // interface CombosState {
// // // //   combos: ProductCombo[];
// // // //   status: "idle" | "loading" | "succeeded" | "failed";
// // // //   error: string | null;
// // // // }

// // // // // ----------------------
// // // // // FIXED CATEGORY MAPPING (from productsSlice)
// // // // // ----------------------

// // // // const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// // // // const categories = {
// // // //   Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// // // //   Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// // // //   Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// // // //   Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// // // //   Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// // // // };

// // // // const subCategories = {
// // // //   Vegetables: [
// // // //     "Leafy Greens",
// // // //     "Root Vegetables",
// // // //     "Cruciferous",
// // // //     "Allium",
// // // //     "Podded",
// // // //   ],
// // // //   Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// // // //   Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// // // //   Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// // // //   Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],

// // // //   Juices: [
// // // //     "Fruit Juice",
// // // //     "Vegetable Juice",
// // // //     "Smoothies",
// // // //     "Concentrates",
// // // //     "Fresh",
// // // //   ],
// // // //   Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// // // //   Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// // // //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // // //   Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],

// // // //   Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// // // //   Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// // // //   Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// // // //   Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// // // //   Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],

// // // //   Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// // // //   Cookies: [
// // // //     "Chocolate Chip",
// // // //     "Oatmeal",
// // // //     "Sugar",
// // // //     "Peanut Butter",
// // // //     "Shortbread",
// // // //   ],
// // // //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // // //   Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// // // //   Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],

// // // //   Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// // // //   FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// // // //   FrozenFruits: [
// // // //     "Mixed Berries",
// // // //     "Tropical",
// // // //     "Melon",
// // // //     "Citrus",
// // // //     "Stone Fruits",
// // // //   ],
// // // //   Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// // // //   Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// // // // };

// // // // const productNames = {
// // // //   Vegetables: ["Spinach", "Carrots", "Broccoli", "Onions", "Peas"],
// // // //   Fruits: ["Oranges", "Strawberries", "Pineapple", "Peaches", "Apples"],
// // // //   Grains: ["Whole Wheat", "Basmati Rice", "Cornmeal", "Barley", "Rolled Oats"],
// // // //   Meat: [
// // // //     "Sirloin Steak",
// // // //     "Pork Chops",
// // // //     "Chicken Breast",
// // // //     "Lamb Chops",
// // // //     "Turkey Breast",
// // // //   ],
// // // //   Seafood: ["Salmon", "Shrimp", "Lobster", "Clams", "Sea Urchin"],

// // // //   Juices: [
// // // //     "Orange Juice",
// // // //     "Carrot Juice",
// // // //     "Berry Smoothie",
// // // //     "Apple Concentrate",
// // // //     "Fresh Grapefruit",
// // // //   ],
// // // //   Sodas: ["Cola", "Lemon-Lime", "Orange Soda", "Ginger Ale", "Root Beer"],
// // // //   Tea: ["Earl Grey", "Green Tea", "Chamomile", "Oolong", "White Tea"],
// // // //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // // //   Water: [
// // // //     "Mineral Water",
// // // //     "Spring Water",
// // // //     "Sparkling Water",
// // // //     "Distilled Water",
// // // //     "Lemon Water",
// // // //   ],

// // // //   Milk: [
// // // //     "Whole Milk",
// // // //     "Skim Milk",
// // // //     "Low-Fat Milk",
// // // //     "Lactose-Free Milk",
// // // //     "Organic Milk",
// // // //   ],
// // // //   Cheese: [
// // // //     "Cheddar Cheese",
// // // //     "Mozzarella",
// // // //     "Swiss Cheese",
// // // //     "Blue Cheese",
// // // //     "Feta",
// // // //   ],
// // // //   Yogurt: [
// // // //     "Greek Yogurt",
// // // //     "Plain Yogurt",
// // // //     "Strawberry Yogurt",
// // // //     "Frozen Yogurt",
// // // //     "Drinkable Yogurt",
// // // //   ],
// // // //   Butter: [
// // // //     "Salted Butter",
// // // //     "Unsalted Butter",
// // // //     "Whipped Butter",
// // // //     "Clarified Butter",
// // // //     "Almond Butter",
// // // //   ],
// // // //   Cream: [
// // // //     "Heavy Cream",
// // // //     "Light Cream",
// // // //     "Whipping Cream",
// // // //     "Sour Cream",
// // // //     "Half-and-Half",
// // // //   ],

// // // //   Chips: [
// // // //     "Potato Chips",
// // // //     "Tortilla Chips",
// // // //     "Veggie Chips",
// // // //     "Kale Chips",
// // // //     "Pita Chips",
// // // //   ],
// // // //   Cookies: [
// // // //     "Chocolate Chip Cookies",
// // // //     "Oatmeal Cookies",
// // // //     "Sugar Cookies",
// // // //     "Peanut Butter Cookies",
// // // //     "Shortbread",
// // // //   ],
// // // //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // // //   Candy: [
// // // //     "Chocolate Bar",
// // // //     "Gummy Bears",
// // // //     "Lollipop",
// // // //     "Taffy",
// // // //     "Sour Patch Kids",
// // // //   ],
// // // //   Crackers: [
// // // //     "Cheese Crackers",
// // // //     "Whole Wheat Crackers",
// // // //     "Rice Crackers",
// // // //     "Water Crackers",
// // // //     "Animal Crackers",
// // // //   ],

// // // //   Meals: [
// // // //     "Chicken Dinner",
// // // //     "Beef Lunch",
// // // //     "Pancake Breakfast",
// // // //     "Spring Rolls",
// // // //     "Garlic Bread",
// // // //   ],
// // // //   FrozenVegetables: [
// // // //     "Mixed Vegetables",
// // // //     "Frozen Peas",
// // // //     "Steamed Broccoli",
// // // //     "Seasoned Corn",
// // // //     "Plain Carrots",
// // // //   ],
// // // //   FrozenFruits: [
// // // //     "Mixed Berries",
// // // //     "Tropical Mix",
// // // //     "Melon Cubes",
// // // //     "Citrus Slices",
// // // //     "Peach Halves",
// // // //   ],
// // // //   Desserts: [
// // // //     "Vanilla Ice Cream",
// // // //     "Apple Pie",
// // // //     "Chocolate Cake",
// // // //     "Croissants",
// // // //     "Rice Pudding",
// // // //   ],
// // // //   Pizza: [
// // // //     "Cheese Pizza",
// // // //     "Pepperoni Pizza",
// // // //     "Veggie Pizza",
// // // //     "Meat Lovers Pizza",
// // // //     "Supreme Pizza",
// // // //   ],
// // // // };

// // // // // ----------------------
// // // // // COMBO GENERATOR (similar to product generator)
// // // // // ----------------------

// // // // const generateCombos = (): ProductCombo[] => {
// // // //   const combos: ProductCombo[] = [];

// // // //   for (let i = 1; i <= 20; i++) {
// // // //     const section = sections[Math.floor(Math.random() * sections.length)];
// // // //     const catList = categories[section] || [];
// // // //     const category = catList[Math.floor(Math.random() * catList.length)];
// // // //     const subList = subCategories[category] || [];
// // // //     const subCategory = subList[Math.floor(Math.random() * subList.length)];
// // // //     const nameList = productNames[subCategory] ||
// // // //       productNames[category] || ["Combo"];
// // // //     const name = nameList[Math.floor(Math.random() * nameList.length)];
// // // //     const seed = Math.random().toString(36).substring(7);

// // // //     // Generate 2-5 products for each combo
// // // //     const productCount = Math.floor(Math.random() * 4) + 2;
// // // //     const products: ComboProduct[] = [];

// // // //     for (let j = 0; j < productCount; j++) {
// // // //       // Generate a mock product for this combo item
// // // //       const productSection =
// // // //         sections[Math.floor(Math.random() * sections.length)];
// // // //       const productCatList = categories[productSection] || [];
// // // //       const productCategory =
// // // //         productCatList[Math.floor(Math.random() * productCatList.length)];
// // // //       const productSubList = subCategories[productCategory] || [];
// // // //       const productSubCategory =
// // // //         productSubList[Math.floor(Math.random() * productSubList.length)];
// // // //       const productNameList = productNames[productSubCategory] ||
// // // //         productNames[productCategory] || ["Product"];
// // // //       const productName =
// // // //         productNameList[Math.floor(Math.random() * productNameList.length)];
// // // //       const productSeed = Math.random().toString(36).substring(7);

// // // //       // Generate 1-2 pricing options for each product
// // // //       const pricingCount = Math.floor(Math.random() * 2) + 1;
// // // //       const pricings: ProductPricing[] = [];

// // // //       for (let k = 0; k < pricingCount; k++) {
// // // //         const quantity = k === 0 ? "1" : "500";
// // // //         const uom = k === 0 ? "kg" : "g";
// // // //         const purchasePrice = Math.floor(Math.random() * 500) + 100;
// // // //         const price = Math.floor(purchasePrice * (1.2 + Math.random() * 0.5));
// // // //         const offerPercentage = Math.floor(Math.random() * 30);

// // // //         const appSalePrice = price - purchasePrice; // amount

// // // //         const appPercentage =
// // // //           Math.floor((appSalePrice / price) * 100) - offerPercentage; // %

// // // //         const appAmount = Math.floor((appPercentage / 100) * price); // ₹ amount after offer

// // // //         pricings.push({
// // // //           id: `${i}-${j}-${k}`,
// // // //           quantity,
// // // //           uom,
// // // //           purchasePrice,
// // // //           price,
// // // //           offerPercentage,
// // // //           appSalePrice, // before offer amount
// // // //           appPercentage, // after offer %
// // // //           appAmount, // after offer amount
// // // //           cgst: 0,
// // // //           sgst: 0,
// // // //           status: Math.random() > 0.3,
// // // //         });
// // // //       }

// // // //       const mockProduct: Product = {
// // // //         id: `product-${i}-${j}`,
// // // //         image: `https://picsum.photos/seed/${productSeed}/300/300.jpg`,
// // // //         nxImage: `https://picsum.photos/seed/${productSeed}-nx/300/300.jpg`,
// // // //         name: `${productName} ${i}-${j}`,
// // // //         stocks: Math.floor(Math.random() * 500) + 10,
// // // //         calories: Math.floor(Math.random() * 300) + 20,
// // // //         fat: Math.floor(Math.random() * 30) + 1,
// // // //         carb: Math.floor(Math.random() * 50) + 1,
// // // //         protein: Math.floor(Math.random() * 30) + 1,
// // // //         section: productSection,
// // // //         category: productCategory,
// // // //         subCategory: productSubCategory,
// // // //         status: Math.random() > 0.3 ? "active" : "inactive",
// // // //         createdAt: new Date().toISOString(),
// // // //         updatedAt: new Date().toISOString(),
// // // //         pricings,
// // // //       };

// // // //       // Select a random pricing for this combo product
// // // //       const selectedPricing =
// // // //         pricings[Math.floor(Math.random() * pricings.length)];

// // // //       products.push({
// // // //         id: `${i}-${j}`,
// // // //         productId: mockProduct.id,
// // // //         quantity: Math.floor(Math.random() * 3) + 1,
// // // //         product: mockProduct,
// // // //         pricing: selectedPricing,
// // // //       });
// // // //     }

// // // //     // Calculate combo price based on product prices
// // // //     const totalPrice = products.reduce((sum, item) => {
// // // //       return sum + (item.pricing?.price || 0) * item.quantity;
// // // //     }, 0);

// // // //     // Apply discount
// // // //     const discountPercentage = Math.floor(Math.random() * 30);
// // // //     const price = Math.floor(totalPrice * (1 - discountPercentage / 100));

// // // //     combos.push({
// // // //       id: `combo-${i}`,
// // // //       name: `${name} Combo ${i}`,
// // // //       description: `Delicious combo featuring ${products.length} items`,
// // // //       image: `https://picsum.photos/seed/${seed}/300/300.jpg`,
// // // //       price,
// // // //       discountPercentage,
// // // //       status: Math.random() > 0.3 ? "active" : "inactive",
// // // //       createdAt: new Date().toISOString(),
// // // //       updatedAt: new Date().toISOString(),
// // // //       products,
// // // //       // Add product-specific fields
// // // //       stocks: Math.floor(Math.random() * 100) + 10,
// // // //       calories: Math.floor(Math.random() * 300) + 20,
// // // //       fat: Math.floor(Math.random() * 30) + 1,
// // // //       carb: Math.floor(Math.random() * 50) + 1,
// // // //       protein: Math.floor(Math.random() * 30) + 1,
// // // //       section,
// // // //       category,
// // // //       subCategory,
// // // //     });
// // // //   }

// // // //   return combos;
// // // // };

// // // // // ----------------------
// // // // // ASYNC THUNKS
// // // // // ----------------------

// // // // export const fetchCombos = createAsyncThunk("combos/fetchCombos", async () => {
// // // //   // In a real app, this would be an API call
// // // //   // For now, we'll return generated combos
// // // //   await new Promise((resolve) => setTimeout(resolve, 500));
// // // //   return generateCombos();
// // // // });

// // // // // ----------------------
// // // // // INITIAL STATE
// // // // // ----------------------

// // // // const initialState: CombosState = {
// // // //   combos: [],
// // // //   status: "idle",
// // // //   error: null,
// // // // };

// // // // // ----------------------
// // // // // SLICE
// // // // // ----------------------

// // // // const comboSlice = createSlice({
// // // //   name: "combos",
// // // //   initialState,
// // // //   reducers: {
// // // //     addCombo: (
// // // //       state,
// // // //       action: PayloadAction<
// // // //         Omit<ProductCombo, "id" | "createdAt" | "updatedAt">
// // // //       >
// // // //     ) => {
// // // //       state.combos.unshift({
// // // //         ...action.payload,
// // // //         id: Date.now().toString(),
// // // //         createdAt: new Date().toISOString(),
// // // //         updatedAt: new Date().toISOString(),
// // // //       });
// // // //     },
// // // //     editCombo: (state, action: PayloadAction<ProductCombo>) => {
// // // //       const index = state.combos.findIndex((c) => c.id === action.payload.id);
// // // //       if (index !== -1) {
// // // //         state.combos[index] = {
// // // //           ...action.payload,
// // // //           updatedAt: new Date().toISOString(),
// // // //         };
// // // //       }
// // // //     },
// // // //     deleteCombo: (state, action: PayloadAction<string>) => {
// // // //       state.combos = state.combos.filter((c) => c.id !== action.payload);
// // // //     },
// // // //     toggleComboStatus: (state, action: PayloadAction<string>) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload);
// // // //       if (combo) {
// // // //         combo.status = combo.status === "active" ? "inactive" : "active";
// // // //         combo.updatedAt = new Date().toISOString();
// // // //       }
// // // //     },
// // // //     // Product-specific actions adapted for combos
// // // //     updateStock: (
// // // //       state,
// // // //       action: PayloadAction<{ id: string; stocks: number }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // // //       if (combo) {
// // // //         combo.stocks = action.payload.stocks;
// // // //         combo.updatedAt = new Date().toISOString();
// // // //       }
// // // //     },
// // // //     // Product-specific actions for combo products
// // // //     addComboProduct: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         product: Omit<ComboProduct, "id">;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         combo.products.push({
// // // //           ...action.payload.product,
// // // //           id: `${combo.id}-${Date.now()}`,
// // // //         });
// // // //         combo.updatedAt = new Date().toISOString();

// // // //         // Recalculate combo price
// // // //         const totalPrice = combo.products.reduce((sum, item) => {
// // // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // // //         }, 0);
// // // //         combo.price = Math.floor(
// // // //           totalPrice * (1 - combo.discountPercentage / 100)
// // // //         );
// // // //       }
// // // //     },
// // // //     updateComboProduct: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         productId: string;
// // // //         product: ComboProduct;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const productIndex = combo.products.findIndex(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (productIndex !== -1) {
// // // //           combo.products[productIndex] = action.payload.product;
// // // //           combo.updatedAt = new Date().toISOString();

// // // //           // Recalculate combo price
// // // //           const totalPrice = combo.products.reduce((sum, item) => {
// // // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // // //           }, 0);
// // // //           combo.price = Math.floor(
// // // //             totalPrice * (1 - combo.discountPercentage / 100)
// // // //           );
// // // //         }
// // // //       }
// // // //     },
// // // //     deleteComboProduct: (
// // // //       state,
// // // //       action: PayloadAction<{ comboId: string; productId: string }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         combo.products = combo.products.filter(
// // // //           (p) => p.id !== action.payload.productId
// // // //         );
// // // //         combo.updatedAt = new Date().toISOString();

// // // //         // Recalculate combo price
// // // //         const totalPrice = combo.products.reduce((sum, item) => {
// // // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // // //         }, 0);
// // // //         combo.price = Math.floor(
// // // //           totalPrice * (1 - combo.discountPercentage / 100)
// // // //         );
// // // //       }
// // // //     },
// // // //     updateComboProductQuantity: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         productId: string;
// // // //         quantity: number;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const product = combo.products.find(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (product) {
// // // //           product.quantity = action.payload.quantity;
// // // //           combo.updatedAt = new Date().toISOString();

// // // //           // Recalculate combo price
// // // //           const totalPrice = combo.products.reduce((sum, item) => {
// // // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // // //           }, 0);
// // // //           combo.price = Math.floor(
// // // //             totalPrice * (1 - combo.discountPercentage / 100)
// // // //           );
// // // //         }
// // // //       }
// // // //     },
// // // //     updateComboProductPricing: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         productId: string;
// // // //         pricing: ProductPricing;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const product = combo.products.find(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (product) {
// // // //           product.pricing = action.payload.pricing;
// // // //           combo.updatedAt = new Date().toISOString();

// // // //           // Recalculate combo price
// // // //           const totalPrice = combo.products.reduce((sum, item) => {
// // // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // // //           }, 0);
// // // //           combo.price = Math.floor(
// // // //             totalPrice * (1 - combo.discountPercentage / 100)
// // // //           );
// // // //         }
// // // //       }
// // // //     },
// // // //     toggleComboProductPricingStatus: (
// // // //       state,
// // // //       action: PayloadAction<{ comboId: string; productId: string }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const product = combo.products.find(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (product && product.pricing) {
// // // //           product.pricing.status = !product.pricing.status;
// // // //           combo.updatedAt = new Date().toISOString();
// // // //         }
// // // //       }
// // // //     },
// // // //     // Add discount percentage action
// // // //     updateComboDiscount: (
// // // //       state,
// // // //       action: PayloadAction<{ id: string; discountPercentage: number }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // // //       if (combo) {
// // // //         combo.discountPercentage = action.payload.discountPercentage;
// // // //         combo.updatedAt = new Date().toISOString();

// // // //         // Recalculate combo price
// // // //         const totalPrice = combo.products.reduce((sum, item) => {
// // // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // // //         }, 0);
// // // //         combo.price = Math.floor(
// // // //           totalPrice * (1 - combo.discountPercentage / 100)
// // // //         );
// // // //       }
// // // //     },
// // // //   },

// // // //   extraReducers: (builder) => {
// // // //     builder
// // // //       .addCase(fetchCombos.pending, (state) => {
// // // //         state.status = "loading";
// // // //       })
// // // //       .addCase(fetchCombos.fulfilled, (state, action) => {
// // // //         state.status = "succeeded";
// // // //         state.combos = action.payload;
// // // //       })
// // // //       .addCase(fetchCombos.rejected, (state, action) => {
// // // //         state.status = "failed";
// // // //         state.error = action.error.message || "Failed to fetch combos";
// // // //       });
// // // //   },
// // // // });

// // // // export const {
// // // //   addCombo,
// // // //   editCombo,
// // // //   deleteCombo,
// // // //   toggleComboStatus,
// // // //   updateStock,
// // // //   addComboProduct,
// // // //   updateComboProduct,
// // // //   deleteComboProduct,
// // // //   updateComboProductQuantity,
// // // //   updateComboProductPricing,
// // // //   toggleComboProductPricingStatus,
// // // //   updateComboDiscount,
// // // // } = comboSlice.actions;

// // // // export default comboSlice.reducer;

// // // // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// // // // import { Product, ProductPricing } from "./productsSlice";

// // // // export interface ComboProduct {
// // // //   id: string;
// // // //   productId: string;
// // // //   quantity: number;
// // // //   product: Product;
// // // //   // Adding pricing information from ProductPricing
// // // //   pricing?: ProductPricing;
// // // // }

// // // // export interface ProductCombo {
// // // //   id: string;
// // // //   name: string;
// // // //   description: string;
// // // //   image: string; // Will store base64 string or URL
// // // //   price: number;
// // // //   discountPercentage: number;
// // // //   status: "active" | "inactive";
// // // //   createdAt: string;
// // // //   updatedAt: string;
// // // //   products: ComboProduct[];
// // // //   // Adding product-specific fields
// // // //   stocks?: number;
// // // //   calories?: number;
// // // //   fat?: number;
// // // //   carb?: number;
// // // //   protein?: number;
// // // //   section?: string;
// // // //   category?: string;
// // // //   subCategory?: string;
// // // //   productImage: string; // Will store base64 string or URL
// // // //   nxImage: string;
// // // // }

// // // // interface CombosState {
// // // //   combos: ProductCombo[];
// // // //   status: "idle" | "loading" | "succeeded" | "failed";
// // // //   error: string | null;
// // // // }

// // // // // ----------------------
// // // // // FIXED CATEGORY MAPPING (from productsSlice)
// // // // // ----------------------

// // // // const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// // // // const categories = {
// // // //   Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// // // //   Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// // // //   Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// // // //   Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// // // //   Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// // // // };

// // // // const subCategories = {
// // // //   Vegetables: [
// // // //     "Leafy Greens",
// // // //     "Root Vegetables",
// // // //     "Cruciferous",
// // // //     "Allium",
// // // //     "Podded",
// // // //   ],
// // // //   Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// // // //   Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// // // //   Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// // // //   Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],

// // // //   Juices: [
// // // //     "Fruit Juice",
// // // //     "Vegetable Juice",
// // // //     "Smoothies",
// // // //     "Concentrates",
// // // //     "Fresh",
// // // //   ],
// // // //   Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// // // //   Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// // // //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // // //   Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],

// // // //   Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// // // //   Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// // // //   Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// // // //   Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// // // //   Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],

// // // //   Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// // // //   Cookies: [
// // // //     "Chocolate Chip",
// // // //     "Oatmeal",
// // // //     "Sugar",
// // // //     "Peanut Butter",
// // // //     "Shortbread",
// // // //   ],
// // // //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // // //   Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// // // //   Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],

// // // //   Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// // // //   FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// // // //   FrozenFruits: [
// // // //     "Mixed Berries",
// // // //     "Tropical",
// // // //     "Melon",
// // // //     "Citrus",
// // // //     "Stone Fruits",
// // // //   ],
// // // //   Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// // // //   Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// // // // };

// // // // const productNames = {
// // // //   Vegetables: ["Spinach", "Carrots", "Broccoli", "Onions", "Peas"],
// // // //   Fruits: ["Oranges", "Strawberries", "Pineapple", "Peaches", "Apples"],
// // // //   Grains: ["Whole Wheat", "Basmati Rice", "Cornmeal", "Barley", "Rolled Oats"],
// // // //   Meat: [
// // // //     "Sirloin Steak",
// // // //     "Pork Chops",
// // // //     "Chicken Breast",
// // // //     "Lamb Chops",
// // // //     "Turkey Breast",
// // // //   ],
// // // //   Seafood: ["Salmon", "Shrimp", "Lobster", "Clams", "Sea Urchin"],

// // // //   Juices: [
// // // //     "Orange Juice",
// // // //     "Carrot Juice",
// // // //     "Berry Smoothie",
// // // //     "Apple Concentrate",
// // // //     "Fresh Grapefruit",
// // // //   ],
// // // //   Sodas: ["Cola", "Lemon-Lime", "Orange Soda", "Ginger Ale", "Root Beer"],
// // // //   Tea: ["Earl Grey", "Green Tea", "Chamomile", "Oolong", "White Tea"],
// // // //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // // //   Water: [
// // // //     "Mineral Water",
// // // //     "Spring Water",
// // // //     "Sparkling Water",
// // // //     "Distilled Water",
// // // //     "Lemon Water",
// // // //   ],

// // // //   Milk: [
// // // //     "Whole Milk",
// // // //     "Skim Milk",
// // // //     "Low-Fat Milk",
// // // //     "Lactose-Free Milk",
// // // //     "Organic Milk",
// // // //   ],
// // // //   Cheese: [
// // // //     "Cheddar Cheese",
// // // //     "Mozzarella",
// // // //     "Swiss Cheese",
// // // //     "Blue Cheese",
// // // //     "Feta",
// // // //   ],
// // // //   Yogurt: [
// // // //     "Greek Yogurt",
// // // //     "Plain Yogurt",
// // // //     "Strawberry Yogurt",
// // // //     "Frozen Yogurt",
// // // //     "Drinkable Yogurt",
// // // //   ],
// // // //   Butter: [
// // // //     "Salted Butter",
// // // //     "Unsalted Butter",
// // // //     "Whipped Butter",
// // // //     "Clarified Butter",
// // // //     "Almond Butter",
// // // //   ],
// // // //   Cream: [
// // // //     "Heavy Cream",
// // // //     "Light Cream",
// // // //     "Whipping Cream",
// // // //     "Sour Cream",
// // // //     "Half-and-Half",
// // // //   ],

// // // //   Chips: [
// // // //     "Potato Chips",
// // // //     "Tortilla Chips",
// // // //     "Veggie Chips",
// // // //     "Kale Chips",
// // // //     "Pita Chips",
// // // //   ],
// // // //   Cookies: [
// // // //     "Chocolate Chip Cookies",
// // // //     "Oatmeal Cookies",
// // // //     "Sugar Cookies",
// // // //     "Peanut Butter Cookies",
// // // //     "Shortbread",
// // // //   ],
// // // //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // // //   Candy: [
// // // //     "Chocolate Bar",
// // // //     "Gummy Bears",
// // // //     "Lollipop",
// // // //     "Taffy",
// // // //     "Sour Patch Kids",
// // // //   ],
// // // //   Crackers: [
// // // //     "Cheese Crackers",
// // // //     "Whole Wheat Crackers",
// // // //     "Rice Crackers",
// // // //     "Water Crackers",
// // // //     "Animal Crackers",
// // // //   ],

// // // //   Meals: [
// // // //     "Chicken Dinner",
// // // //     "Beef Lunch",
// // // //     "Pancake Breakfast",
// // // //     "Spring Rolls",
// // // //     "Garlic Bread",
// // // //   ],
// // // //   FrozenVegetables: [
// // // //     "Mixed Vegetables",
// // // //     "Frozen Peas",
// // // //     "Steamed Broccoli",
// // // //     "Seasoned Corn",
// // // //     "Plain Carrots",
// // // //   ],
// // // //   FrozenFruits: [
// // // //     "Mixed Berries",
// // // //     "Tropical Mix",
// // // //     "Melon Cubes",
// // // //     "Citrus Slices",
// // // //     "Peach Halves",
// // // //   ],
// // // //   Desserts: [
// // // //     "Vanilla Ice Cream",
// // // //     "Apple Pie",
// // // //     "Chocolate Cake",
// // // //     "Croissants",
// // // //     "Rice Pudding",
// // // //   ],
// // // //   Pizza: [
// // // //     "Cheese Pizza",
// // // //     "Pepperoni Pizza",
// // // //     "Veggie Pizza",
// // // //     "Meat Lovers Pizza",
// // // //     "Supreme Pizza",
// // // //   ],
// // // // };

// // // // // ----------------------
// // // // // COMBO GENERATOR (similar to product generator)
// // // // // ----------------------

// // // // const generateCombos = (): ProductCombo[] => {
// // // //   const combos: ProductCombo[] = [];

// // // //   for (let i = 1; i <= 20; i++) {
// // // //     const section = sections[Math.floor(Math.random() * sections.length)];
// // // //     const catList = categories[section] || [];
// // // //     const category = catList[Math.floor(Math.random() * catList.length)];
// // // //     const subList = subCategories[category] || [];
// // // //     const subCategory = subList[Math.floor(Math.random() * subList.length)];
// // // //     const nameList = productNames[subCategory] ||
// // // //       productNames[category] || ["Combo"];
// // // //     const name = nameList[Math.floor(Math.random() * nameList.length)];
// // // //     const seed = Math.random().toString(36).substring(7);

// // // //     // Generate seeds for product images
// // // //     const productImageSeed = Math.random().toString(36).substring(7);
// // // //     const nxImageSeed = Math.random().toString(36).substring(7);

// // // //     // Generate 2-5 products for each combo
// // // //     const productCount = Math.floor(Math.random() * 4) + 2;
// // // //     const products: ComboProduct[] = [];

// // // //     for (let j = 0; j < productCount; j++) {
// // // //       // Generate a mock product for this combo item
// // // //       const productSection =
// // // //         sections[Math.floor(Math.random() * sections.length)];
// // // //       const productCatList = categories[productSection] || [];
// // // //       const productCategory =
// // // //         productCatList[Math.floor(Math.random() * productCatList.length)];
// // // //       const productSubList = subCategories[productCategory] || [];
// // // //       const productSubCategory =
// // // //         productSubList[Math.floor(Math.random() * productSubList.length)];
// // // //       const productNameList = productNames[productSubCategory] ||
// // // //         productNames[productCategory] || ["Product"];
// // // //       const productName =
// // // //         productNameList[Math.floor(Math.random() * productNameList.length)];
// // // //       const productSeed = Math.random().toString(36).substring(7);

// // // //       // Generate 1-2 pricing options for each product
// // // //       const pricingCount = Math.floor(Math.random() * 2) + 1;
// // // //       const pricings: ProductPricing[] = [];

// // // //       for (let k = 0; k < pricingCount; k++) {
// // // //         const quantity = k === 0 ? "1" : "500";
// // // //         const uom = k === 0 ? "kg" : "g";
// // // //         const purchasePrice = Math.floor(Math.random() * 500) + 100;
// // // //         const price = Math.floor(purchasePrice * (1.2 + Math.random() * 0.5));
// // // //         const offerPercentage = Math.floor(Math.random() * 30);

// // // //         const appSalePrice = price - purchasePrice; // amount

// // // //         const appPercentage =
// // // //           Math.floor((appSalePrice / price) * 100) - offerPercentage; // %

// // // //         const appAmount = Math.floor((appPercentage / 100) * price); // ₹ amount after offer

// // // //         pricings.push({
// // // //           id: `${i}-${j}-${k}`,
// // // //           quantity,
// // // //           uom,
// // // //           purchasePrice,
// // // //           price,
// // // //           offerPercentage,
// // // //           appSalePrice, // before offer amount
// // // //           appPercentage, // after offer %
// // // //           appAmount, // after offer amount
// // // //           cgst: 0,
// // // //           sgst: 0,
// // // //           status: Math.random() > 0.3,
// // // //         });
// // // //       }

// // // //       const mockProduct: Product = {
// // // //         id: `product-${i}-${j}`,
// // // //         image: `https://picsum.photos/seed/${productSeed}/300/300.jpg`,
// // // //         nxImage: `https://picsum.photos/seed/${productSeed}-nx/300/300.jpg`,
// // // //         name: `${productName} ${i}-${j}`,
// // // //         stocks: Math.floor(Math.random() * 500) + 10,
// // // //         calories: Math.floor(Math.random() * 300) + 20,
// // // //         fat: Math.floor(Math.random() * 30) + 1,
// // // //         carb: Math.floor(Math.random() * 50) + 1,
// // // //         protein: Math.floor(Math.random() * 30) + 1,
// // // //         section: productSection,
// // // //         category: productCategory,
// // // //         subCategory: productSubCategory,
// // // //         status: Math.random() > 0.3 ? "active" : "inactive",
// // // //         createdAt: new Date().toISOString(),
// // // //         updatedAt: new Date().toISOString(),
// // // //         pricings,
// // // //       };

// // // //       // Select a random pricing for this combo product
// // // //       const selectedPricing =
// // // //         pricings[Math.floor(Math.random() * pricings.length)];

// // // //       products.push({
// // // //         id: `${i}-${j}`,
// // // //         productId: mockProduct.id,
// // // //         quantity: Math.floor(Math.random() * 3) + 1,
// // // //         product: mockProduct,
// // // //         pricing: selectedPricing,
// // // //       });
// // // //     }

// // // //     // Calculate combo price based on product prices
// // // //     const totalPrice = products.reduce((sum, item) => {
// // // //       return sum + (item.pricing?.price || 0) * item.quantity;
// // // //     }, 0);

// // // //     // Apply discount
// // // //     const discountPercentage = Math.floor(Math.random() * 30);
// // // //     const price = Math.floor(totalPrice * (1 - discountPercentage / 100));

// // // //     combos.push({
// // // //       id: `combo-${i}`,
// // // //       name: `${name} Combo ${i}`,
// // // //       description: `Delicious combo featuring ${products.length} items`,
// // // //       image: `https://picsum.photos/seed/${seed}/300/300.jpg`,
// // // //       price,
// // // //       discountPercentage,
// // // //       status: Math.random() > 0.3 ? "active" : "inactive",
// // // //       createdAt: new Date().toISOString(),
// // // //       updatedAt: new Date().toISOString(),
// // // //       products,
// // // //       // Add product-specific fields
// // // //       stocks: Math.floor(Math.random() * 100) + 10,
// // // //       calories: Math.floor(Math.random() * 300) + 20,
// // // //       fat: Math.floor(Math.random() * 30) + 1,
// // // //       carb: Math.floor(Math.random() * 50) + 1,
// // // //       protein: Math.floor(Math.random() * 30) + 1,
// // // //       section,
// // // //       category,
// // // //       subCategory,
// // // //       // Add productImage and nxImage
// // // //       productImage: `https://picsum.photos/seed/${productImageSeed}/300/300.jpg`,
// // // //       nxImage: `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`,
// // // //     });
// // // //   }

// // // //   return combos;
// // // // };

// // // // // ----------------------
// // // // // ASYNC THUNKS
// // // // // ----------------------

// // // // export const fetchCombos = createAsyncThunk("combos/fetchCombos", async () => {
// // // //   // In a real app, this would be an API call
// // // //   // For now, we'll return generated combos
// // // //   await new Promise((resolve) => setTimeout(resolve, 500));
// // // //   return generateCombos();
// // // // });

// // // // // ----------------------
// // // // // INITIAL STATE
// // // // // ----------------------

// // // // const initialState: CombosState = {
// // // //   combos: [],
// // // //   status: "idle",
// // // //   error: null,
// // // // };

// // // // // ----------------------
// // // // // SLICE
// // // // // ----------------------

// // // // const comboSlice = createSlice({
// // // //   name: "combos",
// // // //   initialState,
// // // //   reducers: {
// // // //     addCombo: (
// // // //       state,
// // // //       action: PayloadAction<
// // // //         Omit<ProductCombo, "id" | "createdAt" | "updatedAt">
// // // //       >
// // // //     ) => {
// // // //       state.combos.unshift({
// // // //         ...action.payload,
// // // //         id: Date.now().toString(),
// // // //         createdAt: new Date().toISOString(),
// // // //         updatedAt: new Date().toISOString(),
// // // //       });
// // // //     },
// // // //     editCombo: (state, action: PayloadAction<ProductCombo>) => {
// // // //       const index = state.combos.findIndex((c) => c.id === action.payload.id);
// // // //       if (index !== -1) {
// // // //         state.combos[index] = {
// // // //           ...action.payload,
// // // //           updatedAt: new Date().toISOString(),
// // // //         };
// // // //       }
// // // //     },
// // // //     deleteCombo: (state, action: PayloadAction<string>) => {
// // // //       state.combos = state.combos.filter((c) => c.id !== action.payload);
// // // //     },
// // // //     toggleComboStatus: (state, action: PayloadAction<string>) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload);
// // // //       if (combo) {
// // // //         combo.status = combo.status === "active" ? "inactive" : "active";
// // // //         combo.updatedAt = new Date().toISOString();
// // // //       }
// // // //     },
// // // //     // Product-specific actions adapted for combos
// // // //     updateStock: (
// // // //       state,
// // // //       action: PayloadAction<{ id: string; stocks: number }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // // //       if (combo) {
// // // //         combo.stocks = action.payload.stocks;
// // // //         combo.updatedAt = new Date().toISOString();
// // // //       }
// // // //     },
// // // //     // Product-specific actions for combo products
// // // //     addComboProduct: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         product: Omit<ComboProduct, "id">;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         combo.products.push({
// // // //           ...action.payload.product,
// // // //           id: `${combo.id}-${Date.now()}`,
// // // //         });
// // // //         combo.updatedAt = new Date().toISOString();

// // // //         // Recalculate combo price
// // // //         const totalPrice = combo.products.reduce((sum, item) => {
// // // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // // //         }, 0);
// // // //         combo.price = Math.floor(
// // // //           totalPrice * (1 - combo.discountPercentage / 100)
// // // //         );
// // // //       }
// // // //     },
// // // //     updateComboProduct: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         productId: string;
// // // //         product: ComboProduct;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const productIndex = combo.products.findIndex(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (productIndex !== -1) {
// // // //           combo.products[productIndex] = action.payload.product;
// // // //           combo.updatedAt = new Date().toISOString();

// // // //           // Recalculate combo price
// // // //           const totalPrice = combo.products.reduce((sum, item) => {
// // // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // // //           }, 0);
// // // //           combo.price = Math.floor(
// // // //             totalPrice * (1 - combo.discountPercentage / 100)
// // // //           );
// // // //         }
// // // //       }
// // // //     },
// // // //     deleteComboProduct: (
// // // //       state,
// // // //       action: PayloadAction<{ comboId: string; productId: string }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         combo.products = combo.products.filter(
// // // //           (p) => p.id !== action.payload.productId
// // // //         );
// // // //         combo.updatedAt = new Date().toISOString();

// // // //         // Recalculate combo price
// // // //         const totalPrice = combo.products.reduce((sum, item) => {
// // // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // // //         }, 0);
// // // //         combo.price = Math.floor(
// // // //           totalPrice * (1 - combo.discountPercentage / 100)
// // // //         );
// // // //       }
// // // //     },
// // // //     updateComboProductQuantity: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         productId: string;
// // // //         quantity: number;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const product = combo.products.find(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (product) {
// // // //           product.quantity = action.payload.quantity;
// // // //           combo.updatedAt = new Date().toISOString();

// // // //           // Recalculate combo price
// // // //           const totalPrice = combo.products.reduce((sum, item) => {
// // // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // // //           }, 0);
// // // //           combo.price = Math.floor(
// // // //             totalPrice * (1 - combo.discountPercentage / 100)
// // // //           );
// // // //         }
// // // //       }
// // // //     },
// // // //     updateComboProductPricing: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         comboId: string;
// // // //         productId: string;
// // // //         pricing: ProductPricing;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const product = combo.products.find(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (product) {
// // // //           product.pricing = action.payload.pricing;
// // // //           combo.updatedAt = new Date().toISOString();

// // // //           // Recalculate combo price
// // // //           const totalPrice = combo.products.reduce((sum, item) => {
// // // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // // //           }, 0);
// // // //           combo.price = Math.floor(
// // // //             totalPrice * (1 - combo.discountPercentage / 100)
// // // //           );
// // // //         }
// // // //       }
// // // //     },
// // // //     toggleComboProductPricingStatus: (
// // // //       state,
// // // //       action: PayloadAction<{ comboId: string; productId: string }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // // //       if (combo) {
// // // //         const product = combo.products.find(
// // // //           (p) => p.id === action.payload.productId
// // // //         );
// // // //         if (product && product.pricing) {
// // // //           product.pricing.status = !product.pricing.status;
// // // //           combo.updatedAt = new Date().toISOString();
// // // //         }
// // // //       }
// // // //     },
// // // //     // Add discount percentage action
// // // //     updateComboDiscount: (
// // // //       state,
// // // //       action: PayloadAction<{ id: string; discountPercentage: number }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // // //       if (combo) {
// // // //         combo.discountPercentage = action.payload.discountPercentage;
// // // //         combo.updatedAt = new Date().toISOString();

// // // //         // Recalculate combo price
// // // //         const totalPrice = combo.products.reduce((sum, item) => {
// // // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // // //         }, 0);
// // // //         combo.price = Math.floor(
// // // //           totalPrice * (1 - combo.discountPercentage / 100)
// // // //         );
// // // //       }
// // // //     },
// // // //     // Add new reducers for updating productImage and nxImage
// // // //     updateComboImages: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         id: string;
// // // //         productImage: string;
// // // //         nxImage: string;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // // //       if (combo) {
// // // //         combo.productImage = action.payload.productImage;
// // // //         combo.nxImage = action.payload.nxImage;
// // // //         combo.updatedAt = new Date().toISOString();
// // // //       }
// // // //     },
// // // //     updateComboProductImage: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         id: string;
// // // //         productImage: string;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // // //       if (combo) {
// // // //         combo.productImage = action.payload.productImage;
// // // //         combo.updatedAt = new Date().toISOString();
// // // //       }
// // // //     },
// // // //     updateComboNxImage: (
// // // //       state,
// // // //       action: PayloadAction<{
// // // //         id: string;
// // // //         nxImage: string;
// // // //       }>
// // // //     ) => {
// // // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // // //       if (combo) {
// // // //         combo.nxImage = action.payload.nxImage;
// // // //         combo.updatedAt = new Date().toISOString();
// // // //       }
// // // //     },
// // // //   },

// // // //   extraReducers: (builder) => {
// // // //     builder
// // // //       .addCase(fetchCombos.pending, (state) => {
// // // //         state.status = "loading";
// // // //       })
// // // //       .addCase(fetchCombos.fulfilled, (state, action) => {
// // // //         state.status = "succeeded";
// // // //         state.combos = action.payload;
// // // //       })
// // // //       .addCase(fetchCombos.rejected, (state, action) => {
// // // //         state.status = "failed";
// // // //         state.error = action.error.message || "Failed to fetch combos";
// // // //       });
// // // //   },
// // // // });

// // // // export const {
// // // //   addCombo,
// // // //   editCombo,
// // // //   deleteCombo,
// // // //   toggleComboStatus,
// // // //   updateStock,
// // // //   addComboProduct,
// // // //   updateComboProduct,
// // // //   deleteComboProduct,
// // // //   updateComboProductQuantity,
// // // //   updateComboProductPricing,
// // // //   toggleComboProductPricingStatus,
// // // //   updateComboDiscount,
// // // //   updateComboImages,
// // // //   updateComboProductImage,
// // // //   updateComboNxImage,
// // // // } = comboSlice.actions;

// // // // export default comboSlice.reducer;

// // // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// // // import { Product, ProductPricing } from "./productsSlice";

// // // export interface ComboProduct {
// // //   id: string;
// // //   productId: string;
// // //   quantity: number;
// // //   product: Product;
// // //   // Adding pricing information from ProductPricing
// // //   pricing?: ProductPricing;
// // // }

// // // export interface ProductCombo {
// // //   id: string;
// // //   name: string;
// // //   description: string;
// // //   image: string; // Will store base64 string or URL
// // //   price: number;
// // //   discountPercentage: number;
// // //   status: "active" | "inactive";
// // //   createdAt: string;
// // //   updatedAt: string;
// // //   products: ComboProduct[];
// // //   // Adding product-specific fields
// // //   stocks?: number;
// // //   calories?: number;
// // //   fat?: number;
// // //   carb?: number;
// // //   protein?: number;
// // //   section?: string;
// // //   category?: string;
// // //   subCategory?: string;
// // //   productImage: string; // Will store base64 string or URL
// // //   nxImage: string;
// // // }

// // // interface CombosState {
// // //   combos: ProductCombo[];
// // //   status: "idle" | "loading" | "succeeded" | "failed";
// // //   error: string | null;
// // // }

// // // // ----------------------
// // // // FIXED CATEGORY MAPPING (from productsSlice)
// // // // ----------------------

// // // const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// // // const categories = {
// // //   Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// // //   Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// // //   Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// // //   Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// // //   Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// // // };

// // // const subCategories = {
// // //   Vegetables: [
// // //     "Leafy Greens",
// // //     "Root Vegetables",
// // //     "Cruciferous",
// // //     "Allium",
// // //     "Podded",
// // //   ],
// // //   Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// // //   Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// // //   Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// // //   Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],

// // //   Juices: [
// // //     "Fruit Juice",
// // //     "Vegetable Juice",
// // //     "Smoothies",
// // //     "Concentrates",
// // //     "Fresh",
// // //   ],
// // //   Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// // //   Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// // //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // //   Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],

// // //   Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// // //   Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// // //   Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// // //   Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// // //   Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],

// // //   Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// // //   Cookies: [
// // //     "Chocolate Chip",
// // //     "Oatmeal",
// // //     "Sugar",
// // //     "Peanut Butter",
// // //     "Shortbread",
// // //   ],
// // //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // //   Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// // //   Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],

// // //   Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// // //   FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// // //   FrozenFruits: [
// // //     "Mixed Berries",
// // //     "Tropical",
// // //     "Melon",
// // //     "Citrus",
// // //     "Stone Fruits",
// // //   ],
// // //   Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// // //   Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// // // };

// // // const productNames = {
// // //   Vegetables: ["Spinach", "Carrots", "Broccoli", "Onions", "Peas"],
// // //   Fruits: ["Oranges", "Strawberries", "Pineapple", "Peaches", "Apples"],
// // //   Grains: ["Whole Wheat", "Basmati Rice", "Cornmeal", "Barley", "Rolled Oats"],
// // //   Meat: [
// // //     "Sirloin Steak",
// // //     "Pork Chops",
// // //     "Chicken Breast",
// // //     "Lamb Chops",
// // //     "Turkey Breast",
// // //   ],
// // //   Seafood: ["Salmon", "Shrimp", "Lobster", "Clams", "Sea Urchin"],

// // //   Juices: [
// // //     "Orange Juice",
// // //     "Carrot Juice",
// // //     "Berry Smoothie",
// // //     "Apple Concentrate",
// // //     "Fresh Grapefruit",
// // //   ],
// // //   Sodas: ["Cola", "Lemon-Lime", "Orange Soda", "Ginger Ale", "Root Beer"],
// // //   Tea: ["Earl Grey", "Green Tea", "Chamomile", "Oolong", "White Tea"],
// // //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // //   Water: [
// // //     "Mineral Water",
// // //     "Spring Water",
// // //     "Sparkling Water",
// // //     "Distilled Water",
// // //     "Lemon Water",
// // //   ],

// // //   Milk: [
// // //     "Whole Milk",
// // //     "Skim Milk",
// // //     "Low-Fat Milk",
// // //     "Lactose-Free Milk",
// // //     "Organic Milk",
// // //   ],
// // //   Cheese: [
// // //     "Cheddar Cheese",
// // //     "Mozzarella",
// // //     "Swiss Cheese",
// // //     "Blue Cheese",
// // //     "Feta",
// // //   ],
// // //   Yogurt: [
// // //     "Greek Yogurt",
// // //     "Plain Yogurt",
// // //     "Strawberry Yogurt",
// // //     "Frozen Yogurt",
// // //     "Drinkable Yogurt",
// // //   ],
// // //   Butter: [
// // //     "Salted Butter",
// // //     "Unsalted Butter",
// // //     "Whipped Butter",
// // //     "Clarified Butter",
// // //     "Almond Butter",
// // //   ],
// // //   Cream: [
// // //     "Heavy Cream",
// // //     "Light Cream",
// // //     "Whipping Cream",
// // //     "Sour Cream",
// // //     "Half-and-Half",
// // //   ],

// // //   Chips: [
// // //     "Potato Chips",
// // //     "Tortilla Chips",
// // //     "Veggie Chips",
// // //     "Kale Chips",
// // //     "Pita Chips",
// // //   ],
// // //   Cookies: [
// // //     "Chocolate Chip Cookies",
// // //     "Oatmeal Cookies",
// // //     "Sugar Cookies",
// // //     "Peanut Butter Cookies",
// // //     "Shortbread",
// // //   ],
// // //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // //   Candy: [
// // //     "Chocolate Bar",
// // //     "Gummy Bears",
// // //     "Lollipop",
// // //     "Taffy",
// // //     "Sour Patch Kids",
// // //   ],
// // //   Crackers: [
// // //     "Cheese Crackers",
// // //     "Whole Wheat Crackers",
// // //     "Rice Crackers",
// // //     "Water Crackers",
// // //     "Animal Crackers",
// // //   ],

// // //   Meals: [
// // //     "Chicken Dinner",
// // //     "Beef Lunch",
// // //     "Pancake Breakfast",
// // //     "Spring Rolls",
// // //     "Garlic Bread",
// // //   ],
// // //   FrozenVegetables: [
// // //     "Mixed Vegetables",
// // //     "Frozen Peas",
// // //     "Steamed Broccoli",
// // //     "Seasoned Corn",
// // //     "Plain Carrots",
// // //   ],
// // //   FrozenFruits: [
// // //     "Mixed Berries",
// // //     "Tropical Mix",
// // //     "Melon Cubes",
// // //     "Citrus Slices",
// // //     "Peach Halves",
// // //   ],
// // //   Desserts: [
// // //     "Vanilla Ice Cream",
// // //     "Apple Pie",
// // //     "Chocolate Cake",
// // //     "Croissants",
// // //     "Rice Pudding",
// // //   ],
// // //   Pizza: [
// // //     "Cheese Pizza",
// // //     "Pepperoni Pizza",
// // //     "Veggie Pizza",
// // //     "Meat Lovers Pizza",
// // //     "Supreme Pizza",
// // //   ],
// // // };

// // // // ----------------------
// // // // COMBO GENERATOR (similar to product generator)
// // // // ----------------------

// // // const generateCombos = (): ProductCombo[] => {
// // //   const combos: ProductCombo[] = [];

// // //   for (let i = 1; i <= 20; i++) {
// // //     const section = sections[Math.floor(Math.random() * sections.length)];
// // //     const catList = categories[section] || [];
// // //     const category = catList[Math.floor(Math.random() * catList.length)];
// // //     const subList = subCategories[category] || [];
// // //     const subCategory = subList[Math.floor(Math.random() * subList.length)];
// // //     const nameList = productNames[subCategory] ||
// // //       productNames[category] || ["Combo"];
// // //     const name = nameList[Math.floor(Math.random() * nameList.length)];
// // //     const seed = Math.random().toString(36).substring(7);

// // //     // Generate seeds for product images
// // //     const productImageSeed = Math.random().toString(36).substring(7);
// // //     const nxImageSeed = Math.random().toString(36).substring(7);

// // //     // Generate 2-5 products for each combo
// // //     const productCount = Math.floor(Math.random() * 4) + 2;
// // //     const products: ComboProduct[] = [];

// // //     for (let j = 0; j < productCount; j++) {
// // //       // Generate a mock product for this combo item
// // //       const productSection =
// // //         sections[Math.floor(Math.random() * sections.length)];
// // //       const productCatList = categories[productSection] || [];
// // //       const productCategory =
// // //         productCatList[Math.floor(Math.random() * productCatList.length)];
// // //       const productSubList = subCategories[productCategory] || [];
// // //       const productSubCategory =
// // //         productSubList[Math.floor(Math.random() * productSubList.length)];
// // //       const productNameList = productNames[productSubCategory] ||
// // //         productNames[productCategory] || ["Product"];
// // //       const productName =
// // //         productNameList[Math.floor(Math.random() * productNameList.length)];
// // //       const productSeed = Math.random().toString(36).substring(7);

// // //       // Generate 1-2 pricing options for each product
// // //       const pricingCount = Math.floor(Math.random() * 2) + 1;
// // //       const pricings: ProductPricing[] = [];

// // //       for (let k = 0; k < pricingCount; k++) {
// // //         const quantity = k === 0 ? "1" : "500";
// // //         const uom = k === 0 ? "kg" : "g";
// // //         const purchasePrice = Math.floor(Math.random() * 500) + 100;
// // //         const price = Math.floor(purchasePrice * (1.2 + Math.random() * 0.5));
// // //         const offerPercentage = Math.floor(Math.random() * 30);

// // //         const appSalePrice = price - purchasePrice; // amount

// // //         const appPercentage =
// // //           Math.floor((appSalePrice / price) * 100) - offerPercentage; // %

// // //         const appAmount = Math.floor((appPercentage / 100) * price); // ₹ amount after offer

// // //         pricings.push({
// // //           id: `${i}-${j}-${k}`,
// // //           quantity,
// // //           uom,
// // //           purchasePrice,
// // //           price,
// // //           offerPercentage,
// // //           appSalePrice, // before offer amount
// // //           appPercentage, // after offer %
// // //           appAmount, // after offer amount
// // //           cgst: 0,
// // //           sgst: 0,
// // //           status: Math.random() > 0.3,
// // //         });
// // //       }

// // //       const mockProduct: Product = {
// // //         id: `product-${i}-${j}`,
// // //         image: `https://picsum.photos/seed/${productSeed}/300/300.jpg`,
// // //         nxImage: `https://picsum.photos/seed/${productSeed}-nx/300/300.jpg`,
// // //         name: `${productName} ${i}-${j}`,
// // //         stocks: Math.floor(Math.random() * 500) + 10,
// // //         calories: Math.floor(Math.random() * 300) + 20,
// // //         fat: Math.floor(Math.random() * 30) + 1,
// // //         carb: Math.floor(Math.random() * 50) + 1,
// // //         protein: Math.floor(Math.random() * 30) + 1,
// // //         section: productSection,
// // //         category: productCategory,
// // //         subCategory: productSubCategory,
// // //         status: Math.random() > 0.3 ? "active" : "inactive",
// // //         createdAt: new Date().toISOString(),
// // //         updatedAt: new Date().toISOString(),
// // //         pricings,
// // //       };

// // //       // Select a random pricing for this combo product
// // //       const selectedPricing =
// // //         pricings[Math.floor(Math.random() * pricings.length)];

// // //       products.push({
// // //         id: `${i}-${j}`,
// // //         productId: mockProduct.id,
// // //         quantity: Math.floor(Math.random() * 3) + 1,
// // //         product: mockProduct,
// // //         pricing: selectedPricing,
// // //       });
// // //     }

// // //     // Calculate combo price based on product prices
// // //     const totalPrice = products.reduce((sum, item) => {
// // //       return sum + (item.pricing?.price || 0) * item.quantity;
// // //     }, 0);

// // //     // Apply discount
// // //     const discountPercentage = Math.floor(Math.random() * 30);
// // //     const price = Math.floor(totalPrice * (1 - discountPercentage / 100));

// // //     combos.push({
// // //       id: `combo-${i}`,
// // //       name: `${name} Combo ${i}`,
// // //       description: `Delicious combo featuring ${products.length} items`,
// // //       image: `https://picsum.photos/seed/${seed}/300/300.jpg`,
// // //       price,
// // //       discountPercentage,
// // //       status: Math.random() > 0.3 ? "active" : "inactive",
// // //       createdAt: new Date().toISOString(),
// // //       updatedAt: new Date().toISOString(),
// // //       products,
// // //       // Add product-specific fields
// // //       stocks: Math.floor(Math.random() * 100) + 10,
// // //       calories: Math.floor(Math.random() * 300) + 20,
// // //       fat: Math.floor(Math.random() * 30) + 1,
// // //       carb: Math.floor(Math.random() * 50) + 1,
// // //       protein: Math.floor(Math.random() * 30) + 1,
// // //       section,
// // //       category,
// // //       subCategory,
// // //       // Add productImage and nxImage
// // //       productImage: `https://picsum.photos/seed/${productImageSeed}/300/300.jpg`,
// // //       nxImage: `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`,
// // //     });
// // //   }

// // //   return combos;
// // // };

// // // // ----------------------
// // // // ASYNC THUNKS
// // // // ----------------------

// // // export const fetchCombos = createAsyncThunk("combos/fetchCombos", async () => {
// // //   // In a real app, this would be an API call
// // //   // For now, we'll return generated combos
// // //   await new Promise((resolve) => setTimeout(resolve, 500));
// // //   return generateCombos();
// // // });

// // // // ----------------------
// // // // INITIAL STATE
// // // // ----------------------

// // // const initialState: CombosState = {
// // //   combos: [],
// // //   status: "idle",
// // //   error: null,
// // // };

// // // // ----------------------
// // // // SLICE
// // // // ----------------------

// // // const comboSlice = createSlice({
// // //   name: "combos",
// // //   initialState,
// // //   reducers: {
// // //     addCombo: (
// // //       state,
// // //       action: PayloadAction<
// // //         Omit<ProductCombo, "id" | "createdAt" | "updatedAt">
// // //       >
// // //     ) => {
// // //       state.combos.unshift({
// // //         ...action.payload,
// // //         id: Date.now().toString(),
// // //         createdAt: new Date().toISOString(),
// // //         updatedAt: new Date().toISOString(),
// // //       });
// // //     },
// // //     editCombo: (state, action: PayloadAction<ProductCombo>) => {
// // //       const index = state.combos.findIndex((c) => c.id === action.payload.id);
// // //       if (index !== -1) {
// // //         state.combos[index] = {
// // //           ...action.payload,
// // //           updatedAt: new Date().toISOString(),
// // //         };
// // //       }
// // //     },
// // //     deleteCombo: (state, action: PayloadAction<string>) => {
// // //       state.combos = state.combos.filter((c) => c.id !== action.payload);
// // //     },
// // //     toggleComboStatus: (state, action: PayloadAction<string>) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload);
// // //       if (combo) {
// // //         combo.status = combo.status === "active" ? "inactive" : "active";
// // //         combo.updatedAt = new Date().toISOString();
// // //       }
// // //     },
// // //     // Product-specific actions adapted for combos
// // //     updateStock: (
// // //       state,
// // //       action: PayloadAction<{ id: string; stocks: number }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // //       if (combo) {
// // //         combo.stocks = action.payload.stocks;
// // //         combo.updatedAt = new Date().toISOString();
// // //       }
// // //     },
// // //     // Product-specific actions for combo products
// // //     addComboProduct: (
// // //       state,
// // //       action: PayloadAction<{
// // //         comboId: string;
// // //         product: Omit<ComboProduct, "id">;
// // //       }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // //       if (combo) {
// // //         combo.products.push({
// // //           ...action.payload.product,
// // //           id: `${combo.id}-${Date.now()}`,
// // //         });
// // //         combo.updatedAt = new Date().toISOString();

// // //         // Recalculate combo price
// // //         const totalPrice = combo.products.reduce((sum, item) => {
// // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // //         }, 0);
// // //         combo.price = Math.floor(
// // //           totalPrice * (1 - combo.discountPercentage / 100)
// // //         );
// // //       }
// // //     },
// // //     updateComboProduct: (
// // //       state,
// // //       action: PayloadAction<{
// // //         comboId: string;
// // //         productId: string;
// // //         product: ComboProduct;
// // //       }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // //       if (combo) {
// // //         const productIndex = combo.products.findIndex(
// // //           (p) => p.id === action.payload.productId
// // //         );
// // //         if (productIndex !== -1) {
// // //           combo.products[productIndex] = action.payload.product;
// // //           combo.updatedAt = new Date().toISOString();

// // //           // Recalculate combo price
// // //           const totalPrice = combo.products.reduce((sum, item) => {
// // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // //           }, 0);
// // //           combo.price = Math.floor(
// // //             totalPrice * (1 - combo.discountPercentage / 100)
// // //           );
// // //         }
// // //       }
// // //     },
// // //     deleteComboProduct: (
// // //       state,
// // //       action: PayloadAction<{ comboId: string; productId: string }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // //       if (combo) {
// // //         combo.products = combo.products.filter(
// // //           (p) => p.id !== action.payload.productId
// // //         );
// // //         combo.updatedAt = new Date().toISOString();

// // //         // Recalculate combo price
// // //         const totalPrice = combo.products.reduce((sum, item) => {
// // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // //         }, 0);
// // //         combo.price = Math.floor(
// // //           totalPrice * (1 - combo.discountPercentage / 100)
// // //         );
// // //       }
// // //     },
// // //     updateComboProductQuantity: (
// // //       state,
// // //       action: PayloadAction<{
// // //         comboId: string;
// // //         productId: string;
// // //         quantity: number;
// // //       }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // //       if (combo) {
// // //         const product = combo.products.find(
// // //           (p) => p.id === action.payload.productId
// // //         );
// // //         if (product) {
// // //           product.quantity = action.payload.quantity;
// // //           combo.updatedAt = new Date().toISOString();

// // //           // Recalculate combo price
// // //           const totalPrice = combo.products.reduce((sum, item) => {
// // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // //           }, 0);
// // //           combo.price = Math.floor(
// // //             totalPrice * (1 - combo.discountPercentage / 100)
// // //           );
// // //         }
// // //       }
// // //     },
// // //     updateComboProductPricing: (
// // //       state,
// // //       action: PayloadAction<{
// // //         comboId: string;
// // //         productId: string;
// // //         pricing: ProductPricing;
// // //       }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // //       if (combo) {
// // //         const product = combo.products.find(
// // //           (p) => p.id === action.payload.productId
// // //         );
// // //         if (product) {
// // //           product.pricing = action.payload.pricing;
// // //           combo.updatedAt = new Date().toISOString();

// // //           // Recalculate combo price
// // //           const totalPrice = combo.products.reduce((sum, item) => {
// // //             return sum + (item.pricing?.price || 0) * item.quantity;
// // //           }, 0);
// // //           combo.price = Math.floor(
// // //             totalPrice * (1 - combo.discountPercentage / 100)
// // //           );
// // //         }
// // //       }
// // //     },
// // //     toggleComboProductPricingStatus: (
// // //       state,
// // //       action: PayloadAction<{ comboId: string; productId: string }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// // //       if (combo) {
// // //         const product = combo.products.find(
// // //           (p) => p.id === action.payload.productId
// // //         );
// // //         if (product && product.pricing) {
// // //           product.pricing.status = !product.pricing.status;
// // //           combo.updatedAt = new Date().toISOString();
// // //         }
// // //       }
// // //     },
// // //     // Add discount percentage action
// // //     updateComboDiscount: (
// // //       state,
// // //       action: PayloadAction<{ id: string; discountPercentage: number }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // //       if (combo) {
// // //         combo.discountPercentage = action.payload.discountPercentage;
// // //         combo.updatedAt = new Date().toISOString();

// // //         // Recalculate combo price
// // //         const totalPrice = combo.products.reduce((sum, item) => {
// // //           return sum + (item.pricing?.price || 0) * item.quantity;
// // //         }, 0);
// // //         combo.price = Math.floor(
// // //           totalPrice * (1 - combo.discountPercentage / 100)
// // //         );
// // //       }
// // //     },
// // //     // Add new reducers for updating productImage and nxImage
// // //     updateComboImages: (
// // //       state,
// // //       action: PayloadAction<{
// // //         id: string;
// // //         productImage: string;
// // //         nxImage: string;
// // //       }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // //       if (combo) {
// // //         combo.productImage = action.payload.productImage;
// // //         combo.nxImage = action.payload.nxImage;
// // //         combo.updatedAt = new Date().toISOString();
// // //       }
// // //     },
// // //     updateComboProductImage: (
// // //       state,
// // //       action: PayloadAction<{
// // //         id: string;
// // //         productImage: string;
// // //       }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // //       if (combo) {
// // //         combo.productImage = action.payload.productImage;
// // //         combo.updatedAt = new Date().toISOString();
// // //       }
// // //     },
// // //     updateComboNxImage: (
// // //       state,
// // //       action: PayloadAction<{
// // //         id: string;
// // //         nxImage: string;
// // //       }>
// // //     ) => {
// // //       const combo = state.combos.find((c) => c.id === action.payload.id);
// // //       if (combo) {
// // //         combo.nxImage = action.payload.nxImage;
// // //         combo.updatedAt = new Date().toISOString();
// // //       }
// // //     },
// // //   },

// // //   extraReducers: (builder) => {
// // //     builder
// // //       .addCase(fetchCombos.pending, (state) => {
// // //         state.status = "loading";
// // //       })
// // //       .addCase(fetchCombos.fulfilled, (state, action) => {
// // //         state.status = "succeeded";
// // //         state.combos = action.payload;
// // //       })
// // //       .addCase(fetchCombos.rejected, (state, action) => {
// // //         state.status = "failed";
// // //         state.error = action.error.message || "Failed to fetch combos";
// // //       });
// // //   },
// // // });

// // // export const {
// // //   addCombo,
// // //   editCombo,
// // //   deleteCombo,
// // //   toggleComboStatus,
// // //   updateStock,
// // //   addComboProduct,
// // //   updateComboProduct,
// // //   deleteComboProduct,
// // //   updateComboProductQuantity,
// // //   updateComboProductPricing,
// // //   toggleComboProductPricingStatus,
// // //   updateComboDiscount,
// // //   updateComboImages,
// // //   updateComboProductImage,
// // //   updateComboNxImage,
// // // } = comboSlice.actions;

// // // export default comboSlice.reducer;

// // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// // import { Product, ProductPricing } from "./productsSlice";

// // export interface ComboProduct {
// //   id: string;
// //   productId: string;
// //   quantity: number;
// //   product: Product;
// //   // Adding pricing information from ProductPricing
// //   pricing?: ProductPricing;
// // }

// // export interface ProductCombo {
// //   id: string;
// //   name: string;
// //   description: string;
// //   image: string; // Will store base64 string or URL
// //   price: number;
// //   discountPercentage: number;
// //   status: "active" | "inactive";
// //   createdAt: string;
// //   updatedAt: string;
// //   products: ComboProduct[];
// //   // Adding product-specific fields
// //   stocks?: number;
// //   calories?: number;
// //   fat?: number;
// //   carb?: number;
// //   protein?: number;
// //   section?: string;
// //   category?: string;
// //   subCategory?: string;
// //   productImage: string; // Will store base64 string or URL
// //   nxImage: string;
// //   pricings: ProductPricing[];
// // }

// // interface CombosState {
// //   combos: ProductCombo[];
// //   status: "idle" | "loading" | "succeeded" | "failed";
// //   error: string | null;
// // }

// // // ----------------------
// // // FIXED CATEGORY MAPPING (from productsSlice)
// // // ----------------------

// // const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// // const categories = {
// //   Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// //   Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// //   Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// //   Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// //   Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// // };

// // const subCategories = {
// //   Vegetables: [
// //     "Leafy Greens",
// //     "Root Vegetables",
// //     "Cruciferous",
// //     "Allium",
// //     "Podded",
// //   ],
// //   Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// //   Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// //   Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// //   Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],

// //   Juices: [
// //     "Fruit Juice",
// //     "Vegetable Juice",
// //     "Smoothies",
// //     "Concentrates",
// //     "Fresh",
// //   ],
// //   Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// //   Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// //   Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],

// //   Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// //   Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// //   Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// //   Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// //   Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],

// //   Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// //   Cookies: [
// //     "Chocolate Chip",
// //     "Oatmeal",
// //     "Sugar",
// //     "Peanut Butter",
// //     "Shortbread",
// //   ],
// //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// //   Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// //   Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],

// //   Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// //   FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// //   FrozenFruits: [
// //     "Mixed Berries",
// //     "Tropical",
// //     "Melon",
// //     "Citrus",
// //     "Stone Fruits",
// //   ],
// //   Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// //   Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// // };

// // const productNames = {
// //   Vegetables: ["Spinach", "Carrots", "Broccoli", "Onions", "Peas"],
// //   Fruits: ["Oranges", "Strawberries", "Pineapple", "Peaches", "Apples"],
// //   Grains: ["Whole Wheat", "Basmati Rice", "Cornmeal", "Barley", "Rolled Oats"],
// //   Meat: [
// //     "Sirloin Steak",
// //     "Pork Chops",
// //     "Chicken Breast",
// //     "Lamb Chops",
// //     "Turkey Breast",
// //   ],
// //   Seafood: ["Salmon", "Shrimp", "Lobster", "Clams", "Sea Urchin"],

// //   Juices: [
// //     "Orange Juice",
// //     "Carrot Juice",
// //     "Berry Smoothie",
// //     "Apple Concentrate",
// //     "Fresh Grapefruit",
// //   ],
// //   Sodas: ["Cola", "Lemon-Lime", "Orange Soda", "Ginger Ale", "Root Beer"],
// //   Tea: ["Earl Grey", "Green Tea", "Chamomile", "Oolong", "White Tea"],
// //   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// //   Water: [
// //     "Mineral Water",
// //     "Spring Water",
// //     "Sparkling Water",
// //     "Distilled Water",
// //     "Lemon Water",
// //   ],

// //   Milk: [
// //     "Whole Milk",
// //     "Skim Milk",
// //     "Low-Fat Milk",
// //     "Lactose-Free Milk",
// //     "Organic Milk",
// //   ],
// //   Cheese: [
// //     "Cheddar Cheese",
// //     "Mozzarella",
// //     "Swiss Cheese",
// //     "Blue Cheese",
// //     "Feta",
// //   ],
// //   Yogurt: [
// //     "Greek Yogurt",
// //     "Plain Yogurt",
// //     "Strawberry Yogurt",
// //     "Frozen Yogurt",
// //     "Drinkable Yogurt",
// //   ],
// //   Butter: [
// //     "Salted Butter",
// //     "Unsalted Butter",
// //     "Whipped Butter",
// //     "Clarified Butter",
// //     "Almond Butter",
// //   ],
// //   Cream: [
// //     "Heavy Cream",
// //     "Light Cream",
// //     "Whipping Cream",
// //     "Sour Cream",
// //     "Half-and-Half",
// //   ],

// //   Chips: [
// //     "Potato Chips",
// //     "Tortilla Chips",
// //     "Veggie Chips",
// //     "Kale Chips",
// //     "Pita Chips",
// //   ],
// //   Cookies: [
// //     "Chocolate Chip Cookies",
// //     "Oatmeal Cookies",
// //     "Sugar Cookies",
// //     "Peanut Butter Cookies",
// //     "Shortbread",
// //   ],
// //   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// //   Candy: [
// //     "Chocolate Bar",
// //     "Gummy Bears",
// //     "Lollipop",
// //     "Taffy",
// //     "Sour Patch Kids",
// //   ],
// //   Crackers: [
// //     "Cheese Crackers",
// //     "Whole Wheat Crackers",
// //     "Rice Crackers",
// //     "Water Crackers",
// //     "Animal Crackers",
// //   ],

// //   Meals: [
// //     "Chicken Dinner",
// //     "Beef Lunch",
// //     "Pancake Breakfast",
// //     "Spring Rolls",
// //     "Garlic Bread",
// //   ],
// //   FrozenVegetables: [
// //     "Mixed Vegetables",
// //     "Frozen Peas",
// //     "Steamed Broccoli",
// //     "Seasoned Corn",
// //     "Plain Carrots",
// //   ],
// //   FrozenFruits: [
// //     "Mixed Berries",
// //     "Tropical Mix",
// //     "Melon Cubes",
// //     "Citrus Slices",
// //     "Peach Halves",
// //   ],
// //   Desserts: [
// //     "Vanilla Ice Cream",
// //     "Apple Pie",
// //     "Chocolate Cake",
// //     "Croissants",
// //     "Rice Pudding",
// //   ],
// //   Pizza: [
// //     "Cheese Pizza",
// //     "Pepperoni Pizza",
// //     "Veggie Pizza",
// //     "Meat Lovers Pizza",
// //     "Supreme Pizza",
// //   ],
// // };

// // // ----------------------
// // // COMBO GENERATOR (similar to product generator)
// // // ----------------------

// // const generateCombos = (): ProductCombo[] => {
// //   const combos: ProductCombo[] = [];

// //   for (let i = 1; i <= 20; i++) {
// //     const section = sections[Math.floor(Math.random() * sections.length)];
// //     const catList = categories[section] || [];
// //     const category = catList[Math.floor(Math.random() * catList.length)];
// //     const subList = subCategories[category] || [];
// //     const subCategory = subList[Math.floor(Math.random() * subList.length)];
// //     const nameList = productNames[subCategory] ||
// //       productNames[category] || ["Combo"];
// //     const name = nameList[Math.floor(Math.random() * nameList.length)];
// //     const seed = Math.random().toString(36).substring(7);

// //     // Generate seeds for product images
// //     const productImageSeed = Math.random().toString(36).substring(7);
// //     const nxImageSeed = Math.random().toString(36).substring(7);

// //     // Generate 2-5 products for each combo
// //     const productCount = Math.floor(Math.random() * 4) + 2;
// //     const products: ComboProduct[] = [];

// //     for (let j = 0; j < productCount; j++) {
// //       // Generate a mock product for this combo item
// //       const productSection =
// //         sections[Math.floor(Math.random() * sections.length)];
// //       const productCatList = categories[productSection] || [];
// //       const productCategory =
// //         productCatList[Math.floor(Math.random() * productCatList.length)];
// //       const productSubList = subCategories[productCategory] || [];
// //       const productSubCategory =
// //         productSubList[Math.floor(Math.random() * productSubList.length)];
// //       const productNameList = productNames[productSubCategory] ||
// //         productNames[productCategory] || ["Product"];
// //       const productName =
// //         productNameList[Math.floor(Math.random() * productNameList.length)];
// //       const productSeed = Math.random().toString(36).substring(7);

// //       // Generate 1-2 pricing options for each product
// //       const pricingCount = Math.floor(Math.random() * 2) + 1;
// //       const pricings: ProductPricing[] = [];

// //       for (let k = 0; k < pricingCount; k++) {
// //         const quantity = k === 0 ? "1" : "500";
// //         const uom = k === 0 ? "kg" : "g";
// //         const purchasePrice = Math.floor(Math.random() * 500) + 100;
// //         const price = Math.floor(purchasePrice * (1.2 + Math.random() * 0.5));
// //         const offerPercentage = Math.floor(Math.random() * 30);

// //         const offerAmount = (offerPercentage / 100) * price;
// //         const appSalePrice = price - purchasePrice - offerAmount;
// //         const appPercentage =
// //           price > 0 ? Math.round((appSalePrice / price) * 100) : 0;
// //         const appAmount = Math.floor((appPercentage / 100) * price);

// //         pricings.push({
// //           id: `${i}-${j}-${k}`,
// //           quantity,
// //           uom,
// //           purchasePrice,
// //           price,
// //           offerPercentage,
// //           appSalePrice,
// //           appPercentage,
// //           appAmount,
// //           cgst: 0,
// //           sgst: 0,
// //           status: Math.random() > 0.3,
// //         });
// //       }

// //       const mockProduct: Product = {
// //         id: `product-${i}-${j}`,
// //         image: `https://picsum.photos/seed/${productSeed}/300/300.jpg`,
// //         nxImage: `https://picsum.photos/seed/${productSeed}-nx/300/300.jpg`,
// //         name: `${productName} ${i}-${j}`,
// //         stocks: Math.floor(Math.random() * 500) + 10,
// //         calories: Math.floor(Math.random() * 300) + 20,
// //         fat: Math.floor(Math.random() * 30) + 1,
// //         carb: Math.floor(Math.random() * 50) + 1,
// //         protein: Math.floor(Math.random() * 30) + 1,
// //         section: productSection,
// //         category: productCategory,
// //         subCategory: productSubCategory,
// //         status: Math.random() > 0.3 ? "active" : "inactive",
// //         createdAt: new Date().toISOString(),
// //         updatedAt: new Date().toISOString(),
// //         pricings,
// //       };

// //       // Select a random pricing for this combo product
// //       const selectedPricing =
// //         pricings[Math.floor(Math.random() * pricings.length)];

// //       products.push({
// //         id: `${i}-${j}`,
// //         productId: mockProduct.id,
// //         quantity: Math.floor(Math.random() * 3) + 1,
// //         product: mockProduct,
// //         pricing: selectedPricing,
// //       });
// //     }

// //     // Calculate combo price based on product prices
// //     const totalPrice = products.reduce((sum, item) => {
// //       return sum + (item.pricing?.price || 0) * item.quantity;
// //     }, 0);

// //     // Apply discount
// //     const discountPercentage = Math.floor(Math.random() * 30);
// //     const price = Math.floor(totalPrice * (1 - discountPercentage / 100));

// //     // Generate pricings for the combo
// //     const comboPricings: ProductPricing[] = [];
// //     for (let k = 0; k < 2; k++) {
// //       const quantity = k === 0 ? "1" : "500";
// //       const uom = k === 0 ? "kg" : "g";
// //       const purchasePrice = Math.floor(price * 0.7);
// //       const comboPrice = price;
// //       const offerPercentage = discountPercentage;

// //       const offerAmount = (offerPercentage / 100) * comboPrice;
// //       const appSalePrice = comboPrice - purchasePrice - offerAmount;
// //       const appPercentage =
// //         comboPrice > 0 ? Math.round((appSalePrice / comboPrice) * 100) : 0;
// //       const appAmount = Math.floor((appPercentage / 100) * comboPrice);

// //       comboPricings.push({
// //         id: `${i}-combo-${k}`,
// //         quantity,
// //         uom,
// //         purchasePrice,
// //         price: comboPrice,
// //         offerPercentage,
// //         appSalePrice,
// //         appPercentage,
// //         appAmount,
// //         cgst: 0,
// //         sgst: 0,
// //         status: true,
// //       });
// //     }

// //     combos.push({
// //       id: `combo-${i}`,
// //       name: `${name} Combo ${i}`,
// //       description: `Delicious combo featuring ${products.length} items`,
// //       image: `https://picsum.photos/seed/${seed}/300/300.jpg`,
// //       price,
// //       discountPercentage,
// //       status: Math.random() > 0.3 ? "active" : "inactive",
// //       createdAt: new Date().toISOString(),
// //       updatedAt: new Date().toISOString(),
// //       products,
// //       // Add product-specific fields
// //       stocks: Math.floor(Math.random() * 100) + 10,
// //       calories: Math.floor(Math.random() * 300) + 20,
// //       fat: Math.floor(Math.random() * 30) + 1,
// //       carb: Math.floor(Math.random() * 50) + 1,
// //       protein: Math.floor(Math.random() * 30) + 1,
// //       section,
// //       category,
// //       subCategory,
// //       // Add productImage and nxImage
// //       productImage: `https://picsum.photos/seed/${productImageSeed}/300/300.jpg`,
// //       nxImage: `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`,
// //       // Add pricings
// //       pricings: comboPricings,
// //     });
// //   }

// //   return combos;
// // };

// // // ----------------------
// // // ASYNC THUNKS
// // // ----------------------

// // export const fetchCombos = createAsyncThunk("combos/fetchCombos", async () => {
// //   // In a real app, this would be an API call
// //   // For now, we'll return generated combos
// //   await new Promise((resolve) => setTimeout(resolve, 500));
// //   return generateCombos();
// // });

// // // ----------------------
// // // INITIAL STATE
// // // ----------------------

// // const initialState: CombosState = {
// //   combos: [],
// //   status: "idle",
// //   error: null,
// // };

// // // ----------------------
// // // SLICE
// // // ----------------------

// // const comboSlice = createSlice({
// //   name: "combos",
// //   initialState,
// //   reducers: {
// //     addCombo: (
// //       state,
// //       action: PayloadAction<
// //         Omit<ProductCombo, "id" | "createdAt" | "updatedAt">
// //       >
// //     ) => {
// //       state.combos.unshift({
// //         ...action.payload,
// //         id: Date.now().toString(),
// //         createdAt: new Date().toISOString(),
// //         updatedAt: new Date().toISOString(),
// //       });
// //     },
// //     editCombo: (state, action: PayloadAction<ProductCombo>) => {
// //       const index = state.combos.findIndex((c) => c.id === action.payload.id);
// //       if (index !== -1) {
// //         state.combos[index] = {
// //           ...action.payload,
// //           updatedAt: new Date().toISOString(),
// //         };
// //       }
// //     },
// //     deleteCombo: (state, action: PayloadAction<string>) => {
// //       state.combos = state.combos.filter((c) => c.id !== action.payload);
// //     },
// //     toggleComboStatus: (state, action: PayloadAction<string>) => {
// //       const combo = state.combos.find((c) => c.id === action.payload);
// //       if (combo) {
// //         combo.status = combo.status === "active" ? "inactive" : "active";
// //         combo.updatedAt = new Date().toISOString();
// //       }
// //     },
// //     // Product-specific actions adapted for combos
// //     updateStock: (
// //       state,
// //       action: PayloadAction<{ id: string; stocks: number }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.id);
// //       if (combo) {
// //         combo.stocks = action.payload.stocks;
// //         combo.updatedAt = new Date().toISOString();
// //       }
// //     },
// //     // Product-specific actions for combo products
// //     addComboProduct: (
// //       state,
// //       action: PayloadAction<{
// //         comboId: string;
// //         product: Omit<ComboProduct, "id">;
// //       }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// //       if (combo) {
// //         combo.products.push({
// //           ...action.payload.product,
// //           id: `${combo.id}-${Date.now()}`,
// //         });
// //         combo.updatedAt = new Date().toISOString();

// //         // Recalculate combo price
// //         const totalPrice = combo.products.reduce((sum, item) => {
// //           return sum + (item.pricing?.price || 0) * item.quantity;
// //         }, 0);
// //         combo.price = Math.floor(
// //           totalPrice * (1 - combo.discountPercentage / 100)
// //         );
// //       }
// //     },
// //     updateComboProduct: (
// //       state,
// //       action: PayloadAction<{
// //         comboId: string;
// //         productId: string;
// //         product: ComboProduct;
// //       }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// //       if (combo) {
// //         const productIndex = combo.products.findIndex(
// //           (p) => p.id === action.payload.productId
// //         );
// //         if (productIndex !== -1) {
// //           combo.products[productIndex] = action.payload.product;
// //           combo.updatedAt = new Date().toISOString();

// //           // Recalculate combo price
// //           const totalPrice = combo.products.reduce((sum, item) => {
// //             return sum + (item.pricing?.price || 0) * item.quantity;
// //           }, 0);
// //           combo.price = Math.floor(
// //             totalPrice * (1 - combo.discountPercentage / 100)
// //           );
// //         }
// //       }
// //     },
// //     deleteComboProduct: (
// //       state,
// //       action: PayloadAction<{ comboId: string; productId: string }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// //       if (combo) {
// //         combo.products = combo.products.filter(
// //           (p) => p.id !== action.payload.productId
// //         );
// //         combo.updatedAt = new Date().toISOString();

// //         // Recalculate combo price
// //         const totalPrice = combo.products.reduce((sum, item) => {
// //           return sum + (item.pricing?.price || 0) * item.quantity;
// //         }, 0);
// //         combo.price = Math.floor(
// //           totalPrice * (1 - combo.discountPercentage / 100)
// //         );
// //       }
// //     },
// //     updateComboProductQuantity: (
// //       state,
// //       action: PayloadAction<{
// //         comboId: string;
// //         productId: string;
// //         quantity: number;
// //       }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// //       if (combo) {
// //         const product = combo.products.find(
// //           (p) => p.id === action.payload.productId
// //         );
// //         if (product) {
// //           product.quantity = action.payload.quantity;
// //           combo.updatedAt = new Date().toISOString();

// //           // Recalculate combo price
// //           const totalPrice = combo.products.reduce((sum, item) => {
// //             return sum + (item.pricing?.price || 0) * item.quantity;
// //           }, 0);
// //           combo.price = Math.floor(
// //             totalPrice * (1 - combo.discountPercentage / 100)
// //           );
// //         }
// //       }
// //     },
// //     updateComboProductPricing: (
// //       state,
// //       action: PayloadAction<{
// //         comboId: string;
// //         productId: string;
// //         pricing: ProductPricing;
// //       }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// //       if (combo) {
// //         const product = combo.products.find(
// //           (p) => p.id === action.payload.productId
// //         );
// //         if (product) {
// //           product.pricing = action.payload.pricing;
// //           combo.updatedAt = new Date().toISOString();

// //           // Recalculate combo price
// //           const totalPrice = combo.products.reduce((sum, item) => {
// //             return sum + (item.pricing?.price || 0) * item.quantity;
// //           }, 0);
// //           combo.price = Math.floor(
// //             totalPrice * (1 - combo.discountPercentage / 100)
// //           );
// //         }
// //       }
// //     },
// //     toggleComboProductPricingStatus: (
// //       state,
// //       action: PayloadAction<{ comboId: string; productId: string }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.comboId);
// //       if (combo) {
// //         const product = combo.products.find(
// //           (p) => p.id === action.payload.productId
// //         );
// //         if (product && product.pricing) {
// //           product.pricing.status = !product.pricing.status;
// //           combo.updatedAt = new Date().toISOString();
// //         }
// //       }
// //     },
// //     // Add discount percentage action
// //     updateComboDiscount: (
// //       state,
// //       action: PayloadAction<{ id: string; discountPercentage: number }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.id);
// //       if (combo) {
// //         combo.discountPercentage = action.payload.discountPercentage;
// //         combo.updatedAt = new Date().toISOString();

// //         // Recalculate combo price
// //         const totalPrice = combo.products.reduce((sum, item) => {
// //           return sum + (item.pricing?.price || 0) * item.quantity;
// //         }, 0);
// //         combo.price = Math.floor(
// //           totalPrice * (1 - combo.discountPercentage / 100)
// //         );
// //       }
// //     },
// //     // Add new reducers for updating productImage and nxImage
// //     updateComboImages: (
// //       state,
// //       action: PayloadAction<{
// //         id: string;
// //         productImage: string;
// //         nxImage: string;
// //       }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.id);
// //       if (combo) {
// //         combo.productImage = action.payload.productImage;
// //         combo.nxImage = action.payload.nxImage;
// //         combo.updatedAt = new Date().toISOString();
// //       }
// //     },
// //     updateComboProductImage: (
// //       state,
// //       action: PayloadAction<{
// //         id: string;
// //         productImage: string;
// //       }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.id);
// //       if (combo) {
// //         combo.productImage = action.payload.productImage;
// //         combo.updatedAt = new Date().toISOString();
// //       }
// //     },
// //     updateComboNxImage: (
// //       state,
// //       action: PayloadAction<{
// //         id: string;
// //         nxImage: string;
// //       }>
// //     ) => {
// //       const combo = state.combos.find((c) => c.id === action.payload.id);
// //       if (combo) {
// //         combo.nxImage = action.payload.nxImage;
// //         combo.updatedAt = new Date().toISOString();
// //       }
// //     },
// //   },

// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchCombos.pending, (state) => {
// //         state.status = "loading";
// //       })
// //       .addCase(fetchCombos.fulfilled, (state, action) => {
// //         state.status = "succeeded";
// //         state.combos = action.payload;
// //       })
// //       .addCase(fetchCombos.rejected, (state, action) => {
// //         state.status = "failed";
// //         state.error = action.error.message || "Failed to fetch combos";
// //       });
// //   },
// // });

// // export const {
// //   addCombo,
// //   editCombo,
// //   deleteCombo,
// //   toggleComboStatus,
// //   updateStock,
// //   addComboProduct,
// //   updateComboProduct,
// //   deleteComboProduct,
// //   updateComboProductQuantity,
// //   updateComboProductPricing,
// //   toggleComboProductPricingStatus,
// //   updateComboDiscount,
// //   updateComboImages,
// //   updateComboProductImage,
// //   updateComboNxImage,
// // } = comboSlice.actions;

// // export default comboSlice.reducer;

// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { Product, ProductPricing } from "./productsSlice";

// export interface ComboProduct {
//   id: string;
//   productId: string;
//   quantity: number;
//   product: Product;
//   // Adding pricing information from ProductPricing
//   pricing?: ProductPricing;
// }

// export interface ProductCombo {
//   id: string;
//   name: string;
//   description: string;
//   image: string; // Will store base64 string or URL
//   price: number;
//   discountPercentage: number;
//   status: "active" | "inactive";
//   createdAt: string;
//   updatedAt: string;
//   products: ComboProduct[];
//   // Adding product-specific fields
//   stocks?: number;
//   calories?: number;
//   fat?: number;
//   carb?: number;
//   protein?: number;
//   section?: string;
//   category?: string;
//   subCategory?: string;
//   productImage: string; // Will store base64 string or URL
//   nxImage: string;
//   pricings: ProductPricing[];
// }

// interface CombosState {
//   combos: ProductCombo[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// // ----------------------
// // FIXED CATEGORY MAPPING (from productsSlice)
// // ----------------------

// const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// const categories = {
//   Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
//   Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
//   Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
//   Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
//   Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// };

// const subCategories = {
//   Vegetables: [
//     "Leafy Greens",
//     "Root Vegetables",
//     "Cruciferous",
//     "Allium",
//     "Podded",
//   ],
//   Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
//   Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
//   Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
//   Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],

//   Juices: [
//     "Fruit Juice",
//     "Vegetable Juice",
//     "Smoothies",
//     "Concentrates",
//     "Fresh",
//   ],
//   Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
//   Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
//   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
//   Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],

//   Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
//   Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
//   Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
//   Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
//   Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],

//   Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
//   Cookies: [
//     "Chocolate Chip",
//     "Oatmeal",
//     "Sugar",
//     "Peanut Butter",
//     "Shortbread",
//   ],
//   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
//   Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
//   Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],

//   Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
//   FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
//   FrozenFruits: [
//     "Mixed Berries",
//     "Tropical",
//     "Melon",
//     "Citrus",
//     "Stone Fruits",
//   ],
//   Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
//   Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// };

// const productNames = {
//   Vegetables: ["Spinach", "Carrots", "Broccoli", "Onions", "Peas"],
//   Fruits: ["Oranges", "Strawberries", "Pineapple", "Peaches", "Apples"],
//   Grains: ["Whole Wheat", "Basmati Rice", "Cornmeal", "Barley", "Rolled Oats"],
//   Meat: [
//     "Sirloin Steak",
//     "Pork Chops",
//     "Chicken Breast",
//     "Lamb Chops",
//     "Turkey Breast",
//   ],
//   Seafood: ["Salmon", "Shrimp", "Lobster", "Clams", "Sea Urchin"],

//   Juices: [
//     "Orange Juice",
//     "Carrot Juice",
//     "Berry Smoothie",
//     "Apple Concentrate",
//     "Fresh Grapefruit",
//   ],
//   Sodas: ["Cola", "Lemon-Lime", "Orange Soda", "Ginger Ale", "Root Beer"],
//   Tea: ["Earl Grey", "Green Tea", "Chamomile", "Oolong", "White Tea"],
//   Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
//   Water: [
//     "Mineral Water",
//     "Spring Water",
//     "Sparkling Water",
//     "Distilled Water",
//     "Lemon Water",
//   ],

//   Milk: [
//     "Whole Milk",
//     "Skim Milk",
//     "Low-Fat Milk",
//     "Lactose-Free Milk",
//     "Organic Milk",
//   ],
//   Cheese: [
//     "Cheddar Cheese",
//     "Mozzarella",
//     "Swiss Cheese",
//     "Blue Cheese",
//     "Feta",
//   ],
//   Yogurt: [
//     "Greek Yogurt",
//     "Plain Yogurt",
//     "Strawberry Yogurt",
//     "Frozen Yogurt",
//     "Drinkable Yogurt",
//   ],
//   Butter: [
//     "Salted Butter",
//     "Unsalted Butter",
//     "Whipped Butter",
//     "Clarified Butter",
//     "Almond Butter",
//   ],
//   Cream: [
//     "Heavy Cream",
//     "Light Cream",
//     "Whipping Cream",
//     "Sour Cream",
//     "Half-and-Half",
//   ],

//   Chips: [
//     "Potato Chips",
//     "Tortilla Chips",
//     "Veggie Chips",
//     "Kale Chips",
//     "Pita Chips",
//   ],
//   Cookies: [
//     "Chocolate Chip Cookies",
//     "Oatmeal Cookies",
//     "Sugar Cookies",
//     "Peanut Butter Cookies",
//     "Shortbread",
//   ],
//   Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
//   Candy: [
//     "Chocolate Bar",
//     "Gummy Bears",
//     "Lollipop",
//     "Taffy",
//     "Sour Patch Kids",
//   ],
//   Crackers: [
//     "Cheese Crackers",
//     "Whole Wheat Crackers",
//     "Rice Crackers",
//     "Water Crackers",
//     "Animal Crackers",
//   ],

//   Meals: [
//     "Chicken Dinner",
//     "Beef Lunch",
//     "Pancake Breakfast",
//     "Spring Rolls",
//     "Garlic Bread",
//   ],
//   FrozenVegetables: [
//     "Mixed Vegetables",
//     "Frozen Peas",
//     "Steamed Broccoli",
//     "Seasoned Corn",
//     "Plain Carrots",
//   ],
//   FrozenFruits: [
//     "Mixed Berries",
//     "Tropical Mix",
//     "Melon Cubes",
//     "Citrus Slices",
//     "Peach Halves",
//   ],
//   Desserts: [
//     "Vanilla Ice Cream",
//     "Apple Pie",
//     "Chocolate Cake",
//     "Croissants",
//     "Rice Pudding",
//   ],
//   Pizza: [
//     "Cheese Pizza",
//     "Pepperoni Pizza",
//     "Veggie Pizza",
//     "Meat Lovers Pizza",
//     "Supreme Pizza",
//   ],
// };

// // ----------------------
// // COMBO GENERATOR (similar to product generator)
// // ----------------------

// const generateCombos = (): ProductCombo[] => {
//   const combos: ProductCombo[] = [];

//   for (let i = 1; i <= 20; i++) {
//     const section = sections[Math.floor(Math.random() * sections.length)];
//     const catList = categories[section] || [];
//     const category = catList[Math.floor(Math.random() * catList.length)];
//     const subList = subCategories[category] || [];
//     const subCategory = subList[Math.floor(Math.random() * subList.length)];
//     const nameList = productNames[subCategory] ||
//       productNames[category] || ["Combo"];
//     const name = nameList[Math.floor(Math.random() * nameList.length)];
//     const seed = Math.random().toString(36).substring(7);

//     // Generate seeds for product images
//     const productImageSeed = Math.random().toString(36).substring(7);
//     const nxImageSeed = Math.random().toString(36).substring(7);

//     // Generate 2-5 products for each combo
//     const productCount = Math.floor(Math.random() * 4) + 2;
//     const products: ComboProduct[] = [];

//     for (let j = 0; j < productCount; j++) {
//       // Generate a mock product for this combo item
//       const productSection =
//         sections[Math.floor(Math.random() * sections.length)];
//       const productCatList = categories[productSection] || [];
//       const productCategory =
//         productCatList[Math.floor(Math.random() * productCatList.length)];
//       const productSubList = subCategories[productCategory] || [];
//       const productSubCategory =
//         productSubList[Math.floor(Math.random() * productSubList.length)];
//       const productNameList = productNames[productSubCategory] ||
//         productNames[productCategory] || ["Product"];
//       const productName =
//         productNameList[Math.floor(Math.random() * productNameList.length)];
//       const productSeed = Math.random().toString(36).substring(7);

//       // Generate 1-2 pricing options for each product
//       const pricingCount = Math.floor(Math.random() * 2) + 1;
//       const pricings: ProductPricing[] = [];

//       for (let k = 0; k < pricingCount; k++) {
//         const quantity = k === 0 ? "1" : "500";
//         const uom = k === 0 ? "kg" : "g";
//         const purchasePrice = Math.floor(Math.random() * 500) + 100;
//         const price = Math.floor(purchasePrice * (1.2 + Math.random() * 0.5));
//         const offerPercentage = Math.floor(Math.random() * 30);

//         const offerAmount = (offerPercentage / 100) * price;
//         const appSalePrice = price - purchasePrice - offerAmount;
//         const appPercentage =
//           price > 0 ? Math.round((appSalePrice / price) * 100) : 0;
//         const appAmount = Math.floor((appPercentage / 100) * price);

//         pricings.push({
//           id: `${i}-${j}-${k}`,
//           quantity,
//           uom,
//           purchasePrice,
//           price,
//           offerPercentage,
//           appSalePrice,
//           appPercentage,
//           appAmount,
//           cgst: 0,
//           sgst: 0,
//           status: Math.random() > 0.3,
//         });
//       }

//       const mockProduct: Product = {
//         id: `product-${i}-${j}`,
//         image: `https://picsum.photos/seed/${productSeed}/300/300.jpg`,
//         nxImage: `https://picsum.photos/seed/${productSeed}-nx/300/300.jpg`,
//         name: `${productName} ${i}-${j}`,
//         stocks: Math.floor(Math.random() * 500) + 10,
//         calories: Math.floor(Math.random() * 300) + 20,
//         fat: Math.floor(Math.random() * 30) + 1,
//         carb: Math.floor(Math.random() * 50) + 1,
//         protein: Math.floor(Math.random() * 30) + 1,
//         section: productSection,
//         category: productCategory,
//         subCategory: productSubCategory,
//         status: Math.random() > 0.3 ? "active" : "inactive",
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         pricings,
//       };

//       // Select a random pricing for this combo product
//       const selectedPricing =
//         pricings[Math.floor(Math.random() * pricings.length)];

//       products.push({
//         id: `${i}-${j}`,
//         productId: mockProduct.id,
//         quantity: Math.floor(Math.random() * 3) + 1,
//         product: mockProduct,
//         pricing: selectedPricing,
//       });
//     }

//     // Calculate combo price based on product prices
//     const totalPrice = products.reduce((sum, item) => {
//       return sum + (item.pricing?.price || 0) * item.quantity;
//     }, 0);

//     // Apply discount
//     const discountPercentage = Math.floor(Math.random() * 30);
//     const price = Math.floor(totalPrice * (1 - discountPercentage / 100));

//     // Generate pricings for the combo
//     const comboPricings: ProductPricing[] = [];
//     for (let k = 0; k < 2; k++) {
//       const quantity = k === 0 ? "1" : "500";
//       const uom = k === 0 ? "kg" : "g";
//       const purchasePrice = Math.floor(price * 0.7);
//       const comboPrice = price;
//       const offerPercentage = discountPercentage;

//       const offerAmount = (offerPercentage / 100) * comboPrice;
//       const appSalePrice = comboPrice - purchasePrice - offerAmount;
//       const appPercentage =
//         comboPrice > 0 ? Math.round((appSalePrice / comboPrice) * 100) : 0;
//       const appAmount = Math.floor((appPercentage / 100) * comboPrice);

//       comboPricings.push({
//         id: `${i}-combo-${k}`,
//         quantity,
//         uom,
//         purchasePrice,
//         price: comboPrice,
//         offerPercentage,
//         appSalePrice,
//         appPercentage,
//         appAmount,
//         cgst: 0,
//         sgst: 0,
//         status: true,
//       });
//     }

//     combos.push({
//       id: `combo-${i}`,
//       name: `${name} Combo ${i}`,
//       description: `Delicious combo featuring ${products.length} items`,
//       image: `https://picsum.photos/seed/${seed}/300/300.jpg`,
//       price,
//       discountPercentage,
//       status: Math.random() > 0.3 ? "active" : "inactive",
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//       products,
//       // Add product-specific fields
//       stocks: Math.floor(Math.random() * 100) + 10,
//       calories: Math.floor(Math.random() * 300) + 20,
//       fat: Math.floor(Math.random() * 30) + 1,
//       carb: Math.floor(Math.random() * 50) + 1,
//       protein: Math.floor(Math.random() * 30) + 1,
//       section,
//       category,
//       subCategory,
//       // Add productImage and nxImage
//       productImage: `https://picsum.photos/seed/${productImageSeed}/300/300.jpg`,
//       nxImage: `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`,
//       // Add pricings
//       pricings: comboPricings,
//     });
//   }

//   return combos;
// };

// // ----------------------
// // ASYNC THUNKS
// // ----------------------

// export const fetchCombos = createAsyncThunk("combos/fetchCombos", async () => {
//   // In a real app, this would be an API call
//   // For now, we'll return generated combos
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   return generateCombos();
// });

// // ----------------------
// // INITIAL STATE
// // ----------------------

// const initialState: CombosState = {
//   combos: [],
//   status: "idle",
//   error: null,
// };

// // ----------------------
// // SLICE
// // ----------------------

// const comboSlice = createSlice({
//   name: "combos",
//   initialState,
//   reducers: {
//     addCombo: (
//       state,
//       action: PayloadAction<
//         Omit<ProductCombo, "id" | "createdAt" | "updatedAt">
//       >
//     ) => {
//       state.combos.unshift({
//         ...action.payload,
//         id: Date.now().toString(),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       });
//     },
//     editCombo: (state, action: PayloadAction<ProductCombo>) => {
//       const index = state.combos.findIndex((c) => c.id === action.payload.id);
//       if (index !== -1) {
//         state.combos[index] = {
//           ...action.payload,
//           updatedAt: new Date().toISOString(),
//         };
//       }
//     },
//     deleteCombo: (state, action: PayloadAction<string>) => {
//       state.combos = state.combos.filter((c) => c.id !== action.payload);
//     },
//     toggleComboStatus: (state, action: PayloadAction<string>) => {
//       const combo = state.combos.find((c) => c.id === action.payload);
//       if (combo) {
//         combo.status = combo.status === "active" ? "inactive" : "active";
//         combo.updatedAt = new Date().toISOString();
//       }
//     },
//     // Product-specific actions adapted for combos
//     updateStock: (
//       state,
//       action: PayloadAction<{ id: string; stocks: number }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.id);
//       if (combo) {
//         combo.stocks = action.payload.stocks;
//         combo.updatedAt = new Date().toISOString();
//       }
//     },
//     // Product-specific actions for combo products
//     addComboProduct: (
//       state,
//       action: PayloadAction<{
//         comboId: string;
//         product: Omit<ComboProduct, "id">;
//       }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.comboId);
//       if (combo) {
//         combo.products.push({
//           ...action.payload.product,
//           id: `${combo.id}-${Date.now()}`,
//         });
//         combo.updatedAt = new Date().toISOString();

//         // Recalculate combo price
//         const totalPrice = combo.products.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);
//         combo.price = Math.floor(
//           totalPrice * (1 - combo.discountPercentage / 100)
//         );
//       }
//     },
//     updateComboProduct: (
//       state,
//       action: PayloadAction<{
//         comboId: string;
//         productId: string;
//         product: ComboProduct;
//       }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.comboId);
//       if (combo) {
//         const productIndex = combo.products.findIndex(
//           (p) => p.id === action.payload.productId
//         );
//         if (productIndex !== -1) {
//           combo.products[productIndex] = action.payload.product;
//           combo.updatedAt = new Date().toISOString();

//           // Recalculate combo price
//           const totalPrice = combo.products.reduce((sum, item) => {
//             return sum + (item.pricing?.price || 0) * item.quantity;
//           }, 0);
//           combo.price = Math.floor(
//             totalPrice * (1 - combo.discountPercentage / 100)
//           );
//         }
//       }
//     },
//     deleteComboProduct: (
//       state,
//       action: PayloadAction<{ comboId: string; productId: string }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.comboId);
//       if (combo) {
//         combo.products = combo.products.filter(
//           (p) => p.id !== action.payload.productId
//         );
//         combo.updatedAt = new Date().toISOString();

//         // Recalculate combo price
//         const totalPrice = combo.products.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);
//         combo.price = Math.floor(
//           totalPrice * (1 - combo.discountPercentage / 100)
//         );
//       }
//     },
//     updateComboProductQuantity: (
//       state,
//       action: PayloadAction<{
//         comboId: string;
//         productId: string;
//         quantity: number;
//       }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.comboId);
//       if (combo) {
//         const product = combo.products.find(
//           (p) => p.id === action.payload.productId
//         );
//         if (product) {
//           product.quantity = action.payload.quantity;
//           combo.updatedAt = new Date().toISOString();

//           // Recalculate combo price
//           const totalPrice = combo.products.reduce((sum, item) => {
//             return sum + (item.pricing?.price || 0) * item.quantity;
//           }, 0);
//           combo.price = Math.floor(
//             totalPrice * (1 - combo.discountPercentage / 100)
//           );
//         }
//       }
//     },
//     updateComboProductPricing: (
//       state,
//       action: PayloadAction<{
//         comboId: string;
//         productId: string;
//         pricing: ProductPricing;
//       }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.comboId);
//       if (combo) {
//         const product = combo.products.find(
//           (p) => p.id === action.payload.productId
//         );
//         if (product) {
//           product.pricing = action.payload.pricing;
//           combo.updatedAt = new Date().toISOString();

//           // Recalculate combo price
//           const totalPrice = combo.products.reduce((sum, item) => {
//             return sum + (item.pricing?.price || 0) * item.quantity;
//           }, 0);
//           combo.price = Math.floor(
//             totalPrice * (1 - combo.discountPercentage / 100)
//           );
//         }
//       }
//     },
//     toggleComboProductPricingStatus: (
//       state,
//       action: PayloadAction<{ comboId: string; productId: string }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.comboId);
//       if (combo) {
//         const product = combo.products.find(
//           (p) => p.id === action.payload.productId
//         );
//         if (product && product.pricing) {
//           product.pricing.status = !product.pricing.status;
//           combo.updatedAt = new Date().toISOString();
//         }
//       }
//     },
//     // Add discount percentage action
//     updateComboDiscount: (
//       state,
//       action: PayloadAction<{ id: string; discountPercentage: number }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.id);
//       if (combo) {
//         combo.discountPercentage = action.payload.discountPercentage;
//         combo.updatedAt = new Date().toISOString();

//         // Recalculate combo price
//         const totalPrice = combo.products.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);
//         combo.price = Math.floor(
//           totalPrice * (1 - combo.discountPercentage / 100)
//         );
//       }
//     },
//     // Add new reducers for updating productImage and nxImage
//     updateComboImages: (
//       state,
//       action: PayloadAction<{
//         id: string;
//         productImage: string;
//         nxImage: string;
//       }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.id);
//       if (combo) {
//         combo.productImage = action.payload.productImage;
//         combo.nxImage = action.payload.nxImage;
//         combo.updatedAt = new Date().toISOString();
//       }
//     },
//     updateComboProductImage: (
//       state,
//       action: PayloadAction<{
//         id: string;
//         productImage: string;
//       }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.id);
//       if (combo) {
//         combo.productImage = action.payload.productImage;
//         combo.updatedAt = new Date().toISOString();
//       }
//     },
//     updateComboNxImage: (
//       state,
//       action: PayloadAction<{
//         id: string;
//         nxImage: string;
//       }>
//     ) => {
//       const combo = state.combos.find((c) => c.id === action.payload.id);
//       if (combo) {
//         combo.nxImage = action.payload.nxImage;
//         combo.updatedAt = new Date().toISOString();
//       }
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCombos.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCombos.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.combos = action.payload;
//       })
//       .addCase(fetchCombos.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch combos";
//       });
//   },
// });

// export const {
//   addCombo,
//   editCombo,
//   deleteCombo,
//   toggleComboStatus,
//   updateStock,
//   addComboProduct,
//   updateComboProduct,
//   deleteComboProduct,
//   updateComboProductQuantity,
//   updateComboProductPricing,
//   toggleComboProductPricingStatus,
//   updateComboDiscount,
//   updateComboImages,
//   updateComboProductImage,
//   updateComboNxImage,
// } = comboSlice.actions;

// export default comboSlice.reducer;

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product, ProductPricing } from "./productsSlice";

export interface ComboProduct {
  id: string;
  productId: string;
  quantity: number;
  product: Product;
  pricing?: ProductPricing;
}

export interface ProductCombo {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  discountPercentage: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
  products: ComboProduct[];
  stocks?: number;
  calories?: number;
  fat?: number;
  carb?: number;
  protein?: number;
  section?: string;
  category?: string;
  subCategory?: string;
  productImage: string;
  nxImage: string;
  pricings: ProductPricing[];
}

interface CombosState {
  combos: ProductCombo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// FIXED CATEGORY MAPPING
const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

const categories = {
  Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
  Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
  Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
  Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
  Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
};

const subCategories = {
  Vegetables: [
    "Leafy Greens",
    "Root Vegetables",
    "Cruciferous",
    "Allium",
    "Podded",
  ],
  Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
  Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
  Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
  Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],
  Juices: [
    "Fruit Juice",
    "Vegetable Juice",
    "Smoothies",
    "Concentrates",
    "Fresh",
  ],
  Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
  Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
  Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
  Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],
  Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
  Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
  Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
  Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
  Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],
  Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
  Cookies: [
    "Chocolate Chip",
    "Oatmeal",
    "Sugar",
    "Peanut Butter",
    "Shortbread",
  ],
  Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
  Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
  Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],
  Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
  FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
  FrozenFruits: [
    "Mixed Berries",
    "Tropical",
    "Melon",
    "Citrus",
    "Stone Fruits",
  ],
  Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
  Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
};

const productNames = {
  Vegetables: ["Spinach", "Carrots", "Broccoli", "Onions", "Peas"],
  Fruits: ["Oranges", "Strawberries", "Pineapple", "Peaches", "Apples"],
  Grains: ["Whole Wheat", "Basmati Rice", "Cornmeal", "Barley", "Rolled Oats"],
  Meat: [
    "Sirloin Steak",
    "Pork Chops",
    "Chicken Breast",
    "Lamb Chops",
    "Turkey Breast",
  ],
  Seafood: ["Salmon", "Shrimp", "Lobster", "Clams", "Sea Urchin"],
  Juices: [
    "Orange Juice",
    "Carrot Juice",
    "Berry Smoothie",
    "Apple Concentrate",
    "Fresh Grapefruit",
  ],
  Sodas: ["Cola", "Lemon-Lime", "Orange Soda", "Ginger Ale", "Root Beer"],
  Tea: ["Earl Grey", "Green Tea", "Chamomile", "Oolong", "White Tea"],
  Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
  Water: [
    "Mineral Water",
    "Spring Water",
    "Sparkling Water",
    "Distilled Water",
    "Lemon Water",
  ],
  Milk: [
    "Whole Milk",
    "Skim Milk",
    "Low-Fat Milk",
    "Lactose-Free Milk",
    "Organic Milk",
  ],
  Cheese: [
    "Cheddar Cheese",
    "Mozzarella",
    "Swiss Cheese",
    "Blue Cheese",
    "Feta",
  ],
  Yogurt: [
    "Greek Yogurt",
    "Plain Yogurt",
    "Strawberry Yogurt",
    "Frozen Yogurt",
    "Drinkable Yogurt",
  ],
  Butter: [
    "Salted Butter",
    "Unsalted Butter",
    "Whipped Butter",
    "Clarified Butter",
    "Almond Butter",
  ],
  Cream: [
    "Heavy Cream",
    "Light Cream",
    "Whipping Cream",
    "Sour Cream",
    "Half-and-Half",
  ],
  Chips: [
    "Potato Chips",
    "Tortilla Chips",
    "Veggie Chips",
    "Kale Chips",
    "Pita Chips",
  ],
  Cookies: [
    "Chocolate Chip Cookies",
    "Oatmeal Cookies",
    "Sugar Cookies",
    "Peanut Butter Cookies",
    "Shortbread",
  ],
  Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
  Candy: [
    "Chocolate Bar",
    "Gummy Bears",
    "Lollipop",
    "Taffy",
    "Sour Patch Kids",
  ],
  Crackers: [
    "Cheese Crackers",
    "Whole Wheat Crackers",
    "Rice Crackers",
    "Water Crackers",
    "Animal Crackers",
  ],
  Meals: [
    "Chicken Dinner",
    "Beef Lunch",
    "Pancake Breakfast",
    "Spring Rolls",
    "Garlic Bread",
  ],
  FrozenVegetables: [
    "Mixed Vegetables",
    "Frozen Peas",
    "Steamed Broccoli",
    "Seasoned Corn",
    "Plain Carrots",
  ],
  FrozenFruits: [
    "Mixed Berries",
    "Tropical Mix",
    "Melon Cubes",
    "Citrus Slices",
    "Peach Halves",
  ],
  Desserts: [
    "Vanilla Ice Cream",
    "Apple Pie",
    "Chocolate Cake",
    "Croissants",
    "Rice Pudding",
  ],
  Pizza: [
    "Cheese Pizza",
    "Pepperoni Pizza",
    "Veggie Pizza",
    "Meat Lovers Pizza",
    "Supreme Pizza",
  ],
};

// COMBO GENERATOR
const generateCombos = (): ProductCombo[] => {
  const combos: ProductCombo[] = [];

  for (let i = 1; i <= 20; i++) {
    const section = sections[Math.floor(Math.random() * sections.length)];
    const catList = categories[section] || [];
    const category = catList[Math.floor(Math.random() * catList.length)];
    const subList = subCategories[category] || [];
    const subCategory = subList[Math.floor(Math.random() * subList.length)];
    const nameList = productNames[subCategory] ||
      productNames[category] || ["Combo"];
    const name = nameList[Math.floor(Math.random() * nameList.length)];
    const seed = Math.random().toString(36).substring(7);

    const productImageSeed = Math.random().toString(36).substring(7);
    const nxImageSeed = Math.random().toString(36).substring(7);

    const productCount = Math.floor(Math.random() * 4) + 2;
    const products: ComboProduct[] = [];

    for (let j = 0; j < productCount; j++) {
      const productSection =
        sections[Math.floor(Math.random() * sections.length)];
      const productCatList = categories[productSection] || [];
      const productCategory =
        productCatList[Math.floor(Math.random() * productCatList.length)];
      const productSubList = subCategories[productCategory] || [];
      const productSubCategory =
        productSubList[Math.floor(Math.random() * productSubList.length)];
      const productNameList = productNames[productSubCategory] ||
        productNames[productCategory] || ["Product"];
      const productName =
        productNameList[Math.floor(Math.random() * productNameList.length)];
      const productSeed = Math.random().toString(36).substring(7);

      const pricingCount = Math.floor(Math.random() * 2) + 1;
      const pricings: ProductPricing[] = [];

      for (let k = 0; k < pricingCount; k++) {
        const quantity = k === 0 ? "1" : "500";
        const uom = k === 0 ? "kg" : "g";
        const purchasePrice = Math.floor(Math.random() * 500) + 100;
        const price = Math.floor(purchasePrice * (1.2 + Math.random() * 0.5));
        const offerPercentage = Math.floor(Math.random() * 30);

        const offerAmount = (offerPercentage / 100) * price;
        const appSalePrice = price - purchasePrice - offerAmount;
        const appPercentage =
          price > 0 ? Math.round((appSalePrice / price) * 100) : 0;
        const appAmount = Math.floor((appPercentage / 100) * price);

        pricings.push({
          id: `${i}-${j}-${k}`,
          quantity,
          uom,
          purchasePrice,
          price,
          offerPercentage,
          appSalePrice,
          appPercentage,
          appAmount,
          cgst: 0,
          sgst: 0,
          status: Math.random() > 0.3,
        });
      }

      const mockProduct: Product = {
        id: `product-${i}-${j}`,
        image: `https://picsum.photos/seed/${productSeed}/300/300.jpg`,
        nxImage: `https://picsum.photos/seed/${productSeed}-nx/300/300.jpg`,
        name: `${productName} ${i}-${j}`,
        stocks: Math.floor(Math.random() * 500) + 10,
        calories: Math.floor(Math.random() * 300) + 20,
        fat: Math.floor(Math.random() * 30) + 1,
        carb: Math.floor(Math.random() * 50) + 1,
        protein: Math.floor(Math.random() * 30) + 1,
        section: productSection,
        category: productCategory,
        subCategory: productSubCategory,
        status: Math.random() > 0.3 ? "active" : "inactive",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        pricings,
      };

      const selectedPricing =
        pricings[Math.floor(Math.random() * pricings.length)];

      products.push({
        id: `${i}-${j}`,
        productId: mockProduct.id,
        quantity: Math.floor(Math.random() * 3) + 1,
        product: mockProduct,
        pricing: selectedPricing,
      });
    }

    const totalPrice = products.reduce((sum, item) => {
      return sum + (item.pricing?.price || 0) * item.quantity;
    }, 0);

    const discountPercentage = Math.floor(Math.random() * 30);
    const price = Math.floor(totalPrice * (1 - discountPercentage / 100));

    const comboPricings: ProductPricing[] = [];
    for (let k = 0; k < 2; k++) {
      const quantity = k === 0 ? "1" : "500";
      const uom = k === 0 ? "kg" : "g";
      const purchasePrice = Math.floor(price * 0.7);
      const comboPrice = price;
      const offerPercentage = discountPercentage;

      const offerAmount = (offerPercentage / 100) * comboPrice;
      const appSalePrice = comboPrice - purchasePrice - offerAmount;
      const appPercentage =
        comboPrice > 0 ? Math.round((appSalePrice / comboPrice) * 100) : 0;
      const appAmount = Math.floor((appPercentage / 100) * comboPrice);

      comboPricings.push({
        id: `${i}-combo-${k}`,
        quantity,
        uom,
        purchasePrice,
        price: comboPrice,
        offerPercentage,
        appSalePrice,
        appPercentage,
        appAmount,
        cgst: 0,
        sgst: 0,
        status: true,
      });
    }

    combos.push({
      id: `combo-${i}`,
      name: `${name} Combo ${i}`,
      description: `Delicious combo featuring ${products.length} items`,
      image: `https://picsum.photos/seed/${seed}/300/300.jpg`,
      price,
      discountPercentage,
      status: Math.random() > 0.3 ? "active" : "inactive",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      products,
      stocks: Math.floor(Math.random() * 100) + 10,
      calories: Math.floor(Math.random() * 300) + 20,
      fat: Math.floor(Math.random() * 30) + 1,
      carb: Math.floor(Math.random() * 50) + 1,
      protein: Math.floor(Math.random() * 30) + 1,
      section,
      category,
      subCategory,
      productImage: `https://picsum.photos/seed/${productImageSeed}/300/300.jpg`,
      nxImage: `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`,
      pricings: comboPricings,
    });
  }

  return combos;
};

// ASYNC THUNKS
export const fetchCombos = createAsyncThunk("combos/fetchCombos", async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return generateCombos();
});

// INITIAL STATE
const initialState: CombosState = {
  combos: [],
  status: "idle",
  error: null,
};

// SLICE
const comboSlice = createSlice({
  name: "combos",
  initialState,
  reducers: {
    addCombo: (
      state,
      action: PayloadAction<
        Omit<ProductCombo, "id" | "createdAt" | "updatedAt">
      >
    ) => {
      state.combos.unshift({
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    },
    editCombo: (state, action: PayloadAction<ProductCombo>) => {
      const index = state.combos.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.combos[index] = {
          ...action.payload,
          updatedAt: new Date().toISOString(),
        };
      }
    },
    deleteCombo: (state, action: PayloadAction<string>) => {
      state.combos = state.combos.filter((c) => c.id !== action.payload);
    },
    toggleComboStatus: (state, action: PayloadAction<string>) => {
      const combo = state.combos.find((c) => c.id === action.payload);
      if (combo) {
        combo.status = combo.status === "active" ? "inactive" : "active";
        combo.updatedAt = new Date().toISOString();
      }
    },
    updateStock: (
      state,
      action: PayloadAction<{ id: string; stocks: number }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.id);
      if (combo) {
        combo.stocks = action.payload.stocks;
        combo.updatedAt = new Date().toISOString();
      }
    },
    addComboProduct: (
      state,
      action: PayloadAction<{
        comboId: string;
        product: Omit<ComboProduct, "id">;
      }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.comboId);
      if (combo) {
        combo.products.push({
          ...action.payload.product,
          id: `${combo.id}-${Date.now()}`,
        });
        combo.updatedAt = new Date().toISOString();

        const totalPrice = combo.products.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);
        combo.price = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );
      }
    },
    updateComboProduct: (
      state,
      action: PayloadAction<{
        comboId: string;
        productId: string;
        product: ComboProduct;
      }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.comboId);
      if (combo) {
        const productIndex = combo.products.findIndex(
          (p) => p.id === action.payload.productId
        );
        if (productIndex !== -1) {
          combo.products[productIndex] = action.payload.product;
          combo.updatedAt = new Date().toISOString();

          const totalPrice = combo.products.reduce((sum, item) => {
            return sum + (item.pricing?.price || 0) * item.quantity;
          }, 0);
          combo.price = Math.floor(
            totalPrice * (1 - combo.discountPercentage / 100)
          );
        }
      }
    },
    deleteComboProduct: (
      state,
      action: PayloadAction<{ comboId: string; productId: string }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.comboId);
      if (combo) {
        combo.products = combo.products.filter(
          (p) => p.id !== action.payload.productId
        );
        combo.updatedAt = new Date().toISOString();

        const totalPrice = combo.products.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);
        combo.price = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );
      }
    },
    updateComboProductQuantity: (
      state,
      action: PayloadAction<{
        comboId: string;
        productId: string;
        quantity: number;
      }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.comboId);
      if (combo) {
        const product = combo.products.find(
          (p) => p.id === action.payload.productId
        );
        if (product) {
          product.quantity = action.payload.quantity;
          combo.updatedAt = new Date().toISOString();

          const totalPrice = combo.products.reduce((sum, item) => {
            return sum + (item.pricing?.price || 0) * item.quantity;
          }, 0);
          combo.price = Math.floor(
            totalPrice * (1 - combo.discountPercentage / 100)
          );
        }
      }
    },
    updateComboProductPricing: (
      state,
      action: PayloadAction<{
        comboId: string;
        productId: string;
        pricing: ProductPricing;
      }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.comboId);
      if (combo) {
        const product = combo.products.find(
          (p) => p.id === action.payload.productId
        );
        if (product) {
          product.pricing = action.payload.pricing;
          combo.updatedAt = new Date().toISOString();

          const totalPrice = combo.products.reduce((sum, item) => {
            return sum + (item.pricing?.price || 0) * item.quantity;
          }, 0);
          combo.price = Math.floor(
            totalPrice * (1 - combo.discountPercentage / 100)
          );
        }
      }
    },
    toggleComboProductPricingStatus: (
      state,
      action: PayloadAction<{ comboId: string; productId: string }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.comboId);
      if (combo) {
        const product = combo.products.find(
          (p) => p.id === action.payload.productId
        );
        if (product && product.pricing) {
          product.pricing.status = !product.pricing.status;
          combo.updatedAt = new Date().toISOString();
        }
      }
    },
    updateComboDiscount: (
      state,
      action: PayloadAction<{ id: string; discountPercentage: number }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.id);
      if (combo) {
        combo.discountPercentage = action.payload.discountPercentage;
        combo.updatedAt = new Date().toISOString();

        const totalPrice = combo.products.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);
        combo.price = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );
      }
    },
    updateComboImages: (
      state,
      action: PayloadAction<{
        id: string;
        productImage: string;
        nxImage: string;
      }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.id);
      if (combo) {
        combo.productImage = action.payload.productImage;
        combo.nxImage = action.payload.nxImage;
        combo.updatedAt = new Date().toISOString();
      }
    },
    updateComboProductImage: (
      state,
      action: PayloadAction<{
        id: string;
        productImage: string;
      }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.id);
      if (combo) {
        combo.productImage = action.payload.productImage;
        combo.updatedAt = new Date().toISOString();
      }
    },
    updateComboNxImage: (
      state,
      action: PayloadAction<{
        id: string;
        nxImage: string;
      }>
    ) => {
      const combo = state.combos.find((c) => c.id === action.payload.id);
      if (combo) {
        combo.nxImage = action.payload.nxImage;
        combo.updatedAt = new Date().toISOString();
      }
    },
    recalculateComboPrice: (state, action: PayloadAction<string>) => {
      const combo = state.combos.find((c) => c.id === action.payload);
      if (combo) {
        const totalPrice = combo.products.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);

        combo.price = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );
        combo.updatedAt = new Date().toISOString();
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCombos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCombos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.combos = action.payload;
      })
      .addCase(fetchCombos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch combos";
      });
  },
});

export const {
  addCombo,
  editCombo,
  deleteCombo,
  toggleComboStatus,
  updateStock,
  addComboProduct,
  updateComboProduct,
  deleteComboProduct,
  updateComboProductQuantity,
  updateComboProductPricing,
  toggleComboProductPricingStatus,
  updateComboDiscount,
  updateComboImages,
  updateComboProductImage,
  updateComboNxImage,
  recalculateComboPrice,
} = comboSlice.actions;

export default comboSlice.reducer;
