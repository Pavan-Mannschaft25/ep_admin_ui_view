// // // src/modules/masterStore/components/EditProductModal.tsx
// // import React, { useState, useRef } from "react";
// // import { useAppDispatch } from "../../../store/hooks";
// // import { editProduct } from "../productsSlice";
// // import { Product } from "../productsSlice";
// // import { FiX, FiUpload, FiImage } from "react-icons/fi";

// // interface EditProductModalProps {
// //   product: Product;
// //   onClose: () => void;
// // }

// // export default function EditProductModal({
// //   product,
// //   onClose,
// // }: EditProductModalProps) {
// //   const dispatch = useAppDispatch();
// //   const [formData, setFormData] = useState({
// //     id: product.id,
// //     name: product.name,
// //     price: product.price,
// //     stocks: product.stocks,
// //     calories: product.calories,
// //     fat: product.fat,
// //     carb: product.carb,
// //     protein: product.protein,
// //     section: product.section,
// //     category: product.category,
// //     subCategory: product.subCategory,
// //   });

// //   const [imagePreview, setImagePreview] = useState<string | null>(
// //     product.image
// //   );
// //   const [nxImagePreview, setNxImagePreview] = useState<string | null>(
// //     product.nxImage
// //   );
// //   const [imageChanged, setImageChanged] = useState(false);
// //   const [nxImageChanged, setNxImageChanged] = useState(false);
// //   const imageInputRef = useRef<HTMLInputElement>(null);
// //   const nxImageInputRef = useRef<HTMLInputElement>(null);

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

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]:
// //         name === "price" ||
// //         name === "stocks" ||
// //         name === "calories" ||
// //         name === "fat" ||
// //         name === "carb" ||
// //         name === "protein"
// //           ? parseFloat(value) || 0
// //           : value,
// //     }));
// //   };

// //   const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const section = e.target.value;
// //     const category = categories[section][0];
// //     const subCategory = subCategories[category][0];

// //     setFormData((prev) => ({
// //       ...prev,
// //       section,
// //       category,
// //       subCategory,
// //     }));
// //   };

// //   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const category = e.target.value;
// //     const subCategory = subCategories[category][0];

// //     setFormData((prev) => ({
// //       ...prev,
// //       category,
// //       subCategory,
// //     }));
// //   };

// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setImagePreview(reader.result as string);
// //         setImageChanged(true);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleNxImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setNxImagePreview(reader.result as string);
// //         setNxImageChanged(true);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     // Only update images if they were changed
// //     const updatedProduct = {
// //       ...formData,
// //       image: imageChanged ? imagePreview || product.image : product.image,
// //       nxImage: nxImageChanged
// //         ? nxImagePreview || product.nxImage
// //         : product.nxImage,
// //     };

// //     dispatch(editProduct(updatedProduct));
// //     onClose();
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
// //       <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl mx-4 my-8">
// //         <div className="flex items-center justify-between p-6 border-b border-gray-200">
// //           <h3 className="text-xl font-semibold text-gray-900">Edit Product</h3>
// //           <button
// //             onClick={onClose}
// //             className="text-gray-400 hover:text-gray-600 transition-colors"
// //           >
// //             <FiX className="h-6 w-6" />
// //           </button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="p-6">
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //             {/* Left Column - Basic Info */}
// //             <div className="lg:col-span-2 space-y-4">
// //               <div>
// //                 <label
// //                   htmlFor="name"
// //                   className="block text-sm font-medium text-gray-700 mb-1"
// //                 >
// //                   Product Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   required
// //                 />
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label
// //                     htmlFor="price"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Price
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="price"
// //                     name="price"
// //                     value={formData.price}
// //                     onChange={handleChange}
// //                     step="0.01"
// //                     min="0"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor="stocks"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Stock Quantity
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="stocks"
// //                     name="stocks"
// //                     value={formData.stocks}
// //                     onChange={handleChange}
// //                     min="0"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <div>
// //                   <label
// //                     htmlFor="section"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Section
// //                   </label>
// //                   <select
// //                     id="section"
// //                     name="section"
// //                     value={formData.section}
// //                     onChange={handleSectionChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   >
// //                     {sections.map((section) => (
// //                       <option key={section} value={section}>
// //                         {section}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor="category"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Category
// //                   </label>
// //                   <select
// //                     id="category"
// //                     name="category"
// //                     value={formData.category}
// //                     onChange={handleCategoryChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   >
// //                     {categories[formData.section].map((category) => (
// //                       <option key={category} value={category}>
// //                         {category}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor="subCategory"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Sub Category
// //                   </label>
// //                   <select
// //                     id="subCategory"
// //                     name="subCategory"
// //                     value={formData.subCategory}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   >
// //                     {subCategories[formData.category].map((subCategory) => (
// //                       <option key={subCategory} value={subCategory}>
// //                         {subCategory}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                 <div>
// //                   <label
// //                     htmlFor="calories"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Calories
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="calories"
// //                     name="calories"
// //                     value={formData.calories}
// //                     onChange={handleChange}
// //                     min="0"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor="fat"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Fat (g)
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="fat"
// //                     name="fat"
// //                     value={formData.fat}
// //                     onChange={handleChange}
// //                     step="0.1"
// //                     min="0"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor="carb"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Carbs (g)
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="carb"
// //                     name="carb"
// //                     value={formData.carb}
// //                     onChange={handleChange}
// //                     step="0.1"
// //                     min="0"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor="protein"
// //                     className="block text-sm font-medium text-gray-700 mb-1"
// //                   >
// //                     Protein (g)
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="protein"
// //                     name="protein"
// //                     value={formData.protein}
// //                     onChange={handleChange}
// //                     step="0.1"
// //                     min="0"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                     required
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column - Image Upload */}
// //             <div className="space-y-4">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   Product Image
// //                 </label>
// //                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// //                   <div className="space-y-1 text-center">
// //                     {imagePreview ? (
// //                       <div className="relative">
// //                         <img
// //                           src={imagePreview}
// //                           alt="Product preview"
// //                           className="mx-auto h-32 w-32 object-cover rounded-lg shadow-md"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => {
// //                             setImagePreview(product.image);
// //                             setImageChanged(false);
// //                           }}
// //                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// //                         >
// //                           <svg
// //                             className="h-4 w-4"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                             stroke="currentColor"
// //                           >
// //                             <path
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                               strokeWidth={2}
// //                               d="M6 18L18 6M6 6l12 12"
// //                             />
// //                           </svg>
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// //                     )}
// //                     <div className="flex text-sm text-gray-600">
// //                       <label
// //                         htmlFor="image-upload"
// //                         className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// //                       >
// //                         <span>Upload a file</span>
// //                         <input
// //                           ref={imageInputRef}
// //                           id="image-upload"
// //                           name="image-upload"
// //                           type="file"
// //                           className="sr-only"
// //                           accept="image/*"
// //                           onChange={handleImageChange}
// //                         />
// //                       </label>
// //                       <p className="pl-1">or drag and drop</p>
// //                     </div>
// //                     <p className="text-xs text-gray-500">
// //                       PNG, JPG, GIF up to 10MB
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   NX Product Image
// //                 </label>
// //                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
// //                   <div className="space-y-1 text-center">
// //                     {nxImagePreview ? (
// //                       <div className="relative">
// //                         <img
// //                           src={nxImagePreview}
// //                           alt="NX Product preview"
// //                           className="mx-auto h-32 w-32 object-cover rounded-lg shadow-md"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => {
// //                             setNxImagePreview(product.nxImage);
// //                             setNxImageChanged(false);
// //                           }}
// //                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
// //                         >
// //                           <svg
// //                             className="h-4 w-4"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                             stroke="currentColor"
// //                           >
// //                             <path
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                               strokeWidth={2}
// //                               d="M6 18L18 6M6 6l12 12"
// //                             />
// //                           </svg>
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <FiImage className="mx-auto h-12 w-12 text-gray-400" />
// //                     )}
// //                     <div className="flex text-sm text-gray-600">
// //                       <label
// //                         htmlFor="nx-image-upload"
// //                         className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
// //                       >
// //                         <span>Upload a file</span>
// //                         <input
// //                           ref={nxImageInputRef}
// //                           id="nx-image-upload"
// //                           name="nx-image-upload"
// //                           type="file"
// //                           className="sr-only"
// //                           accept="image/*"
// //                           onChange={handleNxImageChange}
// //                         />
// //                       </label>
// //                       <p className="pl-1">or drag and drop</p>
// //                     </div>
// //                     <p className="text-xs text-gray-500">
// //                       PNG, JPG, GIF up to 10MB
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="flex justify-end space-x-3 mt-6">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
// //             >
// //               Save Changes
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useRef } from "react";
// import { useAppDispatch } from "../../../store/hooks";
// import { editProduct } from "../productsSlice";
// import { Product, ProductPricing } from "../productsSlice";
// import { FiX, FiUpload, FiImage, FiPlus, FiTrash2 } from "react-icons/fi";

// interface EditProductModalProps {
//   product: Product;
//   onClose: () => void;
// }

// export default function EditProductModal({
//   product,
//   onClose,
// }: EditProductModalProps) {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState({
//     id: product.id,
//     name: product.name,
//     stocks: product.stocks,
//     calories: product.calories,
//     fat: product.fat,
//     carb: product.carb,
//     protein: product.protein,
//     section: product.section,
//     category: product.category,
//     subCategory: product.subCategory,
//     status: product.status,
//   });

//   const [pricings, setPricings] = useState<ProductPricing[]>(product.pricings);

//   const [imagePreview, setImagePreview] = useState<string | null>(
//     product.image
//   );
//   const [nxImagePreview, setNxImagePreview] = useState<string | null>(
//     product.nxImage
//   );
//   const [imageChanged, setImageChanged] = useState(false);
//   const [nxImageChanged, setNxImageChanged] = useState(false);
//   const imageInputRef = useRef<HTMLInputElement>(null);
//   const nxImageInputRef = useRef<HTMLInputElement>(null);

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

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         name === "stocks" ||
//         name === "calories" ||
//         name === "fat" ||
//         name === "carb" ||
//         name === "protein"
//           ? parseFloat(value) || 0
//           : value,
//     }));
//   };

//   const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const section = e.target.value;
//     const category = categories[section][0];
//     const subCategory = subCategories[category][0];

//     setFormData((prev) => ({
//       ...prev,
//       section,
//       category,
//       subCategory,
//     }));
//   };

//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const category = e.target.value;
//     const subCategory = subCategories[category][0];

//     setFormData((prev) => ({
//       ...prev,
//       category,
//       subCategory,
//     }));
//   };

//   const handlePricingChange = (
//     id: string, // Changed from number to string to match ProductPricing.id type
//     field: keyof ProductPricing,
//     value: any
//   ) => {
//     setPricings((prev) =>
//       prev.map((p) => {
//         if (p.id === id) {
//           const updated = { ...p, [field]: value };

//           // Auto-calculate values when purchasePrice or price changes
//           if (field === "purchasePrice" || field === "price") {
//             const purchasePrice =
//               field === "purchasePrice" ? value : p.purchasePrice;
//             const price = field === "price" ? value : p.price;
//             const appSalePrice = price - purchasePrice;
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
//       })
//     );
//   };

//   const addPricingRow = () => {
//     setPricings((prev) => [
//       ...prev,
//       {
//         id: `${Date.now()}`, // Changed to string to match ProductPricing.id type
//         quantity: "1", // Changed to string to match ProductPricing.quantity type
//         uom: "kg",
//         purchasePrice: 0,
//         price: 0,
//         offerPercentage: 0,
//         appSalePrice: 0,
//         cgst: 2.5,
//         sgst: 2.5,
//         appPercentage: 0,
//         status: true,
//       },
//     ]);
//   };

//   const removePricingRow = (id: string) => {
//     // Changed from number to string to match ProductPricing.id type
//     if (pricings.length === 1) return;
//     setPricings((prev) => prev.filter((p) => p.id !== id));
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string);
//         setImageChanged(true);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleNxImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNxImagePreview(reader.result as string);
//         setNxImageChanged(true);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Only update images if they were changed
//     const updatedProduct: Product = {
//       ...formData,
//       pricings,
//       image: imageChanged ? imagePreview : product.image,
//       nxImage: nxImageChanged ? nxImagePreview : product.nxImage,
//       createdAt: product.createdAt, // Keep original creation date
//       updatedAt: new Date().toISOString(), // Update the modification date
//     };

//     dispatch(editProduct(updatedProduct));
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl mx-4 my-8">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900">
//             Edit Product: {product.name}
//           </h3>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <FiX className="h-6 w-6" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Left Column - Basic Info */}
//             <div className="lg:col-span-2 space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Product Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="stocks"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Stock Quantity
//                   </label>
//                   <input
//                     type="number"
//                     id="stocks"
//                     name="stocks"
//                     value={formData.stocks}
//                     onChange={handleChange}
//                     min="0"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div>
//                   <label
//                     htmlFor="section"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Section
//                   </label>
//                   <select
//                     id="section"
//                     name="section"
//                     value={formData.section}
//                     onChange={handleSectionChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   >
//                     {sections.map((section) => (
//                       <option key={section} value={section}>
//                         {section}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="category"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Category
//                   </label>
//                   <select
//                     id="category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleCategoryChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   >
//                     {categories[formData.section].map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="subCategory"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Sub Category
//                   </label>
//                   <select
//                     id="subCategory"
//                     name="subCategory"
//                     value={formData.subCategory}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   >
//                     {subCategories[formData.category].map((subCategory) => (
//                       <option key={subCategory} value={subCategory}>
//                         {subCategory}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div>
//                   <label
//                     htmlFor="calories"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Calories
//                   </label>
//                   <input
//                     type="number"
//                     id="calories"
//                     name="calories"
//                     value={formData.calories}
//                     onChange={handleChange}
//                     min="0"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="fat"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Fat (g)
//                   </label>
//                   <input
//                     type="number"
//                     id="fat"
//                     name="fat"
//                     value={formData.fat}
//                     onChange={handleChange}
//                     step="0.1"
//                     min="0"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="carb"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Carbs (g)
//                   </label>
//                   <input
//                     type="number"
//                     id="carb"
//                     name="carb"
//                     value={formData.carb}
//                     onChange={handleChange}
//                     step="0.1"
//                     min="0"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="protein"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Protein (g)
//                   </label>
//                   <input
//                     type="number"
//                     id="protein"
//                     name="protein"
//                     value={formData.protein}
//                     onChange={handleChange}
//                     step="0.1"
//                     min="0"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="status"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Status
//                 </label>
//                 <select
//                   id="status"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 >
//                   <option value="active">Active</option>
//                   <option value="inactive">Inactive</option>
//                 </select>
//               </div>
//             </div>

//             {/* Right Column - Image Upload */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Product Image
//                 </label>
//                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
//                   <div className="space-y-1 text-center">
//                     {imagePreview ? (
//                       <div className="relative">
//                         <img
//                           src={imagePreview}
//                           alt="Product preview"
//                           className="mx-auto h-32 w-32 object-cover rounded-lg shadow-md"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setImagePreview(product.image);
//                             setImageChanged(false);
//                           }}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
//                         >
//                           <svg
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     ) : (
//                       <FiImage className="mx-auto h-12 w-12 text-gray-400" />
//                     )}
//                     <div className="flex text-sm text-gray-600">
//                       <label
//                         htmlFor="image-upload"
//                         className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
//                       >
//                         <span>Upload a file</span>
//                         <input
//                           ref={imageInputRef}
//                           id="image-upload"
//                           name="image-upload"
//                           type="file"
//                           className="sr-only"
//                           accept="image/*"
//                           onChange={handleImageChange}
//                         />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       PNG, JPG, GIF up to 10MB
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   NX Product Image
//                 </label>
//                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
//                   <div className="space-y-1 text-center">
//                     {nxImagePreview ? (
//                       <div className="relative">
//                         <img
//                           src={nxImagePreview}
//                           alt="NX Product preview"
//                           className="mx-auto h-32 w-32 object-cover rounded-lg shadow-md"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setNxImagePreview(product.nxImage);
//                             setNxImageChanged(false);
//                           }}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
//                         >
//                           <svg
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     ) : (
//                       <FiImage className="mx-auto h-12 w-12 text-gray-400" />
//                     )}
//                     <div className="flex text-sm text-gray-600">
//                       <label
//                         htmlFor="nx-image-upload"
//                         className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
//                       >
//                         <span>Upload a file</span>
//                         <input
//                           ref={nxImageInputRef}
//                           id="nx-image-upload"
//                           name="nx-image-upload"
//                           type="file"
//                           className="sr-only"
//                           accept="image/*"
//                           onChange={handleNxImageChange}
//                         />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       PNG, JPG, GIF up to 10MB
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pricing Table */}
//           <div className="mt-6">
//             <h4 className="font-semibold text-gray-700 mb-2">Pricing</h4>
//             <div className="overflow-x-auto">
//               <table className="w-full border rounded-lg">
//                 <thead className="bg-gray-100 text-sm text-gray-700">
//                   <tr>
//                     <th className="p-2 border">Qty</th>
//                     <th className="p-2 border">UOM</th>
//                     <th className="p-2 border">Purchase</th>
//                     <th className="p-2 border">Price</th>
//                     <th className="p-2 border">Offer %</th>
//                     <th className="p-2 border">Sale</th>
//                     <th className="p-2 border">CGST</th>
//                     <th className="p-2 border">SGST</th>
//                     <th className="p-2 border">App%</th>
//                     <th className="p-2 border">Remove</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {pricings.map((p) => (
//                     <tr key={p.id} className="text-center text-sm">
//                       <td className="border p-1">
//                         <input
//                           type="text" // Changed from number to text to match ProductPricing.quantity type
//                           min="1"
//                           className="w-full border p-1"
//                           value={p.quantity}
//                           onChange={(e) =>
//                             handlePricingChange(
//                               p.id,
//                               "quantity",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </td>
//                       <td className="border p-1">
//                         <select
//                           className="w-full border p-1"
//                           value={p.uom}
//                           onChange={(e) =>
//                             handlePricingChange(p.id, "uom", e.target.value)
//                           }
//                         >
//                           <option>kg</option>
//                           <option>g</option>
//                           <option>ltr</option>
//                           <option>ml</option>
//                         </select>
//                       </td>
//                       <td className="border p-1">
//                         <input
//                           type="number"
//                           className="w-full border p-1"
//                           value={p.purchasePrice}
//                           onChange={(e) =>
//                             handlePricingChange(
//                               p.id,
//                               "purchasePrice",
//                               Number(e.target.value)
//                             )
//                           }
//                         />
//                       </td>
//                       <td className="border p-1">
//                         <input
//                           type="number"
//                           className="w-full border p-1"
//                           value={p.price}
//                           onChange={(e) =>
//                             handlePricingChange(
//                               p.id,
//                               "price",
//                               Number(e.target.value)
//                             )
//                           }
//                         />
//                       </td>
//                       <td className="border p-1">
//                         <input
//                           type="number"
//                           className="w-full border p-1"
//                           value={p.offerPercentage}
//                           onChange={(e) =>
//                             handlePricingChange(
//                               p.id,
//                               "offerPercentage",
//                               Number(e.target.value)
//                             )
//                           }
//                         />
//                       </td>
//                       <td className="border p-1 bg-gray-100">
//                         {p.appSalePrice.toFixed(2)}
//                       </td>
//                       <td className="border p-1">{p.cgst}%</td>
//                       <td className="border p-1">{p.sgst}%</td>
//                       <td className="border p-1">{p.appPercentage}%</td>
//                       <td className="border p-1">
//                         <button
//                           type="button"
//                           onClick={() => removePricingRow(p.id)}
//                           className="text-red-500"
//                           disabled={pricings.length === 1}
//                         >
//                           <FiTrash2 />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <button
//               type="button"
//               onClick={addPricingRow}
//               className="flex items-center gap-1 bg-emerald-600 text-white px-3 py-1 mt-3 rounded"
//             >
//               <FiPlus /> Add Pricing
//             </button>
//           </div>

//           {/* Submit */}
//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { editProduct } from "../productsSlice";
import { Product, ProductPricing } from "../productsSlice";
import { FiX, FiUpload, FiImage, FiPlus, FiTrash2 } from "react-icons/fi";

interface EditProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function EditProductModal({
  product,
  onClose,
}: EditProductModalProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    stocks: product.stocks,
    calories: product.calories,
    fat: product.fat,
    carb: product.carb,
    protein: product.protein,
    section: product.section,
    category: product.category,
    subCategory: product.subCategory,
    status: product.status,
  });

  const [pricings, setPricings] = useState<ProductPricing[]>(product.pricings);

  const [imagePreview, setImagePreview] = useState<string | null>(
    product.image
  );
  const [nxImagePreview, setNxImagePreview] = useState<string | null>(
    product.nxImage
  );
  const [imageChanged, setImageChanged] = useState(false);
  const [nxImageChanged, setNxImageChanged] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const nxImageInputRef = useRef<HTMLInputElement>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "stocks" ||
        name === "calories" ||
        name === "fat" ||
        name === "carb" ||
        name === "protein"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const section = e.target.value;
    const category = categories[section][0];
    const subCategory = subCategories[category][0];

    setFormData((prev) => ({
      ...prev,
      section,
      category,
      subCategory,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    const subCategory = subCategories[category][0];

    setFormData((prev) => ({
      ...prev,
      category,
      subCategory,
    }));
  };

  const handlePricingChange = (
    id: string,
    field: keyof ProductPricing,
    value: any
  ) => {
    setPricings((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = { ...p, [field]: value };

          // Auto-calculate values when purchasePrice or price changes

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
      })
    );
  };

  const addPricingRow = () => {
    setPricings((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        quantity: "1",
        uom: "kg",
        purchasePrice: 0,
        price: 0,
        offerPercentage: 0,
        appSalePrice: 0,
        cgst: 0,
        sgst: 0,
        appPercentage: 0,
        status: true,
      },
    ]);
  };

  const removePricingRow = (id: string) => {
    if (pricings.length === 1) return;
    setPricings((prev) => prev.filter((p) => p.id !== id));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setImageChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNxImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNxImagePreview(reader.result as string);
        setNxImageChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Only update images if they were changed
    const updatedProduct: Product = {
      ...formData,
      pricings,
      image: imageChanged ? imagePreview : product.image,
      nxImage: nxImageChanged ? nxImagePreview : product.nxImage,
      createdAt: product.createdAt,
      updatedAt: new Date().toISOString(),
    };

    dispatch(editProduct(updatedProduct));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl mx-4 my-4 max-h-[98vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0n rounded-t-xl">
          <h3 className="text-lg font-semibold text-white">
            Edit Product: {product.name}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column - Basic Info */}
              <div className="space-y-3">
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                      name="stocks"
                      value={formData.stocks}
                      onChange={handleChange}
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
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
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
                      name="section"
                      value={formData.section}
                      onChange={handleSectionChange}
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
                      name="category"
                      value={formData.category}
                      onChange={handleCategoryChange}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      {categories[formData.section].map((category) => (
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
                      name="subCategory"
                      value={formData.subCategory}
                      onChange={handleChange}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    >
                      {subCategories[formData.category].map((subCategory) => (
                        <option key={subCategory} value={subCategory}>
                          {subCategory}
                        </option>
                      ))}
                    </select>
                  </div>
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
                      name="calories"
                      value={formData.calories}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                      name="fat"
                      value={formData.fat}
                      onChange={handleChange}
                      step="0.1"
                      min="0"
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                      name="carb"
                      value={formData.carb}
                      onChange={handleChange}
                      step="0.1"
                      min="0"
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                      name="protein"
                      value={formData.protein}
                      onChange={handleChange}
                      step="0.1"
                      min="0"
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    />
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
                      {imagePreview ? (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Product preview"
                            className="h-20 w-20 object-cover rounded shadow-md"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreview(product.image);
                              setImageChanged(false);
                            }}
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
                            name="image-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageChange}
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
                      {nxImagePreview ? (
                        <div className="relative">
                          <img
                            src={nxImagePreview}
                            alt="NX Product preview"
                            className="h-20 w-20 object-cover rounded shadow-md"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setNxImagePreview(product.nxImage);
                              setNxImageChanged(false);
                            }}
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
                            name="nx-image-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleNxImageChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Table - More Compact */}
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
                    {pricings.map((p) => (
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
                            value={p.offerPercentage}
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
                            disabled={pricings.length === 1}
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
              className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
