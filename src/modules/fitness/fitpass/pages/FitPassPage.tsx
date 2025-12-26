// // src/modules/fitness/fitpass/FitPassPage.tsx
// import React, { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
// import {
//   fetchFitPassPlans,
//   FitPassPlan,
//   toggleFitPassStatus,
// } from "../fitpassSlice";
// import { showConfirmationModal } from "../../../../store/slices/uiSlice";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import {
//   FiPlus,
//   FiSearch,
//   FiRefreshCw,
//   FiEdit2,
//   FiTrash2,
//   FiFilter,
//   FiDollarSign,
//   FiCalendar,
//   FiActivity,
//   FiWifi,
//   FiWifiOff,
//   FiTag,
//   FiCheckCircle,
//   FiXCircle,
//   FiDownload,
//   FiUpload,
//   FiTrendingUp,
//   FiUsers,
//   FiClock,
// } from "react-icons/fi";
// import AddFitPassModal from "../components/AddFitPassModal";
// import EditFitPassModal from "../components/EditFitPassModal";
// import DeleteFitPassModal from "../components/DeleteFitPassModal";
// import Pagination from "../../../../components/common/Pagination";

// export default function FitPassPage() {
//   const dispatch = useAppDispatch();
//   const { plans, status } = useAppSelector((state) => state.fitpass);
//   const [search, setSearch] = useState("");
//   const [selectedPlan, setSelectedPlan] = useState<FitPassPlan | null>(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [durationFilter, setDurationFilter] = useState<string>("all");
//   const [activityFilter, setActivityFilter] = useState<string>("all");
//   const [sessionFilter, setSessionFilter] = useState<string>("all");
//   const [statusFilter, setStatusFilter] = useState<string>("all");

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items per page

//   useEffect(() => {
//     if (status === "idle") dispatch(fetchFitPassPlans());
//   }, [status, dispatch]);

//   // Get unique values for filters
//   const durations = [...new Set(plans.map((plan) => plan.duration))];
//   const activities = [...new Set(plans.flatMap((plan) => plan.activities))];

//   // Filter plans based on search and filters
//   const filteredPlans = plans.filter((plan) => {
//     const matchesSearch =
//       plan.name.toLowerCase().includes(search.toLowerCase()) ||
//       plan.id.toString().includes(search);

//     const matchesDuration =
//       durationFilter === "all" || plan.duration === durationFilter;
//     const matchesActivity =
//       activityFilter === "all" || plan.activities.includes(activityFilter);
//     const matchesSession =
//       sessionFilter === "all" ||
//       (sessionFilter === "online" && plan.onlineSessions) ||
//       (sessionFilter === "offline" && plan.offlineSessions) ||
//       (sessionFilter === "both" && plan.onlineSessions && plan.offlineSessions);
//     const matchesStatus =
//       statusFilter === "all" || plan.status === statusFilter;

//     return (
//       matchesSearch &&
//       matchesDuration &&
//       matchesActivity &&
//       matchesSession &&
//       matchesStatus
//     );
//   });

//   // Calculate pagination values
//   const totalItems = filteredPlans.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   // Get current page items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentPlans = filteredPlans.slice(indexOfFirstItem, indexOfLastItem);

//   // Reset to first page when search or filters change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, durationFilter, activityFilter, sessionFilter, statusFilter]);

//   const handleRefresh = () => {
//     dispatch(fetchFitPassPlans());
//   };

//   const handleEdit = (plan: FitPassPlan) => {
//     setSelectedPlan(plan);
//     setShowEditModal(true);
//   };

//   const handleDelete = (plan: FitPassPlan) => {
//     setSelectedPlan(plan);
//     setShowDeleteModal(true);
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleToggleStatus = (plan: FitPassPlan) => {
//     const newStatus = plan.status === "Active" ? "Inactive" : "Active";
//     const actionText = newStatus === "Active" ? "activate" : "deactivate";

//     dispatch(
//       showConfirmationModal({
//         title: "Confirm Status Change",
//         message: `Are you sure you want to ${actionText} the FitPass plan "${plan.name}"?`,
//         confirmButtonText: `Yes, ${actionText}`,
//         onConfirm: () => {
//           dispatch(toggleFitPassStatus(plan.id));
//         },
//       })
//     );
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Active":
//         return "bg-emerald-100 text-emerald-800";
//       case "Inactive":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getTagColor = (tag: string) => {
//     switch (tag) {
//       case "Popular":
//         return "bg-emerald-100 text-emerald-800";
//       case "New":
//         return "bg-blue-100 text-blue-800";
//       case "Limited":
//         return "bg-orange-100 text-orange-800";
//       case "Premium":
//         return "bg-purple-100 text-purple-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getDiscountPercentage = (price: number, originalPrice?: number) => {
//     if (!originalPrice) return null;
//     return Math.round(((originalPrice - price) / originalPrice) * 100);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with gradient background */}
//         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">
//                 FitPass Plans
//               </h1>
//               <p className="text-emerald-100 text-lg">
//                 Manage all fitness membership plans
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
//               <button
//                 onClick={() => setShowAddModal(true)}
//                 className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
//               >
//                 <FiPlus className="text-lg" />
//                 <span>Add Plan</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Total Plans</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {plans.length}
//                 </p>
//               </div>
//               <div className="bg-emerald-100 p-3 rounded-full">
//                 <FiActivity className="text-emerald-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Active</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {plans.filter((p) => p.status === "Active").length}
//                 </p>
//               </div>
//               <div className="bg-emerald-100 p-3 rounded-full">
//                 <FiCheckCircle className="text-emerald-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Inactive</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {plans.filter((p) => p.status === "Inactive").length}
//                 </p>
//               </div>
//               <div className="bg-red-100 p-3 rounded-full">
//                 <FiXCircle className="text-red-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Popular</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {plans.filter((p) => p.tags.includes("Popular")).length}
//                 </p>
//               </div>
//               <div className="bg-teal-100 p-3 rounded-full">
//                 <FiTrendingUp className="text-teal-600 text-xl" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search and Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiSearch className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by Plan Name or ID..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={durationFilter}
//                   onChange={(e) => setDurationFilter(e.target.value)}
//                 >
//                   <option value="all">All Durations</option>
//                   {durations.map((duration) => (
//                     <option key={duration} value={duration}>
//                       {duration}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiCalendar className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={activityFilter}
//                   onChange={(e) => setActivityFilter(e.target.value)}
//                 >
//                   <option value="all">All Activities</option>
//                   {activities.map((activity) => (
//                     <option key={activity} value={activity}>
//                       {activity}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiActivity className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={sessionFilter}
//                   onChange={(e) => setSessionFilter(e.target.value)}
//                 >
//                   <option value="all">All Sessions</option>
//                   <option value="online">Online Only</option>
//                   <option value="offline">Offline Only</option>
//                   <option value="both">Online & Offline</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiWifi className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiFilter className="h-4 w-4" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         {status === "loading" ? (
//           <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
//             <div className="flex flex-col items-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
//               <p className="mt-4 text-gray-600">Loading FitPass plans...</p>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 FitPass Plans ({filteredPlans.length})
//               </h2>
//               <div className="flex gap-2">
//                 <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
//                   <FiDownload className="text-sm" />
//                   Export
//                 </button>
//                 <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
//                   <FiUpload className="text-sm" />
//                   Import
//                 </button>
//               </div>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Plan
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Duration
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Credits
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Activities
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Sessions
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Tags
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {currentPlans.length === 0 ? (
//                     <tr>
//                       <td colSpan={9} className="px-6 py-16 text-center">
//                         <div className="flex flex-col items-center">
//                           <div className="bg-gray-100 p-4 rounded-full mb-4">
//                             <FiActivity className="h-12 w-12 text-gray-400" />
//                           </div>
//                           <h3 className="mt-2 text-lg font-medium text-gray-900">
//                             {filteredPlans.length === 0
//                               ? "No FitPass plans found"
//                               : "No plans on this page"}
//                           </h3>
//                           <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
//                             {search
//                               ? "Try adjusting your search to find what you're looking for"
//                               : filteredPlans.length === 0
//                               ? "Get started by adding a new FitPass plan"
//                               : "Try a different page"}
//                           </p>
//                           {!search && filteredPlans.length === 0 && (
//                             <button
//                               onClick={() => setShowAddModal(true)}
//                               className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
//                             >
//                               <FiPlus className="text-lg" />
//                               <span>Add Plan</span>
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ) : (
//                     currentPlans.map((plan) => (
//                       <tr
//                         key={plan.id}
//                         className="hover:bg-gray-50 transition-colors duration-150"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-10 w-10">
//                               <img
//                                 className="h-10 w-10 rounded-full object-cover"
//                                 src={plan.image}
//                                 alt={plan.name}
//                               />
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">
//                                 {plan.name}
//                               </div>
//                               <div className="text-sm text-gray-500">
//                                 ID: {plan.id}
//                               </div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">
//                             {plan.duration}
//                           </div>
//                           <div className="text-sm text-gray-500 flex items-center">
//                             <FiClock className="mr-1 h-3 w-3" />
//                             {plan.noExpiry
//                               ? "No expiry"
//                               : `${plan.validityDays} days`}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <span className="text-sm text-gray-900 mr-1">
//                               {plan.credits}
//                             </span>
//                             <span className="text-xs text-gray-500">
//                               credits
//                             </span>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <span className="text-sm text-gray-900 font-medium">
//                               ₹{plan.price}
//                             </span>
//                             {plan.originalPrice && (
//                               <>
//                                 <span className="text-sm text-gray-500 line-through ml-2">
//                                   ₹{plan.originalPrice}
//                                 </span>
//                                 <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
//                                   -
//                                   {getDiscountPercentage(
//                                     plan.price,
//                                     plan.originalPrice
//                                   )}
//                                   %
//                                 </span>
//                               </>
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex flex-wrap gap-1">
//                             {plan.activities
//                               .slice(0, 2)
//                               .map((activity, index) => (
//                                 <span
//                                   key={index}
//                                   className="inline-flex px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded"
//                                 >
//                                   {activity}
//                                 </span>
//                               ))}
//                             {plan.activities.length > 2 && (
//                               <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
//                                 +{plan.activities.length - 2} more
//                               </span>
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex gap-2">
//                             {plan.onlineSessions && (
//                               <div className="flex items-center text-sm text-gray-900">
//                                 <FiWifi className="mr-1 h-4 w-4 text-blue-500" />
//                                 Online
//                               </div>
//                             )}
//                             {plan.offlineSessions && (
//                               <div className="flex items-center text-sm text-gray-900">
//                                 <FiWifiOff className="mr-1 h-4 w-4 text-emerald-500" />
//                                 Offline
//                               </div>
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex flex-wrap gap-1">
//                             {plan.tags.map((tag, index) => (
//                               <span
//                                 key={index}
//                                 className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTagColor(
//                                   tag
//                                 )}`}
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {/* <span
//                             className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
//                               plan.status
//                             )}`}
//                           >
//                             {plan.status}
//                           </span> */}
//                           <button
//                             onClick={() => handleToggleStatus(plan)}
//                             className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//                             style={{
//                               backgroundColor:
//                                 plan.status === "Active"
//                                   ? "#10b981"
//                                   : "#ef4444",
//                             }}
//                           >
//                             <span
//                               className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
//                               style={{
//                                 transform:
//                                   plan.status === "Active"
//                                     ? "translateX(1.25rem)"
//                                     : "translateX(0.25rem)",
//                               }}
//                             />
//                           </button>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <button
//                             onClick={() => handleEdit(plan)}
//                             className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
//                             title="Edit"
//                           >
//                             <FiEdit2 className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(plan)}
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

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   onPageChange={handlePageChange}
//                   totalItems={totalItems}
//                   perPage={itemsPerPage}
//                 />
//               </div>
//             )}
//           </div>
//         )}

//         {/* Modals */}
//         {showAddModal && (
//           <AddFitPassModal onClose={() => setShowAddModal(false)} />
//         )}
//         {showEditModal && selectedPlan && (
//           <EditFitPassModal
//             plan={selectedPlan}
//             onClose={() => {
//               setSelectedPlan(null);
//               setShowEditModal(false);
//             }}
//           />
//         )}
//         {showDeleteModal && selectedPlan && (
//           <DeleteFitPassModal
//             plan={selectedPlan}
//             onClose={() => {
//               setSelectedPlan(null);
//               setShowDeleteModal(false);
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// src/modules/fitness/fitpass/FitPassPage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchFitPassPlans,
  FitPassPlan,
  toggleFitPassStatus,
} from "../fitpassSlice";
import { showConfirmationModal } from "../../../../store/slices/uiSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  FiPlus,
  FiSearch,
  FiRefreshCw,
  FiEdit2,
  FiTrash2,
  FiFilter,
  FiDollarSign,
  FiCalendar,
  FiActivity,
  FiWifi,
  FiWifiOff,
  FiTag,
  FiCheckCircle,
  FiXCircle,
  FiDownload,
  FiUpload,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiEye,
  FiEyeOff,
  FiStar,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi";
import AddFitPassModal from "../components/AddFitPassModal";
import EditFitPassModal from "../components/EditFitPassModal";
import DeleteFitPassModal from "../components/DeleteFitPassModal";
import DetailFitPassModal from "../components/DetailFitPassModal";
import Pagination from "../../../../components/common/Pagination";

export default function FitPassPage() {
  const dispatch = useAppDispatch();
  const { plans, status } = useAppSelector((state) => state.fitpass);
  const [search, setSearch] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<FitPassPlan | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Filters
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [validityRangeFilter, setValidityRangeFilter] = useState<string>("all");
  const [priceRangeFilter, setPriceRangeFilter] = useState<string>("all");
  const [subscriberFilter, setSubscriberFilter] = useState<string>("all");
  const [revenueFilter, setRevenueFilter] = useState<string>("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    if (status === "idle") dispatch(fetchFitPassPlans());
  }, [status, dispatch]);

  // Get unique values for filters
  const statuses = [...new Set(plans.map((plan) => plan.status))];
  const durations = [...new Set(plans.map((plan) => plan.duration))];

  // Filter plans based on search and filters
  const filteredPlans = plans.filter((plan) => {
    const matchesSearch =
      plan.name.toLowerCase().includes(search.toLowerCase()) ||
      plan.id.toString().includes(search);

    const matchesStatus =
      statusFilter === "all" || plan.status === statusFilter;

    const matchesValidityRange =
      validityRangeFilter === "all" ||
      (validityRangeFilter === "short" &&
        plan.validityDays &&
        plan.validityDays <= 30) ||
      (validityRangeFilter === "medium" &&
        plan.validityDays &&
        plan.validityDays > 30 &&
        plan.validityDays <= 90) ||
      (validityRangeFilter === "long" &&
        plan.validityDays &&
        plan.validityDays > 90) ||
      (validityRangeFilter === "no-expiry" && plan.noExpiry);

    const matchesPriceRange =
      priceRangeFilter === "all" ||
      (priceRangeFilter === "low" && plan.price < 50) ||
      (priceRangeFilter === "medium" && plan.price >= 50 && plan.price < 150) ||
      (priceRangeFilter === "high" && plan.price >= 150);

    const matchesSubscriberCount =
      subscriberFilter === "all" ||
      (subscriberFilter === "high" &&
        plan.totalSubscribers &&
        plan.totalSubscribers > 200) ||
      (subscriberFilter === "medium" &&
        plan.totalSubscribers &&
        plan.totalSubscribers >= 50 &&
        plan.totalSubscribers <= 200) ||
      (subscriberFilter === "low" &&
        plan.totalSubscribers &&
        plan.totalSubscribers < 50);

    const matchesRevenue =
      revenueFilter === "all" ||
      (revenueFilter === "high" &&
        plan.totalRevenue &&
        plan.totalRevenue > 10000) ||
      (revenueFilter === "medium" &&
        plan.totalRevenue &&
        plan.totalRevenue >= 2000 &&
        plan.totalRevenue <= 10000) ||
      (revenueFilter === "low" &&
        plan.totalRevenue &&
        plan.totalRevenue < 2000);

    return (
      matchesSearch &&
      matchesStatus &&
      matchesValidityRange &&
      matchesPriceRange &&
      matchesSubscriberCount &&
      matchesRevenue
    );
  });

  // Calculate pagination values
  const totalItems = filteredPlans.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlans = filteredPlans.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    statusFilter,
    validityRangeFilter,
    priceRangeFilter,
    subscriberFilter,
    revenueFilter,
  ]);

  const handleRefresh = () => {
    dispatch(fetchFitPassPlans());
  };

  const handleEdit = (plan: FitPassPlan) => {
    setSelectedPlan(plan);
    setShowEditModal(true);
  };

  const handleDelete = (plan: FitPassPlan) => {
    setSelectedPlan(plan);
    setShowDeleteModal(true);
  };

  const handleViewDetails = (plan: FitPassPlan) => {
    setSelectedPlan(plan);
    setShowDetailModal(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleStatus = (plan: FitPassPlan) => {
    const newStatus =
      plan.status === "Active"
        ? "Paused"
        : plan.status === "Paused"
        ? "Active"
        : "Active";
    const actionText = newStatus === "Active" ? "activate" : "pause";

    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to ${actionText} the FitPass plan "${plan.name}"?`,
        confirmButtonText: `Yes, ${actionText}`,
        onConfirm: () => {
          dispatch(toggleFitPassStatus(plan.id));
        },
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-800";
      case "Paused":
        return "bg-amber-100 text-amber-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Entry":
        return "bg-blue-100 text-blue-800";
      case "Popular":
        return "bg-emerald-100 text-emerald-800";
      case "Premium":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDiscountPercentage = (price: number, originalPrice?: number) => {
    if (!originalPrice) return null;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  // Function to get special badges
  const getSpecialBadges = (plan: FitPassPlan) => {
    const badges = [];

    if (plan.featuredPlan) {
      badges.push({
        icon: <FiStar className="text-xs" />,
        text: "Featured",
        color: "bg-amber-100 text-amber-800",
      });
    }

    if (plan.totalSubscribers && plan.totalSubscribers > 200) {
      badges.push({
        icon: <FiTrendingUp className="text-xs" />,
        text: "Most Popular",
        color: "bg-emerald-100 text-emerald-800",
      });
    }

    if (
      plan.originalPrice &&
      getDiscountPercentage(plan.price, plan.originalPrice) &&
      getDiscountPercentage(plan.price, plan.originalPrice)! > 30
    ) {
      badges.push({
        icon: <FiTag className="text-xs" />,
        text: "Best Value",
        color: "bg-emerald-100 text-emerald-800",
      });
    }

    if (plan.deferredLiability && plan.deferredLiability > 5000) {
      badges.push({
        icon: <FiAlertCircle className="text-xs" />,
        text: "High Liability",
        color: "bg-red-100 text-red-800",
      });
    }

    if (
      plan.validityDays &&
      plan.validityDays <= 30 &&
      plan.status === "Active"
    ) {
      badges.push({
        icon: <FiClock className="text-xs" />,
        text: "Expiring Soon",
        color: "bg-orange-100 text-orange-800",
      });
    }

    return badges;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                FitPass Plans
              </h1>
              <p className="text-emerald-100 text-lg">
                Manage all fitness membership plans
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
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <FiPlus className="text-lg" />
                <span>Add Plan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Plans</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {plans.length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiActivity className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Active</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {plans.filter((p) => p.status === "Active").length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiCheckCircle className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Paused</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {plans.filter((p) => p.status === "Paused").length}
                </p>
              </div>
              <div className="bg-amber-100 p-3 rounded-full">
                <FiXCircle className="text-amber-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Revenue
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  ₹
                  {plans
                    .reduce((sum, p) => sum + (p.totalRevenue || 0), 0)
                    .toFixed(0)}
                </p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <FiDollarSign className="text-teal-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        {/* <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by Plan Name or ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiFilter className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={validityRangeFilter}
                  onChange={(e) => setValidityRangeFilter(e.target.value)}
                >
                  <option value="all">All Validity</option>
                  <option value="short">Short (≤30 days)</option>
                  <option value="medium">Medium (31-90 days)</option>
                  <option value="long">Long (>90 days)</option>
                  <option value="no-expiry">No Expiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiCalendar className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
  <select
    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
    value={priceRangeFilter}
    onChange={(e) => setPriceRangeFilter(e.target.value)}
  >
    <option value="all">All Prices</option>
    <option value="high">High (&gt;200)</option>
    <option value="medium">Medium (50-200)</option>
    <option value="low">Low (&lt;50)</option>
  </select>

  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <FiDollarSign className="h-4 w-4" />
  </div>
</div>

              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={subscriberFilter}
                  onChange={(e) => setSubscriberFilter(e.target.value)}
                >
                  <option value="all">All Subscribers</option>
                  <option value="high">High (>200)</option>
                  <option value="medium">Medium (50-200)</option>
                  <option value="low">Low (<50)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiUsers className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={revenueFilter}
                  onChange={(e) => setRevenueFilter(e.target.value)}
                >
                  <option value="all">All Revenue</option>
                  <option value="high">High (>₹10k)</option>
                  <option value="medium">Medium (₹2k-₹10k)</option>
                  <option value="low">Low (<₹2k)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiTrendingUp className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by Plan Name or ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Status Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiFilter className="h-4 w-4" />
                </div>
              </div>

              {/* Validity Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={validityRangeFilter}
                  onChange={(e) => setValidityRangeFilter(e.target.value)}
                >
                  <option value="all">All Validity</option>
                  <option value="short">Short (&le;30 days)</option>
                  <option value="medium">Medium (31-90 days)</option>
                  <option value="long">Long (&gt;90 days)</option>
                  <option value="no-expiry">No Expiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiCalendar className="h-4 w-4" />
                </div>
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={priceRangeFilter}
                  onChange={(e) => setPriceRangeFilter(e.target.value)}
                >
                  <option value="all">All Prices</option>
                  <option value="high">High (&gt;200)</option>
                  <option value="medium">Medium (50-200)</option>
                  <option value="low">Low (&lt;50)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiDollarSign className="h-4 w-4" />
                </div>
              </div>

              {/* Subscriber Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={subscriberFilter}
                  onChange={(e) => setSubscriberFilter(e.target.value)}
                >
                  <option value="all">All Subscribers</option>
                  <option value="high">High (&gt;200)</option>
                  <option value="medium">Medium (50-200)</option>
                  <option value="low">Low (&lt;50)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiUsers className="h-4 w-4" />
                </div>
              </div>

              {/* Revenue Filter */}
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={revenueFilter}
                  onChange={(e) => setRevenueFilter(e.target.value)}
                >
                  <option value="all">All Revenue</option>
                  <option value="high">High (&gt;₹10k)</option>
                  <option value="medium">Medium (₹2k-₹10k)</option>
                  <option value="low">Low (&lt;₹2k)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiTrendingUp className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        {status === "loading" ? (
          <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
              <p className="mt-4 text-gray-600">Loading FitPass plans...</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                FitPass Plans ({filteredPlans.length})
              </h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
                  <FiDownload className="text-sm" />
                  Export
                </button>
                <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
                  <FiUpload className="text-sm" />
                  Import
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      FitPass ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credits
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Validity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscribers
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentPlans.length === 0 ? (
                    <tr>
                      <td colSpan={11} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 p-4 rounded-full mb-4">
                            <FiActivity className="h-12 w-12 text-gray-400" />
                          </div>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">
                            {filteredPlans.length === 0
                              ? "No FitPass plans found"
                              : "No plans on this page"}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                            {search
                              ? "Try adjusting your search to find what you're looking for"
                              : filteredPlans.length === 0
                              ? "Get started by adding a new FitPass plan"
                              : "Try a different page"}
                          </p>
                          {!search && filteredPlans.length === 0 && (
                            <button
                              onClick={() => setShowAddModal(true)}
                              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
                            >
                              <FiPlus className="text-lg" />
                              <span>Add Plan</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentPlans.map((plan) => (
                      <tr
                        key={plan.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            #{plan.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={plan.image}
                                alt={plan.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {plan.name}
                              </div>
                              <div className="flex gap-1 mt-1">
                                {getSpecialBadges(plan)
                                  .slice(0, 2)
                                  .map((badge, index) => (
                                    <span
                                      key={index}
                                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badge.color}`}
                                    >
                                      {badge.icon}
                                      <span className="ml-1">{badge.text}</span>
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-900 mr-1">
                              {plan.credits}
                            </span>
                            <span className="text-xs text-gray-500">
                              credits
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-900 font-medium">
                              ₹{plan.price}
                            </span>
                            {plan.originalPrice && (
                              <>
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  ₹{plan.originalPrice}
                                </span>
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                                  -
                                  {getDiscountPercentage(
                                    plan.price,
                                    plan.originalPrice
                                  )}
                                  %
                                </span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {plan.noExpiry
                              ? "No expiry"
                              : `${plan.validityDays} days`}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(
                              plan.planCategory
                            )}`}
                          >
                            {plan.planCategory}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                                plan.status
                              )}`}
                            >
                              {plan.status}
                            </span>
                            {/* <button
                              onClick={() => handleToggleStatus(plan)}
                              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                              style={{
                                backgroundColor:
                                  plan.status === "Active"
                                    ? "#10b981"
                                    : plan.status === "Paused"
                                    ? "#f59e0b"
                                    : "#6b7280",
                              }}
                            >
                              <span
                                className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                                style={{
                                  transform:
                                    plan.status === "Active"
                                      ? "translateX(1.25rem)"
                                      : "translateX(0.25rem)",
                                }}
                              />
                            </button> */}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {plan.activeSubscribers || 0} /{" "}
                            {plan.totalSubscribers || 0}
                          </div>
                          <div className="text-xs text-gray-500">
                            {plan.renewalRate}% renewal
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ₹{plan.totalRevenue?.toFixed(0) || 0}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(plan.created).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleViewDetails(plan)}
                            className="text-blue-600 hover:text-blue-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-blue-50"
                            title="View Details"
                          >
                            <FiInfo className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleEdit(plan)}
                            className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                            title="Edit"
                          >
                            <FiEdit2 className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(plan)}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  totalItems={totalItems}
                  perPage={itemsPerPage}
                />
              </div>
            )}
          </div>
        )}

        {/* Modals */}
        {showAddModal && (
          <AddFitPassModal onClose={() => setShowAddModal(false)} />
        )}
        {showEditModal && selectedPlan && (
          <EditFitPassModal
            plan={selectedPlan}
            onClose={() => {
              setSelectedPlan(null);
              setShowEditModal(false);
            }}
          />
        )}
        {showDeleteModal && selectedPlan && (
          <DeleteFitPassModal
            plan={selectedPlan}
            onClose={() => {
              setSelectedPlan(null);
              setShowDeleteModal(false);
            }}
          />
        )}
        {showDetailModal && selectedPlan && (
          <DetailFitPassModal
            plan={selectedPlan}
            onClose={() => {
              setSelectedPlan(null);
              setShowDetailModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
