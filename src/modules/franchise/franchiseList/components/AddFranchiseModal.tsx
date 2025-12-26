// // src/modules/franchise/franchise-list/components/AddFranchiseModal.tsx
// import React, { useState } from "react";
// import { useAppDispatch } from "../../../../store/hooks";
// import { addFranchise } from "../franchiseSlice";
// import { Franchise } from "../franchiseSlice";
// import { FiX } from "react-icons/fi";

// interface AddFranchiseModalProps {
//   onClose: () => void;
// }

// export default function AddFranchiseModal({ onClose }: AddFranchiseModalProps) {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState({
//     storeName: "",
//     location: "",
//     manager: "",
//     phone: "",
//     status: "Pending" as Franchise["status"],
//     hours: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(addFranchise(formData));
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900">
//             Add New Franchise
//           </h3>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <FiX className="h-6 w-6" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6">
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="storeName"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Store Name
//               </label>
//               <input
//                 type="text"
//                 id="storeName"
//                 name="storeName"
//                 value={formData.storeName}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="location"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="manager"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Manager
//               </label>
//               <input
//                 type="text"
//                 id="manager"
//                 name="manager"
//                 value={formData.manager}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="status"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Status
//               </label>
//               <select
//                 id="status"
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="Pending">Pending</option>
//               </select>
//             </div>

//             <div>
//               <label
//                 htmlFor="hours"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Operating Hours
//               </label>
//               <input
//                 type="text"
//                 id="hours"
//                 name="hours"
//                 value={formData.hours}
//                 onChange={handleChange}
//                 placeholder="e.g., 9:00 AM - 8:00 PM"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
//             >
//               Add Franchise
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// // src/modules/franchise/franchise-list/components/AddFranchiseModal.tsx
// import React, { useState } from "react";
// import { useAppDispatch } from "../../../../store/hooks";
// import { addFranchise } from "../franchiseSlice";
// import { Franchise } from "../franchiseSlice";
// import { FiX } from "react-icons/fi";

// interface AddFranchiseModalProps {
//   onClose: () => void;
// }

// export default function AddFranchiseModal({ onClose }: AddFranchiseModalProps) {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState({
//     storeName: "",
//     location: "",
//     manager: "",
//     phone: "",
//     email: "",
//     radius: 10,
//     percentage: 15,
//     status: "Pending" as Franchise["status"],
//     hours: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         name === "radius" || name === "percentage"
//           ? parseFloat(value) || 0
//           : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(addFranchise(formData));
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900">
//             Add New Franchise
//           </h3>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <FiX className="h-6 w-6" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6">
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="storeName"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Store Name
//               </label>
//               <input
//                 type="text"
//                 id="storeName"
//                 name="storeName"
//                 value={formData.storeName}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="location"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="manager"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Manager
//               </label>
//               <input
//                 type="text"
//                 id="manager"
//                 name="manager"
//                 value={formData.manager}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="radius"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Radius (km)
//                 </label>
//                 <input
//                   type="number"
//                   id="radius"
//                   name="radius"
//                   value={formData.radius}
//                   onChange={handleChange}
//                   min="1"
//                   max="100"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="percentage"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Percentage (%)
//                 </label>
//                 <input
//                   type="number"
//                   id="percentage"
//                   name="percentage"
//                   value={formData.percentage}
//                   onChange={handleChange}
//                   min="1"
//                   max="100"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="status"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Status
//               </label>
//               <select
//                 id="status"
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="Pending">Pending</option>
//               </select>
//             </div>

//             <div>
//               <label
//                 htmlFor="hours"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Operating Hours
//               </label>
//               <input
//                 type="text"
//                 id="hours"
//                 name="hours"
//                 value={formData.hours}
//                 onChange={handleChange}
//                 placeholder="e.g., 9:00 AM - 8:00 PM"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
//             >
//               Add Franchise
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// src/modules/franchise/franchise-list/components/AddFranchiseModal.tsx
import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { addFranchise, addFranchiseAsync } from "../franchiseSlice";
import { Franchise } from "../franchiseSlice";
import { FiX, FiInfo } from "react-icons/fi";
import { toast } from "react-toastify";

interface AddFranchiseModalProps {
  onClose: () => void;
}

interface FormErrors {
  storeName?: string;
  location?: string;
  manager?: string;
  phone?: string;
  email?: string;
  radius?: string;
  percentage?: string;
  hours?: string;
}

export default function AddFranchiseModal({ onClose }: AddFranchiseModalProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    storeName: "",
    location: "",
    manager: "",
    phone: "",
    email: "",
    radius: 10,
    percentage: 15,
    status: "Pending" as Franchise["status"],
    hours: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus on first input when modal opens
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  // Track form changes
  useEffect(() => {
    const hasChanges =
      formData.storeName !== "" ||
      formData.location !== "" ||
      formData.manager !== "" ||
      formData.phone !== "" ||
      formData.email !== "" ||
      formData.hours !== "";

    setHasUnsavedChanges(hasChanges);
  }, [formData]);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.storeName.trim()) {
      errors.storeName = "Store name is required";
    }

    if (!formData.location.trim()) {
      errors.location = "Location is required";
    }

    if (!formData.manager.trim()) {
      errors.manager = "Manager name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid phone number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (formData.radius < 1 || formData.radius > 100) {
      errors.radius = "Radius must be between 1 and 100 km";
    }

    if (formData.percentage < 1 || formData.percentage > 100) {
      errors.percentage = "Percentage must be between 1 and 100";
    }

    if (!formData.hours.trim()) {
      errors.hours = "Operating hours are required";
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
        name === "radius" || name === "percentage"
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
      // Use the async thunk for adding a franchise
      await dispatch(addFranchiseAsync(formData)).unwrap();
      toast.success("Franchise added successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to add franchise. Please try again.");
      console.error("Error adding franchise:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to close?"
        )
      ) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Add New Franchise</h3>
          <button
            onClick={handleCancel}
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
                htmlFor="storeName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Store Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.storeName ? "border-red-500" : "border-gray-300"
                }`}
                ref={firstInputRef}
                required
              />
              {formErrors.storeName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.storeName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.location ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.location && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.location}
                </p>
              )}
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
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
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.email}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="radius"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Radius (km) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="radius"
                  name="radius"
                  value={formData.radius}
                  onChange={handleChange}
                  min="1"
                  max="100"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                    formErrors.radius ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.radius && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiInfo className="mr-1" />
                    {formErrors.radius}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="percentage"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Percentage (%) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="percentage"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleChange}
                  min="1"
                  max="100"
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                    formErrors.percentage ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.percentage && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiInfo className="mr-1" />
                    {formErrors.percentage}
                  </p>
                )}
              </div>
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

            <div>
              <label
                htmlFor="hours"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Operating Hours <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="hours"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                placeholder="e.g., 9:00 AM - 8:00 PM"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 ${
                  formErrors.hours ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.hours && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiInfo className="mr-1" />
                  {formErrors.hours}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={handleCancel}
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
                "Add Franchise"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
