// src/modules/fitness/bookings/pages/ClassBookingsPage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchClassBookingOrders,
  ClassBookingOrder,
  updateOrderStatus,
  validateAttendance,
  holdPayout,
  releasePayout,
} from "../classBookingsSlice";
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
  FiAlertTriangle,
  FiPause,
  FiPlay,
  FiInfo,
} from "react-icons/fi";
import ClassBookingDetailModal from "../components/ClassBookingDetailModal";
import FitnessCenterSummaryModal from "../components/FitnessCenterSummaryModal";
import Pagination from "../../../../components/common/Pagination";

export default function ClassBookingsPage() {
  const dispatch = useAppDispatch();
  const { orders, status } = useAppSelector((state) => state.classBookings);
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<ClassBookingOrder | null>(
    null
  );
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  // Filters
  const [dateRangeFilter, setDateRangeFilter] = useState({
    start: "",
    end: "",
  });
  const [fitnessCenterFilter, setFitnessCenterFilter] = useState<string>("all");
  const [trainerFilter, setTrainerFilter] = useState<string>("all");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [modeFilter, setModeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [bookingCountFilter, setBookingCountFilter] = useState<string>("all");
  const [payoutFilter, setPayoutFilter] = useState<string>("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    if (status === "idle") dispatch(fetchClassBookingOrders());
  }, [status, dispatch]);

  // Get unique values for filters
  const fitnessCenters = [
    ...new Set(orders.map((order) => order.fitnessCenterName)),
  ];
  const trainers = [...new Set(orders.map((order) => order.trainerName))];
  const classNames = [...new Set(orders.map((order) => order.className))];

  // Filter orders based on search and filters
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.className.toLowerCase().includes(search.toLowerCase()) ||
      order.trainerName.toLowerCase().includes(search.toLowerCase()) ||
      order.fitnessCenterName.toLowerCase().includes(search.toLowerCase());

    const matchesDateRange =
      (!dateRangeFilter.start || order.orderDate >= dateRangeFilter.start) &&
      (!dateRangeFilter.end || order.orderDate <= dateRangeFilter.end);

    const matchesFitnessCenter =
      fitnessCenterFilter === "all" ||
      order.fitnessCenterName === fitnessCenterFilter;

    const matchesTrainer =
      trainerFilter === "all" || order.trainerName === trainerFilter;

    const matchesClass =
      classFilter === "all" || order.className === classFilter;

    const matchesMode = modeFilter === "all" || order.mode === modeFilter;

    const matchesStatus =
      statusFilter === "all" || order.orderStatus === statusFilter;

    const matchesBookingCount =
      bookingCountFilter === "all" ||
      (bookingCountFilter === "low" && order.bookingsCount < 8) ||
      (bookingCountFilter === "medium" &&
        order.bookingsCount >= 8 &&
        order.bookingsCount <= 15) ||
      (bookingCountFilter === "high" && order.bookingsCount > 15);

    const matchesPayout =
      payoutFilter === "all" ||
      (payoutFilter === "low" && order.trainerTotalPayout < 2000) ||
      (payoutFilter === "medium" &&
        order.trainerTotalPayout >= 2000 &&
        order.trainerTotalPayout <= 5000) ||
      (payoutFilter === "high" && order.trainerTotalPayout > 5000);

    return (
      matchesSearch &&
      matchesDateRange &&
      matchesFitnessCenter &&
      matchesTrainer &&
      matchesClass &&
      matchesMode &&
      matchesStatus &&
      matchesBookingCount &&
      matchesPayout
    );
  });

  // Calculate pagination values
  const totalItems = filteredOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    dateRangeFilter,
    fitnessCenterFilter,
    trainerFilter,
    classFilter,
    modeFilter,
    statusFilter,
    bookingCountFilter,
    payoutFilter,
  ]);

  const handleRefresh = () => {
    dispatch(fetchClassBookingOrders());
  };

  const handleViewDetails = (order: ClassBookingOrder) => {
    setSelectedOrder(order);
    setShowDetailModal(true);
  };

  const handleViewSummary = () => {
    setShowSummaryModal(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUpdateStatus = (
    order: ClassBookingOrder,
    newStatus: "Completed" | "Cancelled" | "No-show"
  ) => {
    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to change the status of order "${order.id}" to "${newStatus}"?`,
        confirmButtonText: `Yes, change to ${newStatus}`,
        onConfirm: () => {
          dispatch(updateOrderStatus({ id: order.id, status: newStatus }));
        },
      })
    );
  };

  const handleValidateAttendance = (order: ClassBookingOrder) => {
    dispatch(
      showConfirmationModal({
        title: "Validate Attendance",
        message: `Are you sure you want to validate attendance for order "${order.id}"?`,
        confirmButtonText: "Yes, validate",
        onConfirm: () => {
          dispatch(validateAttendance(order.id));
        },
      })
    );
  };

  const handleHoldPayout = (order: ClassBookingOrder) => {
    dispatch(
      showConfirmationModal({
        title: "Hold Payout",
        message: `Are you sure you want to hold the payout for order "${order.id}"?`,
        confirmButtonText: "Yes, hold payout",
        onConfirm: () => {
          dispatch(holdPayout(order.id));
        },
      })
    );
  };

  const handleReleasePayout = (order: ClassBookingOrder) => {
    dispatch(
      showConfirmationModal({
        title: "Release Payout",
        message: `Are you sure you want to release the payout for order "${order.id}"?`,
        confirmButtonText: "Yes, release payout",
        onConfirm: () => {
          dispatch(releasePayout(order.id));
        },
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "No-show":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Function to get special badges
  const getSpecialBadges = (order: ClassBookingOrder) => {
    const badges = [];

    if (order.lowBookingClass) {
      badges.push({
        icon: <FiAlertTriangle className="text-xs" />,
        text: "Low Booking",
        color: "bg-amber-100 text-amber-800",
      });
    }

    if (order.repeatedCancellations) {
      badges.push({
        icon: <FiXCircle className="text-xs" />,
        text: "Repeated Cancellations",
        color: "bg-red-100 text-red-800",
      });
    }

    if (order.highPayout) {
      badges.push({
        icon: <FiDollarSign className="text-xs" />,
        text: "High Payout",
        color: "bg-emerald-100 text-emerald-800",
      });
    }

    if (order.payoutOnHold) {
      badges.push({
        icon: <FiPause className="text-xs" />,
        text: "Payout On Hold",
        color: "bg-gray-100 text-gray-800",
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
                Class Booking Orders
              </h1>
              <p className="text-emerald-100 text-lg">
                Monitor and manage all fitness class bookings
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
                onClick={handleViewSummary}
                className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <FiTrendingUp className="text-lg" />
                <span>Center Summary</span>
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
                  Total Orders
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {orders.length}
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
                <p className="text-gray-500 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {orders.filter((o) => o.orderStatus === "Completed").length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiCheckCircle className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Cancelled</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {orders.filter((o) => o.orderStatus === "Cancelled").length}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <FiXCircle className="text-red-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Payout
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  ₹
                  {orders
                    .reduce((sum, o) => sum + o.trainerTotalPayout, 0)
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
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by Order ID, Class Name, Trainer, or Center..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <input
                  type="date"
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={dateRangeFilter.start}
                  onChange={(e) =>
                    setDateRangeFilter({
                      ...dateRangeFilter,
                      start: e.target.value,
                    })
                  }
                  placeholder="Start Date"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={dateRangeFilter.end}
                  onChange={(e) =>
                    setDateRangeFilter({
                      ...dateRangeFilter,
                      end: e.target.value,
                    })
                  }
                  placeholder="End Date"
                />
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={fitnessCenterFilter}
                  onChange={(e) => setFitnessCenterFilter(e.target.value)}
                >
                  <option value="all">All Centers</option>
                  {fitnessCenters.map((center) => (
                    <option key={center} value={center}>
                      {center}
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
                  value={trainerFilter}
                  onChange={(e) => setTrainerFilter(e.target.value)}
                >
                  <option value="all">All Trainers</option>
                  {trainers.map((trainer) => (
                    <option key={trainer} value={trainer}>
                      {trainer}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiUsers className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value)}
                >
                  <option value="all">All Classes</option>
                  {classNames.map((className) => (
                    <option key={className} value={className}>
                      {className}
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
                  value={modeFilter}
                  onChange={(e) => setModeFilter(e.target.value)}
                >
                  <option value="all">All Modes</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiWifi className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="No-show">No-show</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiFilter className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={bookingCountFilter}
                  onChange={(e) => setBookingCountFilter(e.target.value)}
                >
                  <option value="all">All Bookings</option>
                  <option value="low">Low (&lt;8)</option>
                  <option value="medium">Medium (8-15)</option>
                  <option value="high">High (&gt;15)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiUsers className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={payoutFilter}
                  onChange={(e) => setPayoutFilter(e.target.value)}
                >
                  <option value="all">All Payouts</option>
                  <option value="low">Low (&lt;₹2k)</option>
                  <option value="medium">Medium (₹2k-₹5k)</option>
                  <option value="high">High (&gt;₹5k)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiDollarSign className="h-4 w-4" />
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
              <p className="mt-4 text-gray-600">
                Loading class booking orders...
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Class Booking Orders ({filteredOrders.length})
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
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fitness Center
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trainer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Class
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mode
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credits
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trainer Payout
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Platform Margin
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
                  {currentOrders.length === 0 ? (
                    <tr>
                      <td colSpan={13} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 p-4 rounded-full mb-4">
                            <FiActivity className="h-12 w-12 text-gray-400" />
                          </div>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">
                            {filteredOrders.length === 0
                              ? "No class booking orders found"
                              : "No orders on this page"}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                            {search
                              ? "Try adjusting your search to find what you're looking for"
                              : filteredOrders.length === 0
                              ? "There are no class booking orders available"
                              : "Try a different page"}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {order.id}
                          </div>
                          <div className="flex gap-1 mt-1">
                            {getSpecialBadges(order)
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
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(order.orderDate).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.fitnessCenterName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.trainerName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.className}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(order.classDate).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            {order.classTime}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {order.mode === "Online" ? (
                              <FiWifi className="text-blue-500 mr-1" />
                            ) : (
                              <FiWifiOff className="text-emerald-500 mr-1" />
                            )}
                            <span className="text-sm text-gray-900">
                              {order.mode}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.bookingsCount}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.totalCreditsConsumed}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ₹{order.trainerTotalPayout.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ₹{order.platformMargin.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              order.orderStatus
                            )}`}
                          >
                            {order.orderStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleViewDetails(order)}
                            className="text-blue-600 hover:text-blue-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-blue-50"
                            title="View Details"
                          >
                            <FiEye className="text-lg" />
                          </button>
                          {order.orderStatus !== "Completed" && (
                            <button
                              onClick={() =>
                                handleUpdateStatus(order, "Completed")
                              }
                              className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                              title="Mark as Completed"
                            >
                              <FiCheckCircle className="text-lg" />
                            </button>
                          )}
                          {order.orderStatus === "Completed" &&
                            !order.attendanceValidated && (
                              <button
                                onClick={() => handleValidateAttendance(order)}
                                className="text-blue-600 hover:text-blue-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-blue-50"
                                title="Validate Attendance"
                              >
                                <FiCheckCircle className="text-lg" />
                              </button>
                            )}
                          {order.payoutEligible && !order.payoutOnHold && (
                            <button
                              onClick={() => handleHoldPayout(order)}
                              className="text-amber-600 hover:text-amber-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-amber-50"
                              title="Hold Payout"
                            >
                              <FiPause className="text-lg" />
                            </button>
                          )}
                          {order.payoutOnHold && (
                            <button
                              onClick={() => handleReleasePayout(order)}
                              className="text-emerald-600 hover:text-emerald-900 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                              title="Release Payout"
                            >
                              <FiPlay className="text-lg" />
                            </button>
                          )}
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
        {showDetailModal && selectedOrder && (
          <ClassBookingDetailModal
            order={selectedOrder}
            onClose={() => {
              setSelectedOrder(null);
              setShowDetailModal(false);
            }}
          />
        )}
        {showSummaryModal && (
          <FitnessCenterSummaryModal
            orders={orders}
            onClose={() => setShowSummaryModal(false)}
          />
        )}
      </div>
    </div>
  );
}
