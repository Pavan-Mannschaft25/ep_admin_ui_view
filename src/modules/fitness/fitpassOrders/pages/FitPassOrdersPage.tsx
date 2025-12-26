// src/modules/fitness/fitpassOrders/FitPassOrdersPage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchFitPassOrders,
  FitPassOrder,
  updateOrderStatus,
  updatePaymentStatus,
  updateCommissionStatus,
  holdOrder,
  releaseOrder,
} from "../fitpassOrdersSlice";
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
  FiCreditCard,
  FiUser,
} from "react-icons/fi";
import FitPassOrderDetailModal from "../components/FitPassOrderDetailModal";
import Pagination from "../../../../components/common/Pagination";

export default function FitPassOrdersPage() {
  const dispatch = useAppDispatch();
  // Add a fallback for selector in case state is not yet loaded
  const fitpassOrdersState = useAppSelector(
    (state) =>
      state.fitpassOrders || { orders: [], status: "idle", error: null }
  );
  const { orders = [], status = "idle" } = fitpassOrdersState;

  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<FitPassOrder | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Filters
  const [dateRangeFilter, setDateRangeFilter] = useState({
    start: "",
    end: "",
  });
  const [planFilter, setPlanFilter] = useState<string>("all");
  const [orderTypeFilter, setOrderTypeFilter] = useState<string>("all");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState<string>("all");
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>("all");
  const [referredByFilter, setReferredByFilter] = useState<string>("all");
  const [highCreditBalanceFilter, setHighCreditBalanceFilter] =
    useState<string>("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    if (status === "idle") dispatch(fetchFitPassOrders());
  }, [status, dispatch]);

  // Get unique values for filters
  const planNames = [...new Set(orders.map((order) => order.planName))];

  // Filter orders based on search and filters
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.userId.toLowerCase().includes(search.toLowerCase()) ||
      order.planName.toLowerCase().includes(search.toLowerCase());

    const matchesDateRange =
      (!dateRangeFilter.start || order.orderDate >= dateRangeFilter.start) &&
      (!dateRangeFilter.end || order.orderDate <= dateRangeFilter.end);

    const matchesPlan = planFilter === "all" || order.planName === planFilter;

    const matchesOrderType =
      orderTypeFilter === "all" || order.orderType === orderTypeFilter;

    const matchesPaymentStatus =
      paymentStatusFilter === "all" ||
      order.paymentStatus === paymentStatusFilter;

    const matchesOrderStatus =
      orderStatusFilter === "all" || order.orderStatus === orderStatusFilter;

    const matchesReferredBy =
      referredByFilter === "all" || order.referredBy === referredByFilter;

    const matchesHighCreditBalance =
      highCreditBalanceFilter === "all" ||
      (highCreditBalanceFilter === "yes" && order.highUnusedCredits) ||
      (highCreditBalanceFilter === "no" && !order.highUnusedCredits);

    return (
      matchesSearch &&
      matchesDateRange &&
      matchesPlan &&
      matchesOrderType &&
      matchesPaymentStatus &&
      matchesOrderStatus &&
      matchesReferredBy &&
      matchesHighCreditBalance
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
    planFilter,
    orderTypeFilter,
    paymentStatusFilter,
    orderStatusFilter,
    referredByFilter,
    highCreditBalanceFilter,
  ]);

  const handleRefresh = () => {
    dispatch(fetchFitPassOrders());
  };

  const handleViewDetails = (order: FitPassOrder) => {
    setSelectedOrder(order);
    setShowDetailModal(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUpdateOrderStatus = (
    order: FitPassOrder,
    newStatus: "Active" | "Pending" | "Failed" | "Cancelled"
  ) => {
    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to change order status of "${order.id}" to "${newStatus}"?`,
        confirmButtonText: `Yes, change to ${newStatus}`,
        onConfirm: () => {
          dispatch(updateOrderStatus({ id: order.id, status: newStatus }));
        },
      })
    );
  };

  const handleUpdatePaymentStatus = (
    order: FitPassOrder,
    newStatus: "Paid" | "Pending" | "Failed" | "Refunded"
  ) => {
    dispatch(
      showConfirmationModal({
        title: "Confirm Payment Status Change",
        message: `Are you sure you want to change payment status of "${order.id}" to "${newStatus}"?`,
        confirmButtonText: `Yes, change to ${newStatus}`,
        onConfirm: () => {
          dispatch(updatePaymentStatus({ id: order.id, status: newStatus }));
        },
      })
    );
  };

  const handleUpdateCommissionStatus = (
    order: FitPassOrder,
    newStatus: "Pending" | "Paid" | "Failed"
  ) => {
    dispatch(
      showConfirmationModal({
        title: "Confirm Commission Status Change",
        message: `Are you sure you want to change commission status of "${order.id}" to "${newStatus}"?`,
        confirmButtonText: `Yes, change to ${newStatus}`,
        onConfirm: () => {
          dispatch(updateCommissionStatus({ id: order.id, status: newStatus }));
        },
      })
    );
  };

  const handleHoldOrder = (order: FitPassOrder) => {
    dispatch(
      showConfirmationModal({
        title: "Hold Order",
        message: `Are you sure you want to hold order "${order.id}"?`,
        confirmButtonText: "Yes, hold order",
        onConfirm: () => {
          dispatch(holdOrder(order.id));
        },
      })
    );
  };

  const handleReleaseOrder = (order: FitPassOrder) => {
    dispatch(
      showConfirmationModal({
        title: "Release Order",
        message: `Are you sure you want to release order "${order.id}"?`,
        confirmButtonText: "Yes, release order",
        onConfirm: () => {
          dispatch(releaseOrder(order.id));
        },
      })
    );
  };

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-800";
      case "Pending":
        return "bg-amber-100 text-amber-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-100 text-emerald-800";
      case "Pending":
        return "bg-amber-100 text-amber-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      case "Refunded":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCommissionStatusColor = (status?: string) => {
    if (!status) return "";
    switch (status) {
      case "Paid":
        return "bg-emerald-100 text-emerald-800";
      case "Pending":
        return "bg-amber-100 text-amber-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Function to get special badges
  const getRiskIndicators = (order: FitPassOrder) => {
    const badges = [];

    if (order.highUnusedCredits) {
      badges.push({
        icon: <FiAlertTriangle className="text-xs" />,
        text: "High Unused Credits",
        color: "bg-amber-100 text-amber-800",
      });
    }

    if (order.repeatReferral) {
      badges.push({
        icon: <FiRefreshCw className="text-xs" />,
        text: "Repeat Referral",
        color: "bg-blue-100 text-blue-800",
      });
    }

    if (order.promoUsed) {
      badges.push({
        icon: <FiTag className="text-xs" />,
        text: "Promo Used",
        color: "bg-purple-100 text-purple-800",
      });
    }

    if (order.onHold) {
      badges.push({
        icon: <FiPause className="text-xs" />,
        text: "On Hold",
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
                FitPass Orders
              </h1>
              <p className="text-emerald-100 text-lg">
                Manage all FitPass subscription orders
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
                <p className="text-gray-500 text-sm font-medium">
                  Active Orders
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {orders.filter((o) => o.orderStatus === "Active").length}
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
                <p className="text-gray-500 text-sm font-medium">
                  Pending Orders
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {orders.filter((o) => o.orderStatus === "Pending").length}
                </p>
              </div>
              <div className="bg-amber-100 p-3 rounded-full">
                <FiClock className="text-amber-600 text-xl" />
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
                  ₹{orders.reduce((sum, o) => sum + o.amountPaid, 0).toFixed(0)}
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
                  placeholder="Search by Order ID, User ID, or Plan Name..."
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
                  value={planFilter}
                  onChange={(e) => setPlanFilter(e.target.value)}
                >
                  <option value="all">All Plans</option>
                  {planNames.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
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
                  value={orderTypeFilter}
                  onChange={(e) => setOrderTypeFilter(e.target.value)}
                >
                  <option value="all">All Order Types</option>
                  <option value="New">New</option>
                  <option value="Renewal">Renewal</option>
                  <option value="Upgrade">Upgrade</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiTag className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={paymentStatusFilter}
                  onChange={(e) => setPaymentStatusFilter(e.target.value)}
                >
                  <option value="all">All Payment Statuses</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                  <option value="Refunded">Refunded</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiCreditCard className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={orderStatusFilter}
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                >
                  <option value="all">All Order Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiFilter className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={referredByFilter}
                  onChange={(e) => setReferredByFilter(e.target.value)}
                >
                  <option value="all">All Referral Types</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Organic">Organic</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiUser className="h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={highCreditBalanceFilter}
                  onChange={(e) => setHighCreditBalanceFilter(e.target.value)}
                >
                  <option value="all">All Credit Balances</option>
                  <option value="yes">High Balance</option>
                  <option value="no">Normal Balance</option>
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
              <p className="mt-4 text-gray-600">Loading FitPass orders...</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                FitPass Orders ({filteredOrders.length})
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
                      User ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Type
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount Paid
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credits Issued
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credits Used
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credits Balance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Referred By
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commission
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentOrders.length === 0 ? (
                    <tr>
                      <td colSpan={15} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 p-4 rounded-full mb-4">
                            <FiActivity className="h-12 w-12 text-gray-400" />
                          </div>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">
                            {filteredOrders.length === 0
                              ? "No FitPass orders found"
                              : "No orders on this page"}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                            {search
                              ? "Try adjusting your search to find what you're looking for"
                              : filteredOrders.length === 0
                              ? "There are no FitPass orders available"
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
                            {getRiskIndicators(order)
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
                            {order.userId}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.planName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.orderType}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="text-sm text-gray-900">
                            ₹{order.amountPaid.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="text-sm text-gray-900">
                            {order.creditsIssued}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="text-sm text-gray-900">
                            {order.creditsUsed}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="text-sm text-gray-900">
                            {order.creditsBalance}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOrderStatusColor(
                              order.orderStatus
                            )}`}
                          >
                            {order.orderStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(
                              order.paymentStatus
                            )}`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.referredBy}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="text-sm text-gray-900">
                            {order.commissionAmount
                              ? `₹${order.commissionAmount.toFixed(2)}`
                              : "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleViewDetails(order)}
                            className="text-blue-600 hover:text-blue-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-blue-50"
                            title="View Details"
                          >
                            <FiEye className="text-lg" />
                          </button>
                          {order.orderStatus !== "Active" && (
                            <button
                              onClick={() =>
                                handleUpdateOrderStatus(order, "Active")
                              }
                              className="text-emerald-600 hover:text-emerald-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                              title="Mark as Active"
                            >
                              <FiCheckCircle className="text-lg" />
                            </button>
                          )}
                          {order.orderStatus === "Active" && !order.onHold && (
                            <button
                              onClick={() => handleHoldOrder(order)}
                              className="text-amber-600 hover:text-amber-900 mr-3 transition-colors duration-150 p-1 rounded-full hover:bg-amber-50"
                              title="Hold Order"
                            >
                              <FiPause className="text-lg" />
                            </button>
                          )}
                          {order.onHold && (
                            <button
                              onClick={() => handleReleaseOrder(order)}
                              className="text-emerald-600 hover:text-emerald-900 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                              title="Release Order"
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

        {/* Modal */}
        {showDetailModal && selectedOrder && (
          <FitPassOrderDetailModal
            order={selectedOrder}
            onClose={() => {
              setSelectedOrder(null);
              setShowDetailModal(false);
            }}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onUpdatePaymentStatus={handleUpdatePaymentStatus}
            onUpdateCommissionStatus={handleUpdateCommissionStatus}
          />
        )}
      </div>
    </div>
  );
}
