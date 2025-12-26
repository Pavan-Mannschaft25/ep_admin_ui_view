// // // // // import React, { useState, useRef, useEffect } from "react";
// // // // // import { useAppDispatch } from "../../../store/hooks";
// // // // // import { editCombo } from "../comboSlice";
// // // // // import { ProductCombo, ComboProduct } from "../comboSlice";
// // // // // import { Product } from "../productsSlice";
// // // // // import {
// // // // //   FiX,
// // // // //   FiUpload,
// // // // //   FiImage,
// // // // //   FiPlus,
// // // // //   FiTrash2,
// // // // //   FiCheck,
// // // // // } from "react-icons/fi";

// // // // // interface EditComboModalProps {
// // // // //   combo: ProductCombo;
// // // // //   onClose: () => void;
// // // // // }

// // // // // export default function EditComboModal({
// // // // //   combo,
// // // // //   onClose,
// // // // // }: EditComboModalProps) {
// // // // //   const dispatch = useAppDispatch();
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: combo.name,
// // // // //     description: combo.description,
// // // // //     price: combo.price,
// // // // //     discountPercentage: combo.discountPercentage,
// // // // //     status: combo.status,
// // // // //     stocks: combo.stocks || 100,
// // // // //     calories: combo.calories || 0,
// // // // //     fat: combo.fat || 0,
// // // // //     carb: combo.carb || 0,
// // // // //     protein: combo.protein || 0,
// // // // //     section: combo.section || "Food",
// // // // //     category: combo.category || "Vegetables",
// // // // //     subCategory: combo.subCategory || "Leafy Greens",
// // // // //   });

// // // // //   const [selectedProducts, setSelectedProducts] = useState<ComboProduct[]>(
// // // // //     combo.products
// // // // //   );
// // // // //   const [imagePreview, setImagePreview] = useState<string | null>(combo.image);
// // // // //   const [productImagePreview, setProductImagePreview] = useState<string | null>(
// // // // //     combo.productImage
// // // // //   );
// // // // //   const [nxImagePreview, setNxImagePreview] = useState<string | null>(
// // // // //     combo.nxImage
// // // // //   );
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [sectionFilter, setSectionFilter] = useState<string>("all");
// // // // //   const [categoryFilter, setCategoryFilter] = useState<string>("all");
// // // // //   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);

// // // // //   const imageInputRef = useRef<HTMLInputElement>(null);
// // // // //   const productImageInputRef = useRef<HTMLInputElement>(null);
// // // // //   const nxImageInputRef = useRef<HTMLInputElement>(null);

// // // // //   // In a real app, you would fetch products from the store
// // // // //   // For now, we'll use a mock products array
// // // // //   const [products, setProducts] = useState<Product[]>([]);

// // // // //   useEffect(() => {
// // // // //     // In a real app, you would fetch products from the store
// // // // //     // For now, we'll use a mock products array
// // // // //     // This is just for demonstration purposes
// // // // //     const mockProducts: Product[] = combo.products.map((item) => item.product);
// // // // //     setProducts(mockProducts);
// // // // //   }, [combo]);

// // // // //   const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// // // // //   const categories = {
// // // // //     Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// // // // //     Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// // // // //     Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// // // // //     Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// // // // //     Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// // // // //   };

// // // // //   const subCategories = {
// // // // //     Vegetables: [
// // // // //       "Leafy Greens",
// // // // //       "Root Vegetables",
// // // // //       "Cruciferous",
// // // // //       "Allium",
// // // // //       "Podded",
// // // // //     ],
// // // // //     Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// // // // //     Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// // // // //     Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// // // // //     Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],
// // // // //     Juices: [
// // // // //       "Fruit Juice",
// // // // //       "Vegetable Juice",
// // // // //       "Smoothies",
// // // // //       "Concentrates",
// // // // //       "Fresh",
// // // // //     ],
// // // // //     Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// // // // //     Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// // // // //     Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // // // //     Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],
// // // // //     Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// // // // //     Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// // // // //     Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// // // // //     Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// // // // //     Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],
// // // // //     Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// // // // //     Cookies: [
// // // // //       "Chocolate Chip",
// // // // //       "Oatmeal",
// // // // //       "Sugar",
// // // // //       "Peanut Butter",
// // // // //       "Shortbread",
// // // // //     ],
// // // // //     Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // // // //     Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// // // // //     Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],
// // // // //     Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// // // // //     FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// // // // //     FrozenFruits: [
// // // // //       "Mixed Berries",
// // // // //       "Tropical",
// // // // //       "Melon",
// // // // //       "Citrus",
// // // // //       "Stone Fruits",
// // // // //     ],
// // // // //     Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// // // // //     Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// // // // //   };

// // // // //   // Get unique sections and categories for filters
// // // // //   const uniqueSections = Array.from(new Set(products.map((p) => p.section)));
// // // // //   const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

// // // // //   // Get unique sub-categories based on selected category
// // // // //   const uniqueSubCategories =
// // // // //     categoryFilter === "all"
// // // // //       ? Array.from(new Set(products.map((p) => p.subCategory)))
// // // // //       : Array.from(
// // // // //           new Set(
// // // // //             products
// // // // //               .filter((p) => p.category === categoryFilter)
// // // // //               .map((p) => p.subCategory)
// // // // //           )
// // // // //         );

// // // // //   // Reset sub-category filter when category changes
// // // // //   React.useEffect(() => {
// // // // //     setSubCategoryFilter("all");
// // // // //   }, [categoryFilter]);

// // // // //   // Filter products based on search and filters
// // // // //   const filteredProducts = products.filter((product) => {
// // // // //     const matchesSearch = product.name
// // // // //       .toLowerCase()
// // // // //       .includes(searchTerm.toLowerCase());
// // // // //     const matchesSection =
// // // // //       sectionFilter === "all" || product.section === sectionFilter;
// // // // //     const matchesCategory =
// // // // //       categoryFilter === "all" || product.category === categoryFilter;
// // // // //     const matchesSubCategory =
// // // // //       subCategoryFilter === "all" || product.subCategory === subCategoryFilter;

// // // // //     return (
// // // // //       matchesSearch && matchesSection && matchesCategory && matchesSubCategory
// // // // //     );
// // // // //   });

// // // // //   const handleChange = (
// // // // //     e: React.ChangeEvent<
// // // // //       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
// // // // //     >
// // // // //   ) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [name]:
// // // // //         name === "price" ||
// // // // //         name === "discountPercentage" ||
// // // // //         name === "stocks" ||
// // // // //         name === "calories" ||
// // // // //         name === "fat" ||
// // // // //         name === "carb" ||
// // // // //         name === "protein"
// // // // //           ? parseFloat(value) || 0
// // // // //           : value,
// // // // //     }));
// // // // //   };

// // // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     const file = e.target.files?.[0];
// // // // //     if (file) {
// // // // //       const reader = new FileReader();
// // // // //       reader.onloadend = () => {
// // // // //         setImagePreview(reader.result as string);
// // // // //       };
// // // // //       reader.readAsDataURL(file);
// // // // //     }
// // // // //   };

// // // // //   const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     const file = e.target.files?.[0];
// // // // //     if (file) {
// // // // //       const reader = new FileReader();
// // // // //       reader.onloadend = () => {
// // // // //         setProductImagePreview(reader.result as string);
// // // // //       };
// // // // //       reader.readAsDataURL(file);
// // // // //     }
// // // // //   };

// // // // //   const handleNxImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     const file = e.target.files?.[0];
// // // // //     if (file) {
// // // // //       const reader = new FileReader();
// // // // //       reader.onloadend = () => {
// // // // //         setNxImagePreview(reader.result as string);
// // // // //       };
// // // // //       reader.readAsDataURL(file);
// // // // //     }
// // // // //   };

// // // // //   const handleAddProduct = (product: Product) => {
// // // // //     // Check if product is already in the combo
// // // // //     const existingProductIndex = selectedProducts.findIndex(
// // // // //       (p) => p.productId === product.id
// // // // //     );

// // // // //     if (existingProductIndex !== -1) {
// // // // //       // Product already exists, update quantity
// // // // //       const updatedProducts = [...selectedProducts];
// // // // //       updatedProducts[existingProductIndex].quantity += 1;
// // // // //       setSelectedProducts(updatedProducts);
// // // // //     } else {
// // // // //       // Add new product
// // // // //       setSelectedProducts([
// // // // //         ...selectedProducts,
// // // // //         {
// // // // //           id: Date.now().toString(),
// // // // //           productId: product.id,
// // // // //           quantity: 1,
// // // // //           product,
// // // // //           pricing: product.pricings[0], // Use first available pricing
// // // // //         },
// // // // //       ]);
// // // // //     }
// // // // //   };

// // // // //   const handleRemoveProduct = (id: string) => {
// // // // //     setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
// // // // //   };

// // // // //   const handleUpdateQuantity = (id: string, quantity: number) => {
// // // // //     if (quantity <= 0) return;

// // // // //     setSelectedProducts(
// // // // //       selectedProducts.map((p) => (p.id === id ? { ...p, quantity } : p))
// // // // //     );
// // // // //   };

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsSubmitting(true);

// // // // //     // Create updated combo
// // // // //     const updatedCombo = {
// // // // //       ...combo,
// // // // //       ...formData,
// // // // //       image: imagePreview || combo.image,
// // // // //       productImage: productImagePreview || combo.productImage,
// // // // //       nxImage: nxImagePreview || combo.nxImage,
// // // // //       products: selectedProducts,
// // // // //     };

// // // // //     try {
// // // // //       await dispatch(editCombo(updatedCombo));
// // // // //       onClose();
// // // // //     } catch (error) {
// // // // //       console.error("Error updating combo:", error);
// // // // //     } finally {
// // // // //       setIsSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto animate-fade-in">
// // // // //       <div className="bg-white rounded-xl shadow-xl w-full max-w-7xl mx-4 my-8 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
// // // // //         {/* Header */}
// // // // //         <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-xl">
// // // // //           <h3 className="text-xl font-semibold text-gray-900 flex items-center">
// // // // //             <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3">
// // // // //               <FiImage className="h-5 w-5" />
// // // // //             </span>
// // // // //             Edit Product Combo
// // // // //           </h3>
// // // // //           <button
// // // // //             onClick={onClose}
// // // // //             className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
// // // // //           >
// // // // //             <FiX className="h-6 w-6" />
// // // // //           </button>
// // // // //         </div>

// // // // //         <form onSubmit={handleSubmit} className="p-6">
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // //             {/* Left Column - Basic Info */}
// // // // //             <div className="space-y-4">
// // // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // // //                   <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
// // // // //                     <FiPlus className="h-4 w-4" />
// // // // //                   </span>
// // // // //                   Basic Information
// // // // //                 </h4>

// // // // //                 <div className="space-y-4">
// // // // //                   <div>
// // // // //                     <label
// // // // //                       htmlFor="name"
// // // // //                       className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
// // // // //                     >
// // // // //                       Combo Name
// // // // //                       <span className="text-red-500 ml-1">*</span>
// // // // //                     </label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       id="name"
// // // // //                       name="name"
// // // // //                       value={formData.name}
// // // // //                       onChange={handleChange}
// // // // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       required
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label
// // // // //                       htmlFor="description"
// // // // //                       className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
// // // // //                     >
// // // // //                       Description
// // // // //                       <span className="text-red-500 ml-1">*</span>
// // // // //                     </label>
// // // // //                     <textarea
// // // // //                       id="description"
// // // // //                       name="description"
// // // // //                       value={formData.description}
// // // // //                       onChange={handleChange}
// // // // //                       rows={3}
// // // // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       required
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="price"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
// // // // //                       >
// // // // //                         Price
// // // // //                         <span className="text-red-500 ml-1">*</span>
// // // // //                       </label>
// // // // //                       <div className="relative">
// // // // //                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                           <span className="text-gray-500 sm:text-sm">₹</span>
// // // // //                         </div>
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           id="price"
// // // // //                           name="price"
// // // // //                           value={formData.price}
// // // // //                           onChange={handleChange}
// // // // //                           step="0.01"
// // // // //                           min="0"
// // // // //                           className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                           required
// // // // //                         />
// // // // //                       </div>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="discountPercentage"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Discount %
// // // // //                       </label>
// // // // //                       <div className="relative">
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           id="discountPercentage"
// // // // //                           name="discountPercentage"
// // // // //                           value={formData.discountPercentage}
// // // // //                           onChange={handleChange}
// // // // //                           min="0"
// // // // //                           max="100"
// // // // //                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                         />
// // // // //                         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
// // // // //                           <span className="text-gray-500 sm:text-sm">%</span>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label
// // // // //                       htmlFor="status"
// // // // //                       className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                     >
// // // // //                       Status
// // // // //                     </label>
// // // // //                     <div className="flex items-center space-x-4">
// // // // //                       <label className="flex items-center cursor-pointer">
// // // // //                         <input
// // // // //                           type="radio"
// // // // //                           name="status"
// // // // //                           value="active"
// // // // //                           checked={formData.status === "active"}
// // // // //                           onChange={handleChange}
// // // // //                           className="mr-2 text-emerald-600 focus:ring-emerald-500"
// // // // //                         />
// // // // //                         <span className="text-sm">Active</span>
// // // // //                       </label>
// // // // //                       <label className="flex items-center cursor-pointer">
// // // // //                         <input
// // // // //                           type="radio"
// // // // //                           name="status"
// // // // //                           value="inactive"
// // // // //                           checked={formData.status === "inactive"}
// // // // //                           onChange={handleChange}
// // // // //                           className="mr-2 text-emerald-600 focus:ring-emerald-500"
// // // // //                         />
// // // // //                         <span className="text-sm">Inactive</span>
// // // // //                       </label>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Product-specific fields */}
// // // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // // //                   <span className="bg-purple-100 text-purple-600 p-1 rounded mr-2">
// // // // //                     <FiPlus className="h-4 w-4" />
// // // // //                   </span>
// // // // //                   Product Details
// // // // //                 </h4>

// // // // //                 <div className="space-y-4">
// // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="stocks"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Stock
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="number"
// // // // //                         id="stocks"
// // // // //                         name="stocks"
// // // // //                         value={formData.stocks}
// // // // //                         onChange={handleChange}
// // // // //                         min="0"
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="calories"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Calories
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="number"
// // // // //                         id="calories"
// // // // //                         name="calories"
// // // // //                         value={formData.calories}
// // // // //                         onChange={handleChange}
// // // // //                         min="0"
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div className="grid grid-cols-3 gap-4">
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="fat"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Fat (g)
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="number"
// // // // //                         id="fat"
// // // // //                         name="fat"
// // // // //                         value={formData.fat}
// // // // //                         onChange={handleChange}
// // // // //                         min="0"
// // // // //                         step="0.1"
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="carb"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Carbs (g)
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="number"
// // // // //                         id="carb"
// // // // //                         name="carb"
// // // // //                         value={formData.carb}
// // // // //                         onChange={handleChange}
// // // // //                         min="0"
// // // // //                         step="0.1"
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="protein"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Protein (g)
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="number"
// // // // //                         id="protein"
// // // // //                         name="protein"
// // // // //                         value={formData.protein}
// // // // //                         onChange={handleChange}
// // // // //                         min="0"
// // // // //                         step="0.1"
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div className="grid grid-cols-3 gap-4">
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="section"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Section
// // // // //                       </label>
// // // // //                       <select
// // // // //                         id="section"
// // // // //                         name="section"
// // // // //                         value={formData.section}
// // // // //                         onChange={handleChange}
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       >
// // // // //                         {sections.map((section) => (
// // // // //                           <option key={section} value={section}>
// // // // //                             {section}
// // // // //                           </option>
// // // // //                         ))}
// // // // //                       </select>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="category"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Category
// // // // //                       </label>
// // // // //                       <select
// // // // //                         id="category"
// // // // //                         name="category"
// // // // //                         value={formData.category}
// // // // //                         onChange={handleChange}
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       >
// // // // //                         {categories[formData.section]?.map((category) => (
// // // // //                           <option key={category} value={category}>
// // // // //                             {category}
// // // // //                           </option>
// // // // //                         ))}
// // // // //                       </select>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label
// // // // //                         htmlFor="subCategory"
// // // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // // //                       >
// // // // //                         Sub-Category
// // // // //                       </label>
// // // // //                       <select
// // // // //                         id="subCategory"
// // // // //                         name="subCategory"
// // // // //                         value={formData.subCategory}
// // // // //                         onChange={handleChange}
// // // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       >
// // // // //                         {subCategories[formData.category]?.map(
// // // // //                           (subCategory) => (
// // // // //                             <option key={subCategory} value={subCategory}>
// // // // //                               {subCategory}
// // // // //                             </option>
// // // // //                           )
// // // // //                         )}
// // // // //                       </select>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Middle Column - Product Selection */}
// // // // //             <div className="space-y-4">
// // // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // // //                   <span className="bg-green-100 text-green-600 p-1 rounded mr-2">
// // // // //                     <FiPlus className="h-4 w-4" />
// // // // //                   </span>
// // // // //                   Select Products
// // // // //                 </h4>

// // // // //                 {/* Search and Filters */}
// // // // //                 <div className="space-y-3">
// // // // //                   <div className="relative">
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       placeholder="Search products..."
// // // // //                       className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // // //                       value={searchTerm}
// // // // //                       onChange={(e) => setSearchTerm(e.target.value)}
// // // // //                     />
// // // // //                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                       <svg
// // // // //                         className="h-5 w-5 text-gray-400"
// // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // //                         viewBox="0 0 20 20"
// // // // //                         fill="currentColor"
// // // // //                       >
// // // // //                         <path
// // // // //                           fillRule="evenodd"
// // // // //                           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
// // // // //                           clipRule="evenodd"
// // // // //                         />
// // // // //                       </svg>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div className="grid grid-cols-3 gap-2">
// // // // //                     <select
// // // // //                       className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-sm"
// // // // //                       value={sectionFilter}
// // // // //                       onChange={(e) => setSectionFilter(e.target.value)}
// // // // //                     >
// // // // //                       <option value="all">All Sections</option>
// // // // //                       {uniqueSections.map((section) => (
// // // // //                         <option key={section} value={section}>
// // // // //                           {section}
// // // // //                         </option>
// // // // //                       ))}
// // // // //                     </select>

// // // // //                     <select
// // // // //                       className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-sm"
// // // // //                       value={categoryFilter}
// // // // //                       onChange={(e) => setCategoryFilter(e.target.value)}
// // // // //                     >
// // // // //                       <option value="all">All Categories</option>
// // // // //                       {uniqueCategories.map((category) => (
// // // // //                         <option key={category} value={category}>
// // // // //                           {category}
// // // // //                         </option>
// // // // //                       ))}
// // // // //                     </select>

// // // // //                     <select
// // // // //                       className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-sm"
// // // // //                       value={subCategoryFilter}
// // // // //                       onChange={(e) => setSubCategoryFilter(e.target.value)}
// // // // //                       disabled={categoryFilter === "all"}
// // // // //                     >
// // // // //                       <option value="all">All Subcategories</option>
// // // // //                       {uniqueSubCategories.map((subCategory) => (
// // // // //                         <option key={subCategory} value={subCategory}>
// // // // //                           {subCategory}
// // // // //                         </option>
// // // // //                       ))}
// // // // //                     </select>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Product List */}
// // // // //                 <div className="border border-gray-200 rounded-lg p-3 h-64 overflow-y-auto mt-4">
// // // // //                   {filteredProducts.length === 0 ? (
// // // // //                     <div className="text-center py-8 text-gray-500">
// // // // //                       <svg
// // // // //                         className="mx-auto h-12 w-12 text-gray-400"
// // // // //                         fill="none"
// // // // //                         viewBox="0 0 24 24"
// // // // //                         stroke="currentColor"
// // // // //                       >
// // // // //                         <path
// // // // //                           strokeLinecap="round"
// // // // //                           strokeLinejoin="round"
// // // // //                           strokeWidth={2}
// // // // //                           d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // //                         />
// // // // //                       </svg>
// // // // //                       <h3 className="mt-2 text-sm font-medium text-gray-900">
// // // // //                         No products found
// // // // //                       </h3>
// // // // //                       <p className="mt-1 text-sm text-gray-500">
// // // // //                         Try adjusting your search or filter criteria
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <div className="space-y-2">
// // // // //                       {filteredProducts.map((product) => (
// // // // //                         <div
// // // // //                           key={product.id}
// // // // //                           className="flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// // // // //                         >
// // // // //                           <div className="flex items-center space-x-3">
// // // // //                             {/* Product Images - Both regular and nxImage */}
// // // // //                             <div className="flex space-x-1">
// // // // //                               <img
// // // // //                                 src={product.image}
// // // // //                                 alt={product.name}
// // // // //                                 className="w-10 h-10 object-cover rounded"
// // // // //                               />
// // // // //                               <img
// // // // //                                 src={product.nxImage}
// // // // //                                 alt={`${product.name} (NX)`}
// // // // //                                 className="w-10 h-10 object-cover rounded border border-gray-200"
// // // // //                               />
// // // // //                             </div>
// // // // //                             <div>
// // // // //                               <div className="text-sm font-medium text-gray-900">
// // // // //                                 {product.name}
// // // // //                               </div>
// // // // //                               <div className="text-xs text-gray-500">
// // // // //                                 {product.category} / {product.subCategory}
// // // // //                               </div>
// // // // //                               {/* Display pricing options */}
// // // // //                               <div className="flex flex-wrap gap-1 mt-1">
// // // // //                                 {product.pricings.slice(0, 2).map((pricing) => (
// // // // //                                   <button
// // // // //                                     key={pricing.id}
// // // // //                                     type="button"
// // // // //                                     onClick={() => handleAddProduct(product)}
// // // // //                                     className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
// // // // //                                   >
// // // // //                                     {pricing.quantity} {pricing.uom} - ₹
// // // // //                                     {pricing.price}
// // // // //                                   </button>
// // // // //                                 ))}
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           </div>
// // // // //                           <button
// // // // //                             type="button"
// // // // //                             onClick={() => handleAddProduct(product)}
// // // // //                             className="p-1 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
// // // // //                           >
// // // // //                             <FiPlus className="h-4 w-4" />
// // // // //                           </button>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Right Column - Selected Products and Images */}
// // // // //             <div className="space-y-4">
// // // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // // //                   <span className="bg-orange-100 text-orange-600 p-1 rounded mr-2">
// // // // //                     <FiPlus className="h-4 w-4" />
// // // // //                   </span>
// // // // //                   Selected Products ({selectedProducts.length})
// // // // //                 </h4>

// // // // //                 {/* Selected Products List */}
// // // // //                 <div className="border border-gray-200 rounded-lg p-3 h-64 overflow-y-auto">
// // // // //                   {selectedProducts.length === 0 ? (
// // // // //                     <div className="text-center py-8 text-gray-500">
// // // // //                       <svg
// // // // //                         className="mx-auto h-12 w-12 text-gray-400"
// // // // //                         fill="none"
// // // // //                         viewBox="0 0 24 24"
// // // // //                         stroke="currentColor"
// // // // //                       >
// // // // //                         <path
// // // // //                           strokeLinecap="round"
// // // // //                           strokeLinejoin="round"
// // // // //                           strokeWidth={2}
// // // // //                           d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
// // // // //                         />
// // // // //                       </svg>
// // // // //                       <h3 className="mt-2 text-sm font-medium text-gray-900">
// // // // //                         No products selected
// // // // //                       </h3>
// // // // //                       <p className="mt-1 text-sm text-gray-500">
// // // // //                         Select products from the list to add to this combo
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <div className="space-y-2">
// // // // //                       {selectedProducts.map((item) => (
// // // // //                         <div
// // // // //                           key={item.id}
// // // // //                           className="flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// // // // //                         >
// // // // //                           <div className="flex items-center space-x-3">
// // // // //                             {/* Product Images - Both regular and nxImage */}
// // // // //                             <div className="flex space-x-1">
// // // // //                               <img
// // // // //                                 src={item.product.image}
// // // // //                                 alt={item.product.name}
// // // // //                                 className="w-10 h-10 object-cover rounded"
// // // // //                               />
// // // // //                               <img
// // // // //                                 src={item.product.nxImage}
// // // // //                                 alt={`${item.product.name} (NX)`}
// // // // //                                 className="w-10 h-10 object-cover rounded border border-gray-200"
// // // // //                               />
// // // // //                             </div>
// // // // //                             <div>
// // // // //                               <div className="text-sm font-medium text-gray-900">
// // // // //                                 {item.product.name}
// // // // //                               </div>
// // // // //                               <div className="text-xs text-gray-500">
// // // // //                                 {item.product.category}
// // // // //                               </div>
// // // // //                               {/* Display selected pricing */}
// // // // //                               {item.pricing && (
// // // // //                                 <div className="text-xs text-gray-600">
// // // // //                                   {item.pricing.quantity} {item.pricing.uom} - ₹
// // // // //                                   {item.pricing.price}
// // // // //                                 </div>
// // // // //                               )}
// // // // //                             </div>
// // // // //                           </div>
// // // // //                           <div className="flex items-center space-x-2">
// // // // //                             <button
// // // // //                               type="button"
// // // // //                               onClick={() =>
// // // // //                                 handleUpdateQuantity(item.id, item.quantity - 1)
// // // // //                               }
// // // // //                               className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// // // // //                             >
// // // // //                               -
// // // // //                             </button>
// // // // //                             <span className="text-sm w-8 text-center font-medium">
// // // // //                               {item.quantity}
// // // // //                             </span>
// // // // //                             <button
// // // // //                               type="button"
// // // // //                               onClick={() =>
// // // // //                                 handleUpdateQuantity(item.id, item.quantity + 1)
// // // // //                               }
// // // // //                               className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// // // // //                             >
// // // // //                               +
// // // // //                             </button>
// // // // //                             <button
// // // // //                               type="button"
// // // // //                               onClick={() => handleRemoveProduct(item.id)}
// // // // //                               className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
// // // // //                             >
// // // // //                               <FiTrash2 className="h-4 w-4" />
// // // // //                             </button>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Combo Images - Main, Product and NX */}
// // // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // // //                   <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">
// // // // //                     <FiImage className="h-4 w-4" />
// // // // //                   </span>
// // // // //                   Combo Images
// // // // //                 </h4>

// // // // //                 {/* Main Combo Image */}
// // // // //                 <div className="mb-4">
// // // // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                     Main Combo Image
// // // // //                   </label>
// // // // //                   <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// // // // //                     <div className="space-y-1 text-center">
// // // // //                       {imagePreview ? (
// // // // //                         <div className="relative">
// // // // //                           <img
// // // // //                             src={imagePreview}
// // // // //                             alt="Combo preview"
// // // // //                             className="mx-auto h-24 w-24 object-cover rounded-lg shadow-md"
// // // // //                           />
// // // // //                           <button
// // // // //                             type="button"
// // // // //                             onClick={() => setImagePreview(null)}
// // // // //                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// // // // //                           >
// // // // //                             <svg
// // // // //                               className="h-4 w-4"
// // // // //                               fill="none"
// // // // //                               viewBox="0 0 24 24"
// // // // //                               stroke="currentColor"
// // // // //                             >
// // // // //                               <path
// // // // //                                 strokeLinecap="round"
// // // // //                                 strokeLinejoin="round"
// // // // //                                 strokeWidth={2}
// // // // //                                 d="M6 18L18 6M6 6l12 12"
// // // // //                               />
// // // // //                             </svg>
// // // // //                           </button>
// // // // //                         </div>
// // // // //                       ) : (
// // // // //                         <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// // // // //                       )}
// // // // //                       <div className="flex text-sm text-gray-600">
// // // // //                         <label
// // // // //                           htmlFor="image-upload"
// // // // //                           className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// // // // //                         >
// // // // //                           <span>Upload a file</span>
// // // // //                           <input
// // // // //                             ref={imageInputRef}
// // // // //                             id="image-upload"
// // // // //                             name="image-upload"
// // // // //                             type="file"
// // // // //                             className="sr-only"
// // // // //                             accept="image/*"
// // // // //                             onChange={handleImageChange}
// // // // //                           />
// // // // //                         </label>
// // // // //                         <p className="pl-1">or drag and drop</p>
// // // // //                       </div>
// // // // //                       <p className="text-xs text-gray-500">
// // // // //                         PNG, JPG, GIF up to 10MB
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Product Image and NX Image */}
// // // // //                 <div className="grid grid-cols-2 gap-4">
// // // // //                   {/* Product Image */}
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                       Product Image
// // // // //                     </label>
// // // // //                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// // // // //                       <div className="space-y-1 text-center">
// // // // //                         {productImagePreview ? (
// // // // //                           <div className="relative">
// // // // //                             <img
// // // // //                               src={productImagePreview}
// // // // //                               alt="Product preview"
// // // // //                               className="mx-auto h-24 w-24 object-cover rounded-lg shadow-md"
// // // // //                             />
// // // // //                             <button
// // // // //                               type="button"
// // // // //                               onClick={() => setProductImagePreview(null)}
// // // // //                               className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// // // // //                             >
// // // // //                               <svg
// // // // //                                 className="h-4 w-4"
// // // // //                                 fill="none"
// // // // //                                 viewBox="0 0 24 24"
// // // // //                                 stroke="currentColor"
// // // // //                               >
// // // // //                                 <path
// // // // //                                   strokeLinecap="round"
// // // // //                                   strokeLinejoin="round"
// // // // //                                   strokeWidth={2}
// // // // //                                   d="M6 18L18 6M6 6l12 12"
// // // // //                                 />
// // // // //                               </svg>
// // // // //                             </button>
// // // // //                           </div>
// // // // //                         ) : (
// // // // //                           <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// // // // //                         )}
// // // // //                         <div className="flex text-sm text-gray-600">
// // // // //                           <label
// // // // //                             htmlFor="product-image-upload"
// // // // //                             className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// // // // //                           >
// // // // //                             <span>Upload a file</span>
// // // // //                             <input
// // // // //                               ref={productImageInputRef}
// // // // //                               id="product-image-upload"
// // // // //                               name="product-image-upload"
// // // // //                               type="file"
// // // // //                               className="sr-only"
// // // // //                               accept="image/*"
// // // // //                               onChange={handleProductImageChange}
// // // // //                             />
// // // // //                           </label>
// // // // //                           <p className="pl-1">or drag and drop</p>
// // // // //                         </div>
// // // // //                         <p className="text-xs text-gray-500">
// // // // //                           PNG, JPG, GIF up to 10MB
// // // // //                         </p>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* NX Image */}
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                       NX Image
// // // // //                     </label>
// // // // //                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// // // // //                       <div className="space-y-1 text-center">
// // // // //                         {nxImagePreview ? (
// // // // //                           <div className="relative">
// // // // //                             <img
// // // // //                               src={nxImagePreview}
// // // // //                               alt="NX preview"
// // // // //                               className="mx-auto h-24 w-24 object-cover rounded-lg shadow-md"
// // // // //                             />
// // // // //                             <button
// // // // //                               type="button"
// // // // //                               onClick={() => setNxImagePreview(null)}
// // // // //                               className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// // // // //                             >
// // // // //                               <svg
// // // // //                                 className="h-4 w-4"
// // // // //                                 fill="none"
// // // // //                                 viewBox="0 0 24 24"
// // // // //                                 stroke="currentColor"
// // // // //                               >
// // // // //                                 <path
// // // // //                                   strokeLinecap="round"
// // // // //                                   strokeLinejoin="round"
// // // // //                                   strokeWidth={2}
// // // // //                                   d="M6 18L18 6M6 6l12 12"
// // // // //                                 />
// // // // //                               </svg>
// // // // //                             </button>
// // // // //                           </div>
// // // // //                         ) : (
// // // // //                           <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// // // // //                         )}
// // // // //                         <div className="flex text-sm text-gray-600">
// // // // //                           <label
// // // // //                             htmlFor="nx-image-upload"
// // // // //                             className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// // // // //                           >
// // // // //                             <span>Upload a file</span>
// // // // //                             <input
// // // // //                               ref={nxImageInputRef}
// // // // //                               id="nx-image-upload"
// // // // //                               name="nx-image-upload"
// // // // //                               type="file"
// // // // //                               className="sr-only"
// // // // //                               accept="image/*"
// // // // //                               onChange={handleNxImageChange}
// // // // //                             />
// // // // //                           </label>
// // // // //                           <p className="pl-1">or drag and drop</p>
// // // // //                         </div>
// // // // //                         <p className="text-xs text-gray-500">
// // // // //                           PNG, JPG, GIF up to 10MB
// // // // //                         </p>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Submit */}
// // // // //           <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={onClose}
// // // // //               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center"
// // // // //             >
// // // // //               Cancel
// // // // //             </button>
// // // // //             <button
// // // // //               type="submit"
// // // // //               className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
// // // // //               disabled={selectedProducts.length === 0 || isSubmitting}
// // // // //             >
// // // // //               {isSubmitting ? (
// // // // //                 <>
// // // // //                   <svg
// // // // //                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // // // //                     xmlns="http://www.w3.org/2000/svg"
// // // // //                     fill="none"
// // // // //                     viewBox="0 0 24 24"
// // // // //                   >
// // // // //                     <circle
// // // // //                       className="opacity-25"
// // // // //                       cx="12"
// // // // //                       cy="12"
// // // // //                       r="10"
// // // // //                       stroke="currentColor"
// // // // //                       strokeWidth="4"
// // // // //                     ></circle>
// // // // //                     <path
// // // // //                       className="opacity-75"
// // // // //                       fill="currentColor"
// // // // //                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // // //                     ></path>
// // // // //                   </svg>
// // // // //                   Updating...
// // // // //                 </>
// // // // //               ) : (
// // // // //                 <>
// // // // //                   <FiCheck className="mr-2" />
// // // // //                   Update Combo
// // // // //                 </>
// // // // //               )}
// // // // //             </button>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// // // // import { editCombo } from "../comboSlice";
// // // // import { ProductCombo, ComboProduct } from "../comboSlice";
// // // // import { Product, ProductPricing } from "../productsSlice";
// // // // import {
// // // //   FiX,
// // // //   FiUpload,
// // // //   FiImage,
// // // //   FiPlus,
// // // //   FiTrash2,
// // // //   FiCheck,
// // // //   FiSearch,
// // // //   FiChevronDown,
// // // // } from "react-icons/fi";

// // // // interface EditComboModalProps {
// // // //   combo: ProductCombo;
// // // //   onClose: () => void;
// // // // }

// // // // export default function EditComboModal({
// // // //   combo,
// // // //   onClose,
// // // // }: EditComboModalProps) {
// // // //   const dispatch = useAppDispatch();
// // // //   const { products } = useAppSelector((state) => state.masterProducts);

// // // //   const [formData, setFormData] = useState({
// // // //     name: combo.name,
// // // //     description: combo.description,
// // // //     price: combo.price,
// // // //     discountPercentage: combo.discountPercentage,
// // // //     status: combo.status,
// // // //     stocks: combo.stocks || 100,
// // // //     calories: combo.calories || 0,
// // // //     fat: combo.fat || 0,
// // // //     carb: combo.carb || 0,
// // // //     protein: combo.protein || 0,
// // // //     section: combo.section || "Food",
// // // //     category: combo.category || "Vegetables",
// // // //     subCategory: combo.subCategory || "Leafy Greens",
// // // //   });

// // // //   const [selectedProducts, setSelectedProducts] = useState<ComboProduct[]>(
// // // //     combo.products
// // // //   );
// // // //   const [imagePreview, setImagePreview] = useState<string | null>(combo.image);
// // // //   const [productImagePreview, setProductImagePreview] = useState<string | null>(
// // // //     combo.productImage
// // // //   );
// // // //   const [nxImagePreview, setNxImagePreview] = useState<string | null>(
// // // //     combo.nxImage
// // // //   );
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [sectionFilter, setSectionFilter] = useState<string>("all");
// // // //   const [categoryFilter, setCategoryFilter] = useState<string>("all");
// // // //   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
// // // //     new Set()
// // // //   );

// // // //   const imageInputRef = useRef<HTMLInputElement>(null);
// // // //   const productImageInputRef = useRef<HTMLInputElement>(null);
// // // //   const nxImageInputRef = useRef<HTMLInputElement>(null);

// // // //   const sections = ["Food", "Beverages", "Dairy", "Snacks", "Frozen"];

// // // //   const categories = {
// // // //     Food: ["Vegetables", "Fruits", "Grains", "Meat", "Seafood"],
// // // //     Beverages: ["Juices", "Sodas", "Tea", "Coffee", "Water"],
// // // //     Dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
// // // //     Snacks: ["Chips", "Cookies", "Nuts", "Candy", "Crackers"],
// // // //     Frozen: ["Meals", "FrozenVegetables", "FrozenFruits", "Desserts", "Pizza"],
// // // //   };

// // // //   const subCategories = {
// // // //     Vegetables: [
// // // //       "Leafy Greens",
// // // //       "Root Vegetables",
// // // //       "Cruciferous",
// // // //       "Allium",
// // // //       "Podded",
// // // //     ],
// // // //     Fruits: ["Citrus", "Berries", "Tropical", "Stone Fruits", "Pomes"],
// // // //     Grains: ["Wheat", "Rice", "Corn", "Barley", "Oats"],
// // // //     Meat: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
// // // //     Seafood: ["Fish", "Shellfish", "Crustaceans", "Mollusks", "Echinoderms"],
// // // //     Juices: [
// // // //       "Fruit Juice",
// // // //       "Vegetable Juice",
// // // //       "Smoothies",
// // // //       "Concentrates",
// // // //       "Fresh",
// // // //     ],
// // // //     Sodas: ["Cola", "Lemon-Lime", "Orange", "Ginger Ale", "Root Beer"],
// // // //     Tea: ["Black", "Green", "Herbal", "Oolong", "White"],
// // // //     Coffee: ["Espresso", "Cappuccino", "Latte", "Americano", "Cold Brew"],
// // // //     Water: ["Mineral", "Spring", "Sparkling", "Distilled", "Flavored"],
// // // //     Milk: ["Whole", "Skim", "Low-Fat", "Lactose-Free", "Organic"],
// // // //     Cheese: ["Cheddar", "Mozzarella", "Swiss", "Blue", "Feta"],
// // // //     Yogurt: ["Greek", "Regular", "Flavored", "Frozen", "Drinkable"],
// // // //     Butter: ["Salted", "Unsalted", "Whipped", "Clarified", "Plant-Based"],
// // // //     Cream: ["Heavy", "Light", "Whipping", "Sour", "Half-and-Half"],
// // // //     Chips: ["Potato", "Tortilla", "Veggie", "Kale", "Pita"],
// // // //     Cookies: [
// // // //       "Chocolate Chip",
// // // //       "Oatmeal",
// // // //       "Sugar",
// // // //       "Peanut Butter",
// // // //       "Shortbread",
// // // //     ],
// // // //     Nuts: ["Almonds", "Walnuts", "Cashews", "Peanuts", "Pistachios"],
// // // //     Candy: ["Chocolate", "Gummies", "Hard Candy", "Chewy", "Sour"],
// // // //     Crackers: ["Cheese", "Whole Wheat", "Rice", "Water", "Animal"],
// // // //     Meals: ["Dinners", "Lunches", "Breakfast", "Appetizers", "Side Dishes"],
// // // //     FrozenVegetables: ["Mixed", "Single", "Steamed", "Seasoned", "Plain"],
// // // //     FrozenFruits: [
// // // //       "Mixed Berries",
// // // //       "Tropical",
// // // //       "Melon",
// // // //       "Citrus",
// // // //       "Stone Fruits",
// // // //     ],
// // // //     Desserts: ["Ice Cream", "Pies", "Cakes", "Pastries", "Pudding"],
// // // //     Pizza: ["Cheese", "Pepperoni", "Veggie", "Meat Lovers", "Supreme"],
// // // //   };

// // // //   // Get unique sections and categories for filters
// // // //   const uniqueSections = Array.from(new Set(products.map((p) => p.section)));
// // // //   const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

// // // //   // Get unique sub-categories based on selected category
// // // //   const uniqueSubCategories =
// // // //     categoryFilter === "all"
// // // //       ? Array.from(new Set(products.map((p) => p.subCategory)))
// // // //       : Array.from(
// // // //           new Set(
// // // //             products
// // // //               .filter((p) => p.category === categoryFilter)
// // // //               .map((p) => p.subCategory)
// // // //           )
// // // //         );

// // // //   // Reset sub-category filter when category changes
// // // //   React.useEffect(() => {
// // // //     setSubCategoryFilter("all");
// // // //   }, [categoryFilter]);

// // // //   // Filter products based on search and filters
// // // //   const filteredProducts = products.filter((product) => {
// // // //     const matchesSearch = product.name
// // // //       .toLowerCase()
// // // //       .includes(searchTerm.toLowerCase());
// // // //     const matchesSection =
// // // //       sectionFilter === "all" || product.section === sectionFilter;
// // // //     const matchesCategory =
// // // //       categoryFilter === "all" || product.category === categoryFilter;
// // // //     const matchesSubCategory =
// // // //       subCategoryFilter === "all" || product.subCategory === subCategoryFilter;

// // // //     return (
// // // //       matchesSearch && matchesSection && matchesCategory && matchesSubCategory
// // // //     );
// // // //   });

// // // //   const handleChange = (
// // // //     e: React.ChangeEvent<
// // // //       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
// // // //     >
// // // //   ) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]:
// // // //         name === "price" ||
// // // //         name === "discountPercentage" ||
// // // //         name === "stocks" ||
// // // //         name === "calories" ||
// // // //         name === "fat" ||
// // // //         name === "carb" ||
// // // //         name === "protein"
// // // //           ? parseFloat(value) || 0
// // // //           : value,
// // // //     }));
// // // //   };

// // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const file = e.target.files?.[0];
// // // //     if (file) {
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setImagePreview(reader.result as string);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const file = e.target.files?.[0];
// // // //     if (file) {
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setProductImagePreview(reader.result as string);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   const handleNxImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const file = e.target.files?.[0];
// // // //     if (file) {
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setNxImagePreview(reader.result as string);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   const toggleProductExpansion = (productId: string) => {
// // // //     setExpandedProducts((prev) => {
// // // //       const newSet = new Set(prev);
// // // //       if (newSet.has(productId)) {
// // // //         newSet.delete(productId);
// // // //       } else {
// // // //         newSet.add(productId);
// // // //       }
// // // //       return newSet;
// // // //     });
// // // //   };

// // // //   const handleAddProduct = (
// // // //     product: Product,
// // // //     pricing: ProductPricing,
// // // //     quantity: number = 1
// // // //   ) => {
// // // //     // Check if product with the same pricing is already in combo
// // // //     const existingProductIndex = selectedProducts.findIndex(
// // // //       (p) => p.productId === product.id && p.pricing?.id === pricing.id
// // // //     );

// // // //     if (existingProductIndex !== -1) {
// // // //       // Product already exists, update quantity
// // // //       const updatedProducts = [...selectedProducts];
// // // //       updatedProducts[existingProductIndex].quantity += quantity;
// // // //       setSelectedProducts(updatedProducts);
// // // //     } else {
// // // //       // Add new product
// // // //       setSelectedProducts([
// // // //         ...selectedProducts,
// // // //         {
// // // //           id: `${product.id}-${pricing.id}`,
// // // //           productId: product.id,
// // // //           quantity,
// // // //           product,
// // // //           pricing,
// // // //         },
// // // //       ]);
// // // //     }
// // // //   };

// // // //   const handleRemoveProduct = (id: string) => {
// // // //     setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
// // // //   };

// // // //   const handleUpdateQuantity = (id: string, quantity: number) => {
// // // //     if (quantity <= 0) return;

// // // //     setSelectedProducts(
// // // //       selectedProducts.map((p) => (p.id === id ? { ...p, quantity } : p))
// // // //     );
// // // //   };

// // // //   // Calculate total price based on selected products
// // // //   const calculateTotalPrice = () => {
// // // //     return selectedProducts.reduce((sum, item) => {
// // // //       return sum + (item.pricing?.price || 0) * item.quantity;
// // // //     }, 0);
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault(); // Fixed: Added parentheses
// // // //     setIsSubmitting(true);

// // // //     // Calculate final price based on discount
// // // //     const totalPrice = calculateTotalPrice();
// // // //     const finalPrice = Math.floor(
// // // //       totalPrice * (1 - formData.discountPercentage / 100)
// // // //     );

// // // //     // Create updated combo
// // // //     const updatedCombo = {
// // // //       ...combo,
// // // //       ...formData,
// // // //       image: imagePreview || combo.image,
// // // //       productImage: productImagePreview || combo.productImage,
// // // //       nxImage: nxImagePreview || combo.nxImage,
// // // //       products: selectedProducts,
// // // //       price: finalPrice, // Use calculated price
// // // //     };

// // // //     try {
// // // //       await dispatch(editCombo(updatedCombo));
// // // //       onClose();
// // // //     } catch (error) {
// // // //       console.error("Error updating combo:", error);
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto animate-fade-in">
// // // //       <div className="bg-white rounded-xl shadow-xl w-full max-w-7xl mx-4 my-8 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
// // // //         {/* Header */}
// // // //         <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-xl">
// // // //           <h3 className="text-xl font-semibold text-gray-900 flex items-center">
// // // //             <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg mr-3">
// // // //               <FiImage className="h-5 w-5" />
// // // //             </span>
// // // //             Edit Product Combo
// // // //           </h3>
// // // //           <button
// // // //             onClick={onClose}
// // // //             className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
// // // //           >
// // // //             <FiX className="h-6 w-6" />
// // // //           </button>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit} className="p-6">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // //             {/* Left Column - Basic Info */}
// // // //             <div className="space-y-4">
// // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // //                   <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
// // // //                     <FiPlus className="h-4 w-4" />
// // // //                   </span>
// // // //                   Basic Information
// // // //                 </h4>

// // // //                 <div className="space-y-4">
// // // //                   <div>
// // // //                     <label
// // // //                       htmlFor="name"
// // // //                       className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
// // // //                     >
// // // //                       Combo Name
// // // //                       <span className="text-red-500 ml-1">*</span>
// // // //                     </label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="name"
// // // //                       name="name"
// // // //                       value={formData.name}
// // // //                       onChange={handleChange}
// // // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div>
// // // //                     <label
// // // //                       htmlFor="description"
// // // //                       className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
// // // //                     >
// // // //                       Description
// // // //                       <span className="text-red-500 ml-1">*</span>
// // // //                     </label>
// // // //                     <textarea
// // // //                       id="description"
// // // //                       name="description"
// // // //                       value={formData.description}
// // // //                       onChange={handleChange}
// // // //                       rows={3}
// // // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="grid grid-cols-2 gap-4">
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="price"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
// // // //                       >
// // // //                         Price
// // // //                         <span className="text-red-500 ml-1">*</span>
// // // //                       </label>
// // // //                       <div className="relative">
// // // //                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                           <span className="text-gray-500 sm:text-sm">₹</span>
// // // //                         </div>
// // // //                         <input
// // // //                           type="number"
// // // //                           id="price"
// // // //                           name="price"
// // // //                           value={formData.price}
// // // //                           onChange={handleChange}
// // // //                           step="0.01"
// // // //                           min="0"
// // // //                           className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                           required
// // // //                         />
// // // //                       </div>
// // // //                     </div>
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="discountPercentage"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Discount %
// // // //                       </label>
// // // //                       <div className="relative">
// // // //                         <input
// // // //                           type="number"
// // // //                           id="discountPercentage"
// // // //                           name="discountPercentage"
// // // //                           value={formData.discountPercentage}
// // // //                           onChange={handleChange}
// // // //                           min="0"
// // // //                           max="100"
// // // //                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                         />
// // // //                         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
// // // //                           <span className="text-gray-500 sm:text-sm">%</span>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="bg-emerald-50 p-3 rounded">
// // // //                     <div className="flex justify-between items-center">
// // // //                       <span className="text-sm font-medium text-gray-700">
// // // //                         Total Price:
// // // //                       </span>
// // // //                       <span className="text-sm font-bold text-emerald-600">
// // // //                         ₹{calculateTotalPrice().toFixed(2)}
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="flex justify-between items-center">
// // // //                       <span className="text-sm font-medium text-gray-700">
// // // //                         Final Price:
// // // //                       </span>
// // // //                       <span className="text-sm font-bold text-emerald-600">
// // // //                         ₹
// // // //                         {Math.floor(
// // // //                           calculateTotalPrice() *
// // // //                             (1 - formData.discountPercentage / 100)
// // // //                         ).toFixed(2)}
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div>
// // // //                     <label
// // // //                       htmlFor="status"
// // // //                       className="block text-sm font-medium text-gray-700 mb-1"
// // // //                     >
// // // //                       Status
// // // //                     </label>
// // // //                     <div className="flex items-center space-x-4">
// // // //                       <label className="flex items-center cursor-pointer">
// // // //                         <input
// // // //                           type="radio"
// // // //                           name="status"
// // // //                           value="active"
// // // //                           checked={formData.status === "active"}
// // // //                           onChange={handleChange}
// // // //                           className="mr-2 text-emerald-600 focus:ring-emerald-500"
// // // //                         />
// // // //                         <span className="text-sm">Active</span>
// // // //                       </label>
// // // //                       <label className="flex items-center cursor-pointer">
// // // //                         <input
// // // //                           type="radio"
// // // //                           name="status"
// // // //                           value="inactive"
// // // //                           checked={formData.status === "inactive"}
// // // //                           onChange={handleChange}
// // // //                           className="mr-2 text-emerald-600 focus:ring-emerald-500"
// // // //                         />
// // // //                         <span className="text-sm">Inactive</span>
// // // //                       </label>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Product-specific fields */}
// // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // //                   <span className="bg-purple-100 text-purple-600 p-1 rounded mr-2">
// // // //                     <FiPlus className="h-4 w-4" />
// // // //                   </span>
// // // //                   Product Details
// // // //                 </h4>

// // // //                 <div className="space-y-4">
// // // //                   <div className="grid grid-cols-2 gap-4">
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="stocks"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Stock
// // // //                       </label>
// // // //                       <input
// // // //                         type="number"
// // // //                         id="stocks"
// // // //                         name="stocks"
// // // //                         value={formData.stocks}
// // // //                         onChange={handleChange}
// // // //                         min="0"
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       />
// // // //                     </div>
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="calories"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Calories
// // // //                       </label>
// // // //                       <input
// // // //                         type="number"
// // // //                         id="calories"
// // // //                         name="calories"
// // // //                         value={formData.calories}
// // // //                         onChange={handleChange}
// // // //                         min="0"
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       />
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="grid grid-cols-3 gap-4">
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="fat"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Fat (g)
// // // //                       </label>
// // // //                       <input
// // // //                         type="number"
// // // //                         id="fat"
// // // //                         name="fat"
// // // //                         value={formData.fat}
// // // //                         onChange={handleChange}
// // // //                         min="0"
// // // //                         step="0.1"
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       />
// // // //                     </div>
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="carb"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Carbs (g)
// // // //                       </label>
// // // //                       <input
// // // //                         type="number"
// // // //                         id="carb"
// // // //                         name="carb"
// // // //                         value={formData.carb}
// // // //                         onChange={handleChange}
// // // //                         min="0"
// // // //                         step="0.1"
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       />
// // // //                     </div>
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="protein"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Protein (g)
// // // //                       </label>
// // // //                       <input
// // // //                         type="number"
// // // //                         id="protein"
// // // //                         name="protein"
// // // //                         value={formData.protein}
// // // //                         onChange={handleChange}
// // // //                         min="0"
// // // //                         step="0.1"
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       />
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="grid grid-cols-3 gap-4">
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="section"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Section
// // // //                       </label>
// // // //                       <select
// // // //                         id="section"
// // // //                         name="section"
// // // //                         value={formData.section}
// // // //                         onChange={handleChange}
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       >
// // // //                         {sections.map((section) => (
// // // //                           <option key={section} value={section}>
// // // //                             {section}
// // // //                           </option>
// // // //                         ))}
// // // //                       </select>
// // // //                     </div>
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="category"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Category
// // // //                       </label>
// // // //                       <select
// // // //                         id="category"
// // // //                         name="category"
// // // //                         value={formData.category}
// // // //                         onChange={handleChange}
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       >
// // // //                         {categories[formData.section]?.map((category) => (
// // // //                           <option key={category} value={category}>
// // // //                             {category}
// // // //                           </option>
// // // //                         ))}
// // // //                       </select>
// // // //                     </div>
// // // //                     <div>
// // // //                       <label
// // // //                         htmlFor="subCategory"
// // // //                         className="block text-sm font-medium text-gray-700 mb-1"
// // // //                       >
// // // //                         Sub-Category
// // // //                       </label>
// // // //                       <select
// // // //                         id="subCategory"
// // // //                         name="subCategory"
// // // //                         value={formData.subCategory}
// // // //                         onChange={handleChange}
// // // //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       >
// // // //                         {subCategories[formData.category]?.map(
// // // //                           (subCategory) => (
// // // //                             <option key={subCategory} value={subCategory}>
// // // //                               {subCategory}
// // // //                             </option>
// // // //                           )
// // // //                         )}
// // // //                       </select>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Middle Column - Product Selection */}
// // // //             <div className="space-y-4">
// // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // //                   <span className="bg-green-100 text-green-600 p-1 rounded mr-2">
// // // //                     <FiPlus className="h-4 w-4" />
// // // //                   </span>
// // // //                   Select Products
// // // //                 </h4>

// // // //                 {/* Search and Filters */}
// // // //                 <div className="space-y-3">
// // // //                   <div className="relative">
// // // //                     <input
// // // //                       type="text"
// // // //                       placeholder="Search products..."
// // // //                       className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // // //                       value={searchTerm}
// // // //                       onChange={(e) => setSearchTerm(e.target.value)}
// // // //                     />
// // // //                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                       <FiSearch className="h-5 w-5 text-gray-400" />
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="grid grid-cols-3 gap-2">
// // // //                     <select
// // // //                       className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-sm"
// // // //                       value={sectionFilter}
// // // //                       onChange={(e) => setSectionFilter(e.target.value)}
// // // //                     >
// // // //                       <option value="all">All Sections</option>
// // // //                       {uniqueSections.map((section) => (
// // // //                         <option key={section} value={section}>
// // // //                           {section}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>

// // // //                     <select
// // // //                       className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-sm"
// // // //                       value={categoryFilter}
// // // //                       onChange={(e) => setCategoryFilter(e.target.value)}
// // // //                     >
// // // //                       <option value="all">All Categories</option>
// // // //                       {uniqueCategories.map((category) => (
// // // //                         <option key={category} value={category}>
// // // //                           {category}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>

// // // //                     <select
// // // //                       className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-sm"
// // // //                       value={subCategoryFilter}
// // // //                       onChange={(e) => setSubCategoryFilter(e.target.value)}
// // // //                       disabled={categoryFilter === "all"}
// // // //                     >
// // // //                       <option value="all">All Subcategories</option>
// // // //                       {uniqueSubCategories.map((subCategory) => (
// // // //                         <option key={subCategory} value={subCategory}>
// // // //                           {subCategory}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Product List */}
// // // //                 <div className="border border-gray-200 rounded-lg p-3 h-64 overflow-y-auto mt-4">
// // // //                   {filteredProducts.length === 0 ? (
// // // //                     <div className="text-center py-8 text-gray-500">
// // // //                       <svg
// // // //                         className="mx-auto h-12 w-12 text-gray-400"
// // // //                         fill="none"
// // // //                         viewBox="0 0 24 24"
// // // //                         stroke="currentColor"
// // // //                       >
// // // //                         <path
// // // //                           strokeLinecap="round"
// // // //                           strokeLinejoin="round"
// // // //                           strokeWidth={2}
// // // //                           d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // //                         />
// // // //                       </svg>
// // // //                       <h3 className="mt-2 text-sm font-medium text-gray-900">
// // // //                         No products found
// // // //                       </h3>
// // // //                       <p className="mt-1 text-sm text-gray-500">
// // // //                         Try adjusting your search or filter criteria
// // // //                       </p>
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="space-y-2">
// // // //                       {filteredProducts.map((product) => (
// // // //                         <div
// // // //                           key={product.id}
// // // //                           className="border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// // // //                         >
// // // //                           <div
// // // //                             className="flex items-center justify-between p-2 cursor-pointer"
// // // //                             onClick={() => toggleProductExpansion(product.id)}
// // // //                           >
// // // //                             <div className="flex items-center space-x-2">
// // // //                               {/* Product Images - Both regular and nxImage */}
// // // //                               <div className="flex space-x-1">
// // // //                                 <img
// // // //                                   src={product.image}
// // // //                                   alt={product.name}
// // // //                                   className="w-8 h-8 object-cover rounded"
// // // //                                 />
// // // //                                 <img
// // // //                                   src={product.nxImage}
// // // //                                   alt={`${product.name} (NX)`}
// // // //                                   className="w-8 h-8 object-cover rounded border border-gray-200"
// // // //                                 />
// // // //                               </div>
// // // //                               <div>
// // // //                                 <div className="text-sm font-medium text-gray-900">
// // // //                                   {product.name}
// // // //                                 </div>
// // // //                                 <div className="text-xs text-gray-500">
// // // //                                   {product.category} / {product.subCategory}
// // // //                                 </div>
// // // //                               </div>
// // // //                             </div>
// // // //                             <div className="flex items-center space-x-1">
// // // //                               <span className="text-xs text-gray-500">
// // // //                                 {product.pricings.length} variants
// // // //                               </span>
// // // //                               {expandedProducts.has(product.id) ? (
// // // //                                 <FiChevronUp className="h-3 w-3 text-gray-400" />
// // // //                               ) : (
// // // //                                 <FiChevronDown className="h-3 w-3 text-gray-400" />
// // // //                               )}
// // // //                             </div>
// // // //                           </div>

// // // //                           {/* Pricing Variants */}
// // // //                           {expandedProducts.has(product.id) && (
// // // //                             <div className="border-t border-gray-200 p-2 bg-gray-50">
// // // //                               <div className="overflow-x-auto">
// // // //                                 <table className="w-full text-xs">
// // // //                                   <thead className="bg-gray-100 text-gray-700">
// // // //                                     <tr>
// // // //                                       <th className="px-1 py-1 text-left">
// // // //                                         Qty
// // // //                                       </th>
// // // //                                       <th className="px-1 py-1 text-left">
// // // //                                         UOM
// // // //                                       </th>
// // // //                                       <th className="px-1 py-1 text-left">
// // // //                                         Price
// // // //                                       </th>
// // // //                                       <th className="px-1 py-1 text-left">
// // // //                                         Offer
// // // //                                       </th>
// // // //                                       <th className="px-1 py-1 text-left">
// // // //                                         Final
// // // //                                       </th>
// // // //                                       <th className="px-1 py-1 text-center">
// // // //                                         Add
// // // //                                       </th>
// // // //                                     </tr>
// // // //                                   </thead>
// // // //                                   <tbody>
// // // //                                     {product.pricings.map((pricing) => (
// // // //                                       <tr
// // // //                                         key={pricing.id}
// // // //                                         className="border-b border-gray-200"
// // // //                                       >
// // // //                                         <td className="px-1 py-1">
// // // //                                           {pricing.quantity}
// // // //                                         </td>
// // // //                                         <td className="px-1 py-1">
// // // //                                           {pricing.uom}
// // // //                                         </td>
// // // //                                         <td className="px-1 py-1">
// // // //                                           ₹{pricing.price}
// // // //                                         </td>
// // // //                                         <td className="px-1 py-1">
// // // //                                           {pricing.offerPercentage}%
// // // //                                         </td>
// // // //                                         <td className="px-1 py-1 font-medium">
// // // //                                           ₹
// // // //                                           {(
// // // //                                             pricing.price *
// // // //                                             (1 - pricing.offerPercentage / 100)
// // // //                                           ).toFixed(2)}
// // // //                                         </td>
// // // //                                         <td className="px-1 py-1 text-center">
// // // //                                           <button
// // // //                                             type="button"
// // // //                                             onClick={(e) => {
// // // //                                               e.stopPropagation();
// // // //                                               handleAddProduct(
// // // //                                                 product,
// // // //                                                 pricing,
// // // //                                                 1
// // // //                                               );
// // // //                                             }}
// // // //                                             className="p-1 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
// // // //                                           >
// // // //                                             <FiPlus className="h-3 w-3" />
// // // //                                           </button>
// // // //                                         </td>
// // // //                                       </tr>
// // // //                                     ))}
// // // //                                   </tbody>
// // // //                                 </table>
// // // //                               </div>
// // // //                             </div>
// // // //                           )}
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Right Column - Selected Products and Images */}
// // // //             <div className="space-y-4">
// // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // //                   <span className="bg-orange-100 text-orange-600 p-1 rounded mr-2">
// // // //                     <FiPlus className="h-4 w-4" />
// // // //                   </span>
// // // //                   Selected Products ({selectedProducts.length})
// // // //                 </h4>

// // // //                 {/* Selected Products List */}
// // // //                 <div className="border border-gray-200 rounded-lg p-3 h-64 overflow-y-auto">
// // // //                   {selectedProducts.length === 0 ? (
// // // //                     <div className="text-center py-8 text-gray-500">
// // // //                       <svg
// // // //                         className="mx-auto h-12 w-12 text-gray-400"
// // // //                         fill="none"
// // // //                         viewBox="0 0 24 24"
// // // //                         stroke="currentColor"
// // // //                       >
// // // //                         <path
// // // //                           strokeLinecap="round"
// // // //                           strokeLinejoin="round"
// // // //                           strokeWidth={2}
// // // //                           d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
// // // //                         />
// // // //                       </svg>
// // // //                       <h3 className="mt-2 text-sm font-medium text-gray-900">
// // // //                         No products selected
// // // //                       </h3>
// // // //                       <p className="mt-1 text-sm text-gray-500">
// // // //                         Select products from list to add to this combo
// // // //                       </p>
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="space-y-2">
// // // //                       {selectedProducts.map((item) => (
// // // //                         <div
// // // //                           key={item.id}
// // // //                           className="flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-150"
// // // //                         >
// // // //                           <div className="flex items-center space-x-3">
// // // //                             {/* Product Images - Both regular and nxImage */}
// // // //                             <div className="flex space-x-1">
// // // //                               <img
// // // //                                 src={item.product.image}
// // // //                                 alt={item.product.name}
// // // //                                 className="w-10 h-10 object-cover rounded"
// // // //                               />
// // // //                               <img
// // // //                                 src={item.product.nxImage}
// // // //                                 alt={`${item.product.name} (NX)`}
// // // //                                 className="w-10 h-10 object-cover rounded border border-gray-200"
// // // //                               />
// // // //                             </div>
// // // //                             <div>
// // // //                               <div className="text-sm font-medium text-gray-900">
// // // //                                 {item.product.name}
// // // //                               </div>
// // // //                               <div className="text-xs text-gray-500">
// // // //                                 {item.product.category}
// // // //                               </div>
// // // //                               {/* Display selected pricing */}
// // // //                               {item.pricing && (
// // // //                                 <div className="text-xs text-gray-600 flex items-center space-x-1">
// // // //                                   <span>
// // // //                                     {item.pricing.quantity} {item.pricing.uom}
// // // //                                   </span>
// // // //                                   <span>₹{item.pricing.price}</span>
// // // //                                   {item.pricing.offerPercentage > 0 && (
// // // //                                     <span className="text-red-500">
// // // //                                       -{item.pricing.offerPercentage}%
// // // //                                     </span>
// // // //                                   )}
// // // //                                 </div>
// // // //                               )}
// // // //                             </div>
// // // //                           </div>
// // // //                           <div className="flex items-center space-x-2">
// // // //                             <button
// // // //                               type="button"
// // // //                               onClick={() =>
// // // //                                 handleUpdateQuantity(item.id, item.quantity - 1)
// // // //                               }
// // // //                               className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// // // //                             >
// // // //                               -
// // // //                             </button>
// // // //                             <span className="text-sm w-8 text-center font-medium">
// // // //                               {item.quantity}
// // // //                             </span>
// // // //                             <button
// // // //                               type="button"
// // // //                               onClick={() =>
// // // //                                 handleUpdateQuantity(item.id, item.quantity + 1)
// // // //                               }
// // // //                               className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// // // //                             >
// // // //                               +
// // // //                             </button>
// // // //                             <button
// // // //                               type="button"
// // // //                               onClick={() => handleRemoveProduct(item.id)}
// // // //                               className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
// // // //                             >
// // // //                               <FiTrash2 className="h-4 w-4" />
// // // //                             </button>
// // // //                           </div>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>

// // // //               {/* Combo Images - Main, Product and NX */}
// // // //               <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
// // // //                 <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
// // // //                   <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-2">
// // // //                     <FiImage className="h-4 w-4" />
// // // //                   </span>
// // // //                   Combo Images
// // // //                 </h4>

// // // //                 {/* Main Combo Image */}
// // // //                 <div className="mb-4">
// // // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                     Main Combo Image
// // // //                   </label>
// // // //                   <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// // // //                     <div className="space-y-1 text-center">
// // // //                       {imagePreview ? (
// // // //                         <div className="relative">
// // // //                           <img
// // // //                             src={imagePreview}
// // // //                             alt="Combo preview"
// // // //                             className="mx-auto h-24 w-24 object-cover rounded-lg shadow-md"
// // // //                           />
// // // //                           <button
// // // //                             type="button"
// // // //                             onClick={() => setImagePreview(null)}
// // // //                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// // // //                           >
// // // //                             <svg
// // // //                               className="h-4 w-4"
// // // //                               fill="none"
// // // //                               viewBox="0 0 24 24"
// // // //                               stroke="currentColor"
// // // //                             >
// // // //                               <path
// // // //                                 strokeLinecap="round"
// // // //                                 strokeLinejoin="round"
// // // //                                 strokeWidth={2}
// // // //                                 d="M6 18L18 6M6 6l12 12"
// // // //                               />
// // // //                             </svg>
// // // //                           </button>
// // // //                         </div>
// // // //                       ) : (
// // // //                         <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// // // //                       )}
// // // //                       <div className="flex text-sm text-gray-600">
// // // //                         <label
// // // //                           htmlFor="image-upload"
// // // //                           className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// // // //                         >
// // // //                           <span>Upload a file</span>
// // // //                           <input
// // // //                             ref={imageInputRef}
// // // //                             id="image-upload"
// // // //                             name="image-upload"
// // // //                             type="file"
// // // //                             className="sr-only"
// // // //                             accept="image/*"
// // // //                             onChange={handleImageChange}
// // // //                           />
// // // //                         </label>
// // // //                         <p className="pl-1">or drag and drop</p>
// // // //                       </div>
// // // //                       <p className="text-xs text-gray-500">
// // // //                         PNG, JPG, GIF up to 10MB
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Product Image and NX Image */}
// // // //                 <div className="grid grid-cols-2 gap-4">
// // // //                   {/* Product Image */}
// // // //                   <div>
// // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                       Product Image
// // // //                     </label>
// // // //                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// // // //                       <div className="space-y-1 text-center">
// // // //                         {productImagePreview ? (
// // // //                           <div className="relative">
// // // //                             <img
// // // //                               src={productImagePreview}
// // // //                               alt="Product preview"
// // // //                               className="mx-auto h-24 w-24 object-cover rounded-lg shadow-md"
// // // //                             />
// // // //                             <button
// // // //                               type="button"
// // // //                               onClick={() => setProductImagePreview(null)}
// // // //                               className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// // // //                             >
// // // //                               <svg
// // // //                                 className="h-4 w-4"
// // // //                                 fill="none"
// // // //                                 viewBox="0 0 24 24"
// // // //                                 stroke="currentColor"
// // // //                               >
// // // //                                 <path
// // // //                                   strokeLinecap="round"
// // // //                                   strokeLinejoin="round"
// // // //                                   strokeWidth={2}
// // // //                                   d="M6 18L18 6M6 6l12 12"
// // // //                                 />
// // // //                               </svg>
// // // //                             </button>
// // // //                           </div>
// // // //                         ) : (
// // // //                           <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// // // //                         )}
// // // //                         <div className="flex text-sm text-gray-600">
// // // //                           <label
// // // //                             htmlFor="product-image-upload"
// // // //                             className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// // // //                           >
// // // //                             <span>Upload a file</span>
// // // //                             <input
// // // //                               ref={productImageInputRef}
// // // //                               id="product-image-upload"
// // // //                               name="product-image-upload"
// // // //                               type="file"
// // // //                               className="sr-only"
// // // //                               accept="image/*"
// // // //                               onChange={handleProductImageChange}
// // // //                             />
// // // //                           </label>
// // // //                           <p className="pl-1">or drag and drop</p>
// // // //                         </div>
// // // //                         <p className="text-xs text-gray-500">
// // // //                           PNG, JPG, GIF up to 10MB
// // // //                         </p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* NX Image */}
// // // //                   <div>
// // // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                       NX Image
// // // //                     </label>
// // // //                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// // // //                       <div className="space-y-1 text-center">
// // // //                         {nxImagePreview ? (
// // // //                           <div className="relative">
// // // //                             <img
// // // //                               src={nxImagePreview}
// // // //                               alt="NX preview"
// // // //                               className="mx-auto h-24 w-24 object-cover rounded-lg shadow-md"
// // // //                             />
// // // //                             <button
// // // //                               type="button"
// // // //                               onClick={() => setNxImagePreview(null)}
// // // //                               className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// // // //                             >
// // // //                               <svg
// // // //                                 className="h-4 w-4"
// // // //                                 fill="none"
// // // //                                 viewBox="0 0 24 24"
// // // //                                 stroke="currentColor"
// // // //                               >
// // // //                                 <path
// // // //                                   strokeLinecap="round"
// // // //                                   strokeLinejoin="round"
// // // //                                   strokeWidth={2}
// // // //                                   d="M6 18L18 6M6 6l12 12"
// // // //                                 />
// // // //                               </svg>
// // // //                             </button>
// // // //                           </div>
// // // //                         ) : (
// // // //                           <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// // // //                         )}
// // // //                         <div className="flex text-sm text-gray-600">
// // // //                           <label
// // // //                             htmlFor="nx-image-upload"
// // // //                             className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// // // //                           >
// // // //                             <span>Upload a file</span>
// // // //                             <input
// // // //                               ref={nxImageInputRef}
// // // //                               id="nx-image-upload"
// // // //                               name="nx-image-upload"
// // // //                               type="file"
// // // //                               className="sr-only"
// // // //                               accept="image/*"
// // // //                               onChange={handleNxImageChange}
// // // //                             />
// // // //                           </label>
// // // //                           <p className="pl-1">or drag and drop</p>
// // // //                         </div>
// // // //                         <p className="text-xs text-gray-500">
// // // //                           PNG, JPG, GIF up to 10MB
// // // //                         </p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Submit */}
// // // //           <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
// // // //             <button
// // // //               type="button"
// // // //               onClick={onClose}
// // // //               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center"
// // // //             >
// // // //               Cancel
// // // //             </button>
// // // //             <button
// // // //               type="submit"
// // // //               className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
// // // //               disabled={selectedProducts.length === 0 || isSubmitting}
// // // //             >
// // // //               {isSubmitting ? (
// // // //                 <>
// // // //                   <svg
// // // //                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // // //                     xmlns="http://www.w3.org/2000/svg"
// // // //                     fill="none"
// // // //                     viewBox="0 0 24 24"
// // // //                   >
// // // //                     <circle
// // // //                       className="opacity-25"
// // // //                       cx="12"
// // // //                       cy="12"
// // // //                       r="10"
// // // //                       stroke="currentColor"
// // // //                       strokeWidth="4"
// // // //                     ></circle>
// // // //                     <path
// // // //                       className="opacity-75"
// // // //                       fill="currentColor"
// // // //                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // //                     ></path>
// // // //                   </svg>
// // // //                   Updating...
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <FiCheck className="mr-2" />
// // // //                   Update Combo
// // // //                 </>
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useRef, useEffect } from "react";
// // // import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// // // import { editCombo } from "../comboSlice";
// // // import { Product, ProductPricing } from "../productsSlice";
// // // import { ComboProduct, ProductCombo } from "../comboSlice";
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

// // // interface EditComboModalProps {
// // //   combo: ProductCombo;
// // //   onClose: () => void;
// // // }

// // // // Define a type for a single combo being edited
// // // interface EditingCombo {
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
// // //   productImage: string;
// // //   nxImage: string;
// // //   discountPercentage: number;
// // // }

// // // export default function EditComboModal({
// // //   combo,
// // //   onClose,
// // // }: EditComboModalProps) {
// // //   const dispatch = useAppDispatch();
// // //   const { products } = useAppSelector((state) => state.masterProducts);

// // //   // Initialize with the combo data
// // //   const [editingCombo, setEditingCombo] = useState<EditingCombo>({
// // //     id: combo.id,
// // //     name: combo.name,
// // //     stocks: combo.stocks || 100,
// // //     calories: combo.calories || 0,
// // //     fat: combo.fat || 0,
// // //     carb: combo.carb || 0,
// // //     protein: combo.protein || 0,
// // //     section: combo.section || "Food",
// // //     category: combo.category || "Vegetables",
// // //     subCategory: combo.subCategory || "Leafy Greens",
// // //     status: combo.status,
// // //     products: [...combo.products],
// // //     pricings: [...combo.pricings],
// // //     imagePreview: combo.productImage || null,
// // //     nxImagePreview: combo.nxImage || null,
// // //     productImage: combo.productImage,
// // //     nxImage: combo.nxImage,
// // //     discountPercentage: combo.discountPercentage || 0,
// // //   });

// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [sectionFilter, setSectionFilter] = useState<string>("all");
// // //   const [categoryFilter, setCategoryFilter] = useState<string>("all");
// // //   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
// // //     new Set()
// // //   );

// // //   const imageInputRef = useRef<HTMLInputElement | null>(null);
// // //   const nxImageInputRef = useRef<HTMLInputElement | null>(null);

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
// // //   useEffect(() => {
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

// // //   const handleComboChange = (field: keyof EditingCombo, value: any) => {
// // //     setEditingCombo((prev) => ({ ...prev, [field]: value }));
// // //   };

// // //   const handleImageChange = (
// // //     imageType: "productImage" | "nxImage",
// // //     e: React.ChangeEvent<HTMLInputElement>
// // //   ) => {
// // //     const file = e.target.files?.[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         const result = reader.result as string;
// // //         if (imageType === "productImage") {
// // //           handleComboChange("imagePreview", result);
// // //           handleComboChange("productImage", result);
// // //         } else if (imageType === "nxImage") {
// // //           handleComboChange("nxImagePreview", result);
// // //           handleComboChange("nxImage", result);
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
// // //     product: Product,
// // //     pricing: ProductPricing,
// // //     quantity: number = 1
// // //   ) => {
// // //     // Check if product with the same pricing is already in combo
// // //     const existingProductIndex = editingCombo.products.findIndex(
// // //       (p) => p.productId === product.id && p.pricing?.id === pricing.id
// // //     );

// // //     if (existingProductIndex !== -1) {
// // //       // Product already exists, update quantity
// // //       const updatedProducts = [...editingCombo.products];
// // //       updatedProducts[existingProductIndex].quantity += quantity;
// // //       handleComboChange("products", updatedProducts);
// // //     } else {
// // //       // Add new product
// // //       handleComboChange("products", [
// // //         ...editingCombo.products,
// // //         {
// // //           id: `${product.id}-${pricing.id}`,
// // //           productId: product.id,
// // //           quantity,
// // //           product,
// // //           pricing,
// // //         },
// // //       ]);
// // //     }
// // //   };

// // //   const handleRemoveProduct = (productId: string) => {
// // //     handleComboChange(
// // //       "products",
// // //       editingCombo.products.filter((p) => p.id !== productId)
// // //     );
// // //   };

// // //   const handleUpdateQuantity = (productId: string, quantity: number) => {
// // //     if (quantity <= 0) return;

// // //     handleComboChange(
// // //       "products",
// // //       editingCombo.products.map((p) =>
// // //         p.id === productId ? { ...p, quantity } : p
// // //       )
// // //     );
// // //   };

// // //   const handlePricingChange = (
// // //     pricingId: string,
// // //     field: keyof ProductPricing,
// // //     value: any
// // //   ) => {
// // //     const updatedPricings = editingCombo.pricings.map((p) => {
// // //       if (p.id === pricingId) {
// // //         const updated = { ...p, [field]: value };

// // //         // Auto-calculate values when purchasePrice or price changes
// // //         if (
// // //           field === "purchasePrice" ||
// // //           field === "price" ||
// // //           field === "offerPercentage"
// // //         ) {
// // //           const purchasePrice =
// // //             field === "purchasePrice" ? value : p.purchasePrice;
// // //           const price = field === "price" ? value : p.price;
// // //           const offer = field === "offerPercentage" ? value : p.offerPercentage;

// // //           const offerAmount = (offer / 100) * price;
// // //           const appSalePrice = price - purchasePrice - offerAmount;
// // //           const appPercentage =
// // //             price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

// // //           return {
// // //             ...updated,
// // //             appSalePrice,
// // //             appPercentage,
// // //           };
// // //         }

// // //         return updated;
// // //       }
// // //       return p;
// // //     });

// // //     handleComboChange("pricings", updatedPricings);
// // //   };

// // //   const addPricingRow = () => {
// // //     handleComboChange("pricings", [
// // //       ...editingCombo.pricings,
// // //       {
// // //         id: `${editingCombo.id}-${Date.now()}`,
// // //         quantity: "1",
// // //         uom: "kg",
// // //         purchasePrice: 0,
// // //         price: 0,
// // //         offerPercentage: 0,
// // //         appSalePrice: 0,
// // //         cgst: 0,
// // //         sgst: 0,
// // //         appPercentage: 0,
// // //         appAmount: 0,
// // //         status: true,
// // //       },
// // //     ]);
// // //   };

// // //   const removePricingRow = (pricingId: string) => {
// // //     if (editingCombo.pricings.length <= 1) return;

// // //     handleComboChange(
// // //       "pricings",
// // //       editingCombo.pricings.filter((p) => p.id !== pricingId)
// // //     );
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);

// // //     try {
// // //       // Update the combo
// // //       await dispatch(editCombo(editingCombo));
// // //       onClose();
// // //     } catch (error) {
// // //       console.error("Error updating combo:", error);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   // Format pricing information for display
// // //   const formatPricingInfo = (pricing: ProductPricing, quantity: number) => {
// // //     if (!pricing) return "";

// // //     const {
// // //       quantity: unitQty,
// // //       uom,
// // //       purchasePrice,
// // //       price,
// // //       offerPercentage,
// // //       appPercentage,
// // //       appSalePrice,
// // //     } = pricing;

// // //     return `${quantity} ${uom} ₹${price} ${offerPercentage}% PP:₹${purchasePrice} AP:${appPercentage}% ASP:₹${appSalePrice}`;
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //       <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl mx-4 my-4 max-h-[98vh] flex flex-col">
// // //         {/* Header */}
// // //         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0 rounded-t-xl">
// // //           <h3 className="text-lg font-semibold text-white">Edit Combo</h3>
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
// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// // //               {/* Left Column - Basic Info */}
// // //               <div className="space-y-3">
// // //                 <h4 className="text-sm font-semibold text-gray-700 flex items-center">
// // //                   <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
// // //                     <FiPlus className="h-3 w-3" />
// // //                   </span>
// // //                   Basic Information
// // //                 </h4>

// // //                 <div>
// // //                   <label
// // //                     htmlFor="name"
// // //                     className="block text-xs font-medium text-gray-700 mb-1"
// // //                   >
// // //                     Product Name
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     id="name"
// // //                     value={editingCombo.name}
// // //                     onChange={(e) => handleComboChange("name", e.target.value)}
// // //                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <div className="grid grid-cols-2 gap-3">
// // //                   <div>
// // //                     <label
// // //                       htmlFor="stocks"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Stock Quantity
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id="stocks"
// // //                       value={editingCombo.stocks}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
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
// // //                       htmlFor="status"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Status
// // //                     </label>
// // //                     <select
// // //                       id="status"
// // //                       value={editingCombo.status}
// // //                       onChange={(e) =>
// // //                         handleComboChange("status", e.target.value)
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
// // //                       htmlFor="section"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Section
// // //                     </label>
// // //                     <select
// // //                       id="section"
// // //                       value={editingCombo.section}
// // //                       onChange={(e) => {
// // //                         const section = e.target.value;
// // //                         const category = categories[section][0];
// // //                         const subCategory = subCategories[category][0];

// // //                         handleComboChange("section", section);
// // //                         handleComboChange("category", category);
// // //                         handleComboChange("subCategory", subCategory);
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
// // //                       htmlFor="category"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Category
// // //                     </label>
// // //                     <select
// // //                       id="category"
// // //                       value={editingCombo.category}
// // //                       onChange={(e) => {
// // //                         const category = e.target.value;
// // //                         const subCategory = subCategories[category][0];

// // //                         handleComboChange("category", category);
// // //                         handleComboChange("subCategory", subCategory);
// // //                       }}
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     >
// // //                       {categories[editingCombo.section]?.map((category) => (
// // //                         <option key={category} value={category}>
// // //                           {category}
// // //                         </option>
// // //                       ))}
// // //                     </select>
// // //                   </div>

// // //                   <div>
// // //                     <label
// // //                       htmlFor="subCategory"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Sub Category
// // //                     </label>
// // //                     <select
// // //                       id="subCategory"
// // //                       value={editingCombo.subCategory}
// // //                       onChange={(e) =>
// // //                         handleComboChange("subCategory", e.target.value)
// // //                       }
// // //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                     >
// // //                       {subCategories[editingCombo.category]?.map(
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
// // //                       htmlFor="calories"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Calories
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id="calories"
// // //                       value={editingCombo.calories}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
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
// // //                       htmlFor="fat"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Fat (g)
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id="fat"
// // //                       value={editingCombo.fat}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
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
// // //                       htmlFor="carb"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Carbs (g)
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id="carb"
// // //                       value={editingCombo.carb}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
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
// // //                       htmlFor="protein"
// // //                       className="block text-xs font-medium text-gray-700 mb-1"
// // //                     >
// // //                       Protein (g)
// // //                     </label>
// // //                     <input
// // //                       type="number"
// // //                       id="protein"
// // //                       value={editingCombo.protein}
// // //                       onChange={(e) =>
// // //                         handleComboChange(
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

// // //                 <div>
// // //                   <label
// // //                     htmlFor="discountPercentage"
// // //                     className="block text-xs font-medium text-gray-700 mb-1"
// // //                   >
// // //                     Discount Percentage
// // //                   </label>
// // //                   <input
// // //                     type="number"
// // //                     id="discountPercentage"
// // //                     value={editingCombo.discountPercentage}
// // //                     onChange={(e) =>
// // //                       handleComboChange(
// // //                         "discountPercentage",
// // //                         parseFloat(e.target.value) || 0
// // //                       )
// // //                     }
// // //                     min="0"
// // //                     max="100"
// // //                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// // //                   />
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
// // //                       {editingCombo.imagePreview ? (
// // //                         <div className="relative">
// // //                           <img
// // //                             src={editingCombo.imagePreview}
// // //                             alt="Product preview"
// // //                             className="h-20 w-20 object-cover rounded shadow-md"
// // //                           />
// // //                           <button
// // //                             type="button"
// // //                             onClick={() =>
// // //                               handleComboChange("imagePreview", null)
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
// // //                           htmlFor="image-upload"
// // //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// // //                         >
// // //                           <span>Upload</span>
// // //                           <input
// // //                             ref={imageInputRef}
// // //                             id="image-upload"
// // //                             type="file"
// // //                             className="sr-only"
// // //                             accept="image/*"
// // //                             onChange={(e) =>
// // //                               handleImageChange("productImage", e)
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
// // //                       {editingCombo.nxImagePreview ? (
// // //                         <div className="relative">
// // //                           <img
// // //                             src={editingCombo.nxImagePreview}
// // //                             alt="NX Product preview"
// // //                             className="h-20 w-20 object-cover rounded shadow-md"
// // //                           />
// // //                           <button
// // //                             type="button"
// // //                             onClick={() =>
// // //                               handleComboChange("nxImagePreview", null)
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
// // //                           htmlFor="nx-image-upload"
// // //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// // //                         >
// // //                           <span>Upload</span>
// // //                           <input
// // //                             ref={nxImageInputRef}
// // //                             id="nx-image-upload"
// // //                             type="file"
// // //                             className="sr-only"
// // //                             accept="image/*"
// // //                             onChange={(e) => handleImageChange("nxImage", e)}
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
// // //                   onClick={addPricingRow}
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
// // //                     {editingCombo.pricings.map((p) => (
// // //                       <tr key={p.id} className="text-center">
// // //                         <td className="px-1 py-1 border border-gray-200">
// // //                           <input
// // //                             type="text"
// // //                             min="1"
// // //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// // //                             value={p.quantity}
// // //                             onChange={(e) =>
// // //                               handlePricingChange(
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
// // //                               handlePricingChange(p.id, "uom", e.target.value)
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
// // //                             onClick={() => removePricingRow(p.id)}
// // //                             className="text-red-500 hover:text-red-700"
// // //                             disabled={editingCombo.pricings.length === 1}
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
// // //                 Selected Products ({editingCombo.products.length})
// // //               </h4>

// // //               {/* Selected Products List */}
// // //               <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
// // //                 {editingCombo.products.length === 0 ? (
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
// // //                     {editingCombo.products.map((item) => (
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
// // //                               {/* Display pricing information in the requested format */}
// // //                               {item.pricing && (
// // //                                 <div className="text-xs text-gray-600 flex items-center mt-1">
// // //                                   {formatPricingInfo(
// // //                                     item.pricing,
// // //                                     item.quantity
// // //                                   )}
// // //                                 </div>
// // //                               )}
// // //                             </div>
// // //                           </div>
// // //                           <div className="flex items-center space-x-1">
// // //                             <button
// // //                               type="button"
// // //                               onClick={() =>
// // //                                 handleUpdateQuantity(item.id, item.quantity - 1)
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
// // //                                 handleUpdateQuantity(item.id, item.quantity + 1)
// // //                               }
// // //                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// // //                             >
// // //                               +
// // //                             </button>
// // //                             <button
// // //                               type="button"
// // //                               onClick={() => handleRemoveProduct(item.id)}
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
// // //               disabled={editingCombo.products.length === 0 || isSubmitting}
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
// // //                   Updating...
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <FiCheck className="mr-2" />
// // //                   Update Combo
// // //                 </>
// // //               )}
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useRef, useEffect } from "react";
// // import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// // import { editCombo } from "../comboSlice";
// // import { Product, ProductPricing } from "../productsSlice";
// // import { ComboProduct, ProductCombo } from "../comboSlice";
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

// // interface EditComboModalProps {
// //   combo: ProductCombo;
// //   onClose: () => void;
// // }

// // // Define a type for a single combo being edited
// // interface EditingCombo {
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
// //   productImage: string;
// //   nxImage: string;
// //   discountPercentage: number;
// // }

// // export default function EditComboModal({
// //   combo,
// //   onClose,
// // }: EditComboModalProps) {
// //   const dispatch = useAppDispatch();
// //   const { products } = useAppSelector((state) => state.masterProducts);

// //   // Initialize with the combo data
// //   const [editingCombo, setEditingCombo] = useState<EditingCombo>({
// //     id: combo.id,
// //     name: combo.name,
// //     stocks: combo.stocks || 100,
// //     calories: combo.calories || 0,
// //     fat: combo.fat || 0,
// //     carb: combo.carb || 0,
// //     protein: combo.protein || 0,
// //     section: combo.section || "Food",
// //     category: combo.category || "Vegetables",
// //     subCategory: combo.subCategory || "Leafy Greens",
// //     status: combo.status,
// //     products: [...combo.products],
// //     pricings: [...combo.pricings],
// //     imagePreview: combo.productImage || null,
// //     nxImagePreview: combo.nxImage || null,
// //     productImage: combo.productImage,
// //     nxImage: combo.nxImage,
// //     discountPercentage: combo.discountPercentage || 0,
// //   });

// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [sectionFilter, setSectionFilter] = useState<string>("all");
// //   const [categoryFilter, setCategoryFilter] = useState<string>("all");
// //   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
// //     new Set()
// //   );

// //   const imageInputRef = useRef<HTMLInputElement | null>(null);
// //   const nxImageInputRef = useRef<HTMLInputElement | null>(null);

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
// //   useEffect(() => {
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

// //   const handleComboChange = (field: keyof EditingCombo, value: any) => {
// //     setEditingCombo((prev) => ({ ...prev, [field]: value }));
// //   };

// //   const handleImageChange = (
// //     imageType: "productImage" | "nxImage",
// //     e: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const result = reader.result as string;
// //         if (imageType === "productImage") {
// //           handleComboChange("imagePreview", result);
// //           handleComboChange("productImage", result);
// //         } else if (imageType === "nxImage") {
// //           handleComboChange("nxImagePreview", result);
// //           handleComboChange("nxImage", result);
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
// //     product: Product,
// //     pricing: ProductPricing,
// //     quantity: number = 1
// //   ) => {
// //     // Check if product with the same pricing is already in combo
// //     const existingProductIndex = editingCombo.products.findIndex(
// //       (p) => p.productId === product.id && p.pricing?.id === pricing.id
// //     );

// //     if (existingProductIndex !== -1) {
// //       // Product already exists, update quantity
// //       const updatedProducts = [...editingCombo.products];
// //       updatedProducts[existingProductIndex].quantity += quantity;
// //       handleComboChange("products", updatedProducts);
// //     } else {
// //       // Add new product
// //       handleComboChange("products", [
// //         ...editingCombo.products,
// //         {
// //           id: `${product.id}-${pricing.id}`,
// //           productId: product.id,
// //           quantity,
// //           product,
// //           pricing,
// //         },
// //       ]);
// //     }
// //   };

// //   const handleRemoveProduct = (productId: string) => {
// //     handleComboChange(
// //       "products",
// //       editingCombo.products.filter((p) => p.id !== productId)
// //     );
// //   };

// //   const handleUpdateQuantity = (productId: string, quantity: number) => {
// //     if (quantity <= 0) return;

// //     handleComboChange(
// //       "products",
// //       editingCombo.products.map((p) =>
// //         p.id === productId ? { ...p, quantity } : p
// //       )
// //     );
// //   };

// //   const handlePricingChange = (
// //     pricingId: string,
// //     field: keyof ProductPricing,
// //     value: any
// //   ) => {
// //     const updatedPricings = editingCombo.pricings.map((p) => {
// //       if (p.id === pricingId) {
// //         const updated = { ...p, [field]: value };

// //         // Auto-calculate values when purchasePrice or price changes
// //         if (
// //           field === "purchasePrice" ||
// //           field === "price" ||
// //           field === "offerPercentage"
// //         ) {
// //           const purchasePrice =
// //             field === "purchasePrice" ? value : p.purchasePrice;
// //           const price = field === "price" ? value : p.price;
// //           const offer = field === "offerPercentage" ? value : p.offerPercentage;

// //           const offerAmount = (offer / 100) * price;
// //           const appSalePrice = price - purchasePrice - offerAmount;
// //           const appPercentage =
// //             price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

// //           return {
// //             ...updated,
// //             appSalePrice,
// //             appPercentage,
// //           };
// //         }

// //         return updated;
// //       }
// //       return p;
// //     });

// //     handleComboChange("pricings", updatedPricings);
// //   };

// //   const addPricingRow = () => {
// //     handleComboChange("pricings", [
// //       ...editingCombo.pricings,
// //       {
// //         id: `${editingCombo.id}-${Date.now()}`,
// //         quantity: "1",
// //         uom: "kg",
// //         purchasePrice: 0,
// //         price: 0,
// //         offerPercentage: 0,
// //         appSalePrice: 0,
// //         cgst: 0,
// //         sgst: 0,
// //         appPercentage: 0,
// //         appAmount: 0,
// //         status: true,
// //       },
// //     ]);
// //   };

// //   const removePricingRow = (pricingId: string) => {
// //     if (editingCombo.pricings.length <= 1) return;

// //     handleComboChange(
// //       "pricings",
// //       editingCombo.pricings.filter((p) => p.id !== pricingId)
// //     );
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);

// //     try {
// //       // Update the combo
// //       await dispatch(editCombo(editingCombo));
// //       onClose();
// //     } catch (error) {
// //       console.error("Error updating combo:", error);
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
// //           <h3 className="text-lg font-semibold text-white">Edit Combo</h3>
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
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
// //               {/* Left Column - Basic Info */}
// //               <div className="space-y-3">
// //                 <h4 className="text-sm font-semibold text-gray-700 flex items-center">
// //                   <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
// //                     <FiPlus className="h-3 w-3" />
// //                   </span>
// //                   Basic Information
// //                 </h4>

// //                 <div>
// //                   <label
// //                     htmlFor="name"
// //                     className="block text-xs font-medium text-gray-700 mb-1"
// //                   >
// //                     Product Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     value={editingCombo.name}
// //                     onChange={(e) => handleComboChange("name", e.target.value)}
// //                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="grid grid-cols-2 gap-3">
// //                   <div>
// //                     <label
// //                       htmlFor="stocks"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Stock Quantity
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id="stocks"
// //                       value={editingCombo.stocks}
// //                       onChange={(e) =>
// //                         handleComboChange(
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
// //                       htmlFor="status"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Status
// //                     </label>
// //                     <select
// //                       id="status"
// //                       value={editingCombo.status}
// //                       onChange={(e) =>
// //                         handleComboChange("status", e.target.value)
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
// //                       htmlFor="section"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Section
// //                     </label>
// //                     <select
// //                       id="section"
// //                       value={editingCombo.section}
// //                       onChange={(e) => {
// //                         const section = e.target.value;
// //                         const category = categories[section][0];
// //                         const subCategory = subCategories[category][0];

// //                         handleComboChange("section", section);
// //                         handleComboChange("category", category);
// //                         handleComboChange("subCategory", subCategory);
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
// //                       htmlFor="category"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Category
// //                     </label>
// //                     <select
// //                       id="category"
// //                       value={editingCombo.category}
// //                       onChange={(e) => {
// //                         const category = e.target.value;
// //                         const subCategory = subCategories[category][0];

// //                         handleComboChange("category", category);
// //                         handleComboChange("subCategory", subCategory);
// //                       }}
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     >
// //                       {categories[editingCombo.section]?.map((category) => (
// //                         <option key={category} value={category}>
// //                           {category}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor="subCategory"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Sub Category
// //                     </label>
// //                     <select
// //                       id="subCategory"
// //                       value={editingCombo.subCategory}
// //                       onChange={(e) =>
// //                         handleComboChange("subCategory", e.target.value)
// //                       }
// //                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     >
// //                       {subCategories[editingCombo.category]?.map(
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
// //                       htmlFor="calories"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Calories
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id="calories"
// //                       value={editingCombo.calories}
// //                       onChange={(e) =>
// //                         handleComboChange(
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
// //                       htmlFor="fat"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Fat (g)
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id="fat"
// //                       value={editingCombo.fat}
// //                       onChange={(e) =>
// //                         handleComboChange(
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
// //                       htmlFor="carb"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Carbs (g)
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id="carb"
// //                       value={editingCombo.carb}
// //                       onChange={(e) =>
// //                         handleComboChange(
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
// //                       htmlFor="protein"
// //                       className="block text-xs font-medium text-gray-700 mb-1"
// //                     >
// //                       Protein (g)
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id="protein"
// //                       value={editingCombo.protein}
// //                       onChange={(e) =>
// //                         handleComboChange(
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

// //                 <div>
// //                   <label
// //                     htmlFor="discountPercentage"
// //                     className="block text-xs font-medium text-gray-700 mb-1"
// //                   >
// //                     Discount Percentage
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="discountPercentage"
// //                     value={editingCombo.discountPercentage}
// //                     onChange={(e) =>
// //                       handleComboChange(
// //                         "discountPercentage",
// //                         parseFloat(e.target.value) || 0
// //                       )
// //                     }
// //                     min="0"
// //                     max="100"
// //                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   />
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
// //                       {editingCombo.imagePreview ? (
// //                         <div className="relative">
// //                           <img
// //                             src={editingCombo.imagePreview}
// //                             alt="Product preview"
// //                             className="h-20 w-20 object-cover rounded shadow-md"
// //                           />
// //                           <button
// //                             type="button"
// //                             onClick={() =>
// //                               handleComboChange("imagePreview", null)
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
// //                           htmlFor="image-upload"
// //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// //                         >
// //                           <span>Upload</span>
// //                           <input
// //                             ref={imageInputRef}
// //                             id="image-upload"
// //                             type="file"
// //                             className="sr-only"
// //                             accept="image/*"
// //                             onChange={(e) =>
// //                               handleImageChange("productImage", e)
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
// //                       {editingCombo.nxImagePreview ? (
// //                         <div className="relative">
// //                           <img
// //                             src={editingCombo.nxImagePreview}
// //                             alt="NX Product preview"
// //                             className="h-20 w-20 object-cover rounded shadow-md"
// //                           />
// //                           <button
// //                             type="button"
// //                             onClick={() =>
// //                               handleComboChange("nxImagePreview", null)
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
// //                           htmlFor="nx-image-upload"
// //                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
// //                         >
// //                           <span>Upload</span>
// //                           <input
// //                             ref={nxImageInputRef}
// //                             id="nx-image-upload"
// //                             type="file"
// //                             className="sr-only"
// //                             accept="image/*"
// //                             onChange={(e) => handleImageChange("nxImage", e)}
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
// //                   onClick={addPricingRow}
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
// //                     {editingCombo.pricings.map((p) => (
// //                       <tr key={p.id} className="text-center">
// //                         <td className="px-1 py-1 border border-gray-200">
// //                           <input
// //                             type="text"
// //                             min="1"
// //                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
// //                             value={p.quantity}
// //                             onChange={(e) =>
// //                               handlePricingChange(
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
// //                               handlePricingChange(p.id, "uom", e.target.value)
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
// //                             onClick={() => removePricingRow(p.id)}
// //                             className="text-red-500 hover:text-red-700"
// //                             disabled={editingCombo.pricings.length === 1}
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
// //                 Selected Products ({editingCombo.products.length})
// //               </h4>

// //               {/* Selected Products List */}
// //               <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
// //                 {editingCombo.products.length === 0 ? (
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
// //                     {editingCombo.products.map((item) => (
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
// //                                 handleUpdateQuantity(item.id, item.quantity - 1)
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
// //                                 handleUpdateQuantity(item.id, item.quantity + 1)
// //                               }
// //                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
// //                             >
// //                               +
// //                             </button>
// //                             <button
// //                               type="button"
// //                               onClick={() => handleRemoveProduct(item.id)}
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
// //               disabled={editingCombo.products.length === 0 || isSubmitting}
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
// //                   Updating...
// //                 </>
// //               ) : (
// //                 <>
// //                   <FiCheck className="mr-2" />
// //                   Update Combo
// //                 </>
// //               )}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useRef, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import { editCombo } from "../comboSlice";
// import { Product, ProductPricing } from "../productsSlice";
// import { ComboProduct, ProductCombo } from "../comboSlice";
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

// interface EditComboModalProps {
//   combo: ProductCombo;
//   onClose: () => void;
// }

// interface EditingCombo {
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
//   productImage: string;
//   nxImage: string;
//   discountPercentage: number;
//   price: number; // Added price field to track it properly
// }

// export default function EditComboModal({
//   combo,
//   onClose,
// }: EditComboModalProps) {
//   const dispatch = useAppDispatch();
//   const { products } = useAppSelector((state) => state.masterProducts);

//   const [editingCombo, setEditingCombo] = useState<EditingCombo>({
//     id: combo.id,
//     name: combo.name,
//     stocks: combo.stocks || 100,
//     calories: combo.calories || 0,
//     fat: combo.fat || 0,
//     carb: combo.carb || 0,
//     protein: combo.protein || 0,
//     section: combo.section || "Food",
//     category: combo.category || "Vegetables",
//     subCategory: combo.subCategory || "Leafy Greens",
//     status: combo.status,
//     products: [...combo.products],
//     pricings: [...combo.pricings],
//     imagePreview: combo.productImage || null,
//     nxImagePreview: combo.nxImage || null,
//     productImage: combo.productImage,
//     nxImage: combo.nxImage,
//     discountPercentage: combo.discountPercentage || 0,
//     price: combo.price || 0, // Initialize with the combo's price
//   });

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sectionFilter, setSectionFilter] = useState<string>("all");
//   const [categoryFilter, setCategoryFilter] = useState<string>("all");
//   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
//     new Set()
//   );

//   const imageInputRef = useRef<HTMLInputElement | null>(null);
//   const nxImageInputRef = useRef<HTMLInputElement | null>(null);

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

//   useEffect(() => {
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

//   const handleComboChange = (field: keyof EditingCombo, value: any) => {
//     setEditingCombo((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleImageChange = (
//     imageType: "productImage" | "nxImage",
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const result = reader.result as string;
//         if (imageType === "productImage") {
//           handleComboChange("imagePreview", result);
//           handleComboChange("productImage", result);
//         } else if (imageType === "nxImage") {
//           handleComboChange("nxImagePreview", result);
//           handleComboChange("nxImage", result);
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

//   // Fixed recalculateComboPrice function
//   const recalculateComboPrice = () => {
//     const totalPrice = editingCombo.products.reduce((sum, item) => {
//       return sum + (item.pricing?.price || 0) * item.quantity;
//     }, 0);

//     const discountedPrice = Math.floor(
//       totalPrice * (1 - editingCombo.discountPercentage / 100)
//     );

//     // Update both the price field and the first pricing entry
//     handleComboChange("price", discountedPrice);

//     const updatedPricings = [...editingCombo.pricings];
//     if (updatedPricings.length > 0) {
//       updatedPricings[0].price = discountedPrice;

//       const purchasePrice = updatedPricings[0].purchasePrice;
//       const offerPercentage = editingCombo.discountPercentage;
//       const offerAmount = (offerPercentage / 100) * discountedPrice;
//       const appSalePrice = discountedPrice - purchasePrice - offerAmount;
//       const appPercentage =
//         discountedPrice > 0
//           ? Math.round((appSalePrice / discountedPrice) * 100)
//           : 0;

//       updatedPricings[0].appSalePrice = appSalePrice;
//       updatedPricings[0].appPercentage = appPercentage;

//       handleComboChange("pricings", updatedPricings);
//     }
//   };

//   // Fixed handleAddProduct function
//   const handleAddProduct = (
//     product: Product,
//     pricing: ProductPricing,
//     quantity: number = 1
//   ) => {
//     const existingProductIndex = editingCombo.products.findIndex(
//       (p) => p.productId === product.id && p.pricing?.id === pricing.id
//     );

//     let updatedProducts;
//     if (existingProductIndex !== -1) {
//       updatedProducts = [...editingCombo.products];
//       updatedProducts[existingProductIndex].quantity += quantity;
//     } else {
//       updatedProducts = [
//         ...editingCombo.products,
//         {
//           id: `${product.id}-${pricing.id}`,
//           productId: product.id,
//           quantity,
//           product,
//           pricing,
//         },
//       ];
//     }

//     handleComboChange("products", updatedProducts);

//     // Recalculate price after updating products
//     setTimeout(() => recalculateComboPrice(), 0);
//   };

//   // Fixed handleRemoveProduct function
//   const handleRemoveProduct = (productId: string) => {
//     const updatedProducts = editingCombo.products.filter(
//       (p) => p.id !== productId
//     );

//     handleComboChange("products", updatedProducts);

//     // Recalculate price after updating products
//     setTimeout(() => recalculateComboPrice(), 0);
//   };

//   // Fixed handleUpdateQuantity function
//   const handleUpdateQuantity = (productId: string, quantity: number) => {
//     if (quantity <= 0) return;

//     const updatedProducts = editingCombo.products.map((p) =>
//       p.id === productId ? { ...p, quantity } : p
//     );

//     handleComboChange("products", updatedProducts);

//     // Recalculate price after updating products
//     setTimeout(() => recalculateComboPrice(), 0);
//   };

//   // Fixed handlePricingChange function
//   const handlePricingChange = (
//     pricingId: string,
//     field: keyof ProductPricing,
//     value: any
//   ) => {
//     const updatedPricings = editingCombo.pricings.map((p) => {
//       if (p.id === pricingId) {
//         const updated = { ...p, [field]: value };

//         if (
//           field === "purchasePrice" ||
//           field === "price" ||
//           field === "offerPercentage"
//         ) {
//           const purchasePrice =
//             field === "purchasePrice" ? value : p.purchasePrice;
//           const price = field === "price" ? value : p.price;
//           const offer = field === "offerPercentage" ? value : p.offerPercentage;

//           const offerAmount = (offer / 100) * price;
//           const appSalePrice = price - purchasePrice - offerAmount;
//           const appPercentage =
//             price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

//           return {
//             ...updated,
//             appSalePrice,
//             appPercentage,
//           };
//         }

//         return updated;
//       }
//       return p;
//     });

//     handleComboChange("pricings", updatedPricings);

//     // If discount percentage changed, recalculate the combo price
//     if (
//       field === "offerPercentage" &&
//       pricingId === editingCombo.pricings[0]?.id
//     ) {
//       const discountPercentage = value;
//       handleComboChange("discountPercentage", discountPercentage);

//       // Recalculate price after updating discount
//       setTimeout(() => {
//         const totalPrice = editingCombo.products.reduce((sum, item) => {
//           return sum + (item.pricing?.price || 0) * item.quantity;
//         }, 0);

//         const discountedPrice = Math.floor(
//           totalPrice * (1 - discountPercentage / 100)
//         );
//         handleComboChange("price", discountedPrice);
//       }, 0);
//     }
//   };

//   const addPricingRow = () => {
//     handleComboChange("pricings", [
//       ...editingCombo.pricings,
//       {
//         id: `${editingCombo.id}-${Date.now()}`,
//         quantity: "1",
//         uom: "kg",
//         purchasePrice: 0,
//         price: 0,
//         offerPercentage: 0,
//         appSalePrice: 0,
//         cgst: 0,
//         sgst: 0,
//         appPercentage: 0,
//         appAmount: 0,
//         status: true,
//       },
//     ]);
//   };

//   const removePricingRow = (pricingId: string) => {
//     if (editingCombo.pricings.length <= 1) return;

//     handleComboChange(
//       "pricings",
//       editingCombo.pricings.filter((p) => p.id !== pricingId)
//     );
//   };

//   // Fixed handleSubmit function
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Ensure price is calculated correctly before submitting
//       const totalPrice = editingCombo.products.reduce((sum, item) => {
//         return sum + (item.pricing?.price || 0) * item.quantity;
//       }, 0);

//       const discountedPrice = Math.floor(
//         totalPrice * (1 - editingCombo.discountPercentage / 100)
//       );

//       const updatedCombo = {
//         ...editingCombo,
//         price: discountedPrice, // Use the calculated price
//       };

//       await dispatch(editCombo(updatedCombo));
//       onClose();
//     } catch (error) {
//       console.error("Error updating combo:", error);
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
//           <h3 className="text-lg font-semibold text-white">Edit Combo</h3>
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
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//               {/* Left Column - Basic Info */}
//               <div className="space-y-3">
//                 <h4 className="text-sm font-semibold text-gray-700 flex items-center">
//                   <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
//                     <FiPlus className="h-3 w-3" />
//                   </span>
//                   Basic Information
//                 </h4>

//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-xs font-medium text-gray-700 mb-1"
//                   >
//                     Product Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={editingCombo.name}
//                     onChange={(e) => handleComboChange("name", e.target.value)}
//                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label
//                       htmlFor="stocks"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Stock Quantity
//                     </label>
//                     <input
//                       type="number"
//                       id="stocks"
//                       value={editingCombo.stocks}
//                       onChange={(e) =>
//                         handleComboChange(
//                           "stocks",
//                           parseFloat(e.target.value) || 0
//                         )
//                       }
//                       min="0"
//                       className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="status"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Status
//                     </label>
//                     <select
//                       id="status"
//                       value={editingCombo.status}
//                       onChange={(e) =>
//                         handleComboChange("status", e.target.value)
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
//                       htmlFor="section"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Section
//                     </label>
//                     <select
//                       id="section"
//                       value={editingCombo.section}
//                       onChange={(e) => {
//                         const section = e.target.value;
//                         const category = categories[section][0];
//                         const subCategory = subCategories[category][0];

//                         handleComboChange("section", section);
//                         handleComboChange("category", category);
//                         handleComboChange("subCategory", subCategory);
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
//                       htmlFor="category"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Category
//                     </label>
//                     <select
//                       id="category"
//                       value={editingCombo.category}
//                       onChange={(e) => {
//                         const category = e.target.value;
//                         const subCategory = subCategories[category][0];

//                         handleComboChange("category", category);
//                         handleComboChange("subCategory", subCategory);
//                       }}
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     >
//                       {categories[editingCombo.section]?.map((category) => (
//                         <option key={category} value={category}>
//                           {category}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="subCategory"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Sub Category
//                     </label>
//                     <select
//                       id="subCategory"
//                       value={editingCombo.subCategory}
//                       onChange={(e) =>
//                         handleComboChange("subCategory", e.target.value)
//                       }
//                       className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     >
//                       {subCategories[editingCombo.category]?.map(
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
//                       htmlFor="calories"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Calories
//                     </label>
//                     <input
//                       type="number"
//                       id="calories"
//                       value={editingCombo.calories}
//                       onChange={(e) =>
//                         handleComboChange(
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
//                       htmlFor="fat"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Fat (g)
//                     </label>
//                     <input
//                       type="number"
//                       id="fat"
//                       value={editingCombo.fat}
//                       onChange={(e) =>
//                         handleComboChange(
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
//                       htmlFor="carb"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Carbs (g)
//                     </label>
//                     <input
//                       type="number"
//                       id="carb"
//                       value={editingCombo.carb}
//                       onChange={(e) =>
//                         handleComboChange(
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
//                       htmlFor="protein"
//                       className="block text-xs font-medium text-gray-700 mb-1"
//                     >
//                       Protein (g)
//                     </label>
//                     <input
//                       type="number"
//                       id="protein"
//                       value={editingCombo.protein}
//                       onChange={(e) =>
//                         handleComboChange(
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
//                     htmlFor="discountPercentage"
//                     className="block text-xs font-medium text-gray-700 mb-1"
//                   >
//                     Discount Percentage
//                   </label>
//                   <input
//                     type="number"
//                     id="discountPercentage"
//                     value={editingCombo.discountPercentage}
//                     onChange={(e) => {
//                       const discount = parseFloat(e.target.value) || 0;
//                       handleComboChange("discountPercentage", discount);
//                       recalculateComboPrice();
//                     }}
//                     min="0"
//                     max="100"
//                     className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   />
//                 </div>

//                 {/* Added price display */}
//                 <div className="bg-gray-50 p-3 rounded">
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm font-medium text-gray-700">
//                       Combo Price:
//                     </span>
//                     <span className="text-lg font-bold text-emerald-600">
//                       ₹{editingCombo.price}
//                     </span>
//                   </div>
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
//                       {editingCombo.imagePreview ? (
//                         <div className="relative">
//                           <img
//                             src={editingCombo.imagePreview}
//                             alt="Product preview"
//                             className="h-20 w-20 object-cover rounded shadow-md"
//                           />
//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleComboChange("imagePreview", null)
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
//                           htmlFor="image-upload"
//                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
//                         >
//                           <span>Upload</span>
//                           <input
//                             ref={imageInputRef}
//                             id="image-upload"
//                             type="file"
//                             className="sr-only"
//                             accept="image/*"
//                             onChange={(e) =>
//                               handleImageChange("productImage", e)
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
//                       {editingCombo.nxImagePreview ? (
//                         <div className="relative">
//                           <img
//                             src={editingCombo.nxImagePreview}
//                             alt="NX Product preview"
//                             className="h-20 w-20 object-cover rounded shadow-md"
//                           />
//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleComboChange("nxImagePreview", null)
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
//                           htmlFor="nx-image-upload"
//                           className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
//                         >
//                           <span>Upload</span>
//                           <input
//                             ref={nxImageInputRef}
//                             id="nx-image-upload"
//                             type="file"
//                             className="sr-only"
//                             accept="image/*"
//                             onChange={(e) => handleImageChange("nxImage", e)}
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
//                   onClick={addPricingRow}
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
//                     {editingCombo.pricings.map((p) => (
//                       <tr key={p.id} className="text-center">
//                         <td className="px-1 py-1 border border-gray-200">
//                           <input
//                             type="text"
//                             min="1"
//                             className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
//                             value={p.quantity}
//                             onChange={(e) =>
//                               handlePricingChange(
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
//                               handlePricingChange(p.id, "uom", e.target.value)
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
//                           {editingCombo.price.toFixed(2)}
//                         </td>
//                         <td className="px-1 py-1 border border-gray-200">
//                           <button
//                             type="button"
//                             onClick={() => removePricingRow(p.id)}
//                             className="text-red-500 hover:text-red-700"
//                             disabled={editingCombo.pricings.length === 1}
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
//                 Selected Products ({editingCombo.products.length})
//               </h4>

//               <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
//                 {editingCombo.products.length === 0 ? (
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
//                     {editingCombo.products.map((item) => (
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
//                                 handleUpdateQuantity(item.id, item.quantity - 1)
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
//                                 handleUpdateQuantity(item.id, item.quantity + 1)
//                               }
//                               className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
//                             >
//                               +
//                             </button>
//                             <button
//                               type="button"
//                               onClick={() => handleRemoveProduct(item.id)}
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
//               disabled={editingCombo.products.length === 0 || isSubmitting}
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
//                   Updating...
//                 </>
//               ) : (
//                 <>
//                   <FiCheck className="mr-2" />
//                   Update Combo
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { editCombo } from "../comboSlice";
import { Product, ProductPricing } from "../productsSlice";
import { ComboProduct, ProductCombo } from "../comboSlice";
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
  FiEdit3,
} from "react-icons/fi";

interface EditComboModalProps {
  combo: ProductCombo;
  onClose: () => void;
}

interface EditingCombo {
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
  productImage: string;
  nxImage: string;
  discountPercentage: number;
  price: number;
  manualNutrition: boolean;
}

export default function EditComboModal({
  combo,
  onClose,
}: EditComboModalProps) {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.masterProducts);

  const [editingCombo, setEditingCombo] = useState<EditingCombo>({
    id: combo.id,
    name: combo.name,
    stocks: combo.stocks || 100,
    calories: combo.calories || 0,
    fat: combo.fat || 0,
    carb: combo.carb || 0,
    protein: combo.protein || 0,
    section: combo.section || "Food",
    category: combo.category || "Vegetables",
    subCategory: combo.subCategory || "Leafy Greens",
    status: combo.status,
    products: [...combo.products],
    pricings: [...combo.pricings],
    imagePreview: combo.productImage || null,
    nxImagePreview: combo.nxImage || null,
    productImage: combo.productImage,
    nxImage: combo.nxImage,
    discountPercentage: combo.discountPercentage || 0,
    price: combo.price || 0,
    manualNutrition: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sectionFilter, setSectionFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
    new Set()
  );

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const nxImageInputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
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

  const handleComboChange = (field: keyof EditingCombo, value: any) => {
    setEditingCombo((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (
    imageType: "productImage" | "nxImage",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (imageType === "productImage") {
          handleComboChange("imagePreview", result);
          handleComboChange("productImage", result);
        } else if (imageType === "nxImage") {
          handleComboChange("nxImagePreview", result);
          handleComboChange("nxImage", result);
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

  // Function to calculate nutrition values from products
  const calculateNutrition = () => {
    if (editingCombo.manualNutrition) return;

    const totalNutrition = editingCombo.products.reduce(
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

    // Update combo with calculated nutrition values
    setEditingCombo((prev) => ({
      ...prev,
      calories: totalNutrition.calories,
      fat: totalNutrition.fat,
      carb: totalNutrition.carb,
      protein: totalNutrition.protein,
    }));
  };

  // Function to recalculate combo price
  const recalculateComboPrice = () => {
    // Calculate total sale price from products
    const totalPrice = editingCombo.products.reduce((sum, item) => {
      return sum + (item.pricing?.price || 0) * item.quantity;
    }, 0);

    // Calculate total purchase price from products
    const totalPurchasePrice = editingCombo.products.reduce((sum, item) => {
      return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
    }, 0);

    const discountedPrice = Math.floor(
      totalPrice * (1 - editingCombo.discountPercentage / 100)
    );

    // Update the price field
    handleComboChange("price", discountedPrice);

    // Update the pricings array
    const updatedPricings = [...editingCombo.pricings];
    if (updatedPricings.length > 0) {
      updatedPricings[0].price = discountedPrice;
      updatedPricings[0].purchasePrice = totalPurchasePrice;

      const offerPercentage = editingCombo.discountPercentage;
      const offerAmount = (offerPercentage / 100) * discountedPrice;
      const appSalePrice = discountedPrice - totalPurchasePrice - offerAmount;
      const appPercentage =
        discountedPrice > 0
          ? Math.round((appSalePrice / discountedPrice) * 100)
          : 0;

      updatedPricings[0].appSalePrice = appSalePrice;
      updatedPricings[0].appPercentage = appPercentage;

      handleComboChange("pricings", updatedPricings);
    }
  };

  // Function to add product to combo
  const handleAddProduct = (
    product: Product,
    pricing: ProductPricing,
    quantity: number = 1
  ) => {
    const existingProductIndex = editingCombo.products.findIndex(
      (p) => p.productId === product.id && p.pricing?.id === pricing.id
    );

    let updatedProducts;
    if (existingProductIndex !== -1) {
      updatedProducts = [...editingCombo.products];
      updatedProducts[existingProductIndex].quantity += quantity;
    } else {
      updatedProducts = [
        ...editingCombo.products,
        {
          id: `${product.id}-${pricing.id}`,
          productId: product.id,
          quantity,
          product,
          pricing,
        },
      ];
    }

    // Update products first
    handleComboChange("products", updatedProducts);

    // Then recalculate prices in a separate step
    setTimeout(() => {
      // Calculate total sale price from products
      const totalPrice = updatedProducts.reduce((sum, item) => {
        return sum + (item.pricing?.price || 0) * item.quantity;
      }, 0);

      // Calculate total purchase price from products
      const totalPurchasePrice = updatedProducts.reduce((sum, item) => {
        return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
      }, 0);

      const discountedPrice = Math.floor(
        totalPrice * (1 - editingCombo.discountPercentage / 100)
      );

      // Update the price field
      handleComboChange("price", discountedPrice);

      // Update the pricings array
      const updatedPricings = [...editingCombo.pricings];
      if (updatedPricings.length > 0) {
        updatedPricings[0].price = discountedPrice;
        updatedPricings[0].purchasePrice = totalPurchasePrice;

        const offerPercentage = editingCombo.discountPercentage;
        const offerAmount = (offerPercentage / 100) * discountedPrice;
        const appSalePrice = discountedPrice - totalPurchasePrice - offerAmount;
        const appPercentage =
          discountedPrice > 0
            ? Math.round((appSalePrice / discountedPrice) * 100)
            : 0;

        updatedPricings[0].appSalePrice = appSalePrice;
        updatedPricings[0].appPercentage = appPercentage;

        handleComboChange("pricings", updatedPricings);
      }
    }, 0);

    // Calculate nutrition after adding products
    setTimeout(() => calculateNutrition(), 0);
  };

  // Function to remove product from combo
  const handleRemoveProduct = (productId: string) => {
    const updatedProducts = editingCombo.products.filter(
      (p) => p.id !== productId
    );

    // Update products first
    handleComboChange("products", updatedProducts);

    // Then recalculate prices in a separate step
    setTimeout(() => {
      // Calculate total sale price from products
      const totalPrice = updatedProducts.reduce((sum, item) => {
        return sum + (item.pricing?.price || 0) * item.quantity;
      }, 0);

      // Calculate total purchase price from products
      const totalPurchasePrice = updatedProducts.reduce((sum, item) => {
        return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
      }, 0);

      const discountedPrice = Math.floor(
        totalPrice * (1 - editingCombo.discountPercentage / 100)
      );

      // Update the price field
      handleComboChange("price", discountedPrice);

      // Update the pricings array
      const updatedPricings = [...editingCombo.pricings];
      if (updatedPricings.length > 0) {
        updatedPricings[0].price = discountedPrice;
        updatedPricings[0].purchasePrice = totalPurchasePrice;

        const offerPercentage = editingCombo.discountPercentage;
        const offerAmount = (offerPercentage / 100) * discountedPrice;
        const appSalePrice = discountedPrice - totalPurchasePrice - offerAmount;
        const appPercentage =
          discountedPrice > 0
            ? Math.round((appSalePrice / discountedPrice) * 100)
            : 0;

        updatedPricings[0].appSalePrice = appSalePrice;
        updatedPricings[0].appPercentage = appPercentage;

        handleComboChange("pricings", updatedPricings);
      }
    }, 0);

    // Calculate nutrition after removing products
    setTimeout(() => calculateNutrition(), 0);
  };

  // Function to update product quantity
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) return;

    const updatedProducts = editingCombo.products.map((p) =>
      p.id === productId ? { ...p, quantity } : p
    );

    // Update products first
    handleComboChange("products", updatedProducts);

    // Then recalculate prices in a separate step
    setTimeout(() => {
      // Calculate total sale price from products
      const totalPrice = updatedProducts.reduce((sum, item) => {
        return sum + (item.pricing?.price || 0) * item.quantity;
      }, 0);

      // Calculate total purchase price from products
      const totalPurchasePrice = updatedProducts.reduce((sum, item) => {
        return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
      }, 0);

      const discountedPrice = Math.floor(
        totalPrice * (1 - editingCombo.discountPercentage / 100)
      );

      // Update the price field
      handleComboChange("price", discountedPrice);

      // Update the pricings array
      const updatedPricings = [...editingCombo.pricings];
      if (updatedPricings.length > 0) {
        updatedPricings[0].price = discountedPrice;
        updatedPricings[0].purchasePrice = totalPurchasePrice;

        const offerPercentage = editingCombo.discountPercentage;
        const offerAmount = (offerPercentage / 100) * discountedPrice;
        const appSalePrice = discountedPrice - totalPurchasePrice - offerAmount;
        const appPercentage =
          discountedPrice > 0
            ? Math.round((appSalePrice / discountedPrice) * 100)
            : 0;

        updatedPricings[0].appSalePrice = appSalePrice;
        updatedPricings[0].appPercentage = appPercentage;

        handleComboChange("pricings", updatedPricings);
      }
    }, 0);

    // Calculate nutrition after updating quantity
    setTimeout(() => calculateNutrition(), 0);
  };

  // Function to handle pricing changes
  // const handlePricingChange = (
  //   pricingId: string,
  //   field: keyof ProductPricing,
  //   value: any
  // ) => {
  //   const updatedPricings = editingCombo.pricings.map((p) => {
  //     if (p.id === pricingId) {
  //       const updated = { ...p, [field]: value };

  //       if (
  //         field === "purchasePrice" ||
  //         field === "price" ||
  //         field === "offerPercentage"
  //       ) {
  //         const purchasePrice =
  //           field === "purchasePrice" ? value : p.purchasePrice;
  //         const price = field === "price" ? value : p.price;
  //         const offer = field === "offerPercentage" ? value : p.offerPercentage;

  //         const offerAmount = (offer / 100) * price;
  //         const appSalePrice = price - purchasePrice - offerAmount;
  //         const appPercentage =
  //           price > 0 ? Math.round((appSalePrice / price) * 100) : 0;

  //         return {
  //           ...updated,
  //           appSalePrice,
  //           appPercentage,
  //         };
  //       }

  //       return updated;
  //     }
  //     return p;
  //   });

  //   handleComboChange("pricings", updatedPricings);

  //   // If discount percentage changed, recalculate the combo price
  //   if (
  //     field === "offerPercentage" &&
  //     pricingId === editingCombo.pricings[0]?.id
  //   ) {
  //     const discountPercentage = value;
  //     handleComboChange("discountPercentage", discountPercentage);

  //     // Recalculate price after updating discount
  //     setTimeout(() => {
  //       // Calculate total sale price from products
  //       const totalPrice = editingCombo.products.reduce((sum, item) => {
  //         return sum + (item.pricing?.price || 0) * item.quantity;
  //       }, 0);

  //       // Calculate total purchase price from products
  //       const totalPurchasePrice = editingCombo.products.reduce((sum, item) => {
  //         return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
  //       }, 0);

  //       const discountedPrice = Math.floor(
  //         totalPrice * (1 - discountPercentage / 100)
  //       );

  //       // Update the price field
  //       handleComboChange("price", discountedPrice);

  //       // Update the pricings array
  //       const updatedPricings = [...editingCombo.pricings];
  //       if (updatedPricings.length > 0) {
  //         updatedPricings[0].price = discountedPrice;
  //         updatedPricings[0].purchasePrice = totalPurchasePrice;

  //         const offerAmount = (discountPercentage / 100) * discountedPrice;
  //         const appSalePrice =
  //           discountedPrice - totalPurchasePrice - offerAmount;
  //         const appPercentage =
  //           discountedPrice > 0
  //             ? Math.round((appSalePrice / discountedPrice) * 100)
  //             : 0;

  //         updatedPricings[0].appSalePrice = appSalePrice;
  //         updatedPricings[0].appPercentage = appPercentage;

  //         handleComboChange("pricings", updatedPricings);
  //       }
  //     }, 0);
  //   }
  // };
  const handlePricingChange = (
    pricingId: string,
    field: keyof ProductPricing,
    value: any
  ) => {
    const updatedPricings = editingCombo.pricings.map((p) => {
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
          const offer = field === "offerPercentage" ? value : p.offerPercentage;

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

    // update pricing array immutably
    handleComboChange("pricings", updatedPricings);

    // Discount affects main price — recalc only when discount changes
    if (
      field === "offerPercentage" &&
      pricingId === editingCombo.pricings[0]?.id
    ) {
      const discountPercentage = value;

      handleComboChange("discountPercentage", discountPercentage);

      setTimeout(() => {
        const totalPrice = editingCombo.products.reduce((sum, item) => {
          return sum + (item.pricing?.price || 0) * item.quantity;
        }, 0);

        const totalPurchasePrice = editingCombo.products.reduce((sum, item) => {
          return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
        }, 0);

        const discountedPrice = Math.floor(
          totalPrice * (1 - discountPercentage / 100)
        );

        // update combo main price
        handleComboChange("price", discountedPrice);

        // update pricing array immutably
        const newPricings = updatedPricings.map((p, idx) => {
          if (idx === 0) {
            const offerAmount = (discountPercentage / 100) * discountedPrice;
            const appSalePrice =
              discountedPrice - totalPurchasePrice - offerAmount;
            const appPercentage =
              discountedPrice > 0
                ? Math.round((appSalePrice / discountedPrice) * 100)
                : 0;

            return {
              ...p,
              price: discountedPrice,
              purchasePrice: totalPurchasePrice,
              appSalePrice,
              appPercentage,
            };
          }
          return p;
        });

        handleComboChange("pricings", newPricings);
      }, 0);
    }
  };

  const addPricingRow = () => {
    handleComboChange("pricings", [
      ...editingCombo.pricings,
      {
        id: `${editingCombo.id}-${Date.now()}`,
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
    ]);
  };

  const removePricingRow = (pricingId: string) => {
    if (editingCombo.pricings.length <= 1) return;

    handleComboChange(
      "pricings",
      editingCombo.pricings.filter((p) => p.id !== pricingId)
    );
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Ensure all prices are calculated correctly before submitting
      // Calculate total sale price from products
      const totalPrice = editingCombo.products.reduce((sum, item) => {
        return sum + (item.pricing?.price || 0) * item.quantity;
      }, 0);

      // Calculate total purchase price from products
      const totalPurchasePrice = editingCombo.products.reduce((sum, item) => {
        return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
      }, 0);

      const discountedPrice = Math.floor(
        totalPrice * (1 - editingCombo.discountPercentage / 100)
      );

      // Update the pricings array with calculated values
      const updatedPricings = [...editingCombo.pricings];
      if (updatedPricings.length > 0) {
        updatedPricings[0].price = discountedPrice;
        updatedPricings[0].purchasePrice = totalPurchasePrice;

        const offerPercentage = editingCombo.discountPercentage;
        const offerAmount = (offerPercentage / 100) * discountedPrice;
        const appSalePrice = discountedPrice - totalPurchasePrice - offerAmount;
        const appPercentage =
          discountedPrice > 0
            ? Math.round((appSalePrice / discountedPrice) * 100)
            : 0;

        updatedPricings[0].appSalePrice = appSalePrice;
        updatedPricings[0].appPercentage = appPercentage;
      }

      const updatedCombo = {
        ...editingCombo,
        price: discountedPrice,
        pricings: updatedPricings,
      };

      await dispatch(editCombo(updatedCombo));
      onClose();
    } catch (error) {
      console.error("Error updating combo:", error);
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
          <h3 className="text-lg font-semibold text-white">Edit Combo</h3>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column - Basic Info */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded mr-2">
                    <FiPlus className="h-3 w-3" />
                  </span>
                  Basic Information
                </h4>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={editingCombo.name}
                    onChange={(e) => handleComboChange("name", e.target.value)}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="stocks"
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      id="stocks"
                      value={editingCombo.stocks}
                      onChange={(e) =>
                        handleComboChange(
                          "stocks",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      min="0"
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      value={editingCombo.status}
                      onChange={(e) =>
                        handleComboChange("status", e.target.value)
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
                      htmlFor="section"
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Section
                    </label>
                    <select
                      id="section"
                      value={editingCombo.section}
                      onChange={(e) => {
                        const section = e.target.value;
                        const category = categories[section][0];
                        const subCategory = subCategories[category][0];

                        handleComboChange("section", section);
                        handleComboChange("category", category);
                        handleComboChange("subCategory", subCategory);
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
                      htmlFor="category"
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      value={editingCombo.category}
                      onChange={(e) => {
                        const category = e.target.value;
                        const subCategory = subCategories[category][0];

                        handleComboChange("category", category);
                        handleComboChange("subCategory", subCategory);
                      }}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      {categories[editingCombo.section]?.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="subCategory"
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Sub Category
                    </label>
                    <select
                      id="subCategory"
                      value={editingCombo.subCategory}
                      onChange={(e) =>
                        handleComboChange("subCategory", e.target.value)
                      }
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      {subCategories[editingCombo.category]?.map(
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
                    {!editingCombo.manualNutrition && (
                      <button
                        type="button"
                        onClick={() =>
                          handleComboChange("manualNutrition", true)
                        }
                        className="text-xs text-emerald-600 hover:text-emerald-800 flex items-center"
                      >
                        <FiEdit3 className="h-3 w-3 mr-1" />
                        Edit Manually
                      </button>
                    )}
                    {editingCombo.manualNutrition && (
                      <button
                        type="button"
                        onClick={() => {
                          handleComboChange("manualNutrition", false);
                          calculateNutrition();
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
                        htmlFor="calories"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Calories
                      </label>
                      <input
                        type="number"
                        id="calories"
                        value={editingCombo.calories}
                        onChange={(e) => {
                          if (editingCombo.manualNutrition) {
                            handleComboChange(
                              "calories",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        min="0"
                        disabled={!editingCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !editingCombo.manualNutrition
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="fat"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Fat (g)
                      </label>
                      <input
                        type="number"
                        id="fat"
                        value={editingCombo.fat}
                        onChange={(e) => {
                          if (editingCombo.manualNutrition) {
                            handleComboChange(
                              "fat",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        step="0.1"
                        min="0"
                        disabled={!editingCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !editingCombo.manualNutrition
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="carb"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Carbs (g)
                      </label>
                      <input
                        type="number"
                        id="carb"
                        value={editingCombo.carb}
                        onChange={(e) => {
                          if (editingCombo.manualNutrition) {
                            handleComboChange(
                              "carb",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        step="0.1"
                        min="0"
                        disabled={!editingCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !editingCombo.manualNutrition
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="protein"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Protein (g)
                      </label>
                      <input
                        type="number"
                        id="protein"
                        value={editingCombo.protein}
                        onChange={(e) => {
                          if (editingCombo.manualNutrition) {
                            handleComboChange(
                              "protein",
                              parseFloat(e.target.value) || 0
                            );
                          }
                        }}
                        step="0.1"
                        min="0"
                        disabled={!editingCombo.manualNutrition}
                        className={`w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                          !editingCombo.manualNutrition
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
                    htmlFor="discountPercentage"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Discount Percentage
                  </label>
                  <input
                    type="number"
                    id="discountPercentage"
                    value={editingCombo.discountPercentage}
                    onChange={(e) => {
                      const discount = parseFloat(e.target.value) || 0;
                      handleComboChange("discountPercentage", discount);
                      recalculateComboPrice();
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
                      ₹{editingCombo.price}
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
                      {editingCombo.imagePreview ? (
                        <div className="relative">
                          <img
                            src={editingCombo.imagePreview}
                            alt="Product preview"
                            className="h-20 w-20 object-cover rounded shadow-md"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleComboChange("imagePreview", null)
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
                          htmlFor="image-upload"
                          className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
                        >
                          <span>Upload</span>
                          <input
                            ref={imageInputRef}
                            id="image-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageChange("productImage", e)
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
                      {editingCombo.nxImagePreview ? (
                        <div className="relative">
                          <img
                            src={editingCombo.nxImagePreview}
                            alt="NX Product preview"
                            className="h-20 w-20 object-cover rounded shadow-md"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleComboChange("nxImagePreview", null)
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
                          htmlFor="nx-image-upload"
                          className="relative cursor-pointer bg-white rounded font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-emerald-500"
                        >
                          <span>Upload</span>
                          <input
                            ref={nxImageInputRef}
                            id="nx-image-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => handleImageChange("nxImage", e)}
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
                  onClick={addPricingRow}
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
                    {editingCombo.pricings.map((p) => (
                      <tr key={p.id} className="text-center">
                        <td className="px-1 py-1 border border-gray-200">
                          <input
                            type="text"
                            min="1"
                            className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
                            value={p.quantity}
                            onChange={(e) =>
                              handlePricingChange(
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
                              handlePricingChange(p.id, "uom", e.target.value)
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
                            value={p.offerPercentage ?? ""}
                            onChange={(e) =>
                              handlePricingChange(
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
                            onClick={() => removePricingRow(p.id)}
                            className="text-red-500 hover:text-red-700"
                            disabled={editingCombo.pricings.length === 1}
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
                Selected Products ({editingCombo.products.length})
              </h4>

              <div className="border border-gray-200 rounded p-2 h-48 overflow-y-auto">
                {editingCombo.products.length === 0 ? (
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
                    {editingCombo.products.map((item) => (
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
                                handleUpdateQuantity(item.id, item.quantity - 1)
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
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                              +
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRemoveProduct(item.id)}
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
              disabled={editingCombo.products.length === 0 || isSubmitting}
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
                  Updating...
                </>
              ) : (
                <>
                  <FiCheck className="mr-2" />
                  Update Combo
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
