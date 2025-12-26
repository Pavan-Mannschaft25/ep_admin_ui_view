// ProductPage.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiPlus,
  FiToggleLeft,
  FiToggleRight,
  FiEdit2,
  FiTrash2,
  FiPackage,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import AddPriceModal from "../components/AddPriceModal";
import Pagination from "../../../components/common/Pagination";

interface ProductPricing {
  id: string;
  quantity: string;
  uom: string;
  purchasePrice: number;
  price: number;
  offerPercentage: number;
  appSalePrice: number;
  cgst: number;
  sgst: number;
  appPercentage: number;
  status: boolean;
}

interface Product {
  id: string;
  name: string;
  status: boolean;
  pricings: ProductPricing[];
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Pumpkin Seeds",
    status: true,
    pricings: [
      {
        id: "1-1",
        quantity: "1",
        uom: "kg",
        purchasePrice: 400,
        price: 540,
        offerPercentage: 26,
        appSalePrice: 140, // 540 - 400 = 140
        cgst: 0,
        sgst: 0,
        appPercentage: 26, // ((540 - 400) / 540) * 100 = 26%
        status: true,
      },
      {
        id: "1-2",
        quantity: "500",
        uom: "g",
        purchasePrice: 200,
        price: 270,
        offerPercentage: 26,
        appSalePrice: 70, // 270 - 200 = 70
        cgst: 0,
        sgst: 0,
        appPercentage: 26, // ((270 - 200) / 270) * 100 = 26%
        status: true,
      },
      {
        id: "1-3",
        quantity: "250",
        uom: "g",
        purchasePrice: 100,
        price: 135,
        offerPercentage: 26,
        appSalePrice: 35, // 135 - 100 = 35
        cgst: 0,
        sgst: 0,
        appPercentage: 26, // ((135 - 100) / 135) * 100 = 26%
        status: false,
      },
    ],
  },
  {
    id: "2",
    name: "Sunflower Seeds",
    status: false,
    pricings: [
      {
        id: "2-1",
        quantity: "1",
        uom: "kg",
        purchasePrice: 350,
        price: 480,
        offerPercentage: 27,
        appSalePrice: 130, // 480 - 350 = 130
        cgst: 0,
        sgst: 0,
        appPercentage: 27, // ((480 - 350) / 480) * 100 = 27%
        status: true,
      },
      {
        id: "2-2",
        quantity: "500",
        uom: "g",
        purchasePrice: 175,
        price: 240,
        offerPercentage: 27,
        appSalePrice: 65, // 240 - 175 = 65
        cgst: 0,
        sgst: 0,
        appPercentage: 27, // ((240 - 175) / 240) * 100 = 27%
        status: false,
      },
    ],
  },
  // Add more mock products for pagination demonstration
  {
    id: "3",
    name: "Almonds",
    status: true,
    pricings: [
      {
        id: "3-1",
        quantity: "1",
        uom: "kg",
        purchasePrice: 800,
        price: 1200,
        offerPercentage: 33,
        appSalePrice: 400, // 1200 - 800 = 400
        cgst: 0,
        sgst: 0,
        appPercentage: 33, // ((1200 - 800) / 1200) * 100 = 33%
        status: true,
      },
    ],
  },
  {
    id: "4",
    name: "Cashews",
    status: true,
    pricings: [
      {
        id: "4-1",
        quantity: "500",
        uom: "g",
        purchasePrice: 400,
        price: 600,
        offerPercentage: 33,
        appSalePrice: 200, // 600 - 400 = 200
        cgst: 0,
        sgst: 0,
        appPercentage: 33, // ((600 - 400) / 600) * 100 = 33%
        status: true,
      },
    ],
  },
  {
    id: "5",
    name: "Walnuts",
    status: true,
    pricings: [
      {
        id: "5-1",
        quantity: "250",
        uom: "g",
        purchasePrice: 300,
        price: 450,
        offerPercentage: 33,
        appSalePrice: 150, // 450 - 300 = 150
        cgst: 0,
        sgst: 0,
        appPercentage: 33, // ((450 - 300) / 450) * 100 = 33%
        status: true,
      },
    ],
  },
];

export default function ProductPage() {
  const { storeId, categoryId, subcategoryId } = useParams<{
    storeId: string;
    categoryId: string;
    subcategoryId: string;
  }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [showAddPriceModal, setShowAddPriceModal] = useState(false);
  const [showEditPriceModal, setShowEditPriceModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedPricing, setSelectedPricing] = useState<ProductPricing | null>(
    null
  );
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  // Search and pagination state
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of products to show per page

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination values
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const toggleProductStatus = (productId: string) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, status: !product.status }
          : product
      )
    );
  };

  const togglePricingStatus = (productId: string, pricingId: string) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              pricings: product.pricings.map((p) =>
                p.id === pricingId ? { ...p, status: !p.status } : p
              ),
            }
          : product
      )
    );
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

  const handleAddPricing = (
    productId: string,
    newPricing: Omit<ProductPricing, "id">
  ) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              pricings: [
                ...product.pricings,
                { ...newPricing, id: `${productId}-${Date.now()}` },
              ],
            }
          : product
      )
    );
    setShowAddPriceModal(false);
    setSelectedProduct(null);
  };

  const handleEditPricing = (
    productId: string,
    pricingId: string,
    updatedPricing: ProductPricing
  ) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              pricings: product.pricings.map((p) =>
                p.id === pricingId ? updatedPricing : p
              ),
            }
          : product
      )
    );
    setShowEditPriceModal(false);
    setSelectedProduct(null);
    setSelectedPricing(null);
  };

  const handleDeletePricing = (productId: string, pricingId: string) => {
    if (window.confirm("Are you sure you want to delete this pricing?")) {
      setProducts(
        products.map((product) =>
          product.id === productId
            ? {
                ...product,
                pricings: product.pricings.filter((p) => p.id !== pricingId),
              }
            : product
        )
      );
    }
  };

  const toggleProductExpansion = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex items-center">
            <button
              onClick={() =>
                navigate(`/stores/store-products/${storeId}/category-list`)
              }
              className="mr-4 p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <FiArrowLeft className="text-lg" />
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">Products</h1>
          </div>
        </div>

        {/* Search and Add Product Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* <button
              onClick={() =>
                navigate(
                  `/stores/store-products/${storeId}/category/${categoryId}/subcategory/${subcategoryId}/add-product`
                )
              }
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 shadow-md"
            >
              <FiPlus className="text-lg" />
              <span>Add New Product</span>
            </button> */}
          </div>
        </div>

        {/* Products List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {currentProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <FiPackage className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm
                  ? "No products found matching your search"
                  : "No products found"}
              </h3>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pricing
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentProducts.map((product) => (
                      <React.Fragment key={product.id}>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                <span className="text-emerald-800 font-medium">
                                  {product.name.charAt(0)}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {product.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {product.pricings.length} pricing options
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => toggleProductStatus(product.id)}
                              className="flex items-center"
                            >
                              {product.status ? (
                                <FiToggleRight className="h-6 w-6 text-emerald-500" />
                              ) : (
                                <FiToggleLeft className="h-6 w-6 text-gray-400" />
                              )}
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {product.pricings.slice(0, 2).map((pricing) => (
                                <div
                                  key={pricing.id}
                                  className="flex items-center"
                                >
                                  <span className="font-medium">
                                    {pricing.quantity} {pricing.uom}
                                  </span>
                                  <span className="mx-2 text-gray-500">
                                    ₹{pricing.purchasePrice} → ₹{pricing.price}
                                  </span>
                                  {pricing.offerPercentage > 0 && (
                                    <span className="ml-2 text-sm text-emerald-600 font-medium">
                                      {pricing.offerPercentage}% off
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => toggleProductExpansion(product.id)}
                              className="text-emerald-600 hover:text-emerald-900 mr-3"
                            >
                              {expandedProduct === product.id ? (
                                <FiChevronUp className="h-5 w-5" />
                              ) : (
                                <FiChevronDown className="h-5 w-5" />
                              )}
                            </button>
                            <button
                              onClick={() => openAddPriceModal(product)}
                              className="text-green-600 hover:text-green-900 mr-3"
                            >
                              <FiPlus className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                        {expandedProduct === product.id && (
                          <tr>
                            <td colSpan={4} className="px-6 py-4 bg-gray-50">
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
                                            togglePricingStatus(
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
                                          Offer:
                                        </span>
                                        <span className="font-medium">
                                          {pricing.offerPercentage}% on Purchase
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
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">
                                          CGST:
                                        </span>
                                        <span className="font-medium">
                                          {pricing.cgst}%
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">
                                          SGST:
                                        </span>
                                        <span className="font-medium">
                                          {pricing.sgst}%
                                        </span>
                                      </div>
                                      <div className="flex justify-between col-span-2">
                                        <span className="text-gray-500">
                                          APP %:
                                        </span>
                                        <span className="font-medium">
                                          {pricing.appPercentage}% (Margin)
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
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Component */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                />
              )}
            </>
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
            onAddPricing={(newPricing) =>
              handleAddPricing(selectedProduct.id, newPricing)
            }
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
            onAddPricing={(newPricing) =>
              handleEditPricing(selectedProduct.id, selectedPricing.id, {
                ...newPricing,
                id: selectedPricing.id,
              })
            }
          />
        )}
      </div>
    </div>
  );
}
