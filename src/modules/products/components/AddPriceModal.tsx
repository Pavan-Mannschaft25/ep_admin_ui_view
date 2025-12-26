// AddPriceModal.tsx
import React, { useState, useEffect } from "react";
import { FiX, FiSave, FiPercent } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

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

interface AddPriceModalProps {
  product: Product;
  pricing?: ProductPricing;
  onClose: () => void;
  onAddPricing: (newPricing: Omit<ProductPricing, "id">) => void;
}

const uomOptions = ["kg", "g", "pcs", "ltr", "ml"];

export default function AddPriceModal({
  product,
  pricing,
  onClose,
  onAddPricing,
}: AddPriceModalProps) {
  const isEditMode = !!pricing;
  const [quantity, setQuantity] = useState(pricing?.quantity || "1");
  const [uom, setUom] = useState(pricing?.uom || "kg");
  const [purchasePrice, setPurchasePrice] = useState(
    pricing?.purchasePrice || 0
  );
  const [price, setPrice] = useState(pricing?.price || 0);
  const [offerPercentage, setOfferPercentage] = useState(
    pricing?.offerPercentage || 0
  );
  const [appPercentage, setAppPercentage] = useState(
    pricing?.appPercentage || 0
  );
  const [appSalePrice, setAppSalePrice] = useState(pricing?.appSalePrice || 0);
  const [cgst, setCgst] = useState(pricing?.cgst || 0);
  const [sgst, setSgst] = useState(pricing?.sgst || 0);
  const [status, setStatus] = useState(pricing?.status ?? true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate APP % (Margin) from Purchase and Sale Price
  // APP % = ((SP - CP) / SP) * 100
  useEffect(() => {
    if (purchasePrice > 0 && price > purchasePrice) {
      const margin = ((price - purchasePrice) / price) * 100;
      const rounded = Math.round(margin);
      setAppPercentage(rounded);

      // Also set offer percentage based on purchase to sale price
      const offer = Math.round((1 - price / purchasePrice) * 100);
      setOfferPercentage(offer);
    } else {
      setAppPercentage(0);
      setOfferPercentage(0);
    }
  }, [purchasePrice, price]);

  // Calculate Sale Price from APP % (Margin)
  // SP = CP / (1 - APP% / 100)
  useEffect(() => {
    if (purchasePrice > 0 && appPercentage > 0 && appPercentage < 100) {
      const calculatedPrice = purchasePrice / (1 - appPercentage / 100);
      setPrice(Math.round(calculatedPrice));

      // Also update offer percentage
      const offer = Math.round((1 - calculatedPrice / purchasePrice) * 100);
      setOfferPercentage(offer);
    }
  }, [purchasePrice, appPercentage]);

  // Calculate App Sale Price (Profit Amount)
  useEffect(() => {
    if (price > 0 && purchasePrice > 0) {
      setAppSalePrice(price - purchasePrice);
    } else {
      setAppSalePrice(0);
    }
  }, [price, purchasePrice]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!quantity || Number(quantity) <= 0) {
      newErrors.quantity = "Quantity must be greater than 0";
    }

    if (!purchasePrice || purchasePrice <= 0) {
      newErrors.purchasePrice = "Purchase price must be greater than 0";
    }

    if (!price || price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (price < purchasePrice) {
      newErrors.price = "Price cannot be less than purchase price";
    }

    if (cgst < 0 || cgst > 100) {
      newErrors.cgst = "CGST must be between 0 and 100";
    }

    if (sgst < 0 || sgst > 100) {
      newErrors.sgst = "SGST must be between 0 and 100";
    }

    if (appPercentage < 0 || appPercentage >= 100) {
      newErrors.appPercentage = "APP % must be between 0 and 99";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onAddPricing({
      quantity,
      uom,
      purchasePrice,
      price,
      offerPercentage,
      appSalePrice,
      cgst,
      sgst,
      appPercentage,
      status,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {isEditMode
              ? `Edit Pricing for ${product.name}`
              : `Add Pricing for ${product.name}`}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
          >
            <FiX className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.quantity ? "border-red-500" : "border-gray-300"
                  }`}
                  min="0"
                  step="1"
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  UOM
                </label>
                <select
                  value={uom}
                  onChange={(e) => setUom(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {uomOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purchase Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRupeeSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={purchasePrice || ""}
                  onChange={(e) =>
                    setPurchasePrice(Number(e.target.value) || 0)
                  }
                  className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.purchasePrice ? "border-red-500" : "border-gray-300"
                  }`}
                  min="0"
                  placeholder="0"
                />
              </div>
              {errors.purchasePrice && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.purchasePrice}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sale Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRupeeSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={price || ""}
                  onChange={(e) => setPrice(Number(e.target.value) || 0)}
                  className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                  min="0"
                  placeholder="0"
                />
              </div>
              {errors.price && (
                <p className="text-red-500 text-xs mt-1">{errors.price}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  APP % (Margin)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPercent className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={appPercentage || ""}
                    onChange={(e) =>
                      setAppPercentage(Number(e.target.value) || 0)
                    }
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    min="0"
                    max="99"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  ((SP - CP) / SP) × 100
                </p>
                {errors.appPercentage && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.appPercentage}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Offer %
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPercent className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={offerPercentage || ""}
                    onChange={(e) =>
                      setOfferPercentage(Number(e.target.value) || 0)
                    }
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    readOnly
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Auto-calculated</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profit Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRupeeSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={appSalePrice || ""}
                  readOnly
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="0"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Sale Price - Purchase Price
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CGST
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPercent className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={cgst || ""}
                    onChange={(e) => setCgst(Number(e.target.value) || 0)}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.cgst ? "border-red-500" : "border-gray-300"
                    }`}
                    min="0"
                    max="100"
                    placeholder="0"
                  />
                </div>
                {errors.cgst && (
                  <p className="text-red-500 text-xs mt-1">{errors.cgst}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SGST
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPercent className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={sgst || ""}
                    onChange={(e) => setSgst(Number(e.target.value) || 0)}
                    className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.sgst ? "border-red-500" : "border-gray-300"
                    }`}
                    min="0"
                    max="100"
                    placeholder="0"
                  />
                </div>
                {errors.sgst && (
                  <p className="text-red-500 text-xs mt-1">{errors.sgst}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  App Sale Price
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRupeeSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={appSalePrice || ""}
                    readOnly
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Auto-calculated</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setStatus(!status)}
                  className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  style={{ backgroundColor: status ? "#10b981" : "#d1d5db" }}
                >
                  <span
                    className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    style={{
                      transform: status ? "translateX(20px)" : "translateX(0)",
                    }}
                  />
                </button>
                <span className="ml-3 text-sm text-gray-700">
                  {status ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-150 flex items-center gap-2"
            >
              <FiSave className="text-sm" />
              <span>{isEditMode ? "Update" : "Submit"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
