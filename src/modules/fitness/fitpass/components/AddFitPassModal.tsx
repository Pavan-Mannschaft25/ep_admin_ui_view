// // src/modules/fitness/fitpass/components/AddFitPassModal.tsx
// import React, { useState } from "react";
// import { useAppDispatch } from "../../../../store/hooks";
// import { addPlan, FitPassPlan } from "../fitpassSlice";
// import { FiX, FiActivity, FiCalendar, FiTag } from "react-icons/fi";
// import { FaIndianRupeeSign } from "react-icons/fa6";

// interface AddFitPassModalProps {
//   onClose: () => void;
// }

// const AddFitPassModal: React.FC<AddFitPassModalProps> = ({ onClose }) => {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState<Partial<FitPassPlan>>({
//     name: "",
//     duration: "Monthly",
//     credits: 10,
//     price: 0,
//     originalPrice: undefined,
//     noExpiry: false,
//     validityDays: 30,
//     activities: [],
//     onlineSessions: true,
//     offlineSessions: false,
//     tags: [],
//     status: "Active",
//   });

//   const [activityOptions] = useState([
//     "Yoga",
//     "Zumba",
//     "Gym",
//     "Meditation",
//     "Pilates",
//     "CrossFit",
//     "Swimming",
//     "Dance",
//     "Boxing",
//     "Cycling",
//   ]);

//   const [tagOptions] = useState([
//     "Popular",
//     "New",
//     "Limited",
//     "Premium",
//     "Basic",
//   ]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as HTMLInputElement).checked;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleActivityToggle = (activity: string) => {
//     setFormData((prev) => {
//       const activities = prev.activities || [];
//       const newActivities = activities.includes(activity)
//         ? activities.filter((a) => a !== activity)
//         : [...activities, activity];
//       return { ...prev, activities: newActivities };
//     });
//   };

//   const handleTagToggle = (tag: string) => {
//     setFormData((prev) => {
//       const tags = prev.tags || [];
//       const newTags = tags.includes(tag)
//         ? tags.filter((t) => t !== tag)
//         : [...tags, tag];
//       return { ...prev, tags: newTags };
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const newPlan: FitPassPlan = {
//       id: Date.now().toString(),
//       name: formData.name || "",
//       image: `https://picsum.photos/seed/fitpass₹{Date.now()}/100/100.jpg`,
//       duration: formData.duration || "Monthly",
//       credits: formData.credits || 0,
//       price: formData.price || 0,
//       originalPrice: formData.originalPrice,
//       noExpiry: formData.noExpiry || false,
//       validityDays: formData.noExpiry ? undefined : formData.validityDays,
//       activities: formData.activities || [],
//       onlineSessions: formData.onlineSessions || false,
//       offlineSessions: formData.offlineSessions || false,
//       tags: formData.tags || [],
//       status: (formData.status as "Active" | "Inactive") || "Active",
//       created: new Date().toISOString().slice(0, 19).replace("T", " "),
//     };

//     dispatch(addPlan(newPlan));
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//           <h2 className="text-xl font-semibold">Add New FitPass Plan</h2>
//           <button
//             onClick={onClose}
//             className="text-white hover:text-gray-100 transition-colors"
//           >
//             <FiX className="h-6 w-6" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Plan Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiCalendar className="inline mr-1" />
//                 Duration
//               </label>
//               <select
//                 name="duration"
//                 value={formData.duration}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               >
//                 <option value="Weekly">Weekly</option>
//                 <option value="Monthly">Monthly</option>
//                 <option value="Quarterly">Quarterly</option>
//                 <option value="Yearly">Yearly</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Credits
//               </label>
//               <input
//                 type="number"
//                 name="credits"
//                 value={formData.credits}
//                 onChange={handleChange}
//                 required
//                 min="1"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FaIndianRupeeSign className="inline mr-1" />
//                 Price (₹)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 required
//                 min="0"
//                 step="0.01"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Original Price (₹) (Optional)
//               </label>
//               <input
//                 type="number"
//                 name="originalPrice"
//                 value={formData.originalPrice || ""}
//                 onChange={handleChange}
//                 min="0"
//                 step="0.01"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Status
//               </label>
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 name="noExpiry"
//                 checked={formData.noExpiry}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="noExpiry"
//                 className="ml-2 block text-sm text-gray-700"
//               >
//                 No Expiry
//               </label>
//             </div>

//             {!formData.noExpiry && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Validity (Days)
//                 </label>
//                 <input
//                   type="number"
//                   name="validityDays"
//                   value={formData.validityDays}
//                   onChange={handleChange}
//                   min="1"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                 />
//               </div>
//             )}
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               <FiActivity className="inline mr-1" />
//               Activities
//             </label>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {activityOptions.map((activity) => (
//                 <div key={activity} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={`activity-₹{activity}`}
//                     checked={formData.activities?.includes(activity) || false}
//                     onChange={() => handleActivityToggle(activity)}
//                     className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
//                   />
//                   <label
//                     htmlFor={`activity-₹{activity}`}
//                     className="ml-2 text-sm text-gray-700"
//                   >
//                     {activity}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Session Types
//             </label>
//             <div className="flex gap-4">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="onlineSessions"
//                   checked={formData.onlineSessions}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="onlineSessions"
//                   className="ml-2 text-sm text-gray-700"
//                 >
//                   Online Sessions
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="offlineSessions"
//                   checked={formData.offlineSessions}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="offlineSessions"
//                   className="ml-2 text-sm text-gray-700"
//                 >
//                   Offline Sessions
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               <FiTag className="inline mr-1" />
//               Tags
//             </label>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {tagOptions.map((tag) => (
//                 <div key={tag} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={`tag-₹{tag}`}
//                     checked={formData.tags?.includes(tag) || false}
//                     onChange={() => handleTagToggle(tag)}
//                     className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
//                   />
//                   <label
//                     htmlFor={`tag-₹{tag}`}
//                     className="ml-2 text-sm text-gray-700"
//                   >
//                     {tag}
//                   </label>
//                 </div>
//               ))}
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
//               className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
//             >
//               Add Plan
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddFitPassModal;

// src/modules/fitness/fitpass/components/AddFitPassModal.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { addPlan, FitPassPlan } from "../fitpassSlice";
import {
  FiX,
  FiActivity,
  FiCalendar,
  FiTag,
  FiDollarSign,
  FiUsers,
  FiInfo,
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";

interface AddFitPassModalProps {
  onClose: () => void;
}

const AddFitPassModal: React.FC<AddFitPassModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Partial<FitPassPlan>>({
    name: "",
    description: "",
    duration: "Monthly",
    credits: 10,
    price: 0,
    originalPrice: undefined,
    creditValue: 0,
    noExpiry: false,
    validityDays: 30,
    autoRenew: false,
    maxCreditsPerDay: 5,
    maxClassesPerDay: 2,
    activities: [],
    onlineSessions: true,
    offlineSessions: false,
    eligibleFitnessCategories: [],
    trainerCommission: 10,
    commissionValidity: 1,
    commissionCap: 1000,
    planCategory: "Entry",
    status: "Draft",
    visibleToUsers: false,
    featuredPlan: false,
  });

  const [activityOptions] = useState([
    "Yoga",
    "Zumba",
    "Gym",
    "Meditation",
    "Pilates",
    "CrossFit",
    "Swimming",
    "Dance",
    "Boxing",
    "Cycling",
  ]);

  const [planCategories] = useState(["Entry", "Popular", "Premium"]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleActivityToggle = (activity: string) => {
    setFormData((prev) => {
      const activities = prev.eligibleFitnessCategories || [];
      const newActivities = activities.includes(activity)
        ? activities.filter((a) => a !== activity)
        : [...activities, activity];
      return { ...prev, eligibleFitnessCategories: newActivities };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPlan: FitPassPlan = {
      id: Date.now().toString(),
      name: formData.name || "",
      description: formData.description || "",
      image: `https://picsum.photos/seed/fitpass${Date.now()}/100/100.jpg`,
      duration: formData.duration || "Monthly",
      credits: formData.credits || 0,
      price: formData.price || 0,
      originalPrice: formData.originalPrice,
      creditValue:
        formData.creditValue || (formData.price || 0) / (formData.credits || 1),
      noExpiry: formData.noExpiry || false,
      validityDays: formData.noExpiry ? undefined : formData.validityDays,
      autoRenew: formData.autoRenew || false,
      maxCreditsPerDay: formData.maxCreditsPerDay,
      maxClassesPerDay: formData.maxClassesPerDay,
      onlineSessions: formData.onlineSessions || false,
      offlineSessions: formData.offlineSessions || false,
      eligibleFitnessCategories: formData.eligibleFitnessCategories || [],
      trainerCommission: formData.trainerCommission,
      commissionValidity: formData.commissionValidity,
      commissionCap: formData.commissionCap,
      planCategory:
        (formData.planCategory as "Entry" | "Popular" | "Premium") || "Entry",
      status: (formData.status as "Draft" | "Active" | "Paused") || "Draft",
      visibleToUsers: formData.visibleToUsers || false,
      featuredPlan: formData.featuredPlan || false,
      totalSubscribers: 0,
      activeSubscribers: 0,
      expiredSubscribers: 0,
      renewalRate: 0,
      totalRevenue: 0,
      creditsIssued: 0,
      creditsUsed: 0,
      creditsBalance: 0,
      deferredLiability: 0,
      totalCommissionPaid: 0,
      pendingCommission: 0,
      topReferringTrainers: [],
      created: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    dispatch(addPlan(newPlan));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add New FitPass Plan</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Basic Plan Details */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiInfo className="mr-2" />
              Basic Plan Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plan Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plan Category
                </label>
                <select
                  name="planCategory"
                  value={formData.planCategory}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {planCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plan Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiCalendar className="inline mr-1" />
                  Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Draft">Draft</option>
                  <option value="Active">Active</option>
                  <option value="Paused">Paused</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pricing & Credits */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiDollarSign className="mr-2" />
              Pricing & Credits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Credits Included
                </label>
                <input
                  type="number"
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaIndianRupeeSign className="inline mr-1" />
                  Plan Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaIndianRupeeSign className="inline mr-1" />
                  Original Price (₹) (Optional)
                </label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice || ""}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaIndianRupeeSign className="inline mr-1" />
                  Credit Value (₹)
                </label>
                <input
                  type="number"
                  name="creditValue"
                  value={formData.creditValue || ""}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Validity (Days)
                </label>
                <input
                  type="number"
                  name="validityDays"
                  value={formData.validityDays}
                  onChange={handleChange}
                  min="1"
                  disabled={formData.noExpiry}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="noExpiry"
                  checked={formData.noExpiry}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="noExpiry"
                  className="ml-2 block text-sm text-gray-700"
                >
                  No Expiry
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="autoRenew"
                  checked={formData.autoRenew}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="autoRenew"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Auto-Renew
                </label>
              </div>
            </div>
          </div>

          {/* Usage Rules */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiActivity className="mr-2" />
              Usage Rules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Credits Per Day
                </label>
                <input
                  type="number"
                  name="maxCreditsPerDay"
                  value={formData.maxCreditsPerDay}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Classes Per Day
                </label>
                <input
                  type="number"
                  name="maxClassesPerDay"
                  value={formData.maxClassesPerDay}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="onlineSessions"
                  checked={formData.onlineSessions}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="onlineSessions"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Online Classes Allowed
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="offlineSessions"
                  checked={formData.offlineSessions}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="offlineSessions"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Offline Classes Allowed
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Eligible Fitness Categories
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {activityOptions.map((activity) => (
                  <div key={activity} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`activity-${activity}`}
                      checked={
                        formData.eligibleFitnessCategories?.includes(
                          activity
                        ) || false
                      }
                      onChange={() => handleActivityToggle(activity)}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`activity-${activity}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {activity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trainer Commission */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiUsers className="mr-2" />
              Trainer Commission
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trainer Commission (%)
                </label>
                <input
                  type="number"
                  name="trainerCommission"
                  value={formData.trainerCommission}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Commission Validity (Months)
                </label>
                <input
                  type="number"
                  name="commissionValidity"
                  value={formData.commissionValidity}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FaIndianRupeeSign className="inline mr-1" />
                  Commission Cap (₹)
                </label>
                <input
                  type="number"
                  name="commissionCap"
                  value={formData.commissionCap}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Status & Visibility */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiTag className="mr-2" />
              Status & Visibility
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="visibleToUsers"
                  checked={formData.visibleToUsers}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="visibleToUsers"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Visible to Users
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="featuredPlan"
                  checked={formData.featuredPlan}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="featuredPlan"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Featured Plan
                </label>
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
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
            >
              Add Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFitPassModal;
