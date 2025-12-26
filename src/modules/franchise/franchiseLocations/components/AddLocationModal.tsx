// src/modules/franchise/franchise-locations/components/AddLocationModal.tsx
import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { addLocationAsync } from "../franchiseLocationsSlice";
import { FiX, FiInfo } from "react-icons/fi";
import { toast } from "react-toastify";

interface AddLocationModalProps {
  partnerName: string;
  onClose: () => void;
}

interface FormErrors {
  city?: string;
  areaName?: string;
}

export default function AddLocationModal({
  partnerName,
  onClose,
}: AddLocationModalProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    city: "",
    areaName: "",
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

    if (!formData.city.trim()) {
      errors.city = "City is required";
    }

    if (!formData.areaName.trim()) {
      errors.areaName = "Area name is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      [name]: value,
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
      await dispatch(
        addLocationAsync({
          ...formData,
          partnerName,
        })
      ).unwrap();

      toast.success("Location added successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to add location. Please try again.");
      console.error("Error adding location:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Add New Location</h3>
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
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.city ? "border-red-500" : "border-gray-300"
                }`}
                ref={firstInputRef}
                required
              />
              {formErrors.city && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.city}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="areaName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Area Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="areaName"
                name="areaName"
                value={formData.areaName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.areaName ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.areaName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.areaName}
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
                  Adding...
                </>
              ) : (
                "Add Location"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
