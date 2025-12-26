// // src/modules/fitness/masterConfig/components/EditPlanPricingModal.tsx
// import React, { useState, useEffect } from "react";
// import { useAppDispatch } from "../../../../store/hooks";
// import {
//   PlanPricing,
//   CreditConfig,
//   updatePlanPricing,
//   addPlanPricing,
// } from "../masterConfigSlice";
// import { FiX, FiSave, FiPlus, FiTrash2 } from "react-icons/fi";

// interface EditPlanPricingModalProps {
//   planPricing: PlanPricing | null;
//   creditConfigs: CreditConfig[];
//   onClose: () => void;
// }

// const EditPlanPricingModal: React.FC<EditPlanPricingModalProps> = ({
//   planPricing,
//   creditConfigs,
//   onClose,
// }) => {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState<Partial<PlanPricing>>({
//     planName: "",
//     categories: [],
//     trainerPrice: 0,
//     margin: 0,
//   });

//   const [newCategory, setNewCategory] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (planPricing) {
//       setFormData(planPricing);
//     }
//   }, [planPricing]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     const parsedValue = type === "number" ? parseFloat(value) || 0 : value;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: parsedValue,
//     }));
//   };

//   const handleAddCategory = () => {
//     if (
//       newCategory.trim() &&
//       !formData.categories?.includes(newCategory.trim())
//     ) {
//       setFormData((prev) => ({
//         ...prev,
//         categories: [...(prev.categories || []), newCategory.trim()],
//       }));
//       setNewCategory("");
//     }
//   };

//   const handleRemoveCategory = (category: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       categories: (prev.categories || []).filter((c) => c !== category),
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const pricingData: PlanPricing = {
//       id: planPricing?.id || Date.now().toString(),
//       planName: formData.planName || "",
//       categories: formData.categories || [],
//       trainerPrice: formData.trainerPrice || 0,
//       margin: formData.margin || 0,
//     };

//     if (planPricing) {
//       // Update existing pricing
//       dispatch(updatePlanPricing(pricingData));
//     } else {
//       // Add new pricing
//       dispatch(addPlanPricing(pricingData));
//     }

//     setIsSubmitting(false);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//           <h2 className="text-xl font-semibold">
//             {planPricing ? "Edit Plan Pricing" : "Add Plan Pricing"}
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
//               Plan Name
//             </label>
//             <input
//               type="text"
//               name="planName"
//               value={formData.planName}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Categories
//             </label>
//             <div className="flex gap-2 mb-2">
//               <input
//                 type="text"
//                 value={newCategory}
//                 onChange={(e) => setNewCategory(e.target.value)}
//                 placeholder="Add a category"
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//               <button
//                 type="button"
//                 onClick={handleAddCategory}
//                 className="px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
//               >
//                 <FiPlus className="text-lg" />
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {formData.categories?.map((category, index) => (
//                 <div
//                   key={index}
//                   className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
//                 >
//                   {category}
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveCategory(category)}
//                     className="ml-2 text-gray-500 hover:text-red-500"
//                   >
//                     <FiTrash2 className="text-xs" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Trainer Price (₹)
//             </label>
//             <input
//               type="number"
//               name="trainerPrice"
//               value={formData.trainerPrice}
//               onChange={handleChange}
//               required
//               min="1"
//               step="0.01"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Margin (%)
//             </label>
//             <input
//               type="number"
//               name="margin"
//               value={formData.margin ? formData.margin * 100 : ""}
//               onChange={(e) => {
//                 const value = parseFloat(e.target.value) / 100;
//                 setFormData((prev) => ({ ...prev, margin: value }));
//               }}
//               required
//               min="0"
//               max="100"
//               step="0.1"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//           </div>

//           <div className="bg-gray-50 rounded-lg p-4 mb-6">
//             <h3 className="text-sm font-medium text-gray-700 mb-2">
//               Preview (Auto-calculated)
//             </h3>
//             <div className="grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <p className="text-gray-500">Customer Price</p>
//                 <p className="font-medium">
//                   ₹
//                   {formData.trainerPrice && formData.margin
//                     ? (formData.trainerPrice * (1 + formData.margin)).toFixed(2)
//                     : "0.00"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Credits</p>
//                 <p className="font-medium">
//                   {formData.trainerPrice &&
//                   formData.margin &&
//                   formData.categories &&
//                   formData.categories.length > 0
//                     ? Math.ceil(
//                         (formData.trainerPrice * (1 + formData.margin)) /
//                           (creditConfigs.find(
//                             (c) => c.category === formData.categories![0]
//                           )?.creditValue || 50)
//                       )
//                     : "0"}
//                 </p>
//               </div>
//             </div>
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
//               <span>{planPricing ? "Update" : "Save"}</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditPlanPricingModal;

// src/modules/fitness/masterConfig/components/EditPlanPricingModal.tsx
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import {
  PlanPricing,
  CreditConfig,
  updatePlanPricing,
  addPlanPricing,
} from "../masterConfigSlice";
import {
  FiX,
  FiSave,
  FiPlus,
  FiTrash2,
  FiInfo,
  FiCheckCircle,
} from "react-icons/fi";

interface EditPlanPricingModalProps {
  planPricing: PlanPricing | null;
  creditConfigs: CreditConfig[];
  onClose: () => void;
}

const EditPlanPricingModal: React.FC<EditPlanPricingModalProps> = ({
  planPricing,
  creditConfigs,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Partial<PlanPricing>>({
    planName: "",
    categories: [],
    trainerPrice: 0,
    margin: 0,
    isActive: true,
    description: "",
    features: [],
  });

  const [newCategory, setNewCategory] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (planPricing) {
      setFormData(planPricing);
    }
  }, [planPricing]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? parseFloat(value) || 0 : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleAddCategory = () => {
    if (
      newCategory.trim() &&
      !formData.categories?.includes(newCategory.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        categories: [...(prev.categories || []), newCategory.trim()],
      }));
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: (prev.categories || []).filter((c) => c !== category),
    }));
  };

  const handleAddFeature = () => {
    if (newFeature.trim() && !formData.features?.includes(newFeature.trim())) {
      setFormData((prev) => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()],
      }));
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: (prev.features || []).filter((f) => f !== feature),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const pricingData: PlanPricing = {
      id: planPricing?.id || Date.now().toString(),
      planName: formData.planName || "",
      categories: formData.categories || [],
      trainerPrice: formData.trainerPrice || 0,
      margin: formData.margin || 0,
      isActive: formData.isActive !== false,
      description: formData.description,
      features: formData.features,
    };

    if (planPricing) {
      // Update existing pricing
      dispatch(updatePlanPricing(pricingData));
    } else {
      // Add new pricing
      dispatch(addPlanPricing(pricingData));
    }

    setIsSubmitting(false);
    onClose();
  };

  // Calculate preview values
  const customerPrice =
    formData.trainerPrice && formData.margin
      ? formData.trainerPrice * (1 + formData.margin)
      : 0;
  const credits = Math.ceil(customerPrice / 50); // ₹50 = 1 credit

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {planPricing ? "Edit Plan Pricing" : "Add Plan Pricing"}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plan Name
              </label>
              <input
                type="text"
                name="planName"
                value={formData.planName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Trainer Price (₹)
              </label>
              <input
                type="number"
                name="trainerPrice"
                value={formData.trainerPrice}
                onChange={handleChange}
                required
                min="1"
                step="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Margin (%)
              </label>
              <input
                type="number"
                name="margin"
                value={formData.margin ? formData.margin * 100 : ""}
                onChange={(e) => {
                  const value = parseFloat(e.target.value) / 100;
                  setFormData((prev) => ({ ...prev, margin: value }));
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
                Status
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive !== false}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      isActive: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Active
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categories
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Add a category"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={handleAddCategory}
                className="px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <FiPlus className="text-lg" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.categories?.map((category, index) => {
                const config = creditConfigs.find(
                  (c) => c.category === category
                );
                return (
                  <div
                    key={index}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm text-white ${
                      config?.color || "bg-gray-500"
                    }`}
                  >
                    {category}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(category)}
                      className="ml-2 text-white hover:text-red-200"
                    >
                      <FiTrash2 className="text-xs" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add a feature"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <FiPlus className="text-lg" />
              </button>
            </div>
            <div className="space-y-1">
              {formData.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded"
                >
                  <span className="text-sm text-gray-700">{feature}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(feature)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
              <FiInfo className="mr-2" />
              Preview (Auto-calculated)
            </h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Customer Price</p>
                <p className="font-medium text-emerald-600">
                  ₹{customerPrice.toFixed(0)}
                </p>
                <p className="text-xs text-gray-500">
                  ₹{formData.trainerPrice || 0} × (1 +{" "}
                  {(formData.margin || 0) * 100}%)
                </p>
              </div>
              <div>
                <p className="text-gray-500">Credits</p>
                <p className="font-medium text-purple-600">{credits} credits</p>
                <p className="text-xs text-gray-500">
                  ₹{customerPrice.toFixed(0)} ÷ ₹50
                </p>
              </div>
              <div>
                <p className="text-gray-500">Credit Rate</p>
                <p className="font-medium text-blue-600">₹50 = 1 credit</p>
                <p className="text-xs text-gray-500">Standard rate</p>
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
              <span>{planPricing ? "Update" : "Save"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPlanPricingModal;
