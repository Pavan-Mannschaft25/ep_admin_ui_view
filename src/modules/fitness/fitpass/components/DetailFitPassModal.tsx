// src/modules/fitness/fitpass/components/DetailFitPassModal.tsx
import React from "react";
import { FitPassPlan } from "../fitpassSlice";
import {
  FiX,
  FiInfo,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiActivity,
  FiCalendar,
  FiClock,
  FiTag,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";

interface DetailFitPassModalProps {
  plan: FitPassPlan;
  onClose: () => void;
}

const DetailFitPassModal: React.FC<DetailFitPassModalProps> = ({
  plan,
  onClose,
}) => {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">FitPass Plan Details</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Plan Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiInfo className="mr-2" />
              Plan Summary
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-16 w-16">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={plan.image}
                      alt={plan.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {plan.name}
                    </h4>
                    <p className="text-sm text-gray-500">ID: #{plan.id}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {plan.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Credits Included</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.credits} credits
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Plan Price</p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{plan.price}
                      {plan.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₹{plan.originalPrice}
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Validity</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.noExpiry
                        ? "No expiry"
                        : `${plan.validityDays} days`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <div className="flex items-center mt-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          plan.status
                        )}`}
                      >
                        {plan.status}
                      </span>
                      <span
                        className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(
                          plan.planCategory
                        )}`}
                      >
                        {plan.planCategory}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Created Date</p>
                  <p className="text-lg font-medium text-gray-900">
                    {new Date(plan.created).toLocaleDateString()} at{" "}
                    {new Date(plan.created).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Metrics */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiUsers className="mr-2" />
              Subscription Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <FiUsers className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Total Subscribers</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.totalSubscribers || 0}
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
                    <p className="text-sm text-gray-500">Active Subscribers</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.activeSubscribers || 0}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                    <FiXCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Expired Subscribers</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.expiredSubscribers || 0}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                    <FiTrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Renewal Rate</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.renewalRate || 0}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue & Liability */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiDollarSign className="mr-2" />
              Revenue & Liability
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                    <FiDollarSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{plan.totalRevenue?.toFixed(2) || 0}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                    <FiAlertCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Deferred Liability</p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{plan.deferredLiability?.toFixed(2) || 0}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <FiActivity className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Credits Issued</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.creditsIssued || 0}
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
                    <p className="text-sm text-gray-500">Credits Balance</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.creditsBalance || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Commission Snapshot */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiUsers className="mr-2" />
              Trainer Commission Snapshot
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                    <FiDollarSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">
                      Total Commission Paid
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{plan.totalCommissionPaid?.toFixed(2) || 0}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                    <FiClock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Pending Commission</p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{plan.pendingCommission?.toFixed(2) || 0}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                    <FiTrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Commission Rate</p>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.trainerCommission}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {plan.topReferringTrainers &&
              plan.topReferringTrainers.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Top Referring Trainers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {plan.topReferringTrainers.map((trainer, index) => (
                      <span
                        key={index}
                        className="inline-flex px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full"
                      >
                        {trainer}
                      </span>
                    ))}
                  </div>
                </div>
              )}
          </div>

          {/* Additional Details */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiTag className="mr-2" />
              Additional Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2">Usage Rules</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-900">
                    Max Credits Per Day: {plan.maxCreditsPerDay || "N/A"}
                  </p>
                  <p className="text-sm text-gray-900">
                    Max Classes Per Day: {plan.maxClassesPerDay || "N/A"}
                  </p>
                  <p className="text-sm text-gray-900">
                    Online Classes:{" "}
                    {plan.onlineSessions ? "Allowed" : "Not Allowed"}
                  </p>
                  <p className="text-sm text-gray-900">
                    Offline Classes:{" "}
                    {plan.offlineSessions ? "Allowed" : "Not Allowed"}
                  </p>
                  <p className="text-sm text-gray-900">
                    Auto-Renew: {plan.autoRenew ? "Enabled" : "Disabled"}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2">
                  Eligible Fitness Categories
                </p>
                <div className="flex flex-wrap gap-1">
                  {plan.eligibleFitnessCategories?.map((category, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFitPassModal;
