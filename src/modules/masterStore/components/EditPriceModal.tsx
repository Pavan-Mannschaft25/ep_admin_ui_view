// src/modules/masterStore/components/EditPriceModal.tsx
import React, { useState, useEffect } from "react";
import { FiX, FiSave } from "react-icons/fi";
import { ProductPricing, Product } from "../productsSlice";

interface EditPriceModalProps {
  product: Product;
  pricing: ProductPricing;
  onClose: () => void;
  onUpdatePricing: (
    productId: string,
    pricingId: string,
    pricing: ProductPricing
  ) => void;
}

export default function EditPriceModal({
  product,
  pricing,
  onClose,
  onUpdatePricing,
}: EditPriceModalProps) {
  const [formData, setFormData] = useState<ProductPricing>({
    id: pricing.id,
    quantity: pricing.quantity,
    uom: pricing.uom,
    purchasePrice: pricing.purchasePrice,
    price: pricing.price,
    offerPercentage: pricing.offerPercentage,
    appSalePrice: pricing.appSalePrice,
    cgst: pricing.cgst,
    sgst: pricing.sgst,
    appPercentage: pricing.appPercentage,
    status: pricing.status,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      const numValue =
        name === "quantity" || name === "uom" ? value : parseFloat(value) || 0;

      // Create updated form data
      const updatedFormData = { ...formData, [name]: numValue };

      // Auto-calculate values when purchasePrice, price, or offerPercentage changes
      if (
        name === "purchasePrice" ||
        name === "price" ||
        name === "offerPercentage"
      ) {
        const purchasePrice =
          name === "purchasePrice" ? numValue : formData.purchasePrice;
        const price = name === "price" ? numValue : formData.price;
        const offerPercentage =
          name === "offerPercentage" ? numValue : formData.offerPercentage;

        // Calculate sale price after offer
        const salePrice = price * (1 - offerPercentage / 100);

        // Calculate app sale price (profit margin)
        const appSalePrice = salePrice - purchasePrice;

        // Calculate app percentage (profit margin percentage)
        const appPercentage =
          salePrice > 0 ? Math.round((appSalePrice / salePrice) * 100) : 0;

        // Calculate app amount (profit amount in rupees)
        const appAmount = appSalePrice;

        // Update form data with calculated values
        updatedFormData.appSalePrice = appSalePrice;
        updatedFormData.appPercentage = appPercentage;
        updatedFormData.appAmount = appAmount;
      }

      setFormData(updatedFormData);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePricing(product.id, pricing.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit Pricing for {product.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UOM
              </label>
              <select
                name="uom"
                value={formData.uom}
                onChange={handleSelectChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="l">l</option>
                <option value="ml">ml</option>
                <option value="pcs">pcs</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purchase Price (₹)
              </label>
              <input
                type="number"
                name="purchasePrice"
                value={formData.purchasePrice}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selling Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Offer Percentage (%)
              </label>
              <input
                type="number"
                name="offerPercentage"
                value={formData.offerPercentage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min="0"
                max="100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sale Price (₹)
              </label>
              <input
                type="number"
                name="salePrice"
                value={(
                  formData.price *
                  (1 - formData.offerPercentage / 100)
                ).toFixed(2)}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CGST (%)
              </label>
              <input
                type="number"
                name="cgst"
                value={formData.cgst}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min="0"
                max="100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SGST (%)
              </label>
              <input
                type="number"
                name="sgst"
                value={formData.sgst}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min="0"
                max="100"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profit Amount (₹)
              </label>
              <input
                type="number"
                name="appSalePrice"
                value={formData.appSalePrice.toFixed(2)}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profit Margin (%)
              </label>
              <input
                type="number"
                name="appPercentage"
                value={formData.appPercentage}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="status"
              id="status"
              checked={formData.status}
              onChange={handleInputChange}
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label
              htmlFor="status"
              className="ml-2 block text-sm text-gray-700"
            >
              Active
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              <FiSave className="h-4 w-4" />
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
