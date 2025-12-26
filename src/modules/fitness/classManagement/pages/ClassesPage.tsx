// // // src/modules/fitness/classes/ClassesPage.tsx
// // import React, { useEffect, useState } from "react";
// // import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
// // import { fetchClasses, Class, toggleClassStatus } from "../classesSlice";
// // import { showConfirmationModal } from "../../../../store/slices/uiSlice";
// // import {
// //   FiPlus,
// //   FiSearch,
// //   FiRefreshCw,
// //   FiEdit2,
// //   FiTrash2,
// //   FiFilter,
// //   FiCalendar,
// //   FiClock,
// //   FiMapPin,
// //   FiUser,
// //   FiWifi,
// //   FiWifiOff,
// //   FiTag,
// //   FiCheckCircle,
// //   FiXCircle,
// //   FiDownload,
// //   FiUpload,
// //   FiTrendingUp,
// //   FiActivity,
// //   FiUsers,
// // } from "react-icons/fi";
// // import AddClassModal from "../components/AddClassModal";
// // import EditClassModal from "../components/EditClassModal";
// // import DeleteClassModal from "../components/DeleteClassModal";
// // import Pagination from "../../../../components/common/Pagination";

// // export default function ClassesPage() {
// //   const dispatch = useAppDispatch();
// //   const { classes, status } = useAppSelector((state) => state.classes);
// //   const [search, setSearch] = useState("");
// //   const [selectedClass, setSelectedClass] = useState<Class | null>(null);
// //   const [showAddModal, setShowAddModal] = useState(false);
// //   const [showEditModal, setShowEditModal] = useState(false);
// //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// //   const [typeFilter, setTypeFilter] = useState<string>("all");
// //   const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
// //   const [sessionFilter, setSessionFilter] = useState<string>("all");
// //   const [statusFilter, setStatusFilter] = useState<string>("all");
// //   const [dateFilter, setDateFilter] = useState<string>("all");

// //   // Pagination state
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10; // Number of items per page

// //   useEffect(() => {
// //     if (status === "idle") dispatch(fetchClasses());
// //   }, [status, dispatch]);

// //   // Get unique values for filters
// //   const types = [...new Set(classes.map((c) => c.type))];
// //   const difficulties = [...new Set(classes.map((c) => c.difficulty))];

// //   // Filter classes based on search and filters
// //   const filteredClasses = classes.filter((classItem) => {
// //     const matchesSearch =
// //       classItem.name.toLowerCase().includes(search.toLowerCase()) ||
// //       classItem.instructor.toLowerCase().includes(search.toLowerCase()) ||
// //       classItem.id.toString().includes(search);

// //     const matchesType = typeFilter === "all" || classItem.type === typeFilter;
// //     const matchesDifficulty =
// //       difficultyFilter === "all" || classItem.difficulty === difficultyFilter;
// //     const matchesSession =
// //       sessionFilter === "all" ||
// //       (sessionFilter === "online" && classItem.online) ||
// //       (sessionFilter === "offline" && !classItem.online);
// //     const matchesStatus =
// //       statusFilter === "all" || classItem.status === statusFilter;

// //     const today = new Date().toISOString().slice(0, 10);
// //     const matchesDate =
// //       dateFilter === "all" ||
// //       (dateFilter === "today" && classItem.date === today) ||
// //       (dateFilter === "upcoming" && classItem.date > today) ||
// //       (dateFilter === "past" && classItem.date < today);

// //     return (
// //       matchesSearch &&
// //       matchesType &&
// //       matchesDifficulty &&
// //       matchesSession &&
// //       matchesStatus &&
// //       matchesDate
// //     );
// //   });

// //   // Calculate pagination values
// //   const totalItems = filteredClasses.length;
// //   const totalPages = Math.ceil(totalItems / itemsPerPage);

// //   // Get current page items
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentClasses = filteredClasses.slice(
// //     indexOfFirstItem,
// //     indexOfLastItem
// //   );

// //   // Reset to first page when search or filters change
// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [
// //     search,
// //     typeFilter,
// //     difficultyFilter,
// //     sessionFilter,
// //     statusFilter,
// //     dateFilter,
// //   ]);

// //   const handleRefresh = () => {
// //     dispatch(fetchClasses());
// //   };

// //   const handleEdit = (classItem: Class) => {
// //     setSelectedClass(classItem);
// //     setShowEditModal(true);
// //   };

// //   const handleDelete = (classItem: Class) => {
// //     setSelectedClass(classItem);
// //     setShowDeleteModal(true);
// //   };

// //   const handlePageChange = (page: number) => {
// //     setCurrentPage(page);
// //   };

// //   const handleToggleStatus = (classItem: Class) => {
// //     const newStatus = classItem.status === "Active" ? "cancel" : "activate";

// //     dispatch(
// //       showConfirmationModal({
// //         title: "Confirm Status Change",
// //         message: `Are you sure you want to ${newStatus} class "${classItem.name}"?`,
// //         confirmButtonText: `Yes, ${newStatus}`,
// //         onConfirm: () => {
// //           dispatch(toggleClassStatus(classItem.id));
// //         },
// //       })
// //     );
// //   };

// //   const getStatusColor = (status: string) => {
// //     switch (status) {
// //       case "Active":
// //         return "bg-emerald-100 text-emerald-800";
// //       case "Cancelled":
// //         return "bg-red-100 text-red-800";
// //       case "Completed":
// //         return "bg-gray-100 text-gray-800";
// //       default:
// //         return "bg-gray-100 text-gray-800";
// //     }
// //   };

// //   const getDifficultyColor = (difficulty: string) => {
// //     switch (difficulty) {
// //       case "Beginner":
// //         return "bg-green-100 text-green-800";
// //       case "Intermediate":
// //         return "bg-yellow-100 text-yellow-800";
// //       case "Advanced":
// //         return "bg-red-100 text-red-800";
// //       default:
// //         return "bg-gray-100 text-gray-800";
// //     }
// //   };

// //   const getTypeColor = (type: string) => {
// //     const colors: { [key: string]: string } = {
// //       Yoga: "bg-purple-100 text-purple-800",
// //       Zumba: "bg-pink-100 text-pink-800",
// //       Gym: "bg-blue-100 text-blue-800",
// //       Meditation: "bg-indigo-100 text-indigo-800",
// //       Pilates: "bg-teal-100 text-teal-800",
// //       CrossFit: "bg-orange-100 text-orange-800",
// //       Swimming: "bg-cyan-100 text-cyan-800",
// //       Dance: "bg-rose-100 text-rose-800",
// //       Boxing: "bg-red-100 text-red-800",
// //       Cycling: "bg-emerald-100 text-emerald-800",
// //     };
// //     return colors[type] || "bg-gray-100 text-gray-800";
// //   };

// //   const getTagColor = (tag: string) => {
// //     switch (tag) {
// //       case "Popular":
// //         return "bg-emerald-100 text-emerald-800";
// //       case "New":
// //         return "bg-blue-100 text-blue-800";
// //       case "Limited":
// //         return "bg-orange-100 text-orange-800";
// //       case "Premium":
// //         return "bg-purple-100 text-purple-800";
// //       default:
// //         return "bg-gray-100 text-gray-800";
// //     }
// //   };

// //   const isClassToday = (date: string) => {
// //     const today = new Date().toISOString().slice(0, 10);
// //     return date === today;
// //   };

// //   const isClassUpcoming = (date: string) => {
// //     const today = new Date().toISOString().slice(0, 10);
// //     return date > today;
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header with gradient background */}
// //         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
// //           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
// //             <div className="mb-4 md:mb-0">
// //               <h1 className="text-3xl md:text-4xl font-bold mb-2">
// //                 Class Management
// //               </h1>
// //               <p className="text-emerald-100 text-lg">
// //                 Manage all fitness classes and schedules
// //               </p>
// //             </div>
// //             <div className="flex gap-3">
// //               <button
// //                 onClick={handleRefresh}
// //                 className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
// //                 title="Refresh"
// //               >
// //                 <FiRefreshCw className="text-lg" />
// //                 <span className="hidden sm:inline">Refresh</span>
// //               </button>
// //               <button
// //                 onClick={() => setShowAddModal(true)}
// //                 className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
// //               >
// //                 <FiPlus className="text-lg" />
// //                 <span>Add Class</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
// //           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-gray-500 text-sm font-medium">
// //                   Total Classes
// //                 </p>
// //                 <p className="text-3xl font-bold text-gray-800 mt-1">
// //                   {classes.length}
// //                 </p>
// //               </div>
// //               <div className="bg-emerald-100 p-3 rounded-full">
// //                 <FiActivity className="text-emerald-600 text-xl" />
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-gray-500 text-sm font-medium">
// //                   Today's Classes
// //                 </p>
// //                 <p className="text-3xl font-bold text-gray-800 mt-1">
// //                   {classes.filter((c) => isClassToday(c.date)).length}
// //                 </p>
// //               </div>
// //               <div className="bg-emerald-100 p-3 rounded-full">
// //                 <FiCalendar className="text-emerald-600 text-xl" />
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-gray-500 text-sm font-medium">Upcoming</p>
// //                 <p className="text-3xl font-bold text-gray-800 mt-1">
// //                   {classes.filter((c) => isClassUpcoming(c.date)).length}
// //                 </p>
// //               </div>
// //               <div className="bg-teal-100 p-3 rounded-full">
// //                 <FiClock className="text-teal-600 text-xl" />
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-gray-500 text-sm font-medium">
// //                   Total Enrolled
// //                 </p>
// //                 <p className="text-3xl font-bold text-gray-800 mt-1">
// //                   {classes.reduce((sum, c) => sum + c.enrolled, 0)}
// //                 </p>
// //               </div>
// //               <div className="bg-teal-100 p-3 rounded-full">
// //                 <FiUsers className="text-teal-600 text-xl" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Search and Filters */}
// //         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
// //           <div className="flex flex-col lg:flex-row gap-4">
// //             <div className="flex-1">
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FiSearch className="h-5 w-5 text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   placeholder="Search by Class Name, Instructor, or ID..."
// //                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                 />
// //               </div>
// //             </div>
// //             <div className="flex flex-wrap gap-3">
// //               <div className="relative">
// //                 <select
// //                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   value={typeFilter}
// //                   onChange={(e) => setTypeFilter(e.target.value)}
// //                 >
// //                   <option value="all">All Types</option>
// //                   {types.map((type) => (
// //                     <option key={type} value={type}>
// //                       {type}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                   <FiActivity className="h-4 w-4" />
// //                 </div>
// //               </div>
// //               <div className="relative">
// //                 <select
// //                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   value={difficultyFilter}
// //                   onChange={(e) => setDifficultyFilter(e.target.value)}
// //                 >
// //                   <option value="all">All Levels</option>
// //                   {difficulties.map((difficulty) => (
// //                     <option key={difficulty} value={difficulty}>
// //                       {difficulty}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                   <FiTrendingUp className="h-4 w-4" />
// //                 </div>
// //               </div>
// //               <div className="relative">
// //                 <select
// //                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   value={sessionFilter}
// //                   onChange={(e) => setSessionFilter(e.target.value)}
// //                 >
// //                   <option value="all">All Sessions</option>
// //                   <option value="online">Online Only</option>
// //                   <option value="offline">Offline Only</option>
// //                 </select>
// //                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                   <FiWifi className="h-4 w-4" />
// //                 </div>
// //               </div>
// //               <div className="relative">
// //                 <select
// //                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   value={dateFilter}
// //                   onChange={(e) => setDateFilter(e.target.value)}
// //                 >
// //                   <option value="all">All Dates</option>
// //                   <option value="today">Today</option>
// //                   <option value="upcoming">Upcoming</option>
// //                   <option value="past">Past</option>
// //                 </select>
// //                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                   <FiCalendar className="h-4 w-4" />
// //                 </div>
// //               </div>
// //               <div className="relative">
// //                 <select
// //                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
// //                   value={statusFilter}
// //                   onChange={(e) => setStatusFilter(e.target.value)}
// //                 >
// //                   <option value="all">All Statuses</option>
// //                   <option value="Active">Active</option>
// //                   <option value="Cancelled">Cancelled</option>
// //                   <option value="Completed">Completed</option>
// //                 </select>
// //                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                   <FiFilter className="h-4 w-4" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Table */}
// //         {status === "loading" ? (
// //           <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
// //             <div className="flex flex-col items-center">
// //               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
// //               <p className="mt-4 text-gray-600">Loading classes...</p>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
// //               <h2 className="text-lg font-semibold text-gray-800">
// //                 Classes ({filteredClasses.length})
// //               </h2>
// //               <div className="flex gap-2">
// //                 <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
// //                   <FiDownload className="text-sm" />
// //                   Export
// //                 </button>
// //                 <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
// //                   <FiUpload className="text-sm" />
// //                   Import
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full divide-y divide-gray-200">
// //                 <thead className="bg-gray-50">
// //                   <tr>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Class
// //                     </th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Instructor
// //                     </th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Schedule
// //                     </th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Enrolled
// //                     </th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Credits
// //                     </th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Type
// //                     </th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Status
// //                     </th>
// //                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Actions
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200">
// //                   {currentClasses.length === 0 ? (
// //                     <tr>
// //                       <td colSpan={8} className="px-6 py-16 text-center">
// //                         <div className="flex flex-col items-center">
// //                           <div className="bg-gray-100 p-4 rounded-full mb-4">
// //                             <FiActivity className="h-12 w-12 text-gray-400" />
// //                           </div>
// //                           <h3 className="mt-2 text-lg font-medium text-gray-900">
// //                             {filteredClasses.length === 0
// //                               ? "No classes found"
// //                               : "No classes on this page"}
// //                           </h3>
// //                           <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
// //                             {search
// //                               ? "Try adjusting your search to find what you're looking for"
// //                               : filteredClasses.length === 0
// //                               ? "Get started by adding a new class"
// //                               : "Try a different page"}
// //                           </p>
// //                           {!search && filteredClasses.length === 0 && (
// //                             <button
// //                               onClick={() => setShowAddModal(true)}
// //                               className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
// //                             >
// //                               <FiPlus className="text-lg" />
// //                               <span>Add Class</span>
// //                             </button>
// //                           )}
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     currentClasses.map((classItem) => (
// //                       <tr
// //                         key={classItem.id}
// //                         className="hover:bg-gray-50 transition-colors duration-150"
// //                       >
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="flex items-center">
// //                             <div className="flex-shrink-0 h-10 w-10">
// //                               <img
// //                                 className="h-10 w-10 rounded-full object-cover"
// //                                 src={classItem.image}
// //                                 alt={classItem.name}
// //                               />
// //                             </div>
// //                             <div className="ml-4">
// //                               <div className="text-sm font-medium text-gray-900">
// //                                 {classItem.name}
// //                               </div>
// //                               <div className="text-sm text-gray-500">
// //                                 ID: {classItem.id}
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="text-sm text-gray-900">
// //                             {classItem.instructor}
// //                           </div>
// //                           <div className="text-sm text-gray-500 flex items-center">
// //                             <FiMapPin className="mr-1 h-3 w-3" />
// //                             {classItem.location}
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="text-sm text-gray-900">
// //                             {classItem.time}
// //                           </div>
// //                           <div className="text-sm text-gray-500 flex items-center">
// //                             <FiCalendar className="mr-1 h-3 w-3" />
// //                             {classItem.date}
// //                             {isClassToday(classItem.date) && (
// //                               <span className="ml-1 inline-flex px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
// //                                 Today
// //                               </span>
// //                             )}
// //                             {isClassUpcoming(classItem.date) && (
// //                               <span className="ml-1 inline-flex px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
// //                                 Upcoming
// //                               </span>
// //                             )}
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="flex items-center">
// //                             <div className="text-sm text-gray-900 mr-2">
// //                               {classItem.enrolled}/{classItem.capacity}
// //                             </div>
// //                             <div className="w-16 bg-gray-200 rounded-full h-2">
// //                               <div
// //                                 className="bg-emerald-600 h-2 rounded-full"
// //                                 style={{
// //                                   width: `${
// //                                     (classItem.enrolled / classItem.capacity) *
// //                                     100
// //                                   }%`,
// //                                 }}
// //                               ></div>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="text-sm font-medium text-gray-900">
// //                             {classItem.credits} credits
// //                           </div>
// //                           <div className="text-sm text-gray-500">
// //                             {classItem.duration} min
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="flex flex-col gap-1">
// //                             <span
// //                               className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
// //                                 classItem.type
// //                               )}`}
// //                             >
// //                               {classItem.type}
// //                             </span>
// //                             <span
// //                               className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(
// //                                 classItem.difficulty
// //                               )}`}
// //                             >
// //                               {classItem.difficulty}
// //                             </span>
// //                             <div className="flex gap-1">
// //                               {classItem.tags.map((tag, index) => (
// //                                 <span
// //                                   key={index}
// //                                   className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${getTagColor(
// //                                     tag
// //                                   )}`}
// //                                 >
// //                                   {tag}
// //                                 </span>
// //                               ))}
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <span
// //                             className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
// //                               classItem.status
// //                             )}`}
// //                           >
// //                             {classItem.status}
// //                           </span>
// //                           <div className="mt-1 flex items-center text-sm text-gray-500">
// //                             {classItem.online ? (
// //                               <>
// //                                 <FiWifi className="mr-1 h-3 w-3 text-emerald-500" />
// //                                 Online
// //                               </>
// //                             ) : (
// //                               <>
// //                                 <FiWifiOff className="mr-1 h-3 w-3 text-gray-500" />
// //                                 Offline
// //                               </>
// //                             )}
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                           <button
// //                             onClick={() => handleEdit(classItem)}
// //                             className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
// //                             title="Edit"
// //                           >
// //                             <FiEdit2 className="text-lg" />
// //                           </button>
// //                           <button
// //                             onClick={() => handleDelete(classItem)}
// //                             className="text-red-600 hover:text-red-900 transition-colors duration-150 p-1 rounded-full hover:bg-red-50"
// //                             title="Delete"
// //                           >
// //                             <FiTrash2 className="text-lg" />
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* Pagination */}
// //             {totalPages > 1 && (
// //               <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
// //                 <Pagination
// //                   currentPage={currentPage}
// //                   totalPages={totalPages}
// //                   onPageChange={handlePageChange}
// //                   totalItems={totalItems}
// //                   perPage={itemsPerPage}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* Modals */}
// //         {showAddModal && (
// //           <AddClassModal onClose={() => setShowAddModal(false)} />
// //         )}
// //         {showEditModal && selectedClass && (
// //           <EditClassModal
// //             classItem={selectedClass}
// //             onClose={() => {
// //               setSelectedClass(null);
// //               setShowEditModal(false);
// //             }}
// //           />
// //         )}
// //         {showDeleteModal && selectedClass && (
// //           <DeleteClassModal
// //             classItem={selectedClass}
// //             onClose={() => {
// //               setSelectedClass(null);
// //               setShowDeleteModal(false);
// //             }}
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // src/modules/fitness/classes/ClassesPage.tsx
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
// import {
//   fetchClasses,
//   fetchClassesByCentre,
//   Class,
//   toggleClassStatus,
// } from "../classesSlice";
// import { showConfirmationModal } from "../../../../store/slices/uiSlice";
// import {
//   FiPlus,
//   FiSearch,
//   FiRefreshCw,
//   FiEdit2,
//   FiTrash2,
//   FiFilter,
//   FiCalendar,
//   FiClock,
//   FiMapPin,
//   FiUser,
//   FiWifi,
//   FiWifiOff,
//   FiTag,
//   FiCheckCircle,
//   FiXCircle,
//   FiDownload,
//   FiUpload,
//   FiTrendingUp,
//   FiActivity,
//   FiUsers,
//   FiArrowLeft,
// } from "react-icons/fi";
// import AddClassModal from "../components/AddClassModal";
// import EditClassModal from "../components/EditClassModal";
// import DeleteClassModal from "../components/DeleteClassModal";
// import Pagination from "../../../../components/common/Pagination";

// export default function ClassesPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const { classes, status } = useAppSelector((state) => state.classes);
//   const [search, setSearch] = useState("");
//   const [selectedClass, setSelectedClass] = useState<Class | null>(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [typeFilter, setTypeFilter] = useState<string>("all");
//   const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
//   const [sessionFilter, setSessionFilter] = useState<string>("all");
//   const [statusFilter, setStatusFilter] = useState<string>("all");
//   const [dateFilter, setDateFilter] = useState<string>("all");

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of items per page

//   // Get centre ID from URL if present
//   const urlParams = new URLSearchParams(location.search);
//   const centreId = urlParams.get("centre");
//   const centreName = urlParams.get("centreName");

//   useEffect(() => {
//     if (centreId) {
//       // Fetch classes for specific centre
//       dispatch(fetchClassesByCentre(centreId));
//     } else if (status === "idle") {
//       // Fetch all classes
//       dispatch(fetchClasses());
//     }
//   }, [status, dispatch, centreId]);

//   // Get unique values for filters
//   const types = [...new Set(classes.map((c) => c.type))];
//   const difficulties = [...new Set(classes.map((c) => c.difficulty))];

//   // Filter classes based on search and filters
//   const filteredClasses = classes.filter((classItem) => {
//     const matchesSearch =
//       classItem.name.toLowerCase().includes(search.toLowerCase()) ||
//       classItem.instructor.toLowerCase().includes(search.toLowerCase()) ||
//       classItem.id.toString().includes(search);

//     const matchesType = typeFilter === "all" || classItem.type === typeFilter;
//     const matchesDifficulty =
//       difficultyFilter === "all" || classItem.difficulty === difficultyFilter;
//     const matchesSession =
//       sessionFilter === "all" ||
//       (sessionFilter === "online" && classItem.online) ||
//       (sessionFilter === "offline" && !classItem.online);
//     const matchesStatus =
//       statusFilter === "all" || classItem.status === statusFilter;

//     const today = new Date().toISOString().slice(0, 10);
//     const matchesDate =
//       dateFilter === "all" ||
//       (dateFilter === "today" && classItem.date === today) ||
//       (dateFilter === "upcoming" && classItem.date > today) ||
//       (dateFilter === "past" && classItem.date < today);

//     return (
//       matchesSearch &&
//       matchesType &&
//       matchesDifficulty &&
//       matchesSession &&
//       matchesStatus &&
//       matchesDate
//     );
//   });

//   // Calculate pagination values
//   const totalItems = filteredClasses.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   // Get current page items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentClasses = filteredClasses.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   // Reset to first page when search or filters change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [
//     search,
//     typeFilter,
//     difficultyFilter,
//     sessionFilter,
//     statusFilter,
//     dateFilter,
//   ]);

//   const handleRefresh = () => {
//     if (centreId) {
//       dispatch(fetchClassesByCentre(centreId));
//     } else {
//       dispatch(fetchClasses());
//     }
//   };

//   const handleEdit = (classItem: Class) => {
//     setSelectedClass(classItem);
//     setShowEditModal(true);
//   };

//   const handleDelete = (classItem: Class) => {
//     setSelectedClass(classItem);
//     setShowDeleteModal(true);
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleToggleStatus = (classItem: Class) => {
//     const newStatus = classItem.status === "Active" ? "cancel" : "activate";

//     dispatch(
//       showConfirmationModal({
//         title: "Confirm Status Change",
//         message: `Are you sure you want to ${newStatus} class "${classItem.name}"?`,
//         confirmButtonText: `Yes, ${newStatus}`,
//         onConfirm: () => {
//           dispatch(toggleClassStatus(classItem.id));
//         },
//       })
//     );
//   };

//   // Add this function to handle navigation back to centres
//   const handleBackToCentres = () => {
//     navigate("/centres");
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Active":
//         return "bg-emerald-100 text-emerald-800";
//       case "Cancelled":
//         return "bg-red-100 text-red-800";
//       case "Completed":
//         return "bg-gray-100 text-gray-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "Beginner":
//         return "bg-green-100 text-green-800";
//       case "Intermediate":
//         return "bg-yellow-100 text-yellow-800";
//       case "Advanced":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getTypeColor = (type: string) => {
//     const colors: { [key: string]: string } = {
//       Yoga: "bg-purple-100 text-purple-800",
//       Zumba: "bg-pink-100 text-pink-800",
//       Gym: "bg-blue-100 text-blue-800",
//       Meditation: "bg-indigo-100 text-indigo-800",
//       Pilates: "bg-teal-100 text-teal-800",
//       CrossFit: "bg-orange-100 text-orange-800",
//       Swimming: "bg-cyan-100 text-cyan-800",
//       Dance: "bg-rose-100 text-rose-800",
//       Boxing: "bg-red-100 text-red-800",
//       Cycling: "bg-emerald-100 text-emerald-800",
//     };
//     return colors[type] || "bg-gray-100 text-gray-800";
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

//   const isClassToday = (date: string) => {
//     const today = new Date().toISOString().slice(0, 10);
//     return date === today;
//   };

//   const isClassUpcoming = (date: string) => {
//     const today = new Date().toISOString().slice(0, 10);
//     return date > today;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with gradient background */}
//         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">
//                 {centreName ? `${centreName} Classes` : "Class Management"}
//               </h1>
//               <p className="text-emerald-100 text-lg">
//                 {centreName
//                   ? `Manage all fitness classes at ${centreName}`
//                   : "Manage all fitness classes and schedules"}
//               </p>
//             </div>
//             <div className="flex gap-3">
//               {centreName && (
//                 <button
//                   onClick={handleBackToCentres}
//                   className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
//                   title="Back to Centres"
//                 >
//                   <FiArrowLeft className="text-lg" />
//                   <span className="hidden sm:inline">Back to Centres</span>
//                 </button>
//               )}
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
//                 <span>Add Class</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Centre Info Card - only show when viewing a specific centre */}
//         {centreName && (
//           <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-emerald-500">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                   {centreName}
//                 </h2>
//                 <p className="text-gray-600">
//                   Viewing classes for this fitness centre
//                 </p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="text-center">
//                   <p className="text-2xl font-bold text-emerald-600">
//                     {classes.length}
//                   </p>
//                   <p className="text-sm text-gray-500">Total Classes</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-2xl font-bold text-teal-600">
//                     {classes.filter((c) => isClassToday(c.date)).length}
//                   </p>
//                   <p className="text-sm text-gray-500">Today's Classes</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-2xl font-bold text-emerald-600">
//                     {classes.reduce((sum, c) => sum + c.enrolled, 0)}
//                   </p>
//                   <p className="text-sm text-gray-500">Total Enrolled</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Stats Cards - only show when viewing all classes */}
//         {!centreName && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm font-medium">
//                     Total Classes
//                   </p>
//                   <p className="text-3xl font-bold text-gray-800 mt-1">
//                     {classes.length}
//                   </p>
//                 </div>
//                 <div className="bg-emerald-100 p-3 rounded-full">
//                   <FiActivity className="text-emerald-600 text-xl" />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm font-medium">
//                     Today's Classes
//                   </p>
//                   <p className="text-3xl font-bold text-gray-800 mt-1">
//                     {classes.filter((c) => isClassToday(c.date)).length}
//                   </p>
//                 </div>
//                 <div className="bg-emerald-100 p-3 rounded-full">
//                   <FiCalendar className="text-emerald-600 text-xl" />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm font-medium">Upcoming</p>
//                   <p className="text-3xl font-bold text-gray-800 mt-1">
//                     {classes.filter((c) => isClassUpcoming(c.date)).length}
//                   </p>
//                 </div>
//                 <div className="bg-teal-100 p-3 rounded-full">
//                   <FiClock className="text-teal-600 text-xl" />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm font-medium">
//                     Total Enrolled
//                   </p>
//                   <p className="text-3xl font-bold text-gray-800 mt-1">
//                     {classes.reduce((sum, c) => sum + c.enrolled, 0)}
//                   </p>
//                 </div>
//                 <div className="bg-teal-100 p-3 rounded-full">
//                   <FiUsers className="text-teal-600 text-xl" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

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
//                   placeholder="Search by Class Name, Instructor, or ID..."
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
//                   value={typeFilter}
//                   onChange={(e) => setTypeFilter(e.target.value)}
//                 >
//                   <option value="all">All Types</option>
//                   {types.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
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
//                   value={difficultyFilter}
//                   onChange={(e) => setDifficultyFilter(e.target.value)}
//                 >
//                   <option value="all">All Levels</option>
//                   {difficulties.map((difficulty) => (
//                     <option key={difficulty} value={difficulty}>
//                       {difficulty}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiTrendingUp className="h-4 w-4" />
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
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiWifi className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                   value={dateFilter}
//                   onChange={(e) => setDateFilter(e.target.value)}
//                 >
//                   <option value="all">All Dates</option>
//                   <option value="today">Today</option>
//                   <option value="upcoming">Upcoming</option>
//                   <option value="past">Past</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                   <FiCalendar className="h-4 w-4" />
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
//                   <option value="Cancelled">Cancelled</option>
//                   <option value="Completed">Completed</option>
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
//               <p className="mt-4 text-gray-600">Loading classes...</p>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Classes ({filteredClasses.length})
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
//                       Class
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Instructor
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Schedule
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Enrolled
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Credits
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Type
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
//                   {currentClasses.length === 0 ? (
//                     <tr>
//                       <td colSpan={8} className="px-6 py-16 text-center">
//                         <div className="flex flex-col items-center">
//                           <div className="bg-gray-100 p-4 rounded-full mb-4">
//                             <FiActivity className="h-12 w-12 text-gray-400" />
//                           </div>
//                           <h3 className="mt-2 text-lg font-medium text-gray-900">
//                             {filteredClasses.length === 0
//                               ? "No classes found"
//                               : "No classes on this page"}
//                           </h3>
//                           <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
//                             {search
//                               ? "Try adjusting your search to find what you're looking for"
//                               : filteredClasses.length === 0
//                               ? "Get started by adding a new class"
//                               : "Try a different page"}
//                           </p>
//                           {!search && filteredClasses.length === 0 && (
//                             <button
//                               onClick={() => setShowAddModal(true)}
//                               className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
//                             >
//                               <FiPlus className="text-lg" />
//                               <span>Add Class</span>
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ) : (
//                     currentClasses.map((classItem) => (
//                       <tr
//                         key={classItem.id}
//                         className="hover:bg-gray-50 transition-colors duration-150"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-10 w-10">
//                               <img
//                                 className="h-10 w-10 rounded-full object-cover"
//                                 src={classItem.image}
//                                 alt={classItem.name}
//                               />
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">
//                                 {classItem.name}
//                               </div>
//                               <div className="text-sm text-gray-500">
//                                 ID: {classItem.id}
//                               </div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">
//                             {classItem.instructor}
//                           </div>
//                           <div className="text-sm text-gray-500 flex items-center">
//                             <FiMapPin className="mr-1 h-3 w-3" />
//                             {classItem.location}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">
//                             {classItem.time}
//                           </div>
//                           <div className="text-sm text-gray-500 flex items-center">
//                             <FiCalendar className="mr-1 h-3 w-3" />
//                             {classItem.date}
//                             {isClassToday(classItem.date) && (
//                               <span className="ml-1 inline-flex px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
//                                 Today
//                               </span>
//                             )}
//                             {isClassUpcoming(classItem.date) && (
//                               <span className="ml-1 inline-flex px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
//                                 Upcoming
//                               </span>
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="text-sm text-gray-900 mr-2">
//                               {classItem.enrolled}/{classItem.capacity}
//                             </div>
//                             <div className="w-16 bg-gray-200 rounded-full h-2">
//                               <div
//                                 className="bg-emerald-600 h-2 rounded-full"
//                                 style={{
//                                   width: `${
//                                     (classItem.enrolled / classItem.capacity) *
//                                     100
//                                   }%`,
//                                 }}
//                               ></div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             {classItem.credits} credits
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             {classItem.duration} min
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex flex-col gap-1">
//                             <span
//                               className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
//                                 classItem.type
//                               )}`}
//                             >
//                               {classItem.type}
//                             </span>
//                             <span
//                               className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(
//                                 classItem.difficulty
//                               )}`}
//                             >
//                               {classItem.difficulty}
//                             </span>
//                             <div className="flex gap-1">
//                               {classItem.tags.map((tag, index) => (
//                                 <span
//                                   key={index}
//                                   className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${getTagColor(
//                                     tag
//                                   )}`}
//                                 >
//                                   {tag}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
//                               classItem.status
//                             )}`}
//                           >
//                             {classItem.status}
//                           </span>
//                           <div className="mt-1 flex items-center text-sm text-gray-500">
//                             {classItem.online ? (
//                               <>
//                                 <FiWifi className="mr-1 h-3 w-3 text-emerald-500" />
//                                 Online
//                               </>
//                             ) : (
//                               <>
//                                 <FiWifiOff className="mr-1 h-3 w-3 text-gray-500" />
//                                 Offline
//                               </>
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <button
//                             onClick={() => handleEdit(classItem)}
//                             className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
//                             title="Edit"
//                           >
//                             <FiEdit2 className="text-lg" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(classItem)}
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
//           <AddClassModal onClose={() => setShowAddModal(false)} />
//         )}
//         {showEditModal && selectedClass && (
//           <EditClassModal
//             classItem={selectedClass}
//             onClose={() => {
//               setSelectedClass(null);
//               setShowEditModal(false);
//             }}
//           />
//         )}
//         {showDeleteModal && selectedClass && (
//           <DeleteClassModal
//             classItem={selectedClass}
//             onClose={() => {
//               setSelectedClass(null);
//               setShowDeleteModal(false);
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// src/modules/fitness/classes/ClassesPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { fetchClasses, Class, toggleClassStatus } from "../classesSlice";
import { showConfirmationModal } from "../../../../store/slices/uiSlice";
import {
  FiPlus,
  FiSearch,
  FiRefreshCw,
  FiEdit2,
  FiTrash2,
  FiFilter,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUser,
  FiWifi,
  FiWifiOff,
  FiTag,
  FiCheckCircle,
  FiXCircle,
  FiDownload,
  FiUpload,
  FiTrendingUp,
  FiActivity,
  FiUsers,
  FiArrowLeft,
} from "react-icons/fi";
import AddClassModal from "../components/AddClassModal";
import EditClassModal from "../components/EditClassModal";
import DeleteClassModal from "../components/DeleteClassModal";
import Pagination from "../../../../components/common/Pagination";

export default function ClassesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const centreId = searchParams.get("centre");
  const centreName = searchParams.get("centreName");

  const dispatch = useAppDispatch();
  const { classes, status } = useAppSelector((state) => state.classes);
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [sessionFilter, setSessionFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    if (status === "idle") dispatch(fetchClasses());
  }, [status, dispatch]);

  // Get unique values for filters
  const types = [...new Set(classes.map((c) => c.type))];
  const difficulties = [...new Set(classes.map((c) => c.difficulty))];

  // Filter classes based on search and filters
  const filteredClasses = classes.filter((classItem) => {
    const matchesSearch =
      classItem.name.toLowerCase().includes(search.toLowerCase()) ||
      classItem.instructor.toLowerCase().includes(search.toLowerCase()) ||
      classItem.id.toString().includes(search);

    const matchesType = typeFilter === "all" || classItem.type === typeFilter;
    const matchesDifficulty =
      difficultyFilter === "all" || classItem.difficulty === difficultyFilter;
    const matchesSession =
      sessionFilter === "all" ||
      (sessionFilter === "online" && classItem.online) ||
      (sessionFilter === "offline" && !classItem.online);
    const matchesStatus =
      statusFilter === "all" || classItem.status === statusFilter;

    const today = new Date().toISOString().slice(0, 10);
    const matchesDate =
      dateFilter === "all" ||
      (dateFilter === "today" && classItem.date === today) ||
      (dateFilter === "upcoming" && classItem.date > today) ||
      (dateFilter === "past" && classItem.date < today);

    return (
      matchesSearch &&
      matchesType &&
      matchesDifficulty &&
      matchesSession &&
      matchesStatus &&
      matchesDate
    );
  });

  // Calculate pagination values
  const totalItems = filteredClasses.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClasses = filteredClasses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Reset to first page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    typeFilter,
    difficultyFilter,
    sessionFilter,
    statusFilter,
    dateFilter,
  ]);

  const handleRefresh = () => {
    dispatch(fetchClasses());
  };

  const handleEdit = (classItem: Class) => {
    setSelectedClass(classItem);
    setShowEditModal(true);
  };

  const handleDelete = (classItem: Class) => {
    setSelectedClass(classItem);
    setShowDeleteModal(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleStatus = (classItem: Class) => {
    const newStatus = classItem.status === "Active" ? "cancel" : "activate";

    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to ${newStatus} class "${classItem.name}"?`,
        confirmButtonText: `Yes, ${newStatus}`,
        onConfirm: () => {
          dispatch(toggleClassStatus(classItem.id));
        },
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Yoga: "bg-purple-100 text-purple-800",
      Zumba: "bg-pink-100 text-pink-800",
      Gym: "bg-blue-100 text-blue-800",
      Meditation: "bg-indigo-100 text-indigo-800",
      Pilates: "bg-teal-100 text-teal-800",
      CrossFit: "bg-orange-100 text-orange-800",
      Swimming: "bg-cyan-100 text-cyan-800",
      Dance: "bg-rose-100 text-rose-800",
      Boxing: "bg-red-100 text-red-800",
      Cycling: "bg-emerald-100 text-emerald-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Popular":
        return "bg-emerald-100 text-emerald-800";
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Limited":
        return "bg-orange-100 text-orange-800";
      case "Premium":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const isClassToday = (date: string) => {
    const today = new Date().toISOString().slice(0, 10);
    return date === today;
  };

  const isClassUpcoming = (date: string) => {
    const today = new Date().toISOString().slice(0, 10);
    return date > today;
  };

  // const handleBackToCentres = () => {
  //   navigate("/centres");
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              {/* {centreId && centreName && (
                <button
                  onClick={handleBackToCentres}
                  className="flex items-center text-white/80 hover:text-white mb-2 transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to Centres
                </button>
              )} */}
              <div className="flex">
                <button
                  onClick={() => navigate("/fitness-centres")}
                  className="mr-2 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-200"
                >
                  <FiArrowLeft className="text-lg" />
                </button>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {centreName ? `Classes at ${centreName}` : "Class Management"}
                </h1>
              </div>
              <p className="text-emerald-100 text-lg ml-2">
                {centreName
                  ? `View and manage classes at ${centreName}`
                  : "Manage all fitness classes and schedules"}
              </p>{" "}
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
                <span>Add Class</span>
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
                  Total Classes
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {classes.length}
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
                <p className="text-gray-500 text-sm font-medium">
                  Today's Classes
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {classes.filter((c) => isClassToday(c.date)).length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiCalendar className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Upcoming</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {classes.filter((c) => isClassUpcoming(c.date)).length}
                </p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <FiClock className="text-teal-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Enrolled
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {classes.reduce((sum, c) => sum + c.enrolled, 0)}
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
                  placeholder="Search by Class Name, Instructor, or ID..."
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
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="all">All Types</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
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
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiTrendingUp className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={sessionFilter}
                  onChange={(e) => setSessionFilter(e.target.value)}
                >
                  <option value="all">All Sessions</option>
                  <option value="online">Online Only</option>
                  <option value="offline">Offline Only</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiWifi className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiCalendar className="h-4 w-4" />
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
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
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
              <p className="mt-4 text-gray-600">Loading classes...</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Classes ({filteredClasses.length})
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
                      Class
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Instructor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Schedule
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Enrolled
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credits
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
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
                  {currentClasses.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 p-4 rounded-full mb-4">
                            <FiActivity className="h-12 w-12 text-gray-400" />
                          </div>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">
                            {filteredClasses.length === 0
                              ? "No classes found"
                              : "No classes on this page"}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                            {search
                              ? "Try adjusting your search to find what you're looking for"
                              : filteredClasses.length === 0
                              ? "Get started by adding a new class"
                              : "Try a different page"}
                          </p>
                          {!search && filteredClasses.length === 0 && (
                            <button
                              onClick={() => setShowAddModal(true)}
                              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
                            >
                              <FiPlus className="text-lg" />
                              <span>Add Class</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentClasses.map((classItem) => (
                      <tr
                        key={classItem.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={classItem.image}
                                alt={classItem.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {classItem.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                ID: {classItem.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {classItem.instructor}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <FiMapPin className="mr-1 h-3 w-3" />
                            {classItem.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {classItem.time}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <FiCalendar className="mr-1 h-3 w-3" />
                            {classItem.date}
                            {isClassToday(classItem.date) && (
                              <span className="ml-1 inline-flex px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                                Today
                              </span>
                            )}
                            {isClassUpcoming(classItem.date) && (
                              <span className="ml-1 inline-flex px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                                Upcoming
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm text-gray-900 mr-2">
                              {classItem.enrolled}/{classItem.capacity}
                            </div>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-emerald-600 h-2 rounded-full"
                                style={{
                                  width: `${
                                    (classItem.enrolled / classItem.capacity) *
                                    100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {classItem.credits} credits
                          </div>
                          <div className="text-sm text-gray-500">
                            {classItem.duration} min
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-1">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
                                classItem.type
                              )}`}
                            >
                              {classItem.type}
                            </span>
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(
                                classItem.difficulty
                              )}`}
                            >
                              {classItem.difficulty}
                            </span>
                            <div className="flex gap-1">
                              {classItem.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${getTagColor(
                                    tag
                                  )}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              classItem.status
                            )}`}
                          >
                            {classItem.status}
                          </span>
                          <div className="mt-1 flex items-center text-sm text-gray-500">
                            {classItem.online ? (
                              <>
                                <FiWifi className="mr-1 h-3 w-3 text-emerald-500" />
                                Online
                              </>
                            ) : (
                              <>
                                <FiWifiOff className="mr-1 h-3 w-3 text-gray-500" />
                                Offline
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEdit(classItem)}
                            className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                            title="Edit"
                          >
                            <FiEdit2 className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(classItem)}
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
          <AddClassModal onClose={() => setShowAddModal(false)} />
        )}
        {showEditModal && selectedClass && (
          <EditClassModal
            classItem={selectedClass}
            onClose={() => {
              setSelectedClass(null);
              setShowEditModal(false);
            }}
          />
        )}
        {showDeleteModal && selectedClass && (
          <DeleteClassModal
            classItem={selectedClass}
            onClose={() => {
              setSelectedClass(null);
              setShowDeleteModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
