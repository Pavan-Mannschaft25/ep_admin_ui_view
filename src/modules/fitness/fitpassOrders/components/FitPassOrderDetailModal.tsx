// src/modules/fitness/fitpassOrders/components/FitPassOrderDetailModal.tsx
import React, { useState } from "react";
import { FitPassOrder } from "../../fitpassOrdersSlice";
import {
  FiX,
  FiInfo,
  FiDollarSign,
  FiTag,
  FiUser,
  FiCreditCard,
  FiCheckCircle,
  FiXCircle,
  FiAlertTriangle,
  FiRefreshCw,
  FiCalendar,
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";

interface FitPassOrderDetailModalProps {
  order: FitPassOrder;
  onClose: () => void;
  onUpdateOrderStatus: (
    order: FitPassOrder,
    status: "Active" | "Pending" | "Failed" | "Cancelled"
  ) => void;
  onUpdatePaymentStatus: (
    order: FitPassOrder,
    status: "Paid" | "Pending" | "Failed" | "Refunded"
  ) => void;
  onUpdateCommissionStatus: (
    order: FitPassOrder,
    status: "Pending" | "Paid" | "Failed"
  ) => void;
}

const FitPassOrderDetailModal: React.FC<FitPassOrderDetailModalProps> = ({
  order,
  onClose,
  onUpdateOrderStatus,
  onUpdatePaymentStatus,
  onUpdateCommissionStatus,
}) => {
  const [activeTab, setActiveTab] = useState<
    "summary" | "credits" | "trainer" | "payment"
  >("summary");

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
        icon: <FiXCircle className="text-xs" />,
        text: "On Hold",
        color: "bg-gray-100 text-gray-800",
      });
    }

    return badges;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">FitPass Order Details</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Risk Indicators */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiAlertTriangle className="mr-2" />
              Risk Indicators
            </h3>
            <div className="flex flex-wrap gap-2">
              {getRiskIndicators(order).map((badge, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium ${badge.color}`}
                >
                  {badge.icon}
                  <span className="ml-1">{badge.text}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("summary")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "summary"
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Order Summary
              </button>
              <button
                onClick={() => setActiveTab("credits")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "credits"
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Credits Info
              </button>
              <button
                onClick={() => setActiveTab("trainer")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "trainer"
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                disabled={!order.trainerId}
              >
                Trainer & Commission
              </button>
              <button
                onClick={() => setActiveTab("payment")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "payment"
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Payment Info
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "summary" && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FiInfo className="mr-2" />
                Order Summary
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="text-lg font-medium text-gray-900">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">User ID</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.userId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Plan Name</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.planName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Type</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.orderType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amount Paid</p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{order.amountPaid.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Discount Applied</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.discountApplied > 0
                        ? `₹${order.discountApplied.toFixed(2)}`
                        : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "credits" && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FiDollarSign className="mr-2" />
                Credits Info
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                      <FiTag className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Credits Issued</p>
                      <p className="text-lg font-medium text-gray-900">
                        {order.creditsIssued}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                      <FiCheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Credits Used</p>
                      <p className="text-lg font-medium text-gray-900">
                        {order.creditsUsed}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                      <FiDollarSign className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Credits Balance</p>
                      <p className="text-lg font-medium text-gray-900">
                        {order.creditsBalance}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                      <FaIndianRupeeSign className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Credit Value</p>
                      <p className="text-lg font-medium text-gray-900">
                        ₹{order.creditValue.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                      <FiAlertTriangle className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Liability Amount</p>
                      <p className="text-lg font-medium text-gray-900">
                        ₹{order.liabilityAmount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "trainer" && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FiUser className="mr-2" />
                Trainer & Commission
              </h3>
              {order.trainerId ? (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Trainer ID</p>
                      <p className="text-lg font-medium text-gray-900">
                        {order.trainerId}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Trainer Name</p>
                      <p className="text-lg font-medium text-gray-900">
                        {order.trainerName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Referral Code</p>
                      <p className="text-lg font-medium text-gray-900">
                        {order.referralCode}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Commission %</p>
                      <p className="text-lg font-medium text-gray-900">
                        {order.commissionPercentage}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Commission Amount</p>
                      <p className="text-lg font-medium text-gray-900">
                        ₹{order.commissionAmount?.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Commission Status</p>
                      <div className="mt-1">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCommissionStatusColor(
                            order.commissionStatus
                          )}`}
                        >
                          {order.commissionStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-gray-500">
                    No trainer information available for this order.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "payment" && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FiCreditCard className="mr-2" />
                Payment Info
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Payment Mode</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.paymentMode}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Gateway Transaction ID
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.gatewayTransactionId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Status</p>
                    <div className="mt-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(
                          order.paymentStatus
                        )}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={() =>
                onUpdateOrderStatus(
                  order,
                  order.orderStatus === "Active" ? "Pending" : "Active"
                )
              }
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              {order.orderStatus === "Active" ? "Deactivate" : "Activate"}
            </button>
            <button
              onClick={() =>
                onUpdatePaymentStatus(
                  order,
                  order.paymentStatus === "Paid" ? "Pending" : "Paid"
                )
              }
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {order.paymentStatus === "Paid"
                ? "Mark as Pending"
                : "Mark as Paid"}
            </button>
            {order.commissionStatus && (
              <button
                onClick={() =>
                  onUpdateCommissionStatus(
                    order,
                    order.commissionStatus === "Paid" ? "Pending" : "Paid"
                  )
                }
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                {order.commissionStatus === "Paid"
                  ? "Mark as Pending"
                  : "Mark as Paid"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitPassOrderDetailModal;
