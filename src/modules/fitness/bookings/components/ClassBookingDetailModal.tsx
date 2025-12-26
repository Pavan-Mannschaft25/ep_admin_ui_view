// src/modules/fitness/classBookings/components/ClassBookingDetailModal.tsx
import React from "react";
import { ClassBookingOrder } from "../classBookingsSlice";
import {
  FiX,
  FiInfo,
  FiActivity,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiWifi,
  FiWifiOff,
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";

interface ClassBookingDetailModalProps {
  order: ClassBookingOrder;
  onClose: () => void;
}

const ClassBookingDetailModal: React.FC<ClassBookingDetailModalProps> = ({
  order,
  onClose,
}) => {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Class Booking Details</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Section 1: Class Info */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiInfo className="mr-2" />
              Class Information
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Class ID</p>
                  <p className="text-lg font-medium text-gray-900">
                    {order.classId}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Class Name</p>
                  <p className="text-lg font-medium text-gray-900">
                    {order.className}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fitness Category</p>
                  <p className="text-lg font-medium text-gray-900">
                    {order.fitnessCategory}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mode</p>
                  <div className="flex items-center mt-1">
                    {order.mode === "Online" ? (
                      <FiWifi className="text-blue-500 mr-1" />
                    ) : (
                      <FiWifiOff className="text-emerald-500 mr-1" />
                    )}
                    <span className="text-lg font-medium text-gray-900">
                      {order.mode}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Class Date & Time</p>
                  <p className="text-lg font-medium text-gray-900">
                    {new Date(order.classDate).toLocaleDateString()} at{" "}
                    {order.classTime}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-lg font-medium text-gray-900">
                    {order.duration} minutes
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fitness Center</p>
                  <p className="text-lg font-medium text-gray-900">
                    {order.fitnessCenterName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Trainer</p>
                  <p className="text-lg font-medium text-gray-900">
                    {order.trainerName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Booking Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiCalendar className="mr-2" />
              Booking Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <FiActivity className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Total Bookings</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.bookingsCount}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                    <FiDollarSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Credits per Booking</p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.creditsPerBooking}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                    <FiActivity className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">
                      Total Credits Consumed
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      {order.totalCreditsConsumed}
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
                    <p className="text-sm text-gray-500">
                      Average Price per Booking
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{order.averagePricePerBooking.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Financial Breakdown */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiDollarSign className="mr-2" />
              Financial Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                    <FaIndianRupeeSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">
                      Trainer Price per Booking
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{order.trainerPricePerBooking.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                    <FiDollarSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">
                      Trainer Total Payout
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{order.trainerTotalPayout.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <FiDollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Platform Margin</p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{order.platformMargin.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                    <FiAlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Discount Impact</p>
                    <p className="text-lg font-medium text-gray-900">
                      ₹{order.discountImpact.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Status & Validation */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiCheckCircle className="mr-2" />
              Status & Validation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                    <FiCheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Class Status</p>
                    <div className="mt-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          order.classStatus
                        )}`}
                      >
                        {order.classStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <FiCheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">
                      Attendance Validated
                    </p>
                    <div className="mt-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.attendanceValidated
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.attendanceValidated ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                    <FiDollarSign className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Payout Eligible</p>
                    <div className="mt-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.payoutEligible
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.payoutEligible ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                    <FiCalendar className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Payout Week</p>
                    <p className="text-lg font-medium text-gray-900">
                      {new Date(order.payoutWeek).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Flags */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FiAlertCircle className="mr-2" />
              Special Flags
            </h3>
            <div className="flex flex-wrap gap-2">
              {order.lowBookingClass && (
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-amber-100 text-amber-800">
                  <FiAlertTriangle className="mr-1" />
                  Low Booking Class
                </span>
              )}
              {order.repeatedCancellations && (
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-800">
                  <FiXCircle className="mr-1" />
                  Repeated Cancellations
                </span>
              )}
              {order.highPayout && (
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-emerald-100 text-emerald-800">
                  <FiDollarSign className="mr-1" />
                  High Payout
                </span>
              )}
              {order.payoutOnHold && (
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                  <FiAlertCircle className="mr-1" />
                  Payout On Hold
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassBookingDetailModal;
