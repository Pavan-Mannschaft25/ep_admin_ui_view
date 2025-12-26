// src/modules/nutritionists/components/EditNutritionistModal.tsx
import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { updateNutritionistAsync, Nutritionist } from "../nutritionistSlice";
import { FiX, FiInfo } from "react-icons/fi";
import { toast } from "react-toastify";

interface EditNutritionistModalProps {
  nutritionist: Nutritionist;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  specialization?: string;
  experience?: string;
  consultationFee?: string;
}

export default function EditNutritionistModal({
  nutritionist,
  onClose,
}: EditNutritionistModalProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    id: nutritionist.id,
    name: nutritionist.name,
    email: nutritionist.email,
    phone: nutritionist.phone,
    specialization: nutritionist.specialization,
    experience: nutritionist.experience,
    status: nutritionist.status,
    joinedDate: nutritionist.joinedDate,
    location: nutritionist.location,
    rating: nutritionist.rating,
    consultationFee: nutritionist.consultationFee,
    patientsCount: nutritionist.patientsCount || 0,
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
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.specialization.trim()) {
      errors.specialization = "Specialization is required";
    }

    if (formData.experience < 0 || formData.experience > 50) {
      errors.experience = "Experience must be between 0 and 50 years";
    }

    if (formData.consultationFee < 0) {
      errors.consultationFee = "Consultation fee must be a positive number";
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
      [name]:
        name === "experience" || name === "consultationFee"
          ? parseFloat(value) || 0
          : value,
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
      // Use the async thunk for updating a nutritionist
      await dispatch(
        updateNutritionistAsync(formData as Nutritionist)
      ).unwrap();
      toast.success("Nutritionist updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update nutritionist. Please try again.");
      console.error("Error updating nutritionist:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Edit Nutritionist</h3>
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
                Name <span className="text-red-500">*</span>
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.phone ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.phone && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="specialization"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Specialization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.specialization
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                required
              />
              {formErrors.specialization && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.specialization}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Experience (years) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  min="0"
                  max="50"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                    formErrors.experience ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.experience && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiInfo className="mr-1" />
                    {formErrors.experience}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="consultationFee"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Consultation Fee ($) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="consultationFee"
                  name="consultationFee"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                    formErrors.consultationFee
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formErrors.consultationFee && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiInfo className="mr-1" />
                    {formErrors.consultationFee}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              />
            </div>

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
                "Update Nutritionist"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
