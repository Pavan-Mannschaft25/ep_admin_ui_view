// // src/modules/masterStore/pages/MasterStorePage.tsx
// import React, { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import {
//   fetchProducts,
//   Product,
//   ProductPricing,
//   editProduct,
//   deleteProduct,
//   updateStock,
//   addPricing,
//   updatePricing,
//   deletePricing,
//   toggleProductStatus,
//   togglePricingStatus,
// } from "../productsSlice";
// import {
//   FiPlus,
//   FiSearch,
//   FiRefreshCw,
//   FiPackage,
//   FiFilter,
//   FiActivity,
//   FiTrendingUp,
//   FiBox,
// } from "react-icons/fi";
// import { FaIndianRupeeSign } from "react-icons/fa6";

// import ProductTable from "../components/ProductTable";
// import AddProductModal from "../components/AddProductModal";
// import EditProductModal from "../components/EditProductModal";
// import DeleteProductModal from "../components/DeleteProductModal";

// export default function MasterStorePage() {
//   const dispatch = useAppDispatch();
//   const { products, status } = useAppSelector((state) => state.masterProducts);
//   const [searchProduct, setSearchProduct] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [sectionFilter, setSectionFilter] = useState<string>("all");
//   const [categoryFilter, setCategoryFilter] = useState<string>("all");
//   const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
//   const [statusFilter, setStatusFilter] = useState<string>("all");
//   const [refreshKey, setRefreshKey] = useState(0); // Add a refresh key to force re-render

//   useEffect(() => {
//     if (status === "idle") dispatch(fetchProducts());
//   }, [status, dispatch]);

//   // Get unique sections and categories for filters
//   const sections = Array.from(new Set(products.map((p) => p.section)));
//   const categories = Array.from(new Set(products.map((p) => p.category)));

//   // Get unique sub-categories based on selected category
//   const subCategories =
//     categoryFilter === "all"
//       ? Array.from(new Set(products.map((p) => p.subCategory)))
//       : Array.from(
//           new Set(
//             products
//               .filter((p) => p.category === categoryFilter)
//               .map((p) => p.subCategory)
//           )
//         );

//   // Reset sub-category filter when category changes
//   useEffect(() => {
//     setSubCategoryFilter("all");
//   }, [categoryFilter]);

//   // Filter products based on search and filters
//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchProduct.toLowerCase());
//     const matchesSection =
//       sectionFilter === "all" || product.section === sectionFilter;
//     const matchesCategory =
//       categoryFilter === "all" || product.category === categoryFilter;
//     const matchesSubCategory =
//       subCategoryFilter === "all" || product.subCategory === subCategoryFilter;
//     const matchesStatus =
//       statusFilter === "all" || product.status === statusFilter;

//     return (
//       matchesSearch &&
//       matchesSection &&
//       matchesCategory &&
//       matchesSubCategory &&
//       matchesStatus
//     );
//   });

//   // Calculate statistics
//   const totalProducts = products.length;
//   const totalValue = products.reduce((sum, p) => {
//     const price = p.pricings.length > 0 ? p.pricings[0].price : 0;
//     return sum + price * p.stocks;
//   }, 0);
//   const lowStockProducts = products.filter((p) => p.stocks < 20).length;
//   const highCalorieProducts = products.filter((p) => p.calories > 200).length;
//   const activeProducts = products.filter((p) => p.status === "active").length;

//   const handleRefresh = () => {
//     dispatch(fetchProducts());
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   const handleEdit = (product: Product) => {
//     setSelectedProduct(product);
//     setShowEditModal(true);
//   };

//   const handleDelete = (product: Product) => {
//     setSelectedProduct(product);
//     setShowDeleteModal(true);
//   };

//   const handleToggleStatus = (product: Product) => {
//     dispatch(toggleProductStatus(product.id));
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   const handleUpdatePrice = (product: Product, price: number) => {
//     // This function is now used for the old price update, but we're using the new pricing system
//     // We could update the first pricing option if needed
//     if (product.pricings.length > 0) {
//       const updatedPricing = { ...product.pricings[0], price };
//       dispatch(
//         updatePricing({
//           productId: product.id,
//           pricingId: product.pricings[0].id,
//           pricing: updatedPricing,
//         })
//       );
//       setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//     }
//   };

//   const handleUpdateImage = (
//     product: Product,
//     imageUrl: string,
//     imageType: "product" | "nx"
//   ) => {
//     const updatedProduct = { ...product };

//     if (imageType === "product") {
//       updatedProduct.image = imageUrl;
//     } else {
//       updatedProduct.nxImage = imageUrl;
//     }

//     dispatch(editProduct(updatedProduct));
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   const handleAddPricing = (
//     productId: string,
//     pricing: Omit<ProductPricing, "id">
//   ) => {
//     dispatch(addPricing({ productId, pricing }));
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   const handleUpdatePricing = (
//     productId: string,
//     pricingId: string,
//     pricing: ProductPricing
//   ) => {
//     dispatch(updatePricing({ productId, pricingId, pricing }));
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   const handleDeletePricing = (productId: string, pricingId: string) => {
//     dispatch(deletePricing({ productId, pricingId }));
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   const handleTogglePricingStatus = (productId: string, pricingId: string) => {
//     dispatch(togglePricingStatus({ productId, pricingId }));
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   // Add a handler for when the edit modal is closed after a successful edit
//   const handleEditModalClose = () => {
//     setSelectedProduct(null);
//     setShowEditModal(false);
//     setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with gradient background */}
//         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
//                 <FiPackage className="mr-3" />
//                 Master Store Products
//               </h1>
//               <p className="text-emerald-100 text-lg">
//                 Manage store products and inventory
//               </p>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={handleRefresh}
//                 className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
//                 title="Refresh"
//               >
//                 <FiRefreshCw className="text-lg" />
//                 <span className="hidden sm:inline">Refresh</span>
//               </button>
//               <button
//                 onClick={() => setShowAddModal(true)}
//                 className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
//               >
//                 <FiPlus className="text-lg" />
//                 <span>Add Product</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">
//                   Total Products
//                 </p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {totalProducts}
//                 </p>
//               </div>
//               <div className="bg-emerald-100 p-3 rounded-full">
//                 <FiPackage className="text-emerald-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Total Value</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   ₹{totalValue.toFixed(2)}
//                 </p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-full">
//                 <FaIndianRupeeSign className="text-blue-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Low Stock</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {lowStockProducts}
//                 </p>
//               </div>
//               <div className="bg-yellow-100 p-3 rounded-full">
//                 <FiBox className="text-yellow-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">
//                   High Calorie
//                 </p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {highCalorieProducts}
//                 </p>
//               </div>
//               <div className="bg-purple-100 p-3 rounded-full">
//                 <FiActivity className="text-purple-600 text-xl" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search and Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiSearch className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search Product"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={searchProduct}
//                   onChange={(e) => setSearchProduct(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-3 flex-wrap">
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={sectionFilter}
//                   onChange={(e) => setSectionFilter(e.target.value)}
//                 >
//                   <option value="all">--Select Section--</option>
//                   {sections.map((section) => (
//                     <option key={section} value={section}>
//                       {section}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiFilter className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={categoryFilter}
//                   onChange={(e) => setCategoryFilter(e.target.value)}
//                 >
//                   <option value="all">--Select Category--</option>
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiFilter className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={subCategoryFilter}
//                   onChange={(e) => setSubCategoryFilter(e.target.value)}
//                   disabled={categoryFilter === "all"}
//                 >
//                   <option value="all">--Select Sub Category--</option>
//                   {subCategories.map((subCategory) => (
//                     <option key={subCategory} value={subCategory}>
//                       {subCategory}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiFilter className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                 >
//                   <option value="all">--All Status--</option>
//                   <option value="active">Active</option>
//                   <option value="inactive">Inactive</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiFilter className="h-4 w-4" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Products Table */}
//         <ProductTable
//           key={refreshKey} // Add key to force re-render when refreshKey changes
//           data={filteredProducts}
//           isLoading={status === "loading"}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           onUpdatePrice={handleUpdatePrice}
//           onUpdateImage={handleUpdateImage}
//           onToggleStatus={handleToggleStatus}
//           onAddPricing={handleAddPricing}
//           onUpdatePricing={handleUpdatePricing}
//           onDeletePricing={handleDeletePricing}
//           onTogglePricingStatus={handleTogglePricingStatus}
//         />

//         {/* Modals */}
//         {showAddModal && (
//           <AddProductModal
//             onClose={() => {
//               setShowAddModal(false);
//               setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//             }}
//           />
//         )}
//         {showEditModal && selectedProduct && (
//           <EditProductModal
//             product={selectedProduct}
//             onClose={handleEditModalClose}
//           />
//         )}
//         {showDeleteModal && selectedProduct && (
//           <DeleteProductModal
//             product={selectedProduct}
//             onClose={() => {
//               setSelectedProduct(null);
//               setShowDeleteModal(false);
//               setRefreshKey((prev) => prev + 1); // Increment refresh key to force re-render
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// src/modules/masterStore/pages/MasterStorePage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  fetchProducts,
  Product,
  ProductPricing,
  editProduct,
  deleteProduct,
  updateStock,
  addPricing,
  updatePricing,
  deletePricing,
  toggleProductStatus,
  togglePricingStatus,
} from "../productsSlice";
import {
  fetchCombos,
  ProductCombo,
  editCombo,
  deleteCombo,
  toggleComboStatus,
} from "../comboSlice";
import {
  FiPlus,
  FiSearch,
  FiRefreshCw,
  FiPackage,
  FiFilter,
  FiActivity,
  FiTrendingUp,
  FiBox,
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";

import ProductTable from "../components/ProductTable";
import ProductComboTable from "../components/ProductComboTable";
import AddProductModal from "../components/AddProductModal";
import AddComboModal from "../components/AddComboModal";
import EditProductModal from "../components/EditProductModal";
import EditComboModal from "../components/EditComboModal";
import DeleteProductModal from "../components/DeleteProductModal";
import DeleteComboModal from "../components/DeleteComboModal";

export default function MasterStorePage() {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector((state) => state.masterProducts);
  const { combos, status: comboStatus } = useAppSelector(
    (state) => state.masterCombos
  );
  const [searchProduct, setSearchProduct] = useState("");
  const [searchCombo, setSearchCombo] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCombo, setSelectedCombo] = useState<ProductCombo | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddComboModal, setShowAddComboModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditComboModal, setShowEditComboModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteComboModal, setShowDeleteComboModal] = useState(false);
  const [sectionFilter, setSectionFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [comboStatusFilter, setComboStatusFilter] = useState<string>("all");
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeTab, setActiveTab] = useState<"products" | "combos">("products");

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
    if (comboStatus === "idle") dispatch(fetchCombos());
  }, [status, comboStatus, dispatch]);

  // Get unique sections and categories for filters
  const sections = Array.from(new Set(products.map((p) => p.section)));
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Get unique sub-categories based on selected category
  const subCategories =
    categoryFilter === "all"
      ? Array.from(new Set(products.map((p) => p.subCategory)))
      : Array.from(
          new Set(
            products
              .filter((p) => p.category === categoryFilter)
              .map((p) => p.subCategory)
          )
        );

  // Reset sub-category filter when category changes
  useEffect(() => {
    setSubCategoryFilter("all");
  }, [categoryFilter]);

  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchProduct.toLowerCase());
    const matchesSection =
      sectionFilter === "all" || product.section === sectionFilter;
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    const matchesSubCategory =
      subCategoryFilter === "all" || product.subCategory === subCategoryFilter;
    const matchesStatus =
      statusFilter === "all" || product.status === statusFilter;

    return (
      matchesSearch &&
      matchesSection &&
      matchesCategory &&
      matchesSubCategory &&
      matchesStatus
    );
  });

  // Filter combos based on search and filters
  const filteredCombos = combos.filter((combo) => {
    const matchesSearch = combo.name
      .toLowerCase()
      .includes(searchCombo.toLowerCase());
    const matchesStatus =
      comboStatusFilter === "all" || combo.status === comboStatusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalProducts = products.length;
  const totalCombos = combos.length;
  const totalValue = products.reduce((sum, p) => {
    const price = p.pricings.length > 0 ? p.pricings[0].price : 0;
    return sum + price * p.stocks;
  }, 0);
  const lowStockProducts = products.filter((p) => p.stocks < 20).length;
  const highCalorieProducts = products.filter((p) => p.calories > 200).length;
  const activeProducts = products.filter((p) => p.status === "active").length;
  const activeCombos = combos.filter((c) => c.status === "active").length;

  const handleRefresh = () => {
    dispatch(fetchProducts());
    dispatch(fetchCombos());
    setRefreshKey((prev) => prev + 1);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleEditCombo = (combo: ProductCombo) => {
    setSelectedCombo(combo);
    setShowEditComboModal(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleDeleteCombo = (combo: ProductCombo) => {
    setSelectedCombo(combo);
    setShowDeleteComboModal(true);
  };

  const handleToggleStatus = (product: Product) => {
    dispatch(toggleProductStatus(product.id));
    setRefreshKey((prev) => prev + 1);
  };

  const handleToggleComboStatus = (combo: ProductCombo) => {
    dispatch(toggleComboStatus(combo.id));
    setRefreshKey((prev) => prev + 1);
  };

  const handleUpdatePrice = (product: Product, price: number) => {
    // This function is now used for the old price update, but we're using the new pricing system
    // We could update the first pricing option if needed
    if (product.pricings.length > 0) {
      const updatedPricing = { ...product.pricings[0], price };
      dispatch(
        updatePricing({
          productId: product.id,
          pricingId: product.pricings[0].id,
          pricing: updatedPricing,
        })
      );
      setRefreshKey((prev) => prev + 1);
    }
  };

  const handleUpdateImage = (
    product: Product,
    imageUrl: string,
    imageType: "product" | "nx"
  ) => {
    const updatedProduct = { ...product };

    if (imageType === "product") {
      updatedProduct.image = imageUrl;
    } else {
      updatedProduct.nxImage = imageUrl;
    }

    dispatch(editProduct(updatedProduct));
    setRefreshKey((prev) => prev + 1);
  };

  const handleAddPricing = (
    productId: string,
    pricing: Omit<ProductPricing, "id">
  ) => {
    dispatch(addPricing({ productId, pricing }));
    setRefreshKey((prev) => prev + 1);
  };

  const handleUpdatePricing = (
    productId: string,
    pricingId: string,
    pricing: ProductPricing
  ) => {
    dispatch(updatePricing({ productId, pricingId, pricing }));
    setRefreshKey((prev) => prev + 1);
  };

  const handleDeletePricing = (productId: string, pricingId: string) => {
    dispatch(deletePricing({ productId, pricingId }));
    setRefreshKey((prev) => prev + 1);
  };

  const handleTogglePricingStatus = (productId: string, pricingId: string) => {
    dispatch(togglePricingStatus({ productId, pricingId }));
    setRefreshKey((prev) => prev + 1);
  };

  // Add a handler for when the edit modal is closed after a successful edit
  const handleEditModalClose = () => {
    setSelectedProduct(null);
    setShowEditModal(false);
    setRefreshKey((prev) => prev + 1);
  };

  // Add a handler for when the edit combo modal is closed after a successful edit
  const handleEditComboModalClose = () => {
    setSelectedCombo(null);
    setShowEditComboModal(false);
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
                <FiPackage className="mr-3" />
                Master Store Products
              </h1>
              <p className="text-emerald-100 text-lg">
                Manage store products and inventory
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                title="Refresh"
              >
                <FiRefreshCw className="text-lg" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              {/* <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <FiPlus className="text-lg" />
                <span>Add Product</span>
              </button> */}
              <button
                onClick={() => setShowAddComboModal(true)}
                className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <FiPlus className="text-lg" />
                <span>Add Combo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Products
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {totalProducts}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiPackage className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Combos
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {totalCombos}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FiBox className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Value</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  ₹{totalValue.toFixed(2)}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FaIndianRupeeSign className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Low Stock</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {lowStockProducts}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <FiBox className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>
          {/* <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  High Calorie
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {highCalorieProducts}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FiActivity className="text-purple-600 text-xl" />
              </div>
            </div>
          </div> */}
        </div>

        {/* Tab Navigation */}
        {/* <div className="bg-white rounded-xl shadow-lg p-1 mb-8">
          <div className="flex">
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "products"
                  ? "bg-emerald-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("products")}
            >
              Products ({activeProducts}/{totalProducts})
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "combos"
                  ? "bg-emerald-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("combos")}
            >
              Combos ({activeCombos}/{totalCombos})
            </button>
          </div>
        </div> */}
        <div className="bg-white rounded-xl shadow-lg p-1 mb-8">
          <div className="flex relative">
            {/* Animated gradient background */}
            <div
              className="absolute top-0 bottom-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg transition-all duration-300 ease-in-out"
              style={{
                width: "50%",
                left: activeTab === "products" ? "0%" : "50%",
              }}
            />

            <button
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 relative z-10 ${
                activeTab === "products" ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("products")}
            >
              <div className="flex items-center justify-center">
                <FiPackage className="mr-2" />
                Products ({activeProducts}/{totalProducts})
              </div>
            </button>

            <button
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 relative z-10 ${
                activeTab === "combos" ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("combos")}
            >
              <div className="flex items-center justify-center">
                <FiBox className="mr-2" />
                Combos ({activeCombos}/{totalCombos})
              </div>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        {activeTab === "products" ? (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Product"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={sectionFilter}
                    onChange={(e) => setSectionFilter(e.target.value)}
                  >
                    <option value="all">--Select Section--</option>
                    {sections.map((section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FiFilter className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">--Select Category--</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FiFilter className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={subCategoryFilter}
                    onChange={(e) => setSubCategoryFilter(e.target.value)}
                    disabled={categoryFilter === "all"}
                  >
                    <option value="all">--Select Sub Category--</option>
                    {subCategories.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FiFilter className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">--All Status--</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FiFilter className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Combo"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                    value={searchCombo}
                    onChange={(e) => setSearchCombo(e.target.value)}
                  />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={comboStatusFilter}
                  onChange={(e) => setComboStatusFilter(e.target.value)}
                >
                  <option value="all">--All Status--</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiFilter className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Table */}
        {activeTab === "products" ? (
          <ProductTable
            key={refreshKey}
            data={filteredProducts}
            isLoading={status === "loading"}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onUpdatePrice={handleUpdatePrice}
            onUpdateImage={handleUpdateImage}
            onToggleStatus={handleToggleStatus}
            onAddPricing={handleAddPricing}
            onUpdatePricing={handleUpdatePricing}
            onDeletePricing={handleDeletePricing}
            onTogglePricingStatus={handleTogglePricingStatus}
          />
        ) : (
          <ProductComboTable
            key={refreshKey}
            data={filteredCombos}
            isLoading={comboStatus === "loading"}
            onEdit={handleEditCombo}
            onDelete={handleDeleteCombo}
            onToggleStatus={handleToggleComboStatus}
          />
        )}

        {/* Modals */}
        {showAddModal && (
          <AddProductModal
            onClose={() => {
              setShowAddModal(false);
              setRefreshKey((prev) => prev + 1);
            }}
          />
        )}
        {showAddComboModal && (
          <AddComboModal
            onClose={() => {
              setShowAddComboModal(false);
              setRefreshKey((prev) => prev + 1);
            }}
          />
        )}
        {showEditModal && selectedProduct && (
          <EditProductModal
            product={selectedProduct}
            onClose={handleEditModalClose}
          />
        )}
        {showEditComboModal && selectedCombo && (
          <EditComboModal
            combo={selectedCombo}
            onClose={handleEditComboModalClose}
          />
        )}
        {showDeleteModal && selectedProduct && (
          <DeleteProductModal
            product={selectedProduct}
            onClose={() => {
              setSelectedProduct(null);
              setShowDeleteModal(false);
              setRefreshKey((prev) => prev + 1);
            }}
          />
        )}
        {showDeleteComboModal && selectedCombo && (
          <DeleteComboModal
            combo={selectedCombo}
            onClose={() => {
              setSelectedCombo(null);
              setShowDeleteComboModal(false);
              setRefreshKey((prev) => prev + 1);
            }}
          />
        )}
      </div>
    </div>
  );
}
