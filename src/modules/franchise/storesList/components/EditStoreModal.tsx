// src/modules/franchise/stores/components/EditStoreModal.tsx
import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import {
  updateStoreAsync,
  Store,
} from "../../franchiseLocations/franchiseLocationsSlice";
import { FiX, FiInfo } from "react-icons/fi";
import { toast } from "react-toastify";

interface EditStoreModalProps {
  store: Store;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  address?: string;
  manager?: string;
  contact?: string;
  type?: string;
  sales?: string;
}

export default function EditStoreModal({
  store,
  onClose,
}: EditStoreModalProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    id: store.id,
    name: store.name,
    address: store.address,
    city: store.city,
    manager: store.manager,
    contact: store.contact,
    status: store.status,
    type: store.type,
    sales: store.sales,
    locationId: store.locationId,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Store name is required";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (!formData.manager.trim()) {
      errors.manager = "Manager name is required";
    }

    if (!formData.contact.trim()) {
      errors.contact = "Contact number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.contact.replace(/\s/g, ""))) {
      errors.contact = "Please enter a valid contact number";
    }

    if (!formData.type.trim()) {
      errors.type = "Store type is required";
    }

    if (formData.sales < 0) {
      errors.sales = "Sales must be a positive number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: name === "sales" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(updateStoreAsync(formData as Store)).unwrap();

      toast.success("Store updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update store. Please try again.");
      console.error("Error updating store:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Edit Store</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Store Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                ref={firstInputRef}
                required
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.address ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.address && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.address}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                disabled
              />
            </div>

            <div>
              <label
                htmlFor="manager"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Manager <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="manager"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.manager ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.manager && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.manager}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contact <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.contact ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.contact && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.contact}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Store Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                    formErrors.type ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                >
                  <option value="Supermarket">Supermarket</option>
                  <option value="Convenience Store">Convenience Store</option>
                  <option value="Mini Market">Mini Market</option>
                  <option value="Hypermarket">Hypermarket</option>
                </select>
                {formErrors.type && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiInfo className="mr-1" />
                    {formErrors.type}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="sales"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sales ($)
              </label>
              <input
                type="number"
                id="sales"
                name="sales"
                value={formData.sales}
                onChange={handleChange}
                min="0"
                step="0.01"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.sales ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.sales && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.sales}
                </p>
              )}
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
              disabled={isSubmitting}
              className={`px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg shadow-md transition-all duration-200 flex items-center ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:from-emerald-700 hover:to-teal-800"
              }`}
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
                "Update Store"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
