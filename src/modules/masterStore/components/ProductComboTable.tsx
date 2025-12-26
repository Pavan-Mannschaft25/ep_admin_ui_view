// // // // // // src/modules/masterStore/components/ProductComboTable.tsx
// // // // // import React, { useState } from "react";
// // // // // import { ProductCombo, ComboProduct } from "../comboSlice";
// // // // // import { showConfirmationModal } from "../../../store/slices/uiSlice";
// // // // // import { useAppDispatch } from "../../../store/hooks";
// // // // // import {
// // // // //   FiEdit2,
// // // // //   FiTrash2,
// // // // //   FiPackage,
// // // // //   FiActivity,
// // // // //   FiTrendingUp,
// // // // //   FiTrendingDown,
// // // // //   FiMinus,
// // // // //   FiChevronDown,
// // // // //   FiChevronUp,
// // // // //   FiToggleLeft,
// // // // //   FiToggleRight,
// // // // // } from "react-icons/fi";
// // // // // import { FaIndianRupeeSign } from "react-icons/fa6";
// // // // // import Pagination from "../../../components/common/Pagination";

// // // // // interface ProductComboTableProps {
// // // // //   data: ProductCombo[];
// // // // //   isLoading: boolean;
// // // // //   onEdit: (combo: ProductCombo) => void;
// // // // //   onDelete: (combo: ProductCombo) => void;
// // // // //   onToggleStatus: (combo: ProductCombo) => void;
// // // // // }

// // // // // export default function ProductComboTable({
// // // // //   data,
// // // // //   isLoading,
// // // // //   onEdit,
// // // // //   onDelete,
// // // // //   onToggleStatus,
// // // // // }: ProductComboTableProps) {
// // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // //   const itemsPerPage = 10;
// // // // //   const [expandedCombo, setExpandedCombo] = useState<string | null>(null);
// // // // //   const dispatch = useAppDispatch();

// // // // //   // Calculate pagination values
// // // // //   const totalItems = data.length;
// // // // //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// // // // //   // Get current page items
// // // // //   const indexOfLastItem = currentPage * itemsPerPage;
// // // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // // //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

// // // // //   const handlePageChange = (page: number) => {
// // // // //     setCurrentPage(page);
// // // // //   };

// // // // //   const handleToggleStatusWithConfirm = (combo: ProductCombo) => {
// // // // //     const newStatus = combo.status === "active" ? "inactive" : "active";
// // // // //     const actionText = newStatus === "active" ? "activate" : "deactivate";

// // // // //     dispatch(
// // // // //       showConfirmationModal({
// // // // //         title: "Confirm Status Change",
// // // // //         message: `Are you sure you want to ${actionText} combo "${combo.name}"?`,
// // // // //         confirmButtonText: `Yes, ${actionText}`,
// // // // //         onConfirm: () => {
// // // // //           onToggleStatus(combo);
// // // // //         },
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   const toggleComboExpansion = (comboId: string) => {
// // // // //     setExpandedCombo(expandedCombo === comboId ? null : comboId);
// // // // //   };

// // // // //   const calculateTotalPrice = (combo: ProductCombo) => {
// // // // //     return combo.price * (1 - combo.discountPercentage / 100);
// // // // //   };

// // // // //   const calculateOriginalPrice = (combo: ProductCombo) => {
// // // // //     return combo.products.reduce((total, item) => {
// // // // //       const productPrice =
// // // // //         item.product.pricings.length > 0 ? item.product.pricings[0].price : 0;
// // // // //       return total + productPrice * item.quantity;
// // // // //     }, 0);
// // // // //   };

// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
// // // // //         <div className="flex flex-col items-center">
// // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
// // // // //           <p className="mt-4 text-gray-600">Loading combos...</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // // // //       <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
// // // // //         <div className="flex justify-between items-center">
// // // // //           <h2 className="text-lg font-semibold text-gray-800">
// // // // //             Product Combos ({data.length})
// // // // //           </h2>
// // // // //           <div className="flex items-center space-x-2 text-sm text-gray-600">
// // // // //             <span>
// // // // //               Showing {indexOfFirstItem + 1}-
// // // // //               {Math.min(indexOfLastItem, totalItems)} of {totalItems}
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="overflow-x-auto">
// // // // //         <table className="min-w-full divide-y divide-gray-200">
// // // // //           <thead className="bg-gray-50">
// // // // //             <tr>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Id
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Combo Image
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Name
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Price
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Products
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Status
// // // // //               </th>
// // // // //               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                 Actions
// // // // //               </th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody className="bg-white divide-y divide-gray-200">
// // // // //             {data.length === 0 ? (
// // // // //               <tr>
// // // // //                 <td colSpan={7} className="px-6 py-16 text-center">
// // // // //                   <div className="flex flex-col items-center">
// // // // //                     <div className="bg-gray-100 p-4 rounded-full mb-4">
// // // // //                       <FiPackage className="h-12 w-12 text-gray-400" />
// // // // //                     </div>
// // // // //                     <h3 className="mt-2 text-lg font-medium text-gray-900">
// // // // //                       No combos found
// // // // //                     </h3>
// // // // //                     <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
// // // // //                       Get started by adding a new combo
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ) : (
// // // // //               currentItems.map((combo) => (
// // // // //                 <React.Fragment key={combo.id}>
// // // // //                   <tr className="hover:bg-gray-50 transition-colors duration-150">
// // // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // // //                       <div className="text-sm font-medium text-gray-900">
// // // // //                         {combo.id.split("-")[1]}
// // // // //                       </div>
// // // // //                     </td>
// // // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // // //                       <img
// // // // //                         src={combo.image}
// // // // //                         alt={combo.name}
// // // // //                         className="h-16 w-16 object-cover rounded-lg"
// // // // //                       />
// // // // //                     </td>
// // // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // // //                       <div className="text-sm font-medium text-gray-900">
// // // // //                         {combo.name}
// // // // //                       </div>
// // // // //                       <div className="text-xs text-gray-500 pt-1">
// // // // //                         {combo.description.length > 50
// // // // //                           ? `${combo.description.substring(0, 50)}...`
// // // // //                           : combo.description}
// // // // //                       </div>
// // // // //                     </td>
// // // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // // //                       <div className="flex flex-col">
// // // // //                         <div className="flex items-center">
// // // // //                           <span className="text-sm font-medium text-gray-900">
// // // // //                             ₹{calculateTotalPrice(combo).toFixed(2)}
// // // // //                           </span>
// // // // //                           {combo.discountPercentage > 0 && (
// // // // //                             <span className="ml-2 px-1 py-0.5 text-xs text-emerald-600 font-medium bg-emerald-50 rounded">
// // // // //                               {combo.discountPercentage}% off
// // // // //                             </span>
// // // // //                           )}
// // // // //                         </div>
// // // // //                         {combo.discountPercentage > 0 && (
// // // // //                           <div className="text-xs text-gray-500 line-through">
// // // // //                             ₹{combo.price.toFixed(2)}
// // // // //                           </div>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     </td>
// // // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // // //                       <div className="flex items-center">
// // // // //                         <span className="text-sm text-gray-900 mr-2">
// // // // //                           {combo.products.length} products
// // // // //                         </span>
// // // // //                         <button
// // // // //                           onClick={() => toggleComboExpansion(combo.id)}
// // // // //                           className="text-emerald-600 hover:text-emerald-800"
// // // // //                         >
// // // // //                           {expandedCombo === combo.id ? (
// // // // //                             <FiChevronUp className="h-5 w-5" />
// // // // //                           ) : (
// // // // //                             <FiChevronDown className="h-5 w-5" />
// // // // //                           )}
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // // //                       <div className="flex items-center">
// // // // //                         <button
// // // // //                           onClick={() => handleToggleStatusWithConfirm(combo)}
// // // // //                           className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
// // // // //                           style={{
// // // // //                             backgroundColor:
// // // // //                               combo.status === "active" ? "#10b981" : "#ef4444",
// // // // //                           }}
// // // // //                         >
// // // // //                           <span
// // // // //                             className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
// // // // //                             style={{
// // // // //                               transform:
// // // // //                                 combo.status === "active"
// // // // //                                   ? "translateX(1.25rem)"
// // // // //                                   : "translateX(0.25rem)",
// // // // //                             }}
// // // // //                           />
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // // //                       <div className="flex justify-end space-x-2">
// // // // //                         <button
// // // // //                           onClick={() => onEdit(combo)}
// // // // //                           className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
// // // // //                           title="Edit"
// // // // //                         >
// // // // //                           <FiEdit2 className="text-lg" />
// // // // //                         </button>
// // // // //                         <button
// // // // //                           onClick={() => onDelete(combo)}
// // // // //                           className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
// // // // //                           title="Delete"
// // // // //                         >
// // // // //                           <FiTrash2 className="text-lg" />
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                   {expandedCombo === combo.id && (
// // // // //                     <tr>
// // // // //                       <td colSpan={7} className="px-6 py-4 bg-gray-50">
// // // // //                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //                           {combo.products.map((item) => (
// // // // //                             <div
// // // // //                               key={item.id}
// // // // //                               className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
// // // // //                             >
// // // // //                               <img
// // // // //                                 src={item.product.image}
// // // // //                                 alt={item.product.name}
// // // // //                                 className="h-12 w-12 object-cover rounded"
// // // // //                               />
// // // // //                               <div className="flex-1">
// // // // //                                 <div className="text-sm font-medium text-gray-900">
// // // // //                                   {item.product.name}
// // // // //                                 </div>
// // // // //                                 <div className="text-xs text-gray-500">
// // // // //                                   {item.product.category} /{" "}
// // // // //                                   {item.product.subCategory}
// // // // //                                 </div>
// // // // //                                 <div className="flex items-center mt-1">
// // // // //                                   <span className="text-xs text-gray-500 mr-1">
// // // // //                                     Qty: {item.quantity}
// // // // //                                   </span>
// // // // //                                   <span className="text-xs text-gray-500">
// // // // //                                     Price: ₹
// // // // //                                     {item.product.pricings.length > 0
// // // // //                                       ? (
// // // // //                                           item.product.pricings[0].price *
// // // // //                                           item.quantity
// // // // //                                         ).toFixed(2)
// // // // //                                       : "0.00"}
// // // // //                                   </span>
// // // // //                                 </div>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           ))}
// // // // //                         </div>
// // // // //                         <div className="mt-4 pt-4 border-t border-gray-200">
// // // // //                           <div className="flex justify-between items-center">
// // // // //                             <div className="text-sm text-gray-600">
// // // // //                               Original Price: ₹
// // // // //                               {calculateOriginalPrice(combo).toFixed(2)}
// // // // //                             </div>
// // // // //                             <div className="text-sm text-gray-600">
// // // // //                               You Save: ₹
// // // // //                               {(
// // // // //                                 calculateOriginalPrice(combo) -
// // // // //                                 calculateTotalPrice(combo)
// // // // //                               ).toFixed(2)}
// // // // //                             </div>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   )}
// // // // //                 </React.Fragment>
// // // // //               ))
// // // // //             )}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>

// // // // //       {/* Pagination */}
// // // // //       {totalPages > 1 && (
// // // // //         <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
// // // // //           <Pagination
// // // // //             currentPage={currentPage}
// // // // //             totalPages={totalPages}
// // // // //             onPageChange={handlePageChange}
// // // // //             totalItems={totalItems}
// // // // //             perPage={itemsPerPage}
// // // // //           />
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useState } from "react";
// // // // import { ProductCombo, ComboProduct } from "../comboSlice";
// // // // import { showConfirmationModal } from "../../../store/slices/uiSlice";
// // // // import { useAppDispatch } from "../../../store/hooks";
// // // // import {
// // // //   FiEdit2,
// // // //   FiTrash2,
// // // //   FiPackage,
// // // //   FiActivity,
// // // //   FiTrendingUp,
// // // //   FiTrendingDown,
// // // //   FiMinus,
// // // //   FiChevronDown,
// // // //   FiChevronUp,
// // // //   FiToggleLeft,
// // // //   FiToggleRight,
// // // //   FiEye,
// // // //   FiEyeOff,
// // // // } from "react-icons/fi";
// // // // import { FaIndianRupeeSign } from "react-icons/fa6";
// // // // import Pagination from "../../../components/common/Pagination";

// // // // interface ProductComboTableProps {
// // // //   data: ProductCombo[];
// // // //   isLoading: boolean;
// // // //   onEdit: (combo: ProductCombo) => void;
// // // //   onDelete: (combo: ProductCombo) => void;
// // // //   onToggleStatus: (combo: ProductCombo) => void;
// // // // }

// // // // export default function ProductComboTable({
// // // //   data,
// // // //   isLoading,
// // // //   onEdit,
// // // //   onDelete,
// // // //   onToggleStatus,
// // // // }: ProductComboTableProps) {
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const itemsPerPage = 10;
// // // //   const [expandedCombo, setExpandedCombo] = useState<string | null>(null);
// // // //   const [selectedImage, setSelectedImage] = useState<{
// // // //     src: string;
// // // //     alt: string;
// // // //   } | null>(null);
// // // //   const dispatch = useAppDispatch();

// // // //   // Calculate pagination values
// // // //   const totalItems = data.length;
// // // //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// // // //   // Get current page items
// // // //   const indexOfLastItem = currentPage * itemsPerPage;
// // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

// // // //   const handlePageChange = (page: number) => {
// // // //     setCurrentPage(page);
// // // //   };

// // // //   const handleToggleStatusWithConfirm = (combo: ProductCombo) => {
// // // //     const newStatus = combo.status === "active" ? "inactive" : "active";
// // // //     const actionText = newStatus === "active" ? "activate" : "deactivate";

// // // //     dispatch(
// // // //       showConfirmationModal({
// // // //         title: "Confirm Status Change",
// // // //         message: `Are you sure you want to ${actionText} combo "${combo.name}"?`,
// // // //         confirmButtonText: `Yes, ${actionText}`,
// // // //         onConfirm: () => {
// // // //           onToggleStatus(combo);
// // // //         },
// // // //       })
// // // //     );
// // // //   };

// // // //   const toggleComboExpansion = (comboId: string) => {
// // // //     setExpandedCombo(expandedCombo === comboId ? null : comboId);
// // // //   };

// // // //   const calculateTotalPrice = (combo: ProductCombo) => {
// // // //     return combo.price * (1 - combo.discountPercentage / 100);
// // // //   };

// // // //   const calculateOriginalPrice = (combo: ProductCombo) => {
// // // //     return combo.products.reduce((total, item) => {
// // // //       const productPrice =
// // // //         item.product.pricings.length > 0 ? item.product.pricings[0].price : 0;
// // // //       return total + productPrice * item.quantity;
// // // //     }, 0);
// // // //   };

// // // //   const openImageModal = (src: string, alt: string) => {
// // // //     setSelectedImage({ src, alt });
// // // //   };

// // // //   const closeImageModal = () => {
// // // //     setSelectedImage(null);
// // // //   };

// // // //   if (isLoading) {
// // // //     return (
// // // //       <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
// // // //         <div className="flex flex-col items-center">
// // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
// // // //           <p className="mt-4 text-gray-600">Loading combos...</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // // //         <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
// // // //           <div className="flex justify-between items-center">
// // // //             <h2 className="text-lg font-semibold text-gray-800">
// // // //               Product Combos ({data.length})
// // // //             </h2>
// // // //             <div className="flex items-center space-x-2 text-sm text-gray-600">
// // // //               <span>
// // // //                 Showing {indexOfFirstItem + 1}-
// // // //                 {Math.min(indexOfLastItem, totalItems)} of {totalItems}
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="overflow-x-auto">
// // // //           <table className="min-w-full divide-y divide-gray-200">
// // // //             <thead className="bg-gray-50">
// // // //               <tr>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Id
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Images
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Name
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Price
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Products
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Status
// // // //                 </th>
// // // //                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                   Actions
// // // //                 </th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody className="bg-white divide-y divide-gray-200">
// // // //               {data.length === 0 ? (
// // // //                 <tr>
// // // //                   <td colSpan={7} className="px-6 py-16 text-center">
// // // //                     <div className="flex flex-col items-center">
// // // //                       <div className="bg-gray-100 p-4 rounded-full mb-4">
// // // //                         <FiPackage className="h-12 w-12 text-gray-400" />
// // // //                       </div>
// // // //                       <h3 className="mt-2 text-lg font-medium text-gray-900">
// // // //                         No combos found
// // // //                       </h3>
// // // //                       <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
// // // //                         Get started by adding a new combo
// // // //                       </p>
// // // //                     </div>
// // // //                   </td>
// // // //                 </tr>
// // // //               ) : (
// // // //                 currentItems.map((combo) => (
// // // //                   <React.Fragment key={combo.id}>
// // // //                     <tr className="hover:bg-gray-50 transition-colors duration-150">
// // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // //                         <div className="text-sm font-medium text-gray-900">
// // // //                           {combo.id.split("-")[1]}
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // //                         <div className="flex space-x-1">
// // // //                           <div className="relative group">
// // // //                             <img
// // // //                               src={combo.image}
// // // //                               alt={`${combo.name} - Main`}
// // // //                               className="h-16 w-16 object-cover rounded-lg cursor-pointer"
// // // //                               onClick={() =>
// // // //                                 openImageModal(
// // // //                                   combo.image,
// // // //                                   `${combo.name} - Main`
// // // //                                 )
// // // //                               }
// // // //                             />
// // // //                             {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-200 flex items-center justify-center">
// // // //                               <FiEye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
// // // //                             </div> */}
// // // //                           </div>
// // // //                           <div className="relative group">
// // // //                             <img
// // // //                               src={combo.productImage}
// // // //                               alt={`${combo.name} - Product`}
// // // //                               className="h-16 w-16 object-cover rounded-lg cursor-pointer border border-gray-200"
// // // //                               onClick={() =>
// // // //                                 openImageModal(
// // // //                                   combo.productImage,
// // // //                                   `${combo.name} - Product`
// // // //                                 )
// // // //                               }
// // // //                             />
// // // //                             {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-200 flex items-center justify-center">
// // // //                               <FiEye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
// // // //                             </div> */}
// // // //                             <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
// // // //                               P
// // // //                             </div>
// // // //                           </div>
// // // //                           <div className="relative group">
// // // //                             <img
// // // //                               src={combo.nxImage}
// // // //                               alt={`${combo.name} - NX`}
// // // //                               className="h-16 w-16 object-cover rounded-lg cursor-pointer border border-gray-200"
// // // //                               onClick={() =>
// // // //                                 openImageModal(
// // // //                                   combo.nxImage,
// // // //                                   `${combo.name} - NX`
// // // //                                 )
// // // //                               }
// // // //                             />
// // // //                             {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-200 flex items-center justify-center">
// // // //                               <FiEye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
// // // //                             </div> */}
// // // //                             <div className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
// // // //                               NX
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // //                         <div className="text-sm font-medium text-gray-900">
// // // //                           {combo.name}
// // // //                         </div>
// // // //                         <div className="text-xs text-gray-500 pt-1">
// // // //                           {combo.description.length > 50
// // // //                             ? `${combo.description.substring(0, 50)}...`
// // // //                             : combo.description}
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // //                         <div className="flex flex-col">
// // // //                           <div className="flex items-center">
// // // //                             <span className="text-sm font-medium text-gray-900">
// // // //                               ₹{calculateTotalPrice(combo).toFixed(2)}
// // // //                             </span>
// // // //                             {combo.discountPercentage > 0 && (
// // // //                               <span className="ml-2 px-1 py-0.5 text-xs text-emerald-600 font-medium bg-emerald-50 rounded">
// // // //                                 {combo.discountPercentage}% off
// // // //                               </span>
// // // //                             )}
// // // //                           </div>
// // // //                           {combo.discountPercentage > 0 && (
// // // //                             <div className="text-xs text-gray-500 line-through">
// // // //                               ₹{combo.price.toFixed(2)}
// // // //                             </div>
// // // //                           )}
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // //                         <div className="flex items-center">
// // // //                           <span className="text-sm text-gray-900 mr-2">
// // // //                             {combo.products.length} products
// // // //                           </span>
// // // //                           <button
// // // //                             onClick={() => toggleComboExpansion(combo.id)}
// // // //                             className="text-emerald-600 hover:text-emerald-800"
// // // //                           >
// // // //                             {expandedCombo === combo.id ? (
// // // //                               <FiChevronUp className="h-5 w-5" />
// // // //                             ) : (
// // // //                               <FiChevronDown className="h-5 w-5" />
// // // //                             )}
// // // //                           </button>
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // //                         <div className="flex items-center">
// // // //                           <button
// // // //                             onClick={() => handleToggleStatusWithConfirm(combo)}
// // // //                             className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
// // // //                             style={{
// // // //                               backgroundColor:
// // // //                                 combo.status === "active"
// // // //                                   ? "#10b981"
// // // //                                   : "#ef4444",
// // // //                             }}
// // // //                           >
// // // //                             <span
// // // //                               className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
// // // //                               style={{
// // // //                                 transform:
// // // //                                   combo.status === "active"
// // // //                                     ? "translateX(1.25rem)"
// // // //                                     : "translateX(0.25rem)",
// // // //                               }}
// // // //                             />
// // // //                           </button>
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // //                         <div className="flex justify-end space-x-2">
// // // //                           <button
// // // //                             onClick={() => onEdit(combo)}
// // // //                             className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
// // // //                             title="Edit"
// // // //                           >
// // // //                             <FiEdit2 className="text-lg" />
// // // //                           </button>
// // // //                           <button
// // // //                             onClick={() => onDelete(combo)}
// // // //                             className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
// // // //                             title="Delete"
// // // //                           >
// // // //                             <FiTrash2 className="text-lg" />
// // // //                           </button>
// // // //                         </div>
// // // //                       </td>
// // // //                     </tr>
// // // //                     {expandedCombo === combo.id && (
// // // //                       <tr>
// // // //                         <td colSpan={7} className="px-6 py-4 bg-gray-50">
// // // //                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //                             {combo.products.map((item) => (
// // // //                               <div
// // // //                                 key={item.id}
// // // //                                 className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
// // // //                               >
// // // //                                 <div className="flex space-x-1">
// // // //                                   <div className="relative group">
// // // //                                     <img
// // // //                                       src={item.product.image}
// // // //                                       alt={item.product.name}
// // // //                                       className="h-12 w-12 object-cover rounded cursor-pointer"
// // // //                                       onClick={() =>
// // // //                                         openImageModal(
// // // //                                           item.product.image,
// // // //                                           item.product.name
// // // //                                         )
// // // //                                       }
// // // //                                     />
// // // //                                     {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded transition-all duration-200 flex items-center justify-center">
// // // //                                       <FiEye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
// // // //                                     </div> */}
// // // //                                   </div>
// // // //                                   <div className="relative group">
// // // //                                     <img
// // // //                                       src={item.product.nxImage}
// // // //                                       alt={`${item.product.name} (NX)`}
// // // //                                       className="h-12 w-12 object-cover rounded cursor-pointer border border-gray-200"
// // // //                                       onClick={() =>
// // // //                                         openImageModal(
// // // //                                           item.product.nxImage,
// // // //                                           `${item.product.name} (NX)`
// // // //                                         )
// // // //                                       }
// // // //                                     />
// // // //                                     {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded transition-all duration-200 flex items-center justify-center">
// // // //                                       <FiEye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
// // // //                                     </div> */}
// // // //                                     <div className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
// // // //                                       NX
// // // //                                     </div>
// // // //                                   </div>
// // // //                                 </div>
// // // //                                 <div className="flex-1">
// // // //                                   <div className="text-sm font-medium text-gray-900">
// // // //                                     {item.product.name}
// // // //                                   </div>
// // // //                                   <div className="text-xs text-gray-500">
// // // //                                     {item.product.category} /{" "}
// // // //                                     {item.product.subCategory}
// // // //                                   </div>
// // // //                                   <div className="flex items-center mt-1">
// // // //                                     <span className="text-xs text-gray-500 mr-1">
// // // //                                       Qty: {item.quantity}
// // // //                                     </span>
// // // //                                     <span className="text-xs text-gray-500">
// // // //                                       Price: ₹
// // // //                                       {item.product.pricings.length > 0
// // // //                                         ? (
// // // //                                             item.product.pricings[0].price *
// // // //                                             item.quantity
// // // //                                           ).toFixed(2)
// // // //                                         : "0.00"}
// // // //                                     </span>
// // // //                                   </div>
// // // //                                 </div>
// // // //                               </div>
// // // //                             ))}
// // // //                           </div>
// // // //                           <div className="mt-4 pt-4 border-t border-gray-200">
// // // //                             <div className="flex justify-between items-center">
// // // //                               <div className="text-sm text-gray-600">
// // // //                                 Original Price: ₹
// // // //                                 {calculateOriginalPrice(combo).toFixed(2)}
// // // //                               </div>
// // // //                               <div className="text-sm text-gray-600">
// // // //                                 You Save: ₹
// // // //                                 {(
// // // //                                   calculateOriginalPrice(combo) -
// // // //                                   calculateTotalPrice(combo)
// // // //                                 ).toFixed(2)}
// // // //                               </div>
// // // //                             </div>
// // // //                           </div>
// // // //                         </td>
// // // //                       </tr>
// // // //                     )}
// // // //                   </React.Fragment>
// // // //                 ))
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Pagination */}
// // // //         {totalPages > 1 && (
// // // //           <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
// // // //             <Pagination
// // // //               currentPage={currentPage}
// // // //               totalPages={totalPages}
// // // //               onPageChange={handlePageChange}
// // // //               totalItems={totalItems}
// // // //               perPage={itemsPerPage}
// // // //             />
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Image Modal */}
// // // //       {selectedImage && (
// // // //         <div
// // // //           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
// // // //           onClick={closeImageModal}
// // // //         >
// // // //           <div className="relative max-w-4xl max-h-screen p-4">
// // // //             <img
// // // //               src={selectedImage.src}
// // // //               alt={selectedImage.alt}
// // // //               className="max-w-full max-h-full object-contain"
// // // //             />
// // // //             <button
// // // //               className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
// // // //               onClick={closeImageModal}
// // // //             >
// // // //               <FiEyeOff className="h-5 w-5 text-gray-700" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }

// // // import React, { useState } from "react";
// // // import { ProductCombo, ComboProduct } from "../comboSlice";
// // // import { showConfirmationModal } from "../../../store/slices/uiSlice";
// // // import { useAppDispatch } from "../../../store/hooks";
// // // import {
// // //   FiEdit2,
// // //   FiTrash2,
// // //   FiPackage,
// // //   FiActivity,
// // //   FiTrendingUp,
// // //   FiTrendingDown,
// // //   FiMinus,
// // //   FiChevronDown,
// // //   FiChevronUp,
// // //   FiPlus,
// // //   FiToggleLeft,
// // //   FiToggleRight,
// // //   FiEye,
// // //   FiEyeOff,
// // // } from "react-icons/fi";
// // // import { FaIndianRupeeSign } from "react-icons/fa6";
// // // import Pagination from "../../../components/common/Pagination";
// // // import ImageUpload from "../../../components/common/ImageUpload";
// // // import AddPriceModal from "./AddPriceModal";
// // // import EditPriceModal from "./EditPriceModal";

// // // interface ProductComboTableProps {
// // //   data: ProductCombo[];
// // //   isLoading: boolean;
// // //   onEdit: (combo: ProductCombo) => void;
// // //   onDelete: (combo: ProductCombo) => void;
// // //   onToggleStatus: (combo: ProductCombo) => void;
// // //   onUpdatePrice: (combo: ProductCombo, price: number) => void;
// // //   onUpdateImage?: (
// // //     combo: ProductCombo,
// // //     imageUrl: string,
// // //     imageType: "product" | "nx"
// // //   ) => void;
// // //   onAddPricing: (comboId: string, pricing: Omit<ProductPricing, "id">) => void;
// // //   onUpdatePricing: (
// // //     comboId: string,
// // //     pricingId: string,
// // //     pricing: ProductPricing
// // //   ) => void;
// // //   onDeletePricing: (comboId: string, pricingId: string) => void;
// // //   onTogglePricingStatus: (comboId: string, pricingId: string) => void;
// // // }

// // // export default function ProductComboTable({
// // //   data,
// // //   isLoading,
// // //   onEdit,
// // //   onDelete,
// // //   onUpdatePrice,
// // //   onUpdateImage,
// // //   onToggleStatus,
// // //   onAddPricing,
// // //   onUpdatePricing,
// // //   onDeletePricing,
// // //   onTogglePricingStatus,
// // // }: ProductComboTableProps) {
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 10;
// // //   const [priceInput, setPriceInput] = useState<{ [key: string]: string }>({});
// // //   const [expandedCombo, setExpandedCombo] = useState<string | null>(null);
// // //   const [showAddPriceModal, setShowAddPriceModal] = useState(false);
// // //   const [showEditPriceModal, setShowEditPriceModal] = useState(false);
// // //   const [selectedCombo, setSelectedCombo] = useState<ProductCombo | null>(null);
// // //   const [selectedPricing, setSelectedPricing] = useState<ProductPricing | null>(
// // //     null
// // //   );
// // //   const [expandedPricing, setExpandedPricing] = useState<{
// // //     [key: string]: boolean;
// // //   }>({});
// // //   const [selectedImage, setSelectedImage] = useState<{
// // //     src: string;
// // //     alt: string;
// // //   } | null>(null);
// // //   const dispatch = useAppDispatch();

// // //   // Calculate pagination values
// // //   const totalItems = data.length;
// // //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// // //   // Get current page items
// // //   const indexOfLastItem = currentPage * itemsPerPage;
// // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

// // //   // Helper function to get active pricing for a combo
// // //   const getActivePricing = (combo: ProductCombo) => {
// // //     return combo.products.find((item) => item.pricing?.status === true) || null;
// // //   };

// // //   const togglePricingExpansion = (comboId: string) => {
// // //     setExpandedPricing((prev) => ({
// // //       ...prev,
// // //       [comboId]: !prev[comboId],
// // //     }));
// // //   };

// // //   const handlePageChange = (page: number) => {
// // //     setCurrentPage(page);
// // //   };

// // //   const handlePriceChange = (comboId: string, value: string) => {
// // //     setPriceInput({ ...priceInput, [comboId]: value });
// // //   };

// // //   const handleToggleStatusWithConfirm = (combo: ProductCombo) => {
// // //     const newStatus = combo.status === "active" ? "inactive" : "active";
// // //     const actionText = newStatus === "active" ? "activate" : "deactivate";

// // //     dispatch(
// // //       showConfirmationModal({
// // //         title: "Confirm Status Change",
// // //         message: `Are you sure you want to ${actionText} combo "${combo.name}"?`,
// // //         confirmButtonText: `Yes, ${actionText}`,
// // //         onConfirm: () => {
// // //           onToggleStatus(combo);
// // //         },
// // //       })
// // //     );
// // //   };

// // //   const handlePriceUpdate = (combo: ProductCombo) => {
// // //     const newPrice = parseFloat(priceInput[combo.id] || "0");

// // //     if (!isNaN(newPrice) && newPrice >= 0) {
// // //       onUpdatePrice(combo, newPrice);
// // //       setPriceInput({ ...priceInput, [combo.id]: "" });
// // //     }
// // //   };

// // //   const handleComboImageChange = (combo: ProductCombo, imageUrl: string) => {
// // //     if (onUpdateImage) {
// // //       onUpdateImage(combo, imageUrl, "product");
// // //     }
// // //   };

// // //   const handleNxImageChange = (combo: ProductCombo, imageUrl: string) => {
// // //     if (onUpdateImage) {
// // //       onUpdateImage(combo, imageUrl, "nx");
// // //     }
// // //   };

// // //   const toggleComboExpansion = (comboId: string) => {
// // //     setExpandedCombo(expandedCombo === comboId ? null : comboId);
// // //   };

// // //   const openAddPriceModal = (combo: ProductCombo) => {
// // //     setSelectedCombo(combo);
// // //     setShowAddPriceModal(true);
// // //   };

// // //   const openEditPriceModal = (combo: ProductCombo, pricing: ProductPricing) => {
// // //     setSelectedCombo(combo);
// // //     setSelectedPricing(pricing);
// // //     setShowEditPriceModal(true);
// // //   };

// // //   const handleAddPricing = (newPricing: Omit<ProductPricing, "id">) => {
// // //     if (selectedCombo) {
// // //       onAddPricing(selectedCombo.id, newPricing);
// // //       setShowAddPriceModal(false);
// // //       setSelectedCombo(null);
// // //     }
// // //   };

// // //   const handleEditPricing = (updatedPricing: ProductPricing) => {
// // //     if (selectedCombo && selectedPricing) {
// // //       onUpdatePricing(selectedCombo.id, selectedPricing.id, updatedPricing);
// // //       setShowEditPriceModal(false);
// // //       setSelectedCombo(null);
// // //       setSelectedPricing(null);
// // //     }
// // //   };

// // //   const handleDeletePricing = (comboId: string, pricingId: string) => {
// // //     dispatch(
// // //       showConfirmationModal({
// // //         title: "Confirm Delete",
// // //         message: "Are you sure you want to delete this pricing?",
// // //         confirmButtonText: "Delete",
// // //         onConfirm: () => {
// // //           onDeletePricing(comboId, pricingId);
// // //         },
// // //       })
// // //     );
// // //   };

// // //   const getNutritionIcon = (type: string, value: number) => {
// // //     if (type === "calories") {
// // //       if (value > 200) return <FiTrendingUp className="text-red-500" />;
// // //       if (value < 100) return <FiTrendingDown className="text-green-500" />;
// // //       return <FiMinus className="text-yellow-500" />;
// // //     }
// // //     if (type === "fat") {
// // //       if (value > 15) return <FiTrendingUp className="text-red-500" />;
// // //       if (value < 5) return <FiTrendingDown className="text-green-500" />;
// // //       return <FiMinus className="text-yellow-500" />;
// // //     }
// // //     if (type === "carb") {
// // //       if (value > 30) return <FiTrendingUp className="text-red-500" />;
// // //       if (value < 10) return <FiTrendingDown className="text-green-500" />;
// // //       return <FiMinus className="text-yellow-500" />;
// // //     }
// // //     if (type === "protein") {
// // //       if (value > 20) return <FiTrendingUp className="text-green-500" />;
// // //       if (value < 5) return <FiTrendingDown className="text-yellow-500" />;
// // //       return <FiMinus className="text-yellow-500" />;
// // //     }
// // //     return <FiActivity className="text-gray-500" />;
// // //   };

// // //   const getStockStatus = (stocks: number) => {
// // //     if (stocks < 20)
// // //       return { color: "text-red-600", bg: "bg-red-100", label: "Low" };
// // //     if (stocks < 50)
// // //       return { color: "text-yellow-600", bg: "bg-yellow-100", label: "Medium" };
// // //     return { color: "text-green-600", bg: "bg-green-100", label: "High" };
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
// // //         <div className="flex flex-col items-center">
// // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
// // //           <p className="mt-4 text-gray-600">Loading combos...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <>
// // //       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // //         <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
// // //           <div className="flex justify-between items-center">
// // //             <h2 className="text-lg font-semibold text-gray-800">
// // //               Product Combos ({data.length})
// // //             </h2>
// // //             <div className="flex items-center space-x-2 text-sm text-gray-600">
// // //               <span>
// // //                 Showing {indexOfFirstItem + 1}-
// // //                 {Math.min(indexOfLastItem, totalItems)} of {totalItems}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full divide-y divide-gray-200">
// // //             <thead className="bg-gray-50">
// // //               <tr>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Id
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Combo Images
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Name
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Price Management
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Nutrition Index
// // //                 </th>
// // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Status
// // //                 </th>
// // //                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                   Actions
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="bg-white divide-y divide-gray-200">
// // //               {data.length === 0 ? (
// // //                 <tr>
// // //                   <td colSpan={7} className="px-6 py-16 text-center">
// // //                     <div className="flex flex-col items-center">
// // //                       <div className="bg-gray-100 p-4 rounded-full mb-4">
// // //                         <FiPackage className="h-12 w-12 text-gray-400" />
// // //                       </div>
// // //                       <h3 className="mt-2 text-lg font-medium text-gray-900">
// // //                         No combos found
// // //                       </h3>
// // //                       <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
// // //                         Get started by adding a new combo
// // //                       </p>
// // //                     </div>
// // //                   </td>
// // //                 </tr>
// // //               ) : (
// // //                 currentItems.map((combo) => {
// // //                   // const activePricing = getActivePricing(combo);
// // //                   return (
// // //                     <React.Fragment key={combo.id}>
// // //                       <tr className="hover:bg-gray-50 transition-colors duration-150">
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <div className="text-sm font-medium text-gray-900">
// // //                             {combo.id.split("-")[1]}
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <div className="flex space-x-4">
// // //                             <div className="flex flex-col items-center">
// // //                               <ImageUpload
// // //                                 initialImage={combo.image}
// // //                                 onImageChange={(imageUrl) =>
// // //                                   handleComboImageChange(combo, imageUrl)
// // //                                 }
// // //                                 size="sm"
// // //                               />
// // //                               <span className="text-xs text-gray-500 mt-1">
// // //                                 Main
// // //                               </span>
// // //                             </div>
// // //                             <div className="flex flex-col items-center">
// // //                               <ImageUpload
// // //                                 initialImage={combo.productImage}
// // //                                 onImageChange={(imageUrl) =>
// // //                                   handleComboImageChange(combo, imageUrl)
// // //                                 }
// // //                                 size="sm"
// // //                               />
// // //                               <span className="text-xs text-gray-500 mt-1">
// // //                                 Product
// // //                               </span>
// // //                             </div>
// // //                             <div className="flex flex-col items-center">
// // //                               <ImageUpload
// // //                                 initialImage={combo.nxImage}
// // //                                 onImageChange={(imageUrl) =>
// // //                                   handleNxImageChange(combo, imageUrl)
// // //                                 }
// // //                                 size="sm"
// // //                               />
// // //                               <span className="text-xs text-gray-500 mt-1">
// // //                                 NX
// // //                               </span>
// // //                             </div>
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <div className="text-sm font-medium text-gray-900">
// // //                             {combo.name}
// // //                           </div>
// // //                           <div className="text-xs text-gray-500 pt-2">
// // //                             <span className="inline-block mr-1 px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
// // //                               {combo.category}
// // //                             </span>
// // //                             <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
// // //                               {combo.subCategory}
// // //                             </span>
// // //                           </div>
// // //                           <div className="flex items-center pt-2">
// // //                             <div className="flex items-center">
// // //                               <span className="text-sm text-gray-900 mr-2">
// // //                                 Stock: {combo.stocks}
// // //                               </span>
// // //                               <span
// // //                                 className={`px-2 py-1 text-xs rounded-full ${
// // //                                   getStockStatus(combo.stocks).bg
// // //                                 } ${getStockStatus(combo.stocks).color}`}
// // //                               >
// // //                                 {getStockStatus(combo.stocks).label}
// // //                               </span>
// // //                             </div>
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-4 py-4 whitespace-nowrap">
// // //                           <div className="flex flex-col space-y-2">
// // //                             <div className="space-y-2">
// // //                               {combo.products.length > 0 && (
// // //                                 <>
// // //                                   {combo.products
// // //                                     .slice(
// // //                                       0,
// // //                                       expandedPricing[combo.id]
// // //                                         ? combo.products.length
// // //                                         : 1
// // //                                     )
// // //                                     .map((item) => (
// // //                                       <div
// // //                                         key={item.id}
// // //                                         className={`p-2 rounded border ${
// // //                                           item.pricing?.status
// // //                                             ? "bg-white border-gray-200"
// // //                                             : "bg-gray-50 border-gray-100"
// // //                                         }`}
// // //                                       >
// // //                                         <div className="flex justify-between items-center">
// // //                                           <div className="text-sm font-medium text-gray-800">
// // //                                             {item.product.name}
// // //                                           </div>

// // //                                           <div className="flex items-center">
// // //                                             <span className="text-sm text-gray-600">
// // //                                               {item.quantity}{" "}
// // //                                               {item.pricing?.uom}
// // //                                             </span>
// // //                                             <span className="text-sm text-gray-600">
// // //                                               ₹{item.pricing?.price}
// // //                                             </span>
// // //                                             {item.pricing?.offerPercentage >
// // //                                               0 && (
// // //                                               <span className="ml-1 px-1 py-0.5 text-xs text-emerald-600 font-medium bg-emerald-50 rounded">
// // //                                                 {item.pricing.offerPercentage}%
// // //                                               </span>
// // //                                             )}
// // //                                           </div>
// // //                                         </div>

// // //                                         <div className="flex justify-between text-xs text-gray-500 mt-0.5">
// // //                                           <span>
// // //                                             PP:₹{item.pricing?.purchasePrice}
// // //                                           </span>
// // //                                           <span>
// // //                                             AP:{item.pricing?.appPercentage}%
// // //                                           </span>
// // //                                           <span>
// // //                                             ASP:₹{item.pricing?.appSalePrice}
// // //                                           </span>
// // //                                         </div>
// // //                                       </div>
// // //                                     ))}

// // //                                   {combo.products.length > 1 && (
// // //                                     <button
// // //                                       onClick={() =>
// // //                                         togglePricingExpansion(combo.id)
// // //                                       }
// // //                                       className="flex items-center justify-center w-full py-1 text-xs text-emerald-600 hover:text-emerald-800 font-medium bg-emerald-50 hover:bg-emerald-100 rounded transition-colors"
// // //                                     >
// // //                                       {expandedPricing[combo.id] ? (
// // //                                         <>
// // //                                           <FiChevronUp className="mr-1" />
// // //                                           Show Less ({combo.products.length -
// // //                                             1}{" "}
// // //                                           more)
// // //                                         </>
// // //                                       ) : (
// // //                                         <>
// // //                                           <FiChevronDown className="mr-1" />
// // //                                           {combo.products.length - 1} more
// // //                                         </>
// // //                                       )}
// // //                                     </button>
// // //                                   )}
// // //                                 </>
// // //                               )}

// // //                               {combo.products.length === 0 && (
// // //                                 <div className="p-2 rounded border border-gray-200 bg-gray-50 text-center">
// // //                                   <p className="text-xs text-gray-500">
// // //                                     No products in this combo
// // //                                   </p>
// // //                                 </div>
// // //                               )}
// // //                             </div>

// // //                             <div className="flex items-center">
// // //                               <button
// // //                                 onClick={() => toggleComboExpansion(combo.id)}
// // //                                 className="flex items-center gap-2 mr-3 transition text-sm font-medium"
// // //                               >
// // //                                 {expandedCombo === combo.id ? (
// // //                                   <>
// // //                                     <FiChevronUp className="h-5 w-5 text-emerald-600" />
// // //                                     {/* <span className="text-emerald-600">
// // //                                       Configured
// // //                                     </span> */}
// // //                                   </>
// // //                                 ) : (
// // //                                   <>
// // //                                     <FiChevronDown className="h-5 w-5 text-rose-600" />
// // //                                     {/* <span className="text-rose-600">
// // //                                       Not Configured
// // //                                     </span> */}
// // //                                   </>
// // //                                 )}
// // //                               </button>

// // //                               <button
// // //                                 onClick={() => openAddPriceModal(combo)}
// // //                                 className="text-green-600 hover:text-green-900 mr-3"
// // //                               >
// // //                                 <FiPlus className="h-5 w-5" />
// // //                               </button>
// // //                               <span className="text-xs text-gray-500">
// // //                                 {combo.products.length} products
// // //                               </span>
// // //                             </div>
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <div className="grid grid-cols-2 gap-2 text-xs">
// // //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// // //                               {getNutritionIcon(
// // //                                 "calories",
// // //                                 combo.calories || 0
// // //                               )}
// // //                               <span className="ml-1">
// // //                                 Cal: {combo.calories}
// // //                               </span>
// // //                             </div>
// // //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// // //                               {getNutritionIcon("fat", combo.fat || 0)}
// // //                               <span className="ml-1">Fat: {combo.fat}g</span>
// // //                             </div>
// // //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// // //                               {getNutritionIcon("carb", combo.carb || 0)}
// // //                               <span className="ml-1">Carb: {combo.carb}g</span>
// // //                             </div>
// // //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// // //                               {getNutritionIcon("protein", combo.protein || 0)}
// // //                               <span className="ml-1">
// // //                                 Pro: {combo.protein}g
// // //                               </span>
// // //                             </div>
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <div className="flex items-center">
// // //                             <button
// // //                               onClick={() =>
// // //                                 handleToggleStatusWithConfirm(combo)
// // //                               }
// // //                               className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
// // //                               style={{
// // //                                 backgroundColor:
// // //                                   combo.status === "active"
// // //                                     ? "#10b981"
// // //                                     : "#ef4444",
// // //                               }}
// // //                             >
// // //                               <span
// // //                                 className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
// // //                                 style={{
// // //                                   transform:
// // //                                     combo.status === "active"
// // //                                       ? "translateX(1.25rem)"
// // //                                       : "translateX(0.25rem)",
// // //                                 }}
// // //                               />
// // //                             </button>
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // //                           <div className="flex justify-end space-x-2">
// // //                             <button
// // //                               onClick={() => onEdit(combo)}
// // //                               className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
// // //                               title="Edit"
// // //                             >
// // //                               <FiEdit2 className="text-lg" />
// // //                             </button>
// // //                             <button
// // //                               onClick={() => onDelete(combo)}
// // //                               className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
// // //                               title="Delete"
// // //                             >
// // //                               <FiTrash2 className="text-lg" />
// // //                             </button>
// // //                           </div>
// // //                         </td>
// // //                       </tr>
// // //                       {expandedCombo === combo.id && (
// // //                         <tr>
// // //                           <td colSpan={7} className="px-6 py-4 bg-gray-50">
// // //                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                               {combo.products.map((item) => (
// // //                                 <div
// // //                                   key={item.id}
// // //                                   className={`p-4 rounded-lg border ${
// // //                                     item.pricing?.status
// // //                                       ? "bg-white border-gray-200"
// // //                                       : "bg-gray-50 border-gray-100"
// // //                                   }`}
// // //                                 >
// // //                                   <div className="flex justify-between items-start mb-3">
// // //                                     <div>
// // //                                       <span className="font-medium text-gray-800">
// // //                                         {item.product.name}
// // //                                       </span>
// // //                                       <div className="flex items-center mt-1">
// // //                                         <span className="text-sm text-gray-500">
// // //                                           {item.quantity} {item.pricing?.uom}
// // //                                         </span>
// // //                                         <span className="text-sm text-gray-500">
// // //                                           ₹{item.pricing?.price}
// // //                                         </span>
// // //                                         {item.pricing?.offerPercentage > 0 && (
// // //                                           <span className="ml-2 text-sm text-emerald-600 font-medium">
// // //                                             {item.pricing.offerPercentage}% off
// // //                                           </span>
// // //                                         )}
// // //                                       </div>
// // //                                     </div>
// // //                                     <div className="flex items-center space-x-2">
// // //                                       <button
// // //                                         onClick={() =>
// // //                                           onTogglePricingStatus(
// // //                                             combo.id,
// // //                                             item.id
// // //                                           )
// // //                                         }
// // //                                         className="flex items-center justify-center"
// // //                                       >
// // //                                         {item.pricing?.status ? (
// // //                                           <FiToggleRight className="h-5 w-5 text-emerald-500" />
// // //                                         ) : (
// // //                                           <FiToggleLeft className="h-5 w-5 text-gray-400" />
// // //                                         )}
// // //                                       </button>
// // //                                       <button
// // //                                         onClick={() =>
// // //                                           openEditPriceModal(
// // //                                             combo,
// // //                                             item.pricing
// // //                                           )
// // //                                         }
// // //                                         className="p-1 text-green-600 hover:text-green-800 transition-colors duration-150"
// // //                                       >
// // //                                         <FiEdit2 className="h-4 w-4" />
// // //                                       </button>
// // //                                       <button
// // //                                         onClick={() =>
// // //                                           handleDeletePricing(combo.id, item.id)
// // //                                         }
// // //                                         className="p-1 text-red-600 hover:text-red-800 transition-colors duration-150"
// // //                                       >
// // //                                         <FiTrash2 className="h-4 w-4" />
// // //                                       </button>
// // //                                     </div>
// // //                                   </div>

// // //                                   <div className="grid grid-cols-2 gap-3 text-sm">
// // //                                     <div className="flex justify-between">
// // //                                       <span className="text-gray-500">
// // //                                         APP %:
// // //                                       </span>
// // //                                       <span className="font-medium">
// // //                                         {item.pricing?.appPercentage}% (Margin)
// // //                                       </span>
// // //                                     </div>
// // //                                     <div className="flex justify-between">
// // //                                       <span className="text-gray-500">
// // //                                         Profit Amount:
// // //                                       </span>
// // //                                       <span className="font-medium">
// // //                                         ₹{item.pricing?.appSalePrice}
// // //                                       </span>
// // //                                     </div>
// // //                                   </div>
// // //                                 </div>
// // //                               ))}
// // //                             </div>
// // //                           </td>
// // //                         </tr>
// // //                       )}
// // //                     </React.Fragment>
// // //                   );
// // //                 })
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Pagination */}
// // //         {totalPages > 1 && (
// // //           <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
// // //             <Pagination
// // //               currentPage={currentPage}
// // //               totalPages={totalPages}
// // //               onPageChange={handlePageChange}
// // //               totalItems={totalItems}
// // //               perPage={itemsPerPage}
// // //             />
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Add Price Modal */}
// // //       {showAddPriceModal && selectedCombo && (
// // //         <AddPriceModal
// // //           combo={selectedCombo}
// // //           onClose={() => {
// // //             setShowAddPriceModal(false);
// // //             setSelectedCombo(null);
// // //           }}
// // //           onAddPricing={handleAddPricing}
// // //         />
// // //       )}

// // //       {/* Edit Price Modal */}
// // //       {showEditPriceModal && selectedCombo && selectedPricing && (
// // //         <EditPriceModal
// // //           combo={selectedCombo}
// // //           pricing={selectedPricing}
// // //           onClose={() => {
// // //             setShowEditPriceModal(false);
// // //             setSelectedCombo(null);
// // //             setSelectedPricing(null);
// // //           }}
// // //           onAddPricing={handleAddPricing}
// // //         />
// // //       )}

// // //       {/* Image Modal */}
// // //       {selectedImage && (
// // //         <div
// // //           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
// // //           onClick={() => setSelectedImage(null)}
// // //         >
// // //           <div className="relative max-w-4xl max-h-screen p-4">
// // //             <img
// // //               src={selectedImage.src}
// // //               alt={selectedImage.alt}
// // //               className="max-w-full max-h-full object-contain"
// // //             />
// // //             <button
// // //               className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
// // //               onClick={() => setSelectedImage(null)}
// // //             >
// // //               <FiEyeOff className="h-5 w-5 text-gray-700" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }

// // import React, { useState } from "react";
// // import { ProductCombo } from "../comboSlice";
// // import { showConfirmationModal } from "../../../store/slices/uiSlice";
// // import { useAppDispatch } from "../../../store/hooks";
// // import {
// //   FiEdit2,
// //   FiTrash2,
// //   FiPackage,
// //   FiActivity,
// //   FiTrendingUp,
// //   FiTrendingDown,
// //   FiMinus,
// //   FiChevronDown,
// //   FiChevronUp,
// //   FiPlus,
// //   FiToggleLeft,
// //   FiToggleRight,
// //   FiEye,
// //   FiEyeOff,
// // } from "react-icons/fi";
// // import { FaIndianRupeeSign } from "react-icons/fa6";
// // import Pagination from "../../../components/common/Pagination";
// // import ImageUpload from "../../../components/common/ImageUpload";

// // interface ProductComboTableProps {
// //   data: ProductCombo[];
// //   isLoading: boolean;
// //   onEdit: (combo: ProductCombo) => void;
// //   onDelete: (combo: ProductCombo) => void;
// //   onToggleStatus: (combo: ProductCombo) => void;
// //   onUpdateImage?: (
// //     combo: ProductCombo,
// //     imageUrl: string,
// //     imageType: "product" | "nx"
// //   ) => void;
// // }

// // export default function ProductComboTable({
// //   data,
// //   isLoading,
// //   onEdit,
// //   onDelete,
// //   onUpdateImage,
// //   onToggleStatus,
// // }: ProductComboTableProps) {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;
// //   const [expandedCombo, setExpandedCombo] = useState<string | null>(null);
// //   const [selectedImage, setSelectedImage] = useState<{
// //     src: string;
// //     alt: string;
// //   } | null>(null);
// //   const dispatch = useAppDispatch();

// //   // Calculate pagination values
// //   const totalItems = data.length;
// //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// //   // Get current page items
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

// //   const handlePageChange = (page: number) => {
// //     setCurrentPage(page);
// //   };

// //   const handleToggleStatusWithConfirm = (combo: ProductCombo) => {
// //     const newStatus = combo.status === "active" ? "inactive" : "active";
// //     const actionText = newStatus === "active" ? "activate" : "deactivate";

// //     dispatch(
// //       showConfirmationModal({
// //         title: "Confirm Status Change",
// //         message: `Are you sure you want to ${actionText} combo "${combo.name}"?`,
// //         confirmButtonText: `Yes, ${actionText}`,
// //         onConfirm: () => {
// //           onToggleStatus(combo);
// //         },
// //       })
// //     );
// //   };

// //   const handleComboImageChange = (combo: ProductCombo, imageUrl: string) => {
// //     if (onUpdateImage) {
// //       onUpdateImage(combo, imageUrl, "product");
// //     }
// //   };

// //   const handleNxImageChange = (combo: ProductCombo, imageUrl: string) => {
// //     if (onUpdateImage) {
// //       onUpdateImage(combo, imageUrl, "nx");
// //     }
// //   };

// //   const toggleComboExpansion = (comboId: string) => {
// //     setExpandedCombo(expandedCombo === comboId ? null : comboId);
// //   };

// //   const getNutritionIcon = (type: string, value: number) => {
// //     if (type === "calories") {
// //       if (value > 200) return <FiTrendingUp className="text-red-500" />;
// //       if (value < 100) return <FiTrendingDown className="text-green-500" />;
// //       return <FiMinus className="text-yellow-500" />;
// //     }
// //     if (type === "fat") {
// //       if (value > 15) return <FiTrendingUp className="text-red-500" />;
// //       if (value < 5) return <FiTrendingDown className="text-green-500" />;
// //       return <FiMinus className="text-yellow-500" />;
// //     }
// //     if (type === "carb") {
// //       if (value > 30) return <FiTrendingUp className="text-red-500" />;
// //       if (value < 10) return <FiTrendingDown className="text-green-500" />;
// //       return <FiMinus className="text-yellow-500" />;
// //     }
// //     if (type === "protein") {
// //       if (value > 20) return <FiTrendingUp className="text-green-500" />;
// //       if (value < 5) return <FiTrendingDown className="text-yellow-500" />;
// //       return <FiMinus className="text-yellow-500" />;
// //     }
// //     return <FiActivity className="text-gray-500" />;
// //   };

// //   const getStockStatus = (stocks: number) => {
// //     if (stocks < 20)
// //       return { color: "text-red-600", bg: "bg-red-100", label: "Low" };
// //     if (stocks < 50)
// //       return { color: "text-yellow-600", bg: "bg-yellow-100", label: "Medium" };
// //     return { color: "text-green-600", bg: "bg-green-100", label: "High" };
// //   };

// //   // Calculate total price and discount for a combo
// //   const calculateComboPrice = (combo: ProductCombo) => {
// //     const totalPrice = combo.products.reduce((sum, item) => {
// //       return sum + (item.pricing?.price || 0) * item.quantity;
// //     }, 0);

// //     const discountedPrice =
// //       totalPrice * (1 - (combo.discountPercentage || 0) / 100);

// //     return {
// //       totalPrice,
// //       discountedPrice,
// //       discount: combo.discountPercentage || 0,
// //     };
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
// //         <div className="flex flex-col items-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
// //           <p className="mt-4 text-gray-600">Loading combos...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //         <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
// //           <div className="flex justify-between items-center">
// //             <h2 className="text-lg font-semibold text-gray-800">
// //               Product Combos ({data.length})
// //             </h2>
// //             <div className="flex items-center space-x-2 text-sm text-gray-600">
// //               <span>
// //                 Showing {indexOfFirstItem + 1}-
// //                 {Math.min(indexOfLastItem, totalItems)} of {totalItems}
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="overflow-x-auto">
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Id
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Combo Images
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Name
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Price & Products
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Nutrition Index
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Status
// //                 </th>
// //                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   Actions
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {data.length === 0 ? (
// //                 <tr>
// //                   <td colSpan={7} className="px-6 py-16 text-center">
// //                     <div className="flex flex-col items-center">
// //                       <div className="bg-gray-100 p-4 rounded-full mb-4">
// //                         <FiPackage className="h-12 w-12 text-gray-400" />
// //                       </div>
// //                       <h3 className="mt-2 text-lg font-medium text-gray-900">
// //                         No combos found
// //                       </h3>
// //                       <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
// //                         Get started by adding a new combo
// //                       </p>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 currentItems.map((combo) => {
// //                   const { totalPrice, discountedPrice, discount } =
// //                     calculateComboPrice(combo);

// //                   return (
// //                     <React.Fragment key={combo.id}>
// //                       <tr className="hover:bg-gray-50 transition-colors duration-150">
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="text-sm font-medium text-gray-900">
// //                             {combo.id.split("-")[1]}
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="flex space-x-4">
// //                             {/* <div className="flex flex-col items-center">
// //                               <div
// //                                 className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
// //                                 onClick={() =>
// //                                   setSelectedImage({
// //                                     src: combo.image,
// //                                     alt: `${combo.name} - Main Image`,
// //                                   })
// //                                 }
// //                               >
// //                                 <img
// //                                   src={combo.image}
// //                                   alt={combo.name}
// //                                   className="w-full h-full object-cover"
// //                                 />
// //                               </div>
// //                               <span className="text-xs text-gray-500 mt-1">
// //                                 Main
// //                               </span>
// //                             </div> */}
// //                             <div className="flex flex-col items-center">
// //                               <div
// //                                 className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
// //                                 onClick={() =>
// //                                   setSelectedImage({
// //                                     src: combo.productImage,
// //                                     alt: `${combo.name} - Product Image`,
// //                                   })
// //                                 }
// //                               >
// //                                 <img
// //                                   src={combo.productImage}
// //                                   alt={combo.name}
// //                                   className="w-full h-full object-cover"
// //                                 />
// //                               </div>
// //                               <span className="text-xs text-gray-500 mt-1">
// //                                 Product
// //                               </span>
// //                             </div>
// //                             <div className="flex flex-col items-center">
// //                               <div
// //                                 className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
// //                                 onClick={() =>
// //                                   setSelectedImage({
// //                                     src: combo.nxImage,
// //                                     alt: `${combo.name} - NX Image`,
// //                                   })
// //                                 }
// //                               >
// //                                 <img
// //                                   src={combo.nxImage}
// //                                   alt={combo.name}
// //                                   className="w-full h-full object-cover"
// //                                 />
// //                               </div>
// //                               <span className="text-xs text-gray-500 mt-1">
// //                                 NX
// //                               </span>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="text-sm font-medium text-gray-900">
// //                             {combo.name}
// //                           </div>
// //                           <div className="text-xs text-gray-500 pt-2">
// //                             <span className="inline-block mr-1 px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
// //                               {combo.category}
// //                             </span>
// //                             <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
// //                               {combo.subCategory}
// //                             </span>
// //                           </div>
// //                           <div className="flex items-center pt-2">
// //                             <div className="flex items-center">
// //                               <span className="text-sm text-gray-900 mr-2">
// //                                 Stock: {combo.stocks}
// //                               </span>
// //                               <span
// //                                 className={`px-2 py-1 text-xs rounded-full ${
// //                                   getStockStatus(combo.stocks).bg
// //                                 } ${getStockStatus(combo.stocks).color}`}
// //                               >
// //                                 {getStockStatus(combo.stocks).label}
// //                               </span>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-4 py-4 whitespace-nowrap">
// //                           <div className="flex flex-col space-y-2">
// //                             <div className="bg-gray-50 p-2 rounded">
// //                               <div className="flex justify-between items-center">
// //                                 <span className="text-sm font-medium text-gray-700">
// //                                   Total Price:
// //                                 </span>
// //                                 <span className="text-sm font-bold text-gray-900">
// //                                   ₹{totalPrice.toFixed(2)}
// //                                 </span>
// //                               </div>
// //                               {discount > 0 && (
// //                                 <>
// //                                   <div className="flex justify-between items-center">
// //                                     <span className="text-sm text-gray-700">
// //                                       Discount:
// //                                     </span>
// //                                     <span className="text-sm text-emerald-600 font-medium">
// //                                       {discount}%
// //                                     </span>
// //                                   </div>
// //                                   <div className="flex justify-between items-center">
// //                                     <span className="text-sm font-medium text-gray-700">
// //                                       Final Price:
// //                                     </span>
// //                                     <span className="text-sm font-bold text-emerald-600">
// //                                       ₹{discountedPrice.toFixed(2)}
// //                                     </span>
// //                                   </div>
// //                                 </>
// //                               )}
// //                             </div>

// //                             <div className="flex items-center">
// //                               <button
// //                                 onClick={() => toggleComboExpansion(combo.id)}
// //                                 className="flex items-center gap-2 mr-3 transition text-sm font-medium"
// //                               >
// //                                 {expandedCombo === combo.id ? (
// //                                   <>
// //                                     <FiChevronUp className="h-5 w-5 text-emerald-600" />
// //                                   </>
// //                                 ) : (
// //                                   <>
// //                                     <FiChevronDown className="h-5 w-5 text-rose-600" />
// //                                   </>
// //                                 )}
// //                               </button>
// //                               <span className="text-xs text-gray-500">
// //                                 {combo.products.length} products
// //                               </span>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="grid grid-cols-2 gap-2 text-xs">
// //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// //                               {getNutritionIcon(
// //                                 "calories",
// //                                 combo.calories || 0
// //                               )}
// //                               <span className="ml-1">
// //                                 Cal: {combo.calories}
// //                               </span>
// //                             </div>
// //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// //                               {getNutritionIcon("fat", combo.fat || 0)}
// //                               <span className="ml-1">Fat: {combo.fat}g</span>
// //                             </div>
// //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// //                               {getNutritionIcon("carb", combo.carb || 0)}
// //                               <span className="ml-1">Carb: {combo.carb}g</span>
// //                             </div>
// //                             <div className="flex items-center p-2 bg-gray-50 rounded">
// //                               {getNutritionIcon("protein", combo.protein || 0)}
// //                               <span className="ml-1">
// //                                 Pro: {combo.protein}g
// //                               </span>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="flex items-center">
// //                             <button
// //                               onClick={() =>
// //                                 handleToggleStatusWithConfirm(combo)
// //                               }
// //                               className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
// //                               style={{
// //                                 backgroundColor:
// //                                   combo.status === "active"
// //                                     ? "#10b981"
// //                                     : "#ef4444",
// //                               }}
// //                             >
// //                               <span
// //                                 className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
// //                                 style={{
// //                                   transform:
// //                                     combo.status === "active"
// //                                       ? "translateX(1.25rem)"
// //                                       : "translateX(0.25rem)",
// //                                 }}
// //                               />
// //                             </button>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                           <div className="flex justify-end space-x-2">
// //                             <button
// //                               onClick={() => onEdit(combo)}
// //                               className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
// //                               title="Edit"
// //                             >
// //                               <FiEdit2 className="text-lg" />
// //                             </button>
// //                             <button
// //                               onClick={() => onDelete(combo)}
// //                               className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
// //                               title="Delete"
// //                             >
// //                               <FiTrash2 className="text-lg" />
// //                             </button>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                       {expandedCombo === combo.id && (
// //                         <tr>
// //                           <td colSpan={7} className="px-6 py-4 bg-gray-50">
// //                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                               {combo.products.map((item) => (
// //                                 <div
// //                                   key={item.id}
// //                                   className="p-4 rounded-lg border border-gray-200 bg-white"
// //                                 >
// //                                   <div className="flex justify-between items-start mb-3">
// //                                     <div className="flex items-center">
// //                                       <img
// //                                         src={item.product.image}
// //                                         alt={item.product.name}
// //                                         className="w-12 h-12 rounded object-cover mr-3"
// //                                       />
// //                                       <div>
// //                                         <span className="font-medium text-gray-800">
// //                                           {item.product.name}
// //                                         </span>
// //                                         <div className="flex items-center mt-1">
// //                                           <span className="text-sm text-gray-500">
// //                                             {item.quantity} {item.pricing?.uom}
// //                                           </span>
// //                                           <span className="text-sm text-gray-500 ml-2">
// //                                             ₹{item.pricing?.price}
// //                                           </span>
// //                                           {item.pricing?.offerPercentage >
// //                                             0 && (
// //                                             <span className="ml-2 text-sm text-emerald-600 font-medium">
// //                                               {item.pricing.offerPercentage}%
// //                                               off
// //                                             </span>
// //                                           )}
// //                                         </div>
// //                                       </div>
// //                                     </div>
// //                                   </div>

// //                                   <div className="grid grid-cols-2 gap-3 text-sm">
// //                                     <div className="flex justify-between">
// //                                       <span className="text-gray-500">
// //                                         Purchase Price:
// //                                       </span>
// //                                       <span className="font-medium">
// //                                         ₹{item.pricing?.purchasePrice}
// //                                       </span>
// //                                     </div>
// //                                     <div className="flex justify-between">
// //                                       <span className="text-gray-500">
// //                                         Sale Price:
// //                                       </span>
// //                                       <span className="font-medium">
// //                                         ₹{item.pricing?.price}
// //                                       </span>
// //                                     </div>
// //                                     <div className="flex justify-between">
// //                                       <span className="text-gray-500">
// //                                         APP %:
// //                                       </span>
// //                                       <span className="font-medium">
// //                                         {item.pricing?.appPercentage}%
// //                                       </span>
// //                                     </div>
// //                                     <div className="flex justify-between">
// //                                       <span className="text-gray-500">
// //                                         Profit Amount:
// //                                       </span>
// //                                       <span className="font-medium">
// //                                         ₹{item.pricing?.appSalePrice}
// //                                       </span>
// //                                     </div>
// //                                   </div>
// //                                 </div>
// //                               ))}
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       )}
// //                     </React.Fragment>
// //                   );
// //                 })
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         {totalPages > 1 && (
// //           <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
// //             <Pagination
// //               currentPage={currentPage}
// //               totalPages={totalPages}
// //               onPageChange={handlePageChange}
// //               totalItems={totalItems}
// //               perPage={itemsPerPage}
// //             />
// //           </div>
// //         )}
// //       </div>

// //       {/* Image Modal */}
// //       {selectedImage && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
// //           onClick={() => setSelectedImage(null)}
// //         >
// //           <div className="relative max-w-4xl max-h-screen p-4">
// //             <img
// //               src={selectedImage.src}
// //               alt={selectedImage.alt}
// //               className="max-w-full max-h-full object-contain"
// //             />
// //             <button
// //               className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
// //               onClick={() => setSelectedImage(null)}
// //             >
// //               <FiEyeOff className="h-5 w-5 text-gray-700" />
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// import React, { useState } from "react";
// import { ProductCombo } from "../comboSlice";
// import { showConfirmationModal } from "../../../store/slices/uiSlice";
// import { useAppDispatch } from "../../../store/hooks";
// import {
//   FiEdit2,
//   FiTrash2,
//   FiPackage,
//   FiActivity,
//   FiTrendingUp,
//   FiTrendingDown,
//   FiMinus,
//   FiChevronDown,
//   FiChevronUp,
//   FiPlus,
//   FiToggleLeft,
//   FiToggleRight,
//   FiEye,
//   FiEyeOff,
// } from "react-icons/fi";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import Pagination from "../../../components/common/Pagination";
// import ImageUpload from "../../../components/common/ImageUpload";

// interface ProductComboTableProps {
//   data: ProductCombo[];
//   isLoading: boolean;
//   onEdit: (combo: ProductCombo) => void;
//   onDelete: (combo: ProductCombo) => void;
//   onToggleStatus: (combo: ProductCombo) => void;
//   onUpdateImage?: (
//     combo: ProductCombo,
//     imageUrl: string,
//     imageType: "product" | "nx"
//   ) => void;
// }

// export default function ProductComboTable({
//   data,
//   isLoading,
//   onEdit,
//   onDelete,
//   onUpdateImage,
//   onToggleStatus,
// }: ProductComboTableProps) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const [expandedCombo, setExpandedCombo] = useState<string | null>(null);
//   const [selectedImage, setSelectedImage] = useState<{
//     src: string;
//     alt: string;
//   } | null>(null);
//   const dispatch = useAppDispatch();

//   // Calculate pagination values
//   const totalItems = data.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   // Get current page items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleToggleStatusWithConfirm = (combo: ProductCombo) => {
//     const newStatus = combo.status === "active" ? "inactive" : "active";
//     const actionText = newStatus === "active" ? "activate" : "deactivate";

//     dispatch(
//       showConfirmationModal({
//         title: "Confirm Status Change",
//         message: `Are you sure you want to ${actionText} combo "${combo.name}"?`,
//         confirmButtonText: `Yes, ${actionText}`,
//         onConfirm: () => {
//           onToggleStatus(combo);
//         },
//       })
//     );
//   };

//   const handleComboImageChange = (combo: ProductCombo, imageUrl: string) => {
//     if (onUpdateImage) {
//       onUpdateImage(combo, imageUrl, "product");
//     }
//   };

//   const handleNxImageChange = (combo: ProductCombo, imageUrl: string) => {
//     if (onUpdateImage) {
//       onUpdateImage(combo, imageUrl, "nx");
//     }
//   };

//   const toggleComboExpansion = (comboId: string) => {
//     setExpandedCombo(expandedCombo === comboId ? null : comboId);
//   };

//   const getNutritionIcon = (type: string, value: number) => {
//     if (type === "calories") {
//       if (value > 200) return <FiTrendingUp className="text-red-500" />;
//       if (value < 100) return <FiTrendingDown className="text-green-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     if (type === "fat") {
//       if (value > 15) return <FiTrendingUp className="text-red-500" />;
//       if (value < 5) return <FiTrendingDown className="text-green-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     if (type === "carb") {
//       if (value > 30) return <FiTrendingUp className="text-red-500" />;
//       if (value < 10) return <FiTrendingDown className="text-green-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     if (type === "protein") {
//       if (value > 20) return <FiTrendingUp className="text-green-500" />;
//       if (value < 5) return <FiTrendingDown className="text-yellow-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     return <FiActivity className="text-gray-500" />;
//   };

//   const getStockStatus = (stocks: number) => {
//     if (stocks < 20)
//       return { color: "text-red-600", bg: "bg-red-100", label: "Low" };
//     if (stocks < 50)
//       return { color: "text-yellow-600", bg: "bg-yellow-100", label: "Medium" };
//     return { color: "text-green-600", bg: "bg-green-100", label: "High" };
//   };

//   // Calculate total price and discount for a combo
//   const calculateComboPrice = (combo: ProductCombo) => {
//     const totalPrice = combo.products.reduce((sum, item) => {
//       return sum + (item.pricing?.price || 0) * item.quantity;
//     }, 0);

//     const discountedPrice =
//       totalPrice * (1 - (combo.discountPercentage || 0) / 100);

//     return {
//       totalPrice,
//       discountedPrice,
//       discount: combo.discountPercentage || 0,
//     };
//   };

//   // Format pricing information for display
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

//     return `${quantity} ${uom} ₹${price} ${offerPercentage}% PP:₹${purchasePrice} AP:${appPercentage}% ASP:₹${appSalePrice}`;
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
//           <p className="mt-4 text-gray-600">Loading combos...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Product Combos ({data.length})
//             </h2>
//             <div className="flex items-center space-x-2 text-sm text-gray-600">
//               <span>
//                 Showing {indexOfFirstItem + 1}-
//                 {Math.min(indexOfLastItem, totalItems)} of {totalItems}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Id
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Combo Images
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price & Products
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Nutrition Index
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {data.length === 0 ? (
//                 <tr>
//                   <td colSpan={7} className="px-6 py-16 text-center">
//                     <div className="flex flex-col items-center">
//                       <div className="bg-gray-100 p-4 rounded-full mb-4">
//                         <FiPackage className="h-12 w-12 text-gray-400" />
//                       </div>
//                       <h3 className="mt-2 text-lg font-medium text-gray-900">
//                         No combos found
//                       </h3>
//                       <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
//                         Get started by adding a new combo
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               ) : (
//                 currentItems.map((combo) => {
//                   const { totalPrice, discountedPrice, discount } =
//                     calculateComboPrice(combo);

//                   return (
//                     <React.Fragment key={combo.id}>
//                       <tr className="hover:bg-gray-50 transition-colors duration-150">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             {combo.id.split("-")[1]}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex space-x-4">
//                             <div className="flex flex-col items-center">
//                               <div
//                                 className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
//                                 onClick={() =>
//                                   setSelectedImage({
//                                     src: combo.productImage,
//                                     alt: `${combo.name} - Product Image`,
//                                   })
//                                 }
//                               >
//                                 <img
//                                   src={combo.productImage}
//                                   alt={combo.name}
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <span className="text-xs text-gray-500 mt-1">
//                                 Product
//                               </span>
//                             </div>
//                             <div className="flex flex-col items-center">
//                               <div
//                                 className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
//                                 onClick={() =>
//                                   setSelectedImage({
//                                     src: combo.nxImage,
//                                     alt: `${combo.name} - NX Image`,
//                                   })
//                                 }
//                               >
//                                 <img
//                                   src={combo.nxImage}
//                                   alt={combo.name}
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <span className="text-xs text-gray-500 mt-1">
//                                 NX
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             {combo.name}
//                           </div>
//                           <div className="text-xs text-gray-500 pt-2">
//                             <span className="inline-block mr-1 px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
//                               {combo.category}
//                             </span>
//                             <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
//                               {combo.subCategory}
//                             </span>
//                           </div>
//                           <div className="flex items-center pt-2">
//                             <div className="flex items-center">
//                               <span className="text-sm text-gray-900 mr-2">
//                                 Stock: {combo.stocks}
//                               </span>
//                               <span
//                                 className={`px-2 py-1 text-xs rounded-full ${
//                                   getStockStatus(combo.stocks || 0).bg
//                                 } ${getStockStatus(combo.stocks || 0).color}`}
//                               >
//                                 {getStockStatus(combo.stocks || 0).label}
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap">
//                           <div className="flex flex-col space-y-2">
//                             <div className="bg-gray-50 p-2 rounded">
//                               <div className="flex justify-between items-center">
//                                 <span className="text-sm font-medium text-gray-700">
//                                   Total Price:
//                                 </span>
//                                 <span className="text-sm font-bold text-gray-900">
//                                   ₹{totalPrice.toFixed(2)}
//                                 </span>
//                               </div>
//                               {discount > 0 && (
//                                 <>
//                                   <div className="flex justify-between items-center">
//                                     <span className="text-sm text-gray-700">
//                                       Discount:
//                                     </span>
//                                     <span className="text-sm text-emerald-600 font-medium">
//                                       {discount}%
//                                     </span>
//                                   </div>
//                                   <div className="flex justify-between items-center">
//                                     <span className="text-sm font-medium text-gray-700">
//                                       Final Price:
//                                     </span>
//                                     <span className="text-sm font-bold text-emerald-600">
//                                       ₹{discountedPrice.toFixed(2)}
//                                     </span>
//                                   </div>
//                                 </>
//                               )}
//                             </div>

//                             <div className="flex items-center">
//                               <button
//                                 onClick={() => toggleComboExpansion(combo.id)}
//                                 className="flex items-center gap-2 mr-3 transition text-sm font-medium"
//                               >
//                                 {expandedCombo === combo.id ? (
//                                   <>
//                                     <FiChevronUp className="h-5 w-5 text-emerald-600" />
//                                   </>
//                                 ) : (
//                                   <>
//                                     <FiChevronDown className="h-5 w-5 text-rose-600" />
//                                   </>
//                                 )}
//                               </button>
//                               <span className="text-xs text-gray-500">
//                                 {combo.products.length} products
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="grid grid-cols-2 gap-2 text-xs">
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon(
//                                 "calories",
//                                 combo.calories || 0
//                               )}
//                               <span className="ml-1">
//                                 Cal: {combo.calories}
//                               </span>
//                             </div>
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon("fat", combo.fat || 0)}
//                               <span className="ml-1">Fat: {combo.fat}g</span>
//                             </div>
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon("carb", combo.carb || 0)}
//                               <span className="ml-1">Carb: {combo.carb}g</span>
//                             </div>
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon("protein", combo.protein || 0)}
//                               <span className="ml-1">
//                                 Pro: {combo.protein}g
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <button
//                               onClick={() =>
//                                 handleToggleStatusWithConfirm(combo)
//                               }
//                               className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//                               style={{
//                                 backgroundColor:
//                                   combo.status === "active"
//                                     ? "#10b981"
//                                     : "#ef4444",
//                               }}
//                             >
//                               <span
//                                 className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
//                                 style={{
//                                   transform:
//                                     combo.status === "active"
//                                       ? "translateX(1.25rem)"
//                                       : "translateX(0.25rem)",
//                                 }}
//                               />
//                             </button>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <div className="flex justify-end space-x-2">
//                             <button
//                               onClick={() => onEdit(combo)}
//                               className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
//                               title="Edit"
//                             >
//                               <FiEdit2 className="text-lg" />
//                             </button>
//                             <button
//                               onClick={() => onDelete(combo)}
//                               className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
//                               title="Delete"
//                             >
//                               <FiTrash2 className="text-lg" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       {expandedCombo === combo.id && (
//                         <tr>
//                           <td colSpan={7} className="px-6 py-4 bg-gray-50">
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                               {combo.products.map((item) => (
//                                 <div
//                                   key={item.id}
//                                   className="p-4 rounded-lg border border-gray-200 bg-white"
//                                 >
//                                   <div className="flex justify-between items-start mb-3">
//                                     <div className="flex items-center">
//                                       <img
//                                         src={item.product.image}
//                                         alt={item.product.name}
//                                         className="w-12 h-12 rounded object-cover mr-3"
//                                       />
//                                       <div>
//                                         <span className="font-medium text-gray-800">
//                                           {item.product.name}
//                                         </span>
//                                         {/* Display pricing information in the requested format */}
//                                         {item.pricing && (
//                                           <div className="text-xs text-gray-600 mt-1">
//                                             {formatPricingInfo(
//                                               item.pricing,
//                                               item.quantity
//                                             )}
//                                           </div>
//                                         )}
//                                       </div>
//                                     </div>
//                                   </div>

//                                   <div className="grid grid-cols-2 gap-3 text-sm">
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         Purchase Price:
//                                       </span>
//                                       <span className="font-medium">
//                                         ₹{item.pricing?.purchasePrice}
//                                       </span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         Sale Price:
//                                       </span>
//                                       <span className="font-medium">
//                                         ₹{item.pricing?.price}
//                                       </span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         APP %:
//                                       </span>
//                                       <span className="font-medium">
//                                         {item.pricing?.appPercentage}%
//                                       </span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         Profit Amount:
//                                       </span>
//                                       <span className="font-medium">
//                                         ₹{item.pricing?.appSalePrice}
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           </td>
//                         </tr>
//                       )}
//                     </React.Fragment>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//               totalItems={totalItems}
//               perPage={itemsPerPage}
//             />
//           </div>
//         )}
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-screen p-4">
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="max-w-full max-h-full object-contain"
//             />
//             <button
//               className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
//               onClick={() => setSelectedImage(null)}
//             >
//               <FiEyeOff className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useState } from "react";
// import { ProductCombo } from "../comboSlice";
// import { showConfirmationModal } from "../../../store/slices/uiSlice";
// import { useAppDispatch } from "../../../store/hooks";
// import {
//   FiEdit2,
//   FiTrash2,
//   FiPackage,
//   FiActivity,
//   FiTrendingUp,
//   FiTrendingDown,
//   FiMinus,
//   FiChevronDown,
//   FiChevronUp,
//   FiPlus,
//   FiToggleLeft,
//   FiToggleRight,
//   FiEye,
//   FiEyeOff,
// } from "react-icons/fi";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import Pagination from "../../../components/common/Pagination";
// import ImageUpload from "../../../components/common/ImageUpload";

// interface ProductComboTableProps {
//   data: ProductCombo[];
//   isLoading: boolean;
//   onEdit: (combo: ProductCombo) => void;
//   onDelete: (combo: ProductCombo) => void;
//   onToggleStatus: (combo: ProductCombo) => void;
//   onUpdateImage?: (
//     combo: ProductCombo,
//     imageUrl: string,
//     imageType: "product" | "nx"
//   ) => void;
// }

// export default function ProductComboTable({
//   data,
//   isLoading,
//   onEdit,
//   onDelete,
//   onUpdateImage,
//   onToggleStatus,
// }: ProductComboTableProps) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const [expandedCombo, setExpandedCombo] = useState<string | null>(null);
//   const [selectedImage, setSelectedImage] = useState<{
//     src: string;
//     alt: string;
//   } | null>(null);
//   const dispatch = useAppDispatch();

//   const totalItems = data.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleToggleStatusWithConfirm = (combo: ProductCombo) => {
//     const newStatus = combo.status === "active" ? "inactive" : "active";
//     const actionText = newStatus === "active" ? "activate" : "deactivate";

//     dispatch(
//       showConfirmationModal({
//         title: "Confirm Status Change",
//         message: `Are you sure you want to ${actionText} combo "${combo.name}"?`,
//         confirmButtonText: `Yes, ${actionText}`,
//         onConfirm: () => {
//           onToggleStatus(combo);
//         },
//       })
//     );
//   };

//   const handleComboImageChange = (combo: ProductCombo, imageUrl: string) => {
//     if (onUpdateImage) {
//       onUpdateImage(combo, imageUrl, "product");
//     }
//   };

//   const handleNxImageChange = (combo: ProductCombo, imageUrl: string) => {
//     if (onUpdateImage) {
//       onUpdateImage(combo, imageUrl, "nx");
//     }
//   };

//   const toggleComboExpansion = (comboId: string) => {
//     setExpandedCombo(expandedCombo === comboId ? null : comboId);
//   };

//   const getNutritionIcon = (type: string, value: number) => {
//     if (type === "calories") {
//       if (value > 200) return <FiTrendingUp className="text-red-500" />;
//       if (value < 100) return <FiTrendingDown className="text-green-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     if (type === "fat") {
//       if (value > 15) return <FiTrendingUp className="text-red-500" />;
//       if (value < 5) return <FiTrendingDown className="text-green-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     if (type === "carb") {
//       if (value > 30) return <FiTrendingUp className="text-red-500" />;
//       if (value < 10) return <FiTrendingDown className="text-green-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     if (type === "protein") {
//       if (value > 20) return <FiTrendingUp className="text-green-500" />;
//       if (value < 5) return <FiTrendingDown className="text-yellow-500" />;
//       return <FiMinus className="text-yellow-500" />;
//     }
//     return <FiActivity className="text-gray-500" />;
//   };

//   const getStockStatus = (stocks: number) => {
//     if (stocks < 20)
//       return { color: "text-red-600", bg: "bg-red-100", label: "Low" };
//     if (stocks < 50)
//       return { color: "text-yellow-600", bg: "bg-yellow-100", label: "Medium" };
//     return { color: "text-green-600", bg: "bg-green-100", label: "High" };
//   };

//   const calculateComboPrice = (combo: ProductCombo) => {
//     const totalPrice = combo.products.reduce((sum, item) => {
//       return sum + (item.pricing?.price || 0) * item.quantity;
//     }, 0);

//     const discountedPrice =
//       totalPrice * (1 - (combo.discountPercentage || 0) / 100);

//     return {
//       totalPrice,
//       discountedPrice,
//       discount: combo.discountPercentage || 0,
//     };
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

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
//           <p className="mt-4 text-gray-600">Loading combos...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Product Combos ({data.length})
//             </h2>
//             <div className="flex items-center space-x-2 text-sm text-gray-600">
//               <span>
//                 Showing {indexOfFirstItem + 1}-
//                 {Math.min(indexOfLastItem, totalItems)} of {totalItems}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Id
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Combo Images
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price & Products
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Nutrition Index
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {data.length === 0 ? (
//                 <tr>
//                   <td colSpan={7} className="px-6 py-16 text-center">
//                     <div className="flex flex-col items-center">
//                       <div className="bg-gray-100 p-4 rounded-full mb-4">
//                         <FiPackage className="h-12 w-12 text-gray-400" />
//                       </div>
//                       <h3 className="mt-2 text-lg font-medium text-gray-900">
//                         No combos found
//                       </h3>
//                       <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
//                         Get started by adding a new combo
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               ) : (
//                 currentItems.map((combo) => {
//                   const { totalPrice, discountedPrice, discount } =
//                     calculateComboPrice(combo);

//                   return (
//                     <React.Fragment key={combo.id}>
//                       <tr className="hover:bg-gray-50 transition-colors duration-150">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             {combo.id.split("-")[1]}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex space-x-4">
//                             <div className="flex flex-col items-center">
//                               <div
//                                 className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
//                                 onClick={() =>
//                                   setSelectedImage({
//                                     src: combo.productImage,
//                                     alt: `${combo.name} - Product Image`,
//                                   })
//                                 }
//                               >
//                                 <img
//                                   src={combo.productImage}
//                                   alt={combo.name}
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <span className="text-xs text-gray-500 mt-1">
//                                 Product
//                               </span>
//                             </div>
//                             <div className="flex flex-col items-center">
//                               <div
//                                 className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
//                                 onClick={() =>
//                                   setSelectedImage({
//                                     src: combo.nxImage,
//                                     alt: `${combo.name} - NX Image`,
//                                   })
//                                 }
//                               >
//                                 <img
//                                   src={combo.nxImage}
//                                   alt={combo.name}
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <span className="text-xs text-gray-500 mt-1">
//                                 NX
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             {combo.name}
//                           </div>
//                           <div className="text-xs text-gray-500 pt-2">
//                             <span className="inline-block mr-1 px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
//                               {combo.category}
//                             </span>
//                             <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
//                               {combo.subCategory}
//                             </span>
//                           </div>
//                           <div className="flex items-center pt-2">
//                             <div className="flex items-center">
//                               <span className="text-sm text-gray-900 mr-2">
//                                 Stock: {combo.stocks}
//                               </span>
//                               <span
//                                 className={`px-2 py-1 text-xs rounded-full ${
//                                   getStockStatus(combo.stocks || 0).bg
//                                 } ${getStockStatus(combo.stocks || 0).color}`}
//                               >
//                                 {getStockStatus(combo.stocks || 0).label}
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-4 py-4 whitespace-nowrap">
//                           <div className="flex flex-col space-y-2">
//                             <div className="bg-gray-50 p-2 rounded">
//                               <div className="flex justify-between items-center gap-2">
//                                 <span className="text-sm font-medium text-gray-700">
//                                   Pack :
//                                 </span>
//                                 <span className="text-sm font-bold text-gray-900">
//                                   1kg
//                                 </span>
//                                 <span className="text-sm font-medium text-gray-700">
//                                   SP:
//                                 </span>
//                                 <span className="text-sm font-bold text-gray-900">
//                                   ₹{discountedPrice.toFixed(2)}
//                                 </span>
//                                 <span className="text-sm text-emerald-600 font-medium">
//                                   {discount}%
//                                 </span>
//                               </div>
//                               {discount > 0 && (
//                                 <>
//                                   {/* <div className="flex justify-between items-center">
//                                     <span className="text-sm text-gray-700">
//                                       Discount:
//                                     </span>
//                                     <span className="text-sm text-emerald-600 font-medium">
//                                       {discount}%
//                                     </span>
//                                   </div> */}
//                                   <div className="flex justify-between items-center py-2">
//                                     <span className="text-sm font-medium text-gray-700">
//                                       APP Amount:
//                                     </span>
//                                     <span className="text-sm font-bold text-emerald-600">
//                                       1000
//                                     </span>
//                                   </div>
//                                   <div className="flex justify-between items-center">
//                                     <span className="text-sm font-medium text-gray-700">
//                                       PP:
//                                     </span>
//                                     <span className="text-sm font-bold text-emerald-600">
//                                       ₹{totalPrice.toFixed(2)}
//                                     </span>
//                                   </div>
//                                 </>
//                               )}
//                             </div>

//                             <div className="flex items-center">
//                               <button
//                                 onClick={() => toggleComboExpansion(combo.id)}
//                                 className="flex items-center gap-2 mr-3 transition text-sm font-medium"
//                               >
//                                 {expandedCombo === combo.id ? (
//                                   <>
//                                     <FiChevronUp className="h-5 w-5 text-emerald-600" />
//                                   </>
//                                 ) : (
//                                   <>
//                                     <FiChevronDown className="h-5 w-5 text-rose-600" />
//                                   </>
//                                 )}
//                               </button>
//                               <span className="text-xs text-gray-500">
//                                 {combo.products.length} products
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="grid grid-cols-2 gap-2 text-xs">
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon(
//                                 "calories",
//                                 combo.calories || 0
//                               )}
//                               <span className="ml-1">
//                                 Cal: {combo.calories}
//                               </span>
//                             </div>
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon("fat", combo.fat || 0)}
//                               <span className="ml-1">Fat: {combo.fat}g</span>
//                             </div>
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon("carb", combo.carb || 0)}
//                               <span className="ml-1">Carb: {combo.carb}g</span>
//                             </div>
//                             <div className="flex items-center p-2 bg-gray-50 rounded">
//                               {getNutritionIcon("protein", combo.protein || 0)}
//                               <span className="ml-1">
//                                 Pro: {combo.protein}g
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <button
//                               onClick={() =>
//                                 handleToggleStatusWithConfirm(combo)
//                               }
//                               className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//                               style={{
//                                 backgroundColor:
//                                   combo.status === "active"
//                                     ? "#10b981"
//                                     : "#ef4444",
//                               }}
//                             >
//                               <span
//                                 className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
//                                 style={{
//                                   transform:
//                                     combo.status === "active"
//                                       ? "translateX(1.25rem)"
//                                       : "translateX(0.25rem)",
//                                 }}
//                               />
//                             </button>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <div className="flex justify-end space-x-2">
//                             <button
//                               onClick={() => onEdit(combo)}
//                               className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
//                               title="Edit"
//                             >
//                               <FiEdit2 className="text-lg" />
//                             </button>
//                             <button
//                               onClick={() => onDelete(combo)}
//                               className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
//                               title="Delete"
//                             >
//                               <FiTrash2 className="text-lg" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       {expandedCombo === combo.id && (
//                         <tr>
//                           <td colSpan={7} className="px-6 py-4 bg-gray-50">
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                               {combo.products.map((item) => (
//                                 <div
//                                   key={item.id}
//                                   className="p-4 rounded-lg border border-gray-200 bg-white"
//                                 >
//                                   <div className="flex justify-between items-start mb-3">
//                                     <div className="flex items-center">
//                                       <img
//                                         src={item.product.image}
//                                         alt={item.product.name}
//                                         className="w-12 h-12 rounded object-cover mr-3"
//                                       />
//                                       <div>
//                                         <span className="font-medium text-gray-800">
//                                           {item.product.name}
//                                         </span>
//                                         {item.pricing && (
//                                           <div className="text-xs text-gray-600 mt-1">
//                                             {formatPricingInfo(
//                                               item.pricing,
//                                               item.quantity
//                                             )}
//                                           </div>
//                                         )}
//                                       </div>
//                                     </div>
//                                   </div>

//                                   <div className="grid grid-cols-2 gap-3 text-sm">
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         Purchase Price:
//                                       </span>
//                                       <span className="font-medium">
//                                         ₹{item.pricing?.purchasePrice}
//                                       </span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         Sale Price:
//                                       </span>
//                                       <span className="font-medium">
//                                         ₹{item.pricing?.price}
//                                       </span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         APP %:
//                                       </span>
//                                       <span className="font-medium">
//                                         {item.pricing?.appPercentage}%
//                                       </span>
//                                     </div>
//                                     <div className="flex justify-between">
//                                       <span className="text-gray-500">
//                                         Profit Amount:
//                                       </span>
//                                       <span className="font-medium">
//                                         ₹{item.pricing?.appSalePrice}
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           </td>
//                         </tr>
//                       )}
//                     </React.Fragment>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//               totalItems={totalItems}
//               perPage={itemsPerPage}
//             />
//           </div>
//         )}
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-screen p-4">
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="max-w-full max-h-full object-contain"
//             />
//             <button
//               className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
//               onClick={() => setSelectedImage(null)}
//             >
//               <FiEyeOff className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import { ProductCombo } from "../comboSlice";
import { showConfirmationModal } from "../../../store/slices/uiSlice";
import { useAppDispatch } from "../../../store/hooks";
import {
  FiEdit2,
  FiTrash2,
  FiPackage,
  FiActivity,
  FiTrendingUp,
  FiTrendingDown,
  FiMinus,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiToggleLeft,
  FiToggleRight,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Pagination from "../../../components/common/Pagination";
import ImageUpload from "../../../components/common/ImageUpload";

interface ProductComboTableProps {
  data: ProductCombo[];
  isLoading: boolean;
  onEdit: (combo: ProductCombo) => void;
  onDelete: (combo: ProductCombo) => void;
  onToggleStatus: (combo: ProductCombo) => void;
  onUpdateImage?: (
    combo: ProductCombo,
    imageUrl: string,
    imageType: "product" | "nx"
  ) => void;
}

export default function ProductComboTable({
  data,
  isLoading,
  onEdit,
  onDelete,
  onUpdateImage,
  onToggleStatus,
}: ProductComboTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [expandedCombo, setExpandedCombo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const dispatch = useAppDispatch();

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleStatusWithConfirm = (combo: ProductCombo) => {
    const newStatus = combo.status === "active" ? "inactive" : "active";
    const actionText = newStatus === "active" ? "activate" : "deactivate";

    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to ${actionText} combo "${combo.name}"?`,
        confirmButtonText: `Yes, ${actionText}`,
        onConfirm: () => {
          onToggleStatus(combo);
        },
      })
    );
  };

  const handleComboImageChange = (combo: ProductCombo, imageUrl: string) => {
    if (onUpdateImage) {
      onUpdateImage(combo, imageUrl, "product");
    }
  };

  const handleNxImageChange = (combo: ProductCombo, imageUrl: string) => {
    if (onUpdateImage) {
      onUpdateImage(combo, imageUrl, "nx");
    }
  };

  const toggleComboExpansion = (comboId: string) => {
    setExpandedCombo(expandedCombo === comboId ? null : comboId);
  };

  const getNutritionIcon = (type: string, value: number) => {
    if (type === "calories") {
      if (value > 200) return <FiTrendingUp className="text-red-500" />;
      if (value < 100) return <FiTrendingDown className="text-green-500" />;
      return <FiMinus className="text-yellow-500" />;
    }
    if (type === "fat") {
      if (value > 15) return <FiTrendingUp className="text-red-500" />;
      if (value < 5) return <FiTrendingDown className="text-green-500" />;
      return <FiMinus className="text-yellow-500" />;
    }
    if (type === "carb") {
      if (value > 30) return <FiTrendingUp className="text-red-500" />;
      if (value < 10) return <FiTrendingDown className="text-green-500" />;
      return <FiMinus className="text-yellow-500" />;
    }
    if (type === "protein") {
      if (value > 20) return <FiTrendingUp className="text-green-500" />;
      if (value < 5) return <FiTrendingDown className="text-yellow-500" />;
      return <FiMinus className="text-yellow-500" />;
    }
    return <FiActivity className="text-gray-500" />;
  };

  const getStockStatus = (stocks: number) => {
    if (stocks < 20)
      return { color: "text-red-600", bg: "bg-red-100", label: "Low" };
    if (stocks < 50)
      return { color: "text-yellow-600", bg: "bg-yellow-100", label: "Medium" };
    return { color: "text-green-600", bg: "bg-green-100", label: "High" };
  };

  const calculateComboPrice = (combo: ProductCombo) => {
    // Use the combo's pricing if available, otherwise calculate from products
    if (combo.pricings && combo.pricings.length > 0) {
      const pricing = combo.pricings[0];
      return {
        totalPrice: pricing.purchasePrice || 0,
        discountedPrice: pricing.price || 0,
        discount: pricing.offerPercentage || 0,
        quantity: pricing.quantity || "1",
        uom: pricing.uom || "kg",
        appPercentage: pricing.appPercentage || 0,
        appSalePrice: pricing.appSalePrice || 0,
      };
    }

    // Fallback to calculation from products
    const totalPrice = combo.products.reduce((sum, item) => {
      return sum + (item.pricing?.purchasePrice || 0) * item.quantity;
    }, 0);

    const salePrice = combo.products.reduce((sum, item) => {
      return sum + (item.pricing?.price || 0) * item.quantity;
    }, 0);

    const discountedPrice =
      salePrice * (1 - (combo.discountPercentage || 0) / 100);

    return {
      totalPrice,
      discountedPrice,
      discount: combo.discountPercentage || 0,
      quantity: "1",
      uom: "kg",
      appPercentage: 0,
      appSalePrice: discountedPrice - totalPrice,
    };
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          <p className="mt-4 text-gray-600">Loading combos...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Product Combos ({data.length})
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>
                Showing {indexOfFirstItem + 1}-
                {Math.min(indexOfLastItem, totalItems)} of {totalItems}
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Combo Images
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price & Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nutrition Index
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <FiPackage className="h-12 w-12 text-gray-400" />
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">
                        No combos found
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                        Get started by adding a new combo
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentItems.map((combo) => {
                  const {
                    totalPrice,
                    discountedPrice,
                    discount,
                    quantity,
                    uom,
                    appPercentage,
                    appSalePrice,
                  } = calculateComboPrice(combo);

                  return (
                    <React.Fragment key={combo.id}>
                      <tr className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {combo.id.split("-")[1]}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                              <div
                                className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
                                onClick={() =>
                                  setSelectedImage({
                                    src: combo.productImage,
                                    alt: `${combo.name} - Product Image`,
                                  })
                                }
                              >
                                <img
                                  src={combo.productImage}
                                  alt={combo.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-xs text-gray-500 mt-1">
                                Product
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div
                                className="w-16 h-16 rounded object-cover cursor-pointer border border-gray-200 overflow-hidden"
                                onClick={() =>
                                  setSelectedImage({
                                    src: combo.nxImage,
                                    alt: `${combo.name} - NX Image`,
                                  })
                                }
                              >
                                <img
                                  src={combo.nxImage}
                                  alt={combo.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-xs text-gray-500 mt-1">
                                NX
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {combo.name}
                          </div>
                          <div className="text-xs text-gray-500 pt-2">
                            <span className="inline-block mr-1 px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
                              {combo.category}
                            </span>
                            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                              {combo.subCategory}
                            </span>
                          </div>
                          <div className="flex items-center pt-2">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-900 mr-2">
                                Stock: {combo.stocks}
                              </span>
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  getStockStatus(combo.stocks || 0).bg
                                } ${getStockStatus(combo.stocks || 0).color}`}
                              >
                                {getStockStatus(combo.stocks || 0).label}
                              </span>
                            </div>
                          </div>
                        </td>
                        {/* <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex flex-col space-y-2">
                            <div className="bg-gray-50 p-2 rounded">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-sm font-medium text-gray-700">
                                  Pack :
                                </span>
                                <span className="text-sm font-bold text-gray-900">
                                  {quantity} {uom}
                                </span>
                              </div>
                              <div className="flex justify-between items-center gap-2 mt-1">
                                <span className="text-sm font-medium text-gray-700">
                                  SP:
                                </span>
                                <span className="text-sm font-bold text-gray-900">
                                  ₹{discountedPrice.toFixed(2)}
                                </span>
                                {discount > 0 && (
                                  <span className="text-sm text-emerald-600 font-medium">
                                    {discount}% off
                                  </span>
                                )}
                              </div>
                              <div className="flex justify-between items-center gap-2 mt-1">
                                <span className="text-sm font-medium text-gray-700">
                                  PP:
                                </span>
                                <span className="text-sm font-bold text-gray-900">
                                  ₹{totalPrice.toFixed(2)}
                                </span>
                              </div>
                              {appPercentage > 0 && (
                                <div className="flex justify-between items-center gap-2 mt-1">
                                  <span className="text-sm font-medium text-gray-700">
                                    APP:
                                  </span>
                                  <span className="text-sm font-bold text-emerald-600">
                                    {appPercentage}%
                                  </span>
                                </div>
                              )}
                              {appSalePrice > 0 && (
                                <div className="flex justify-between items-center gap-2 mt-1">
                                  <span className="text-sm font-medium text-gray-700">
                                    Profit:
                                  </span>
                                  <span className="text-sm font-bold text-emerald-600">
                                    ₹{appSalePrice.toFixed(2)}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center">
                              <button
                                onClick={() => toggleComboExpansion(combo.id)}
                                className="flex items-center gap-2 mr-3 transition text-sm font-medium"
                              >
                                {expandedCombo === combo.id ? (
                                  <>
                                    <FiChevronUp className="h-5 w-5 text-emerald-600" />
                                  </>
                                ) : (
                                  <>
                                    <FiChevronDown className="h-5 w-5 text-rose-600" />
                                  </>
                                )}
                              </button>
                              <span className="text-xs text-gray-500">
                                {combo.products.length} products
                              </span>
                            </div>
                          </div>
                        </td> */}
                        <td className="px-2 py-2 whitespace-nowrap">
                          <div className="flex flex-col space-y-2">
                            <div className="bg-gray-50 p-2 rounded gap-2">
                              <div>
                                <span className="text-sm font-medium text-gray-700">
                                  Pack :
                                </span>
                                <span className="text-sm font-bold text-gray-900 ml-1">
                                  {quantity} {uom}
                                </span>
                                <span className="text-sm font-medium text-gray-700 ml-4">
                                  SP:
                                </span>
                                <span className="text-sm font-bold text-gray-900 ml-1">
                                  ₹{discountedPrice.toFixed(2)}
                                </span>
                                {discount > 0 && (
                                  <span className="text-sm text-emerald-600 font-medium ml-2">
                                    {discount}%
                                  </span>
                                )}
                              </div>

                              <div className="flex gap-2">
                                <span className="text-sm font-medium text-gray-700">
                                  PP:
                                </span>
                                <span className="text-sm font-bold text-gray-900 ml-1">
                                  ₹{totalPrice.toFixed(2)}
                                </span>
                                {appPercentage > 0 && (
                                  <div>
                                    <span className="text-sm font-medium text-gray-700">
                                      AP:
                                    </span>
                                    <span className="text-sm font-bold text-emerald-600 ml-1">
                                      {appPercentage}%
                                    </span>
                                  </div>
                                )}
                              </div>
                              {appSalePrice > 0 && (
                                <div>
                                  <span className="text-sm font-medium text-gray-700">
                                    ASP:
                                  </span>
                                  <span className="text-sm font-bold text-emerald-600 ml-1">
                                    ₹{appSalePrice.toFixed(2)}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center">
                              <button
                                onClick={() => toggleComboExpansion(combo.id)}
                                className="flex items-center gap-2 mr-3 transition text-sm font-medium"
                              >
                                {expandedCombo === combo.id ? (
                                  <FiChevronUp className="h-5 w-5 text-emerald-600" />
                                ) : (
                                  <FiChevronDown className="h-5 w-5 text-rose-600" />
                                )}
                              </button>
                              <span className="text-xs text-gray-500">
                                {combo.products.length} products
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon(
                                "calories",
                                combo.calories || 0
                              )}
                              <span className="ml-1">
                                Cal: {combo.calories}
                              </span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon("fat", combo.fat || 0)}
                              <span className="ml-1">Fat: {combo.fat}g</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon("carb", combo.carb || 0)}
                              <span className="ml-1">Carb: {combo.carb}g</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon("protein", combo.protein || 0)}
                              <span className="ml-1">
                                Pro: {combo.protein}g
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                handleToggleStatusWithConfirm(combo)
                              }
                              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                              style={{
                                backgroundColor:
                                  combo.status === "active"
                                    ? "#10b981"
                                    : "#ef4444",
                              }}
                            >
                              <span
                                className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                                style={{
                                  transform:
                                    combo.status === "active"
                                      ? "translateX(1.25rem)"
                                      : "translateX(0.25rem)",
                                }}
                              />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => onEdit(combo)}
                              className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
                              title="Edit"
                            >
                              <FiEdit2 className="text-lg" />
                            </button>
                            <button
                              onClick={() => onDelete(combo)}
                              className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
                              title="Delete"
                            >
                              <FiTrash2 className="text-lg" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      {expandedCombo === combo.id && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {combo.products.map((item) => (
                                <div
                                  key={item.id}
                                  className="p-4 rounded-lg border border-gray-200 bg-white"
                                >
                                  <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center">
                                      <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-12 h-12 rounded object-cover mr-3"
                                      />
                                      <div>
                                        <span className="font-medium text-gray-800">
                                          {item.product.name}
                                        </span>
                                        <div className="text-xs text-gray-600 mt-1">
                                          Qty: {item.quantity}{" "}
                                          {item.pricing?.uom}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">
                                        Purchase Price:
                                      </span>
                                      <span className="font-medium">
                                        ₹
                                        {(
                                          item.pricing?.purchasePrice || 0
                                        ).toFixed(2)}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">
                                        Sale Price:
                                      </span>
                                      <span className="font-medium">
                                        ₹{(item.pricing?.price || 0).toFixed(2)}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">
                                        APP %:
                                      </span>
                                      <span className="font-medium">
                                        {item.pricing?.appPercentage || 0}%
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">
                                        Profit Amount:
                                      </span>
                                      <span className="font-medium">
                                        ₹
                                        {(
                                          item.pricing?.appSalePrice || 0
                                        ).toFixed(2)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={totalItems}
              perPage={itemsPerPage}
            />
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-screen p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              <FiEyeOff className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
