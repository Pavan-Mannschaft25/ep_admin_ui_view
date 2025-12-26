// // // import React, { useState, useRef } from "react";
// // // import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// // // import { addCombo } from "../comboSlice";
// // // import { Product, ProductPricing } from "../productsSlice";
// // // import { ComboProduct } from "../comboSlice";
// // // import {
// // //   FiX,
// // //   FiUpload,
// // //   FiImage,
// // //   FiPlus,
// // //   FiTrash2,
// // //   FiCheck,
// // //   FiSearch,
// // //   FiChevronDown,
// // //   FiChevronUp,
// // //   FiCopy,
// // // } from "react-icons/fi";

// // // interface AddComboModalProps {
// // //   onClose: () => void;
// // // }

// // // // Define a type for a single combo being created
// // // interface CreatingCombo {
// // //   id: string;
// // //   name: string;
// // //   stocks: number;
// // //   calories: number;
// // //   fat: number;
// // //   carb: number;
// // //   protein: number;
// // //   section: string;
// // //   category: string;
// // //   subCategory: string;
// // //   status: "active" | "inactive";
// // //   products: ComboProduct[];
// // //   pricings: ProductPricing[];
// // //   imagePreview: string | null;
// // //   nxImagePreview: string | null;
// // // }

// // // export default function AddComboModal({ onClose }: AddComboModalProps) {
// // //   const dispatch = useAppDispatch();
// // //   const { products } = useAppSelector((state) => state.masterProducts);

// // //   // Initialize with one empty combo
// // //   const [combos, setCombos] = useState<CreatingCombo[]>([
// // //     {
// // //       id: Date.now().toString(),
// // //       name: "",
// // //       stocks: 100,
// // //       calories: 0,
// // //       fat: 0,
// // //       carb: 0,
// // //       protein: 0,
// // //       section: "Food",
// // //       category: "Vegetables",
// // //       subCategory: "Leafy Greens",
// // //       status: "active",
// // //       products: [],
// // //       pricings: [
// // //         {
// // //           id: `${Date.now()}-0`,
// // //           quantity: "1",
// // //           uom: "kg",
// // //           purchasePrice: 0,
// // //           price: 0,
// // //           offerPercentage: 0,
// // //           appSalePrice: 0,
// // //           cgst: 0,
// // //           sgst: 0,
// // //           appPercentage: 0,
// // //           appAmount: 0,
// // //           status: true,
// // //         },
// // //       ],
// // //       imagePreview: null,
// // //       nxImagePreview: null,
// // //     },
// // //   ]);

// // //   const [activeComboId, setActiveComboId] = useState<string>(
// // //     combos[0]?.id || ""
// // //   );
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [sectionFilter, setSectionFilter] = useState<string>("all");
// // //   const [categoryFilter, setCategoryFilter] = useState<string>("all");
// // //   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
// // //     new Set()
// // //   );

// // //   const imageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
// // //   const nxImageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>(
// // //     {}
// // //   );

// // //   const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// // //   const categories = {
// // //     Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// // //     Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// // //     Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// // //     Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// // //     Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// // //   };

// // //   const subCategories = {
// // //     Vegetables: [
// // //       "Leafy Greens",
// // //       "Root Vegetables",
// // //       "Cruciferous",
// // //       "Allium",
// // //       "Podded",
// // //     ],
// // //     Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// // //     Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// // //     Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// // //     Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],
// // //     Juices: [
// // //       "Fruit Juice",
// // //       "Vegetable Juice",
// // //       "Smoothies",
// // //       "Concentrates",
// // //       "Fresh",
// // //     ],
// // //     Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// // //     Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// // //     Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // //     Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],
// // //     Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// // //     Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// // //     Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// // //     Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// // //     Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],
// // //     Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// // //     Cookies: [
// // //       "Chocolate Chip",
// // //       "Oatmeal",
// // //       "Sugar",
// // //       "Peanut Butter",
// // //       "Shortbread",
// // //     ],
// // //     Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // //     Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// // //     Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],
// // //     Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// // //     FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// // //     FrozenFruits: [
// // //       "Mixed Berries",
// // //       "Tropical",
// // //       "Melon",
// // //       "Citrus",
// // //       "Stone Fruits",
// // //     ],
// // //     Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// // //     Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// // //   };

// // //   // Get unique sections and categories for filters
// // //   const uniqueSections = Array.from(new Set(products.map((p) => p.section)));
// // //   const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

// // //   // Get unique sub-categories based on selected category
// // //   const uniqueSubCategories =
// // //     categoryFilter === "all"
// // //       ? Array.from(new Set(products.map((p) => p.subCategory)))
// // //       : Array.from(
// // //           new Set(
// // //             products
// // //               .filter((p) => p.category === categoryFilter)
// // //               .map((p) => p.subCategory)
// // //           )
// // //         );

// // //   // Reset sub-category filter when category changes
// // //   React.useEffect(() => {
// // //     setSubCategoryFilter("all");
// // //   }, [categoryFilter]);

// // //   // Filter products based on search and filters
// // //   const filteredProducts = products.filter((product) => {
// // //     const matchesSearch = product.name
// // //       .toLowerCase()
// // //       .includes(searchTerm.toLowerCase());
// // //     const matchesSection =
// // //       sectionFilter === "all" || product.section === sectionFilter;
// // //     const matchesCategory =
// // //       categoryFilter === "all" || product.category === categoryFilter;
// // //     const matchesSubCategory =
// // //       subCategoryFilter === "all" || product.subCategory === subCategoryFilter;

// // //     return (
// // //       matchesSearch && matchesSection && matchesCategory && matchesSubCategory
// // //     );
// // //   });

// // //   // Get active combo
// // //   const activeCombo = combos.find((c) => c.id === activeComboId) || combos[0];

// // //   const handleComboChange = (
// // //     comboId: string,
// // //     field: keyof CreatingCombo,
// // //     value: any
// // //   ) => {
// // //     setCombos((prev) =>
// // //       prev.map((combo) =>
// // //         combo.id === comboId ? { ...combo, [field]: value } : combo
// // //       )
// // //     );
// // //   };

// // //   const handleImageChange = (
// // //     comboId: string,
// // //     imageType: "image" | "nxImage",
// // //     e: React.ChangeEvent<HTMLInputElement>
// // //   ) => {
// // //     const file = e.target.files?.[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         const result = reader.result as string;
// // //         if (imageType === "image") {
// // //           handleComboChange(comboId, "imagePreview", result);
// // //         } else if (imageType === "nxImage") {
// // //           handleComboChange(comboId, "nxImagePreview", result);
// // //         }
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const toggleProductExpansion = (productId: string) => {
// // //     setExpandedProducts((prev) => {
// // //       const newSet = new Set(prev);
// // //       if (newSet.has(productId)) {
// // //         newSet.delete(productId);
// // //       } else {
// // //         newSet.add(productId);
// // //       }
// // //       return newSet;
// // //     });
// // //   };

// // //   const handleAddProduct = (
// // //     comboId: string,
// // //     product: Product,
// // //     pricing: ProductPricing,
// // //     quantity: number = 1
// // //   ) => {
// // //     setCombos((prev) =>
// // //       prev.map((combo) => {
// // //         if (combo.id !== comboId) return combo;

// // //         // Check if product with the same pricing is already in combo
// // //         const existingProductIndex = combo.products.findIndex(
// // //           (p) => p.productId === product.id && p.pricing?.id === pricing.id
// // //         );

// // //         if (existingProductIndex !== -1) {
// // //           // Product already exists, update quantity
// // //           const updatedProducts = [...combo.products];
// // //           updatedProducts[existingProductIndex].quantity += quantity;
// // //           return { ...combo, products: updatedProducts };
// // //         } else {
// // //           // Add new product
// // //           return {
// // //             ...combo,
// // //             products: [
// // //               ...combo.products,
// // //               {
// // //                 id: `${product.id}-${pricing.id}`,
// // //                 productId: product.id,
// // //                 quantity,
// // //                 product,
// // //                 pricing,
// // //               },
// // //             ],
// // //           };
// // //         }
// // //       })
// // //     );
// // //   };

// // //   const handleRemoveProduct = (comboId: string, productId: string) => {
// // //     setCombos((prev) =>
// // //       prev.map((combo) =>
// // //         combo.id === comboId
// // //           ? {
// // //               ...combo,
// // //               products: combo.products.filter((p) => p.id !== productId),
// // //             }
// // //           : combo
// // //       )
// // //     );
// // //   };

// // //   const handleUpdateQuantity = (
// // //     comboId: string,
// // //     productId: string,
// // //     quantity: number
// // //   ) => {
// // //     if (quantity <= 0) return;

// // //     setCombos((prev) =>
// // //       prev.map((combo) =>
// // //         combo.id === comboId
// // //           ? {
// // //               ...combo,
// // //               products: combo.products.map((p) =>
// // //                 p.id === productId ? { ...p, quantity } : p
// // //               ),
// // //             }
// // //           : combo
// // //       )
// // //     );
// // //   };

// // //   const handlePricingChange = (
// // //     comboId: string,
// // //     pricingId: string,
// // //     field: keyof ProductPricing,
// // //     value: any
// // //   ) => {
// // //     setCombos((prev) =>
// // //       prev.map((combo) => {
// // //         if (combo.id !== comboId) return combo;

// // //         const updatedPricings = combo.pricings.map((p) => {
// // //           if (p.id === pricingId) {
// // //             const updated = { ...p, [field]: value };

// // //             // Auto-calculate values when purchasePrice or price changes
// // //             if (
// // //               field === "purchasePrice" ||
// // //               field === "price" ||
// // //               field === "offerPercentage"
// // //             ) {
// // //               const purchasePrice =
// // //                 field === "purchasePrice" ? value : p.purchasePrice;
// // //               const price = field === "price" ? value : p.price;
// // //               const offer =
// // //                 field === "offerPercentage" ? value : p.offerPercentage;

// // //               const offerAmount = (offer / 100) * price;
// // //               const appSalePrice = price - purchasePrice - offerAmount;
// // //               const appPercentage =
// // //                 price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

// // //               return {
// // //                 ...updated,
// // //                 appSalePrice,
// // //                 appPercentage,
// // //               };
// // //             }

// // //             return updated;
// // //           }
// // //           return p;
// // //         });

// // //         return { ...combo, pricings: updatedPricings };
// // //       })
// // //     );
// // //   };

// // //   const addPricingRow = (comboId: string) => {
// // //     setCombos((prev) =>
// // //       prev.map((combo) => {
// // //         if (combo.id !== comboId) return combo;

// // //         return {
// // //           ...combo,
// // //           pricings: [
// // //             ...combo.pricings,
// // //             {
// // //               id: `${combo.id}-${Date.now()}`,
// // //               quantity: "1",
// // //               uom: "kg",
// // //               purchasePrice: 0,
// // //               price: 0,
// // //               offerPercentage: 0,
// // //               appSalePrice: 0,
// // //               cgst: 0,
// // //               sgst: 0,
// // //               appPercentage: 0,
// // //               appAmount: 0,
// // //               status: true,
// // //             },
// // //           ],
// // //         };
// // //       })
// // //     );
// // //   };

// // //   const removePricingRow = (comboId: string, pricingId: string) => {
// // //     setCombos((prev) =>
// // //       prev.map((combo) => {
// // //         if (combo.id !== comboId) return combo;

// // //         if (combo.pricings.length <= 1) return combo;

// // //         return {
// // //           ...combo,
// // //           pricings: combo.pricings.filter((p) => p.id !== pricingId),
// // //         };
// // //       })
// // //     );
// // //   };

// // //   const addNewCombo = () => {
// // //     const newCombo: CreatingCombo = {
// // //       id: Date.now().toString(),
// // //       name: "",
// // //       stocks: 100,
// // //       calories: 0,
// // //       fat: 0,
// // //       carb: 0,
// // //       protein: 0,
// // //       section: "Food",
// // //       category: "Vegetables",
// // //       subCategory: "Leafy Greens",
// // //       status: "active",
// // //       products: [],
// // //       pricings: [
// // //         {
// // //           id: `${Date.now()}-0`,
// // //           quantity: "1",
// // //           uom: "kg",
// // //           purchasePrice: 0,
// // //           price: 0,
// // //           offerPercentage: 0,
// // //           appSalePrice: 0,
// // //           cgst: 0,
// // //           sgst: 0,
// // //           appPercentage: 0,
// // //           appAmount: 0,
// // //           status: true,
// // //         },
// // //       ],
// // //       imagePreview: null,
// // //       nxImagePreview: null,
// // //     };
// // //     setCombos((prev) => [...prev, newCombo]);
// // //     setActiveComboId(newCombo.id);
// // //   };

// // //   const removeCombo = (comboId: string) => {
// // //     if (combos.length <= 1) return; // Don't allow removing the last combo

// // //     setCombos((prev) => {
// // //       const newCombos = prev.filter((c) => c.id !== comboId);
// // //       // If we're removing the active combo, switch to the first remaining combo
// // //       if (activeComboId === comboId && newCombos.length > 0) {
// // //         setActiveComboId(newCombos[0].id);
// // //       }
// // //       return newCombos;
// // //     });
// // //   };

// // //   const duplicateCombo = (comboId: string) => {
// // //     const comboToDuplicate = combos.find((c) => c.id === comboId);
// // //     if (!comboToDuplicate) return;

// // //     const newCombo: CreatingCombo = {
// // //       ...comboToDuplicate,
// // //       id: Date.now().toString(),
// // //       name: `${comboToDuplicate.name} (Copy)`,
// // //       pricings: comboToDuplicate.pricings.map((p) => ({
// // //         ...p,
// // //         id: `${Date.now()}-${p.id.split("-")[1] || 0}`,
// // //       })),
// // //     };
// // //     setCombos((prev) => [...prev, newCombo]);
// // //     setActiveComboId(newCombo.id);
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);

// // //     try {
// // //       // Create all combos
// // //       for (const combo of combos) {
// // //         // Skip combos without a name
// // //         if (!combo.name.trim()) continue;

// // //         // Generate random images if not provided
// // //         const seed = Math.random().toString(36).substring(7);
// // //         const image =
// // //           combo.imagePreview ||
// // //           `https://picsum.photos/seed/${seed}/300/300.jpg`;

// // //         const nxImageSeed = Math.random().toString(36).substring(7);
// // //         const nxImage =
// // //           combo.nxImagePreview ||
// // //           `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`;

// // //         // Create a new combo
// // //         const newCombo = {
// // //           ...combo,
// // //           image,
// // //           nxImage,
// // //           price: combo.pricings[0]?.price || 0,
// // //         };

// // //         await dispatch(addCombo(newCombo));
// // //       }
// // //       onClose();
// // //     } catch (error) {
// // //       console.error("Error adding combos:", error);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //       <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl mx-4 my-4 max-h-[98vh] flex flex-col">
// // //         {/* Header */}
// // //         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0 rounded-t-xl">
// // //           <h3 className="text-lg font-semibold text-white">
// // //             Add Multiple Product Combos
// // //           </h3>
// // //           <button
// // //             onClick={onClose}
// // //             className="text-white hover:text-gray-200 transition-colors"
// // //           >
// // //             <FiX className="h-5 w-5" />
// // //           </button>
// // //         </div>

// // //         {/* Form with scrolling */}
// // //         <form
// // //           onSubmit={handleSubmit}
// // //           className="flex flex-col flex-1 overflow-hidden"
// // //         >
// // //           <div className="flex-1 overflow-y-auto p-4">
// // //             {/* Combo Tabs */}
// // //             <div className="mb-4 border-b border-gray-200">
// // //               <div className="flex space-x-2 overflow-x-auto pb-2">
// // //                 {combos.map((combo, index) => (
// // //                   <button
// // //                     key={combo.id}
// // //                     type="button"
// // //                     onClick={() => setActiveComboId(combo.id)}
// // //                     className={`px-3 py-2 rounded-t-lg font-medium text-xs whitespace-nowrap ${
// // //                       activeComboId === combo.id
// // //                         ? "bg-emerald-100 text-emerald-700 border-b-2 border-emerald-500"
// // //                         : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
// // //                     }`}
// // //                   >
// // //                     Combo {index + 1}
// // //                     {combo.name && `: ${combo.name}`}
// // //                   </button>
// // //                 ))}
// // //                 <button
// // //                   type="button"
// // //                   onClick={addNewCombo}
// // //                   className="px-2 py-2 rounded-t-lg font-medium text-xs text-emerald-600 hover:bg-emerald-50 flex items-center"
// // //                 >
// // //                   <FiPlus className="h-3 w-3 mr-1" />
// // //                   Add Combo
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// // //               {/* Left Column - Basic Info */}
// // //               <div className="space-y-3">
// // //                 <div className="flex justify-between items-center">
// // //                   <h4 className="text-sm font-semibold text-gray-700 flex items-center">
// // //                     <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
// // //                       <FiPlus className="h-3 w-3" />
// // //                     </span>
// // //                     Basic Information
// // //                   </h4>
// // //                   {combos.length > 1 && (
// // //                     <div className="flex space-x-2">
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => duplicateCombo(activeCombo.id)}
// // //                         className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
// // //                         title="Duplicate Combo"
// // //                       >
// // //                         <FiCopy className="h-3 w-3" />
// // //                       </button>
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => removeCombo(activeCombo.id)}
// // //                         className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
// // //                         title="Remove Combo"
// // //                       >
// // //                         <FiTrash2 className="h-3 w-3" />
// // //                       </button>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div>
// // //                   <label
// // //                     htmlFor={`name-${activeCombo.id}`}
// // //                     className="block text-xs font-medium text-gray-700 mb-1"
// // //                   >
// // //                     Product Name
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     id={`name-${activeCombo.id}`}
// // //                     value={activeCombo.name}
// // //                     onChange={(e) =>
// // //                       handleComboChange(activeCombo.id, "name", e.target.value)
// // //                     }
// // //                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <div className="grid grid-cols-2 gap-3">
// // //                   <div>
// // //                     <label
// // //                       htmlFor={`stocks-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Stock Quantity
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id={`stocks-${activeCombo.id}`}
// // //                       value={activeCombo.stocks}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "stocks",
// // //                           parseFloat(e.target.value) || 0
// // //                         )
// // //                       }
// // //                       min="0"
// // //                       className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label
// // //                       htmlFor={`status-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Status
// // //                     </label>
// // //                     <select
// // //                       id={`status-${activeCombo.id}`}
// // //                       value={activeCombo.status}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "status",
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                       className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     >
// // //                       <option value="active">Active</option>
// // //                       <option value="inactive">Inactive</option>
// // //                     </select>
// // //                   </div>
// // //                 </div>

// // //                 <div className="grid grid-cols-3 gap-2">
// // //                   <div>
// // //                     <label
// // //                       htmlFor={`section-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Section
// // //                     </label>
// // //                     <select
// // //                       id={`section-${activeCombo.id}`}
// // //                       value={activeCombo.section}
// // //                       onChange={(e) => {
// // //                         const section = e.target.value;
// // //                         const category = categories[section][0];
// // //                         const subCategory = subCategories[category][0];

// // //                         handleComboChange(activeCombo.id, "section", section);
// // //                         handleComboChange(activeCombo.id, "category", category);
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "subCategory",
// // //                           subCategory
// // //                         );
// // //                       }}
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     >
// // //                       {sections.map((section) => (
// // //                         <option key={section} value={section}>
// // //                           {section}
// // //                         </option>
// // //                       ))}
// // //                     </select>
// // //                   </div>

// // //                   <div>
// // //                     <label
// // //                       htmlFor={`category-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Category
// // //                     </label>
// // //                     <select
// // //                       id={`category-${activeCombo.id}`}
// // //                       value={activeCombo.category}
// // //                       onChange={(e) => {
// // //                         const category = e.target.value;
// // //                         const subCategory = subCategories[category][0];

// // //                         handleComboChange(activeCombo.id, "category", category);
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "subCategory",
// // //                           subCategory
// // //                         );
// // //                       }}
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     >
// // //                       {categories[activeCombo.section]?.map((category) => (
// // //                         <option key={category} value={category}>
// // //                           {category}
// // //                         </option>
// // //                       ))}
// // //                     </select>
// // //                   </div>

// // //                   <div>
// // //                     <label
// // //                       htmlFor={`subCategory-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Sub Category
// // //                     </label>
// // //                     <select
// // //                       id={`subCategory-${activeCombo.id}`}
// // //                       value={activeCombo.subCategory}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "subCategory",
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     >
// // //                       {subCategories[activeCombo.category]?.map(
// // //                         (subCategory) => (
// // //                           <option key={subCategory} value={subCategory}>
// // //                             {subCategory}
// // //                           </option>
// // //                         )
// // //                       )}
// // //                     </select>
// // //                   </div>
// // //                 </div>

// // //                 <div className="grid grid-cols-4 gap-2">
// // //                   <div>
// // //                     <label
// // //                       htmlFor={`calories-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Calories
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id={`calories-${activeCombo.id}`}
// // //                       value={activeCombo.calories}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "calories",
// // //                           parseFloat(e.target.value) || 0
// // //                         )
// // //                       }
// // //                       min="0"
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label
// // //                       htmlFor={`fat-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Fat (g)
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id={`fat-${activeCombo.id}`}
// // //                       value={activeCombo.fat}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "fat",
// // //                           parseFloat(e.target.value) || 0
// // //                         )
// // //                       }
// // //                       step="0.1"
// // //                       min="0"
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label
// // //                       htmlFor={`carb-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Carbs (g)
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id={`carb-${activeCombo.id}`}
// // //                       value={activeCombo.carb}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "carb",
// // //                           parseFloat(e.target.value) || 0
// // //                         )
// // //                       }
// // //                       step="0.1"
// // //                       min="0"
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label
// // //                       htmlFor={`protein-${activeCombo.id}`}
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Protein (g)
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id={`protein-${activeCombo.id}`}
// // //                       value={activeCombo.protein}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
// // //                           activeCombo.id,
// // //                           "protein",
// // //                           parseFloat(e.target.value) || 0
// // //                         )
// // //                       }
// // //                       step="0.1"
// // //                       min="0"
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                       required
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Right Column - Image Upload */}
// // //               <div className="space-y-3">
// // //                 <div>
// // //                   <label className="block text-xs font-medium text-gray-700 mb-1">
// // //                     Product Image
// // //                   </label>
// // //                   <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
// // //                     <div className="space-y-1 text-center">
// // //                       {activeCombo.imagePreview ? (
// // //                         <div className="relative">
// // //                           <img
// // //                             src={activeCombo.imagePreview}
// // //                             alt="Product preview"
// // //                             className="h-20 w-20 object-cover rounded shadow-md"
// // //                           />
// // //                           <button
// // //                             type="button"
// // //                             onClick={() =>
// // //                               handleComboChange(
// // //                                 activeCombo.id,
// // //                                 "imagePreview",
// // //                                 null
// // //                               )
// // //                             }
// // //                             className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
// // //                           >
// // //                             <svg
// // //                               className="h-3 w-3"
// // //                               fill="none"
// // //                               viewBox="0 0 24 24"
// // //                               stroke="currentColor"
// // //                             >
// // //                               <path
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                                 strokeWidth={2}
// // //                                 d="M6 18L18 6M6 6l12 12"
// // //                               />
// // //                             </svg>
// // //                           </button>
// // //                         </div>
// // //                       ) : (
// // //                         <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
// // //                       )}
// // //                       <div className="flex text-xs text-gray-600">
// // //                         <label
// // //                           htmlFor={`image-upload-${activeCombo.id}`}
// // //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// // //                         >
// // //                           <span>Upload</span>
// // //                           <input
// // //                             ref={(el) =>
// // //                               (imageInputRefs.current[activeCombo.id] = el)
// // //                             }
// // //                             id={`image-upload-${activeCombo.id}`}
// // //                             type="file"
// // //                             className="sr-only"
// // //                             accept="image/*"
// // //                             onChange={(e) =>
// // //                               handleImageChange(activeCombo.id, "image", e)
// // //                             }
// // //                           />
// // //                         </label>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-xs font-medium text-gray-700 mb-1">
// // //                     NX Product Image
// // //                   </label>
// // //                   <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
// // //                     <div className="space-y-1 text-center">
// // //                       {activeCombo.nxImagePreview ? (
// // //                         <div className="relative">
// // //                           <img
// // //                             src={activeCombo.nxImagePreview}
// // //                             alt="NX Product preview"
// // //                             className="h-20 w-20 object-cover rounded shadow-md"
// // //                           />
// // //                           <button
// // //                             type="button"
// // //                             onClick={() =>
// // //                               handleComboChange(
// // //                                 activeCombo.id,
// // //                                 "nxImagePreview",
// // //                                 null
// // //                               )
// // //                             }
// // //                             className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
// // //                           >
// // //                             <svg
// // //                               className="h-3 w-3"
// // //                               fill="none"
// // //                               viewBox="0 0 24 24"
// // //                               stroke="currentColor"
// // //                             >
// // //                               <path
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                                 strokeWidth={2}
// // //                                 d="M6 18L18 6M6 6l12 12"
// // //                               />
// // //                             </svg>
// // //                           </button>
// // //                         </div>
// // //                       ) : (
// // //                         <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
// // //                       )}
// // //                       <div className="flex text-xs text-gray-600">
// // //                         <label
// // //                           htmlFor={`nx-image-upload-${activeCombo.id}`}
// // //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// // //                         >
// // //                           <span>Upload</span>
// // //                           <input
// // //                             ref={(el) =>
// // //                               (nxImageInputRefs.current[activeCombo.id] = el)
// // //                             }
// // //                             id={`nx-image-upload-${activeCombo.id}`}
// // //                             type="file"
// // //                             className="sr-only"
// // //                             accept="image/*"
// // //                             onChange={(e) =>
// // //                               handleImageChange(activeCombo.id, "nxImage", e)
// // //                             }
// // //                           />
// // //                         </label>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Pricing Table */}
// // //             <div className="mt-4">
// // //               <div className="flex justify-between items-center mb-2">
// // //                 <h4 className="text-sm font-semibold text-gray-700">Pricing</h4>
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => addPricingRow(activeCombo.id)}
// // //                   className="flex items-center gap-1 bg-emerald-600 text-white px-2 py-1 text-xs rounded"
// // //                 >
// // //                   <FiPlus className="h-3 w-3" /> Add Pricing
// // //                 </button>
// // //               </div>
// // //               <div className="overflow-x-auto border border-gray-200 rounded">
// // //                 <table className="w-full text-xs">
// // //                   <thead className="bg-gray-100 text-gray-700">
// // //                     <tr>
// // //                       <th className="px-1 py-1 border border-gray-200">Qty</th>
// // //                       <th className="px-1 py-1 border border-gray-200">UOM</th>
// // //                       <th className="px-1 py-1 border border-gray-200">
// // //                         Purchase Price
// // //                       </th>
// // //                       <th className="px-1 py-1 border border-gray-200">
// // //                         Sale Price
// // //                       </th>
// // //                       <th className="px-1 py-1 border border-gray-200">
// // //                         Offer %
// // //                       </th>
// // //                       <th className="px-1 py-1 border border-gray-200">CGST</th>
// // //                       <th className="px-1 py-1 border border-gray-200">SGST</th>
// // //                       <th className="px-1 py-1 border border-gray-200">App%</th>
// // //                       <th className="px-1 py-1 border border-gray-200">
// // //                         App Amount
// // //                       </th>
// // //                       <th className="px-1 py-1 border border-gray-200">
// // //                         Remove
// // //                       </th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {activeCombo.pricings.map((p) => (
// // //                       <tr key={p.id} className="text-center">
// // //                         <td className="px-1 py-1 border border-gray-200">
// // //                           <input
// // //                             type="text"
// // //                             min="1"
// // //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.quantity}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
// // //                                 activeCombo.id,
// // //                                 p.id,
// // //                                 "quantity",
// // //                                 e.target.value
// // //                               )
// // //                             }
// // //                           />
// // //                         </td>
// // //                         <td className="px-2 py-1 border border-gray-200">
// // //                           <select
// // //                             className="w-24 px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.uom}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
// // //                                 activeCombo.id,
// // //                                 p.id,
// // //                                 "uom",
// // //                                 e.target.value
// // //                               )
// // //                             }
// // //                           >
// // //                             <option>kg</option>
// // //                             <option>g</option>
// // //                             <option>ltr</option>
// // //                             <option>ml</option>
// // //                           </select>
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200">
// // //                           <input
// // //                             type="number"
// // //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.purchasePrice}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
// // //                                 activeCombo.id,
// // //                                 p.id,
// // //                                 "purchasePrice",
// // //                                 Number(e.target.value)
// // //                               )
// // //                             }
// // //                           />
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200">
// // //                           <input
// // //                             type="number"
// // //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.price}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
// // //                                 activeCombo.id,
// // //                                 p.id,
// // //                                 "price",
// // //                                 Number(e.target.value)
// // //                               )
// // //                             }
// // //                           />
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200">
// // //                           <input
// // //                             type="number"
// // //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.offerPercentage}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
// // //                                 activeCombo.id,
// // //                                 p.id,
// // //                                 "offerPercentage",
// // //                                 Number(e.target.value)
// // //                               )
// // //                             }
// // //                           />
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200 text-xs">
// // //                           <input
// // //                             type="number"
// // //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.cgst}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
// // //                                 activeCombo.id,
// // //                                 p.id,
// // //                                 "cgst",
// // //                                 Number(e.target.value)
// // //                               )
// // //                             }
// // //                           />
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200 text-xs">
// // //                           <input
// // //                             type="number"
// // //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.sgst}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
// // //                                 activeCombo.id,
// // //                                 p.id,
// // //                                 "sgst",
// // //                                 Number(e.target.value)
// // //                               )
// // //                             }
// // //                           />
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200 text-xs">
// // //                           {p.appPercentage}%
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200 bg-gray-50 text-xs">
// // //                           {p.appSalePrice.toFixed(2)}
// // //                         </td>
// // //                         <td className="px-1 py-1 border border-gray-200">
// // //                           <button
// // //                             type="button"
// // //                             onClick={() =>
// // //                               removePricingRow(activeCombo.id, p.id)
// // //                             }
// // //                             className="text-red-500 hover:text-red-700"
// // //                             disabled={activeCombo.pricings.length === 1}
// // //                           >
// // //                             <FiTrash2 className="h-3 w-3" />
// // //                           </button>
// // //                         </td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>

// // //             {/* Product Selection */}
// // //             <div className="mt-4">
// // //               <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // //                 <span className="bg-green-100 text-green-600 p-1 rounded mr-2">
// // //                   <FiPlus className="h-3 w-3" />
// // //                 </span>
// // //                 Select Products
// // //               </h4>

// // //               {/* Search and Filters */}
// // //               <div className="space-y-2 mb-3">
// // //                 <div className="relative">
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Search products..."
// // //                     className="w-full px-3 py-1.5 pl-8 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     value={searchTerm}
// // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // //                   />
// // //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                     <FiSearch className="h-4 w-4 text-gray-400" />
// // //                   </div>
// // //                 </div>

// // //                 <div className="grid grid-cols-3 gap-2">
// // //                   <select
// // //                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     value={sectionFilter}
// // //                     onChange={(e) => setSectionFilter(e.target.value)}
// // //                   >
// // //                     <option value="all">All Sections</option>
// // //                     {uniqueSections.map((section) => (
// // //                       <option key={section} value={section}>
// // //                         {section}
// // //                       </option>
// // //                     ))}
// // //                   </select>

// // //                   <select
// // //                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     value={categoryFilter}
// // //                     onChange={(e) => setCategoryFilter(e.target.value)}
// // //                   >
// // //                     <option value="all">All Categories</option>
// // //                     {uniqueCategories.map((category) => (
// // //                       <option key={category} value={category}>
// // //                         {category}
// // //                       </option>
// // //                     ))}
// // //                   </select>

// // //                   <select
// // //                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     value={subCategoryFilter}
// // //                     onChange={(e) => setSubCategoryFilter(e.target.value)}
// // //                     disabled={categoryFilter === "all"}
// // //                   >
// // //                     <option value="all">All Subcategories</option>
// // //                     {uniqueSubCategories.map((subCategory) => (
// // //                       <option key={subCategory} value={subCategory}>
// // //                         {subCategory}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               {/* Product List */}
// // //               <div className="border border-gray-200 rounded p-2 h-64 overflow-y-auto">
// // //                 {filteredProducts.length === 0 ? (
// // //                   <div className="text-center py-8 text-gray-500">
// // //                     <svg
// // //                       className="mx-auto h-8 w-8 text-gray-400"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                       stroke="currentColor"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // //                       />
// // //                     </svg>
// // //                     <h3 className="mt-2 text-xs font-medium text-gray-900">
// // //                       No products found
// // //                     </h3>
// // //                     <p className="mt-1 text-xs text-gray-500">
// // //                       Try adjusting your search or filter criteria
// // //                     </p>
// // //                   </div>
// // //                 ) : (
// // //                   <div className="space-y-2">
// // //                     {filteredProducts.map((product) => (
// // //                       <div
// // //                         key={product.id}
// // //                         className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// // //                       >
// // //                         <div
// // //                           className="flex items-center justify-between p-2 cursor-pointer"
// // //                           onClick={() => toggleProductExpansion(product.id)}
// // //                         >
// // //                           <div className="flex items-center space-x-2">
// // //                             {/* Product Images - Both regular and nxImage */}
// // //                             <div className="flex space-x-1">
// // //                               <img
// // //                                 src={product.image}
// // //                                 alt={product.name}
// // //                                 className="w-8 h-8 object-cover rounded"
// // //                               />
// // //                               <img
// // //                                 src={product.nxImage}
// // //                                 alt={`${product.name} (NX)`}
// // //                                 className="w-8 h-8 object-cover rounded border border-gray-200"
// // //                               />
// // //                             </div>
// // //                             <div>
// // //                               <div className="text-xs font-medium text-gray-900">
// // //                                 {product.name}
// // //                               </div>
// // //                               <div className="text-xs text-gray-500">
// // //                                 {product.category} / {product.subCategory}
// // //                               </div>
// // //                             </div>
// // //                           </div>
// // //                           <div className="flex items-center space-x-1">
// // //                             <span className="text-xs text-gray-500">
// // //                               {product.pricings.length} variants
// // //                             </span>
// // //                             {expandedProducts.has(product.id) ? (
// // //                               <FiChevronUp className="h-3 w-3 text-gray-400" />
// // //                             ) : (
// // //                               <FiChevronDown className="h-3 w-3 text-gray-400" />
// // //                             )}
// // //                           </div>
// // //                         </div>

// // //                         {/* Pricing Variants */}
// // //                         {expandedProducts.has(product.id) && (
// // //                           <div className="border-t border-gray-200 p-2 bg-gray-50">
// // //                             <div className="overflow-x-auto">
// // //                               <table className="w-full text-xs">
// // //                                 <thead className="bg-gray-100 text-gray-700">
// // //                                   <tr>
// // //                                     <th className="px-1 py-1 text-left">Qty</th>
// // //                                     <th className="px-1 py-1 text-left">UOM</th>
// // //                                     <th className="px-1 py-1 text-left">
// // //                                       Price
// // //                                     </th>
// // //                                     <th className="px-1 py-1 text-left">
// // //                                       Offer
// // //                                     </th>
// // //                                     <th className="px-1 py-1 text-left">
// // //                                       Final
// // //                                     </th>
// // //                                     <th className="px-1 py-1 text-center">
// // //                                       Add
// // //                                     </th>
// // //                                   </tr>
// // //                                 </thead>
// // //                                 <tbody>
// // //                                   {product.pricings.map((pricing) => (
// // //                                     <tr
// // //                                       key={pricing.id}
// // //                                       className="border-b border-gray-200"
// // //                                     >
// // //                                       <td className="px-1 py-1">
// // //                                         {pricing.quantity}
// // //                                       </td>
// // //                                       <td className="px-1 py-1">
// // //                                         {pricing.uom}
// // //                                       </td>
// // //                                       <td className="px-1 py-1">
// // //                                         ₹{pricing.price}
// // //                                       </td>
// // //                                       <td className="px-1 py-1">
// // //                                         {pricing.offerPercentage}%
// // //                                       </td>
// // //                                       <td className="px-1 py-1 font-medium">
// // //                                         ₹
// // //                                         {(
// // //                                           pricing.price *
// // //                                           (1 - pricing.offerPercentage / 100)
// // //                                         ).toFixed(2)}
// // //                                       </td>
// // //                                       <td className="px-1 py-1 text-center">
// // //                                         <button
// // //                                           type="button"
// // //                                           onClick={(e) => {
// // //                                             e.stopPropagation();
// // //                                             handleAddProduct(
// // //                                               activeCombo.id,
// // //                                               product,
// // //                                               pricing,
// // //                                               1
// // //                                             );
// // //                                           }}
// // //                                           className="p-1 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
// // //                                         >
// // //                                           <FiPlus className="h-3 w-3" />
// // //                                         </button>
// // //                                       </td>
// // //                                     </tr>
// // //                                   ))}
// // //                                 </tbody>
// // //                               </table>
// // //                             </div>
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Selected Products */}
// // //             <div className="mt-4">
// // //               <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// // //                 <span className="bg-orange-100 text-orange-600 p-1 rounded mr-2">
// // //                   <FiPlus className="h-3 w-3" />
// // //                 </span>
// // //                 Selected Products ({activeCombo.products.length})
// // //               </h4>

// // //               {/* Selected Products List */}
// // //               <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
// // //                 {activeCombo.products.length === 0 ? (
// // //                   <div className="text-center py-8 text-gray-500">
// // //                     <svg
// // //                       className="mx-auto h-8 w-8 text-gray-400"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                       stroke="currentColor"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
// // //                       />
// // //                     </svg>
// // //                     <h3 className="mt-2 text-xs font-medium text-gray-900">
// // //                       No products selected
// // //                     </h3>
// // //                     <p className="mt-1 text-xs text-gray-500">
// // //                       Select products from list to add to this combo
// // //                     </p>
// // //                   </div>
// // //                 ) : (
// // //                   <div className="space-y-2">
// // //                     {activeCombo.products.map((item) => (
// // //                       <div
// // //                         key={item.id}
// // //                         className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// // //                       >
// // //                         <div className="flex items-center justify-between p-2">
// // //                           <div className="flex items-center space-x-2">
// // //                             {/* Product Images - Both regular and nxImage */}
// // //                             <div className="flex space-x-1">
// // //                               <img
// // //                                 src={item.product.image}
// // //                                 alt={item.product.name}
// // //                                 className="w-8 h-8 object-cover rounded"
// // //                               />
// // //                               <img
// // //                                 src={item.product.nxImage}
// // //                                 alt={`${item.product.name} (NX)`}
// // //                                 className="w-8 h-8 object-cover rounded border border-gray-200"
// // //                               />
// // //                             </div>
// // //                             <div>
// // //                               <div className="text-xs font-medium text-gray-900">
// // //                                 {item.product.name}
// // //                               </div>
// // //                               <div className="text-xs text-gray-500">
// // //                                 {item.product.category}
// // //                               </div>
// // //                               {/* Display selected pricing */}
// // //                               {item.pricing && (
// // //                                 <div className="text-xs text-gray-600 flex items-center space-x-1">
// // //                                   <span>
// // //                                     {item.pricing.quantity} {item.pricing.uom}
// // //                                   </span>
// // //                                   <span>₹{item.pricing.price}</span>
// // //                                   {item.pricing.offerPercentage > 0 && (
// // //                                     <span className="text-red-500">
// // //                                       -{item.pricing.offerPercentage}%
// // //                                     </span>
// // //                                   )}
// // //                                 </div>
// // //                               )}
// // //                             </div>
// // //                           </div>
// // //                           <div className="flex items-center space-x-1">
// // //                             <button
// // //                               type="button"
// // //                               onClick={() =>
// // //                                 handleUpdateQuantity(
// // //                                   activeCombo.id,
// // //                                   item.id,
// // //                                   item.quantity - 1
// // //                                 )
// // //                               }
// // //                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// // //                             >
// // //                               -
// // //                             </button>
// // //                             <span className="text-xs w-6 text-center font-medium">
// // //                               {item.quantity}
// // //                             </span>
// // //                             <button
// // //                               type="button"
// // //                               onClick={() =>
// // //                                 handleUpdateQuantity(
// // //                                   activeCombo.id,
// // //                                   item.id,
// // //                                   item.quantity + 1
// // //                                 )
// // //                               }
// // //                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// // //                             >
// // //                               +
// // //                             </button>
// // //                             <button
// // //                               type="button"
// // //                               onClick={() =>
// // //                                 handleRemoveProduct(activeCombo.id, item.id)
// // //                               }
// // //                               className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
// // //                             >
// // //                               <FiTrash2 className="h-3 w-3" />
// // //                             </button>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Submit Buttons */}
// // //           <div className="flex justify-end space-x-2 p-4 border-t border-gray-200 flex-shrink-0">
// // //             <button
// // //               type="button"
// // //               onClick={onClose}
// // //               className="px-4 py-2 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors duration-200"
// // //             >
// // //               Cancel
// // //             </button>
// // //             <button
// // //               type="submit"
// // //               className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
// // //               disabled={
// // //                 combos.every((c) => c.products.length === 0) || isSubmitting
// // //               }
// // //             >
// // //               {isSubmitting ? (
// // //                 <>
// // //                   <svg
// // //                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                     fill="none"
// // //                     viewBox="0 0 24 24"
// // //                   >
// // //                     <circle
// // //                       className="opacity-25"
// // //                       cx="12"
// // //                       cy="12"
// // //                       r="10"
// // //                       stroke="currentColor"
// // //                       strokeWidth="4"
// // //                     ></circle>
// // //                     <path
// // //                       className="opacity-75"
// // //                       fill="currentColor"
// // //                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // //                     ></path>
// // //                   </svg>
// // //                   Adding...
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <FiCheck className="mr-2" />
// // //                   Add {combos.length} Combo{combos.length > 1 ? "s" : ""}
// // //                 </>
// // //               )}
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useRef } from "react";
// // import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// // import { addCombo } from "../comboSlice";
// // import { Product, ProductPricing } from "../productsSlice";
// // import { ComboProduct } from "../comboSlice";
// // import {
// //   FiX,
// //   FiUpload,
// //   FiImage,
// //   FiPlus,
// //   FiTrash2,
// //   FiCheck,
// //   FiSearch,
// //   FiChevronDown,
// //   FiChevronUp,
// //   FiCopy,
// // } from "react-icons/fi";

// // interface AddComboModalProps {
// //   onClose: () => void;
// // }

// // // Define a type for a single combo being created
// // interface CreatingCombo {
// //   id: string;
// //   name: string;
// //   stocks: number;
// //   calories: number;
// //   fat: number;
// //   carb: number;
// //   protein: number;
// //   section: string;
// //   category: string;
// //   subCategory: string;
// //   status: "active" | "inactive";
// //   products: ComboProduct[];
// //   pricings: ProductPricing[];
// //   imagePreview: string | null;
// //   nxImagePreview: string | null;
// // }

// // export default function AddComboModal({ onClose }: AddComboModalProps) {
// //   const dispatch = useAppDispatch();
// //   const { products } = useAppSelector((state) => state.masterProducts);

// //   // Initialize with one empty combo
// //   const [combos, setCombos] = useState<CreatingCombo[]>([
// //     {
// //       id: Date.now().toString(),
// //       name: "",
// //       stocks: 100,
// //       calories: 0,
// //       fat: 0,
// //       carb: 0,
// //       protein: 0,
// //       section: "Food",
// //       category: "Vegetables",
// //       subCategory: "Leafy Greens",
// //       status: "active",
// //       products: [],
// //       pricings: [
// //         {
// //           id: `${Date.now()}-0`,
// //           quantity: "1",
// //           uom: "kg",
// //           purchasePrice: 0,
// //           price: 0,
// //           offerPercentage: 0,
// //           appSalePrice: 0,
// //           cgst: 0,
// //           sgst: 0,
// //           appPercentage: 0,
// //           appAmount: 0,
// //           status: true,
// //         },
// //       ],
// //       imagePreview: null,
// //       nxImagePreview: null,
// //     },
// //   ]);

// //   const [activeComboId, setActiveComboId] = useState<string>(
// //     combos[0]?.id || ""
// //   );
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [sectionFilter, setSectionFilter] = useState<string>("all");
// //   const [categoryFilter, setCategoryFilter] = useState<string>("all");
// //   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
// //     new Set()
// //   );

// //   const imageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
// //   const nxImageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>(
// //     {}
// //   );

// //   const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// //   const categories = {
// //     Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// //     Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// //     Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// //     Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// //     Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// //   };

// //   const subCategories = {
// //     Vegetables: [
// //       "Leafy Greens",
// //       "Root Vegetables",
// //       "Cruciferous",
// //       "Allium",
// //       "Podded",
// //     ],
// //     Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// //     Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// //     Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// //     Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],
// //     Juices: [
// //       "Fruit Juice",
// //       "Vegetable Juice",
// //       "Smoothies",
// //       "Concentrates",
// //       "Fresh",
// //     ],
// //     Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// //     Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// //     Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// //     Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],
// //     Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// //     Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// //     Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// //     Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// //     Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],
// //     Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// //     Cookies: [
// //       "Chocolate Chip",
// //       "Oatmeal",
// //       "Sugar",
// //       "Peanut Butter",
// //       "Shortbread",
// //     ],
// //     Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// //     Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// //     Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],
// //     Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// //     FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// //     FrozenFruits: [
// //       "Mixed Berries",
// //       "Tropical",
// //       "Melon",
// //       "Citrus",
// //       "Stone Fruits",
// //     ],
// //     Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// //     Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// //   };

// //   // Get unique sections and categories for filters
// //   const uniqueSections = Array.from(new Set(products.map((p) => p.section)));
// //   const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

// //   // Get unique sub-categories based on selected category
// //   const uniqueSubCategories =
// //     categoryFilter === "all"
// //       ? Array.from(new Set(products.map((p) => p.subCategory)))
// //       : Array.from(
// //           new Set(
// //             products
// //               .filter((p) => p.category === categoryFilter)
// //               .map((p) => p.subCategory)
// //           )
// //         );

// //   // Reset sub-category filter when category changes
// //   React.useEffect(() => {
// //     setSubCategoryFilter("all");
// //   }, [categoryFilter]);

// //   // Filter products based on search and filters
// //   const filteredProducts = products.filter((product) => {
// //     const matchesSearch = product.name
// //       .toLowerCase()
// //       .includes(searchTerm.toLowerCase());
// //     const matchesSection =
// //       sectionFilter === "all" || product.section === sectionFilter;
// //     const matchesCategory =
// //       categoryFilter === "all" || product.category === categoryFilter;
// //     const matchesSubCategory =
// //       subCategoryFilter === "all" || product.subCategory === subCategoryFilter;

// //     return (
// //       matchesSearch && matchesSection && matchesCategory && matchesSubCategory
// //     );
// //   });

// //   // Get active combo
// //   const activeCombo = combos.find((c) => c.id === activeComboId) || combos[0];

// //   const handleComboChange = (
// //     comboId: string,
// //     field: keyof CreatingCombo,
// //     value: any
// //   ) => {
// //     setCombos((prev) =>
// //       prev.map((combo) =>
// //         combo.id === comboId ? { ...combo, [field]: value } : combo
// //       )
// //     );
// //   };

// //   const handleImageChange = (
// //     comboId: string,
// //     imageType: "image" | "nxImage",
// //     e: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const result = reader.result as string;
// //         if (imageType === "image") {
// //           handleComboChange(comboId, "imagePreview", result);
// //         } else if (imageType === "nxImage") {
// //           handleComboChange(comboId, "nxImagePreview", result);
// //         }
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const toggleProductExpansion = (productId: string) => {
// //     setExpandedProducts((prev) => {
// //       const newSet = new Set(prev);
// //       if (newSet.has(productId)) {
// //         newSet.delete(productId);
// //       } else {
// //         newSet.add(productId);
// //       }
// //       return newSet;
// //     });
// //   };

// //   const handleAddProduct = (
// //     comboId: string,
// //     product: Product,
// //     pricing: ProductPricing,
// //     quantity: number = 1
// //   ) => {
// //     setCombos((prev) =>
// //       prev.map((combo) => {
// //         if (combo.id !== comboId) return combo;

// //         // Check if product with the same pricing is already in combo
// //         const existingProductIndex = combo.products.findIndex(
// //           (p) => p.productId === product.id && p.pricing?.id === pricing.id
// //         );

// //         if (existingProductIndex !== -1) {
// //           // Product already exists, update quantity
// //           const updatedProducts = [...combo.products];
// //           updatedProducts[existingProductIndex].quantity += quantity;
// //           return { ...combo, products: updatedProducts };
// //         } else {
// //           // Add new product
// //           return {
// //             ...combo,
// //             products: [
// //               ...combo.products,
// //               {
// //                 id: `${product.id}-${pricing.id}`,
// //                 productId: product.id,
// //                 quantity,
// //                 product,
// //                 pricing,
// //               },
// //             ],
// //           };
// //         }
// //       })
// //     );
// //   };

// //   const handleRemoveProduct = (comboId: string, productId: string) => {
// //     setCombos((prev) =>
// //       prev.map((combo) =>
// //         combo.id === comboId
// //           ? {
// //               ...combo,
// //               products: combo.products.filter((p) => p.id !== productId),
// //             }
// //           : combo
// //       )
// //     );
// //   };

// //   const handleUpdateQuantity = (
// //     comboId: string,
// //     productId: string,
// //     quantity: number
// //   ) => {
// //     if (quantity <= 0) return;

// //     setCombos((prev) =>
// //       prev.map((combo) =>
// //         combo.id === comboId
// //           ? {
// //               ...combo,
// //               products: combo.products.map((p) =>
// //                 p.id === productId ? { ...p, quantity } : p
// //               ),
// //             }
// //           : combo
// //       )
// //     );
// //   };

// //   const handlePricingChange = (
// //     comboId: string,
// //     pricingId: string,
// //     field: keyof ProductPricing,
// //     value: any
// //   ) => {
// //     setCombos((prev) =>
// //       prev.map((combo) => {
// //         if (combo.id !== comboId) return combo;

// //         const updatedPricings = combo.pricings.map((p) => {
// //           if (p.id === pricingId) {
// //             const updated = { ...p, [field]: value };

// //             // Auto-calculate values when purchasePrice or price changes
// //             if (
// //               field === "purchasePrice" ||
// //               field === "price" ||
// //               field === "offerPercentage"
// //             ) {
// //               const purchasePrice =
// //                 field === "purchasePrice" ? value : p.purchasePrice;
// //               const price = field === "price" ? value : p.price;
// //               const offer =
// //                 field === "offerPercentage" ? value : p.offerPercentage;

// //               const offerAmount = (offer / 100) * price;
// //               const appSalePrice = price - purchasePrice - offerAmount;
// //               const appPercentage =
// //                 price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

// //               return {
// //                 ...updated,
// //                 appSalePrice,
// //                 appPercentage,
// //               };
// //             }

// //             return updated;
// //           }
// //           return p;
// //         });

// //         return { ...combo, pricings: updatedPricings };
// //       })
// //     );
// //   };

// //   const addPricingRow = (comboId: string) => {
// //     setCombos((prev) =>
// //       prev.map((combo) => {
// //         if (combo.id !== comboId) return combo;

// //         return {
// //           ...combo,
// //           pricings: [
// //             ...combo.pricings,
// //             {
// //               id: `${combo.id}-${Date.now()}`,
// //               quantity: "1",
// //               uom: "kg",
// //               purchasePrice: 0,
// //               price: 0,
// //               offerPercentage: 0,
// //               appSalePrice: 0,
// //               cgst: 0,
// //               sgst: 0,
// //               appPercentage: 0,
// //               appAmount: 0,
// //               status: true,
// //             },
// //           ],
// //         };
// //       })
// //     );
// //   };

// //   const removePricingRow = (comboId: string, pricingId: string) => {
// //     setCombos((prev) =>
// //       prev.map((combo) => {
// //         if (combo.id !== comboId) return combo;

// //         if (combo.pricings.length <= 1) return combo;

// //         return {
// //           ...combo,
// //           pricings: combo.pricings.filter((p) => p.id !== pricingId),
// //         };
// //       })
// //     );
// //   };

// //   const addNewCombo = () => {
// //     const newCombo: CreatingCombo = {
// //       id: Date.now().toString(),
// //       name: "",
// //       stocks: 100,
// //       calories: 0,
// //       fat: 0,
// //       carb: 0,
// //       protein: 0,
// //       section: "Food",
// //       category: "Vegetables",
// //       subCategory: "Leafy Greens",
// //       status: "active",
// //       products: [],
// //       pricings: [
// //         {
// //           id: `${Date.now()}-0`,
// //           quantity: "1",
// //           uom: "kg",
// //           purchasePrice: 0,
// //           price: 0,
// //           offerPercentage: 0,
// //           appSalePrice: 0,
// //           cgst: 0,
// //           sgst: 0,
// //           appPercentage: 0,
// //           appAmount: 0,
// //           status: true,
// //         },
// //       ],
// //       imagePreview: null,
// //       nxImagePreview: null,
// //     };
// //     setCombos((prev) => [...prev, newCombo]);
// //     setActiveComboId(newCombo.id);
// //   };

// //   const removeCombo = (comboId: string) => {
// //     if (combos.length <= 1) return; // Don't allow removing the last combo

// //     setCombos((prev) => {
// //       const newCombos = prev.filter((c) => c.id !== comboId);
// //       // If we're removing the active combo, switch to the first remaining combo
// //       if (activeComboId === comboId && newCombos.length > 0) {
// //         setActiveComboId(newCombos[0].id);
// //       }
// //       return newCombos;
// //     });
// //   };

// //   const duplicateCombo = (comboId: string) => {
// //     const comboToDuplicate = combos.find((c) => c.id === comboId);
// //     if (!comboToDuplicate) return;

// //     const newCombo: CreatingCombo = {
// //       ...comboToDuplicate,
// //       id: Date.now().toString(),
// //       name: `${comboToDuplicate.name} (Copy)`,
// //       pricings: comboToDuplicate.pricings.map((p) => ({
// //         ...p,
// //         id: `${Date.now()}-${p.id.split("-")[1] || 0}`,
// //       })),
// //     };
// //     setCombos((prev) => [...prev, newCombo]);
// //     setActiveComboId(newCombo.id);
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);

// //     try {
// //       // Create all combos
// //       for (const combo of combos) {
// //         // Skip combos without a name
// //         if (!combo.name.trim()) continue;

// //         // Generate random images if not provided
// //         const seed = Math.random().toString(36).substring(7);
// //         const image =
// //           combo.imagePreview ||
// //           `https://picsum.photos/seed/${seed}/300/300.jpg`;

// //         const nxImageSeed = Math.random().toString(36).substring(7);
// //         const nxImage =
// //           combo.nxImagePreview ||
// //           `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`;

// //         // Create a new combo
// //         const newCombo = {
// //           ...combo,
// //           image,
// //           nxImage,
// //           price: combo.pricings[0]?.price || 0,
// //         };

// //         await dispatch(addCombo(newCombo));
// //       }
// //       onClose();
// //     } catch (error) {
// //       console.error("Error adding combos:", error);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   // Format pricing information for display
// //   const formatPricingInfo = (pricing: ProductPricing, quantity: number) => {
// //     if (!pricing) return "";

// //     const {
// //       quantity: unitQty,
// //       uom,
// //       purchasePrice,
// //       price,
// //       offerPercentage,
// //       appPercentage,
// //       appSalePrice,
// //     } = pricing;

// //     return `${quantity} ${uom} ₹${price} ${offerPercentage}% PP:₹${purchasePrice} AP:${appPercentage}% ASP:₹${appSalePrice}`;
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //       <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl mx-4 my-4 max-h-[98vh] flex flex-col">
// //         {/* Header */}
// //         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0 rounded-t-xl">
// //           <h3 className="text-lg font-semibold text-white">
// //             Add Multiple Product Combos
// //           </h3>
// //           <button
// //             onClick={onClose}
// //             className="text-white hover:text-gray-200 transition-colors"
// //           >
// //             <FiX className="h-5 w-5" />
// //           </button>
// //         </div>

// //         {/* Form with scrolling */}
// //         <form
// //           onSubmit={handleSubmit}
// //           className="flex flex-col flex-1 overflow-hidden"
// //         >
// //           <div className="flex-1 overflow-y-auto p-4">
// //             {/* Combo Tabs */}
// //             <div className="mb-4 border-b border-gray-200">
// //               <div className="flex space-x-2 overflow-x-auto pb-2">
// //                 {combos.map((combo, index) => (
// //                   <button
// //                     key={combo.id}
// //                     type="button"
// //                     onClick={() => setActiveComboId(combo.id)}
// //                     className={`px-3 py-2 rounded-t-lg font-medium text-xs whitespace-nowrap ${
// //                       activeComboId === combo.id
// //                         ? "bg-emerald-100 text-emerald-700 border-b-2 border-emerald-500"
// //                         : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     Combo {index + 1}
// //                     {combo.name && `: ${combo.name}`}
// //                   </button>
// //                 ))}
// //                 <button
// //                   type="button"
// //                   onClick={addNewCombo}
// //                   className="px-2 py-2 rounded-t-lg font-medium text-xs text-emerald-600 hover:bg-emerald-50 flex items-center"
// //                 >
// //                   <FiPlus className="h-3 w-3 mr-1" />
// //                   Add Combo
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //               {/* Left Column - Basic Info */}
// //               <div className="space-y-3">
// //                 <div className="flex justify-between items-center">
// //                   <h4 className="text-sm font-semibold text-gray-700 flex items-center">
// //                     <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
// //                       <FiPlus className="h-3 w-3" />
// //                     </span>
// //                     Basic Information
// //                   </h4>
// //                   {combos.length > 1 && (
// //                     <div className="flex space-x-2">
// //                       <button
// //                         type="button"
// //                         onClick={() => duplicateCombo(activeCombo.id)}
// //                         className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
// //                         title="Duplicate Combo"
// //                       >
// //                         <FiCopy className="h-3 w-3" />
// //                       </button>
// //                       <button
// //                         type="button"
// //                         onClick={() => removeCombo(activeCombo.id)}
// //                         className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
// //                         title="Remove Combo"
// //                       >
// //                         <FiTrash2 className="h-3 w-3" />
// //                       </button>
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor={`name-${activeCombo.id}`}
// //                     className="block text-xs font-medium text-gray-700 mb-1"
// //                   >
// //                     Product Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id={`name-${activeCombo.id}`}
// //                     value={activeCombo.name}
// //                     onChange={(e) =>
// //                       handleComboChange(activeCombo.id, "name", e.target.value)
// //                     }
// //                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="grid grid-cols-2 gap-3">
// //                   <div>
// //                     <label
// //                       htmlFor={`stocks-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Stock Quantity
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id={`stocks-${activeCombo.id}`}
// //                       value={activeCombo.stocks}
// //                       onChange={(e) =>
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "stocks",
// //                           parseFloat(e.target.value) || 0
// //                         )
// //                       }
// //                       min="0"
// //                       className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor={`status-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Status
// //                     </label>
// //                     <select
// //                       id={`status-${activeCombo.id}`}
// //                       value={activeCombo.status}
// //                       onChange={(e) =>
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "status",
// //                           e.target.value
// //                         )
// //                       }
// //                       className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     >
// //                       <option value="active">Active</option>
// //                       <option value="inactive">Inactive</option>
// //                     </select>
// //                   </div>
// //                 </div>

// //                 <div className="grid grid-cols-3 gap-2">
// //                   <div>
// //                     <label
// //                       htmlFor={`section-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Section
// //                     </label>
// //                     <select
// //                       id={`section-${activeCombo.id}`}
// //                       value={activeCombo.section}
// //                       onChange={(e) => {
// //                         const section = e.target.value;
// //                         const category = categories[section][0];
// //                         const subCategory = subCategories[category][0];

// //                         handleComboChange(activeCombo.id, "section", section);
// //                         handleComboChange(activeCombo.id, "category", category);
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "subCategory",
// //                           subCategory
// //                         );
// //                       }}
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     >
// //                       {sections.map((section) => (
// //                         <option key={section} value={section}>
// //                           {section}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor={`category-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Category
// //                     </label>
// //                     <select
// //                       id={`category-${activeCombo.id}`}
// //                       value={activeCombo.category}
// //                       onChange={(e) => {
// //                         const category = e.target.value;
// //                         const subCategory = subCategories[category][0];

// //                         handleComboChange(activeCombo.id, "category", category);
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "subCategory",
// //                           subCategory
// //                         );
// //                       }}
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     >
// //                       {categories[activeCombo.section]?.map((category) => (
// //                         <option key={category} value={category}>
// //                           {category}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor={`subCategory-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Sub Category
// //                     </label>
// //                     <select
// //                       id={`subCategory-${activeCombo.id}`}
// //                       value={activeCombo.subCategory}
// //                       onChange={(e) =>
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "subCategory",
// //                           e.target.value
// //                         )
// //                       }
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     >
// //                       {subCategories[activeCombo.category]?.map(
// //                         (subCategory) => (
// //                           <option key={subCategory} value={subCategory}>
// //                             {subCategory}
// //                           </option>
// //                         )
// //                       )}
// //                     </select>
// //                   </div>
// //                 </div>

// //                 <div className="grid grid-cols-4 gap-2">
// //                   <div>
// //                     <label
// //                       htmlFor={`calories-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Calories
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id={`calories-${activeCombo.id}`}
// //                       value={activeCombo.calories}
// //                       onChange={(e) =>
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "calories",
// //                           parseFloat(e.target.value) || 0
// //                         )
// //                       }
// //                       min="0"
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                       required
// //                     />
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor={`fat-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Fat (g)
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id={`fat-${activeCombo.id}`}
// //                       value={activeCombo.fat}
// //                       onChange={(e) =>
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "fat",
// //                           parseFloat(e.target.value) || 0
// //                         )
// //                       }
// //                       step="0.1"
// //                       min="0"
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                       required
// //                     />
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor={`carb-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Carbs (g)
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id={`carb-${activeCombo.id}`}
// //                       value={activeCombo.carb}
// //                       onChange={(e) =>
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "carb",
// //                           parseFloat(e.target.value) || 0
// //                         )
// //                       }
// //                       step="0.1"
// //                       min="0"
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                       required
// //                     />
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor={`protein-${activeCombo.id}`}
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Protein (g)
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id={`protein-${activeCombo.id}`}
// //                       value={activeCombo.protein}
// //                       onChange={(e) =>
// //                         handleComboChange(
// //                           activeCombo.id,
// //                           "protein",
// //                           parseFloat(e.target.value) || 0
// //                         )
// //                       }
// //                       step="0.1"
// //                       min="0"
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Right Column - Image Upload */}
// //               <div className="space-y-3">
// //                 <div>
// //                   <label className="block text-xs font-medium text-gray-700 mb-1">
// //                     Product Image
// //                   </label>
// //                   <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
// //                     <div className="space-y-1 text-center">
// //                       {activeCombo.imagePreview ? (
// //                         <div className="relative">
// //                           <img
// //                             src={activeCombo.imagePreview}
// //                             alt="Product preview"
// //                             className="h-20 w-20 object-cover rounded shadow-md"
// //                           />
// //                           <button
// //                             type="button"
// //                             onClick={() =>
// //                               handleComboChange(
// //                                 activeCombo.id,
// //                                 "imagePreview",
// //                                 null
// //                               )
// //                             }
// //                             className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
// //                           >
// //                             <svg
// //                               className="h-3 w-3"
// //                               fill="none"
// //                               viewBox="0 0 24 24"
// //                               stroke="currentColor"
// //                             >
// //                               <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth={2}
// //                                 d="M6 18L18 6M6 6l12 12"
// //                               />
// //                             </svg>
// //                           </button>
// //                         </div>
// //                       ) : (
// //                         <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
// //                       )}
// //                       <div className="flex text-xs text-gray-600">
// //                         <label
// //                           htmlFor={`image-upload-${activeCombo.id}`}
// //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// //                         >
// //                           <span>Upload</span>
// //                           <input
// //                             ref={(el) =>
// //                               (imageInputRefs.current[activeCombo.id] = el)
// //                             }
// //                             id={`image-upload-${activeCombo.id}`}
// //                             type="file"
// //                             className="sr-only"
// //                             accept="image/*"
// //                             onChange={(e) =>
// //                               handleImageChange(activeCombo.id, "image", e)
// //                             }
// //                           />
// //                         </label>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-xs font-medium text-gray-700 mb-1">
// //                     NX Product Image
// //                   </label>
// //                   <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
// //                     <div className="space-y-1 text-center">
// //                       {activeCombo.nxImagePreview ? (
// //                         <div className="relative">
// //                           <img
// //                             src={activeCombo.nxImagePreview}
// //                             alt="NX Product preview"
// //                             className="h-20 w-20 object-cover rounded shadow-md"
// //                           />
// //                           <button
// //                             type="button"
// //                             onClick={() =>
// //                               handleComboChange(
// //                                 activeCombo.id,
// //                                 "nxImagePreview",
// //                                 null
// //                               )
// //                             }
// //                             className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
// //                           >
// //                             <svg
// //                               className="h-3 w-3"
// //                               fill="none"
// //                               viewBox="0 0 24 24"
// //                               stroke="currentColor"
// //                             >
// //                               <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth={2}
// //                                 d="M6 18L18 6M6 6l12 12"
// //                               />
// //                             </svg>
// //                           </button>
// //                         </div>
// //                       ) : (
// //                         <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
// //                       )}
// //                       <div className="flex text-xs text-gray-600">
// //                         <label
// //                           htmlFor={`nx-image-upload-${activeCombo.id}`}
// //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// //                         >
// //                           <span>Upload</span>
// //                           <input
// //                             ref={(el) =>
// //                               (nxImageInputRefs.current[activeCombo.id] = el)
// //                             }
// //                             id={`nx-image-upload-${activeCombo.id}`}
// //                             type="file"
// //                             className="sr-only"
// //                             accept="image/*"
// //                             onChange={(e) =>
// //                               handleImageChange(activeCombo.id, "nxImage", e)
// //                             }
// //                           />
// //                         </label>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Pricing Table */}
// //             <div className="mt-4">
// //               <div className="flex justify-between items-center mb-2">
// //                 <h4 className="text-sm font-semibold text-gray-700">Pricing</h4>
// //                 <button
// //                   type="button"
// //                   onClick={() => addPricingRow(activeCombo.id)}
// //                   className="flex items-center gap-1 bg-emerald-600 text-white px-2 py-1 text-xs rounded"
// //                 >
// //                   <FiPlus className="h-3 w-3" /> Add Pricing
// //                 </button>
// //               </div>
// //               <div className="overflow-x-auto border border-gray-200 rounded">
// //                 <table className="w-full text-xs">
// //                   <thead className="bg-gray-100 text-gray-700">
// //                     <tr>
// //                       <th className="px-1 py-1 border border-gray-200">Qty</th>
// //                       <th className="px-1 py-1 border border-gray-200">UOM</th>
// //                       <th className="px-1 py-1 border border-gray-200">
// //                         Purchase Price
// //                       </th>
// //                       <th className="px-1 py-1 border border-gray-200">
// //                         Sale Price
// //                       </th>
// //                       <th className="px-1 py-1 border border-gray-200">
// //                         Offer %
// //                       </th>
// //                       <th className="px-1 py-1 border border-gray-200">CGST</th>
// //                       <th className="px-1 py-1 border border-gray-200">SGST</th>
// //                       <th className="px-1 py-1 border border-gray-200">App%</th>
// //                       <th className="px-1 py-1 border border-gray-200">
// //                         App Amount
// //                       </th>
// //                       <th className="px-1 py-1 border border-gray-200">
// //                         Remove
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {activeCombo.pricings.map((p) => (
// //                       <tr key={p.id} className="text-center">
// //                         <td className="px-1 py-1 border border-gray-200">
// //                           <input
// //                             type="text"
// //                             min="1"
// //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.quantity}
// //                             onChange={(e) =>
// //                               handlePricingChange(
// //                                 activeCombo.id,
// //                                 p.id,
// //                                 "quantity",
// //                                 e.target.value
// //                               )
// //                             }
// //                           />
// //                         </td>
// //                         <td className="px-2 py-1 border border-gray-200">
// //                           <select
// //                             className="w-24 px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.uom}
// //                             onChange={(e) =>
// //                               handlePricingChange(
// //                                 activeCombo.id,
// //                                 p.id,
// //                                 "uom",
// //                                 e.target.value
// //                               )
// //                             }
// //                           >
// //                             <option>kg</option>
// //                             <option>g</option>
// //                             <option>ltr</option>
// //                             <option>ml</option>
// //                           </select>
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200">
// //                           <input
// //                             type="number"
// //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.purchasePrice}
// //                             onChange={(e) =>
// //                               handlePricingChange(
// //                                 activeCombo.id,
// //                                 p.id,
// //                                 "purchasePrice",
// //                                 Number(e.target.value)
// //                               )
// //                             }
// //                           />
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200">
// //                           <input
// //                             type="number"
// //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.price}
// //                             onChange={(e) =>
// //                               handlePricingChange(
// //                                 activeCombo.id,
// //                                 p.id,
// //                                 "price",
// //                                 Number(e.target.value)
// //                               )
// //                             }
// //                           />
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200">
// //                           <input
// //                             type="number"
// //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.offerPercentage}
// //                             onChange={(e) =>
// //                               handlePricingChange(
// //                                 activeCombo.id,
// //                                 p.id,
// //                                 "offerPercentage",
// //                                 Number(e.target.value)
// //                               )
// //                             }
// //                           />
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200 text-xs">
// //                           <input
// //                             type="number"
// //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.cgst}
// //                             onChange={(e) =>
// //                               handlePricingChange(
// //                                 activeCombo.id,
// //                                 p.id,
// //                                 "cgst",
// //                                 Number(e.target.value)
// //                               )
// //                             }
// //                           />
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200 text-xs">
// //                           <input
// //                             type="number"
// //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.sgst}
// //                             onChange={(e) =>
// //                               handlePricingChange(
// //                                 activeCombo.id,
// //                                 p.id,
// //                                 "sgst",
// //                                 Number(e.target.value)
// //                               )
// //                             }
// //                           />
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200 text-xs">
// //                           {p.appPercentage}%
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200 bg-gray-50 text-xs">
// //                           {p.appSalePrice.toFixed(2)}
// //                         </td>
// //                         <td className="px-1 py-1 border border-gray-200">
// //                           <button
// //                             type="button"
// //                             onClick={() =>
// //                               removePricingRow(activeCombo.id, p.id)
// //                             }
// //                             className="text-red-500 hover:text-red-700"
// //                             disabled={activeCombo.pricings.length === 1}
// //                           >
// //                             <FiTrash2 className="h-3 w-3" />
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {/* Product Selection */}
// //             <div className="mt-4">
// //               <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// //                 <span className="bg-green-100 text-green-600 p-1 rounded mr-2">
// //                   <FiPlus className="h-3 w-3" />
// //                 </span>
// //                 Select Products
// //               </h4>

// //               {/* Search and Filters */}
// //               <div className="space-y-2 mb-3">
// //                 <div className="relative">
// //                   <input
// //                     type="text"
// //                     placeholder="Search products..."
// //                     className="w-full px-3 py-1.5 pl-8 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                   />
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FiSearch className="h-4 w-4 text-gray-400" />
// //                   </div>
// //                 </div>

// //                 <div className="grid grid-cols-3 gap-2">
// //                   <select
// //                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     value={sectionFilter}
// //                     onChange={(e) => setSectionFilter(e.target.value)}
// //                   >
// //                     <option value="all">All Sections</option>
// //                     {uniqueSections.map((section) => (
// //                       <option key={section} value={section}>
// //                         {section}
// //                       </option>
// //                     ))}
// //                   </select>

// //                   <select
// //                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     value={categoryFilter}
// //                     onChange={(e) => setCategoryFilter(e.target.value)}
// //                   >
// //                     <option value="all">All Categories</option>
// //                     {uniqueCategories.map((category) => (
// //                       <option key={category} value={category}>
// //                         {category}
// //                       </option>
// //                     ))}
// //                   </select>

// //                   <select
// //                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     value={subCategoryFilter}
// //                     onChange={(e) => setSubCategoryFilter(e.target.value)}
// //                     disabled={categoryFilter === "all"}
// //                   >
// //                     <option value="all">All Subcategories</option>
// //                     {uniqueSubCategories.map((subCategory) => (
// //                       <option key={subCategory} value={subCategory}>
// //                         {subCategory}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>

// //               {/* Product List */}
// //               <div className="border border-gray-200 rounded p-2 h-64 overflow-y-auto">
// //                 {filteredProducts.length === 0 ? (
// //                   <div className="text-center py-8 text-gray-500">
// //                     <svg
// //                       className="mx-auto h-8 w-8 text-gray-400"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                       stroke="currentColor"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //                       />
// //                     </svg>
// //                     <h3 className="mt-2 text-xs font-medium text-gray-900">
// //                       No products found
// //                     </h3>
// //                     <p className="mt-1 text-xs text-gray-500">
// //                       Try adjusting your search or filter criteria
// //                     </p>
// //                   </div>
// //                 ) : (
// //                   <div className="space-y-2">
// //                     {filteredProducts.map((product) => (
// //                       <div
// //                         key={product.id}
// //                         className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// //                       >
// //                         <div
// //                           className="flex items-center justify-between p-2 cursor-pointer"
// //                           onClick={() => toggleProductExpansion(product.id)}
// //                         >
// //                           <div className="flex items-center space-x-2">
// //                             {/* Product Images - Both regular and nxImage */}
// //                             <div className="flex space-x-1">
// //                               <img
// //                                 src={product.image}
// //                                 alt={product.name}
// //                                 className="w-8 h-8 object-cover rounded"
// //                               />
// //                               <img
// //                                 src={product.nxImage}
// //                                 alt={`${product.name} (NX)`}
// //                                 className="w-8 h-8 object-cover rounded border border-gray-200"
// //                               />
// //                             </div>
// //                             <div>
// //                               <div className="text-xs font-medium text-gray-900">
// //                                 {product.name}
// //                               </div>
// //                               <div className="text-xs text-gray-500">
// //                                 {product.category} / {product.subCategory}
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div className="flex items-center space-x-1">
// //                             <span className="text-xs text-gray-500">
// //                               {product.pricings.length} variants
// //                             </span>
// //                             {expandedProducts.has(product.id) ? (
// //                               <FiChevronUp className="h-3 w-3 text-gray-400" />
// //                             ) : (
// //                               <FiChevronDown className="h-3 w-3 text-gray-400" />
// //                             )}
// //                           </div>
// //                         </div>

// //                         {/* Pricing Variants */}
// //                         {expandedProducts.has(product.id) && (
// //                           <div className="border-t border-gray-200 p-2 bg-gray-50">
// //                             <div className="overflow-x-auto">
// //                               <table className="w-full text-xs">
// //                                 <thead className="bg-gray-100 text-gray-700">
// //                                   <tr>
// //                                     <th className="px-1 py-1 text-left">Qty</th>
// //                                     <th className="px-1 py-1 text-left">UOM</th>
// //                                     <th className="px-1 py-1 text-left">
// //                                       Price
// //                                     </th>
// //                                     <th className="px-1 py-1 text-left">
// //                                       Offer
// //                                     </th>
// //                                     <th className="px-1 py-1 text-left">
// //                                       Final
// //                                     </th>
// //                                     <th className="px-1 py-1 text-center">
// //                                       Add
// //                                     </th>
// //                                   </tr>
// //                                 </thead>
// //                                 <tbody>
// //                                   {product.pricings.map((pricing) => (
// //                                     <tr
// //                                       key={pricing.id}
// //                                       className="border-b border-gray-200"
// //                                     >
// //                                       <td className="px-1 py-1">
// //                                         {pricing.quantity}
// //                                       </td>
// //                                       <td className="px-1 py-1">
// //                                         {pricing.uom}
// //                                       </td>
// //                                       <td className="px-1 py-1">
// //                                         ₹{pricing.price}
// //                                       </td>
// //                                       <td className="px-1 py-1">
// //                                         {pricing.offerPercentage}%
// //                                       </td>
// //                                       <td className="px-1 py-1 font-medium">
// //                                         ₹
// //                                         {(
// //                                           pricing.price *
// //                                           (1 - pricing.offerPercentage / 100)
// //                                         ).toFixed(2)}
// //                                       </td>
// //                                       <td className="px-1 py-1 text-center">
// //                                         <button
// //                                           type="button"
// //                                           onClick={(e) => {
// //                                             e.stopPropagation();
// //                                             handleAddProduct(
// //                                               activeCombo.id,
// //                                               product,
// //                                               pricing,
// //                                               1
// //                                             );
// //                                           }}
// //                                           className="p-1 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
// //                                         >
// //                                           <FiPlus className="h-3 w-3" />
// //                                         </button>
// //                                       </td>
// //                                     </tr>
// //                                   ))}
// //                                 </tbody>
// //                               </table>
// //                             </div>
// //                           </div>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Selected Products */}
// //             <div className="mt-4">
// //               <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
// //                 <span className="bg-orange-100 text-orange-600 p-1 rounded mr-2">
// //                   <FiPlus className="h-3 w-3" />
// //                 </span>
// //                 Selected Products ({activeCombo.products.length})
// //               </h4>

// //               {/* Selected Products List */}
// //               <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
// //                 {activeCombo.products.length === 0 ? (
// //                   <div className="text-center py-8 text-gray-500">
// //                     <svg
// //                       className="mx-auto h-8 w-8 text-gray-400"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                       stroke="currentColor"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
// //                       />
// //                     </svg>
// //                     <h3 className="mt-2 text-xs font-medium text-gray-900">
// //                       No products selected
// //                     </h3>
// //                     <p className="mt-1 text-xs text-gray-500">
// //                       Select products from list to add to this combo
// //                     </p>
// //                   </div>
// //                 ) : (
// //                   <div className="space-y-2">
// //                     {activeCombo.products.map((item) => (
// //                       <div
// //                         key={item.id}
// //                         className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// //                       >
// //                         <div className="flex items-center justify-between p-2">
// //                           <div className="flex items-center space-x-2">
// //                             {/* Product Images - Both regular and nxImage */}
// //                             <div className="flex space-x-1">
// //                               <img
// //                                 src={item.product.image}
// //                                 alt={item.product.name}
// //                                 className="w-8 h-8 object-cover rounded"
// //                               />
// //                               <img
// //                                 src={item.product.nxImage}
// //                                 alt={`${item.product.name} (NX)`}
// //                                 className="w-8 h-8 object-cover rounded border border-gray-200"
// //                               />
// //                             </div>
// //                             <div>
// //                               <div className="text-xs font-medium text-gray-900">
// //                                 {item.product.name}
// //                               </div>
// //                               <div className="text-xs text-gray-500">
// //                                 {item.product.category}
// //                               </div>
// //                               {/* Display pricing information in the requested format */}
// //                               {item.pricing && (
// //                                 <div className="text-xs text-gray-600 flex items-center mt-1">
// //                                   {formatPricingInfo(
// //                                     item.pricing,
// //                                     item.quantity
// //                                   )}
// //                                 </div>
// //                               )}
// //                             </div>
// //                           </div>
// //                           <div className="flex items-center space-x-1">
// //                             <button
// //                               type="button"
// //                               onClick={() =>
// //                                 handleUpdateQuantity(
// //                                   activeCombo.id,
// //                                   item.id,
// //                                   item.quantity - 1
// //                                 )
// //                               }
// //                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// //                             >
// //                               -
// //                             </button>
// //                             <span className="text-xs w-6 text-center font-medium">
// //                               {item.quantity}
// //                             </span>
// //                             <button
// //                               type="button"
// //                               onClick={() =>
// //                                 handleUpdateQuantity(
// //                                   activeCombo.id,
// //                                   item.id,
// //                                   item.quantity + 1
// //                                 )
// //                               }
// //                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// //                             >
// //                               +
// //                             </button>
// //                             <button
// //                               type="button"
// //                               onClick={() =>
// //                                 handleRemoveProduct(activeCombo.id, item.id)
// //                               }
// //                               className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
// //                             >
// //                               <FiTrash2 className="h-3 w-3" />
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Submit Buttons */}
// //           <div className="flex justify-end space-x-2 p-4 border-t border-gray-200 flex-shrink-0">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="px-4 py-2 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors duration-200"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
// //               disabled={
// //                 combos.every((c) => c.products.length === 0) || isSubmitting
// //               }
// //             >
// //               {isSubmitting ? (
// //                 <>
// //                   <svg
// //                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <circle
// //                       className="opacity-25"
// //                       cx="12"
// //                       cy="12"
// //                       r="10"
// //                       stroke="currentColor"
// //                       strokeWidth="4"
// //                     ></circle>
// //                     <path
// //                       className="opacity-75"
// //                       fill="currentColor"
// //                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                     ></path>
// //                   </svg>
// //                   Adding...
// //                 </>
// //               ) : (
// //                 <>
// //                   <FiCheck className="mr-2" />
// //                   Add {combos.length} Combo{combos.length > 1 ? "s" : ""}
// //                 </>
// //               )}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useRef } from "react";
// import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import { addCombo } from "../comboSlice";
// import { Product, ProductPricing } from "../productsSlice";
// import { ComboProduct } from "../comboSlice";
// import {
//   FiX,
//   FiUpload,
//   FiImage,
//   FiPlus,
//   FiTrash2,
//   FiCheck,
//   FiSearch,
//   FiChevronDown,
//   FiChevronUp,
//   FiCopy,
// } from "react-icons/fi";

// interface AddComboModalProps {
//   onClose: () => void;
// }

// interface CreatingCombo {
//   id: string;
//   name: string;
//   stocks: number;
//   calories: number;
//   fat: number;
//   carb: number;
//   protein: number;
//   section: string;
//   category: string;
//   subCategory: string;
//   status: "active" | "inactive";
//   products: ComboProduct[];
//   pricings: ProductPricing[];
//   imagePreview: string | null;
//   nxImagePreview: string | null;
//   discountPercentage: number;
// }

// export default function AddComboModal({ onClose }: AddComboModalProps) {
//   const dispatch = useAppDispatch();
//   const { products } = useAppSelector((state) => state.masterProducts);

//   const [combos, setCombos] = useState<CreatingCombo[]>([
//     {
//       id: Date.now().toString(),
//       name: "",
//       stocks: 100,
//       calories: 0,
//       fat: 0,
//       carb: 0,
//       protein: 0,
//       section: "Food",
//       category: "Vegetables",
//       subCategory: "Leafy Greens",
//       status: "active",
//       products: [],
//       pricings: [
//         {
//           id: `${Date.now()}-0`,
//           quantity: "1",
//           uom: "kg",
//           purchasePrice: 0,
//           price: 0,
//           offerPercentage: 0,
//           appSalePrice: 0,
//           cgst: 0,
//           sgst: 0,
//           appPercentage: 0,
//           appAmount: 0,
//           status: true,
//         },
//       ],
//       imagePreview: null,
//       nxImagePreview: null,
//       discountPercentage: 0,
//     },
//   ]);

//   const [activeComboId, setActiveComboId] = useState<string>(
//     combos[0]?.id || ""
//   );
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sectionFilter, setSectionFilter] = useState<string>("all");
//   const [categoryFilter, setCategoryFilter] = useState<string>("all");
//   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
//     new Set()
//   );

//   const imageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
//   const nxImageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>(
//     {}
//   );

//   const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

//   const categories = {
//     Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
//     Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
//     Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
//     Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
//     Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
//   };

//   const subCategories = {
//     Vegetables: [
//       "Leafy Greens",
//       "Root Vegetables",
//       "Cruciferous",
//       "Allium",
//       "Podded",
//     ],
//     Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
//     Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
//     Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
//     Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],
//     Juices: [
//       "Fruit Juice",
//       "Vegetable Juice",
//       "Smoothies",
//       "Concentrates",
//       "Fresh",
//     ],
//     Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
//     Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
//     Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
//     Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],
//     Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
//     Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
//     Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
//     Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
//     Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],
//     Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
//     Cookies: [
//       "Chocolate Chip",
//       "Oatmeal",
//       "Sugar",
//       "Peanut Butter",
//       "Shortbread",
//     ],
//     Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
//     Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
//     Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],
//     Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
//     FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
//     FrozenFruits: [
//       "Mixed Berries",
//       "Tropical",
//       "Melon",
//       "Citrus",
//       "Stone Fruits",
//     ],
//     Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
//     Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
//   };

//   const uniqueSections = Array.from(new Set(products.map((p) => p.section)));
//   const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

//   const uniqueSubCategories =
//     categoryFilter === "all"
//       ? Array.from(new Set(products.map((p) => p.subCategory)))
//       : Array.from(
//           new Set(
//             products
//               .filter((p) => p.category === categoryFilter)
//               .map((p) => p.subCategory)
//           )
//         );

//   React.useEffect(() => {
//     setSubCategoryFilter("all");
//   }, [categoryFilter]);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesSection =
//       sectionFilter === "all" || product.section === sectionFilter;
//     const matchesCategory =
//       categoryFilter === "all" || product.category === categoryFilter;
//     const matchesSubCategory =
//       subCategoryFilter === "all" || product.subCategory === subCategoryFilter;

//     return (
//       matchesSearch && matchesSection && matchesCategory && matchesSubCategory
//     );
//   });

//   const activeCombo = combos.find((c) => c.id === activeComboId) || combos[0];

//   const handleComboChange = (
//     comboId: string,
//     field: keyof CreatingCombo,
//     value: any
//   ) => {
//     setCombos((prev) =>
//       prev.map((combo) =>
//         combo.id === comboId ? { ...combo, [field]: value } : combo
//       )
//     );
//   };

//   const handleImageChange = (
//     comboId: string,
//     imageType: "image" | "nxImage",
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const result = reader.result as string;
//         if (imageType === "image") {
//           handleComboChange(comboId, "imagePreview", result);
//         } else if (imageType === "nxImage") {
//           handleComboChange(comboId, "nxImagePreview", result);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const toggleProductExpansion = (productId: string) => {
//     setExpandedProducts((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(productId)) {
//         newSet.delete(productId);
//       } else {
//         newSet.add(productId);
//       }
//       return newSet;
//     });
//   };

//   const recalculateComboPrice = (comboId: string) => {
//     const combo = combos.find((c) => c.id === comboId);
//     if (!combo) return;

//     const totalPrice = combo.products.reduce((sum, item) => {
//       return sum + (item.pricing?.price || 0) * item.quantity;
//     }, 0);

//     const discountedPrice = Math.floor(
//       totalPrice * (1 - combo.discountPercentage / 100)
//     );

//     const updatedPricings = [...combo.pricings];
//     if (updatedPricings.length > 0) {
//       updatedPricings[0].price = discountedPrice;

//       const purchasePrice = updatedPricings[0].purchasePrice;
//       const offerPercentage = combo.discountPercentage;
//       const offerAmount = (offerPercentage / 100) * discountedPrice;
//       const appSalePrice = discountedPrice - purchasePrice - offerAmount;
//       const appPercentage =
//         discountedPrice > 0
//           ? Math.round((appSalePrice / discountedPrice) * 100)
//           : 0;

//       updatedPricings[0].appSalePrice = appSalePrice;
//       updatedPricings[0].appPercentage = appPercentage;
//     }

//     handleComboChange(comboId, "pricings", updatedPricings);
//   };

//   const handleAddProduct = (
//     comboId: string,
//     product: Product,
//     pricing: ProductPricing,
//     quantity: number = 1
//   ) => {
//     setCombos((prev) =>
//       prev.map((combo) => {
//         if (combo.id !== comboId) return combo;

//         const existingProductIndex = combo.products.findIndex(
//           (p) => p.productId === product.id && p.pricing?.id === pricing.id
//         );

//         let updatedProducts;
//         if (existingProductIndex !== -1) {
//           updatedProducts = [...combo.products];
//           updatedProducts[existingProductIndex].quantity += quantity;
//         } else {
//           updatedProducts = [
//             ...combo.products,
//             {
//               id: `${product.id}-${pricing.id}`,
//               productId: product.id,
//               quantity,
//               product,
//               pricing,
//             },
//           ];
//         }

//         const totalPrice = updatedProducts.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);

//         const discountedPrice = Math.floor(
//           totalPrice * (1 - combo.discountPercentage / 100)
//         );

//         const updatedPricings = [...combo.pricings];
//         if (updatedPricings.length > 0) {
//           updatedPricings[0].price = discountedPrice;

//           const purchasePrice = updatedPricings[0].purchasePrice;
//           const offerPercentage = combo.discountPercentage;
//           const offerAmount = (offerPercentage / 100) * discountedPrice;
//           const appSalePrice = discountedPrice - purchasePrice - offerAmount;
//           const appPercentage =
//             discountedPrice > 0
//               ? Math.round((appSalePrice / discountedPrice) * 100)
//               : 0;

//           updatedPricings[0].appSalePrice = appSalePrice;
//           updatedPricings[0].appPercentage = appPercentage;
//         }

//         return {
//           ...combo,
//           products: updatedProducts,
//           pricings: updatedPricings,
//         };
//       })
//     );
//   };

//   const handleRemoveProduct = (comboId: string, productId: string) => {
//     setCombos((prev) =>
//       prev.map((combo) => {
//         if (combo.id !== comboId) return combo;

//         const updatedProducts = combo.products.filter(
//           (p) => p.id !== productId
//         );

//         const totalPrice = updatedProducts.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);

//         const discountedPrice = Math.floor(
//           totalPrice * (1 - combo.discountPercentage / 100)
//         );

//         const updatedPricings = [...combo.pricings];
//         if (updatedPricings.length > 0) {
//           updatedPricings[0].price = discountedPrice;

//           const purchasePrice = updatedPricings[0].purchasePrice;
//           const offerPercentage = combo.discountPercentage;
//           const offerAmount = (offerPercentage / 100) * discountedPrice;
//           const appSalePrice = discountedPrice - purchasePrice - offerAmount;
//           const appPercentage =
//             discountedPrice > 0
//               ? Math.round((appSalePrice / discountedPrice) * 100)
//               : 0;

//           updatedPricings[0].appSalePrice = appSalePrice;
//           updatedPricings[0].appPercentage = appPercentage;
//         }

//         return {
//           ...combo,
//           products: updatedProducts,
//           pricings: updatedPricings,
//         };
//       })
//     );
//   };

//   const handleUpdateQuantity = (
//     comboId: string,
//     productId: string,
//     quantity: number
//   ) => {
//     if (quantity <= 0) return;

//     setCombos((prev) =>
//       prev.map((combo) => {
//         if (combo.id !== comboId) return combo;

//         const updatedProducts = combo.products.map((p) =>
//           p.id === productId ? { ...p, quantity } : p
//         );

//         const totalPrice = updatedProducts.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);

//         const discountedPrice = Math.floor(
//           totalPrice * (1 - combo.discountPercentage / 100)
//         );

//         const updatedPricings = [...combo.pricings];
//         if (updatedPricings.length > 0) {
//           updatedPricings[0].price = discountedPrice;

//           const purchasePrice = updatedPricings[0].purchasePrice;
//           const offerPercentage = combo.discountPercentage;
//           const offerAmount = (offerPercentage / 100) * discountedPrice;
//           const appSalePrice = discountedPrice - purchasePrice - offerAmount;
//           const appPercentage =
//             discountedPrice > 0
//               ? Math.round((appSalePrice / discountedPrice) * 100)
//               : 0;

//           updatedPricings[0].appSalePrice = appSalePrice;
//           updatedPricings[0].appPercentage = appPercentage;
//         }

//         return {
//           ...combo,
//           products: updatedProducts,
//           pricings: updatedPricings,
//         };
//       })
//     );
//   };

//   const handlePricingChange = (
//     comboId: string,
//     pricingId: string,
//     field: keyof ProductPricing,
//     value: any
//   ) => {
//     setCombos((prev) =>
//       prev.map((combo) => {
//         if (combo.id !== comboId) return combo;

//         const updatedPricings = combo.pricings.map((p) => {
//           if (p.id === pricingId) {
//             const updated = { ...p, [field]: value };

//             if (
//               field === "purchasePrice" ||
//               field === "price" ||
//               field === "offerPercentage"
//             ) {
//               const purchasePrice =
//                 field === "purchasePrice" ? value : p.purchasePrice;
//               const price = field === "price" ? value : p.price;
//               const offer =
//                 field === "offerPercentage" ? value : p.offerPercentage;

//               const offerAmount = (offer / 100) * price;
//               const appSalePrice = price - purchasePrice - offerAmount;
//               const appPercentage =
//                 price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

//               return {
//                 ...updated,
//                 appSalePrice,
//                 appPercentage,
//               };
//             }

//             return updated;
//           }
//           return p;
//         });

//         if (
//           field === "offerPercentage" &&
//           pricingId === combo.pricings[0]?.id
//         ) {
//           const discountPercentage = value;

//           const totalPrice = combo.products.reduce((sum, item) => {
//             return sum + (item.pricing?.price || 0) * item.quantity;
//           }, 0);

//           const discountedPrice = Math.floor(
//             totalPrice * (1 - discountPercentage / 100)
//           );

//           return {
//             ...combo,
//             pricings: updatedPricings,
//             discountPercentage,
//             price: discountedPrice,
//           };
//         }

//         return { ...combo, pricings: updatedPricings };
//       })
//     );
//   };

//   const addPricingRow = (comboId: string) => {
//     setCombos((prev) =>
//       prev.map((combo) => {
//         if (combo.id !== comboId) return combo;

//         return {
//           ...combo,
//           pricings: [
//             ...combo.pricings,
//             {
//               id: `${combo.id}-${Date.now()}`,
//               quantity: "1",
//               uom: "kg",
//               purchasePrice: 0,
//               price: 0,
//               offerPercentage: 0,
//               appSalePrice: 0,
//               cgst: 0,
//               sgst: 0,
//               appPercentage: 0,
//               appAmount: 0,
//               status: true,
//             },
//           ],
//         };
//       })
//     );
//   };

//   const removePricingRow = (comboId: string, pricingId: string) => {
//     setCombos((prev) =>
//       prev.map((combo) => {
//         if (combo.id !== comboId) return combo;

//         if (combo.pricings.length <= 1) return combo;

//         return {
//           ...combo,
//           pricings: combo.pricings.filter((p) => p.id !== pricingId),
//         };
//       })
//     );
//   };

//   const addNewCombo = () => {
//     const newCombo: CreatingCombo = {
//       id: Date.now().toString(),
//       name: "",
//       stocks: 100,
//       calories: 0,
//       fat: 0,
//       carb: 0,
//       protein: 0,
//       section: "Food",
//       category: "Vegetables",
//       subCategory: "Leafy Greens",
//       status: "active",
//       products: [],
//       pricings: [
//         {
//           id: `${Date.now()}-0`,
//           quantity: "1",
//           uom: "kg",
//           purchasePrice: 0,
//           price: 0,
//           offerPercentage: 0,
//           appSalePrice: 0,
//           cgst: 0,
//           sgst: 0,
//           appPercentage: 0,
//           appAmount: 0,
//           status: true,
//         },
//       ],
//       imagePreview: null,
//       nxImagePreview: null,
//       discountPercentage: 0,
//     };
//     setCombos((prev) => [...prev, newCombo]);
//     setActiveComboId(newCombo.id);
//   };

//   const removeCombo = (comboId: string) => {
//     if (combos.length <= 1) return;

//     setCombos((prev) => {
//       const newCombos = prev.filter((c) => c.id !== comboId);
//       if (activeComboId === comboId && newCombos.length > 0) {
//         setActiveComboId(newCombos[0].id);
//       }
//       return newCombos;
//     });
//   };

//   const duplicateCombo = (comboId: string) => {
//     const comboToDuplicate = combos.find((c) => c.id === comboId);
//     if (!comboToDuplicate) return;

//     const newCombo: CreatingCombo = {
//       ...comboToDuplicate,
//       id: Date.now().toString(),
//       name: `${comboToDuplicate.name} (Copy)`,
//       pricings: comboToDuplicate.pricings.map((p) => ({
//         ...p,
//         id: `${Date.now()}-${p.id.split("-")[1] || 0}`,
//       })),
//     };
//     setCombos((prev) => [...prev, newCombo]);
//     setActiveComboId(newCombo.id);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       for (const combo of combos) {
//         if (!combo.name.trim()) continue;

//         const totalPrice = combo.products.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);

//         const discountedPrice = Math.floor(
//           totalPrice * (1 - combo.discountPercentage / 100)
//         );

//         const seed = Math.random().toString(36).substring(7);
//         const image =
//           combo.imagePreview ||
//           `https://picsum.photos/seed/${seed}/300/300.jpg`;

//         const nxImageSeed = Math.random().toString(36).substring(7);
//         const nxImage =
//           combo.nxImagePreview ||
//           `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`;

//         const newCombo = {
//           ...combo,
//           image,
//           nxImage,
//           price: discountedPrice,
//         };

//         await dispatch(addCombo(newCombo));
//       }
//       onClose();
//     } catch (error) {
//       console.error("Error adding combos:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const formatPricingInfo = (pricing: ProductPricing, quantity: number) => {
//     if (!pricing) return "";

//     const {
//       quantity: unitQty,
//       uom,
//       purchasePrice,
//       price,
//       offerPercentage,
//       appPercentage,
//       appSalePrice,
//     } = pricing;

//     const finalPrice = price * (1 - offerPercentage / 100);

//     return `${quantity} ${uom} ₹${finalPrice.toFixed(
//       2
//     )} ${offerPercentage}% off (Original: ₹${price}) PP:₹${purchasePrice} AP:${appPercentage}% ASP:₹${appSalePrice.toFixed(
//       2
//     )}`;
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl mx-4 my-4 max-h-[98vh] flex flex-col">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0 rounded-t-xl">
//           <h3 className="text-lg font-semibold text-white">
//             Add Multiple Product Combos
//           </h3>
//           <button
//             onClick={onClose}
//             className="text-white hover:text-gray-200 transition-colors"
//           >
//             <FiX className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Form with scrolling */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col flex-1 overflow-hidden"
//         >
//           <div className="flex-1 overflow-y-auto p-4">
//             {/* Combo Tabs */}
//             <div className="mb-4 border-b border-gray-200">
//               <div className="flex space-x-2 overflow-x-auto pb-2">
//                 {combos.map((combo, index) => (
//                   <button
//                     key={combo.id}
//                     type="button"
//                     onClick={() => setActiveComboId(combo.id)}
//                     className={`px-3 py-2 rounded-t-lg font-medium text-xs whitespace-nowrap ${
//                       activeComboId === combo.id
//                         ? "bg-emerald-100 text-emerald-700 border-b-2 border-emerald-500"
//                         : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
//                     }`}
//                   >
//                     Combo {index + 1}
//                     {combo.name && `: ${combo.name}`}
//                   </button>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={addNewCombo}
//                   className="px-2 py-2 rounded-t-lg font-medium text-xs text-emerald-600 hover:bg-emerald-50 flex items-center"
//                 >
//                   <FiPlus className="h-3 w-3 mr-1" />
//                   Add Combo
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//               {/* Left Column - Basic Info */}
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <h4 className="text-sm font-semibold text-gray-700 flex items-center">
//                     <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
//                       <FiPlus className="h-3 w-3" />
//                     </span>
//                     Basic Information
//                   </h4>
//                   {combos.length > 1 && (
//                     <div className="flex space-x-2">
//                       <button
//                         type="button"
//                         onClick={() => duplicateCombo(activeCombo.id)}
//                         className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
//                         title="Duplicate Combo"
//                       >
//                         <FiCopy className="h-3 w-3" />
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => removeCombo(activeCombo.id)}
//                         className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
//                         title="Remove Combo"
//                       >
//                         <FiTrash2 className="h-3 w-3" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor={`name-${activeCombo.id}`}
//                     className="block text-xs font-medium text-gray-700 mb-1"
//                   >
//                     Product Name
//                   </label>
//                   <input
//                     type="text"
//                     id={`name-${activeCombo.id}`}
//                     value={activeCombo.name}
//                     onChange={(e) =>
//                       handleComboChange(activeCombo.id, "name", e.target.value)
//                     }
//                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-3">
//                   {/* <div>
//                     <label
//                       htmlFor={`stocks-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Stock Quantity
//                     </label>
//                     <input
//                       type="number"
//                       id={`stocks-${activeCombo.id}`}
//                       value={activeCombo.stocks}
//                       onChange={(e) =>
//                         handleComboChange(
//                           activeCombo.id,
//                           "stocks",
//                           parseFloat(e.target.value) || 0
//                         )
//                       }
//                       min="0"
//                       className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       required
//                     />
//                   </div> */}
//                   <div>
//                     <label
//                       htmlFor={`status-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Status
//                     </label>
//                     <select
//                       id={`status-${activeCombo.id}`}
//                       value={activeCombo.status}
//                       onChange={(e) =>
//                         handleComboChange(
//                           activeCombo.id,
//                           "status",
//                           e.target.value
//                         )
//                       }
//                       className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     >
//                       <option value="active">Active</option>
//                       <option value="inactive">Inactive</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-2">
//                   <div>
//                     <label
//                       htmlFor={`section-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Section
//                     </label>
//                     <select
//                       id={`section-${activeCombo.id}`}
//                       value={activeCombo.section}
//                       onChange={(e) => {
//                         const section = e.target.value;
//                         const category = categories[section][0];
//                         const subCategory = subCategories[category][0];

//                         handleComboChange(activeCombo.id, "section", section);
//                         handleComboChange(activeCombo.id, "category", category);
//                         handleComboChange(
//                           activeCombo.id,
//                           "subCategory",
//                           subCategory
//                         );
//                       }}
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     >
//                       {sections.map((section) => (
//                         <option key={section} value={section}>
//                           {section}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor={`category-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Category
//                     </label>
//                     <select
//                       id={`category-${activeCombo.id}`}
//                       value={activeCombo.category}
//                       onChange={(e) => {
//                         const category = e.target.value;
//                         const subCategory = subCategories[category][0];

//                         handleComboChange(activeCombo.id, "category", category);
//                         handleComboChange(
//                           activeCombo.id,
//                           "subCategory",
//                           subCategory
//                         );
//                       }}
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     >
//                       {categories[activeCombo.section]?.map((category) => (
//                         <option key={category} value={category}>
//                           {category}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor={`subCategory-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Sub Category
//                     </label>
//                     <select
//                       id={`subCategory-${activeCombo.id}`}
//                       value={activeCombo.subCategory}
//                       onChange={(e) =>
//                         handleComboChange(
//                           activeCombo.id,
//                           "subCategory",
//                           e.target.value
//                         )
//                       }
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     >
//                       {subCategories[activeCombo.category]?.map(
//                         (subCategory) => (
//                           <option key={subCategory} value={subCategory}>
//                             {subCategory}
//                           </option>
//                         )
//                       )}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-4 gap-2">
//                   <div>
//                     <label
//                       htmlFor={`calories-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Calories
//                     </label>
//                     <input
//                       type="number"
//                       id={`calories-${activeCombo.id}`}
//                       value={activeCombo.calories}
//                       onChange={(e) =>
//                         handleComboChange(
//                           activeCombo.id,
//                           "calories",
//                           parseFloat(e.target.value) || 0
//                         )
//                       }
//                       min="0"
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor={`fat-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Fat (g)
//                     </label>
//                     <input
//                       type="number"
//                       id={`fat-${activeCombo.id}`}
//                       value={activeCombo.fat}
//                       onChange={(e) =>
//                         handleComboChange(
//                           activeCombo.id,
//                           "fat",
//                           parseFloat(e.target.value) || 0
//                         )
//                       }
//                       step="0.1"
//                       min="0"
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor={`carb-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Carbs (g)
//                     </label>
//                     <input
//                       type="number"
//                       id={`carb-${activeCombo.id}`}
//                       value={activeCombo.carb}
//                       onChange={(e) =>
//                         handleComboChange(
//                           activeCombo.id,
//                           "carb",
//                           parseFloat(e.target.value) || 0
//                         )
//                       }
//                       step="0.1"
//                       min="0"
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor={`protein-${activeCombo.id}`}
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Protein (g)
//                     </label>
//                     <input
//                       type="number"
//                       id={`protein-${activeCombo.id}`}
//                       value={activeCombo.protein}
//                       onChange={(e) =>
//                         handleComboChange(
//                           activeCombo.id,
//                           "protein",
//                           parseFloat(e.target.value) || 0
//                         )
//                       }
//                       step="0.1"
//                       min="0"
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor={`discount-${activeCombo.id}`}
//                     className="block text-xs font-medium text-gray-700 mb-1"
//                   >
//                     Discount Percentage
//                   </label>
//                   <input
//                     type="number"
//                     id={`discount-${activeCombo.id}`}
//                     value={activeCombo.discountPercentage}
//                     onChange={(e) => {
//                       const discount = parseFloat(e.target.value) || 0;
//                       handleComboChange(
//                         activeCombo.id,
//                         "discountPercentage",
//                         discount
//                       );
//                       recalculateComboPrice(activeCombo.id);
//                     }}
//                     min="0"
//                     max="100"
//                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   />
//                 </div>
//               </div>

//               {/* Right Column - Image Upload */}
//               <div className="space-y-3">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">
//                     Product Image
//                   </label>
//                   <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
//                     <div className="space-y-1 text-center">
//                       {activeCombo.imagePreview ? (
//                         <div className="relative">
//                           <img
//                             src={activeCombo.imagePreview}
//                             alt="Product preview"
//                             className="h-20 w-20 object-cover rounded shadow-md"
//                           />
//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleComboChange(
//                                 activeCombo.id,
//                                 "imagePreview",
//                                 null
//                               )
//                             }
//                             className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
//                           >
//                             <svg
//                               className="h-3 w-3"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M6 18L18 6M6 6l12 12"
//                               />
//                             </svg>
//                           </button>
//                         </div>
//                       ) : (
//                         <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
//                       )}
//                       <div className="flex text-xs text-gray-600">
//                         <label
//                           htmlFor={`image-upload-${activeCombo.id}`}
//                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
//                         >
//                           <span>Upload</span>
//                           <input
//                             ref={(el) =>
//                               (imageInputRefs.current[activeCombo.id] = el)
//                             }
//                             id={`image-upload-${activeCombo.id}`}
//                             type="file"
//                             className="sr-only"
//                             accept="image/*"
//                             onChange={(e) =>
//                               handleImageChange(activeCombo.id, "image", e)
//                             }
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">
//                     NX Product Image
//                   </label>
//                   <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
//                     <div className="space-y-1 text-center">
//                       {activeCombo.nxImagePreview ? (
//                         <div className="relative">
//                           <img
//                             src={activeCombo.nxImagePreview}
//                             alt="NX Product preview"
//                             className="h-20 w-20 object-cover rounded shadow-md"
//                           />
//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleComboChange(
//                                 activeCombo.id,
//                                 "nxImagePreview",
//                                 null
//                               )
//                             }
//                             className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
//                           >
//                             <svg
//                               className="h-3 w-3"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M6 18L18 6M6 6l12 12"
//                               />
//                             </svg>
//                           </button>
//                         </div>
//                       ) : (
//                         <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
//                       )}
//                       <div className="flex text-xs text-gray-600">
//                         <label
//                           htmlFor={`nx-image-upload-${activeCombo.id}`}
//                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
//                         >
//                           <span>Upload</span>
//                           <input
//                             ref={(el) =>
//                               (nxImageInputRefs.current[activeCombo.id] = el)
//                             }
//                             id={`nx-image-upload-${activeCombo.id}`}
//                             type="file"
//                             className="sr-only"
//                             accept="image/*"
//                             onChange={(e) =>
//                               handleImageChange(activeCombo.id, "nxImage", e)
//                             }
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Pricing Table */}
//             <div className="mt-4">
//               <div className="flex justify-between items-center mb-2">
//                 <h4 className="text-sm font-semibold text-gray-700">Pricing</h4>
//                 <button
//                   type="button"
//                   onClick={() => addPricingRow(activeCombo.id)}
//                   className="flex items-center gap-1 bg-emerald-600 text-white px-2 py-1 text-xs rounded"
//                 >
//                   <FiPlus className="h-3 w-3" /> Add Pricing
//                 </button>
//               </div>
//               <div className="overflow-x-auto border border-gray-200 rounded">
//                 <table className="w-full text-xs">
//                   <thead className="bg-gray-100 text-gray-700">
//                     <tr>
//                       <th className="px-1 py-1 border border-gray-200">Qty</th>
//                       <th className="px-1 py-1 border border-gray-200">UOM</th>
//                       <th className="px-1 py-1 border border-gray-200">
//                         Purchase Price
//                       </th>
//                       <th className="px-1 py-1 border border-gray-200">
//                         Sale Price
//                       </th>
//                       <th className="px-1 py-1 border border-gray-200">
//                         Offer %
//                       </th>
//                       <th className="px-1 py-1 border border-gray-200">CGST</th>
//                       <th className="px-1 py-1 border border-gray-200">SGST</th>
//                       <th className="px-1 py-1 border border-gray-200">App%</th>
//                       <th className="px-1 py-1 border border-gray-200">
//                         App Amount
//                       </th>
//                       <th className="px-1 py-1 border border-gray-200">
//                         Remove
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {activeCombo.pricings.map((p) => (
//                       <tr key={p.id} className="text-center">
//                         <td className="px-1 py-1 border border-gray-200">
//                           <input
//                             type="text"
//                             min="1"
//                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.quantity}
//                             onChange={(e) =>
//                               handlePricingChange(
//                                 activeCombo.id,
//                                 p.id,
//                                 "quantity",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </td>
//                         <td className="px-2 py-1 border border-gray-200">
//                           <select
//                             className="w-24 px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.uom}
//                             onChange={(e) =>
//                               handlePricingChange(
//                                 activeCombo.id,
//                                 p.id,
//                                 "uom",
//                                 e.target.value
//                               )
//                             }
//                           >
//                             <option>kg</option>
//                             <option>g</option>
//                             <option>ltr</option>
//                             <option>ml</option>
//                           </select>
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200">
//                           <input
//                             type="number"
//                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.purchasePrice}
//                             onChange={(e) =>
//                               handlePricingChange(
//                                 activeCombo.id,
//                                 p.id,
//                                 "purchasePrice",
//                                 Number(e.target.value)
//                               )
//                             }
//                           />
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200">
//                           <input
//                             type="number"
//                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.price}
//                             onChange={(e) =>
//                               handlePricingChange(
//                                 activeCombo.id,
//                                 p.id,
//                                 "price",
//                                 Number(e.target.value)
//                               )
//                             }
//                           />
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200">
//                           <input
//                             type="number"
//                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.offerPercentage}
//                             onChange={(e) =>
//                               handlePricingChange(
//                                 activeCombo.id,
//                                 p.id,
//                                 "offerPercentage",
//                                 Number(e.target.value)
//                               )
//                             }
//                           />
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200 text-xs">
//                           <input
//                             type="number"
//                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.cgst}
//                             onChange={(e) =>
//                               handlePricingChange(
//                                 activeCombo.id,
//                                 p.id,
//                                 "cgst",
//                                 Number(e.target.value)
//                               )
//                             }
//                           />
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200 text-xs">
//                           <input
//                             type="number"
//                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.sgst}
//                             onChange={(e) =>
//                               handlePricingChange(
//                                 activeCombo.id,
//                                 p.id,
//                                 "sgst",
//                                 Number(e.target.value)
//                               )
//                             }
//                           />
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200 text-xs">
//                           {p.appPercentage}%
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200 bg-gray-50 text-xs">
//                           {p.appSalePrice.toFixed(2)}
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200">
//                           <button
//                             type="button"
//                             onClick={() =>
//                               removePricingRow(activeCombo.id, p.id)
//                             }
//                             className="text-red-500 hover:text-red-700"
//                             disabled={activeCombo.pricings.length === 1}
//                           >
//                             <FiTrash2 className="h-3 w-3" />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Product Selection */}
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
//                 <span className="bg-green-100 text-green-600 p-1 rounded mr-2">
//                   <FiPlus className="h-3 w-3" />
//                 </span>
//                 Select Products
//               </h4>

//               {/* Search and Filters */}
//               <div className="space-y-2 mb-3">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search products..."
//                     className="w-full px-3 py-1.5 pl-8 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiSearch className="h-4 w-4 text-gray-400" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-2">
//                   <select
//                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     value={sectionFilter}
//                     onChange={(e) => setSectionFilter(e.target.value)}
//                   >
//                     <option value="all">All Sections</option>
//                     {uniqueSections.map((section) => (
//                       <option key={section} value={section}>
//                         {section}
//                       </option>
//                     ))}
//                   </select>

//                   <select
//                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     value={categoryFilter}
//                     onChange={(e) => setCategoryFilter(e.target.value)}
//                   >
//                     <option value="all">All Categories</option>
//                     {uniqueCategories.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>

//                   <select
//                     className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     value={subCategoryFilter}
//                     onChange={(e) => setSubCategoryFilter(e.target.value)}
//                     disabled={categoryFilter === "all"}
//                   >
//                     <option value="all">All Subcategories</option>
//                     {uniqueSubCategories.map((subCategory) => (
//                       <option key={subCategory} value={subCategory}>
//                         {subCategory}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Product List */}
//               <div className="border border-gray-200 rounded p-2 h-64 overflow-y-auto">
//                 {filteredProducts.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500">
//                     <svg
//                       className="mx-auto h-8 w-8 text-gray-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     <h3 className="mt-2 text-xs font-medium text-gray-900">
//                       No products found
//                     </h3>
//                     <p className="mt-1 text-xs text-gray-500">
//                       Try adjusting your search or filter criteria
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     {filteredProducts.map((product) => (
//                       <div
//                         key={product.id}
//                         className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
//                       >
//                         <div
//                           className="flex items-center justify-between p-2 cursor-pointer"
//                           onClick={() => toggleProductExpansion(product.id)}
//                         >
//                           <div className="flex items-center space-x-2">
//                             <div className="flex space-x-1">
//                               <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="w-8 h-8 object-cover rounded"
//                               />
//                               <img
//                                 src={product.nxImage}
//                                 alt={`${product.name} (NX)`}
//                                 className="w-8 h-8 object-cover rounded border border-gray-200"
//                               />
//                             </div>
//                             <div>
//                               <div className="text-xs font-medium text-gray-900">
//                                 {product.name}
//                               </div>
//                               <div className="text-xs text-gray-500">
//                                 {product.category} / {product.subCategory}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <span className="text-xs text-gray-500">
//                               {product.pricings.length} variants
//                             </span>
//                             {expandedProducts.has(product.id) ? (
//                               <FiChevronUp className="h-3 w-3 text-gray-400" />
//                             ) : (
//                               <FiChevronDown className="h-3 w-3 text-gray-400" />
//                             )}
//                           </div>
//                         </div>

//                         {expandedProducts.has(product.id) && (
//                           <div className="border-t border-gray-200 p-2 bg-gray-50">
//                             <div className="overflow-x-auto">
//                               <table className="w-full text-xs">
//                                 <thead className="bg-gray-100 text-gray-700">
//                                   <tr>
//                                     <th className="px-1 py-1 text-left">Qty</th>
//                                     <th className="px-1 py-1 text-left">UOM</th>
//                                     <th className="px-1 py-1 text-left">
//                                       Price
//                                     </th>
//                                     <th className="px-1 py-1 text-left">
//                                       Offer
//                                     </th>
//                                     <th className="px-1 py-1 text-left">
//                                       Final
//                                     </th>
//                                     <th className="px-1 py-1 text-center">
//                                       Add
//                                     </th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   {product.pricings.map((pricing) => (
//                                     <tr
//                                       key={pricing.id}
//                                       className="border-b border-gray-200"
//                                     >
//                                       <td className="px-1 py-1">
//                                         {pricing.quantity}
//                                       </td>
//                                       <td className="px-1 py-1">
//                                         {pricing.uom}
//                                       </td>
//                                       <td className="px-1 py-1">
//                                         ₹{pricing.price}
//                                       </td>
//                                       <td className="px-1 py-1">
//                                         {pricing.offerPercentage}%
//                                       </td>
//                                       <td className="px-1 py-1 font-medium">
//                                         ₹
//                                         {(
//                                           pricing.price *
//                                           (1 - pricing.offerPercentage / 100)
//                                         ).toFixed(2)}
//                                       </td>
//                                       <td className="px-1 py-1 text-center">
//                                         <button
//                                           type="button"
//                                           onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleAddProduct(
//                                               activeCombo.id,
//                                               product,
//                                               pricing,
//                                               1
//                                             );
//                                           }}
//                                           className="p-1 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
//                                         >
//                                           <FiPlus className="h-3 w-3" />
//                                         </button>
//                                       </td>
//                                     </tr>
//                                   ))}
//                                 </tbody>
//                               </table>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Selected Products */}
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
//                 <span className="bg-orange-100 text-orange-600 p-1 rounded mr-2">
//                   <FiPlus className="h-3 w-3" />
//                 </span>
//                 Selected Products ({activeCombo.products.length})
//               </h4>

//               <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
//                 {activeCombo.products.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500">
//                     <svg
//                       className="mx-auto h-8 w-8 text-gray-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//                       />
//                     </svg>
//                     <h3 className="mt-2 text-xs font-medium text-gray-900">
//                       No products selected
//                     </h3>
//                     <p className="mt-1 text-xs text-gray-500">
//                       Select products from list to add to this combo
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     {activeCombo.products.map((item) => (
//                       <div
//                         key={item.id}
//                         className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
//                       >
//                         <div className="flex items-center justify-between p-2">
//                           <div className="flex items-center space-x-2">
//                             <div className="flex space-x-1">
//                               <img
//                                 src={item.product.image}
//                                 alt={item.product.name}
//                                 className="w-8 h-8 object-cover rounded"
//                               />
//                               <img
//                                 src={item.product.nxImage}
//                                 alt={`${item.product.name} (NX)`}
//                                 className="w-8 h-8 object-cover rounded border border-gray-200"
//                               />
//                             </div>
//                             <div>
//                               <div className="text-xs font-medium text-gray-900">
//                                 {item.product.name}
//                               </div>
//                               <div className="text-xs text-gray-500">
//                                 {item.product.category}
//                               </div>
//                               {item.pricing && (
//                                 <div className="text-xs text-gray-600 flex items-center mt-1">
//                                   {formatPricingInfo(
//                                     item.pricing,
//                                     item.quantity
//                                   )}
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 handleUpdateQuantity(
//                                   activeCombo.id,
//                                   item.id,
//                                   item.quantity - 1
//                                 )
//                               }
//                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
//                             >
//                               -
//                             </button>
//                             <span className="text-xs w-6 text-center font-medium">
//                               {item.quantity}
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 handleUpdateQuantity(
//                                   activeCombo.id,
//                                   item.id,
//                                   item.quantity + 1
//                                 )
//                               }
//                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
//                             >
//                               +
//                             </button>
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 handleRemoveProduct(activeCombo.id, item.id)
//                               }
//                               className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
//                             >
//                               <FiTrash2 className="h-3 w-3" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Submit Buttons */}
//           <div className="flex justify-end space-x-2 p-4 border-t border-gray-200 flex-shrink-0">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
//               disabled={
//                 combos.every((c) => c.products.length === 0) || isSubmitting
//               }
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg
//                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Adding...
//                 </>
//               ) : (
//                 <>
//                   <FiCheck className="mr-2" />
//                   Add {combos.length} Combo{combos.length > 1 ? "s" : ""}
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addCombo } from "../comboSlice";
import { Product, ProductPricing } from "../productsSlice";
import { ComboProduct } from "../comboSlice";
import {
  FiX,
  FiUpload,
  FiImage,
  FiPlus,
  FiTrash2,
  FiCheck,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiCopy,
  FiEdit3,
} from "react-icons/fi";

interface AddComboModalProps {
  onClose: () => void;
}

interface CreatingCombo {
  id: string;
  name: string;
  stocks: number;
  calories: number;
  fat: number;
  carb: number;
  protein: number;
  section: string;
  category: string;
  subCategory: string;
  status: "active" | "inactive";
  products: ComboProduct[];
  pricings: ProductPricing[];
  imagePreview: string | null;
  nxImagePreview: string | null;
  discountPercentage: number;
  price: number; // Added price field
  // Add flags to track if nutrition values are manually overridden
  manualNutrition: boolean;
}

export default function AddComboModal({ onClose }: AddComboModalProps) {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.masterProducts);

  const [combos, setCombos] = useState<CreatingCombo[]>([
    {
      id: Date.now().toString(),
      name: "",
      stocks: 100,
      calories: 0,
      fat: 0,
      carb: 0,
      protein: 0,
      section: "Food",
      category: "Vegetables",
      subCategory: "Leafy Greens",
      status: "active",
      products: [],
      pricings: [
        {
          id: `${Date.now()}-0`,
          quantity: "1",
          uom: "kg",
          purchasePrice: 0,
          price: 0,
          offerPercentage: 0,
          appSalePrice: 0,
          cgst: 0,
          sgst: 0,
          appPercentage: 0,
          appAmount: 0,
          status: true,
        },
      ],
      imagePreview: null,
      nxImagePreview: null,
      discountPercentage: 0,
      price: 0, // Initialize price
      manualNutrition: false, // Initialize manual nutrition flag
    },
  ]);

  const [activeComboId, setActiveComboId] = useState<string>(
    combos[0]?.id || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sectionFilter, setSectionFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
    new Set()
  );

  const imageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const nxImageInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>(
    {}
  );

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

  const uniqueSections = Array.from(new Set(products.map((p) => p.section)));
  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

  const uniqueSubCategories =
    categoryFilter === "all"
      ? Array.from(new Set(products.map((p) => p.subCategory)))
      : Array.from(
          new Set(
            products
              .filter((p) => p.category === categoryFilter)
              .map((p) => p.subCategory)
          )
        );

  React.useEffect(() => {
    setSubCategoryFilter("all");
  }, [categoryFilter]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSection =
      sectionFilter === "all" || product.section === sectionFilter;
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    const matchesSubCategory =
      subCategoryFilter === "all" || product.subCategory === subCategoryFilter;

    return (
      matchesSearch && matchesSection && matchesCategory && matchesSubCategory
    );
  });

  const activeCombo = combos.find((c) => c.id === activeComboId) || combos[0];

  // Function to calculate nutrition values from products
  const calculateNutrition = (comboId: string) => {
    const combo = combos.find((c) => c.id === comboId);
    if (!combo || combo.manualNutrition) return;

    const totalNutrition = combo.products.reduce(
      (acc, item) => {
        const product = item.product;
        const quantity = item.quantity;

        return {
          calories: acc.calories + (product.calories || 0) * quantity,
          fat: acc.fat + (product.fat || 0) * quantity,
          carb: acc.carb + (product.carb || 0) * quantity,
          protein: acc.protein + (product.protein || 0) * quantity,
        };
      },
      { calories: 0, fat: 0, carb: 0, protein: 0 }
    );

    // Update the combo with calculated nutrition values
    setCombos((prev) =>
      prev.map((c) =>
        c.id === comboId
          ? {
              ...c,
              calories: totalNutrition.calories,
              fat: totalNutrition.fat,
              carb: totalNutrition.carb,
              protein: totalNutrition.protein,
            }
          : c
      )
    );
  };

  // Modify the handleAddProduct function to calculate purchase price
  const handleAddProduct = (
    comboId: string,
    product: Product,
    pricing: ProductPricing,
    quantity: number = 1
  ) => {
    setCombos((prev) =>
      prev.map((combo) => {
        if (combo.id !== comboId) return combo;

        const existingProductIndex = combo.products.findIndex(
          (p) => p.productId === product.id && p.pricing?.id === pricing.id
        );

        let updatedProducts;
        if (existingProductIndex !== -1) {
          updatedProducts = [...combo.products];
          updatedProducts[existingProductIndex].quantity += quantity;
        } else {
          updatedProducts = [
            ...combo.products,
            {
              id: `${product.id}-${pricing.id}`,
              productId: product.id,
              quantity,
              product,
              pricing,
            },
          ];
        }

        // Calculate both total sale price and total purchase price
        const totalPrice = updatedProducts.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);

        const totalPurchasePrice = updatedProducts.reduce((sum, item) => {
          return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
        }, 0);

        const discountedPrice = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );

        const updatedPricings = [...combo.pricings];
        if (updatedPricings.length > 0) {
          updatedPricings[0].price = discountedPrice;
          // Update the purchase price with the calculated total
          updatedPricings[0].purchasePrice = totalPurchasePrice;

          const purchasePrice = totalPurchasePrice;
          const offerPercentage = combo.discountPercentage;
          const offerAmount = (offerPercentage / 100) * discountedPrice;
          const appSalePrice = discountedPrice - purchasePrice - offerAmount;
          const appPercentage =
            discountedPrice > 0
              ? Math.round((appSalePrice / discountedPrice) * 100)
              : 0;

          updatedPricings[0].appSalePrice = appSalePrice;
          updatedPricings[0].appPercentage = appPercentage;
        }

        return {
          ...combo,
          products: updatedProducts,
          pricings: updatedPricings,
          price: discountedPrice,
        };
      })
    );

    // Calculate nutrition after adding products
    setTimeout(() => calculateNutrition(comboId), 0);
  };

  // Modify the handleRemoveProduct function to recalculate purchase price
  const handleRemoveProduct = (comboId: string, productId: string) => {
    setCombos((prev) =>
      prev.map((combo) => {
        if (combo.id !== comboId) return combo;

        const updatedProducts = combo.products.filter(
          (p) => p.id !== productId
        );

        // Calculate both total sale price and total purchase price
        const totalPrice = updatedProducts.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);

        const totalPurchasePrice = updatedProducts.reduce((sum, item) => {
          return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
        }, 0);

        const discountedPrice = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );

        const updatedPricings = [...combo.pricings];
        if (updatedPricings.length > 0) {
          updatedPricings[0].price = discountedPrice;
          // Update the purchase price with the calculated total
          updatedPricings[0].purchasePrice = totalPurchasePrice;

          const purchasePrice = totalPurchasePrice;
          const offerPercentage = combo.discountPercentage;
          const offerAmount = (offerPercentage / 100) * discountedPrice;
          const appSalePrice = discountedPrice - purchasePrice - offerAmount;
          const appPercentage =
            discountedPrice > 0
              ? Math.round((appSalePrice / discountedPrice) * 100)
              : 0;

          updatedPricings[0].appSalePrice = appSalePrice;
          updatedPricings[0].appPercentage = appPercentage;
        }

        return {
          ...combo,
          products: updatedProducts,
          pricings: updatedPricings,
          price: discountedPrice,
        };
      })
    );

    // Calculate nutrition after removing products
    setTimeout(() => calculateNutrition(comboId), 0);
  };

  // Modify the handleUpdateQuantity function to recalculate purchase price
  const handleUpdateQuantity = (
    comboId: string,
    productId: string,
    quantity: number
  ) => {
    if (quantity <= 0) return;

    setCombos((prev) =>
      prev.map((combo) => {
        if (combo.id !== comboId) return combo;

        const updatedProducts = combo.products.map((p) =>
          p.id === productId ? { ...p, quantity } : p
        );

        // Calculate both total sale price and total purchase price
        const totalPrice = updatedProducts.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);

        const totalPurchasePrice = updatedProducts.reduce((sum, item) => {
          return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
        }, 0);

        const discountedPrice = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );

        const updatedPricings = [...combo.pricings];
        if (updatedPricings.length > 0) {
          updatedPricings[0].price = discountedPrice;
          // Update the purchase price with the calculated total
          updatedPricings[0].purchasePrice = totalPurchasePrice;

          const purchasePrice = totalPurchasePrice;
          const offerPercentage = combo.discountPercentage;
          const offerAmount = (offerPercentage / 100) * discountedPrice;
          const appSalePrice = discountedPrice - purchasePrice - offerAmount;
          const appPercentage =
            discountedPrice > 0
              ? Math.round((appSalePrice / discountedPrice) * 100)
              : 0;

          updatedPricings[0].appSalePrice = appSalePrice;
          updatedPricings[0].appPercentage = appPercentage;
        }

        return {
          ...combo,
          products: updatedProducts,
          pricings: updatedPricings,
          price: discountedPrice,
        };
      })
    );

    // Calculate nutrition after updating quantity
    setTimeout(() => calculateNutrition(comboId), 0);
  };

  // Modify the recalculateComboPrice function to update purchase price
  const recalculateComboPrice = (comboId: string) => {
    const combo = combos.find((c) => c.id === comboId);
    if (!combo) return;

    const totalPrice = combo.products.reduce((sum, item) => {
      return sum + (item.pricing?.price || 0) * item.quantity;
    }, 0);

    // Calculate total purchase price
    const totalPurchasePrice = combo.products.reduce((sum, item) => {
      return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
    }, 0);

    const discountedPrice = Math.floor(
      totalPrice * (1 - combo.discountPercentage / 100)
    );

    const updatedPricings = [...combo.pricings];
    if (updatedPricings.length > 0) {
      updatedPricings[0].price = discountedPrice;
      // Update the purchase price with the calculated total
      updatedPricings[0].purchasePrice = totalPurchasePrice;

      const purchasePrice = totalPurchasePrice;
      const offerPercentage = combo.discountPercentage;
      const offerAmount = (offerPercentage / 100) * discountedPrice;
      const appSalePrice = discountedPrice - purchasePrice - offerAmount;
      const appPercentage =
        discountedPrice > 0
          ? Math.round((appSalePrice / discountedPrice) * 100)
          : 0;

      updatedPricings[0].appSalePrice = appSalePrice;
      updatedPricings[0].appPercentage = appPercentage;
    }

    setCombos((prev) =>
      prev.map((c) =>
        c.id === comboId
          ? { ...c, pricings: updatedPricings, price: discountedPrice }
          : c
      )
    );
  };

  // Update the handlePricingChange function to handle purchase price changes
  const handlePricingChange = (
    comboId: string,
    pricingId: string,
    field: keyof ProductPricing,
    value: any
  ) => {
    setCombos((prev) =>
      prev.map((combo) => {
        if (combo.id !== comboId) return combo;

        const updatedPricings = combo.pricings.map((p) => {
          if (p.id === pricingId) {
            const updated = { ...p, [field]: value };

            if (
              field === "purchasePrice" ||
              field === "price" ||
              field === "offerPercentage"
            ) {
              const purchasePrice =
                field === "purchasePrice" ? value : p.purchasePrice;
              const price = field === "price" ? value : p.price;
              const offer =
                field === "offerPercentage" ? value : p.offerPercentage;

              const offerAmount = (offer / 100) * price;
              const appSalePrice = price - purchasePrice - offerAmount;
              const appPercentage =
                price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

              return {
                ...updated,
                appSalePrice,
                appPercentage,
              };
            }

            return updated;
          }
          return p;
        });

        // If discount percentage is changed, recalculate the combo price
        if (
          field === "offerPercentage" &&
          pricingId === combo.pricings[0]?.id
        ) {
          const discountPercentage = value;

          const totalPrice = combo.products.reduce((sum, item) => {
            return sum + (item.pricing?.price || 0) * item.quantity;
          }, 0);

          const discountedPrice = Math.floor(
            totalPrice * (1 - discountPercentage / 100)
          );

          return {
            ...combo,
            pricings: updatedPricings,
            discountPercentage,
            price: discountedPrice,
          };
        }

        return { ...combo, pricings: updatedPricings };
      })
    );
  };

  // Function to recalculate combo price
  // const recalculateComboPrice = (comboId: string) => {
  //   const combo = combos.find((c) => c.id === comboId);
  //   if (!combo) return;

  //   const totalPrice = combo.products.reduce((sum, item) => {
  //     return sum + (item.pricing?.price || 0) * item.quantity;
  //   }, 0);

  //   const discountedPrice = Math.floor(
  //     totalPrice * (1 - combo.discountPercentage / 100)
  //   );

  //   const updatedPricings = [...combo.pricings];
  //   if (updatedPricings.length > 0) {
  //     updatedPricings[0].price = discountedPrice;

  //     const purchasePrice = updatedPricings[0].purchasePrice;
  //     const offerPercentage = combo.discountPercentage;
  //     const offerAmount = (offerPercentage / 100) * discountedPrice;
  //     const appSalePrice = discountedPrice - purchasePrice - offerAmount;
  //     const appPercentage =
  //       discountedPrice > 0
  //         ? Math.round((appSalePrice / discountedPrice) * 100)
  //         : 0;

  //     updatedPricings[0].appSalePrice = appSalePrice;
  //     updatedPricings[0].appPercentage = appPercentage;
  //   }

  //   setCombos((prev) =>
  //     prev.map((c) =>
  //       c.id === comboId
  //         ? { ...c, pricings: updatedPricings, price: discountedPrice }
  //         : c
  //     )
  //   );
  // };

  const handleComboChange = (
    comboId: string,
    field: keyof CreatingCombo,
    value: any
  ) => {
    setCombos((prev) =>
      prev.map((combo) =>
        combo.id === comboId ? { ...combo, [field]: value } : combo
      )
    );
  };

  const handleImageChange = (
    comboId: string,
    imageType: "image" | "nxImage",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (imageType === "image") {
          handleComboChange(comboId, "imagePreview", result);
        } else if (imageType === "nxImage") {
          handleComboChange(comboId, "nxImagePreview", result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleProductExpansion = (productId: string) => {
    setExpandedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  // const handleAddProduct = (
  //   comboId: string,
  //   product: Product,
  //   pricing: ProductPricing,
  //   quantity: number = 1
  // ) => {
  //   setCombos((prev) =>
  //     prev.map((combo) => {
  //       if (combo.id !== comboId) return combo;

  //       const existingProductIndex = combo.products.findIndex(
  //         (p) => p.productId === product.id && p.pricing?.id === pricing.id
  //       );

  //       let updatedProducts;
  //       if (existingProductIndex !== -1) {
  //         updatedProducts = [...combo.products];
  //         updatedProducts[existingProductIndex].quantity += quantity;
  //       } else {
  //         updatedProducts = [
  //           ...combo.products,
  //           {
  //             id: `${product.id}-${pricing.id}`,
  //             productId: product.id,
  //             quantity,
  //             product,
  //             pricing,
  //           },
  //         ];
  //       }

  //       const totalPrice = updatedProducts.reduce((sum, item) => {
  //         return sum + (item.pricing?.price || 0) * item.quantity;
  //       }, 0);

  //       const discountedPrice = Math.floor(
  //         totalPrice * (1 - combo.discountPercentage / 100)
  //       );

  //       const updatedPricings = [...combo.pricings];
  //       if (updatedPricings.length > 0) {
  //         updatedPricings[0].price = discountedPrice;

  //         const purchasePrice = updatedPricings[0].purchasePrice;
  //         const offerPercentage = combo.discountPercentage;
  //         const offerAmount = (offerPercentage / 100) * discountedPrice;
  //         const appSalePrice = discountedPrice - purchasePrice - offerAmount;
  //         const appPercentage =
  //           discountedPrice > 0
  //             ? Math.round((appSalePrice / discountedPrice) * 100)
  //             : 0;

  //         updatedPricings[0].appSalePrice = appSalePrice;
  //         updatedPricings[0].appPercentage = appPercentage;
  //       }

  //       return {
  //         ...combo,
  //         products: updatedProducts,
  //         pricings: updatedPricings,
  //         price: discountedPrice,
  //       };
  //     })
  //   );

  //   // Calculate nutrition after adding products
  //   setTimeout(() => calculateNutrition(comboId), 0);
  // };

  // const handleRemoveProduct = (comboId: string, productId: string) => {
  //   setCombos((prev) =>
  //     prev.map((combo) => {
  //       if (combo.id !== comboId) return combo;

  //       const updatedProducts = combo.products.filter(
  //         (p) => p.id !== productId
  //       );

  //       const totalPrice = updatedProducts.reduce((sum, item) => {
  //         return sum + (item.pricing?.price || 0) * item.quantity;
  //       }, 0);

  //       const discountedPrice = Math.floor(
  //         totalPrice * (1 - combo.discountPercentage / 100)
  //       );

  //       const updatedPricings = [...combo.pricings];
  //       if (updatedPricings.length > 0) {
  //         updatedPricings[0].price = discountedPrice;

  //         const purchasePrice = updatedPricings[0].purchasePrice;
  //         const offerPercentage = combo.discountPercentage;
  //         const offerAmount = (offerPercentage / 100) * discountedPrice;
  //         const appSalePrice = discountedPrice - purchasePrice - offerAmount;
  //         const appPercentage =
  //           discountedPrice > 0
  //             ? Math.round((appSalePrice / discountedPrice) * 100)
  //             : 0;

  //         updatedPricings[0].appSalePrice = appSalePrice;
  //         updatedPricings[0].appPercentage = appPercentage;
  //       }

  //       return {
  //         ...combo,
  //         products: updatedProducts,
  //         pricings: updatedPricings,
  //         price: discountedPrice,
  //       };
  //     })
  //   );

  //   // Calculate nutrition after removing products
  //   setTimeout(() => calculateNutrition(comboId), 0);
  // };

  // const handleUpdateQuantity = (
  //   comboId: string,
  //   productId: string,
  //   quantity: number
  // ) => {
  //   if (quantity <= 0) return;

  //   setCombos((prev) =>
  //     prev.map((combo) => {
  //       if (combo.id !== comboId) return combo;

  //       const updatedProducts = combo.products.map((p) =>
  //         p.id === productId ? { ...p, quantity } : p
  //       );

  //       const totalPrice = updatedProducts.reduce((sum, item) => {
  //         return sum + (item.pricing?.price || 0) * item.quantity;
  //       }, 0);

  //       const discountedPrice = Math.floor(
  //         totalPrice * (1 - combo.discountPercentage / 100)
  //       );

  //       const updatedPricings = [...combo.pricings];
  //       if (updatedPricings.length > 0) {
  //         updatedPricings[0].price = discountedPrice;

  //         const purchasePrice = updatedPricings[0].purchasePrice;
  //         const offerPercentage = combo.discountPercentage;
  //         const offerAmount = (offerPercentage / 100) * discountedPrice;
  //         const appSalePrice = discountedPrice - purchasePrice - offerAmount;
  //         const appPercentage =
  //           discountedPrice > 0
  //             ? Math.round((appSalePrice / discountedPrice) * 100)
  //             : 0;

  //         updatedPricings[0].appSalePrice = appSalePrice;
  //         updatedPricings[0].appPercentage = appPercentage;
  //       }

  //       return {
  //         ...combo,
  //         products: updatedProducts,
  //         pricings: updatedPricings,
  //         price: discountedPrice,
  //       };
  //     })
  //   );

  //   // Calculate nutrition after updating quantity
  //   setTimeout(() => calculateNutrition(comboId), 0);
  // };

  // const handlePricingChange = (
  //   comboId: string,
  //   pricingId: string,
  //   field: keyof ProductPricing,
  //   value: any
  // ) => {
  //   setCombos((prev) =>
  //     prev.map((combo) => {
  //       if (combo.id !== comboId) return combo;

  //       const updatedPricings = combo.pricings.map((p) => {
  //         if (p.id === pricingId) {
  //           const updated = { ...p, [field]: value };

  //           if (
  //             field === "purchasePrice" ||
  //             field === "price" ||
  //             field === "offerPercentage"
  //           ) {
  //             const purchasePrice =
  //               field === "purchasePrice" ? value : p.purchasePrice;
  //             const price = field === "price" ? value : p.price;
  //             const offer =
  //               field === "offerPercentage" ? value : p.offerPercentage;

  //             const offerAmount = (offer / 100) * price;
  //             const appSalePrice = price - purchasePrice - offerAmount;
  //             const appPercentage =
  //               price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

  //             return {
  //               ...updated,
  //               appSalePrice,
  //               appPercentage,
  //             };
  //           }

  //           return updated;
  //         }
  //         return p;
  //       });

  //       if (
  //         field === "offerPercentage" &&
  //         pricingId === combo.pricings[0]?.id
  //       ) {
  //         const discountPercentage = value;

  //         const totalPrice = combo.products.reduce((sum, item) => {
  //           return sum + (item.pricing?.price || 0) * item.quantity;
  //         }, 0);

  //         const discountedPrice = Math.floor(
  //           totalPrice * (1 - discountPercentage / 100)
  //         );

  //         return {
  //           ...combo,
  //           pricings: updatedPricings,
  //           discountPercentage,
  //           price: discountedPrice,
  //         };
  //       }

  //       return { ...combo, pricings: updatedPricings };
  //     })
  //   );
  // };

  const addPricingRow = (comboId: string) => {
    setCombos((prev) =>
      prev.map((combo) => {
        if (combo.id !== comboId) return combo;

        return {
          ...combo,
          pricings: [
            ...combo.pricings,
            {
              id: `${combo.id}-${Date.now()}`,
              quantity: "1",
              uom: "kg",
              purchasePrice: 0,
              price: 0,
              offerPercentage: 0,
              appSalePrice: 0,
              cgst: 0,
              sgst: 0,
              appPercentage: 0,
              appAmount: 0,
              status: true,
            },
          ],
        };
      })
    );
  };

  const removePricingRow = (comboId: string, pricingId: string) => {
    setCombos((prev) =>
      prev.map((combo) => {
        if (combo.id !== comboId) return combo;

        if (combo.pricings.length <= 1) return combo;

        return {
          ...combo,
          pricings: combo.pricings.filter((p) => p.id !== pricingId),
        };
      })
    );
  };

  const addNewCombo = () => {
    const newCombo: CreatingCombo = {
      id: Date.now().toString(),
      name: "",
      stocks: 100,
      calories: 0,
      fat: 0,
      carb: 0,
      protein: 0,
      section: "Food",
      category: "Vegetables",
      subCategory: "Leafy Greens",
      status: "active",
      products: [],
      pricings: [
        {
          id: `${Date.now()}-0`,
          quantity: "1",
          uom: "kg",
          purchasePrice: 0,
          price: 0,
          offerPercentage: 0,
          appSalePrice: 0,
          cgst: 0,
          sgst: 0,
          appPercentage: 0,
          appAmount: 0,
          status: true,
        },
      ],
      imagePreview: null,
      nxImagePreview: null,
      discountPercentage: 0,
      price: 0,
      manualNutrition: false,
    };
    setCombos((prev) => [...prev, newCombo]);
    setActiveComboId(newCombo.id);
  };

  const removeCombo = (comboId: string) => {
    if (combos.length <= 1) return;

    setCombos((prev) => {
      const newCombos = prev.filter((c) => c.id !== comboId);
      if (activeComboId === comboId && newCombos.length > 0) {
        setActiveComboId(newCombos[0].id);
      }
      return newCombos;
    });
  };

  const duplicateCombo = (comboId: string) => {
    const comboToDuplicate = combos.find((c) => c.id === comboId);
    if (!comboToDuplicate) return;

    const newCombo: CreatingCombo = {
      ...comboToDuplicate,
      id: Date.now().toString(),
      name: `${comboToDuplicate.name} (Copy)`,
      pricings: comboToDuplicate.pricings.map((p) => ({
        ...p,
        id: `${Date.now()}-${p.id.split("-")[1] || 0}`,
      })),
    };
    setCombos((prev) => [...prev, newCombo]);
    setActiveComboId(newCombo.id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      for (const combo of combos) {
        if (!combo.name.trim()) continue;

        const totalPrice = combo.products.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);

        const discountedPrice = Math.floor(
          totalPrice * (1 - combo.discountPercentage / 100)
        );

        const seed = Math.random().toString(36).substring(7);
        const image =
          combo.imagePreview ||
          `https://picsum.photos/seed/${seed}/300/300.jpg`;

        const nxImageSeed = Math.random().toString(36).substring(7);
        const nxImage =
          combo.nxImagePreview ||
          `https://picsum.photos/seed/${nxImageSeed}/300/300.jpg`;

        const newCombo = {
          ...combo,
          image,
          nxImage,
          price: discountedPrice,
        };

        await dispatch(addCombo(newCombo));
      }
      onClose();
    } catch (error) {
      console.error("Error adding combos:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPricingInfo = (pricing: ProductPricing, quantity: number) => {
    if (!pricing) return "";

    const {
      quantity: unitQty,
      uom,
      purchasePrice,
      price,
      offerPercentage,
      appPercentage,
      appSalePrice,
    } = pricing;

    const finalPrice = price * (1 - offerPercentage / 100);

    return `${quantity} ${uom} ₹${finalPrice.toFixed(
      2
    )} ${offerPercentage}% off (Original: ₹${price}) PP:₹${purchasePrice} AP:${appPercentage}% ASP:₹${appSalePrice.toFixed(
      2
    )}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl mx-4 my-4 max-h-[98vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0 rounded-t-xl">
          <h3 className="text-lg font-semibold text-white">
            Add Multiple Product Combos
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Form with scrolling */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto p-4">
            {/* Combo Tabs */}
            <div className="mb-4 border-b border-gray-200">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {combos.map((combo, index) => (
                  <button
                    key={combo.id}
                    type="button"
                    onClick={() => setActiveComboId(combo.id)}
                    className={`px-3 py-2 rounded-t-lg font-medium text-xs whitespace-nowrap ${
                      activeComboId === combo.id
                        ? "bg-emerald-100 text-emerald-700 border-b-2 border-emerald-500"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Combo {index + 1}
                    {combo.name && `: ${combo.name}`}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={addNewCombo}
                  className="px-2 py-2 rounded-t-lg font-medium text-xs text-emerald-600 hover:bg-emerald-50 flex items-center"
                >
                  <FiPlus className="h-3 w-3 mr-1" />
                  Add Combo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column - Basic Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
                      <FiPlus className="h-3 w-3" />
                    </span>
                    Basic Information
                  </h4>
                  {combos.length > 1 && (
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => duplicateCombo(activeCombo.id)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
                        title="Duplicate Combo"
                      >
                        <FiCopy className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeCombo(activeCombo.id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
                        title="Remove Combo"
                      >
                        <FiTrash2 className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`name-${activeCombo.id}`}
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id={`name-${activeCombo.id}`}
                    value={activeCombo.name}
                    onChange={(e) =>
                      handleComboChange(activeCombo.id, "name", e.target.value)
                    }
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* <div>
                    <label
                      htmlFor={`stocks-${activeCombo.id}`}
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      id={`stocks-${activeCombo.id}`}
                      value={activeCombo.stocks}
                      onChange={(e) =>
                        handleComboChange(
                          activeCombo.id,
                          "stocks",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      min="0"
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    />
                  </div> */}
                  <div>
                    <label
                      htmlFor={`status-${activeCombo.id}`}
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Status
                    </label>
                    <select
                      id={`status-${activeCombo.id}`}
                      value={activeCombo.status}
                      onChange={(e) =>
                        handleComboChange(
                          activeCombo.id,
                          "status",
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label
                      htmlFor={`section-${activeCombo.id}`}
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Section
                    </label>
                    <select
                      id={`section-${activeCombo.id}`}
                      value={activeCombo.section}
                      onChange={(e) => {
                        const section = e.target.value;
                        const category = categories[section][0];
                        const subCategory = subCategories[category][0];

                        handleComboChange(activeCombo.id, "section", section);
                        handleComboChange(activeCombo.id, "category", category);
                        handleComboChange(
                          activeCombo.id,
                          "subCategory",
                          subCategory
                        );
                      }}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      {sections.map((section) => (
                        <option key={section} value={section}>
                          {section}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor={`category-${activeCombo.id}`}
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Category
                    </label>
                    <select
                      id={`category-${activeCombo.id}`}
                      value={activeCombo.category}
                      onChange={(e) => {
                        const category = e.target.value;
                        const subCategory = subCategories[category][0];

                        handleComboChange(activeCombo.id, "category", category);
                        handleComboChange(
                          activeCombo.id,
                          "subCategory",
                          subCategory
                        );
                      }}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      {categories[activeCombo.section]?.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor={`subCategory-${activeCombo.id}`}
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Sub Category
                    </label>
                    <select
                      id={`subCategory-${activeCombo.id}`}
                      value={activeCombo.subCategory}
                      onChange={(e) =>
                        handleComboChange(
                          activeCombo.id,
                          "subCategory",
                          e.target.value
                        )
                      }
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      {subCategories[activeCombo.category]?.map(
                        (subCategory) => (
                          <option key={subCategory} value={subCategory}>
                            {subCategory}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* Nutrition Values Section */}
                <div className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="text-sm font-medium text-gray-700">
                      Nutrition Information
                    </h5>
                    {!activeCombo.manualNutrition && (
                      <button
                        type="button"
                        onClick={() =>
                          handleComboChange(
                            activeCombo.id,
                            "manualNutrition",
                            true
                          )
                        }
                        className="text-xs text-emerald-600 hover:text-emerald-800 flex items-center"
                      >
                        <FiEdit3 className="h-3 w-3 mr-1" />
                        Edit Manually
                      </button>
                    )}
                    {activeCombo.manualNutrition && (
                      <button
                        type="button"
                        onClick={() => {
                          handleComboChange(
                            activeCombo.id,
                            "manualNutrition",
                            false
                          );
                          calculateNutrition(activeCombo.id);
                        }}
                        className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        Auto Calculate
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <label
                        htmlFor={`calories-${activeCombo.id}`}
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Calories
                      </label>
                      <input
                        type="number"
                        id={`calories-${activeCombo.id}`}
                        value={activeCombo.calories}
                        onChange={(e) => {
                          if (activeCombo.manualNutrition) {
                            handleComboChange(
                              activeCombo.id,
                              "calories",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        min="0"
                        disabled={!activeCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !activeCombo.manualNutrition
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`fat-${activeCombo.id}`}
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Fat (g)
                      </label>
                      <input
                        type="number"
                        id={`fat-${activeCombo.id}`}
                        value={activeCombo.fat}
                        onChange={(e) => {
                          if (activeCombo.manualNutrition) {
                            handleComboChange(
                              activeCombo.id,
                              "fat",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        step="0.1"
                        min="0"
                        disabled={!activeCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !activeCombo.manualNutrition
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`carb-${activeCombo.id}`}
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Carbs (g)
                      </label>
                      <input
                        type="number"
                        id={`carb-${activeCombo.id}`}
                        value={activeCombo.carb}
                        onChange={(e) => {
                          if (activeCombo.manualNutrition) {
                            handleComboChange(
                              activeCombo.id,
                              "carb",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        step="0.1"
                        min="0"
                        disabled={!activeCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !activeCombo.manualNutrition
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`protein-${activeCombo.id}`}
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Protein (g)
                      </label>
                      <input
                        type="number"
                        id={`protein-${activeCombo.id}`}
                        value={activeCombo.protein}
                        onChange={(e) => {
                          if (activeCombo.manualNutrition) {
                            handleComboChange(
                              activeCombo.id,
                              "protein",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        step="0.1"
                        min="0"
                        disabled={!activeCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !activeCombo.manualNutrition
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={`discount-${activeCombo.id}`}
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Discount Percentage
                  </label>
                  <input
                    type="number"
                    id={`discount-${activeCombo.id}`}
                    value={activeCombo.discountPercentage}
                    onChange={(e) => {
                      const discount = parseFloat(e.target.value) || 0;
                      handleComboChange(
                        activeCombo.id,
                        "discountPercentage",
                        discount
                      );
                      recalculateComboPrice(activeCombo.id);
                    }}
                    min="0"
                    max="100"
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  />
                </div>

                {/* Added price display */}
                <div className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      Combo Price:
                    </span>
                    <span className="text-lg font-bold text-emerald-600">
                      ₹{activeCombo.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Image Upload */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Product Image
                  </label>
                  <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
                    <div className="space-y-1 text-center">
                      {activeCombo.imagePreview ? (
                        <div className="relative">
                          <img
                            src={activeCombo.imagePreview}
                            alt="Product preview"
                            className="h-20 w-20 object-cover rounded shadow-md"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleComboChange(
                                activeCombo.id,
                                "imagePreview",
                                null
                              )
                            }
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
                          >
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
                      )}
                      <div className="flex text-xs text-gray-600">
                        <label
                          htmlFor={`image-upload-${activeCombo.id}`}
                          className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
                        >
                          <span>Upload</span>
                          <input
                            ref={(el) =>
                              (imageInputRefs.current[activeCombo.id] = el)
                            }
                            id={`image-upload-${activeCombo.id}`}
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageChange(activeCombo.id, "image", e)
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    NX Product Image
                  </label>
                  <div className="flex justify-center px-3 pt-3 pb-3 border border-gray-300 border-dashed rounded hover:border-emerald-500 transition-colors duration-200">
                    <div className="space-y-1 text-center">
                      {activeCombo.nxImagePreview ? (
                        <div className="relative">
                          <img
                            src={activeCombo.nxImagePreview}
                            alt="NX Product preview"
                            className="h-20 w-20 object-cover rounded shadow-md"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleComboChange(
                                activeCombo.id,
                                "nxImagePreview",
                                null
                              )
                            }
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors"
                          >
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <FiImage className="h-8 w-8 text-gray-400 mx-auto" />
                      )}
                      <div className="flex text-xs text-gray-600">
                        <label
                          htmlFor={`nx-image-upload-${activeCombo.id}`}
                          className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
                        >
                          <span>Upload</span>
                          <input
                            ref={(el) =>
                              (nxImageInputRefs.current[activeCombo.id] = el)
                            }
                            id={`nx-image-upload-${activeCombo.id}`}
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageChange(activeCombo.id, "nxImage", e)
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-semibold text-gray-700">Pricing</h4>
                <button
                  type="button"
                  onClick={() => addPricingRow(activeCombo.id)}
                  className="flex items-center gap-1 bg-emerald-600 text-white px-2 py-1 text-xs rounded"
                >
                  <FiPlus className="h-3 w-3" /> Add Pricing
                </button>
              </div>
              <div className="overflow-x-auto border border-gray-200 rounded">
                <table className="w-full text-xs">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="px-1 py-1 border border-gray-200">Qty</th>
                      <th className="px-1 py-1 border border-gray-200">UOM</th>
                      <th className="px-1 py-1 border border-gray-200">
                        Purchase Price
                      </th>
                      <th className="px-1 py-1 border border-gray-200">
                        Sale Price
                      </th>
                      <th className="px-1 py-1 border border-gray-200">
                        Offer %
                      </th>
                      <th className="px-1 py-1 border border-gray-200">CGST</th>
                      <th className="px-1 py-1 border border-gray-200">SGST</th>
                      <th className="px-1 py-1 border border-gray-200">App%</th>
                      <th className="px-1 py-1 border border-gray-200">
                        App Amount
                      </th>
                      <th className="px-1 py-1 border border-gray-200">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCombo.pricings.map((p) => (
                      <tr key={p.id} className="text-center">
                        <td className="px-1 py-1 border border-gray-200">
                          <input
                            type="text"
                            min="1"
                            className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.quantity}
                            onChange={(e) =>
                              handlePricingChange(
                                activeCombo.id,
                                p.id,
                                "quantity",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="px-2 py-1 border border-gray-200">
                          <select
                            className="w-24 px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.uom}
                            onChange={(e) =>
                              handlePricingChange(
                                activeCombo.id,
                                p.id,
                                "uom",
                                e.target.value
                              )
                            }
                          >
                            <option>kg</option>
                            <option>g</option>
                            <option>ltr</option>
                            <option>ml</option>
                          </select>
                        </td>
                        <td className="px-1 py-1 border border-gray-200">
                          <input
                            type="number"
                            className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.purchasePrice}
                            onChange={(e) =>
                              handlePricingChange(
                                activeCombo.id,
                                p.id,
                                "purchasePrice",
                                Number(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td className="px-1 py-1 border border-gray-200">
                          <input
                            type="number"
                            className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.price}
                            onChange={(e) =>
                              handlePricingChange(
                                activeCombo.id,
                                p.id,
                                "price",
                                Number(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td className="px-1 py-1 border border-gray-200">
                          <input
                            type="number"
                            className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.offerPercentage}
                            onChange={(e) =>
                              handlePricingChange(
                                activeCombo.id,
                                p.id,
                                "offerPercentage",
                                Number(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td className="px-1 py-1 border border-gray-200 text-xs">
                          <input
                            type="number"
                            className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.cgst}
                            onChange={(e) =>
                              handlePricingChange(
                                activeCombo.id,
                                p.id,
                                "cgst",
                                Number(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td className="px-1 py-1 border border-gray-200 text-xs">
                          <input
                            type="number"
                            className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.sgst}
                            onChange={(e) =>
                              handlePricingChange(
                                activeCombo.id,
                                p.id,
                                "sgst",
                                Number(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td className="px-1 py-1 border border-gray-200 text-xs">
                          {p.appPercentage}%
                        </td>
                        <td className="px-1 py-1 border border-gray-200 bg-gray-50 text-xs">
                          {p.appSalePrice.toFixed(2)}
                        </td>
                        <td className="px-1 py-1 border border-gray-200">
                          <button
                            type="button"
                            onClick={() =>
                              removePricingRow(activeCombo.id, p.id)
                            }
                            className="text-red-500 hover:text-red-700"
                            disabled={activeCombo.pricings.length === 1}
                          >
                            <FiTrash2 className="h-3 w-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Selection */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <span className="bg-green-100 text-green-600 p-1 rounded mr-2">
                  <FiPlus className="h-3 w-3" />
                </span>
                Select Products
              </h4>

              {/* Search and Filters */}
              <div className="space-y-2 mb-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-3 py-1.5 pl-8 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <select
                    className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={sectionFilter}
                    onChange={(e) => setSectionFilter(e.target.value)}
                  >
                    <option value="all">All Sections</option>
                    {uniqueSections.map((section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    ))}
                  </select>

                  <select
                    className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {uniqueCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  <select
                    className="px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={subCategoryFilter}
                    onChange={(e) => setSubCategoryFilter(e.target.value)}
                    disabled={categoryFilter === "all"}
                  >
                    <option value="all">All Subcategories</option>
                    {uniqueSubCategories.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Product List */}
              <div className="border border-gray-200 rounded p-2 h-64 overflow-y-auto">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <svg
                      className="mx-auto h-8 w-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="mt-2 text-xs font-medium text-gray-900">
                      No products found
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
                      >
                        <div
                          className="flex items-center justify-between p-2 cursor-pointer"
                          onClick={() => toggleProductExpansion(product.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-8 h-8 object-cover rounded"
                              />
                              <img
                                src={product.nxImage}
                                alt={`${product.name} (NX)`}
                                className="w-8 h-8 object-cover rounded border border-gray-200"
                              />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-900">
                                {product.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {product.category} / {product.subCategory}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-gray-500">
                              {product.pricings.length} variants
                            </span>
                            {expandedProducts.has(product.id) ? (
                              <FiChevronUp className="h-3 w-3 text-gray-400" />
                            ) : (
                              <FiChevronDown className="h-3 w-3 text-gray-400" />
                            )}
                          </div>
                        </div>

                        {expandedProducts.has(product.id) && (
                          <div className="border-t border-gray-200 p-2 bg-gray-50">
                            <div className="overflow-x-auto">
                              <table className="w-full text-xs">
                                <thead className="bg-gray-100 text-gray-700">
                                  <tr>
                                    <th className="px-1 py-1 text-left">Qty</th>
                                    <th className="px-1 py-1 text-left">UOM</th>
                                    <th className="px-1 py-1 text-left">
                                      Price
                                    </th>
                                    <th className="px-1 py-1 text-left">
                                      Offer
                                    </th>
                                    <th className="px-1 py-1 text-left">
                                      Final
                                    </th>
                                    <th className="px-1 py-1 text-center">
                                      Add
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {product.pricings.map((pricing) => (
                                    <tr
                                      key={pricing.id}
                                      className="border-b border-gray-200"
                                    >
                                      <td className="px-1 py-1">
                                        {pricing.quantity}
                                      </td>
                                      <td className="px-1 py-1">
                                        {pricing.uom}
                                      </td>
                                      <td className="px-1 py-1">
                                        ₹{pricing.price}
                                      </td>
                                      <td className="px-1 py-1">
                                        {pricing.offerPercentage}%
                                      </td>
                                      <td className="px-1 py-1 font-medium">
                                        ₹
                                        {(
                                          pricing.price *
                                          (1 - pricing.offerPercentage / 100)
                                        ).toFixed(2)}
                                      </td>
                                      <td className="px-1 py-1 text-center">
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddProduct(
                                              activeCombo.id,
                                              product,
                                              pricing,
                                              1
                                            );
                                          }}
                                          className="p-1 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
                                        >
                                          <FiPlus className="h-3 w-3" />
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Selected Products */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <span className="bg-orange-100 text-orange-600 p-1 rounded mr-2">
                  <FiPlus className="h-3 w-3" />
                </span>
                Selected Products ({activeCombo.products.length})
              </h4>

              <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
                {activeCombo.products.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <svg
                      className="mx-auto h-8 w-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <h3 className="mt-2 text-xs font-medium text-gray-900">
                      No products selected
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Select products from list to add to this combo
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {activeCombo.products.map((item) => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
                      >
                        <div className="flex items-center justify-between p-2">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-8 h-8 object-cover rounded"
                              />
                              <img
                                src={item.product.nxImage}
                                alt={`${item.product.name} (NX)`}
                                className="w-8 h-8 object-cover rounded border border-gray-200"
                              />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-900">
                                {item.product.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.product.category}
                              </div>
                              {item.pricing && (
                                <div className="text-xs text-gray-600 flex items-center mt-1">
                                  {formatPricingInfo(
                                    item.pricing,
                                    item.quantity
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateQuantity(
                                  activeCombo.id,
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                              -
                            </button>
                            <span className="text-xs w-6 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateQuantity(
                                  activeCombo.id,
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                              +
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleRemoveProduct(activeCombo.id, item.id)
                              }
                              className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <FiTrash2 className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-2 p-4 border-t border-gray-200 flex-shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={
                combos.every((c) => c.products.length === 0) || isSubmitting
              }
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Adding...
                </>
              ) : (
                <>
                  <FiCheck className="mr-2" />
                  Add {combos.length} Combo{combos.length > 1 ? "s" : ""}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
