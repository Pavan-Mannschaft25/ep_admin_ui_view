// // src/modules/fitness/masterConfig/components/EditCreditConfigModal.tsx
// import React, { useState, useEffect } from "react";
// import { useAppDispatch } from "../../../../store/hooks";
// import {
//   CreditConfig,
//   updateCreditConfig,
//   addCreditConfig,
// } from "../masterConfigSlice";
// import { FiX, FiSave } from "react-icons/fi";

// interface EditCreditConfigModalProps {
//   creditConfig: CreditConfig | null;
//   onClose: () => void;
// }

// const EditCreditConfigModal: React.FC<EditCreditConfigModalProps> = ({
//   creditConfig,
//   onClose,
// }) => {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState<Partial<CreditConfig>>({
//     category: "",
//     creditValue: 0,
//     platformMargin: 0,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (creditConfig) {
//       setFormData(creditConfig);
//     }
//   }, [creditConfig]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     const parsedValue = type === "number" ? parseFloat(value) || 0 : value;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: parsedValue,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const configData: CreditConfig = {
//       id: creditConfig?.id || Date.now().toString(),
//       category: formData.category || "",
//       creditValue: formData.creditValue || 0,
//       platformMargin: formData.platformMargin || 0,
//     };

//     if (creditConfig) {
//       // Update existing config
//       dispatch(updateCreditConfig(configData));
//     } else {
//       // Add new config
//       dispatch(addCreditConfig(configData));
//     }

//     setIsSubmitting(false);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
//         <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//           <h2 className="text-xl font-semibold">
//             {creditConfig
//               ? "Edit Credit Configuration"
//               : "Add Credit Configuration"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-white hover:text-gray-100 transition-colors"
//           >
//             <FiX className="h-6 w-6" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6">
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Category
//             </label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Credit Value (₹)
//             </label>
//             <input
//               type="number"
//               name="creditValue"
//               value={formData.creditValue}
//               onChange={handleChange}
//               required
//               min="1"
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Platform Margin (%)
//             </label>
//             <input
//               type="number"
//               name="platformMargin"
//               value={
//                 formData.platformMargin ? formData.platformMargin * 100 : ""
//               }
//               onChange={(e) => {
//                 const value = parseFloat(e.target.value) / 100;
//                 setFormData((prev) => ({ ...prev, platformMargin: value }));
//               }}
//               required
//               min="0"
//               max="100"
//               step="0.1"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="flex justify-end gap-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md flex items-center gap-2"
//             >
//               <FiSave className="text-lg" />
//               <span>{creditConfig ? "Update" : "Save"}</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditCreditConfigModal;

// src/modules/fitness/masterConfig/components/EditCreditConfigModal.tsx
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import {
  CreditConfig,
  updateCreditConfig,
  addCreditConfig,
} from "../masterConfigSlice";
import {
  FiX,
  FiSave,
  FiTag,
  FiActivity,
  FiMusic,
  FiHeart,
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiDroplet,
  FiWind,
  FiBox,
  FiNavigation,
} from "react-icons/fi";

interface EditCreditConfigModalProps {
  creditConfig: CreditConfig | null;
  onClose: () => void;
}

const EditCreditConfigModal: React.FC<EditCreditConfigModalProps> = ({
  creditConfig,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Partial<CreditConfig>>({
    category: "",
    creditValue: 50, // Default to ₹50
    platformMargin: 0,
    color: "bg-gray-500",
    icon: "activity",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const iconOptions = [
    { value: "activity", icon: <FiActivity />, label: "Activity" },
    { value: "music", icon: <FiMusic />, label: "Music" },
    { value: "heart", icon: <FiHeart />, label: "Heart" },
    { value: "zap", icon: <FiZap />, label: "Zap" },
    { value: "target", icon: <FiTarget />, label: "Target" },
    { value: "trending-up", icon: <FiTrendingUp />, label: "Trending Up" },
    { value: "droplet", icon: <FiDroplet />, label: "Droplet" },
    { value: "wind", icon: <FiWind />, label: "Wind" },
    { value: "box", icon: <FiBox />, label: "Box" },
    { value: "navigation", icon: <FiNavigation />, label: "Navigation" },
  ];

  const colorOptions = [
    { value: "bg-red-500", label: "Red" },
    { value: "bg-blue-500", label: "Blue" },
    { value: "bg-green-500", label: "Green" },
    { value: "bg-yellow-500", label: "Yellow" },
    { value: "bg-purple-500", label: "Purple" },
    { value: "bg-pink-500", label: "Pink" },
    { value: "bg-indigo-500", label: "Indigo" },
    { value: "bg-gray-500", label: "Gray" },
    { value: "bg-orange-500", label: "Orange" },
    { value: "bg-teal-500", label: "Teal" },
    { value: "bg-cyan-500", label: "Cyan" },
  ];

  useEffect(() => {
    if (creditConfig) {
      setFormData(creditConfig);
    }
  }, [creditConfig]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? parseFloat(value) || 0 : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const configData: CreditConfig = {
      id: creditConfig?.id || Date.now().toString(),
      category: formData.category || "",
      creditValue: formData.creditValue || 50,
      platformMargin: formData.platformMargin || 0,
      color: formData.color || "bg-gray-500",
      icon: formData.icon || "activity",
    };

    if (creditConfig) {
      // Update existing config
      dispatch(updateCreditConfig(configData));
    } else {
      // Add new config
      dispatch(addCreditConfig(configData));
    }

    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {creditConfig
              ? "Edit Credit Configuration"
              : "Add Credit Configuration"}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Credit Value (₹){" "}
              <span className="text-xs text-gray-500">
                - Standard rate: ₹50 = 1 credit
              </span>
            </label>
            <input
              type="number"
              name="creditValue"
              value={formData.creditValue}
              onChange={handleChange}
              required
              min="1"
              step="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Credits per ₹100: {Math.ceil(100 / (formData.creditValue || 50))}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Platform Margin (%)
            </label>
            <input
              type="number"
              name="platformMargin"
              value={
                formData.platformMargin ? formData.platformMargin * 100 : ""
              }
              onChange={(e) => {
                const value = parseFloat(e.target.value) / 100;
                setFormData((prev) => ({ ...prev, platformMargin: value }));
              }}
              required
              min="0"
              max="100"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Icon
            </label>
            <select
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {iconOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color
            </label>
            <div className="grid grid-cols-5 gap-2">
              {colorOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, color: option.value }))
                  }
                  className={`h-8 w-8 rounded-full ${option.value} ${
                    formData.color === option.value
                      ? "ring-2 ring-offset-2 ring-emerald-500"
                      : ""
                  }`}
                  title={option.label}
                />
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
            <div className="flex items-center">
              <div
                className={`p-2 rounded-full ${
                  formData.color || "bg-gray-500"
                } text-white mr-3`}
              >
                {iconOptions.find((opt) => opt.value === formData.icon)
                  ?.icon || <FiActivity />}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {formData.category || "Category Name"}
                </div>
                <div className="text-xs text-gray-500">
                  ₹{formData.creditValue || 50} per credit •{" "}
                  {(formData.platformMargin || 0) * 100}% margin
                </div>
              </div>
            </div>
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
              disabled={isSubmitting}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <FiSave className="text-lg" />
              <span>{creditConfig ? "Update" : "Save"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCreditConfigModal;
