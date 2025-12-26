// // src/modules/fitness/centres/CentresPage.tsx
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Add this import
// import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
// import {
//   fetchFitnessCentres,
//   FitnessCentre,
//   toggleCentreStatus,
// } from "../centresSlice";
// import { showConfirmationModal } from "../../../../store/slices/uiSlice";
// import {
//   FiPlus,
//   FiSearch,
//   FiRefreshCw,
//   FiEdit2,
//   FiTrash2,
//   FiFilter,
//   FiMapPin,
//   FiPhone,
//   FiMail,
//   FiClock,
//   FiStar,
//   FiUsers,
//   FiCheckCircle,
//   FiXCircle,
//   FiTool,
//   FiDownload,
//   FiUpload,
//   FiTrendingUp,
//   FiActivity,
//   FiCalendar,
//   FiGlobe,
//   FiFacebook,
//   FiInstagram,
//   FiTwitter,
// } from "react-icons/fi";
// import AddCentreModal from "../components/AddCentreModal";
// import EditCentreModal from "../components/EditCentreModal";
// import DeleteCentreModal from "../components/DeleteCentreModal";
// import Pagination from "../../../../components/common/Pagination";

// export default function CentresPage() {
//   const navigate = useNavigate(); // Add this hook
//   const dispatch = useAppDispatch();
//   const { centres, status } = useAppSelector((state) => state.centres);
//   const [search, setSearch] = useState("");
//   const [selectedCentre, setSelectedCentre] = useState<FitnessCentre | null>(
//     null
//   );
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [cityFilter, setCityFilter] = useState<string>("all");
//   const [statusFilter, setStatusFilter] = useState<string>("all");
//   const [facilityFilter, setFacilityFilter] = useState<string>("all");

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items per page

//   useEffect(() => {
//     if (status === "idle") dispatch(fetchFitnessCentres());
//   }, [status, dispatch]);

//   // Get unique values for filters
//   const cities = [...new Set(centres.map((c) => c.city))];
//   const facilities = [...new Set(centres.flatMap((c) => c.facilities))];

//   // Filter centres based on search and filters
//   const filteredCentres = centres.filter((centre) => {
//     const matchesSearch =
//       centre.name.toLowerCase().includes(search.toLowerCase()) ||
//       centre.city.toLowerCase().includes(search.toLowerCase()) ||
//       centre.phone.includes(search) ||
//       centre.id.toString().includes(search);

//     const matchesCity = cityFilter === "all" || centre.city === cityFilter;
//     const matchesStatus =
//       statusFilter === "all" || centre.status === statusFilter;
//     const matchesFacility =
//       facilityFilter === "all" || centre.facilities.includes(facilityFilter);

//     return matchesSearch && matchesCity && matchesStatus && matchesFacility;
//   });

//   // Calculate pagination values
//   const totalItems = filteredCentres.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   // Get current page items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCentres = filteredCentres.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   // Reset to first page when search or filters change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, cityFilter, statusFilter, facilityFilter]);

//   const handleRefresh = () => {
//     dispatch(fetchFitnessCentres());
//   };

//   const handleEdit = (centre: FitnessCentre) => {
//     setSelectedCentre(centre);
//     setShowEditModal(true);
//   };

//   const handleDelete = (centre: FitnessCentre) => {
//     setSelectedCentre(centre);
//     setShowDeleteModal(true);
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleToggleStatus = (centre: FitnessCentre) => {
//     const newStatus = centre.status === "Active" ? "deactivate" : "activate";

//     dispatch(
//       showConfirmationModal({
//         title: "Confirm Status Change",
//         message: `Are you sure you want to ${newStatus} the fitness centre "${centre.name}"?`,
//         confirmButtonText: `Yes, ${newStatus}`,
//         onConfirm: () => {
//           dispatch(toggleCentreStatus(centre.id));
//         },
//       })
//     );
//   };

//   // Add this function to handle centre name click
//   const handleCentreClick = (centre: FitnessCentre) => {
//     navigate(
//       `/classes?centre=${centre.id}&centreName=${encodeURIComponent(
//         centre.name
//       )}`
//     );
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Active":
//         return "bg-emerald-100 text-emerald-800";
//       case "Inactive":
//         return "bg-red-100 text-red-800";
//       case "Maintenance":
//         return "bg-orange-100 text-orange-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getOperatingHoursDisplay = (hours: any) => {
//     // Check if all days have same hours
//     const values = Object.values(hours);
//     const allSame = values.every((val) => val === values[0]);

//     if (allSame) {
//       return values[0];
//     }

//     // Show weekday and weekend hours if they're different
//     const weekdayHours = hours.monday;
//     const weekendHours = hours.sunday;

//     if (
//       hours.monday === hours.tuesday &&
//       hours.tuesday === hours.wednesday &&
//       hours.wednesday === hours.thursday &&
//       hours.thursday === hours.friday
//     ) {
//       return (
//         <div>
//           <div className="text-sm text-gray-900">Mon-Fri: {weekdayHours}</div>
//           <div className="text-sm text-gray-900">Sat-Sun: {weekendHours}</div>
//         </div>
//       );
//     }

//     return "Varies by day";
//   };

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FiStar key={i} className="fill-current text-yellow-400" />);
//     }

//     if (hasHalfStar) {
//       stars.push(<FiStar key="half" className="text-yellow-400" />);
//     }

//     const emptyStars = 5 - Math.ceil(rating);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<FiStar key={`empty-${i}`} className="text-gray-300" />);
//     }

//     return (
//       <div className="flex items-center gap-1">
//         {stars}
//         <span className="text-sm text-gray-600 ml-1">({rating})</span>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with gradient background */}
//         <div className="bg-gradient-to-r from-purple-600 to-pink-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">
//                 Fitness Centres
//               </h1>
//               <p className="text-purple-100 text-lg">
//                 Manage all fitness centre locations
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
//                 className="px-4 py-2 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-all duration-200 shadow-md flex items-center gap-2"
//               >
//                 <FiPlus className="text-lg" />
//                 <span>Add Centre</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">
//                   Total Centres
//                 </p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {centres.length}
//                 </p>
//               </div>
//               <div className="bg-purple-100 p-3 rounded-full">
//                 <FiActivity className="text-purple-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Active</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {centres.filter((c) => c.status === "Active").length}
//                 </p>
//               </div>
//               <div className="bg-emerald-100 p-3 rounded-full">
//                 <FiCheckCircle className="text-emerald-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">Maintenance</p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {centres.filter((c) => c.status === "Maintenance").length}
//                 </p>
//               </div>
//               <div className="bg-orange-100 p-3 rounded-full">
//                 <FiTool className="text-orange-600 text-xl" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-medium">
//                   Total Members
//                 </p>
//                 <p className="text-3xl font-bold text-gray-800 mt-1">
//                   {centres
//                     .reduce((sum, c) => sum + c.currentMembers, 0)
//                     .toLocaleString()}
//                 </p>
//               </div>
//               <div className="bg-pink-100 p-3 rounded-full">
//                 <FiUsers className="text-pink-600 text-xl" />
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
//                   placeholder="Search by Centre Name, City, Phone, or ID..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                   value={cityFilter}
//                   onChange={(e) => setCityFilter(e.target.value)}
//                 >
//                   <option value="all">All Cities</option>
//                   {cities.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiMapPin className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                   value={facilityFilter}
//                   onChange={(e) => setFacilityFilter(e.target.value)}
//                 >
//                   <option value="all">All Facilities</option>
//                   {facilities.map((facility) => (
//                     <option key={facility} value={facility}>
//                       {facility}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiActivity className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                   <option value="Maintenance">Maintenance</option>
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
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//               <p className="mt-4 text-gray-600">Loading fitness centres...</p>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Fitness Centres ({filteredCentres.length})
//               </h2>
//               <div className="flex gap-2">
//                 <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors duration-200 flex items-center gap-1">
//                   <FiDownload className="text-sm" />
//                   Export
//                 </button>
//                 <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors duration-200 flex items-center gap-1">
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
//                       Centre Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Location
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Phone
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Facilities
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Operating Hours
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
//                   {currentCentres.length === 0 ? (
//                     <tr>
//                       <td colSpan={7} className="px-6 py-16 text-center">
//                         <div className="flex flex-col items-center">
//                           <div className="bg-gray-100 p-4 rounded-full mb-4">
//                             <FiActivity className="h-12 w-12 text-gray-400" />
//                           </div>
//                           <h3 className="mt-2 text-lg font-medium text-gray-900">
//                             {filteredCentres.length === 0
//                               ? "No fitness centres found"
//                               : "No centres on this page"}
//                           </h3>
//                           <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
//                             {search
//                               ? "Try adjusting your search to find what you're looking for"
//                               : filteredCentres.length === 0
//                               ? "Get started by adding a new fitness centre"
//                               : "Try a different page"}
//                           </p>
//                           {!search && filteredCentres.length === 0 && (
//                             <button
//                               onClick={() => setShowAddModal(true)}
//                               className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
//                             >
//                               <FiPlus className="text-lg" />
//                               <span>Add Centre</span>
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ) : (
//                     currentCentres.map((centre) => (
//                       <tr
//                         key={centre.id}
//                         className="hover:bg-gray-50 transition-colors duration-150"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-10 w-10">
//                               <img
//                                 className="h-10 w-10 rounded-full object-cover"
//                                 src={centre.image}
//                                 alt={centre.name}
//                               />
//                             </div>
//                             <div className="ml-4">
//                               {/* Make the centre name clickable */}
//                               <button
//                                 onClick={() => handleCentreClick(centre)}
//                                 className="text-sm font-medium text-purple-600 hover:text-purple-900 transition-colors duration-150"
//                                 title={`View classes at ${centre.name}`}
//                               >
//                                 {centre.name}
//                               </button>
//                               <div className="text-sm text-gray-500">
//                                 ID: {centre.id}
//                               </div>
//                               {renderStars(centre.rating)}
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">
//                             {centre.address}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             {centre.city}, {centre.state}
//                           </div>
//                           <div className="text-sm text-gray-500 flex items-center">
//                             <FiUsers className="mr-1 h-3 w-3" />
//                             {centre.currentMembers}/{centre.totalCapacity}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900 flex items-center">
//                             <FiPhone className="mr-1 h-3 w-3" />
//                             {centre.phone}
//                           </div>
//                           <div className="text-sm text-gray-500 flex items-center">
//                             <FiMail className="mr-1 h-3 w-3" />
//                             {centre.email}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex flex-wrap gap-1">
//                             {centre.facilities
//                               .slice(0, 2)
//                               .map((facility, index) => (
//                                 <span
//                                   key={index}
//                                   className="inline-flex px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded"
//                                 >
//                                   {facility}
//                                 </span>
//                               ))}
//                             {centre.facilities.length > 2 && (
//                               <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
//                                 +{centre.facilities.length - 2} more
//                               </span>
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900 flex items-center">
//                             <FiClock className="mr-1 h-3 w-3" />
//                             {getOperatingHoursDisplay(centre.operatingHours)}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
//                               centre.status
//                             )}`}
//                           >
//                             {centre.status}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <button
//                             onClick={() => handleEdit(centre)}
//                             className="text-purple-600 hover:text-purple-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-purple-50"
//                             title="Edit"
//                           >
//                             <FiEdit2 className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(centre)}
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
//           <AddCentreModal onClose={() => setShowAddModal(false)} />
//         )}
//         {showEditModal && selectedCentre && (
//           <EditCentreModal
//             centre={selectedCentre}
//             onClose={() => {
//               setSelectedCentre(null);
//               setShowEditModal(false);
//             }}
//           />
//         )}
//         {showDeleteModal && selectedCentre && (
//           <DeleteCentreModal
//             centre={selectedCentre}
//             onClose={() => {
//               setSelectedCentre(null);
//               setShowDeleteModal(false);
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// src/modules/fitness/centres/CentresPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchFitnessCentres,
  FitnessCentre,
  toggleCentreStatus,
} from "../centresSlice";
import { showConfirmationModal } from "../../../../store/slices/uiSlice";
import {
  FiPlus,
  FiSearch,
  FiRefreshCw,
  FiEdit2,
  FiTrash2,
  FiFilter,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiStar,
  FiUsers,
  FiCheckCircle,
  FiXCircle,
  FiTool,
  FiDownload,
  FiUpload,
  FiTrendingUp,
  FiActivity,
  FiCalendar,
  FiGlobe,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import AddCentreModal from "../components/AddCentreModal";
import EditCentreModal from "../components/EditCentreModal";
import DeleteCentreModal from "../components/DeleteCentreModal";
import Pagination from "../../../../components/common/Pagination";

export default function CentresPage() {
  const navigate = useNavigate(); // Add this hook
  const dispatch = useAppDispatch();
  const { centres, status } = useAppSelector((state) => state.centres);
  const [search, setSearch] = useState("");
  const [selectedCentre, setSelectedCentre] = useState<FitnessCentre | null>(
    null
  );
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [facilityFilter, setFacilityFilter] = useState<string>("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    if (status === "idle") dispatch(fetchFitnessCentres());
  }, [status, dispatch]);

  // Get unique values for filters
  const cities = [...new Set(centres.map((c) => c.city))];
  const facilities = [...new Set(centres.flatMap((c) => c.facilities))];

  // Filter centres based on search and filters
  const filteredCentres = centres.filter((centre) => {
    const matchesSearch =
      centre.name.toLowerCase().includes(search.toLowerCase()) ||
      centre.city.toLowerCase().includes(search.toLowerCase()) ||
      centre.phone.includes(search) ||
      centre.id.toString().includes(search);

    const matchesCity = cityFilter === "all" || centre.city === cityFilter;
    const matchesStatus =
      statusFilter === "all" || centre.status === statusFilter;
    const matchesFacility =
      facilityFilter === "all" || centre.facilities.includes(facilityFilter);

    return matchesSearch && matchesCity && matchesStatus && matchesFacility;
  });

  // Calculate pagination values
  const totalItems = filteredCentres.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCentres = filteredCentres.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Reset to first page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, cityFilter, statusFilter, facilityFilter]);

  const handleRefresh = () => {
    dispatch(fetchFitnessCentres());
  };

  const handleEdit = (centre: FitnessCentre) => {
    setSelectedCentre(centre);
    setShowEditModal(true);
  };

  const handleDelete = (centre: FitnessCentre) => {
    setSelectedCentre(centre);
    setShowDeleteModal(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleStatus = (centre: FitnessCentre) => {
    const newStatus = centre.status === "Active" ? "deactivate" : "activate";

    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to ${newStatus} fitness centre "${centre.name}"?`,
        confirmButtonText: `Yes, ${newStatus}`,
        onConfirm: () => {
          dispatch(toggleCentreStatus(centre.id));
        },
      })
    );
  };

  // Add this function to handle centre name click
  const handleCentreClick = (centre: FitnessCentre) => {
    navigate(
      `/classes?centre=${centre.id}&centreName=${encodeURIComponent(
        centre.name
      )}`
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      case "Maintenance":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getOperatingHoursDisplay = (hours: any) => {
    // Check if all days have same hours
    const values = Object.values(hours);
    const allSame = values.every((val) => val === values[0]);

    if (allSame) {
      return values[0];
    }

    // Show weekday and weekend hours if they're different
    const weekdayHours = hours.monday;
    const weekendHours = hours.sunday;

    if (
      hours.monday === hours.tuesday &&
      hours.tuesday === hours.wednesday &&
      hours.wednesday === hours.thursday &&
      hours.thursday === hours.friday
    ) {
      return (
        <div>
          <div className="text-sm text-gray-900">Mon-Fri: {weekdayHours}</div>
          <div className="text-sm text-gray-900">Sat-Sun: {weekendHours}</div>
        </div>
      );
    }

    return "Varies by day";
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FiStar key={i} className="fill-current text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FiStar key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FiStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Fitness Centres
              </h1>
              <p className="text-emerald-100 text-lg">
                Manage all fitness centre locations
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
                <span>Add Centre</span>
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
                  Total Centres
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {centres.length}
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
                  {centres.filter((c) => c.status === "Active").length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiCheckCircle className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Maintenance</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {centres.filter((c) => c.status === "Maintenance").length}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <FiTool className="text-orange-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Members
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {centres
                    .reduce((sum, c) => sum + c.currentMembers, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <FiUsers className="text-teal-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

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
                  placeholder="Search by Centre Name, City, Phone, or ID..."
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
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                >
                  <option value="all">All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiMapPin className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={facilityFilter}
                  onChange={(e) => setFacilityFilter(e.target.value)}
                >
                  <option value="all">All Facilities</option>
                  {facilities.map((facility) => (
                    <option key={facility} value={facility}>
                      {facility}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiActivity className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiFilter className="h-4 w-4" />
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
              <p className="mt-4 text-gray-600">Loading fitness centres...</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Fitness Centres ({filteredCentres.length})
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
                      Centre Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Facilities
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Operating Hours
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentCentres.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 p-4 rounded-full mb-4">
                            <FiActivity className="h-12 w-12 text-gray-400" />
                          </div>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">
                            {filteredCentres.length === 0
                              ? "No fitness centres found"
                              : "No centres on this page"}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                            {search
                              ? "Try adjusting your search to find what you're looking for"
                              : filteredCentres.length === 0
                              ? "Get started by adding a new fitness centre"
                              : "Try a different page"}
                          </p>
                          {!search && filteredCentres.length === 0 && (
                            <button
                              onClick={() => setShowAddModal(true)}
                              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
                            >
                              <FiPlus className="text-lg" />
                              <span>Add Centre</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentCentres.map((centre) => (
                      <tr
                        key={centre.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={centre.image}
                                alt={centre.name}
                              />
                            </div>
                            <div className="ml-4">
                              {/* Make the centre name clickable */}
                              <button
                                onClick={() => handleCentreClick(centre)}
                                className="text-sm font-medium text-emerald-600 hover:text-emerald-900 transition-colors duration-150"
                                title={`View classes at ${centre.name}`}
                              >
                                {centre.name}
                              </button>
                              <div className="text-sm text-gray-500">
                                ID: {centre.id}
                              </div>
                              {renderStars(centre.rating)}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {centre.address}
                          </div>
                          <div className="text-sm text-gray-500">
                            {centre.city}, {centre.state}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <FiUsers className="mr-1 h-3 w-3" />
                            {centre.currentMembers}/{centre.totalCapacity}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 flex items-center">
                            <FiPhone className="mr-1 h-3 w-3" />
                            {centre.phone}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <FiMail className="mr-1 h-3 w-3" />
                            {centre.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {centre.facilities
                              .slice(0, 2)
                              .map((facility, index) => (
                                <span
                                  key={index}
                                  className="inline-flex px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded"
                                >
                                  {facility}
                                </span>
                              ))}
                            {centre.facilities.length > 2 && (
                              <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                                +{centre.facilities.length - 2} more
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 flex items-center">
                            {/* <FiClock className="mr-1 h-3 w-3" /> */}
                            {getOperatingHoursDisplay(centre.operatingHours)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              centre.status
                            )}`}
                          >
                            {centre.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEdit(centre)}
                            className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                            title="Edit"
                          >
                            <FiEdit2 className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(centre)}
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
          <AddCentreModal onClose={() => setShowAddModal(false)} />
        )}
        {showEditModal && selectedCentre && (
          <EditCentreModal
            centre={selectedCentre}
            onClose={() => {
              setSelectedCentre(null);
              setShowEditModal(false);
            }}
          />
        )}
        {showDeleteModal && selectedCentre && (
          <DeleteCentreModal
            centre={selectedCentre}
            onClose={() => {
              setSelectedCentre(null);
              setShowDeleteModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
