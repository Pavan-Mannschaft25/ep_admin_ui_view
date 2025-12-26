// // src/modules/shop/components/ShopProductModal.tsx
// import React, { useState, useEffect } from "react";
// import { FaTimes, FaImage } from "react-icons/fa";
// import { ShopProduct, Nutrition } from "../../shopSlice";

// interface ShopProductModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (product: ShopProduct) => void;
//   product?: ShopProduct;
// }

// const ShopProductModal: React.FC<ShopProductModalProps> = ({
//   isOpen,
//   onClose,
//   onSave,
//   product,
// }) => {
//   const [formData, setFormData] = useState<ShopProduct>({
//     id: 0,
//     name: "",
//     description: "",
//     image: "", // This will now hold a Base64 string
//     price: "",
//     stock: 0,
//     category: "",
//     subCategory: "",
//     nutrition: { calories: "", fat: "", carb: "", protein: "", image: "" }, // nutrition.image will also be Base64
//     rating: 4.5,
//   });

//   const [imagePreview, setImagePreview] = useState("");
//   const [nutritionImagePreview, setNutritionImagePreview] = useState("");

//   // State to hold the actual File objects, useful for direct upload to a server
//   const [productImageFile, setProductImageFile] = useState<File | null>(null);
//   const [nutritionImageFile, setNutritionImageFile] = useState<File | null>(
//     null
//   );

//   const isEditMode = !!product;

//   useEffect(() => {
//     if (isEditMode && product) {
//       // In edit mode, if the image is a URL, it will be set as the preview.
//       // If it's a Base64 string from a previous save, it will also work.
//       setFormData(product);
//       setImagePreview(product.image);
//       setNutritionImagePreview(product.nutrition.image || "");
//     } else {
//       // Reset form for adding a new product
//       setFormData({
//         id: 0,
//         name: "",
//         description: "",
//         image: "",
//         price: "",
//         stock: 0,
//         category: "",
//         subCategory: "",
//         nutrition: { calories: "", fat: "", carb: "", protein: "", image: "" },
//         rating: 4.5,
//       });
//       setImagePreview("");
//       setNutritionImagePreview("");
//       setProductImageFile(null);
//       setNutritionImageFile(null);
//     }
//   }, [product, isEditMode, isOpen]);

//   // Handler for text and number inputs
//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;

//     if (name.includes("nutrition.")) {
//       const nutritionKey = name.split(".")[1] as keyof Nutrition;
//       setFormData((prev) => ({
//         ...prev,
//         nutrition: { ...prev.nutrition, [nutritionKey]: value },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // Handler for the main product image file input
//   const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setProductImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result as string;
//         setImagePreview(base64String);
//         setFormData((prev) => ({ ...prev, image: base64String }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handler for the nutrition image file input
//   const handleNutritionImageChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setNutritionImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result as string;
//         setNutritionImagePreview(base64String);
//         setFormData((prev) => ({
//           ...prev,
//           nutrition: { ...prev.nutrition, image: base64String },
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // The `formData` object now contains Base64 strings for images.
//     // You can save this directly to state or a database.
//     onSave(formData);

//     // If you need to upload the actual files to a server, you would do it here.
//     // Example using FormData for multipart/form-data request:
//     /*
//     const apiFormData = new FormData();
//     apiFormData.append('productData', JSON.stringify(formData));
//     if (productImageFile) {
//       apiFormData.append('productImage', productImageFile);
//     }
//     if (nutritionImageFile) {
//       apiFormData.append('nutritionImage', nutritionImageFile);
//     }
//     // Then you would send `apiFormData` using fetch or axios
//     */

//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//         <div className="bg-emerald-600 flex items-center justify-between p-4 border-b">
//           <h2 className="text-xl font-semibold text-white">
//             {isEditMode ? "Edit Product" : "Add New Product"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-white bg-black p-2 rounded-full hover:bg-gray-800 transition-colors"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-4">
//               {/* ... (Name, Description inputs remain the same) ... */}

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Category
//                   </label>
//                   <input
//                     type="text"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Sub-Category
//                   </label>
//                   <input
//                     type="text"
//                     name="subCategory"
//                     value={formData.subCategory}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Product Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   rows={3}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Product Image
//                 </label>
//                 <div className="mt-1 flex items-center space-x-3">
//                   <input
//                     type="file"
//                     id="product-image-upload"
//                     accept="image/*"
//                     onChange={handleProductImageChange}
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor="product-image-upload"
//                     className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                   >
//                     <FaImage className="mr-2" />
//                     Choose File
//                   </label>
//                   <span className="text-sm text-gray-500">
//                     {productImageFile
//                       ? productImageFile.name
//                       : "No file chosen"}
//                   </span>
//                 </div>
//                 {imagePreview && (
//                   <div className="mt-2 h-32 w-full rounded-lg overflow-hidden bg-gray-100 border">
//                     <img
//                       src={imagePreview}
//                       alt="Product preview"
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* ... (Price, Stock, Category inputs remain the same) ... */}
//               {/* <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Price (₹)
//                   </label>
//                   <input
//                     type="text"
//                     name="price"
//                     value={formData.price}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Stock
//                   </label>
//                   <input
//                     type="number"
//                     name="stock"
//                     value={formData.stock}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//               </div> */}
//             </div>

//             <div className="space-y-4">
//               <div className="border-t pt-4 md:border-t-0 md:pt-0">
//                 <h3 className="text-lg font-medium text-gray-700 mb-3">
//                   Nutritional Information (per 100g)
//                 </h3>

//                 {/* ... (Nutrition inputs and preview remain the same) ... */}
//                 <div className="grid grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Calories (kcal)
//                     </label>
//                     <input
//                       type="text"
//                       name="nutrition.calories"
//                       value={formData.nutrition.calories}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Fat (g)
//                     </label>
//                     <input
//                       type="text"
//                       name="nutrition.fat"
//                       value={formData.nutrition.fat}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Carbohydrates (g)
//                     </label>
//                     <input
//                       type="text"
//                       name="nutrition.carb"
//                       value={formData.nutrition.carb}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Protein (g)
//                     </label>
//                     <input
//                       type="text"
//                       name="nutrition.protein"
//                       value={formData.nutrition.protein}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-emerald-500 focus:border-emerald-500"
//                     />
//                   </div>
//                 </div>

//                 {formData.nutrition.calories && (
//                   <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                     <h4 className="text-sm font-medium text-gray-700 mb-2">
//                       Nutrition Preview
//                     </h4>
//                     <div className="grid grid-cols-2 gap-2 text-sm">
//                       <div className="flex items-center">
//                         <span className="text-gray-600">Calories:</span>
//                         <span className="ml-2 font-medium">
//                           {formData.nutrition.calories} kcal
//                         </span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600">Fat:</span>
//                         <span className="ml-2 font-medium">
//                           {formData.nutrition.fat}g
//                         </span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600">Carbs:</span>
//                         <span className="ml-2 font-medium">
//                           {formData.nutrition.carb}g
//                         </span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-600">Protein:</span>
//                         <span className="ml-2 font-medium">
//                           {formData.nutrition.protein}g
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mt-4">
//                     Nutrition Image
//                   </label>
//                   <div className="mt-1 flex items-center space-x-3">
//                     <input
//                       type="file"
//                       id="nutrition-image-upload"
//                       accept="image/*"
//                       onChange={handleNutritionImageChange}
//                       className="hidden"
//                     />
//                     <label
//                       htmlFor="nutrition-image-upload"
//                       className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                     >
//                       <FaImage className="mr-2" />
//                       Choose File
//                     </label>
//                     <span className="text-sm text-gray-500">
//                       {nutritionImageFile
//                         ? nutritionImageFile.name
//                         : "No file chosen"}
//                     </span>
//                   </div>
//                   {nutritionImagePreview && (
//                     <div className="mt-2 h-32 w-full rounded-lg overflow-hidden bg-gray-100 border">
//                       <img
//                         src={nutritionImagePreview}
//                         alt="Nutrition preview"
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end gap-2 pt-4 border-t mt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
//             >
//               {isEditMode ? "Save Changes" : "Add Product"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ShopProductModal;

// src/modules/shop/components/ShopProductModal.tsx
import React, { useState, useRef } from "react";
import { FiX, FiUpload, FiImage } from "react-icons/fi";
import { ShopProduct, Nutrition } from "../../shopSlice";

interface ShopProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: ShopProduct) => void;
  product?: ShopProduct;
}

export default function ShopProductModal({
  isOpen,
  onClose,
  onSave,
  product,
}: ShopProductModalProps) {
  const [formData, setFormData] = useState<ShopProduct>({
    id: 0,
    name: "",
    description: "",
    image: "",
    price: "",
    stock: 0,
    category: "",
    subCategory: "",
    nutrition: { calories: "", fat: "", carb: "", protein: "", image: "" },
    rating: 4.5,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [nutritionImagePreview, setNutritionImagePreview] = useState<
    string | null
  >(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const nutritionImageInputRef = useRef<HTMLInputElement>(null);

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

  const isEditMode = !!product;

  // Initialize form data when product prop changes
  React.useEffect(() => {
    if (isEditMode && product) {
      setFormData(product);
      setImagePreview(product.image);
      setNutritionImagePreview(product.nutrition.image || "");
    } else {
      // Reset form for adding a new product
      setFormData({
        id: 0,
        name: "",
        description: "",
        image: "",
        price: "",
        stock: 0,
        category: "",
        subCategory: "",
        nutrition: { calories: "", fat: "", carb: "", protein: "", image: "" },
        rating: 4.5,
      });
      setImagePreview(null);
      setNutritionImagePreview(null);
    }
  }, [product, isEditMode, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name.includes("nutrition.")) {
      const nutritionKey = name.split(".")[1] as keyof Nutrition;
      setFormData((prev) => ({
        ...prev,
        nutrition: { ...prev.nutrition, [nutritionKey]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData((prev) => ({ ...prev, image: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNutritionImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setNutritionImagePreview(base64String);
        setFormData((prev) => ({
          ...prev,
          nutrition: { ...prev.nutrition, image: base64String },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl mx-4 my-8">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between p-6 border-b border-gray-200 rounded-t-xl">
          <h3 className="text-xl font-semibold text-white">
            {isEditMode ? "Edit Product" : "Add New Product"}
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                />
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    required
                  />
                </div>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="section"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Brands
                  </label>
                  <select
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleSectionChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleCategoryChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  >
                    {categories[formData.section]?.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subCategory"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sub Category
                  </label>
                  <select
                    id="subCategory"
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  >
                    {subCategories[formData.category]?.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Nutritional Information (per 100g)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label
                      htmlFor="calories"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Calories
                    </label>
                    <input
                      type="text"
                      id="calories"
                      name="nutrition.calories"
                      value={formData.nutrition.calories}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="fat"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Fat (g)
                    </label>
                    <input
                      type="text"
                      id="fat"
                      name="nutrition.fat"
                      value={formData.nutrition.fat}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="carb"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Carbs (g)
                    </label>
                    <input
                      type="text"
                      id="carb"
                      name="nutrition.carb"
                      value={formData.nutrition.carb}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="protein"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Protein (g)
                    </label>
                    <input
                      type="text"
                      id="protein"
                      name="nutrition.protein"
                      value={formData.nutrition.protein}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {formData.nutrition.calories && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Nutrition Preview
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-600">Calories:</span>
                        <span className="ml-2 font-medium">
                          {formData.nutrition.calories} kcal
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600">Fat:</span>
                        <span className="ml-2 font-medium">
                          {formData.nutrition.fat}g
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600">Carbs:</span>
                        <span className="ml-2 font-medium">
                          {formData.nutrition.carb}g
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600">Protein:</span>
                        <span className="ml-2 font-medium">
                          {formData.nutrition.protein}g
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Image Upload */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Product preview"
                          className="mx-auto h-32 w-32 object-cover rounded-lg shadow-md"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData((prev) => ({ ...prev, image: "" }));
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                        >
                          <svg
                            className="h-4 w-4"
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
                      <FiImage className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                      >
                        <span>Upload a file</span>
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
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nutrition Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-emerald-500 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    {nutritionImagePreview ? (
                      <div className="relative">
                        <img
                          src={nutritionImagePreview}
                          alt="Nutrition preview"
                          className="mx-auto h-32 w-32 object-cover rounded-lg shadow-md"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setNutritionImagePreview(null);
                            setFormData((prev) => ({
                              ...prev,
                              nutrition: { ...prev.nutrition, image: "" },
                            }));
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                        >
                          <svg
                            className="h-4 w-4"
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
                      <FiImage className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="nutrition-image-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                      >
                        <span>Upload a file</span>
                        <input
                          ref={nutritionImageInputRef}
                          id="nutrition-image-upload"
                          name="nutrition-image-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleNutritionImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
            >
              {isEditMode ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
