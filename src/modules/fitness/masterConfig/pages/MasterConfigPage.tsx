// // src/modules/fitness/masterConfig/MasterConfigPage.tsx
// import React, { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
// import {
//   fetchCreditConfigs,
//   fetchPlanPricings,
//   updateCreditConfig,
//   updatePlanPricing,
//   addCreditConfig,
//   addPlanPricing,
//   deleteCreditConfig,
//   deletePlanPricing,
//   CreditConfig,
//   PlanPricing,
// } from "../masterConfigSlice";
// import { showConfirmationModal } from "../../../../store/slices/uiSlice";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import {
//   FiPlus,
//   FiEdit2,
//   FiTrash2,
//   FiRefreshCw,
//   FiSave,
//   FiX,
//   FiInfo,
//   FiDollarSign,
//   FiPercent,
//   FiTag,
// } from "react-icons/fi";
// import EditCreditConfigModal from "../components/EditCreditConfigModal";
// import EditPlanPricingModal from "../components/EditPlanPricingModal";

// export default function MasterConfigPage() {
//   const dispatch = useAppDispatch();
//   // Add fallback for selectors in case state is not yet loaded
//   const masterConfigState = useAppSelector(
//     (state) =>
//       state.masterConfig || {
//         creditConfigs: [],
//         planPricings: [],
//         status: "idle",
//         error: null,
//       }
//   );
//   const {
//     creditConfigs = [],
//     planPricings = [],
//     status = "idle",
//   } = masterConfigState;

//   const [activeTab, setActiveTab] = useState<"credits" | "pricing">("credits");
//   const [showCreditModal, setShowCreditModal] = useState(false);
//   const [showPricingModal, setShowPricingModal] = useState(false);
//   const [editingCreditConfig, setEditingCreditConfig] =
//     useState<CreditConfig | null>(null);
//   const [editingPlanPricing, setEditingPlanPricing] =
//     useState<PlanPricing | null>(null);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchCreditConfigs());
//       dispatch(fetchPlanPricings());
//     }
//   }, [status, dispatch]);

//   const handleRefresh = () => {
//     dispatch(fetchCreditConfigs());
//     dispatch(fetchPlanPricings());
//   };

//   const handleEditCreditConfig = (config: CreditConfig) => {
//     setEditingCreditConfig(config);
//     setShowCreditModal(true);
//   };

//   const handleAddCreditConfig = () => {
//     setEditingCreditConfig(null);
//     setShowCreditModal(true);
//   };

//   const handleDeleteCreditConfig = (config: CreditConfig) => {
//     dispatch(
//       showConfirmationModal({
//         title: "Delete Credit Configuration",
//         message: `Are you sure you want to delete the credit configuration for "${config.category}"?`,
//         confirmButtonText: "Delete",
//         onConfirm: () => {
//           dispatch(deleteCreditConfig(config.id));
//         },
//       })
//     );
//   };

//   const handleEditPlanPricing = (pricing: PlanPricing) => {
//     setEditingPlanPricing(pricing);
//     setShowPricingModal(true);
//   };

//   const handleAddPlanPricing = () => {
//     setEditingPlanPricing(null);
//     setShowPricingModal(true);
//   };

//   const handleDeletePlanPricing = (pricing: PlanPricing) => {
//     dispatch(
//       showConfirmationModal({
//         title: "Delete Plan Pricing",
//         message: `Are you sure you want to delete the pricing for "${pricing.planName}"?`,
//         confirmButtonText: "Delete",
//         onConfirm: () => {
//           dispatch(deletePlanPricing(pricing.id));
//         },
//       })
//     );
//   };

//   // Calculate derived values for plan pricing
//   const calculateDerivedValues = (planPricing: PlanPricing) => {
//     // Get the credit value from the primary category
//     const primaryCategory = planPricing.categories[0];
//     const creditConfig = creditConfigs.find(
//       (config) => config.category === primaryCategory
//     );
//     const creditValue = creditConfig ? creditConfig.creditValue : 50;

//     // Calculate customer price
//     const customerPrice = planPricing.trainerPrice * (1 + planPricing.margin);

//     // Calculate credits (rounded up)
//     const credits = Math.ceil(customerPrice / creditValue);

//     return {
//       customerPrice,
//       creditValue,
//       credits,
//     };
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with gradient background */}
//         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">
//                 Master Configuration
//               </h1>
//               <p className="text-emerald-100 text-lg">
//                 Configure credits and pricing for all fitness plans
//               </p>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={handleRefresh}
//                 className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
//                 title="Refresh"
//               >
//                 <FiRefreshCw className="text-lg" />
//                 <span className="hidden sm:inline">Refresh</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-xl shadow-lg mb-8">
//           <div className="border-b border-gray-200">
//             <nav className="-mb-px flex">
//               <button
//                 onClick={() => setActiveTab("credits")}
//                 className={`py-4 px-6 border-b-2 font-medium text-sm ${
//                   activeTab === "credits"
//                     ? "border-emerald-500 text-emerald-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Credits Configuration
//               </button>
//               <button
//                 onClick={() => setActiveTab("pricing")}
//                 className={`py-4 px-6 border-b-2 font-medium text-sm ${
//                   activeTab === "pricing"
//                     ? "border-emerald-500 text-emerald-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Plan Pricing Configuration
//               </button>
//             </nav>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "credits" && (
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Credits Configuration
//               </h2>
//               <button
//                 onClick={handleAddCreditConfig}
//                 className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
//               >
//                 <FiPlus className="text-lg" />
//                 <span>Add Configuration</span>
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Category
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Credit Value (₹)
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Platform Margin %
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {creditConfigs.length === 0 ? (
//                     <tr>
//                       <td colSpan={4} className="px-6 py-16 text-center">
//                         <div className="flex flex-col items-center">
//                           <div className="bg-gray-100 p-4 rounded-full mb-4">
//                             <FiTag className="h-12 w-12 text-gray-400" />
//                           </div>
//                           <h3 className="mt-2 text-lg font-medium text-gray-900">
//                             No credit configurations found
//                           </h3>
//                           <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
//                             Get started by adding a new credit configuration
//                           </p>
//                           <button
//                             onClick={handleAddCreditConfig}
//                             className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
//                           >
//                             <FiPlus className="text-lg" />
//                             <span>Add Configuration</span>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ) : (
//                     creditConfigs.map((config) => (
//                       <tr
//                         key={config.id}
//                         className="hover:bg-gray-50 transition-colors duration-150"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             {config.category}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <FaIndianRupeeSign className="text-gray-400 mr-1" />
//                             <span className="text-sm text-gray-900">
//                               {config.creditValue}
//                             </span>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <span className="text-sm text-gray-900">
//                               {(config.platformMargin * 100).toFixed(0)}%
//                             </span>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <button
//                             onClick={() => handleEditCreditConfig(config)}
//                             className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
//                             title="Edit"
//                           >
//                             <FiEdit2 className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteCreditConfig(config)}
//                             className="text-red-600 hover:text-red-900 transition-colors duration-150 p-1 rounded-full hover:bg-red-50"
//                             title="Delete"
//                           >
//                             <FiTrash2 className="text-lg" />
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {activeTab === "pricing" && (
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Plan Pricing Configuration
//               </h2>
//               <button
//                 onClick={handleAddPlanPricing}
//                 className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
//               >
//                 <FiPlus className="text-lg" />
//                 <span>Add Plan</span>
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Plan Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Categories
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Trainer Price (₹)
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Margin %
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Customer Price (₹)
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Credit Value (₹)
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Credits
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {planPricings.length === 0 ? (
//                     <tr>
//                       <td colSpan={8} className="px-6 py-16 text-center">
//                         <div className="flex flex-col items-center">
//                           <div className="bg-gray-100 p-4 rounded-full mb-4">
//                             <FiDollarSign className="h-12 w-12 text-gray-400" />
//                           </div>
//                           <h3 className="mt-2 text-lg font-medium text-gray-900">
//                             No plan pricings found
//                           </h3>
//                           <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
//                             Get started by adding a new plan pricing
//                           </p>
//                           <button
//                             onClick={handleAddPlanPricing}
//                             className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
//                           >
//                             <FiPlus className="text-lg" />
//                             <span>Add Plan</span>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ) : (
//                     planPricings.map((pricing) => {
//                       const { customerPrice, creditValue, credits } =
//                         calculateDerivedValues(pricing);

//                       return (
//                         <tr
//                           key={pricing.id}
//                           className="hover:bg-gray-50 transition-colors duration-150"
//                         >
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm font-medium text-gray-900">
//                               {pricing.planName}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex flex-wrap gap-1">
//                               {pricing.categories.map((category, index) => (
//                                 <span
//                                   key={index}
//                                   className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
//                                 >
//                                   {category}
//                                 </span>
//                               ))}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right">
//                             <div className="flex items-center justify-end">
//                               <FaIndianRupeeSign className="text-gray-400 mr-1" />
//                               <span className="text-sm text-gray-900">
//                                 {pricing.trainerPrice}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right">
//                             <div className="flex items-center justify-end">
//                               <span className="text-sm text-gray-900">
//                                 {(pricing.margin * 100).toFixed(0)}%
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right">
//                             <div className="flex items-center justify-end">
//                               <FaIndianRupeeSign className="text-gray-400 mr-1" />
//                               <span className="text-sm text-gray-900">
//                                 {customerPrice.toFixed(0)}
//                               </span>
//                             </div>
//                             <div className="text-xs text-gray-500 flex items-center justify-end">
//                               <FiInfo className="mr-1" />
//                               Auto calculated
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right">
//                             <div className="flex items-center justify-end">
//                               <FaIndianRupeeSign className="text-gray-400 mr-1" />
//                               <span className="text-sm text-gray-900">
//                                 {creditValue}
//                               </span>
//                             </div>
//                             <div className="text-xs text-gray-500 flex items-center justify-end">
//                               <FiInfo className="mr-1" />
//                               From {pricing.categories[0]}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right">
//                             <div className="text-sm text-gray-900">
//                               {credits}
//                             </div>
//                             <div className="text-xs text-gray-500 flex items-center justify-end">
//                               <FiInfo className="mr-1" />
//                               Auto calculated
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <button
//                               onClick={() => handleEditPlanPricing(pricing)}
//                               className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
//                               title="Edit"
//                             >
//                               <FiEdit2 className="text-lg" />
//                             </button>
//                             <button
//                               onClick={() => handleDeletePlanPricing(pricing)}
//                               className="text-red-600 hover:text-red-900 transition-colors duration-150 p-1 rounded-full hover:bg-red-50"
//                               title="Delete"
//                             >
//                               <FiTrash2 className="text-lg" />
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Modals */}
//         {showCreditModal && (
//           <EditCreditConfigModal
//             creditConfig={editingCreditConfig}
//             onClose={() => {
//               setEditingCreditConfig(null);
//               setShowCreditModal(false);
//             }}
//           />
//         )}
//         {showPricingModal && (
//           <EditPlanPricingModal
//             planPricing={editingPlanPricing}
//             creditConfigs={creditConfigs}
//             onClose={() => {
//               setEditingPlanPricing(null);
//               setShowPricingModal(false);
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// src/modules/fitness/masterConfig/MasterConfigPage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchCreditConfigs,
  fetchPlanPricings,
  updateCreditConfig,
  updatePlanPricing,
  addCreditConfig,
  addPlanPricing,
  deleteCreditConfig,
  deletePlanPricing,
  togglePlanStatus,
  CreditConfig,
  PlanPricing,
} from "../masterConfigSlice";
import { showConfirmationModal } from "../../../../store/slices/uiSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiRefreshCw,
  FiSave,
  FiX,
  FiInfo,
  FiDollarSign,
  FiPercent,
  FiTag,
  FiActivity,
  FiTrendingUp,
  FiEye,
  FiEyeOff,
  FiCopy,
  FiDownload,
  FiUpload,
  FiSettings,
  FiZap,
  FiTarget,
  FiHeart,
  FiMusic,
  FiWind,
  FiDroplet,
  FiBox,
  FiNavigation,
  FiSearch,
  FiCheckCircle,
} from "react-icons/fi";
import EditCreditConfigModal from "../components/EditCreditConfigModal";
import EditPlanPricingModal from "../components/EditPlanPricingModal";

export default function MasterConfigPage() {
  const dispatch = useAppDispatch();
  // Add fallback for selectors in case state is not yet loaded
  const masterConfigState = useAppSelector(
    (state) =>
      state.masterConfig || {
        creditConfigs: [],
        planPricings: [],
        status: "idle",
        error: null,
      }
  );
  const {
    creditConfigs = [],
    planPricings = [],
    status = "idle",
  } = masterConfigState;

  const [activeTab, setActiveTab] = useState<"credits" | "pricing">("credits");
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [editingCreditConfig, setEditingCreditConfig] =
    useState<CreditConfig | null>(null);
  const [editingPlanPricing, setEditingPlanPricing] =
    useState<PlanPricing | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCreditConfigs());
      dispatch(fetchPlanPricings());
    }
  }, [status, dispatch]);

  const handleRefresh = () => {
    dispatch(fetchCreditConfigs());
    dispatch(fetchPlanPricings());
  };

  const handleEditCreditConfig = (config: CreditConfig) => {
    setEditingCreditConfig(config);
    setShowCreditModal(true);
  };

  const handleAddCreditConfig = () => {
    setEditingCreditConfig(null);
    setShowCreditModal(true);
  };

  const handleDeleteCreditConfig = (config: CreditConfig) => {
    dispatch(
      showConfirmationModal({
        title: "Delete Credit Configuration",
        message: `Are you sure you want to delete the credit configuration for "${config.category}"? This will affect all plans using this category.`,
        confirmButtonText: "Delete",
        onConfirm: () => {
          dispatch(deleteCreditConfig(config.id));
        },
      })
    );
  };

  const handleEditPlanPricing = (pricing: PlanPricing) => {
    setEditingPlanPricing(pricing);
    setShowPricingModal(true);
  };

  const handleAddPlanPricing = () => {
    setEditingPlanPricing(null);
    setShowPricingModal(true);
  };

  const handleDeletePlanPricing = (pricing: PlanPricing) => {
    dispatch(
      showConfirmationModal({
        title: "Delete Plan Pricing",
        message: `Are you sure you want to delete the pricing for "${pricing.planName}"?`,
        confirmButtonText: "Delete",
        onConfirm: () => {
          dispatch(deletePlanPricing(pricing.id));
        },
      })
    );
  };

  const handleTogglePlanStatus = (pricing: PlanPricing) => {
    dispatch(
      showConfirmationModal({
        title: `${pricing.isActive ? "Deactivate" : "Activate"} Plan`,
        message: `Are you sure you want to ${
          pricing.isActive ? "deactivate" : "activate"
        } the "${pricing.planName}" plan?`,
        confirmButtonText: pricing.isActive ? "Deactivate" : "Activate",
        onConfirm: () => {
          dispatch(
            togglePlanStatus({ id: pricing.id, isActive: !pricing.isActive })
          );
        },
      })
    );
  };

  // Calculate derived values for plan pricing
  const calculateDerivedValues = (planPricing: PlanPricing) => {
    // Get the credit value from the primary category
    const primaryCategory = planPricing.categories[0];
    const creditConfig = creditConfigs.find(
      (config) => config.category === primaryCategory
    );
    const creditValue = creditConfig ? creditConfig.creditValue : 50;

    // Calculate customer price
    const customerPrice = planPricing.trainerPrice * (1 + planPricing.margin);

    // Calculate credits (₹50 = 1 credit, so credits = Math.ceil(customerPrice / 50))
    const credits = Math.ceil(customerPrice / 50);

    return {
      customerPrice,
      creditValue,
      credits,
    };
  };

  // Get category icon
  const getCategoryIcon = (iconName?: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      music: <FiMusic className="w-5 h-5" />,
      heart: <FiHeart className="w-5 h-5" />,
      activity: <FiActivity className="w-5 h-5" />,
      zap: <FiZap className="w-5 h-5" />,
      target: <FiTarget className="w-5 h-5" />,
      "trending-up": <FiTrendingUp className="w-5 h-5" />,
      droplet: <FiDroplet className="w-5 h-5" />,
      wind: <FiWind className="w-5 h-5" />,
      box: <FiBox className="w-5 h-5" />,
      navigation: <FiNavigation className="w-5 h-5" />,
    };
    return (
      iconMap[iconName || "activity"] || <FiActivity className="w-5 h-5" />
    );
  };

  // Filter credit configs
  const filteredCreditConfigs = creditConfigs.filter((config) =>
    config.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter plan pricings
  const filteredPlanPricings = planPricings.filter(
    (pricing) =>
      pricing.planName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pricing.categories.some((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Export configuration
  const handleExport = () => {
    const data = {
      creditConfigs,
      planPricings,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `master-config-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Master Configuration
              </h1>
              <p className="text-emerald-100 text-lg">
                Configure credits and pricing for all fitness plans
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                title="Refresh"
              >
                <FiRefreshCw className="text-lg" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                title="Export Configuration"
              >
                <FiDownload className="text-lg" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Categories
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {creditConfigs.length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiTag className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Plans</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {planPricings.length}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FiSettings className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Active Plans
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {planPricings.filter((p) => p.isActive).length}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FiZap className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Avg Credit Value
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  ₹
                  {creditConfigs.length > 0
                    ? Math.round(
                        creditConfigs.reduce(
                          (sum, c) => sum + c.creditValue,
                          0
                        ) / creditConfigs.length
                      )
                    : 0}
                </p>
              </div>
              <div className="bg-amber-100 p-3 rounded-full">
                <FaIndianRupeeSign className="text-amber-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-8 overflow-hidden">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("credits")}
              className={`group relative flex-1 py-5 px-6 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-3 ${
                activeTab === "credits"
                  ? "text-emerald-700 bg-gradient-to-b from-white to-emerald-50/30"
                  : "text-gray-600 hover:text-emerald-700 hover:bg-gray-50"
              }`}
            >
              {/* Active indicator - full height */}
              {activeTab === "credits" && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-400" />
              )}

              {/* Icon with ring effect for active */}
              <div
                className={`relative transition-all duration-200 ${
                  activeTab === "credits"
                    ? "text-emerald-600"
                    : "text-gray-500 group-hover:text-emerald-500"
                }`}
              >
                <FiTag className="w-5 h-5" />
                {activeTab === "credits" && (
                  <div className="absolute -inset-2 rounded-full bg-emerald-100/50 animate-pulse" />
                )}
              </div>

              <span className="font-semibold">Credits Configuration</span>

              {/* Hover effect line */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 transition-all duration-200 ${
                  activeTab === "credits"
                    ? "bg-emerald-500"
                    : "bg-transparent group-hover:bg-emerald-200"
                }`}
              />
            </button>

            {/* Divider */}
            <div className="w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent my-3" />

            <button
              onClick={() => setActiveTab("pricing")}
              className={`group relative flex-1 py-5 px-6 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-3 ${
                activeTab === "pricing"
                  ? "text-emerald-700 bg-gradient-to-b from-white to-emerald-50/30"
                  : "text-gray-600 hover:text-emerald-700 hover:bg-gray-50"
              }`}
            >
              {/* Active indicator - full height */}
              {activeTab === "pricing" && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-400" />
              )}

              {/* Icon with ring effect for active */}
              <div
                className={`relative transition-all duration-200 ${
                  activeTab === "pricing"
                    ? "text-emerald-600"
                    : "text-gray-500 group-hover:text-emerald-500"
                }`}
              >
                <FaIndianRupeeSign className="w-5 h-5" />
                {activeTab === "pricing" && (
                  <div className="absolute -inset-2 rounded-full bg-emerald-100/50 animate-pulse" />
                )}
              </div>

              <span className="font-semibold">Plan Pricing Configuration</span>

              {/* Hover effect line */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 transition-all duration-200 ${
                  activeTab === "pricing"
                    ? "bg-emerald-500"
                    : "bg-transparent group-hover:bg-emerald-200"
                }`}
              />
            </button>
          </nav>
        </div>

        {/* Search and View Toggle */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder={`Search ${
                    activeTab === "credits" ? "categories" : "plans"
                  }...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                    viewMode === "table"
                      ? "bg-white text-emerald-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Table View
                </button>
                <button
                  onClick={() => setViewMode("cards")}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                    viewMode === "cards"
                      ? "bg-white text-emerald-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Card View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "credits" && (
          <div className="space-y-6">
            {/* Credits Table View */}
            {viewMode === "table" && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Credits Configuration ({filteredCreditConfigs.length})
                  </h2>
                  <button
                    onClick={handleAddCreditConfig}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <FiPlus className="text-lg" />
                    <span>Add Configuration</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credit Value (₹)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Platform Margin %
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits per ₹100
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredCreditConfigs.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-16 text-center">
                            <div className="flex flex-col items-center">
                              <div className="bg-gray-100 p-4 rounded-full mb-4">
                                <FiTag className="h-12 w-12 text-gray-400" />
                              </div>
                              <h3 className="mt-2 text-lg font-medium text-gray-900">
                                No credit configurations found
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                                Get started by adding a new credit configuration
                              </p>
                              <button
                                onClick={handleAddCreditConfig}
                                className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
                              >
                                <FiPlus className="text-lg" />
                                <span>Add Configuration</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredCreditConfigs.map((config) => (
                          <tr
                            key={config.id}
                            className="hover:bg-gray-50 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div
                                  className={`p-2 rounded-full ${
                                    config.color || "bg-gray-500"
                                  } text-white mr-3`}
                                >
                                  {getCategoryIcon(config.icon)}
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {config.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <FaIndianRupeeSign className="text-gray-400 mr-1" />
                                <span className="text-sm text-gray-900 font-medium">
                                  {config.creditValue}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="text-sm text-gray-900 font-medium">
                                  {(config.platformMargin * 100).toFixed(0)}%
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="text-sm text-gray-900 font-medium">
                                  {Math.ceil(100 / config.creditValue)}
                                </span>
                                <span className="text-xs text-gray-500 ml-1">
                                  credits
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleEditCreditConfig(config)}
                                className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                                title="Edit"
                              >
                                <FiEdit2 className="text-lg" />
                              </button>
                              <button
                                onClick={() => handleDeleteCreditConfig(config)}
                                className="text-red-600 hover:text-red-900 transition-colors duration-150 p-1 rounded-full hover:bg-red-50"
                                title="Delete"
                              >
                                <FiTrash2 className="text-lg" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Credits Card View */}
            {viewMode === "cards" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCreditConfigs.map((config) => (
                  <div
                    key={config.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-full ${
                          config.color || "bg-gray-500"
                        } text-white`}
                      >
                        {getCategoryIcon(config.icon)}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditCreditConfig(config)}
                          className="text-emerald-600 hover:text-emerald-900 p-1 rounded-full hover:bg-emerald-50"
                          title="Edit"
                        >
                          <FiEdit2 className="text-lg" />
                        </button>
                        <button
                          onClick={() => handleDeleteCreditConfig(config)}
                          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50"
                          title="Delete"
                        >
                          <FiTrash2 className="text-lg" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {config.category}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Credit Value
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          ₹{config.creditValue}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Platform Margin
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {(config.platformMargin * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Credits per ₹100
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {Math.ceil(100 / config.creditValue)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="space-y-6">
            {/* Pricing Table View */}
            {viewMode === "table" && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Plan Pricing Configuration ({filteredPlanPricings.length})
                  </h2>
                  <button
                    onClick={handleAddPlanPricing}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <FiPlus className="text-lg" />
                    <span>Add Plan</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Plan Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Categories
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trainer Price (₹)
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Margin %
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer Price (₹)
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credit Value (₹)
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredPlanPricings.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="px-6 py-16 text-center">
                            <div className="flex flex-col items-center">
                              <div className="bg-gray-100 p-4 rounded-full mb-4">
                                <FiDollarSign className="h-12 w-12 text-gray-400" />
                              </div>
                              <h3 className="mt-2 text-lg font-medium text-gray-900">
                                No plan pricings found
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                                Get started by adding a new plan pricing
                              </p>
                              <button
                                onClick={handleAddPlanPricing}
                                className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
                              >
                                <FiPlus className="text-lg" />
                                <span>Add Plan</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredPlanPricings.map((pricing) => {
                          const { customerPrice, creditValue, credits } =
                            calculateDerivedValues(pricing);

                          return (
                            <tr
                              key={pricing.id}
                              className={`hover:bg-gray-50 transition-colors duration-150 ${
                                !pricing.isActive ? "opacity-60" : ""
                              }`}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {pricing.planName}
                                  </div>
                                  {pricing.description && (
                                    <div className="text-xs text-gray-500 mt-1">
                                      {pricing.description}
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-wrap gap-1">
                                  {pricing.categories.map((category, index) => {
                                    const config = creditConfigs.find(
                                      (c) => c.category === category
                                    );
                                    return (
                                      <span
                                        key={index}
                                        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white ${
                                          config?.color || "bg-gray-500"
                                        }`}
                                      >
                                        {category}
                                      </span>
                                    );
                                  })}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end">
                                  <FaIndianRupeeSign className="text-gray-400 mr-1" />
                                  <span className="text-sm text-gray-900 font-medium">
                                    {pricing.trainerPrice}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end">
                                  <span className="text-sm text-gray-900 font-medium">
                                    {(pricing.margin * 100).toFixed(0)}%
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex flex-col items-end">
                                  <div className="flex items-center">
                                    <FaIndianRupeeSign className="text-gray-400 mr-1" />
                                    <span className="text-sm text-gray-900 font-medium">
                                      {customerPrice.toFixed(0)}
                                    </span>
                                  </div>
                                  <div className="text-xs text-emerald-600 flex items-center">
                                    <FiInfo className="mr-1" />
                                    Auto calculated
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex flex-col items-end">
                                  <div className="flex items-center">
                                    <FaIndianRupeeSign className="text-gray-400 mr-1" />
                                    <span className="text-sm text-gray-900 font-medium">
                                      50
                                    </span>
                                  </div>
                                  <div className="text-xs text-blue-600 flex items-center">
                                    <FiInfo className="mr-1" />
                                    Standard rate
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex flex-col items-end">
                                  <div className="text-sm text-gray-900 font-medium">
                                    {credits}
                                  </div>
                                  <div className="text-xs text-purple-600 flex items-center">
                                    <FiInfo className="mr-1" />
                                    ₹50 = 1 credit
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <button
                                  onClick={() =>
                                    handleTogglePlanStatus(pricing)
                                  }
                                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                                    pricing.isActive
                                      ? "bg-emerald-600"
                                      : "bg-red-600"
                                  }`}
                                >
                                  <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                      pricing.isActive
                                        ? "translate-x-6"
                                        : "translate-x-1"
                                    }`}
                                  />
                                </button>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                  onClick={() => handleEditPlanPricing(pricing)}
                                  className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                                  title="Edit"
                                >
                                  <FiEdit2 className="text-lg" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeletePlanPricing(pricing)
                                  }
                                  className="text-red-600 hover:text-red-900 transition-colors duration-150 p-1 rounded-full hover:bg-red-50"
                                  title="Delete"
                                >
                                  <FiTrash2 className="text-lg" />
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Pricing Card View */}
            {viewMode === "cards" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlanPricings.map((pricing) => {
                  const { customerPrice, creditValue, credits } =
                    calculateDerivedValues(pricing);

                  return (
                    <div
                      key={pricing.id}
                      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ${
                        !pricing.isActive ? "opacity-60" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {pricing.planName}
                        </h3>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleTogglePlanStatus(pricing)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                              pricing.isActive ? "bg-emerald-600" : "bg-red-600"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                pricing.isActive
                                  ? "translate-x-6"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {pricing.description && (
                        <p className="text-sm text-gray-600 mb-4">
                          {pricing.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-1 mb-4">
                        {pricing.categories.map((category, index) => {
                          const config = creditConfigs.find(
                            (c) => c.category === category
                          );
                          return (
                            <span
                              key={index}
                              className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white ${
                                config?.color || "bg-gray-500"
                              }`}
                            >
                              {category}
                            </span>
                          );
                        })}
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Trainer Price
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            ₹{pricing.trainerPrice}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Customer Price
                          </span>
                          <span className="text-sm font-medium text-emerald-600">
                            ₹{customerPrice.toFixed(0)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Credits</span>
                          <span className="text-sm font-medium text-purple-600">
                            {credits} credits
                          </span>
                        </div>
                      </div>

                      {pricing.features && (
                        <div className="border-t pt-4">
                          <ul className="text-xs text-gray-600 space-y-1">
                            {pricing.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <FiCheckCircle className="w-3 h-3 text-emerald-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          onClick={() => handleEditPlanPricing(pricing)}
                          className="text-emerald-600 hover:text-emerald-900 p-1 rounded-full hover:bg-emerald-50"
                          title="Edit"
                        >
                          <FiEdit2 className="text-lg" />
                        </button>
                        <button
                          onClick={() => handleDeletePlanPricing(pricing)}
                          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50"
                          title="Delete"
                        >
                          <FiTrash2 className="text-lg" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Modals */}
        {showCreditModal && (
          <EditCreditConfigModal
            creditConfig={editingCreditConfig}
            onClose={() => {
              setEditingCreditConfig(null);
              setShowCreditModal(false);
            }}
          />
        )}
        {showPricingModal && (
          <EditPlanPricingModal
            planPricing={editingPlanPricing}
            creditConfigs={creditConfigs}
            onClose={() => {
              setEditingPlanPricing(null);
              setShowPricingModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
