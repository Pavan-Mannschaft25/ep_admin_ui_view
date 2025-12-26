// src/modules/masterStore/components/ProductTable.tsx
import React, { useState } from "react";
import { Product, ProductPricing } from "../productsSlice";
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
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Pagination from "../../../components/common/Pagination";
import ImageUpload from "../../../components/common/ImageUpload";
import AddPriceModal from "./AddPriceModal";
import EditPriceModal from "./EditPriceModal";

interface ProductTableProps {
  data: Product[];
  isLoading: boolean;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  onToggleStatus: (product: Product) => void;
  onUpdatePrice: (product: Product, price: number) => void;
  onUpdateImage?: (
    product: Product,
    imageUrl: string,
    imageType: "product" | "nx"
  ) => void;
  onAddPricing: (
    productId: string,
    pricing: Omit<ProductPricing, "id">
  ) => void;
  onUpdatePricing: (
    productId: string,
    pricingId: string,
    pricing: ProductPricing
  ) => void;
  onDeletePricing: (productId: string, pricingId: string) => void;
  onTogglePricingStatus: (productId: string, pricingId: string) => void;
}

export default function ProductTable({
  data,
  isLoading,
  onEdit,
  onDelete,
  onUpdatePrice,
  onUpdateImage,
  onToggleStatus,
  onAddPricing,
  onUpdatePricing,
  onDeletePricing,
  onTogglePricingStatus,
}: ProductTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [priceInput, setPriceInput] = useState<{ [key: string]: string }>({});
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [showAddPriceModal, setShowAddPriceModal] = useState(false);
  const [showEditPriceModal, setShowEditPriceModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedPricing, setSelectedPricing] = useState<ProductPricing | null>(
    null
  );
  const [expandedPricing, setExpandedPricing] = useState<{
    [key: string]: boolean;
  }>({});
  const dispatch = useAppDispatch();

  // Calculate pagination values
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Helper function to get the active pricing for a product
  // const getActivePricing = (product: Product) => {
  //   return product.pricings.find((pricing) => pricing.status === true) || null;
  // };

  const togglePricingExpansion = (productId: string) => {
    setExpandedPricing((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePriceChange = (productId: string, value: string) => {
    setPriceInput({ ...priceInput, [productId]: value });
  };

  const handleToggleStatusWithConfirm = (product: Product) => {
    const newStatus = product.status === "active" ? "inactive" : "active";
    const actionText = newStatus === "active" ? "activate" : "deactivate";

    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to ${actionText} product "${product.name}"?`,
        confirmButtonText: `Yes, ${actionText}`,
        onConfirm: () => {
          onToggleStatus(product);
        },
      })
    );
  };

  const handlePriceUpdate = (product: Product) => {
    const newPrice = parseFloat(priceInput[product.id] || "0");

    if (!isNaN(newPrice) && newPrice >= 0) {
      onUpdatePrice(product, newPrice);
      setPriceInput({ ...priceInput, [product.id]: "" });
    }
  };

  const handleProductImageChange = (product: Product, imageUrl: string) => {
    if (onUpdateImage) {
      onUpdateImage(product, imageUrl, "product");
    }
  };

  const handleNxImageChange = (product: Product, imageUrl: string) => {
    if (onUpdateImage) {
      onUpdateImage(product, imageUrl, "nx");
    }
  };

  const toggleProductExpansion = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const openAddPriceModal = (product: Product) => {
    setSelectedProduct(product);
    setShowAddPriceModal(true);
  };

  const openEditPriceModal = (product: Product, pricing: ProductPricing) => {
    setSelectedProduct(product);
    setSelectedPricing(pricing);
    setShowEditPriceModal(true);
  };

  const handleAddPricing = (newPricing: Omit<ProductPricing, "id">) => {
    if (selectedProduct) {
      onAddPricing(selectedProduct.id, newPricing);
      setShowAddPriceModal(false);
      setSelectedProduct(null);
    }
  };

  const handleEditPricing = (updatedPricing: ProductPricing) => {
    if (selectedProduct && selectedPricing) {
      onUpdatePricing(selectedProduct.id, selectedPricing.id, updatedPricing);
      setShowEditPriceModal(false);
      setSelectedProduct(null);
      setSelectedPricing(null);
    }
  };

  const handleDeletePricing = (productId: string, pricingId: string) => {
    dispatch(
      showConfirmationModal({
        title: "Confirm Delete",
        message: "Are you sure you want to delete this pricing?",
        confirmButtonText: "Delete",
        onConfirm: () => {
          onDeletePricing(productId, pricingId);
        },
      })
    );
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
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
              Master Store Products ({data.length})
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
                  Product Images
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price Management
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
                        No products found
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                        Get started by adding a new product
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentItems.map((product) => {
                  // const activePricing = getActivePricing(product);
                  return (
                    <React.Fragment key={product.id}>
                      <tr className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {product.id.split("-")[1]}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                              <ImageUpload
                                initialImage={product.image}
                                onImageChange={(imageUrl) =>
                                  handleProductImageChange(product, imageUrl)
                                }
                                size="sm"
                              />
                              <span className="text-xs text-gray-500 mt-1">
                                Product
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <ImageUpload
                                initialImage={product.nxImage}
                                onImageChange={(imageUrl) =>
                                  handleNxImageChange(product, imageUrl)
                                }
                                size="sm"
                              />
                              <span className="text-xs text-gray-500 mt-1">
                                NX
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-xs text-gray-500 pt-2">
                            <span className="inline-block mr-1 px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
                              {product.category}
                            </span>
                            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                              {product.subCategory}
                            </span>
                          </div>
                          <div className="flex items-center pt-2">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-900 mr-2">
                                Stock: {product.stocks}
                              </span>
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  getStockStatus(product.stocks).bg
                                } ${getStockStatus(product.stocks).color}`}
                              >
                                {getStockStatus(product.stocks).label}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex flex-col space-y-2">
                            <div className="space-y-2">
                              {product.pricings.length > 0 && (
                                <>
                                  {product.pricings
                                    .slice(
                                      0,
                                      expandedPricing[product.id]
                                        ? product.pricings.length
                                        : 1
                                    )
                                    .map((pricing) => (
                                      <div
                                        key={pricing.id}
                                        className={`p-2 rounded border ${
                                          pricing.status
                                            ? "bg-white border-gray-200"
                                            : "bg-gray-50 border-gray-100"
                                        }`}
                                      >
                                        <div className="flex justify-between items-center">
                                          <div className="text-sm font-medium text-gray-800">
                                            {pricing.quantity} {pricing.uom}
                                          </div>

                                          <div className="flex items-center">
                                            <span className="text-sm text-gray-600">
                                              ₹{pricing.price}
                                            </span>
                                            {pricing.offerPercentage > 0 && (
                                              <span className="ml-1 px-1 py-0.5 text-xs text-emerald-600 font-medium bg-emerald-50 rounded">
                                                {pricing.offerPercentage}%
                                              </span>
                                            )}
                                          </div>
                                        </div>

                                        <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                                          <span>
                                            PP:₹{pricing.purchasePrice}
                                          </span>
                                          <span>
                                            AP:{pricing.appPercentage}%
                                          </span>
                                          <span>
                                            ASP:₹{pricing.appSalePrice}
                                          </span>
                                        </div>
                                      </div>
                                    ))}

                                  {product.pricings.length > 1 && (
                                    <button
                                      onClick={() =>
                                        togglePricingExpansion(product.id)
                                      }
                                      className="flex items-center justify-center w-full py-1 text-xs text-emerald-600 hover:text-emerald-800 font-medium bg-emerald-50 hover:bg-emerald-100 rounded transition-colors"
                                    >
                                      {expandedPricing[product.id] ? (
                                        <>
                                          <FiChevronUp className="mr-1" />
                                          Show Less (
                                          {product.pricings.length - 1} more)
                                        </>
                                      ) : (
                                        <>
                                          <FiChevronDown className="mr-1" />+
                                          {product.pricings.length - 1} more
                                        </>
                                      )}
                                    </button>
                                  )}
                                </>
                              )}

                              {product.pricings.length === 0 && (
                                <div className="p-2 rounded border border-gray-200 bg-gray-50 text-center">
                                  <p className="text-xs text-gray-500">
                                    No pricing options
                                  </p>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center">
                              <button
                                onClick={() =>
                                  toggleProductExpansion(product.id)
                                }
                                className="flex items-center gap-2 mr-3 transition text-sm font-medium"
                              >
                                {expandedProduct === product.id ? (
                                  <>
                                    <FiChevronUp className="h-5 w-5 text-emerald-600" />
                                    {/* <span className="text-emerald-600">
                                      Configured
                                    </span> */}
                                  </>
                                ) : (
                                  <>
                                    <FiChevronDown className="h-5 w-5 text-rose-600" />
                                    {/* <span className="text-rose-600">
                                      Not Configured
                                    </span> */}
                                  </>
                                )}
                              </button>

                              <button
                                onClick={() => openAddPriceModal(product)}
                                className="text-green-600 hover:text-green-900 mr-3"
                              >
                                <FiPlus className="h-5 w-5" />
                              </button>
                              <span className="text-xs text-gray-500">
                                {product.pricings.length} pricing options
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon("calories", product.calories)}
                              <span className="ml-1">
                                Cal: {product.calories}
                              </span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon("fat", product.fat)}
                              <span className="ml-1">Fat: {product.fat}g</span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon("carb", product.carb)}
                              <span className="ml-1">
                                Carb: {product.carb}g
                              </span>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded">
                              {getNutritionIcon("protein", product.protein)}
                              <span className="ml-1">
                                Pro: {product.protein}g
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                handleToggleStatusWithConfirm(product)
                              }
                              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                              style={{
                                backgroundColor:
                                  product.status === "active"
                                    ? "#10b981"
                                    : "#ef4444",
                              }}
                            >
                              <span
                                className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                                style={{
                                  transform:
                                    product.status === "active"
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
                              onClick={() => onEdit(product)}
                              className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-blue-200 transition-colors duration-150"
                              title="Edit"
                            >
                              <FiEdit2 className="text-lg" />
                            </button>
                            <button
                              onClick={() => onDelete(product)}
                              className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-150"
                              title="Delete"
                            >
                              <FiTrash2 className="text-lg" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      {expandedProduct === product.id && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {product.pricings.map((pricing) => (
                                <div
                                  key={pricing.id}
                                  className={`p-4 rounded-lg border ${
                                    pricing.status
                                      ? "bg-white border-gray-200"
                                      : "bg-gray-50 border-gray-100"
                                  }`}
                                >
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <span className="font-medium text-gray-800">
                                        {pricing.quantity} {pricing.uom}
                                      </span>
                                      <div className="flex items-center mt-1">
                                        <span className="text-sm text-gray-500">
                                          ₹{pricing.purchasePrice} → ₹
                                          {pricing.price}
                                        </span>
                                        {pricing.offerPercentage > 0 && (
                                          <span className="ml-2 text-sm text-emerald-600 font-medium">
                                            {pricing.offerPercentage}% off
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <button
                                        onClick={() =>
                                          onTogglePricingStatus(
                                            product.id,
                                            pricing.id
                                          )
                                        }
                                        className="flex items-center justify-center"
                                      >
                                        {pricing.status ? (
                                          <FiToggleRight className="h-5 w-5 text-emerald-500" />
                                        ) : (
                                          <FiToggleLeft className="h-5 w-5 text-gray-400" />
                                        )}
                                      </button>
                                      <button
                                        onClick={() =>
                                          openEditPriceModal(product, pricing)
                                        }
                                        className="p-1 text-green-600 hover:text-green-800 transition-colors duration-150"
                                      >
                                        <FiEdit2 className="h-4 w-4" />
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleDeletePricing(
                                            product.id,
                                            pricing.id
                                          )
                                        }
                                        className="p-1 text-red-600 hover:text-red-800 transition-colors duration-150"
                                      >
                                        <FiTrash2 className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">
                                        APP %:
                                      </span>
                                      <span className="font-medium">
                                        {pricing.appPercentage}% (Margin)
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">
                                        Profit Amount:
                                      </span>
                                      <span className="font-medium">
                                        ₹{pricing.appSalePrice}
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

      {/* Add Price Modal */}
      {showAddPriceModal && selectedProduct && (
        <AddPriceModal
          product={selectedProduct}
          onClose={() => {
            setShowAddPriceModal(false);
            setSelectedProduct(null);
          }}
          onAddPricing={handleAddPricing}
        />
      )}

      {/* Edit Price Modal */}
      {showEditPriceModal && selectedProduct && selectedPricing && (
        <AddPriceModal
          product={selectedProduct}
          pricing={selectedPricing}
          onClose={() => {
            setShowEditPriceModal(false);
            setSelectedProduct(null);
            setSelectedPricing(null);
          }}
          onAddPricing={handleAddPricing}
        />
      )}
    </>
  );
}
